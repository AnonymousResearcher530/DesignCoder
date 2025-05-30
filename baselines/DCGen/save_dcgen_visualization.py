#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import sys
import cv2
import numpy as np
import random
from PIL import Image, ImageDraw

# Import DCGen module directly (we're already in the DCGen directory)
from utils import ImgSegmentation

def save_visualization(img_seg, image_path, output_dir, base_name):
    """Save segmentation visualization to output directory"""
    # Check if image exists
    if not os.path.exists(image_path):
        print(f"Error: Image file not found {image_path}")
        return
        
    # Read image
    image = cv2.imread(image_path)
    image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    
    # Create PIL image for drawing
    pil_img = Image.fromarray(image_rgb)
    draw = ImageDraw.Draw(pil_img)
    
    # Define recursive function to draw segmentation areas
    def draw_bbox(node, draw, color=(255, 0, 0), width=3):
        if hasattr(node, 'bbox') and node.bbox:
            x1, y1, x2, y2 = node.bbox
            draw.rectangle((x1, y1, x2, y2), outline=color, width=width)
            
        if hasattr(node, 'children') and node.children:
            for child in node.children:
                # Use random color for each child node
                rand_color = (
                    random.randint(0, 255),
                    random.randint(0, 255),
                    random.randint(0, 255)
                )
                draw_bbox(child, draw, rand_color, max(1, width-1))
    
    # Draw bounding boxes
    draw_bbox(img_seg, draw)
    
    # Save overlay visualization
    os.makedirs(output_dir, exist_ok=True)
    overlay_path = os.path.join(output_dir, f"{base_name}_overlay.png")
    pil_img.save(overlay_path)
    print(f"Overlay visualization saved to: {overlay_path}")
    
    # Create white background image, showing only segmentation boundaries
    white_img = Image.new('RGB', pil_img.size, (255, 255, 255))
    white_draw = ImageDraw.Draw(white_img)
    draw_bbox(img_seg, white_draw)
    
    # Save segmentation visualization
    seg_path = os.path.join(output_dir, f"{base_name}_segmentation.png")
    white_img.save(seg_path)
    print(f"Segmentation visualization saved to: {seg_path}")
    
    return overlay_path, seg_path

def main():
    """Main function"""
    if len(sys.argv) < 3:
        print("Usage: python save_dcgen_visualization.py <image_path> <output_dir> [max_depth=2]")
        sys.exit(1)
    
    # Parse arguments
    image_path = sys.argv[1]
    output_dir = sys.argv[2]
    max_depth = int(sys.argv[3]) if len(sys.argv) > 3 else 2
    
    # Get filename (without extension)
    base_name = os.path.splitext(os.path.basename(image_path))[0]
    
    # Perform segmentation
    print(f"Processing image: {image_path}")
    img_seg = ImgSegmentation(image_path, max_depth=max_depth)
    
    # Display segmentation tree
    img_seg.display_tree()
    
    # Save visualization
    save_visualization(img_seg, image_path, output_dir, base_name)
    print(f"Image {image_path} processing completed")

if __name__ == "__main__":
    main() 