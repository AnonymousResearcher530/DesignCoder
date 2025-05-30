import os
import sys
import glob
import json
import cv2
import numpy as np
import pandas as pd
from os.path import join as pjoin
import argparse
import traceback

def identify_lists(compos):
    """识别组件中的列表结构（基于相似性和间距）"""
    # 按照类别和大小分组组件
    groups_by_class_size = {}
    
    for compo in compos:
        class_name = compo.get('class', '')
        # 忽略文本元素
        if class_name == 'Text':
            continue
            
        # 计算元素大小特征
        width = compo.get('width', 0)
        height = compo.get('height', 0)
        area = width * height
        
        # 使用宽松的大小范围作为键
        size_key = f"{class_name}_{width//10*10}x{height//10*10}"
        
        if size_key not in groups_by_class_size:
            groups_by_class_size[size_key] = []
        groups_by_class_size[size_key].append(compo)
    
    # 找出潜在的列表项组
    list_items = []
    
    for size_key, group in groups_by_class_size.items():
        if len(group) >= 2:  # 至少2个相似元素可能形成列表
            # 排序组件，优先按行排序
            sorted_group = sorted(group, key=lambda x: (
                x.get('row_min', 0), 
                x.get('column_min', 0)
            ))
            
            # 分析组件之间的位置关系，确定是垂直列表还是水平列表
            vertical_count = 0
            horizontal_count = 0
            
            for i in range(len(sorted_group) - 1):
                # 垂直对齐
                if abs(sorted_group[i].get('column_min', 0) - sorted_group[i+1].get('column_min', 0)) < 20:
                    vertical_count += 1
                # 水平对齐
                if abs(sorted_group[i].get('row_min', 0) - sorted_group[i+1].get('row_min', 0)) < 20:
                    horizontal_count += 1
            
            alignment = 'v' if vertical_count > horizontal_count else 'h'
            
            # 为列表项创建包装
            items = []
            for item in sorted_group:
                items.append([{"id": item.get('id', 'Item'), "class": "Item"}])
            
            list_items.append(items)
    
    # 如果没有识别到任何列表，创建至少一个默认列表
    if not list_items and len(compos) > 0:
        # 从非文本元素中选择几个作为示例列表项
        non_text_compos = [c for c in compos if c.get('class', '') != 'Text']
        if len(non_text_compos) >= 3:
            sample = non_text_compos[:3]
            items = []
            for item in sample:
                items.append([{"id": item.get('id', 'Item'), "class": "Item"}])
            list_items.append(items)
    
    return list_items

def identify_pairs(compos):
    """识别组件中的配对关系"""
    pairs = []
    
    # 按位置分组 - 近似水平对齐的元素
    h_aligned = {}
    # 按位置分组 - 近似垂直对齐的元素
    v_aligned = {}
    
    # 查找可能的配对
    for i, compo1 in enumerate(compos):
        for j, compo2 in enumerate(compos[i+1:], i+1):
            # 忽略相同类型的元素配对
            if compo1.get('class', '') == compo2.get('class', '') and compo1.get('class', '') != '':
                continue
                
            # 水平对齐（垂直接近）
            if abs(compo1.get('row_min', 0) - compo2.get('row_min', 0)) < 20:
                row_key = compo1.get('row_min', 0) // 10 * 10
                if row_key not in h_aligned:
                    h_aligned[row_key] = []
                h_aligned[row_key].append((compo1, compo2))
            
            # 垂直对齐（水平接近）
            if abs(compo1.get('column_min', 0) - compo2.get('column_min', 0)) < 20:
                col_key = compo1.get('column_min', 0) // 10 * 10
                if col_key not in v_aligned:
                    v_aligned[col_key] = []
                v_aligned[col_key].append((compo1, compo2))
    
    # 从对齐组中提取配对
    for row_key, compo_pairs in h_aligned.items():
        if len(compo_pairs) > 0:
            for compo1, compo2 in compo_pairs[:3]:  # 限制每组最多3个配对
                pairs.append((compo1.get('id', ''), compo2.get('id', '')))
    
    for col_key, compo_pairs in v_aligned.items():
        if len(compo_pairs) > 0:
            for compo1, compo2 in compo_pairs[:3]:  # 限制每组最多3个配对
                pairs.append((compo1.get('id', ''), compo2.get('id', '')))
    
    return pairs

