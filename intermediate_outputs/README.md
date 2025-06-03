## Intermediate Outputs

We provide detailed intermediate outputs from our pipeline to enhance transparency and support further analysis of our GUI-to-code generation process. Each example includes raw inputs, segmentation and semantic extraction outputs, grouping results, and final code artifacts.


### Directory Structure

```
intermediate_outputs/
├── example1/
│   ├── 1048.json                        # Processed UI JSON from Figma as input
│   ├── artboard.png                     # Screenshot of the original UI
│   ├── render_output.png                # Rendered output from generated code
│   │
│   ├── assets/                          # All image assets used in the UI
│   └── inter_results/                   # Full intermediate pipeline outputs
│       ├── region_info.json             # Final division results
│       ├── region_element_marked.png    # Marked UI divisions visualization
│       ├── segment.json                 # Raw segmentation output
│       │
│       ├── code/                        # Final generated React code
│       ├── css/                         # Corresponding CSS files
│       ├── group/                       # Grouping results (pre & post-process)
│       ├── semantic/                    # Structured semantic representation
│       └── sub_img/                     # Sub-image crops for each grouped region

```

### Generation Process

1. **Input**:
   The input consists of a preprocessed JSON file (`<id>.json`) and the corresponding UI screenshot (`artboard.png`). These serve as the raw inputs to the pipeline.

2. **Segmentation**:
   The UI is first segmented into functional regions using an LLM-based method, with initial results stored in `segment.json`. A postprocessing step is applied to assign any unclassified elements to the nearest valid region. The final segmentation is visualized in the output.

3. **Semantic Extraction**:
   For each region, semantic description of each element is extracted and saved in `semantic.json`.

4. **Grouping**:
   Regions are grouped into hierarchical UI components based on their semantic features. The initial grouping is stored in `group/`. A tree-structure correction algorithm is then applied to fix spatial inconsistencies, such as overlapping bounding boxes between non-parent-child nodes, yielding the final grouping.

5. **Code Generation**:
   Based on the grouping results, the system synthesizes frontend code in React and CSS. The generated code is stored in the `code/` and `css/` directories.