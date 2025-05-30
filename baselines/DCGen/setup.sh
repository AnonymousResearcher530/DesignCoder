#!/bin/bash

# 设置DCGen环境
echo "Setting up DCGen environment..."

# 安装依赖
echo "Installing dependencies..."
pip install -r requirements.txt

# 创建必要的目录
echo "Creating necessary directories..."
mkdir -p examples/images results

echo "DCGen setup complete!"
echo "You can now place your UI images in examples/images/ directory."
echo "Use run_baseline.sh or run_baseline_english.sh to process the images." 