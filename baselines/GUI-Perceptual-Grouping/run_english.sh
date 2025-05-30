#!/bin/bash

# Check if Google Vision API key is set
if [ -z "$GOOGLE_VISION_API_KEY" ]; then
  echo "Warning: Google Vision API key environment variable is not set"
  echo "OCR functionality may not work properly, and text elements may not be detected"
  echo "Please set the environment variable: export GOOGLE_VISION_API_KEY=your-api-key"
  echo "Do you want to continue? (y/n)"
  read -r response
  if [[ "$response" != "y" ]]; then
    echo "Execution cancelled"
    exit 1
  fi
  echo "Continuing execution, but OCR functionality may not be available"
fi

# Check if examples/images directory contains images
image_count=$(ls -1 examples/images/*.{png,jpg,jpeg,PNG,JPG,JPEG} 2>/dev/null | wc -l)
if [ "$image_count" -eq 0 ]; then
  echo "Error: No image files in examples/images directory!"
  echo "Please place UI image files (.png, .jpg) in the examples/images directory"
  exit 1
fi

# Clean previous run results
echo "Cleaning previous run results..."
rm -rf grouping_results/*

# Set environment variable to disable image display
export GUI_NO_SHOW=1

# Execute batch processing script
echo "Starting to process images in examples/images directory..."
python run_batch_auto.py --clean --output data/output

# Copy results to grouping_results directory
echo "Copying results to grouping_results directory..."
cp -r data/output/layout/* grouping_results/
cp -r data/output/fixed_solution/* grouping_results/

echo "Processing complete! Results saved to grouping_results directory"
echo "Please check the JSON files in grouping_results directory for grouping results" 