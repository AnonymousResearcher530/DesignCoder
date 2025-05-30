#!/bin/bash

# Set color output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}[INFO]${NC} Running DCGen baseline for UI segmentation..."

# Create results directory
mkdir -p results

# Get current script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Get examples directory path (relative to DCGen directory)
EXAMPLES_DIR="${SCRIPT_DIR}/examples"
mkdir -p "${EXAMPLES_DIR}/images"

# Find all images in examples directory
for img in "${EXAMPLES_DIR}/images"/*.png "${EXAMPLES_DIR}/images"/*.jpg "${EXAMPLES_DIR}/images"/*.jpeg; do
  if [ -f "$img" ]; then
    filename=$(basename -- "$img")
    base_name="${filename%.*}"
    
    echo -e "${BLUE}[INFO]${NC} Processing image: $img"
    
    # Run DCGen segmentation and save visualization
    python "${SCRIPT_DIR}/save_dcgen_visualization.py" "$img" "${SCRIPT_DIR}/results"
  fi
done

echo -e "${GREEN}[SUCCESS]${NC} DCGen segmentation completed!"
echo -e "${BLUE}[INFO]${NC} Results saved in the ${SCRIPT_DIR}/results/ directory"
echo -e "${BLUE}[INFO]${NC} You can check the following files:"
echo "  - *_segmentation.png: Segmentation visualization"
echo "  - *_overlay.png: Segmentation visualization overlaid on original image"
echo "  - *_segments.json: Segmentation data in JSON format" 