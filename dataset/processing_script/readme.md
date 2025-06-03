# FigmaFileLoader

`FigmaFileLoader` is a Python utility for extracting structured data and visual assets from Figma design files via the official [Figma REST API](https://www.figma.com/developers/api). It enables the retrieval of hierarchical node information, absolute bounding boxes, textual content, and rendered image resources for selected nodes within a Figma document.

## Features

* Extracts full node structures for a given Figma node ID (typically a frame or artboard).
* Normalizes and serializes bounding box information relative to the root node.
* Identifies and saves text content and image-related nodes.
* Downloads rasterized images of vector or image-based layers.
* Retrieves and stores a screenshot of the selected artboard.


## Output Structure

```
materials/
└── <node_id>/
    ├── complete_data.json           # Complete node data
    ├── <node_id>.png                # Processed node data
    ├── <node_id>-box.json           # Normalized bounding box coordinates
    ├── <node_id>-text_images.json   # Text strings and image flags
    ├── artboard.png             # Artboard-level rendered image
    └── assets/
        ├── <node1>.png          # Rendered image of vector/image nodes
        └── ...
```

## Usage

### Requirements

* Python ≥ 3.6
* Standard library modules only (no external dependencies)

### Command-line Execution


```bash
python figma_loader.py \
  --file_id <figma_file_id> \
  --node_id <target_node_id> \
```


