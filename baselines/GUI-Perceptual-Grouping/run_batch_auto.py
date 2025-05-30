import os
import sys
import glob
import time
import shutil
import json
import cv2
import numpy as np
import traceback
import argparse

# 解析命令行参数
parser = argparse.ArgumentParser(description='自动处理所有UI图像')
parser.add_argument('--limit', type=int, default=0, help='限制处理文件数量，0表示处理所有文件')
parser.add_argument('--skip', action='store_true', help='跳过已处理的文件')
parser.add_argument('--clean', action='store_true', help='清理所有已有结果重新处理')
parser.add_argument('--start', type=int, default=0, help='从第几个文件开始处理（索引从0开始）')
parser.add_argument('--output', type=str, default='data/output', help='输出目录')
args = parser.parse_args()

# 设置环境变量禁用图像显示
os.environ['GUI_NO_SHOW'] = '1'

# 先修复ip_region_proposal.py中的路径问题
try:
    # 导入检测模块
    from element.detect_compo import ip_region_proposal as ip
    from element.detect_compo.lib_ip import file_utils
    
    # 保存原始函数以备后用
    original_save_corners = file_utils.save_corners_json
    original_compo_detection = ip.compo_detection
    
    # 创建包装函数修复路径问题
    def fixed_save_corners_json(file_path, corners):
        """修复路径中可能包含重复部分的问题"""
        # 确保目录存在
        dir_path = os.path.dirname(file_path)
        os.makedirs(dir_path, exist_ok=True)
        
        # 调用原始函数
        return original_save_corners(file_path, corners)
    
    # 包装组件检测函数
    def fixed_compo_detection(input_img_path, output_root, key_params, *args, **kwargs):
        """修复路径问题的组件检测包装函数"""
        # 提取文件名（不含路径和扩展名）
        img_name = os.path.basename(input_img_path).split('.')[0]
        
        # 创建正确的输出目录路径（不包含输入路径的重复）
        output_dir = f"{output_root}/{img_name}"
        
        # 确保目录存在
        os.makedirs(output_dir, exist_ok=True)
        
        # 调用原始函数
        result = original_compo_detection(input_img_path, output_root, key_params, *args, **kwargs)
        
        # 检查子目录中的JSON文件
        sub_json = f"{output_dir}/{img_name}.json"
        parent_json = f"{output_root}/{img_name}.json"
        
        # 如果子目录中有JSON而父目录中没有，则复制
        if os.path.exists(sub_json) and (not os.path.exists(parent_json) or os.path.getsize(parent_json) < 100):
            print(f"  - 从子目录复制JSON文件: {sub_json} -> {parent_json}")
            shutil.copy(sub_json, parent_json)
        
        # 如果父目录中有JSON而子目录中没有，则复制
        elif os.path.exists(parent_json) and (not os.path.exists(sub_json) or os.path.getsize(sub_json) < 100):
            print(f"  - 从父目录复制JSON文件: {parent_json} -> {sub_json}")
            shutil.copy(parent_json, sub_json)
        
        return result
    
    # 替换函数
    file_utils.save_corners_json = fixed_save_corners_json
    ip.compo_detection = fixed_compo_detection
    
    print("✅ 已修复路径处理函数")
except Exception as e:
    print(f"❌ 修复路径处理函数失败: {str(e)}")
    traceback.print_exc()

