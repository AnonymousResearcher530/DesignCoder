#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import sys
import cv2
import numpy as np
import matplotlib.pyplot as plt
from PIL import Image, ImageDraw
import random
from utils import ImgSegmentation

def save_segmentation_visualization(img_seg, output_path, base_name, overlay=False):
    """生成并保存分割可视化结果"""
    # 获取原始图像
    if hasattr(img_seg, 'img_path') and os.path.exists(img_seg.img_path):
        # 如果img_seg有图像路径属性并且文件存在
        img = cv2.imread(img_seg.img_path)
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    else:
        # 否则尝试从img属性获取图像
        img = img_seg.img
    
    # 创建一个PIL图像对象用于绘制
    pil_img = Image.fromarray(img)
    draw = ImageDraw.Draw(pil_img)
    
    # 递归绘制所有分割区域
    def _draw_segmentation(node, draw, color=(255, 0, 0), width=3):
        if hasattr(node, 'bbox') and node.bbox:
            x1, y1, x2, y2 = node.bbox
            draw.rectangle([x1, y1, x2, y2], outline=color, width=width)
        
        if hasattr(node, 'children'):
            for child in node.children:
                # 为每个子节点使用随机颜色
                rand_color = tuple([int(random.random() * 255) for _ in range(3)])
                _draw_segmentation(child, draw, color=rand_color, width=max(1, width-1))
    
    # 绘制分割区域
    _draw_segmentation(img_seg, draw)
    
    # 如果不是overlay模式，创建一个白色背景
    if not overlay:
        blank = np.ones_like(img) * 255
        blank_pil = Image.fromarray(blank.astype('uint8'))
        blank_draw = ImageDraw.Draw(blank_pil)
        _draw_segmentation(img_seg, blank_draw)
        result_img = blank_pil
    else:
        result_img = pil_img
    
    # 保存结果
    output_file = os.path.join(output_path, f"{base_name}_{'overlay' if overlay else 'segmentation'}.png")
    result_img.save(output_file)
    
    return output_file

def process_segmentation(img_path, output_path, max_depth=2, visualize=True, save_json=True):
    """处理单个图像的分割"""
    # 创建输出目录
    os.makedirs(output_path, exist_ok=True)
    
    # 获取文件名（不含扩展名）
    base_name = os.path.splitext(os.path.basename(img_path))[0]
    
    try:
        # 执行图像分割
        img_seg = ImgSegmentation(img_path, max_depth=max_depth)
        
        # 可视化结果
        if visualize:
            # 保存分割可视化
            seg_file = save_segmentation_visualization(img_seg, output_path, base_name, overlay=False)
            print(f"分割可视化保存至: {seg_file}")
            
            # 保存叠加可视化
            overlay_file = save_segmentation_visualization(img_seg, output_path, base_name, overlay=True)
            print(f"叠加可视化保存至: {overlay_file}")
        
        # 保存JSON
        if save_json and hasattr(img_seg, 'to_json'):
            json_file = os.path.join(output_path, f"{base_name}_segments.json")
            with open(json_file, 'w') as f:
                f.write(img_seg.to_json())
            print(f"分割数据JSON保存至: {json_file}")
        
        return True
    except Exception as e:
        print(f"处理图像时出错: {str(e)}")
        return False

if __name__ == "__main__":
    # 示例使用
    if len(sys.argv) < 3:
        print("用法: python display_segmentation.py <输入图像路径> <输出目录> [最大深度]")
        sys.exit(1)
    
    img_path = sys.argv[1]
    output_path = sys.argv[2]
    max_depth = int(sys.argv[3]) if len(sys.argv) > 3 else 2
    
    process_segmentation(img_path, output_path, max_depth) 