# Dataset

## Motivation

Existing large-scale UI datasets such as **RICO** are primarily designed for **image-based code generation**, focusing on static screenshots rather than structured design data. However, in practical scenarios, code is typically generated from **GUI design files** created in tools like Figma, which contain richer structural and semantic information.

Currently, there is a lack of representative datasets for **GUI-to-code generation**, limiting research in this more realistic and production-relevant setting. To address this gap, we construct a new dataset based on real GUI design files.

## Data Contents

The dataset comprises **300 complete mobile UI pages**, including:

- **250 designs** sourced from the **Figma Community**, spanning diverse app domains.
- **50 designs** collected from **Chinese commercial applications**, reflecting real-world industrial practices.

Each UI sample includes:

- **Design JSON**: Structured metadata exported from Figma, detailing the UI hierarchy, properties, and styles.
- **Screenshot**: Rendered image of the full UI page.
- **UI Assets**: All visual assets used in the design.

## Data Collection Process & Representativeness

To construct a dataset reflective of real-world GUI design practices, we curated 300 mobile UI pages via two sources:

- **Figma Community Designs (250 samples)**: High-quality public projects were selected based on popularity (e.g., number of likes), covering diverse domains such as entertainment, education, health, shopping, and travel. These designs capture contemporary design trends.
- **Commercial Designs (50 samples)**: Original Figma files were directly sourced from Chinese commercial companies, providing authentic, production-grade UIs from deployed mobile applications.

All samples were manually reviewed to ensure visual completeness, structural validity, and diversity in layout and components. The dataset supports comprehensive and generalizable evaluation of GUI code generation.

## Data Statistics

We provide a detailed statistical analysis of the 300 mobile UI pages included in our dataset to demonstrate its diversity and complexity.

| Metric          | Min  | Max    | Average  |
| --------------- | ---- | ------ | -------- |
| Length (tokens) | 250  | 21,196 | 5,094.19 |
| Tag Count       | 14   | 860    | 211.43   |
| DOM Depth       | 3    | 14     | 9.08     |
| Unique Tags     | 8    | 11     | 10.04    |
| **Total Size**  |      |        | **300**  |

- **Length (tokens)**: Refers to the number of tokens in the JSON UI description. The wide range reflects varying page complexities.
- **Tag Count**: Indicates the number of UI nodes per page, showing variability in layout scale and granularity.
- **DOM Depth**: Captures the hierarchical depth of the UI tree, reflecting the nesting structure typical in modern UI design.
- **Unique Tags**: Represents the number of different tag types used on each page, highlighting component diversity.

These statistics demonstrate that the dataset contains a broad spectrum of design structures and complexities, enabling robust evaluation of UI code generation models.