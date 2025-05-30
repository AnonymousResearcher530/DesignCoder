from typing import Union
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options
import os
from PIL import Image, ImageChops, ImageDraw, ImageEnhance 
from tqdm.auto import tqdm
import time
import re
import base64
import io
from openai import OpenAI
import numpy as np
# from skimage.metrics import structural_similarity as ssim
import google.generativeai as genai
import json
import requests


def take_screenshot(driver, filename):
    driver.save_full_page_screenshot(filename)


def get_driver(file=None, headless=True, string=None, window_size=(1920, 1080)):
    assert file or string, "You must provide a file or a string"
    options = Options()
    if headless:
        options.add_argument("-headless")
        driver = webdriver.Firefox(options=options)  # or use another driver
    else:
        driver = webdriver.Firefox(options=options)

    if not string:
        driver.get("file:///" + os.getcwd() + "/" + file)
    else:
        string = base64.b64encode(string.encode('utf-8')).decode()
        driver.get("data:text/html;base64," + string)

    driver.set_window_size(window_size[0], window_size[1])
    return driver

import time
class Bot:
    def __init__(self, key_path, patience=3) -> None:
        if os.path.exists(key_path):
            with open(key_path, "r") as f:
                self.key = f.read().replace("\n", "")
        else:
            self.key = key_path
        self.patience = patience
    
    def ask(self):
        raise NotImplementedError
    
    def try_ask(self, question, image_encoding=None, verbose=False):
        for i in range(self.patience):
            try:
                return self.ask(question, image_encoding, verbose)
            except Exception as e:
                print(e, "waiting for 5 seconds")
                time.sleep(5)
        return None


class Gemini(Bot):
    def __init__(self, key_path, patience=3) -> None:
        super().__init__(key_path, patience)
        GOOGLE_API_KEY= self.key
        genai.configure(api_key=GOOGLE_API_KEY)
        self.name = "Gemini"
        self.file_count = 0
        
    def ask(self, question, image_encoding=None, verbose=False):
        model = genai.GenerativeModel('gemini-1.5-flash-latest')

        if verbose:
            print(f"##################{self.file_count}##################")
            print("question:\n", question)

        if image_encoding:
            img = base64.b64decode(image_encoding)
            img = Image.open(io.BytesIO(img))
            response = model.generate_content([question, img], request_options={"timeout": 3000}) 
        else:    
            response = model.generate_content(question, request_options={"timeout": 3000})
        response.resolve()

        if verbose:
            print("####################################")
            print("response:\n", response.text)
            self.file_count += 1

        return response.text





class GPT4(Bot):
    def __init__(self, key_path, patience=3, model="gpt-4o") -> None:
        super().__init__(key_path, patience)
        self.client = OpenAI(api_key=self.key)
        self.name="gpt4"
        self.model = model
        
    def ask(self, question, image_encoding=None, verbose=False):
        
        if image_encoding:
            content =    {
            "role": "user",
            "content": [
                {"type": "text", "text": question},
                {
                "type": "image_url",
                "image_url": {
                    "url": f"data:image/png;base64,{image_encoding}",
                },
                },
            ],
            }
        else:
            content = {"role": "user", "content": question}
        response = self.client.chat.completions.create(
        model=self.model,
        messages=[
         content
        ],
        max_tokens=4096,
        temperature=0,
        seed=42,
        )
        response = response.choices[0].message.content
        if verbose:
            print("####################################")
            print("question:\n", question)
            print("####################################")
            print("response:\n", response)
            print("seed used: 42")
            # img = base64.b64decode(image_encoding)
            # img = Image.open(io.BytesIO(img))
            # img.show()
        return response
    

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options
import base64
from single_file import single_file
from tqdm.auto import tqdm
import os
from PIL import Image, ImageDraw, ImageChops
from utils import *

