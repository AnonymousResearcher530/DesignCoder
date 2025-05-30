import cv2
from os.path import join as pjoin
import time
import json
import numpy as np
import os

import element.detect_compo.lib_ip.ip_preprocessing as pre
import element.detect_compo.lib_ip.ip_draw as draw
import element.detect_compo.lib_ip.ip_detection as det
import element.detect_compo.lib_ip.file_utils as file
import element.detect_compo.lib_ip.Component as Compo
from element.config.CONFIG_UIED import Config
C = Config()


def nesting_inspection(org, grey, compos, ffl_block):
    '''
    Inspect all big compos through block division by flood-fill
    :param ffl_block: gradient threshold for flood-fill
    :return: nesting compos
    '''
    nesting_compos = []
    for i, compo in enumerate(compos):
        if compo.height > 50:
            replace = False
            clip_grey = compo.compo_clipping(grey)
            n_compos = det.nested_components_detection(clip_grey, org, grad_thresh=ffl_block, show=False)
            Compo.cvt_compos_relative_pos(n_compos, compo.bbox.col_min, compo.bbox.row_min)

            for n_compo in n_compos:
                if n_compo.redundant:
                    compos[i] = n_compo
                    replace = True
                    break
            if not replace:
                nesting_compos += n_compos
    return nesting_compos


def compo_detection(input_img_path, output_root, uied_params=None, resize_by_height=800, show=False, wai_key=0):
    start = time.perf_counter()
    # 只获取文件名而不包含路径
    name = os.path.basename(input_img_path).split('.')[0]
    ip_root = pjoin(output_root, name)
    
    # 确保输出目录存在
    os.makedirs(ip_root, exist_ok=True)
    debug_root = pjoin('data/output/debug', name)
    os.makedirs(debug_root, exist_ok=True)
    
    print(f"[DEBUG] 处理图像: {input_img_path}")
    print(f"[DEBUG] 输出路径: {ip_root}")
    print(f"[DEBUG] 调试路径: {debug_root}")

    # *** Step 1 *** pre-processing: read img -> get binary map
    org, grey = pre.read_img(input_img_path, resize_by_height)
    
    # 保存原始调整大小后的图像以进行调试
    cv2.imwrite(pjoin(debug_root, 'original.jpg'), org)
    cv2.imwrite(pjoin(debug_root, 'grey.jpg'), grey)
    
    # 调整对比度和亮度以提高组件检测效果
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8,8))
    grey_enhanced = clahe.apply(grey)
    cv2.imwrite(pjoin(debug_root, 'grey_enhanced.jpg'), grey_enhanced)
    
    # 使用原始梯度阈值
    min_grad = int(uied_params['min-grad'])
    print(f"[DEBUG] 使用梯度阈值: {min_grad}")
    binary = pre.binarization(org, grad_min=min_grad)
    cv2.imwrite(pjoin(debug_root, 'binary_original.jpg'), binary)

    # *** Step 2 *** element detection
    det.rm_line(binary, show=show, wait_key=wai_key)
    cv2.imwrite(pjoin(debug_root, 'binary_rm_line.jpg'), binary)
    
    # 使用原始最小元素面积阈值
    min_obj_area = int(uied_params['min-ele-area'])
    print(f"[DEBUG] 使用最小元素面积: {min_obj_area}")
    uicompos = det.component_detection(binary, min_obj_area=min_obj_area)
    print(f"[DEBUG] 初始检测到的组件数量: {len(uicompos)}")

    # *** Step 3 *** results refinement
    uicompos = det.compo_filter(uicompos, min_area=min_obj_area, img_shape=binary.shape)
    print(f"[DEBUG] 过滤后的组件数量: {len(uicompos)}")
    
    uicompos = det.merge_intersected_compos(uicompos)
    print(f"[DEBUG] 合并相交组件后的数量: {len(uicompos)}")
    
    det.compo_block_recognition(binary, uicompos)
    if uied_params['merge-contained-ele']:
        uicompos = det.rm_contained_compos_not_in_block(uicompos)
        print(f"[DEBUG] 移除包含组件后的数量: {len(uicompos)}")
    
    Compo.compos_update(uicompos, org.shape)
    Compo.compos_containment(uicompos)

    # *** Step 4 ** nesting inspection: check if big compos have nesting element
    # 使用原始嵌套块的梯度阈值
    ffl_block_threshold = int(uied_params['ffl-block'])
    print(f"[DEBUG] 使用嵌套块梯度阈值: {ffl_block_threshold}")
    nested_compos = nesting_inspection(org, grey, uicompos, ffl_block=ffl_block_threshold)
    print(f"[DEBUG] 嵌套组件数量: {len(nested_compos)}")
    uicompos += nested_compos
    
    Compo.compos_update(uicompos, org.shape)
    print(f"[DEBUG] 最终组件数量: {len(uicompos)}")
    
    # 绘制组件边界框
    res_img = draw.draw_bounding_box(org, uicompos, show=show, name='merged compo', write_path=pjoin(ip_root, name + '.jpg'), wait_key=wai_key)
    cv2.imwrite(pjoin(debug_root, 'result_with_boxes.jpg'), res_img)

    # *** Step 7 *** save detection result
    Compo.compos_update(uicompos, org.shape)
    
    # 保存到子目录
    sub_json_path = pjoin(ip_root, name + '.json')
    file.save_corners_json(sub_json_path, uicompos)
    
    # 同时保存到父目录，以确保merge步骤能找到正确的文件
    parent_json_path = pjoin(output_root, name + '.json')
    file.save_corners_json(parent_json_path, uicompos)
    
    print("[Compo Detection Completed in %.3f s] Input: %s Output: %s" % (time.perf_counter() - start, input_img_path, sub_json_path))
    return res_img
