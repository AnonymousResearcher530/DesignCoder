import cv2
import os
import requests
import json
from base64 import b64encode
import time


def Google_OCR_makeImageData(imgpath):
    with open(imgpath, 'rb') as f:
        ctxt = b64encode(f.read()).decode()
        img_req = {
            'image': {
                'content': ctxt
            },
            'features': [{
                'type': 'DOCUMENT_TEXT_DETECTION',
                # 'type': 'TEXT_DETECTION',
                'maxResults': 1
            }]
        }
    return json.dumps({"requests": img_req}).encode()


def ocr_detection_google(imgpath):
    """Detects text in the file."""
    start = time.perf_counter()
    url = 'https://vision.googleapis.com/v1/images:annotate'
    api_key = 'AIzaSyD_iqW-PmWZ8EZjNVCHosyFDtp7JR9aR00'
    imgdata = Google_OCR_makeImageData(imgpath)
    try:
        response = requests.post(url,
                                data=imgdata,
                                params={'key': api_key},
                                headers={'Content-Type': 'application/json'})
        print(f'*** Text Detection Time Taken:{time.perf_counter() - start:.3f}s *** Input: {imgpath}')
        
        # 检查响应状态码
        if response.status_code != 200:
            print(f"Error: API returned status code {response.status_code}: {response.text}")
            return None
            
        # 检查响应是否包含'responses'字段
        response_json = response.json()
        if 'responses' not in response_json:
            print(f"Error: API response missing 'responses' field: {response_json}")
            # 创建一个空的响应结果
            return None
            
        if not response_json['responses'] or response_json['responses'] == [{}]:
            # No Text
            print(f"No text detected in the image")
            return None
        
        # 检查是否存在textAnnotations
        if 'textAnnotations' not in response_json['responses'][0]:
            print(f"No text annotations found in response")
            return None
            
        return response_json['responses'][0]['textAnnotations'][1:]
    except Exception as e:
        print(f"OCR API error: {str(e)}")
        # 打印更多异常信息以便调试
        import traceback
        traceback.print_exc()
        return None