def num_of_nodes(driver, area="body", element=None):
    # number of nodes in body
    element = driver.find_element(By.TAG_NAME, area) if not element else element
    script = """
    function get_number_of_nodes(base) {
        var count = 0;
        var queue = [];
        queue.push(base);
        while (queue.length > 0) {
            var node = queue.shift();
            count += 1;
            var children = node.children;
            for (var i = 0; i < children.length; i++) {
                queue.push(children[i]);
            }
        }
        return count;
    }
    return get_number_of_nodes(arguments[0]);
    """
    return driver.execute_script(script, element)

measure_time = {
    "script": 0,
    "screenshot": 0,
    "comparison": 0,
    "open image": 0,
    "hash": 0,
}


import hashlib
import mmap

def compute_hash(image_path):
    hash_md5 = hashlib.md5()
    with open(image_path, "rb") as f:
        # Use memory-mapped file for efficient reading
        with mmap.mmap(f.fileno(), length=0, access=mmap.ACCESS_READ) as mm:
            hash_md5.update(mm)
    return hash_md5.hexdigest()

def are_different_fast(img1_path, img2_path):
    # a extremely fast algorithm to determine if two images are different,
    # only compare the size and the hash of the image
    return compute_hash(img1_path) != compute_hash(img2_path)

str2base64 = lambda s: base64.b64encode(s.encode('utf-8')).decode()

import time

def simplify_graphic(driver, element, progress_bar=None, img_name={"origin": "origin.png", "after": "after.png"}):
    """utility for simplify_html, simplify the html by removing elements that are not visible in the screenshot"""
    children = element.find_elements(By.XPATH, "./*")
    deletable = True
    # check childern
    if len(children) > 0:
        for child in children:
            deletable *= simplify_graphic(driver, child, progress_bar=progress_bar, img_name=img_name)
    # check itself
    
    if deletable:
        original_html = driver.execute_script("return arguments[0].outerHTML;", element)

        tick = time.time()
        driver.execute_script("""
            var element = arguments[0];
            var attrs = element.attributes;
            while(attrs.length > 0) {
                element.removeAttribute(attrs[0].name);
            }
            element.innerHTML = '';""", element)
        measure_time["script"] += time.time() - tick
        tick = time.time()
        driver.save_full_page_screenshot(img_name["after"])
        measure_time["screenshot"] += time.time() - tick
        tick = time.time()
        deletable = not are_different_fast(img_name["origin"], img_name["after"])
        measure_time["comparison"] += time.time() - tick

        if not deletable:
            # be careful with children vs child_node and assining outer html to element without parent
            driver.execute_script("arguments[0].outerHTML = arguments[1];", element, original_html)
        else:
            driver.execute_script("arguments[0].innerHTML = 'MockElement!';", element)
            # set visible to false
            driver.execute_script("arguments[0].style.display = 'none';", element)
    if progress_bar:
        progress_bar.update(1)

    return deletable
            
def simplify_html(fname, save_name, pbar=True, area="html", headless=True):
    """simplify the html file and save the result to save_name, return the compression rate of the html file after simplification"""
    # copy the fname as save_name
    
    driver = get_driver(file=fname, headless=headless)
    print("driver initialized")
    original_nodes = num_of_nodes(driver, area)
    bar = tqdm(total=original_nodes) if pbar else None
    compression_rate = 1
    driver.save_full_page_screenshot(f"{fname}_origin.png")
    try:
        simplify_graphic(driver, driver.find_element(By.TAG_NAME, area), progress_bar=bar, img_name={"origin": f"{fname}_origin.png", "after": f"{fname}_after.png"})
        elements = driver.find_elements(By.XPATH, "//*[text()='MockElement!']")

        # Iterate over the elements and remove them from the DOM
        for element in elements:
            driver.execute_script("""
                var elem = arguments[0];
                elem.parentNode.removeChild(elem);
            """, element)
        
        compression_rate = num_of_nodes(driver, area) / original_nodes
        with open(save_name, "w", encoding="utf-8") as f:
            f.write(driver.execute_script("return document.documentElement.outerHTML;"))
    except Exception as e:
        print(e, fname)
    # remove images
    driver.quit()

    os.remove(f"{fname}_origin.png")
    os.remove(f"{fname}_after.png")
    return compression_rate


