#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import cv2
import argparse
import numpy as np
from PIL import Image
import matplotlib.pyplot as plt
from utils import segmentation, draw_segmentation, save_segmentation_json

def process_single_image(input_path, output_path, threshold=0.5, min_area=100, visualize=True, save_json=True):
    """Process a single image for segmentation."""
    # Create output directory if it doesn't exist
    os.makedirs(output_path, exist_ok=True)
    
    # Get the base filename without extension
    base_name = os.path.splitext(os.path.basename(input_path))[0]
    
    # Read the image
    image = cv2.imread(input_path)
    if image is None:
        print(f"Error: Could not read image {input_path}")
        return False
    
    # Convert BGR to RGB
    image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    
    # Perform segmentation
    segments = segmentation(image_rgb, threshold=threshold, min_area=min_area)
    
    # Save results
    if visualize:
        # Generate visualization
        visualization = draw_segmentation(image_rgb, segments)
        
        # Save visualization
        output_file = os.path.join(output_path, f"{base_name}_segmentation.png")
        plt.figure(figsize=(12, 8))
        plt.imshow(visualization)
        plt.axis('off')
        plt.tight_layout()
        plt.savefig(output_file, dpi=150, bbox_inches='tight')
        plt.close()
        
        # Save overlay visualization
        overlay = draw_segmentation(image_rgb, segments, overlay=True)
        overlay_file = os.path.join(output_path, f"{base_name}_overlay.png")
        plt.figure(figsize=(12, 8))
        plt.imshow(overlay)
        plt.axis('off')
        plt.tight_layout()
        plt.savefig(overlay_file, dpi=150, bbox_inches='tight')
        plt.close()
        
        print(f"Visualization saved to {output_file}")
        print(f"Overlay visualization saved to {overlay_file}")
    
    if save_json:
        # Save segmentation data as JSON
        json_file = os.path.join(output_path, f"{base_name}_segments.json")
        save_segmentation_json(segments, json_file, image.shape)
        print(f"Segmentation data saved to {json_file}")
    
    return True

def process_directory(input_dir, output_dir, threshold=0.5, min_area=100, visualize=True, save_json=True):
    """Process all images in a directory."""
    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)
    
    # Get all image files
    image_extensions = ['.jpg', '.jpeg', '.png', '.bmp']
    image_files = []
    
    for file in os.listdir(input_dir):
        if any(file.lower().endswith(ext) for ext in image_extensions):
            image_files.append(os.path.join(input_dir, file))
    
    if not image_files:
        print(f"No image files found in {input_dir}")
        return False
    
    # Process each image
    success_count = 0
    for image_file in image_files:
        print(f"Processing {image_file}...")
        if process_single_image(image_file, output_dir, threshold, min_area, visualize, save_json):
            success_count += 1
    
    print(f"Processed {success_count}/{len(image_files)} images successfully")
    return True

def main():
    parser = argparse.ArgumentParser(description="DCGen UI Segmentation Tool")
    
    # Input arguments
    input_group = parser.add_mutually_exclusive_group(required=True)
    input_group.add_argument('--input_path', type=str, help='Path to the input image')
    input_group.add_argument('--input_dir', type=str, help='Path to the directory containing input images')
    
    # Output arguments
    parser.add_argument('--output_path', type=str, help='Path to save the output (default: ./results/)', default='./results/')
    parser.add_argument('--output_dir', type=str, help='Path to save the batch outputs (default: ./results/)', default='./results/')
    
    # Segmentation parameters
    parser.add_argument('--threshold', type=float, default=0.5, help='Segmentation sensitivity threshold (default: 0.5)')
    parser.add_argument('--min_area', type=int, default=100, help='Minimum area of a segment (default: 100)')
    
    # Output options
    parser.add_argument('--visualize', action='store_true', default=True, help='Generate visualization of the segmentation')
    parser.add_argument('--no_visualize', dest='visualize', action='store_false', help='Do not generate visualization')
    parser.add_argument('--save_json', action='store_true', default=True, help='Save segmentation results as JSON')
    parser.add_argument('--no_save_json', dest='save_json', action='store_false', help='Do not save JSON results')
    
    args = parser.parse_args()
    
    if args.input_path:
        # Process a single image
        process_single_image(args.input_path, args.output_path, args.threshold, args.min_area, args.visualize, args.save_json)
    else:
        # Process a directory of images
        process_directory(args.input_dir, args.output_dir, args.threshold, args.min_area, args.visualize, args.save_json)

if __name__ == "__main__":
    main() 