def improve_list_detection(file_name, output_root='data/output'):
    """改进布局和列表检测结果"""
    print(f"改进 {file_name} 的列表检测...")
    
    # 路径
    layout_json_path = f"{output_root}/layout/{file_name}.json"
    layout_list_json_path = f"{output_root}/layout/{file_name}-list.json"
    fixed_dir = f"{output_root}/fixed_solution/{file_name}"
    fixed_json_path = f"{fixed_dir}/{file_name}.json"
    fixed_list_json_path = f"{fixed_dir}/{file_name}-list.json"
    
    # 确保目录存在
    os.makedirs(fixed_dir, exist_ok=True)
    
    # 读取原始布局JSON
    if os.path.exists(layout_json_path):
        try:
            with open(layout_json_path, 'r') as f:
                layout_json = json.load(f)
        except:
            print(f"  - 无法读取布局JSON: {layout_json_path}")
            layout_json = []
    else:
        print(f"  - 布局JSON不存在: {layout_json_path}")
        layout_json = []
    
    # 读取原始列表JSON
    if os.path.exists(layout_list_json_path):
        try:
            with open(layout_list_json_path, 'r') as f:
                list_json = json.load(f)
        except:
            print(f"  - 无法读取列表JSON: {layout_list_json_path}")
            list_json = {'ui': file_name, 'list': [], 'multitab': []}
    else:
        print(f"  - 列表JSON不存在: {layout_list_json_path}")
        list_json = {'ui': file_name, 'list': [], 'multitab': []}
    
    # 创建改进版列表JSON
    improved_list_json = list_json.copy()
    
    # 检查列表是否为空或仅包含占位符
    is_list_empty = len(list_json.get('list', [])) == 0
    has_placeholder_only = all(
        len(lst) == 0 or all(
            len(item) == 0 or all(
                comp.get('id', '') == 'Item' for comp in subitem
            ) for item in lst
        ) for lst in list_json.get('list', [])
    )
    
    # 如果列表为空或只有占位符，则使用布局JSON中的组件创建列表
    if is_list_empty or has_placeholder_only:
        print(f"  - 列表为空或仅包含占位符，尝试创建新列表")
        
        # 提取所有组件
        all_compos = []
        
        def extract_compos(elements):
            for elem in elements:
                if 'class' in elem and 'location' in elem:
                    # 转换位置为坐标
                    compo = {
                        'id': elem.get('id', ''),
                        'class': elem.get('class', ''),
                        'row_min': elem.get('location', {}).get('top', 0),
                        'row_max': elem.get('location', {}).get('bottom', 0),
                        'column_min': elem.get('location', {}).get('left', 0),
                        'column_max': elem.get('location', {}).get('right', 0),
                    }
                    
                    # 计算宽度和高度
                    compo['width'] = compo['column_max'] - compo['column_min']
                    compo['height'] = compo['row_max'] - compo['row_min']
                    
                    all_compos.append(compo)
                
                # 递归处理子元素
                if 'children' in elem:
                    extract_compos(elem['children'])
        
        # 提取所有组件
        extract_compos(layout_json)
        
        # 识别列表结构
        if all_compos:
            list_items = identify_lists(all_compos)
            if list_items:
                improved_list_json['list'] = list_items
                print(f"  - 创建了 {len(list_items)} 个列表")
    
    # 保存改进的列表JSON到fixed_solution目录
    with open(fixed_list_json_path, 'w') as f:
        json.dump(improved_list_json, f, indent=4)
    print(f"  - 保存改进的列表JSON到: {fixed_list_json_path}")
    
    # 检查布局JSON中是否有空的配对关系，如果有则改进
    fixed_layout_json = layout_json.copy()
    
    # 如果布局JSON不存在或为空，则创建基本布局
    if not fixed_layout_json:
        print(f"  - 布局JSON为空，创建基本布局结构")
        if all_compos:
            # 简单布局结构 - 仅包含顶级块
            top_block = {
                "id": "b-0",
                "class": "Block",
                "children": [],
                "location": {
                    "left": min(c.get('column_min', 0) for c in all_compos),
                    "top": min(c.get('row_min', 0) for c in all_compos),
                    "right": max(c.get('column_max', 100) for c in all_compos),
                    "bottom": max(c.get('row_max', 100) for c in all_compos)
                }
            }
            
            # 将组件添加为子元素
            for i, compo in enumerate(all_compos):
                child = {
                    "id": compo.get('id', f"c-{i}"),
                    "class": compo.get('class', 'Compo'),
                    "location": {
                        "left": compo.get('column_min', 0),
                        "top": compo.get('row_min', 0),
                        "right": compo.get('column_max', 100),
                        "bottom": compo.get('row_max', 100)
                    }
                }
                top_block["children"].append(child)
            
            fixed_layout_json = [top_block]
    
    # 为布局中的元素添加配对关系
    def update_layout_with_pairs(layout_json, all_compos):
        # 识别配对关系
        pairs = identify_pairs(all_compos)
        
        # 检查每个元素
        def update_element_pairs(element, pairs):
            # 如果是基本组件
            if element.get('class', '') in ['Compo', 'Text']:
                element_id = element.get('id', '')
                
                # 查找该元素是否有配对
                for pair_id, pair_to in pairs:
                    if pair_id == element_id:
                        element['pair_to'] = pair_to
                        break
            
            # 递归处理子元素
            if 'children' in element:
                for child in element['children']:
                    update_element_pairs(child, pairs)
        
        # 更新所有顶级元素
        for element in layout_json:
            update_element_pairs(element, pairs)
    
    # 添加配对关系
    if all_compos:
        update_layout_with_pairs(fixed_layout_json, all_compos)
    
    # 保存改进的布局JSON到fixed_solution目录
    with open(fixed_json_path, 'w') as f:
        json.dump(fixed_layout_json, f, indent=4)
    print(f"  - 保存改进的布局JSON到: {fixed_json_path}")
    
    return True

