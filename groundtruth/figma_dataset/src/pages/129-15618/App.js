import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Heater_129_15618(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-center items-center self-stretch relative ${styles['section']}`}>
        <img
          className={`${styles['image']} ${styles['pos']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=440fef9f156635f007a79c72f3eaaf8a.png"
        />
        <span className={`${styles['font']} ${styles['text']}`}>Heater</span>
        <img
          className={`${styles['image_2']} ${styles['pos_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c4138576265ae183483d2a7c6c6bad95.png"
        />
      </div>
      <div className={`flex-row self-stretch relative ${styles['group']}`}>
        <span className={`${styles['font_2']} ${styles['pos_1']}`}>20°</span>
        <span className={`${styles['font_2']} ${styles['pos_8']}`}>10°</span>
        <div className={`flex-col justify-start ${styles['group_2']} ${styles['pos_11']}`}>
          <div className={`flex-col justify-start items-start ${styles['section_2']}`}>
            <div className={`${styles['section_7']}`}></div>
          </div>
          <div className={`flex-col justify-start items-start ${styles['section_3']} ${styles['pos_3']}`}>
            <div className={`${styles['section_4']}`}></div>
            <div className={`flex-col justify-start ${styles['section_5']} ${styles['pos_5']}`}>
              <div className={`flex-col ${styles['section_6']}`}>
                <span className={`self-center ${styles['font']} ${styles['text_3']}`}>HEATING</span>
                <div className={`flex-col items-center self-stretch mt-20`}>
                  <img
                    className={`${styles['image_4']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b3d9cdd65e6716769ba5e8e51b2780ab.png"
                  />
                  <img
                    className={`${styles['image_5']} ${styles['mt-9']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=620300e2108e06dc33de5d492003423c.png"
                  />
                </div>
              </div>
            </div>
            <img
              className={`${styles['image_3']} ${styles['pos_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a98ef0f1681ad7ee8992ce249906b9a7.png"
            />
          </div>
        </div>
        <span className={`${styles['font_2']} ${styles['pos_9']}`}>30°</span>
      </div>
      <div className={`flex-col justify-start items-start self-center relative ${styles['section_8']}`}>
        <span className={`${styles['font']} ${styles['text_6']}`}>Device 1</span>
        <img
          className={`shrink-0 ${styles['image_6']} ${styles['pos_6']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7b40650c0a6faeff3b4b1f3bc5537f99.png"
        />
      </div>
      <div className={`flex-row ${styles['equal-division']} ${styles['group_3']}`}>
        <div className={`flex-col ${styles['section_9']} ${styles['section_1']}`}>
          <img
            className={`shrink-0 self-center ${styles['image_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b0bf2266a7397e0a2a6789b2930ba8cc.png"
          />
          <div className={`flex-col items-center self-stretch ${styles['mt-19']}`}>
            <span className={`${styles['font_3']} ${styles['text_4']}`}>Inside humidity</span>
            <span className={`${styles['font']} ${styles['text_5']} ${styles['mt-15']}`}>49%</span>
          </div>
        </div>
        <div className={`flex-col ${styles['section_9']} ${styles['section_10']} ml-22`}>
          <img
            className={`shrink-0 self-center ${styles['image_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6d702291582a5c8e68835de3a3f8d88a.png"
          />
          <div className={`flex-col items-start self-stretch ${styles['mt-19']}`}>
            <span className={`${styles['font_3']}`}>Outside Temp.</span>
            <span className={`${styles['font']} ${styles['text_1']} ${styles['mt-15']}`}>8°</span>
          </div>
        </div>
      </div>
      <div className={`flex-row ${styles['equal-division_2']}`}>
        <div className={`flex-col items-center ${styles['group_4']} ${styles['equal-division-item_2']}`}>
          <img
            className={`${styles['image_8']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8c7a50007acb39420e73f9a7b21fea24.png"
          />
          <span className={`${styles['font_4']} mt-6`}>MODE</span>
        </div>
        <div className={`flex-col items-center ${styles['group_4']} ${styles['equal-division-item_2']}`}>
          <img
            className={`${styles['image_8']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3c6251497ebdc1964ef2f001d8582736.png"
          />
          <span className={`${styles['font_4']} mt-6`}>ECO</span>
        </div>
        <div className={`flex-col items-center ${styles['group_4']} ${styles['equal-division-item_2']}`}>
          <img
            className={`${styles['image_8']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=dff78e44f0a54b8bbeb8efd40cffb9db.png"
          />
          <span className={`${styles['font_4']} mt-6`}>SCHEDULE</span>
        </div>
        <div className={`flex-col items-center ${styles['group_4']} ${styles['equal-division-item_2']}`}>
          <img
            className={`${styles['image_8']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8b80a021020de289bcd83d12a97d487d.png"
          />
          <span className={`${styles['font_4']} mt-6`}>HISTORY</span>
        </div>
      </div>
    </div>
  );
}

Heater_129_15618.defaultProps = { className: '' };