# Function to encode the image in base64
def encode_image(image):
    if type(image) == str:
        try: 
            with open(image, "rb") as image_file:
                encoding = base64.b64encode(image_file.read()).decode('utf-8')
        except Exception as e:
            print(e)
            with open(image, "r", encoding="utf-8") as image_file:
                encoding = base64.b64encode(image_file.read()).decode('utf-8')
        return encoding
    
    else:
        buffered = io.BytesIO()
        image.save(buffered, format="PNG")
        return base64.b64encode(buffered.getvalue()).decode('utf-8')


from PIL import Image, ImageDraw, ImageFont
import random
class FakeBot(Bot):
    def __init__(self, key_path, patience=1) -> None:
        self.name = "FakeBot"
        pass
        
    def ask(self, question, image_encoding=None, verbose=False):
        print(question)
        if image_encoding:
            pass
            # img = base64.b64decode(image_encoding)
            # img = Image.open(io.BytesIO(img))
            # "The bounding box is: (xx, xx, xx, xx)"
            # bbox = re.findall(r"(\([\d]+, [\d]+, [\d]+, [\d]+\))", question)
            # draw = ImageDraw.Draw(img)
            # draw.rectangle(eval(bbox[0]), outline="red", width=5)
            # draw.text((10, 10), question, fill="green")
            # img.show()
            # if random.random() > 0.5:
            #     raise Exception("I am not able to do this")
        return f"```html \nxxxxxxxxxxxxxxxxxxx\n```"


"""Observation on methods:
1. Smaller screenshot gives more accurate result (least hilluciation)
2. It will hillusinate on each integration (do integration less, keep original pieces)
3. It cannot combine code well
4. It should do at least as good as direct prompting
"""  


from abc import ABC, abstractmethod
import random

class ImgNode(ABC):
    # self.img: the image of the node
    # self.bbox: the bounding box of the node
    # self.children: the children of the node

    @abstractmethod
    def get_img(self):
        pass


