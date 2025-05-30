# Grouping Results

This directory contains the output files from the GUI-Perceptual-Grouping tool.

## Output Files

For each processed image, two JSON files are generated:

1. **`{image_name}.json`** - Contains the component tree and layout information:
   - Component hierarchy with parent-child relationships
   - Element positions, sizes and classes
   - Semantic grouping of elements

2. **`{image_name}-list.json`** - Contains identified list structures:
   - List items and their components
   - UI patterns such as repeating elements
   - Multi-tab structures if present

## File Structure

### Component Tree JSON Structure

```json
[
  {
    "id": "b-0",
    "class": "Block",
    "children": [
      {
        "id": "b-1",
        "class": "Block",
        "children": [...]
      },
      {
        "id": "c-2",
        "class": "Compo",
        "pair_to": "c-3"
      },
      ...
    ],
    "location": {
      "left": 0,
      "top": 0,
      "right": 800,
      "bottom": 600
    }
  }
]
```

### List JSON Structure

```json
{
  "ui": "image_name",
  "list": [
    [
      [{"id": "c-1", "class": "Item"}],
      [{"id": "c-2", "class": "Item"}],
      ...
    ],
    ...
  ],
  "multitab": []
}
``` 