import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function IPhone_11_Pro_X_2_173_1083(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center self-start ${styles['group_2']}`}>
        <img
          className={`${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a81ebde70ac27e5caedf33101654a7f2.png"
        />
        <span className={`${styles['font']} ${styles['text']}`}>Profile</span>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0eafbf524f1d54d5100be7183267a44d.png"
        />
      </div>
      <div className={`flex-col self-stretch ${styles['group_3']}`}>
        <div className={`flex-row self-center relative ${styles['group_1']}`}>
          <div className={`flex-col items-start ${styles['pos_8']}`}>
            <span className={`${styles['font']} ${styles['text_2']}`}>Angelica Jackson</span>
            <span className={`${styles['font_2']} ${styles['text_3']} ${styles['mt-7']}`}>Analyzer</span>
          </div>
          <div className={`flex-col justify-start items-start ${styles['group_4']} ${styles['pos_1']}`}>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=011d86bdc5e37e1374b2ae5081ebd804.png"
            />
            <img
              className={`${styles['image_4']} ${styles['pos']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0f3d1d9a5e93e694b76fa8bfcae75ca8.png"
            />
          </div>
          <span className={`${styles['font_3']} ${styles['text_4']} ${styles['pos_9']}`}>Change profile</span>
        </div>
        <div className={`flex-col self-center ${styles['group_6']}`}>
          <span className={`self-start ${styles['font_2']} ${styles['text_5']}`}>Strong side:</span>
          <div className={`flex-row self-stretch ${styles['group_7']}`}>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
              <span className={`${styles['font_3']}`}>Analytics</span>
            </div>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']} ${styles['ml-5']}`}>
              <span className={`${styles['font_3']} ${styles['text_6']}`}>Perfectionism</span>
            </div>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper']} ${styles['ml-5']}`}>
              <span className={`${styles['font_3']}`}>Analytics</span>
            </div>
          </div>
          <span className={`self-start ${styles['font_2']} ${styles['text_7']}`}>Weak side:</span>
          <div className={`flex-row self-stretch ${styles['group_8']}`}>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_3']}`}>
              <span className={`${styles['text_8']}`}>Perfectionism</span>
            </div>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_4']} ${styles['ml-5']}`}>
              <span className={`${styles['font_3']} ${styles['text_9']}`}>Analytics</span>
            </div>
          </div>
        </div>
        <div className={`flex-col self-stretch relative ${styles['group_9']}`}>
          <div className={`shrink-0 self-stretch ${styles['section_2']}`}></div>
          <span className={`self-start ${styles['text_10']}`}>My Reports:</span>
          <div className={`${styles['grid']} ${styles['pos_5']}`}>
            <div className={`flex-col relative ${styles['grid-item']}`}>
              <img
                className={`self-start ${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=32e482a9f2b5e5fa2f00e14bdc527c48.png"
              />
              <div className={`flex-col self-stretch ${styles['group_10']}`}>
                <span className={`${styles['text_11']}`}>Astro- psychological report</span>
                <span className={`${styles['font_4']} ${styles['text_13']} ${styles['text_14']} ${styles['mt-9']}`}>
                  Some short description of this type of report.
                </span>
              </div>
              <img
                className={`${styles['image_5']} ${styles['pos_2']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a619ddcb0791d7e2f00c42b3386ed1dd.png"
              />
            </div>
            <div className={`flex-col relative ${styles['grid-item_2']}`}>
              <img
                className={`self-start ${styles['image_7']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=239f7fec181c4b8a9df36a3d11f0d8aa.png"
              />
              <div className={`flex-col self-stretch ${styles['group_11']}`}>
                <span className={`${styles['font_3']} ${styles['text_12']}`}>Monthly prediction report</span>
                <span className={`${styles['font_4']} ${styles['text_15']} ${styles['text_16']} ${styles['mt-9']}`}>
                  Some short description of this type of report.
                </span>
              </div>
              <img
                className={`${styles['image_5']} ${styles['pos_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=73c9a41dc2e6533370f4a13fabdd9b35.png"
              />
            </div>
            <div className={`flex-col relative ${styles['grid-item_3']}`}>
              <img
                className={`self-start ${styles['image_8']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7319823aecd4cb0970d73ce2a46f9163.png"
              />
              <span className={`self-start ${styles['font_3']} ${styles['text_17']}`}>Daily Prediction</span>
              <span className={`self-stretch ${styles['font_4']} ${styles['text_13']} ${styles['text_19']}`}>
                Some short description of this type of report.
              </span>
              <img
                className={`${styles['image_5']} ${styles['pos_4']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4fe3e2fb63c85ffa6dd1db131b3c0f35.png"
              />
            </div>
            <div className={`flex-col ${styles['grid-item_4']}`}>
              <img
                className={`self-start ${styles['image_9']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=067d32faf42649649a7fca51821fedd4.png"
              />
              <span className={`self-start ${styles['font_3']} ${styles['text_18']} mt-12`}>Love report</span>
              <span className={`self-stretch ${styles['font_4']} ${styles['text_15']} ${styles['text_20']} mt-12`}>
                Some short description of this type of report.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-row justify-between ${styles['equal-division']} ${styles['group_12']}`}>
        <img
          className={`${styles['equal-division-item_1']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=46db67fb2f7d8ae4715c19d433dfca9a.png"
        />
        <img
          className={`${styles['equal-division-item']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=cd11a1e0bc563a0c07a2f13126ea3bd9.png"
        />
        <img
          className={`${styles['equal-division-item_3']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d4a00d43658e387c4f5ee50ee6805916.png"
        />
        <img
          className={`${styles['equal-division-item_4']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=54383f2bb5dfe18b55dc0c7b84746f0f.png"
        />
        <img
          className={`${styles['equal-division-item_3']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7c3d140a17e06d99bca9daf11acf0fcb.png"
        />
      </div>
    </div>
  );
}

IPhone_11_Pro_X_2_173_1083.defaultProps = { className: '' };