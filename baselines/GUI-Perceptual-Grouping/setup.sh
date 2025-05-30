#!/bin/bash

# 安装Python依赖
echo "正在安装Python依赖..."
pip install -r requirements.txt

# 创建必要的目录结构
echo "创建目录结构..."
mkdir -p examples/images
mkdir -p grouping_results
mkdir -p data/output/ip
mkdir -p data/output/ocr
mkdir -p data/output/uied
mkdir -p data/output/layout
mkdir -p data/output/fixed_solution

# 提示用户设置API密钥
echo ""
echo "====================================================="
echo "重要: 您需要提供Google Vision API密钥才能运行OCR功能"
echo "请访问 https://cloud.google.com/vision/docs/setup 获取API密钥"
echo "然后设置环境变量:"
echo "export GOOGLE_VISION_API_KEY=您的API密钥"
echo "====================================================="
echo ""

echo "安装完成！"
echo "请将UI图像放入 examples/images 目录"
echo "使用 ./run.sh 命令运行项目" 