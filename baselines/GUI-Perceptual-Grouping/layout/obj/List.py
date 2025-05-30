from layout.obj.Compo import Compo
from layout.lib.draw import *

import cv2
import numpy as np
from random import randint as rint
import pandas as pd


class List(Compo):
    def __init__(self, compo_id=None, list_class=None, compo_df=None, list_alignment=None):
        self.list_class = list_class                      # single or multiple
        self.list_alignment = list_alignment              # h or v
        self.compo_alignment = 'h' if list_alignment == 'v' else 'v'   # alignment of compos in the same list, same as alignment_in_group of compos

        super().__init__(compo_id=compo_id, compo_class='List', compo_df=compo_df)
        # list items are not paired by default
        self.list_items = []  # each list item is a set of compos, it is a type of Compo
        try:
            self.partition_list_items()
        except Exception as e:
            print(f"分区列表项时出错: {str(e)}")
            # 创建一个基本的列表项，包含所有元素
            try:
                if compo_df is not None and not compo_df.empty:
                    # 创建一个简单的DataFrame副本，避免Series比较问题
                    simplified_df = compo_df.copy()
                    # 将可能导致比较问题的列设置为固定值
                    for col in ['text_content', 'children', 'parent']:
                        if col in simplified_df.columns:
                            simplified_df[col] = -1
                    
                    item = Compo(compo_id='i-0', compo_class='Item', compo_df=simplified_df)
                    self.list_items = [item]
            except Exception as e2:
                print(f"创建备用列表项时出错: {str(e2)}")
                self.list_items = []

        # 修复：不调用sort_items()，因为它依赖于list_items中每个元素是列表的假设
        # self.sort_items()

    def get_inner_compos(self):
        """获取列表中的所有组件"""
        compos = []
        try:
            # 检查list_items中的元素是否可迭代
            for list_item in self.list_items:
                # 如果list_item是Compo对象，直接添加
                if isinstance(list_item, Compo):
                    compos.append(list_item)
                # 如果list_item是可迭代的容器（列表、元组等），添加其中的每个元素
                elif hasattr(list_item, '__iter__') and not isinstance(list_item, str):
                    for compo in list_item:
                        compos.append(compo)
        except Exception as e:
            print(f"获取内部组件时出错: {str(e)}")
        return compos

    def wrap_info(self):
        """包装列表信息为字典格式"""
        # get basic info
        info = super().wrap_info()
        # add list items
        info['list_class'] = self.list_class
        info['list_alignment'] = self.list_alignment
        info['list_items'] = []
        
        try:
            for list_item in self.list_items:
                compos = []
                # 检查list_item是否为Compo对象
                if isinstance(list_item, Compo):
                    compos.append(list_item.wrap_info())
                # 如果list_item是可迭代的容器
                elif hasattr(list_item, '__iter__') and not isinstance(list_item, str):
                    for compo in list_item:
                        if hasattr(compo, 'wrap_info'):
                            compos.append(compo.wrap_info())
                info['list_items'].append(compos)
        except Exception as e:
            print(f"包装列表信息时出错: {str(e)}")
            
        return info

    def wrap_list_items(self):
        """简化版的包装函数，只返回类名列表"""
        items = []
        try:
            for list_item in self.list_items:
                compos = []
                # 检查list_item是否为Compo对象
                if isinstance(list_item, Compo):
                    compos.append(list_item.compo_class)
                # 如果list_item是可迭代的容器
                elif hasattr(list_item, '__iter__') and not isinstance(list_item, str):
                    for compo in list_item:
                        if hasattr(compo, 'compo_class'):
                            compos.append(compo.compo_class)
                items.append(compos)
        except Exception as e:
            print(f"包装列表项时出错: {str(e)}")
            
        return items

    def sort_items(self):
        """安全地对列表项进行排序"""
        try:
            if not self.list_items:
                return
                
            # 尝试获取第一个元素的属性以确定如何排序
            first_item = self.list_items[0]
            has_top = hasattr(first_item, 'top')
            has_left = hasattr(first_item, 'left')
            
            # 判断是否可以排序
            if self.list_alignment == 'v' and has_top:
                self.list_items = sorted(self.list_items, key=lambda x: x.top if hasattr(x, 'top') else 0)
            elif self.list_alignment == 'h' and has_left:
                self.list_items = sorted(self.list_items, key=lambda x: x.left if hasattr(x, 'left') else 0)
        except Exception as e:
            print(f"排序列表项时出错: {str(e)}")

    def partition_list_items(self):
        '''
        Compound a list as multiple list-items
        If the list is paired, then recognize the paired items
        If the list is not paired, then group compos in the list by same type (or same area) as a list item
        '''
        try:
            # 简化处理以避免Series比较问题
            if 'list_item' not in self.compo_df.columns:
                print(f"警告: 列表组件缺少list_item列，尝试添加默认值")
                self.compo_df['list_item'] = 0  # 所有元素属于同一个列表项
                
            # 确保list_item列是有效的
            self.compo_df['list_item'] = self.compo_df['list_item'].fillna(-1)
            
            # 确保problematic_columns在处理前固定为安全值
            problematic_columns = ['text_content', 'children', 'parent']
            for col in problematic_columns:
                if col in self.compo_df.columns:
                    # 临时复制一个安全值
                    safe_df = self.compo_df.copy()
                    safe_df[col] = -1
            
            # 尝试将list_item转换为整数
            try:
                self.compo_df['list_item'] = self.compo_df['list_item'].astype(int)
            except Exception as e:
                print(f"警告: 转换list_item为整数时出错: {str(e)}")
                # 手动处理
                for idx in self.compo_df.index:
                    try:
                        val = self.compo_df.loc[idx, 'list_item']
                        if not pd.isna(val):
                            self.compo_df.loc[idx, 'list_item'] = int(float(val))
                        else:
                            self.compo_df.loc[idx, 'list_item'] = -1
                    except:
                        self.compo_df.loc[idx, 'list_item'] = -1
                        
            # 获取分组
            groups = self.compo_df.groupby('list_item').groups
            
            # 如果没有有效的分组，则创建一个包含所有元素的单一列表项
            if len(groups) == 0 or (len(groups) == 1 and -1 in groups):
                print(f"警告: 未找到有效的列表项分组，创建单一列表项")
                # 创建安全的DataFrame
                safe_df = self.compo_df.copy()
                for col in problematic_columns:
                    if col in safe_df.columns:
                        safe_df[col] = -1
                        
                item = Compo(compo_id='i-0', compo_class='Item', compo_df=safe_df)
                self.list_items = [item]
                return
                
            # 处理每个列表项
            for i in groups:
                if i == -1:
                    continue
                    
                try:
                    # 为每个组创建安全的DataFrame
                    group_df = self.compo_df.loc[list(groups[i])].copy()
                    for col in problematic_columns:
                        if col in group_df.columns:
                            group_df[col] = -1
                            
                    item = Compo(compo_id='i-' + str(i), compo_class='Item', compo_df=group_df)
                    self.list_items.append(item)
                    print(f"创建多元素列表 {i} 成功，包含 {len(groups[i])} 个元素")
                except Exception as e:
                    print(f"创建列表项 {i} 时出错: {str(e)}")
                    
            # 如果没有成功创建任何列表项，则创建一个包含所有元素的默认项
            if len(self.list_items) == 0:
                print(f"警告: 未能创建任何列表项，创建默认列表项")
                # 创建安全的DataFrame
                safe_df = self.compo_df.copy()
                for col in problematic_columns:
                    if col in safe_df.columns:
                        safe_df[col] = -1
                        
                item = Compo(compo_id='i-default', compo_class='Item', compo_df=safe_df)
                self.list_items = [item]
                
        except Exception as e:
            print(f"分区列表项过程中出错: {str(e)}")
            import traceback
            traceback.print_exc()
            
            # 确保至少有一个列表项
            if len(self.list_items) == 0:
                try:
                    # 创建安全的DataFrame
                    safe_df = self.compo_df.copy()
                    for col in ['text_content', 'children', 'parent']:
                        if col in safe_df.columns:
                            safe_df[col] = -1
                            
                    item = Compo(compo_id='i-error', compo_class='Item', compo_df=safe_df)
                    self.list_items = [item]
                except:
                    pass

    def visualize_list(self, img=None, flag='line', show=False):
        board = img.copy()
        try:
            for list_item in self.list_items:
                color = random_color()
                # 检查list_item是否为Compo对象
                if isinstance(list_item, Compo):
                    if list_item.compo_class == 'Block':
                        board = list_item.visualize(board, 'line', color=color)
                    else:
                        board = list_item.visualize(board, flag, color=color)
                # 如果list_item是可迭代的容器
                elif hasattr(list_item, '__iter__') and not isinstance(list_item, str):
                    for compo in list_item:
                        if compo.compo_class == 'Block':
                            board = compo.visualize(board, 'line', color=color)
                        else:
                            board = compo.visualize(board, flag, color=color)
        except Exception as e:
            print(f"可视化列表时出错: {str(e)}")
            
        draw_label(board, [self.left, self.top, self.right, self.bottom], (166,100,255), text='Group')
        if show:
            cv2.imshow('list', board)
            cv2.waitKey()
            cv2.destroyWindow('list')
        return board
