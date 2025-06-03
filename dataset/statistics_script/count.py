import os
import re
import statistics
from bs4 import BeautifulSoup, FeatureNotFound

# 尝试用 lxml，否则 fallback 到 html.parser
PARSER = 'lxml'
try:
    BeautifulSoup('<html></html>', PARSER)
except FeatureNotFound:
    PARSER = 'html.parser'

DATA_DIR = '/data'

# 在 CSS 中匹配类选择器的正则
CSS_CLASS_SELECTOR_RE = re.compile(r'\.([A-Za-z0-9_-]+)')

# ---------- GPT-2 Tokenizer 设置 （使用 tiktoken） ----------
import tiktoken
encoder = tiktoken.get_encoding("gpt2")

def count_gpt2_tokens(text: str) -> int:
    return len(encoder.encode(text))
# ---------------------------------------------------------------

def get_dom_depth(node):
    """ 递归计算节点最大嵌套深度（自身算 1）。"""
    if not getattr(node, 'contents', None):
        return 1
    depths = [get_dom_depth(child)
              for child in node.contents
              if getattr(child, 'name', None)]
    return 1 + (max(depths) if depths else 0)

# 存放所有页面指标
lengths = []
tag_counts = []
dom_depths = []
unique_tags_counts = []

for root, _, files in os.walk(DATA_DIR):
    for fn in files:
        if not fn.lower().endswith('.html'):
            continue

        html_path = os.path.join(root, fn)
        css_path  = os.path.join(root, fn[:-5] + '.css')

        # 读取 HTML + CSS
        with open(html_path, 'r', encoding='utf-8', errors='ignore') as f:
            html_text = f.read()
        css_text = ''
        if os.path.exists(css_path):
            with open(css_path, 'r', encoding='utf-8', errors='ignore') as f:
                css_text = f.read()

        # 1. Length (GPT-2 tokens)
        combined = html_text + '\n' + css_text
        lengths.append(count_gpt2_tokens(combined))

        # 解析 HTML
        soup = BeautifulSoup(html_text, PARSER)
        all_tags = soup.find_all()

        # 2. Tag Count = HTML 标签节点数 + CSS 中类选择器数
        html_tag_count = len(all_tags)
        css_class_count = len(CSS_CLASS_SELECTOR_RE.findall(css_text))
        tag_counts.append(html_tag_count + css_class_count)

        # 3. DOM Depth：从 <html> 节点开始
        root_node = soup.find('html') or soup
        dom_depths.append(get_dom_depth(root_node))

        # 4. Unique Tags：HTML 中不同标签名的数量
        unique_tags_counts.append(len({t.name for t in all_tags}))

def summarize(lst):
    return {
        'min': min(lst),
        'max': max(lst),
        'avg': round(statistics.mean(lst), 2)
    }

print("===== 页面指标汇总 =====")
print("1. Length (GPT-2 tokens) :", summarize(lengths))
print("2. Tag Count            :", summarize(tag_counts))
print("3. DOM Depth            :", summarize(dom_depths))
print("4. Unique Tags          :", summarize(unique_tags_counts))
