from flask import Flask, render_template, request, jsonify
import re
import sys
sys.path.append('..')
from utils import ImgSegmentation, DCGenTrace, GPT4
from io import BytesIO
from PIL import Image
import base64

class FakeBot():
    def __init__(self, key) -> None:
        pass
    
    def try_ask(self, prompt, image_base64, **kwargs):
        # show the image
        img = Image.open(BytesIO(base64.b64decode(image_base64)))
        img.show()
        return "```html some code some code```"

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('interface.html')

# route images
@app.route('/example_image', methods=['POST'])
def example():
    # return base64 image
    with open('./static/example.png', 'rb') as f:
        image = f.read()
    base64_image = base64.b64encode(image).decode('utf-8')
    base64_url = f'data:image/png;base64,{base64_image}'
    return jsonify({"image": base64_url})
    
    

@app.route('/segment', methods=['POST'])
def segment():
    data = request.json
    image_base64 = data.get('image')
    depth = int(data.get('depth'))
    # convert base64 to image
    img = Image.open(BytesIO(base64.b64decode(image_base64.split(',')[1])))
    seg = ImgSegmentation(img, max_depth=depth)
    result = {
        "data": seg.to_json(),
        "depth": depth
    }
    
    return jsonify(result)


@app.route('/generate', methods=['POST'])
def generate():
    data = request.json
    image_base64 = data.get('image')
    depth = int(data.get('depth'))
    prompt_node = data.get('prompt_node')
    prompt_leaf = data.get('prompt_leaf')
    prompt_final = data.get('prompt_final')
    key = data.get('model_key')
    model = data.get('model')
    algo = data.get('algo')
    cut_out = data.get('cutout') == 'True'
    selectedBox = data.get('selectedBox')
    print(selectedBox, type(selectedBox))
    # convert string into readable file
    # create bot
    if algo == 'Line Detection':
        try:
            # bot = GPT4(key, model="gpt-4o", patience=2)
            bot = GPT4("./demo.key", model="gpt-4o")
            # bot = FakeBot(key)
            # convert base64 to image
            img = Image.open(BytesIO(base64.b64decode(image_base64.split(',')[1])))
            if selectedBox:
                seg = ImgSegmentation(img, bbox=selectedBox, max_depth=depth)
            else:
                seg = ImgSegmentation(img, max_depth=depth)

            trace = DCGenTrace.from_img_seg(seg, bot, prompt_leaf=prompt_leaf, prompt_node=prompt_node, prompt_root=prompt_final)
            # trace.display_tree()
            trace.generate_code(recursive=True, cut_out=cut_out)
            result = {
                "data": trace.to_json(),
                "depth": depth
            }
            
            return jsonify(result)
        except Exception as e:
            print(e)
            return jsonify({"error": str(e)})


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)
