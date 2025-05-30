"""
Utilities:
1. process_websites(num, dir): Process num websites and save the html and screenshot in the dir
2. single_turn(prompt, bot, img_path, save_path=None): Get the html code from a single screenshot
3. single_turn_exp(bot, img_dir, save_dir, prompt): Get the html code from multiple screenshots
4. multi_turn(bot, img_path, save_path, num_turns): Get the html code from a single screenshot with multiple turns
5. multi_turn_exp(bot, img_dir, save_dir, num_turns): Get the html code from multiple screenshots with multiple turns
6. dcgen(bot, img_path, save_path=None, max_depth=2): Get the html code from a single screenshot using DCGen
7. dcgen_exp(bot, img_dir, save_dir, max_depth=2): Get the html code from multiple screenshots using DCGen

Usage:
1. process_websites(10, "data"): Process 10 websites and save the html and screenshot in the "data" directory
2. bot = GPT4("../keys/key_self.txt", model="gpt-4o"): Load the bot
3. dcgen_exp(bot, "data/original/", "data/dcgen", 2): Get the html code from multiple screenshots using DCGen
4. multi_turn_exp(bot, "data/original/", "data/self_refine", 1): Get the html code from multiple screenshots with multiple turns
5. single_turn_exp(bot, "data/original/", "data/cot", prompt_cot): Get the html code from multiple screenshots
"""


import sys
sys.path.append('..')
from utils import simplify_html, get_driver, take_screenshot, encode_image, GPT4, DCGenTrace, ImgSegmentation
from single_file import single_file
import os
import pandas as pd
from multiprocessing import Process
from threading import Thread
from tqdm.auto import tqdm
import re
import time

def get_dir_list(dir, end=".png", exclude="placeholder"):
    filelist = [dir + x for x in os.listdir(dir) if x.endswith(end) and exclude not in x]
    return filelist


def process_website(url, id, dir):
    single_file(url, f"{dir}/{id}.html")
    simplify_html(f"{dir}/{id}.html", f"{dir}/{id}.html")
    driver = get_driver(file=f"{dir}/{id}.html")
    take_screenshot(driver, f"{dir}/{id}.png")
    driver.quit()


def process_websites(num, dir):
    data = pd.read_csv("url_list.csv")[:num]
    p_list = []
    for i in range(num):
        id = data.iloc[i]["id"]
        url = data.iloc[i]["url"]
        p = Process(target=process_website, args=(url, id, dir))
        p_list.append(p)
        p.start()
        if len(p_list) == 10:
            for p in p_list:
                p.join()
            p_list = []
    for p in p_list:
        p.join()


prompt_direct = """Here is a screenshot of a webpage. Return a single piece of HTML and tail-wind CSS code to reproduce exactly the website. Use "placeholder.png" to replace the images. Pay attention to things like size, text, position, and color of all the elements, as well as the overall layout. Respond with the content of the HTML+tail-wind CSS code."""
prompt_cot = """Here is a screenshot of a webpage. Return a single piece of HTML and tail-wind CSS code to reproduce exactly the website. Please think step by step by dividing the screenshot into multiple parts, write the code for each part, and combine them to form the final code. Use "placeholder.png" to replace the images. Pay attention to things like size, text, position, and color of all the elements, as well as the overall layout. Respond with the content of the HTML+tail-wind CSS code."""
prompt_multi = """Here is a screenshot of a webpage. I have an HTML file for implementing a webpage but it has some missing or wrong elements that are different from the original webpage. Please compare the two webpages and revise the original HTML implementation. Return a single piece of HTML and tail-wind CSS code to reproduce exactly the website. Use "placeholder.png" to replace the images. Pay attention to things like size, text, position, and color of all the elements, as well as the overall layout. Respond with the content of the HTML+tail-wind CSS code. The current implementation I have is: \n\n [CODE]"""

prompt_dcgen = {
    "promt_node": """Here are 1) a screenshot of a webpage with a red rectangular bounding box , and 2) code of different elements in the bounding box. Utilize the provided code to write a new HTML and tail-wind CSS file to exactly replicate the website in the bounding box, use 'placeholder.png' to replace the images, and put resulting HTML and tail-wind CSS in only one file. Pay attention to things like size, text, position, and color of all the elements, as well as the overall layout. Do not include the red bounding box itself in your code. Respond with the content of the HTML+tail-wind CSS file. \n Here is the code of different parts of the webpage in the bounding box:\n=============\n""",

    "promt_leaf": """Here is a screenshot of a webpage with a red rectangular bounding box. Focus on the bounding box area and return a single piece of HTML and tail-wind CSS code to reproduce exactly the given area of the website. Use 'placeholder.png' to replace the images. Pay attention to things like size, text, position, and color of all the elements, as well as the overall layout. Do not inlude the red bounding box itself in your code. Respond with the content of the HTML+tail-wind CSS code.""",
}

def single_turn(prompt, bot, img_path, save_path=None):
    for i in range(3):
        try:
            html = bot.ask(prompt, encode_image(img_path))
            code = re.findall(r"```html([^`]+)```", html)
            if code:
                html = code[0]
            if len(html) < 10:
                raise Exception("No html code found")
            if save_path:
                with open(save_path, 'w', encoding="utf-8") as f:
                    f.write(html)
            return html

        except Exception as e:
            print(e)
            time.sleep(1)
    raise Exception("Failed to get html code")

