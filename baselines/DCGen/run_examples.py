#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import sys
import argparse
from run_segmentation import process_single_image

def main():
    # Setup directories
    script_dir = os.path.dirname(os.path.abspath(__file__))
    examples_dir = os.path.join(script_dir, "examples")
    images_dir = os.path.join(examples_dir, "images")
    results_dir = os.path.join(examples_dir, "results")
    
    # Create directories if they don't exist
    os.makedirs(images_dir, exist_ok=True)
    os.makedirs(results_dir, exist_ok=True)
    
    # Check if example images exist
    image_files = [f for f in os.listdir(images_dir) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]
    
    if not image_files:
        print("No example images found in examples/images/ directory.")
        print("Please add some UI screenshot images to this directory and run again.")
        return
    
    print(f"Found {len(image_files)} example images. Processing...")
    
    # Process each example image with different parameter sets
    for image_file in image_files:
        input_path = os.path.join(images_dir, image_file)
        base_name = os.path.splitext(image_file)[0]
        
        print(f"\nProcessing {image_file}...")
        
        # Default parameters
        process_single_image(
            input_path=input_path,
            output_path=results_dir,
            threshold=0.5,
            min_area=100,
            visualize=True,
            save_json=True
        )
        
        # More sensitive segmentation
        process_single_image(
            input_path=input_path,
            output_path=results_dir,
            threshold=0.3,
            min_area=50,
            visualize=True,
            save_json=False
        )
        
        # Rename the output files to indicate parameters
        os.rename(
            os.path.join(results_dir, f"{base_name}_segmentation.png"),
            os.path.join(results_dir, f"{base_name}_default_segmentation.png")
        )
        os.rename(
            os.path.join(results_dir, f"{base_name}_overlay.png"),
            os.path.join(results_dir, f"{base_name}_default_overlay.png")
        )
        
        # Rename the sensitive parameter output files
        source_path = os.path.join(results_dir, f"{base_name}_segmentation.png")
        target_path = os.path.join(results_dir, f"{base_name}_sensitive_segmentation.png")
        if os.path.exists(source_path):
            os.rename(source_path, target_path)
            
        source_path = os.path.join(results_dir, f"{base_name}_overlay.png")
        target_path = os.path.join(results_dir, f"{base_name}_sensitive_overlay.png")
        if os.path.exists(source_path):
            os.rename(source_path, target_path)
    
    print("\nProcessing complete!")
    print(f"Results saved to: {results_dir}")
    print("\nTo view the results, check the following files for each image:")
    print("  - *_default_segmentation.png: Segmentation with default parameters")
    print("  - *_default_overlay.png: Overlay visualization with default parameters")
    print("  - *_sensitive_segmentation.png: Segmentation with more sensitive parameters")
    print("  - *_sensitive_overlay.png: Overlay visualization with more sensitive parameters")
    print("  - *_segments.json: Segmentation data in JSON format")

if __name__ == "__main__":
    main() 