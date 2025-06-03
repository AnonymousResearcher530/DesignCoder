# HTML + CSS Page Statistics Tool

This script is designed to analyze the structural complexity and content length of local HTML and CSS files in bulk. It outputs several key structural metrics, including:

* GPT-2 token count (indicates language model processing cost)
* Total number of HTML tags and CSS class selectors
* DOM tree depth
* Number of unique HTML tag types

## 📁 Data Directory

Default data path:

```bash
/data
```

Make sure this directory contains paired `.html` and `.css` files.
> **Note:** The HTML and CSS files in this folder are **built from original JSX and CSS source code** to enable consistent and unified analysis. This preprocessing ensures compatibility with HTML parsers and simplifies downstream metric extraction.
## 📦 Dependencies

Install the required dependencies before running:

```bash
pip install beautifulsoup4 lxml tiktoken
```

## ▶️ Usage

Run the script with:

```bash
python count.py
```

The script will print structured summary statistics to the terminal:

```
===== Page Metrics Summary =====
1. Length (GPT-2 tokens) : {'min': 250, 'max': 21196, 'avg': 5094.19}
2. Tag Count            : {'min': 14, 'max': 860, 'avg': 211.43}
3. DOM Depth            : {'min': 3, 'max': 14, 'avg': 9.08}
4. Unique Tags          : {'min': 8, 'max': 11, 'avg': 10.04}
```

## 📊 Metric Descriptions

| Metric      | Description                                                             |
| ----------- | ----------------------------------------------------------------------- |
| Length      | Number of GPT-2 tokens from combined HTML and CSS content               |
| Tag Count   | Total number of HTML tag nodes and CSS class selectors (e.g., `.class`) |
| DOM Depth   | Maximum DOM tree nesting depth starting from the `<html>` node          |
| Unique Tags | Number of distinct HTML tag names (e.g., `div`, `img`, `a`, etc.)       |

## 📌 Notes

* Falls back to `html.parser` if `lxml` is not available.
* Files are read in UTF-8 with errors ignored.

## ✨ Use Cases

This tool can be used for:

* Analyzing frontend UI complexity
* Estimating token cost for LLM-based UI modeling
* Extracting structured page features for machine learning tasks

## 📚 Reference

This metric extraction approach may support downstream UI code generation methods such as:

> Wan, Y., Wang, C., Dong, Y., Wang, W., Li, S., Huo, Y., & Lyu, M. R. (2024). *Automatically generating UI code from screenshot: A divide-and-conquer-based approach*. arXiv preprint [arXiv:2406.16386](https://arxiv.org/abs/2406.16386).

