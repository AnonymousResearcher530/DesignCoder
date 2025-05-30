#!/bin/bash

# 设置颜色输出
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}[INFO]${NC} 正在运行DCGen baseline进行UI分割..."

# 创建结果目录
mkdir -p results

# 获取当前脚本所在目录
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# 获取examples目录路径（相对于DCGen目录）
EXAMPLES_DIR="${SCRIPT_DIR}/examples"
mkdir -p "${EXAMPLES_DIR}/images"

# 查找examples目录中的所有图像
for img in "${EXAMPLES_DIR}/images"/*.png "${EXAMPLES_DIR}/images"/*.jpg "${EXAMPLES_DIR}/images"/*.jpeg; do
  if [ -f "$img" ]; then
    filename=$(basename -- "$img")
    base_name="${filename%.*}"
    
    echo -e "${BLUE}[INFO]${NC} 处理图像: $img"
    
    # 运行DCGen分割并保存可视化
    python "${SCRIPT_DIR}/save_dcgen_visualization.py" "$img" "${SCRIPT_DIR}/results"
  fi
done

echo -e "${GREEN}[SUCCESS]${NC} DCGen分割完成！"
echo -e "${BLUE}[INFO]${NC} 结果保存在 ${SCRIPT_DIR}/results/ 目录中"
echo -e "${BLUE}[INFO]${NC} 可以查看以下文件："
echo "  - *_segmentation.png: 分割可视化结果"
echo "  - *_overlay.png: 叠加原始图像的分割可视化"
echo "  - *_segments.json: 分割数据JSON格式" 