def process_single_image(input_path, output_root='data/output', clean=False):
    """按照修复过的流程处理单个图像"""
    file_name = os.path.basename(input_path).split('.')[0]
    print(f"\n处理图像: {file_name}")
    image_start_time = time.time()
    
    # 创建必要的目录
    os.makedirs(f"{output_root}/ip", exist_ok=True)
    os.makedirs(f"{output_root}/ip/{file_name}", exist_ok=True)
    os.makedirs(f"{output_root}/ocr", exist_ok=True)
    os.makedirs(f"{output_root}/uied", exist_ok=True)
    os.makedirs(f"{output_root}/layout", exist_ok=True)
    os.makedirs(f"{output_root}/fixed_solution/{file_name}", exist_ok=True)
    
    # 如果需要清理已有结果
    if clean:
        folders_to_clean = [
            f"{output_root}/ip/{file_name}",
            f"{output_root}/ip/{file_name}.json",
            f"{output_root}/ip/{file_name}.jpg",
            f"{output_root}/uied/{file_name}.json",
            f"{output_root}/uied/{file_name}.jpg",
            f"{output_root}/layout/{file_name}.json",
            f"{output_root}/layout/{file_name}-list.json",
            f"{output_root}/fixed_solution/{file_name}"
        ]
        
        for path in folders_to_clean:
            if os.path.isdir(path):
                shutil.rmtree(path)
                print(f"  - 已删除目录: {path}")
            elif os.path.exists(path):
                os.remove(path)
                print(f"  - 已删除文件: {path}")
    
    try:
        # 1. 非文本元素检测 - 手动执行
        print("  执行非文本元素检测...")
        from element.detect_compo import ip_region_proposal as ip
        key_params = {'min-grad': 10, 'ffl-block': 5, 'min-ele-area': 50, 'merge-contained-ele': True,
                    'max-word-inline-gap': 10, 'max-line-ingraph-gap': 4, 'remove-ui-bar': True}
        
        # 执行非文本元素检测
        ip_json_path = f"{output_root}/ip/{file_name}.json"
        ip_folder_json_path = f"{output_root}/ip/{file_name}/{file_name}.json"
        
        # 如果ip目录下已有JSON且不是清理模式，直接使用
        if not clean and os.path.exists(ip_json_path) and os.path.getsize(ip_json_path) > 100:
            print("  - 使用已有的非文本元素检测结果")
        else:
            # 执行非文本元素检测
            result_img = ip.compo_detection(input_path, f"{output_root}/ip", key_params, show=False)
            
            # 确保父目录和子目录都有一份JSON
            if os.path.exists(ip_folder_json_path) and not os.path.exists(ip_json_path):
                shutil.copy(ip_folder_json_path, ip_json_path)
                print(f"  - 已从子目录复制JSON文件到父目录")
            elif os.path.exists(ip_json_path) and not os.path.exists(ip_folder_json_path):
                os.makedirs(os.path.dirname(ip_folder_json_path), exist_ok=True)
                shutil.copy(ip_json_path, ip_folder_json_path)
                print(f"  - 已从父目录复制JSON文件到子目录")
        
        # 检查JSON是否有效
        if os.path.exists(ip_json_path):
            with open(ip_json_path, 'r') as f:
                ip_json = json.load(f)
                compo_count = len(ip_json.get('compos', []))
                print(f"  - 检测到的组件数量: {compo_count}")
                
                # 确保JSON内容有效
                if compo_count == 0:
                    print(f"  - 警告: 未检测到任何组件!")
        else:
            print(f"  - 错误: 未生成JSON文件: {ip_json_path}")
            return False
        
        # 2. OCR检测
        print("  执行OCR检测...")
        ocr_json_path = f"{output_root}/ocr/{file_name}.json"
        
        # 如果OCR目录下已有JSON且不是清理模式，直接使用
        if not clean and os.path.exists(ocr_json_path) and os.path.getsize(ocr_json_path) > 100:
            print("  - 使用已有的OCR检测结果")
            with open(ocr_json_path, 'r') as f:
                ocr_json = json.load(f)
                text_count = len(ocr_json.get('texts', []))
                print(f"  - 检测到的文本数量: {text_count}")
        else:
            try:
                from element.detect_text.text_detection import text_detection
                
                # 执行OCR检测
                ocr_img = text_detection(input_path, f"{output_root}/ocr", show=False)
                
                # 检查OCR结果
                if os.path.exists(ocr_json_path):
                    with open(ocr_json_path, 'r') as f:
                        ocr_json = json.load(f)
                        text_count = len(ocr_json.get('texts', []))
                        print(f"  - 检测到的文本数量: {text_count}")
                else:
                    print(f"  - 警告: 未生成OCR JSON文件: {ocr_json_path}")
            except Exception as e:
                print(f"  - OCR检测失败: {str(e)}")
                
                # 创建一个空的OCR结果以确保后续步骤能继续
                img = cv2.imread(input_path)
                if img is not None:
                    ocr_json = {'img_shape': img.shape, 'texts': []}
                    os.makedirs(os.path.dirname(ocr_json_path), exist_ok=True)
                    with open(ocr_json_path, 'w') as f:
                        json.dump(ocr_json, f, indent=4)
                    print(f"  - 已创建空的OCR结果")
        
        # 3. 执行合并操作
        print("  执行元素合并...")
        from element.detect_merge import merge
        
        # 确认文件存在
        ip_json_path = f"{output_root}/ip/{file_name}.json"
        ocr_json_path = f"{output_root}/ocr/{file_name}.json"
        uied_json_path = f"{output_root}/uied/{file_name}.json"
        
        # 如果uied目录下已有JSON且不是清理模式，直接使用
        if not clean and os.path.exists(uied_json_path) and os.path.getsize(uied_json_path) > 100:
            print("  - 使用已有的合并结果")
            with open(uied_json_path, 'r') as f:
                uied_json = json.load(f)
                compo_count = len(uied_json.get('compos', []))
                print(f"  - 合并后的组件数量: {compo_count}")
        else:
            if os.path.exists(ip_json_path) and os.path.exists(ocr_json_path):
                # 执行合并
                merge_result = merge.merge(input_path, ip_json_path, ocr_json_path, f"{output_root}/uied", is_remove_bar=True, is_paragraph=True, show=False)
                
                # 检查合并结果
                if os.path.exists(uied_json_path):
                    with open(uied_json_path, 'r') as f:
                        uied_json = json.load(f)
                        compo_count = len(uied_json.get('compos', []))
                        print(f"  - 合并后的组件数量: {compo_count}")
                else:
                    print(f"  - 错误: 未生成合并JSON文件: {uied_json_path}")
                    return False
            else:
                print(f"  - 错误: 缺少合并所需的文件")
                return False
        
        # 4. 使用fixed_solution执行修复版本流程（直接执行最终解决方案）
        print("  执行布局修复和修正版本...")
        from fixed_solution import main as fixed_main
        
        # 设置命令行参数
        sys.argv = ['fixed_solution.py', input_path]
        
        # 调用修复版本
        fixed_main()
        
        # 检查fixed_solution结果
        fixed_json_path = f"{output_root}/fixed_solution/{file_name}/{file_name}.json"
        fixed_list_json_path = f"{output_root}/fixed_solution/{file_name}/{file_name}-list.json"
        
        if os.path.exists(fixed_json_path):
            print(f"  - 布局分析和修复完成")
            
            # 简单验证结果
            try:
                with open(fixed_json_path, 'r') as f:
                    fixed_json = json.load(f)
                    
                    # 检查JSON格式 (可能是列表或字典)
                    if isinstance(fixed_json, list):
                        compo_count = len(fixed_json)
                    elif isinstance(fixed_json, dict) and 'compos' in fixed_json:
                        compo_count = len(fixed_json.get('compos', []))
                    else:
                        compo_count = 0
                        
                    print(f"  - 组件总数: {compo_count}")
            except Exception as e:
                print(f"  - 警告: 无法验证JSON结果: {str(e)}")
        else:
            print(f"  - 警告: 未生成修复版本JSON文件: {fixed_json_path}")
            
        # 5. 使用fix_existing_results修复可能的格式问题
        try:
            from fix_existing_results import check_and_fix_format_consistency, check_and_fix_list_format, fix_pair_to_index
            
            # 修复格式一致性问题
            if check_and_fix_format_consistency(file_name, output_root):
                print(f"  - 修复了JSON格式不一致问题")
                
            # 修复列表格式问题  
            if check_and_fix_list_format(file_name, output_root):
                print(f"  - 修复了列表JSON格式问题")
                
            # 修复pair_to索引问题
            if fix_pair_to_index(file_name, output_root):
                print(f"  - 修复了pair_to索引问题")
        except Exception as e:
            print(f"  - 警告: 格式修复时出错: {str(e)}")
            
        elapsed = time.time() - image_start_time
        print(f"  处理完成! 用时: {elapsed:.2f}秒")
        return True
        
    except Exception as e:
        print(f"  处理图像出错: {str(e)}")
        traceback.print_exc()
        return False

