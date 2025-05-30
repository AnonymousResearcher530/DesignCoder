#!/bin/bash

# 检查是否设置了Google Vision API密钥
if [ -z "$GOOGLE_VISION_API_KEY" ]; then
  echo "警告: 未设置Google Vision API密钥环境变量"
  echo "OCR功能可能无法正常工作，您将无法检测文本元素"
  echo "请设置环境变量: export GOOGLE_VISION_API_KEY=您的API密钥"
  echo "是否继续执行? (y/n)"
  read -r response
  if [[ "$response" != "y" ]]; then
    echo "已取消执行"
    exit 1
  fi
  echo "继续执行，但OCR功能可能不可用"
fi

# 检查examples/images目录是否存在图像
image_count=$(ls -1 examples/images/*.{png,jpg,jpeg,PNG,JPG,JPEG} 2>/dev/null | wc -l)
if [ "$image_count" -eq 0 ]; then
  echo "错误: examples/images 目录中没有图像文件！"
  echo "请将UI图像文件(.png, .jpg)放入 examples/images 目录"
  exit 1
fi

# 清理前一次运行的结果
echo "清理前一次运行的结果..."
rm -rf grouping_results/*

# 设置环境变量以禁用图像显示
export GUI_NO_SHOW=1

# 执行批处理脚本
echo "开始处理 examples/images 目录中的图像..."
python run_batch_auto.py --clean --output data/output

# 复制结果到grouping_results目录
echo "正在复制结果到 grouping_results 目录..."
cp -r data/output/layout/* grouping_results/
cp -r data/output/fixed_solution/* grouping_results/

echo "处理完成！结果已保存到 grouping_results 目录"
echo "请查看 grouping_results 目录中的JSON文件获取分组结果" 