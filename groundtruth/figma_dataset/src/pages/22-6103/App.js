import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Light_Dashboard_22_6103(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col items-center self-center`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=458035ec3db8cb7a56443c71eedb5ca3.png"
        />
        <span className={`${styles['font']} ${styles['text']} ${styles['mt-17']}`}>Elina Krohnke</span>
      </div>
      <div className={`flex-col self-stretch ${styles['group']}`}>
        <div className={`flex-row justify-between relative ${styles['section_2']}`}>
          <div className={`flex-col self-start ${styles['group_2']}`}>
            <span className={`self-start ${styles['font_2']} ${styles['text_2']}`}>Sleep</span>
            <div className={`flex-row items-center self-stretch ${styles['group_3']}`}>
              <img
                className={`shrink-0 ${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=17eb2ad889746a97023be1b1009b72ec.png"
              />
              <span className={`${styles['font_3']} ${styles['text_3']} ${styles['ml-21']}`}>9h 08m </span>
            </div>
            <span className={`self-center ${styles['font_2']} ${styles['text_4']} ${styles['text_5']}`}>
              of 8h sleep
            </span>
          </div>
          <img
            className={`self-center ${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bc8788a59516f390f66f1c3d73c5b9d7.png"
          />
          <img
            className={`${styles['image_4']} ${styles['pos']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0c6ef494cf784b33e4f691578d025729.png"
          />
        </div>
        <div className={`flex-col justify-start items-center relative ${styles['section_3']} mt-20`}>
          <img
            className={`${styles['image_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2f94e2f7aef5c5c2e5fc8bced4328679.png"
          />
          <img
            className={`${styles['image_5']} ${styles['pos_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=17c8c17d7429d9a2e1d295ed7a80c315.png"
          />
          <div className={`flex-col ${styles['section_4']} ${styles['pos_2']}`}>
            <span className={`self-start ${styles['font_2']} ${styles['text_6']}`}>Blood Pressure (bpm)</span>
            <div className={`flex-row justify-between self-stretch ${styles['group_1']}`}>
              <div className={`flex-row items-center self-center`}>
                <img
                  className={`shrink-0 ${styles['image_8']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ed50432901be3c86133670cca782a1a4.png"
                />
                <span className={`${styles['font_3']} ${styles['text_7']} ${styles['ml-19']}`}>130/90</span>
              </div>
              <img
                className={`self-start ${styles['image_7']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=be3b7a8d0039bc759e9a189b2fd7df44.png"
              />
            </div>
            <span className={`self-start ${styles['font_2']} ${styles['text_4']} ${styles['text_8']}`}>15 min ago</span>
            <img
              className={`${styles['image_4']} ${styles['pos_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=828b055c18fde676bfcb583d74252517.png"
            />
          </div>
        </div>
        <div className={`flex-row mt-20`}>
          <div className={`flex-col ${styles['section_5']}`}>
            <div className={`flex-row items-start`}>
              <div className={`flex-col items-start flex-1 ${styles['group_4']}`}>
                <span className={`${styles['font_4']} ${styles['text_9']}`}>Mood</span>
                <span className={`${styles['font']} mt-10`}>Feeling</span>
              </div>
              <div className={`flex-col justify-start items-center shrink-0 ${styles['image-wrapper']}`}>
                <img
                  className={`${styles['image_9']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d14e5c89d05d7014e2d516bf7acfd9a1.png"
                />
              </div>
            </div>
            <div className={`flex-row justify-between mt-2`}>
              <span className={`${styles['font']} ${styles['text_1']}`}>Good</span>
              <img
                className={`self-start ${styles['image_4']} ${styles['image_11']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=70daf5d4659a0172f7aa41c8d9a43266.png"
              />
            </div>
          </div>
          <div className={`flex-col justify-start ${styles['section_6']} ${styles['ml-11']}`}>
            <div className={`flex-col ${styles['section_7']}`}>
              <div className={`flex-col items-start`}>
                <span className={`${styles['font_5']}`}>Very Mild</span>
                <span className={`${styles['font_5']} ${styles['mt-1']}`}>anxiety</span>
              </div>
              <div className={`flex-row justify-between ${styles['mt-11']}`}>
                <img
                  className={`${styles['image_10']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=72883c2c3fc476e664f3a6f1b11f2450.png"
                />
                <img
                  className={`self-start ${styles['image_4']} ${styles['image_12']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=70daf5d4659a0172f7aa41c8d9a43266.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`flex-col justify-start ${styles['section_8']} mt-20`}>
          <div className={`flex-col ${styles['section_9']}`}>
            <span className={`self-start ${styles['font_4']}`}>Strees level</span>
            <img
              className={`self-center ${styles['image_13']} ${styles['mt-3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d48c3982c627c5d3341e5784bfcb528b.png"
            />
          </div>
        </div>
      </div>
      <div className={`flex-col self-stretch ${styles['section_10']}`}>
        <div className={`flex-row justify-between items-start ${styles['equal-division']}`}>
          <img
            className={`${styles['equal-division-item_2']} ${styles['image_14']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=029f4509225b1346969edb6c4fc478d8.png"
          />
          <img
            className={`${styles['equal-division-item_3']} ${styles['image_15']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6e800437aadd8ced72285a9fa1743be2.png"
          />
          <img
            className={`${styles['equal-division-item_2']} ${styles['image_16']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ed96eb1cfd78faa60b7b00f5a6c16cef.png"
          />
          <img
            className={`${styles['equal-division-item']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7dfef0eb008f5fb94eccc43f12c4b028.png"
          />
        </div>
        <span className={`self-end ${styles['text_10']}`}>Journal</span>
      </div>
    </div>
  );
}

Light_Dashboard_22_6103.defaultProps = { className: '' };