# 获取所有PNG文件
png_files = glob.glob('ori_ui/*.png')
png_files.sort()  # 确保文件顺序一致
print(f"找到 {len(png_files)} 个PNG文件")

# 处理命令行参数
if args.start > 0:
    if args.start < len(png_files):
        print(f"从第 {args.start+1} 个文件开始处理")
        png_files = png_files[args.start:]
    else:
        print(f"起始索引 {args.start} 超出文件总数 {len(png_files)}")
        sys.exit(1)

if args.limit > 0:
    print(f"限制处理前 {args.limit} 个文件")
    png_files = png_files[:args.limit]

# 统计计数器
success = 0
fail = 0
skipped = 0
start_time = time.time()

# 处理每个文件
for i, png_file in enumerate(png_files):
    file_name = os.path.basename(png_file).split('.')[0]
    
    # 检查是否已处理且需要跳过
    if args.skip and os.path.exists(f"{args.output}/fixed_solution/{file_name}/{file_name}.json"):
        print(f"\n[{i+1}/{len(png_files)}] 跳过已处理: {png_file}")
        skipped += 1
        continue
        
    print(f"\n[{i+1}/{len(png_files)}] 处理: {png_file}")
    file_start_time = time.time()
    
    try:
        # 处理当前图像
        if process_single_image(png_file, output_root=args.output, clean=args.clean):
            success += 1
            elapsed = time.time() - file_start_time
            print(f"✅ 处理成功: {png_file} (用时: {elapsed:.2f}秒)")
        else:
            fail += 1
            elapsed = time.time() - file_start_time
            print(f"❌ 处理失败: {png_file} (用时: {elapsed:.2f}秒)")
    except KeyboardInterrupt:
        print("\n用户中断处理")
        break
    except Exception as e:
        fail += 1
        elapsed = time.time() - file_start_time
        print(f"❌ 处理出错: {png_file} (用时: {elapsed:.2f}秒)")
        print(f"  错误: {str(e)}")
        traceback.print_exc()

# 恢复原始函数（如果已修改）
try:
    if 'original_save_corners' in locals():
        file_utils.save_corners_json = original_save_corners
    if 'original_compo_detection' in locals():
        ip.compo_detection = original_compo_detection
except:
    pass

# 输出统计信息
total_time = time.time() - start_time
print(f"\n处理完成: 共 {len(png_files)} 个文件, 成功 {success} 个, 失败 {fail} 个, 跳过 {skipped} 个")
print(f"总用时: {total_time:.2f}秒")
if success > 0:
    print(f"平均每个文件 {total_time/success:.2f}秒")
print(f"结果保存在: {args.output}/fixed_solution/ 目录下") 