def single_turn_exp(bot, img_dir, save_dir, prompt, multi_thread=True):
    filelist = get_dir_list(img_dir)
    if not os.path.exists(save_dir):
        os.makedirs(save_dir)
    if multi_thread:
        t_list = []
        for file in tqdm(filelist):
            save_path = f"{save_dir}/{file.split('/')[-1].replace('.png', '.html')}"
            if os.path.exists(save_path):
                continue
            t = Thread(target=single_turn, args=(prompt, bot, file, save_path))
            t.start()
            t_list.append(t)
            if len(t_list) == 30:
                for t in t_list:
                    t.join()
                t_list = []
        for t in t_list:
            t.join()
    else:
        for file in tqdm(filelist):
            save_path = f"{save_dir}/{file.split('/')[-1].replace('.png', '.html')}"
            if os.path.exists(save_path):
                continue
            single_turn(prompt, bot, file, save_path)
        


def multi_turn(bot, img_path, save_path, num_turns):
    initial_html = single_turn(prompt_direct, bot, img_path)
    for i in range(num_turns):
        prompt = prompt_multi.replace("[CODE]", initial_html)
        initial_html = single_turn(prompt, bot, img_path)
    with open(save_path, 'w', encoding="utf-8") as f:
        f.write(initial_html)

    return initial_html

def multi_turn_exp(bot, img_dir, save_dir, num_turns, multi_thread=True):
    filelist = get_dir_list(img_dir)
    if not os.path.exists(save_dir):
        os.makedirs(save_dir)
    if multi_thread:
        t_list = []
        for file in tqdm(filelist):
            save_path = f"{save_dir}/{file.split('/')[-1].replace('.png', '.html')}"
            if os.path.exists(save_path):
                continue
            t = Thread(target=multi_turn, args=(bot, file, save_path, num_turns))
            t.start()
            t_list.append(t)
            if len(t_list) == 30:
                for t in t_list:
                    t.join()
                t_list = []
        for t in t_list:
            t.join()
    else:
        for file in tqdm(filelist):
            save_path = f"{save_dir}/{file.split('/')[-1].replace('.png', '.html')}"
            if os.path.exists(save_path):
                continue
            multi_turn(bot, file, save_path, num_turns)

def dcgen(bot, img_path, save_path=None, max_depth=2, multi_thread=True):
    img_seg = ImgSegmentation(img_path, max_depth=max_depth)
    dc_trace = DCGenTrace.from_img_seg(img_seg, bot, prompt_leaf=prompt_dcgen["promt_leaf"], prompt_node=prompt_dcgen["promt_node"])
    dc_trace.generate_code(recursive=True, cut_out=False, multi_thread=multi_thread)
    if save_path:
        with open(save_path, 'w', encoding="utf-8") as f:
            f.write(dc_trace.code)
    return dc_trace.code

def dcgen_exp(bot, img_dir, save_dir, max_depth=2, multi_thread=True):
    """img_dir should end with /"""
    filelist = get_dir_list(img_dir)
    if not os.path.exists(save_dir):
        os.makedirs(save_dir)
    if multi_thread:
        p_list = []
        for file in tqdm(filelist):
            save_path = f"{save_dir}/{file.split('/')[-1].replace('.png', '.html')}"
            if os.path.exists(save_path):
                continue
            p = Thread(target=dcgen, args=(bot, file, save_path, max_depth))
            p.start()
            p_list.append(p)
            if len(p_list) == 5:
                for p in p_list:
                    p.join()
                p_list = []
        for p in p_list:
            p.join()
    else:
        for file in tqdm(filelist):
            save_path = f"{save_dir}/{file.split('/')[-1].replace('.png', '.html')}"
            if os.path.exists(save_path):
                continue
            dcgen(bot, file, save_path, max_depth, multi_thread=False)

def take_screenshots_for_dir(dir):
    """dir should end with /"""
    filelist = get_dir_list(dir, end=".html")
    driver = get_driver(string="<html></html>")
    for file in tqdm(filelist):
        driver.get("file://" + os.path.abspath(file))
        take_screenshot(driver, file.replace(".html", ".png"))
    driver.quit()

if __name__ == "__main__":
    # process_websites(10, "data")
    # bot = GPT4("../keys/key_self.txt", model="gpt-4o")

    from internvlm import InternVL2
    import os
    bot = InternVL2()
    os.chdir("./user_study")
    dcgen_exp(bot, "data_redo_exp/original/", "data_redo_exp/dcgen_intern", 2, multi_thread=False)
    multi_turn_exp(bot, "data_redo_exp/original/", "data_redo_exp/self_refine_intern", 1, multi_thread=False)
    single_turn_exp(bot, "data_redo_exp/original/", "data_redo_exp/cot_intern", prompt_cot, multi_thread=False)
    single_turn_exp(bot, "data_redo_exp/original/", "data_redo_exp/direct_intern", prompt_direct, multi_thread=False)
    # for dir in ["data/dcgen/", "data/self_refine/", "data/cot/", "data/direct/"]:
    #     take_screenshots_for_dir(dir)


    

    