class ImgSegmentation(ImgNode):
    def __init__(self, img: Union[str, Image.Image], bbox=None, children=None, max_depth=None) -> None:
        if type(img) == str:
            img = Image.open(img)
        self.img = img
        self.bbox = (0, 0, img.size[0], img.size[1]) if not bbox else bbox
        self.children = children if children else []
        
        if max_depth:
            self.init_tree(max_depth)
        self.depth = self.get_depth()

    def init_tree(self, max_depth):
        def _init_tree(node, max_depth, cur_depth=0):
            if cur_depth == max_depth:
                return
            cuts = node.cut_img_bbox(node.img, node.bbox, line_direct="x")
            if len(cuts) == 0:
                cuts = node.cut_img_bbox(node.img, node.bbox, line_direct="y")

            # print(cuts)
            for cut in cuts:
                node.children.append(ImgSegmentation(node.img, cut, []))

            for child in node.children:
                _init_tree(child, max_depth, cur_depth + 1)

        _init_tree(self, max_depth)

    def get_img(self, cut_out=False, outline=(0, 255, 0)):
        if cut_out:
            return self.img.crop(self.bbox)
        else:
            img_draw = self.img.copy()
            draw = ImageDraw.Draw(img_draw)
            draw.rectangle(self.bbox, outline=outline, width=5)
            return img_draw
    
    def display_tree(self):
        # draw a tree structure on the image, for each tree level, draw a different color
        def _display_tree(node, draw, color=(255, 0, 0), width=5):
            # deep copy the image
            draw.rectangle(node.bbox, outline=color, width=width)
            for child in node.children:
                _display_tree(child, draw, color=tuple([int(random.random() * 255) for i in range(3)]), width=max(1, width))

        img_draw = self.img.copy()
        draw = ImageDraw.Draw(img_draw)
        for child in self.children:
            _display_tree(child, draw)
        img_draw.show()

    def get_depth(self):
        def _get_depth(node):
            if node.children == []:
                return 1
            return 1 + max([_get_depth(child) for child in node.children])
        return _get_depth(self)
    
    def is_leaf(self):
        return self.children == []
    
    def to_json(self, path=None):
        '''
        [
            { "bbox": [left, top, right, bottom],
                "level": the level of the node,},
            { "bbox": [left, top, right, bottom],
            "level": the level of the node,}
            ...
        ]
        '''
        # use bfs to traverse the tree
        res = []
        queue = [(self, 0)]
        while queue:
            node, level = queue.pop(0)
            res.append({"bbox": node.bbox, "level": level})
            for child in node.children:
                queue.append((child, level + 1))
        if path:
            with open(path, "w") as f:
                json.dump(res, f, indent=4)
        return res

    @staticmethod
    def cut_img_bbox(img, bbox, var_thresh=60, diff_thresh=5, diff_portion=0.3, line_direct="x", verbose=False, save_cut=False):
        """cut the the area of interest specified by bbox (left, top, right, bottom), return a list of bboxes of the cut image."""

        def soft_separation_lines(img, bbox=None, var_thresh=60, diff_thresh=5, diff_portion=0.3, sliding_window=30):
            """return separation lines (relative to whole image) in the area of interest specified by bbox (left, top, right, bottom). 
            Good at identifying blanks and boarders, but not explicit lines. 
            Assume the image is already rotated if necessary, all lines are in x direction.
            Boundary lines are included."""
            img_array = np.array(img.convert("L"))
            img_array = img_array if bbox is None else img_array[bbox[1]:bbox[3]+1, bbox[0]:bbox[2]+1]
            offset = 0 if bbox is None else bbox[1]
            lines = []
            for i in range(1 + sliding_window, len(img_array) - 1):
                upper = img_array[i-sliding_window-1]
                window = img_array[i-sliding_window:i]
                lower = img_array[i]
                is_blank = np.var(window) < var_thresh
                # content width is larger than 33% of the width
                is_boarder_top = np.mean(np.abs(upper - window[0]) > diff_thresh) > diff_portion
                is_boarder_bottom = np.mean(np.abs(lower - window[-1]) > diff_thresh) > diff_portion
                if is_blank and (is_boarder_top or is_boarder_bottom):
                    line = i if is_boarder_bottom else i - sliding_window
                    lines.append(line + offset)
            return sorted(lines)

        def hard_separation_lines(img, bbox=None, var_thresh=60, diff_thresh=5, diff_portion=0.3):
            """return separation lines (relative to whole image) in the area of interest specified by bbox (left, top, right, bottom). 
            Good at identifying explicit lines. 
            Assume the image is already rotated if necessary, all lines are in x direction
            Boundary lines are included."""
            img_array = np.array(img.convert("L"))
            img_array = img_array if bbox is None else img_array[bbox[1]:bbox[3]+1, bbox[0]:bbox[2]+1]
            offset = 0 if bbox is None else bbox[1]
            prev_row = None
            lines = []
            # loop through the image array
            for i in range(len(img_array)):
                row = img_array[i]
                # if the row is too uniform, it's probably a line
                if np.var(img_array[i]) < var_thresh:
                    if prev_row is not None:
                        # the portion of two rows differ more that diff_thresh is larger than diff_portion
                        if np.mean(np.abs(row - prev_row) > diff_thresh) > diff_portion:
                            lines.append(i + offset)
                    prev_row = row
            return lines

        def new_bbox_after_rotate90(img, bbox, counterclockwise=True):
            """return the new coordinate of the bbox after rotating 90 degree, based on the original image."""
            if counterclockwise:
                # the top right corner of the original image becomes the origin of the coordinate after rotating 90 degree
                top_right = (img.size[0], 0)
                # change the origin
                bbox = (bbox[0] - top_right[0], bbox[1] - top_right[1], bbox[2] - top_right[0], bbox[3] - top_right[1])
                # rotate the bbox 90 degree counterclockwise (x direction change sign)
                bbox = (bbox[1], -bbox[2], bbox[3], -bbox[0])
            else:
                # the bottom left corner of the original image becomes the origin of the coordinate after rotating 90 degree
                bottom_left = (0, img.size[1])
                # change the origin
                bbox = (bbox[0] - bottom_left[0], bbox[1] - bottom_left[1], bbox[2] - bottom_left[0], bbox[3] - bottom_left[1])
                # rotate the bbox 90 degree clockwise (y direction change sign)
                bbox = (-bbox[3], bbox[0], -bbox[1], bbox[2])
            return bbox
        
        assert line_direct in ["x", "y"], "line_direct must be 'x' or 'y'"
        img = ImageEnhance.Sharpness(img).enhance(6)
        bbox = bbox if line_direct == "x" else new_bbox_after_rotate90(img, bbox, counterclockwise=True) # based on the original image
        img = img if line_direct == "x" else img.rotate(90, expand=True)
        lines = soft_separation_lines(img, bbox, var_thresh, diff_thresh, diff_portion)
        lines += hard_separation_lines(img, bbox, var_thresh, diff_thresh, diff_portion)
        if lines == []:
            return []
        lines = sorted(list(set([bbox[1],] + lines + [bbox[3],]))) # account for the beginning and the end of the image
        # list of images cut by the lines
        cut_imgs = []
        for i in range(1, len(lines)):
            cut = img.crop((bbox[0], lines[i-1], bbox[2], lines[i]))
            # if empty or too small, skip
            if cut.size[1] < 30:
                continue
            elif np.array(cut.convert("L")).var() < 200:
                continue
            cut = (bbox[0], lines[i-1], bbox[2], lines[i])  # (left, top, right, bottom)
            cut = cut if line_direct == "x" else new_bbox_after_rotate90(img, cut, counterclockwise=False)
            cut_imgs.append(cut)
        # if all other images are blank, this remaining image is the same as the original image
        if len(cut_imgs) == 1:
            return []
        if verbose:
            img = img if line_direct == "x" else img.rotate(-90, expand=True)
            draw = ImageDraw.Draw(img)
            for cut in cut_imgs:
                draw.rectangle(cut, outline=(0, 255, 0), width=5)
                draw.line(cut, fill=(0, 255, 0), width=5)
            img.show()
        if save_cut:
            img.save("cut.png")
        return cut_imgs
    
