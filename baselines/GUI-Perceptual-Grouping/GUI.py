import pandas as pd
import cv2
import os
import json
import time
import shutil
from os.path import join as pjoin
import numpy as np

import element.detect_text.text_detection as text
import element.detect_compo.ip_region_proposal as ip
import element.detect_merge.merge as merge
from layout.obj.Compos_DF import ComposDF
from layout.obj.Compo import *
from layout.obj.Block import *
from layout.obj.List import *
import layout.lib.draw as draw


class GUI:
    def __init__(self, img_file, compos_json_file=None, output_dir='data/output'):
        self.img_file = img_file
        self.img = cv2.imread(img_file)
        self.img_reshape = self.img.shape
        self.img_resized = cv2.resize(self.img, (self.img_reshape[1], self.img_reshape[0]))
        self.file_name = img_file.replace('\\', '/').split('/')[-1][:-4]

        self.output_dir = output_dir
        self.ocr_dir = pjoin(self.output_dir, 'ocr') if output_dir is not None else None
        self.non_text_dir = pjoin(self.output_dir, 'ip') if output_dir is not None else None
        self.merge_dir = pjoin(self.output_dir, 'uied') if output_dir is not None else None
        self.layout_dir = pjoin(self.output_dir, 'layout') if output_dir is not None else None

        self.compos_json = None  # {'img_shape':(), 'compos':[]}
        self.compos_df = None    # dataframe for efficient processing
        self.compos = []         # list of Compo objects
        self.detection_result_img = {'text': None, 'non-text': None, 'merge': None}   # visualized detection result

        self.layout_result_img_group = None     # visualize group of compos with repetitive layout
        self.layout_result_img_pair = None      # visualize paired groups
        self.layout_result_img_list = None      # visualize list (paired group) boundary

        self.lists = []     # list of List objects representing lists
        self.blocks = []    # list of Block objects representing blocks

    def save_layout_result_imgs(self):
        os.makedirs(self.layout_dir, exist_ok=True)
        
        # 确保布局结果图像存在
        if self.layout_result_img_group is None or self.layout_result_img_pair is None or self.layout_result_img_list is None:
            print("布局结果图像不可用，生成空白图像")
            # 创建空白图像作为占位符
            height, width = self.img.shape[:2]
            blank = np.ones((height, width, 3), np.uint8) * 255
            
            if self.layout_result_img_group is None:
                self.layout_result_img_group = blank.copy()
            if self.layout_result_img_pair is None:
                self.layout_result_img_pair = blank.copy()
            if self.layout_result_img_list is None:
                self.layout_result_img_list = blank.copy()
        
        # 保存图像
        cv2.imwrite(pjoin(self.layout_dir, self.file_name + '-group.jpg'), self.layout_result_img_group)
        cv2.imwrite(pjoin(self.layout_dir, self.file_name + '-pair.jpg'), self.layout_result_img_pair)
        cv2.imwrite(pjoin(self.layout_dir, self.file_name + '-list.jpg'), self.layout_result_img_list)
        # print('Layout recognition result images save to ', output_dir)

    def save_layout_result_json(self):
        os.makedirs(self.layout_dir, exist_ok=True)
        js = []
        for block in self.blocks:
            js.append(block.wrap_info())
        json.dump(js, open(pjoin(self.layout_dir, self.file_name + '.json'), 'w'), indent=4)
        # print('Layout recognition result json save to ', output_dir)

    def save_list(self):
        os.makedirs(self.layout_dir, exist_ok=True)
        js = {'ui': self.file_name, 'list': [], 'multitab': []}
        for lst in self.lists:
            js['list'].append(lst.wrap_list_items())
        json.dump(js, open(pjoin(self.layout_dir, self.file_name + '-list.json'), 'w'), indent=4)

    def save_detection_result(self):
        if not os.path.exists(pjoin(self.merge_dir, self.file_name + '.jpg')):
            os.makedirs(self.ocr_dir, exist_ok=True)
            os.makedirs(self.non_text_dir, exist_ok=True)
            os.makedirs(self.merge_dir, exist_ok=True)
            cv2.imwrite(pjoin(self.ocr_dir, self.file_name + '.jpg'), self.detection_result_img['text'])
            cv2.imwrite(pjoin(self.non_text_dir, self.file_name + '.jpg'), self.detection_result_img['non-text'])
            cv2.imwrite(pjoin(self.merge_dir, self.file_name + '.jpg'), self.detection_result_img['merge'])
        if not os.path.exists(pjoin(self.merge_dir, self.file_name + '.json')):
            json.dump(self.compos_json, open(pjoin(self.merge_dir, self.file_name + '.json'), 'w'), indent=4)

    def save_layout_result(self):
        self.save_detection_result()
        self.save_layout_result_imgs()
        self.save_layout_result_json()
        self.save_list()

    '''
    *****************************
    *** GUI Element Detection ***
    *****************************
    '''
    def resize_by_longest_side(self, img_resize_longest_side=800):
        height, width = self.img.shape[:2]
        if height > width:
            width_re = int(img_resize_longest_side * (width / height))
            return img_resize_longest_side, width_re, self.img.shape[2]
        else:
            height_re = int(img_resize_longest_side * (height / width))
            return height_re, img_resize_longest_side, self.img.shape[2]

    def detect_element(self, is_ocr=True, is_non_text=True, is_merge=True, img_resize_longest_side=800, show=False):
        if self.img_file is None:
            print('No GUI image is input')
            return
        # resize GUI image by the longest side while detecting non-text elements
        if img_resize_longest_side is not None:
            self.img_reshape = self.resize_by_longest_side(img_resize_longest_side)
            self.img_resized = cv2.resize(self.img, (self.img_reshape[1], self.img_reshape[0]))
            resize_height = self.img_reshape[0]
        else:
            self.img_reshape = self.img.shape
            self.img_resized = self.img.copy()
            resize_height = None

        key_params = {'min-grad': 10, 'ffl-block': 5, 'min-ele-area': 50, 'merge-contained-ele': True,
                      'max-word-inline-gap': 10, 'max-line-ingraph-gap': 4, 'remove-ui-bar': True}
        
        # 确保输出目录存在
        os.makedirs(self.ocr_dir, exist_ok=True)
        os.makedirs(self.non_text_dir, exist_ok=True)
        os.makedirs(self.merge_dir, exist_ok=True)
        os.makedirs(self.layout_dir, exist_ok=True)
        
        # OCR检测
        if is_ocr:
            try:
                self.detection_result_img['text'] = text.text_detection(self.img_file, self.ocr_dir, show=show)
                print(f"OCR detection completed for {self.file_name}")
            except Exception as e:
                print(f"Error during OCR detection: {e}")
                print("Using blank image for text detection result")
                # 如果OCR失败，创建一个与原图大小相同的空白图像
                self.detection_result_img['text'] = np.zeros(self.img.shape, dtype=np.uint8)
                # 创建一个空的OCR结果JSON文件以便后续处理
                ocr_json = {'img_shape': self.img.shape, 'texts': []}
                with open(pjoin(self.ocr_dir, self.file_name + '.json'), 'w') as f:
                    json.dump(ocr_json, f, indent=4)
                # 保存空白图像
                cv2.imwrite(pjoin(self.ocr_dir, self.file_name + '.jpg'), self.detection_result_img['text'])
        elif os.path.isfile(pjoin(self.ocr_dir, self.file_name + '.jpg')):
            self.detection_result_img['text'] = cv2.imread(pjoin(self.ocr_dir, self.file_name + '.jpg'))

        # 非文本元素检测
        if is_non_text:
            try:
                # 确保v2目录不干扰检测过程
                if os.path.exists(pjoin(self.non_text_dir, self.file_name)):
                    shutil.rmtree(pjoin(self.non_text_dir, self.file_name))
                
                self.detection_result_img['non-text'] = ip.compo_detection(self.img_file, self.non_text_dir, key_params, resize_by_height=resize_height, show=show)
                print(f"Non-text detection completed for {self.file_name}")
                
                # 检查并处理子目录中的检测结果
                sub_dir_json = pjoin(self.non_text_dir, self.file_name, self.file_name + '.json')
                if os.path.exists(sub_dir_json) and not os.path.exists(pjoin(self.non_text_dir, self.file_name + '.json')):
                    shutil.copy(sub_dir_json, pjoin(self.non_text_dir, self.file_name + '.json'))
                    print(f"Copied detection result from {sub_dir_json} to {pjoin(self.non_text_dir, self.file_name + '.json')}")
                
            except Exception as e:
                print(f"Error during non-text detection: {e}")
                self.detection_result_img['non-text'] = np.zeros(self.img.shape, dtype=np.uint8)
                # 创建一个空的非文本结果JSON文件
                nontext_json = {'img_shape': self.img.shape, 'compos': []}
                with open(pjoin(self.non_text_dir, self.file_name + '.json'), 'w') as f:
                    json.dump(nontext_json, f, indent=4)
                # 保存空白图像
                cv2.imwrite(pjoin(self.non_text_dir, self.file_name + '.jpg'), self.detection_result_img['non-text'])
        elif os.path.isfile(pjoin(self.non_text_dir, self.file_name + '.jpg')):
            self.detection_result_img['non-text'] = cv2.imread(pjoin(self.non_text_dir, self.file_name + '.jpg'))

        # 合并文本和非文本元素
        if is_merge:
            try:
                compo_path = pjoin(self.non_text_dir, self.file_name + '.json')
                ocr_path = pjoin(self.ocr_dir, self.file_name + '.json')
                
                # 确保合并所需的文件存在
                if not os.path.exists(compo_path):
                    print(f"Creating empty compo file at {compo_path}")
                    compo_json = {'img_shape': self.img_reshape, 'compos': []}
                    with open(compo_path, 'w') as f:
                        json.dump(compo_json, f, indent=4)
                
                if not os.path.exists(ocr_path):
                    print(f"Creating empty OCR file at {ocr_path}")
                    ocr_json = {'img_shape': self.img_reshape, 'texts': []}
                    with open(ocr_path, 'w') as f:
                        json.dump(ocr_json, f, indent=4)
                
                self.detection_result_img['merge'], self.compos_json = merge.merge(self.img_file, compo_path, ocr_path, self.merge_dir, is_remove_bar=True, is_paragraph=True, show=show)
                print(f"Merge completed for {self.file_name}")
            except Exception as e:
                print(f"Error during merge operation: {e}")
                self.detection_result_img['merge'] = self.img_resized.copy()
                self.compos_json = {'img_shape': self.img_reshape, 'compos': []}
                json.dump(self.compos_json, open(pjoin(self.merge_dir, self.file_name + '.json'), 'w'), indent=4)
                
    def load_detection_result(self):
        '''
        Load json detection result from json file
        '''
        self.compos_json = json.load(open(pjoin(self.merge_dir, self.file_name + '.json')))
        self.img_reshape = self.compos_json['img_shape']
        self.img_resized = cv2.resize(self.img, (self.img_reshape[1], self.img_reshape[0]))
        self.draw_element_detection()

    def load_compos(self, compos):
        '''
        Load compos from objects: {'img_shape':(), 'compos':[]}
        '''
        self.compos_json = compos.copy()
        self.img_reshape = self.compos_json['img_shape']
        self.img_resized = cv2.resize(self.img, (self.img_reshape[1], self.img_reshape[0]))
        self.draw_element_detection()

    '''
    **************************
    *** Layout Recognition ***
    **************************
    '''
    # *** step1 ***
    def cvt_compos_json_to_dataframe(self):
        '''
        Represent the components using a Pandas DataFrame for the sake of processing
        '''
        self.compos_df = ComposDF(json_data=self.compos_json, gui_img=self.img_resized.copy())

    # *** step2 ***
    def recognize_groups(self):
        '''
        Recognize perceptual groups according to clustering and pairing algorithms
        '''
        # cluster elements into groups according to position and area
        print("开始执行元素分组识别...")
        try:
            print("Step 1: 通过聚类识别元素组...")
            self.compos_df.recognize_element_groups_by_clustering()   # group, alignment_in_group, group_nontext, group_text
            print("Step 1完成: 元素组聚类识别")
            
            # group similar Blocks (Containers) by checking their children's similarity
            print("Step 2: 识别相似块...")
            self.compos_df.recognize_similar_blocks()       # group_pair
            print("Step 2完成: 相似块识别")
            
            # pair clusters (groups) into a larger group
            print("Step 3: 配对分组...")
            self.compos_df.pair_groups()                    # group_pair, pair_to
            print("Step 3完成: 分组配对")
            
            # identify list item (paired elements) in each compound large group
            print("Step 4: 列表项分区...")
            self.compos_df.list_item_partition()            # list_item
            print("Step 4完成: 列表项分区")
            
            # filter out invalid unpaired groups
            print("Step 5: 移除无效分组...")
            self.compos_df.remove_invalid_groups()
            print("Step 5完成: 无效分组已移除")
            
            # add missed compos by checking group items
            print("Step 6: 添加遗漏的组件...")
            self.compos_df.add_missed_compos_by_checking_group_item()
            print("Step 6完成: 已添加遗漏组件")
            
            print("元素分组识别完成!")
        except Exception as e:
            print(f"元素分组识别过程中出错: {str(e)}")
            import traceback
            traceback.print_exc()

    # *** step3 ***
    def cvt_groups_to_list_compos(self):
        '''
        Represent the recognized perceptual groups as List objects
        '''
        print("开始将组转换为列表组件...")
        try:
            df = self.compos_df.compos_dataframe
            self.lists = []
            self.compos = []

            # multiple list (multiple compos in each list item)
            print("处理多元素列表...")
            if 'group_pair' in df.columns:
                groups = df.groupby('group_pair').groups
                list_id = 0
                for i in groups:
                    if i == -1 or len(groups[i]) <= 1:
                        continue
                    
                    try:
                        group_df = df.loc[groups[i]]
                        # 确保group_df具有'alignment_in_group'列
                        if 'alignment_in_group' not in group_df.columns or pd.isna(group_df.iloc[0]['alignment_in_group']):
                            print(f"警告: 组 {i} 缺少有效的alignment_in_group值，使用默认值'v'")
                            alignment = 'v'  # 默认垂直对齐
                        else:
                            alignment = group_df.iloc[0]['alignment_in_group']
                            
                        self.lists.append(List(compo_id='l-' + str(list_id), list_class='multi', compo_df=group_df, list_alignment=alignment))
                        list_id += 1
                        # remove selected compos
                        df = df.drop(list(groups[i]))
                        print(f"创建多元素列表 {list_id-1} 成功，包含 {len(group_df)} 个元素")
                    except Exception as e:
                        print(f"创建多元素列表 {list_id} 失败: {str(e)}")

            # single list (single compo in each list item)
            print("处理单元素列表...")
            if 'group' in df.columns:
                groups = df.groupby('group').groups
                for i in groups:
                    if i == -1 or len(groups[i]) <= 1:
                        continue
                    
                    try:
                        group_df = df.loc[groups[i]]
                        # 确保group_df具有'alignment_in_group'列
                        if 'alignment_in_group' not in group_df.columns or pd.isna(group_df.iloc[0]['alignment_in_group']):
                            print(f"警告: 组 {i} 缺少有效的alignment_in_group值，使用默认值'v'")
                            alignment = 'v'  # 默认垂直对齐
                        else:
                            alignment = group_df.iloc[0]['alignment_in_group']
                            
                        self.lists.append(List(compo_id='l-' + str(list_id), list_class='single', compo_df=group_df, list_alignment=alignment))
                        list_id += 1
                        # remove selected compos
                        df = df.drop(list(groups[i]))
                        print(f"创建单元素列表 {list_id-1} 成功，包含 {len(group_df)} 个元素")
                    except Exception as e:
                        print(f"创建单元素列表 {list_id} 失败: {str(e)}")

            # convert left compos that are not in lists
            print("处理非列表元素...")
            for i in range(len(df)):
                try:
                    compo_df = df.iloc[i]
                    self.compos.append(Compo(compo_id='c-' + str(compo_df['id']), compo_class=compo_df['class'], compo_df=compo_df))
                except Exception as e:
                    print(f"创建独立组件失败: {str(e)}")
                    
            # regard the list as a type of component in the GUI
            self.compos += self.lists
            print(f"组转换完成，创建了 {len(self.lists)} 个列表和 {len(self.compos) - len(self.lists)} 个独立组件")
            
        except Exception as e:
            print(f"组转换过程中出错: {str(e)}")
            import traceback
            traceback.print_exc()
            
            # 确保基本属性存在
            if not hasattr(self, 'lists') or self.lists is None:
                self.lists = []
            if not hasattr(self, 'compos') or self.compos is None:
                self.compos = []

    # *** step4 ***
    def slice_hierarchical_block(self):
        '''
        Slice the GUI into hierarchical blocks based on the recognized Compos
        '''
        blocks, non_blocked_compos = slice_blocks(self.compos, 'v')
        self.blocks = blocks

    # entry method
    def recognize_layout(self, is_save=True):
        '''
        API for layout recognition
        '''
        if self.compos_json is None:
            print('Compos are not initialized')
            return
        # convert json compos to df compos
        self.cvt_compos_json_to_dataframe()
        
        # 1. 元素分组识别
        print('开始执行元素分组识别...')
        self.recognize_groups()
        
        # 2. 列表组件生成
        print('开始将组转换为列表组件...')
        self.cvt_groups_to_list_compos()
        
        # 3. 分层块切片
        self.slice_hierarchical_block()
        
        # 4. 生成布局结果图像（无论是否显示）
        self.get_layout_result_imgs()
        
        # 5. 可视化（如果允许）
        if self.should_show_image():
            self.visualize_layout_recognition()
        else:
            print("图像显示已禁用，跳过布局识别可视化")
        
        # 6. 保存结果
        if is_save:
            start = time.perf_counter()
            self.save_layout_result()
            print("[Layout Recognition Completed in %.3f s] Input: %s Output: %s" % (time.perf_counter() - start, self.img_file, pjoin(self.layout_dir, self.file_name + '.json')))

    '''
    *********************
    *** Visualization ***
    *********************
    '''
    def get_layout_result_imgs(self):
        try:
            # 确保有基本的布局数据
            if self.compos_df is None or self.compos_df.compos_dataframe.empty:
                print("No layout data available")
                # 创建空白图像以便继续流程
                blank = np.zeros(self.img_resized.shape, dtype=np.uint8)
                self.layout_result_img_group = blank.copy()
                self.layout_result_img_pair = blank.copy()
                self.layout_result_img_list = blank.copy()
                return
            
            # 使用原始方法生成图像，但不显示
            self.layout_result_img_group = self.compos_df.visualize_fill(self.img_resized.copy(), gather_attr='group', name='group', show=False)
            self.layout_result_img_pair = self.compos_df.visualize_fill(self.img_resized.copy(), gather_attr='group_pair', name='group_pair', show=False)
            
            # 生成列表图像
            list_img = self.img_resized.copy()
            for lst in self.lists:
                list_img = lst.visualize_list(list_img, flag='block', show=False)
            self.layout_result_img_list = list_img
            
        except Exception as e:
            print(f"Error getting layout result images: {e}")
            import traceback
            traceback.print_exc()
            # 创建空白图像以便继续流程
            blank = np.ones(self.img_resized.shape, dtype=np.uint8) * 255
            self.layout_result_img_group = blank.copy()
            self.layout_result_img_pair = blank.copy()
            self.layout_result_img_list = blank.copy()

    # 检查是否应该显示图像
    def should_show_image(self):
        return os.environ.get('GUI_NO_SHOW', '0') != '1'

    def visualize_element_detection(self):
        # 检查是否应该显示图像
        if not self.should_show_image():
            print("图像显示已禁用，跳过元素检测可视化")
            return
            
        try:
            cv2.imshow('text', cv2.resize(self.detection_result_img['text'], (500, 800)))
            cv2.imshow('non-text', cv2.resize(self.detection_result_img['non-text'], (500, 800)))
            cv2.imshow('merge', cv2.resize(self.detection_result_img['merge'], (500, 800)))
            cv2.waitKey()
            cv2.destroyAllWindows()
        except Exception as e:
            print(f"显示元素检测结果时出错: {e}")

    def draw_element_detection(self, line=2):
        board_text = self.img_resized.copy()
        board_nontext = self.img_resized.copy()
        board_all = self.img_resized.copy()
        colors = {'Text':(0,0,255), 'Compo':(0,255,0), 'Block':(0,166,166)}
        for compo in self.compos_json['compos']:
            position = compo['position']
            if compo['class'] == 'Text':
                draw.draw_label(board_text, [position['column_min'], position['row_min'], position['column_max'], position['row_max']], colors[compo['class']], line=line)
            else:
                draw.draw_label(board_nontext, [position['column_min'], position['row_min'], position['column_max'], position['row_max']], colors[compo['class']], line=line)
            draw.draw_label(board_all, [position['column_min'], position['row_min'], position['column_max'], position['row_max']], colors[compo['class']], line=line)

        self.detection_result_img['text'] = board_text
        self.detection_result_img['non-text'] = board_nontext
        self.detection_result_img['merge'] = board_all

    def visualize_layout_recognition(self):
        # 检查是否应该显示图像
        if not self.should_show_image():
            print("图像显示已禁用，跳过布局识别可视化")
            return
            
        try:
            # 获取布局结果图像
            self.get_layout_result_imgs()
            
            # 检查图像是否为空
            if self.layout_result_img_group is None or self.layout_result_img_pair is None or self.layout_result_img_list is None:
                print("Layout result images are not available")
                return
            
            # 显示图像
            cv2.imshow('group', cv2.resize(self.layout_result_img_group, (500, 800)))
            cv2.imshow('group_pair', cv2.resize(self.layout_result_img_pair, (500, 800)))
            cv2.imshow('list', cv2.resize(self.layout_result_img_list, (500, 800)))
            cv2.waitKey()
            cv2.destroyAllWindows()
        except Exception as e:
            print(f"Error during layout visualization: {e}")
            # 如果可视化失败，只是打印错误而不中断程序
            
    def visualize_compos_df(self, visualize_attr, show=True):
        # 检查是否应该显示图像
        if not self.should_show_image():
            print("图像显示已禁用，跳过组件可视化")
            return None
        return self.compos_df.visualize(self.img.copy(), gather_attr=visualize_attr, name=visualize_attr, show=show)
            
    def visualize_all_compos(self, show=True):
        # 检查是否应该显示图像
        if not self.should_show_image():
            print("图像显示已禁用，跳过组件可视化")
            return None
        return self.compos_json.visualize_compos(self.img.copy(), show=show)
    
    def visualize_lists(self, show=True):
        # 检查是否应该显示图像
        if not self.should_show_image():
            print("图像显示已禁用，跳过列表可视化")
            return None
        board = self.img.copy()
        for lst in self.lists:
            board = lst.visualize_list(board, draw.random_color(), 2, show=False)
        if show:
            cv2.imshow('lists', board)
            cv2.waitKey()
            cv2.destroyAllWindows()
        return board
            
    def visualize_block(self, block_id, show=True):
        # 检查是否应该显示图像
        if not self.should_show_image():
            print("图像显示已禁用，跳过块可视化")
            return None
        return self.blocks[block_id].visualize_sub_blocks_and_compos(self.img.copy(), show=show)
            
    def visualize_blocks(self, show=True):
        # 检查是否应该显示图像
        if not self.should_show_image():
            print("图像显示已禁用，跳过块可视化")
            return None
        board = self.img.copy()
        for block in self.blocks:
            board = block.visualize_block(board, draw.random_color(), 2, show=False)
        if show:
            cv2.imshow('blocks', board)
            cv2.waitKey()
            cv2.destroyAllWindows()
        return board
