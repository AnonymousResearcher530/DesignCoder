import os
import sys
import glob
import json
import shutil
import argparse
from GUI import GUI

def check_api_key():
    """检查是否设置了Google Vision API密钥环境变量"""
    api_key = os.environ.get('GOOGLE_VISION_API_KEY')
    if not api_key:
        print("\n警告: 未设置Google Vision API密钥环境变量")
        print("OCR功能可能无法正常工作，您将无法检测文本元素")
        print("请设置环境变量: GOOGLE_VISION_API_KEY=您的API密钥")
        print("您可以访问 https://cloud.google.com/vision/docs/setup 获取API密钥\n")
        response = input("是否继续执行? (y/n): ")
        if response.lower() != 'y':
            print("已取消执行")
            sys.exit(1)
        print("继续执行，但OCR功能可能不可用\n")

def process_image(image_path, output_dir='data/output'):
    """处理单个UI图像，执行元素检测和布局识别"""
    # 确保输出目录存在
    os.makedirs(output_dir, exist_ok=True)
    
    # 提取文件名（不含路径和扩展名）
    file_name = os.path.basename(image_path).split('.')[0]
    
    print(f"正在处理图像: {file_name}")
    
    # 创建GUI对象并执行处理
    gui = GUI(image_path, output_dir=output_dir)
    
    # 1. 执行元素检测
    print("  - 执行元素检测...")
    gui.detect_element(is_ocr=True, is_non_text=True, is_merge=True)
    
    # 2. 加载检测结果
    print("  - 加载检测结果...")
    gui.load_detection_result()
    
    # 3. 执行布局识别
    print("  - 执行布局识别...")
    gui.recognize_layout(is_save=True)
    
    # 4. 复制结果到grouping_results目录
    grouping_dir = 'grouping_results'
    os.makedirs(grouping_dir, exist_ok=True)
    
    layout_json = f"{output_dir}/layout/{file_name}.json"
    list_json = f"{output_dir}/layout/{file_name}-list.json"
    
    if os.path.exists(layout_json):
        shutil.copy(layout_json, f"{grouping_dir}/{file_name}.json")
    
    if os.path.exists(list_json):
        shutil.copy(list_json, f"{grouping_dir}/{file_name}-list.json")
    
    print(f"处理完成: {file_name}")
    print(f"结果已保存到 {grouping_dir} 目录")
    
    return True

def main():
    parser = argparse.ArgumentParser(description='处理UI图像进行元素检测和布局识别')
    parser.add_argument('--image', type=str, help='要处理的图像文件路径')
    parser.add_argument('--dir', type=str, default='examples/images', help='包含图像的目录')
    parser.add_argument('--output', type=str, default='data/output', help='输出目录')
    parser.add_argument('--skip-api-check', action='store_true', help='跳过API密钥检查')
    args = parser.parse_args()
    
    # 设置环境变量以禁用图像显示
    os.environ['GUI_NO_SHOW'] = '1'
    
    # 检查API密钥
    if not args.skip_api_check:
        check_api_key()
    
    if args.image:
        # 处理单个图像
        if not os.path.exists(args.image):
            print(f"错误: 图像文件不存在: {args.image}")
            return
        
        process_image(args.image, args.output)
    else:
        # 处理目录中的所有图像
        image_files = []
        for ext in ['*.png', '*.jpg', '*.jpeg', '*.PNG', '*.JPG', '*.JPEG']:
            image_files.extend(glob.glob(os.path.join(args.dir, ext)))
        
        if not image_files:
            print(f"错误: 目录中没有图像文件: {args.dir}")
            return
        
        print(f"找到 {len(image_files)} 个图像文件")
        
        for i, image_path in enumerate(sorted(image_files)):
            print(f"\n[{i+1}/{len(image_files)}] 处理: {image_path}")
            process_image(image_path, args.output)

if __name__ == "__main__":
    main() 