def main():
    parser = argparse.ArgumentParser(description='改进列表检测结果')
    parser.add_argument('--output', type=str, default='data/output', help='输出目录')
    parser.add_argument('--specific', type=str, default='', help='指定要处理的图像（不含扩展名）')
    parser.add_argument('--all', action='store_true', help='处理所有图像')
    args = parser.parse_args()
    
    # 获取要处理的文件列表
    if args.specific:
        files_to_process = [args.specific]
    else:
        # 从layout目录获取所有JSON文件
        json_files = glob.glob(f"{args.output}/layout/*.json")
        # 排除-list.json文件
        json_files = [f for f in json_files if not f.endswith('-list.json')]
        # 提取文件名（不含路径和扩展名）
        files_to_process = [os.path.basename(f).split('.')[0] for f in json_files]
        files_to_process.sort()
    
    print(f"找到 {len(files_to_process)} 个图像需要处理")
    
    # 统计计数
    improved_count = 0
    error_count = 0
    
    # 处理每个文件
    for i, file_name in enumerate(files_to_process):
        print(f"\n[{i+1}/{len(files_to_process)}] 处理: {file_name}")
        
        try:
            if improve_list_detection(file_name, args.output):
                improved_count += 1
        except Exception as e:
            print(f"  - 处理出错: {str(e)}")
            traceback.print_exc()
            error_count += 1
    
    # 输出统计信息
    print(f"\n改进完成:")
    print(f"  - 成功改进: {improved_count} 个")
    print(f"  - 处理失败: {error_count} 个")

if __name__ == "__main__":
    main() 