from threading import Thread
from PIL import Image, ImageDraw
import matplotlib.pyplot as plt
import matplotlib.patches as patches
import json


class DCGenTrace():
    def __init__(self, img_seg, bot, prompt):
        self.img = img_seg.img
        self.bbox = img_seg.bbox
        self.children = []
        self.bot = bot
        self.prompt = prompt
        self.code = None

    def get_img(self, cut_out=False, outline=(255, 0, 0)):
        if cut_out:
            return self.img.crop(self.bbox)
        else:
            img_draw = self.img.copy()
            draw = ImageDraw.Draw(img_draw)
            # shift one pixel to the right and down to make the outline visible
            draw.rectangle(self.bbox, outline=outline, width=5)
            return img_draw

    def display_tree(self, node_size=(5, 5)):
        def _plot_node(ax, node, position, parent_position=None, color='r'):
            # Display the node's image
            img = np.array(node.get_img())
            ax.imshow(img, extent=(position[0] - node_size[0]/2, position[0] + node_size[0]/2,
                                   position[1] - node_size[1]/2, position[1] + node_size[1]/2))

            # Draw a rectangle around the node's image
            ax.add_patch(patches.Rectangle((position[0] - node_size[0]/2, position[1] - node_size[1]/2),
                                           node_size[0], node_size[1], fill=False, edgecolor=color, linewidth=2))

            # Connect parent to child with a line
            if parent_position:
                ax.plot([parent_position[0], position[0]], [parent_position[1], position[1]], color=color, linewidth=2)
            
            # Recursive plotting for children
            num_children = len(node.children)
            if num_children > 0:
                for i, child in enumerate(node.children):
                    # Calculate child position
                    child_x = position[0] + (i - (num_children - 1) / 2) * node_size[0] * 2
                    child_y = position[1] - node_size[1] * 3
                    _plot_node(ax, child, (child_x, child_y), position, color=tuple([int(random.random() * 255) / 255.0 for _ in range(3)]))

        # Setup the plot
        fig, ax = plt.subplots(figsize=(100, 100))
        ax.axis('off')

        # Start plotting from the root node
        _plot_node(ax, self, (0, 0))
        plt.savefig("tree.png")

    def generate_code(self, recursive=False, cut_out=False, multi_thread=True):
        if self.is_leaf() or not recursive:
            self.code = self.bot.try_ask(self.prompt, encode_image(self.get_img(cut_out=cut_out)))
            pure_code = re.findall(r"```html([^`]+)```", self.code)
            if pure_code:
                self.code = pure_code[0]
        else:
            code_parts = []  
            if multi_thread:
                threads = []
                for child in self.children:
                    t = Thread(target=child.generate_code, kwargs={"recursive": True, "cut_out": cut_out})
                    t.start()
                    threads.append(t)
                for t in threads:
                    t.join()
            else:
                for child in self.children:
                    child.generate_code(recursive=True, cut_out=cut_out, multi_thread=False)

            for child in self.children:
                code_parts.append(child.code)
                if child.code is None:
                    print("Warning: Child code is None")

            code_parts = '\n=============\n'.join(code_parts)
            self.code = self.bot.try_ask(self.prompt + code_parts, encode_image(self.get_img(cut_out=cut_out)))
            pure_code = re.findall(r"```html([^`]+)```", self.code)
            if pure_code:
                self.code = pure_code[0]
        return self.code
    
    def is_leaf(self):
        return len(self.children) == 0
    
    def get_num_of_nodes(self):
        if self.is_leaf():
            return 1
        else:
            return 1 + sum([child.get_num_of_nodes() for child in self.children])
        
    def to_json(self, path=None):
        '''
        [
            { 
            "bbox": [left, top, right, bottom],
            "code": the code of the node,
            "level": the level of the node,
            },
            { 
            "bbox": [left, top, right, bottom],
            "code": the code of the node,
            "level": the level of the node
            },
            ...
        ]
        '''
        def _to_json(node, level):
            res = []
            res.append({"bbox": node.bbox, "code": node.code, "level": level, "prompt": node.prompt})
            for child in node.children:
                res += _to_json(child, level + 1)
            return res
        res = _to_json(self, 0)

        if path:
            with open(path, "w") as f:
                json.dump(res, f, indent=4)
        return res



    @classmethod
    def from_img_seg(cls, img_seg, bot, prompt_leaf, prompt_node, prompt_root=None):
        if not prompt_root:
            prompt_root = prompt_node
        def _from_img_seg(img_seg, entry_point=False):
            if img_seg.is_leaf() and not entry_point:
                return DCGenTrace(img_seg, bot, prompt_leaf)
            elif not entry_point:
                trace = DCGenTrace(img_seg, bot, prompt_node)
                for child in img_seg.children:
                    trace.children.append(_from_img_seg(child))
                return trace
            else:
                trace = DCGenTrace(img_seg, bot, prompt_root)
                for child in img_seg.children:
                    trace.children.append(_from_img_seg(child))
                return trace
            
        return _from_img_seg(img_seg, entry_point=True)