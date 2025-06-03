import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function IPhone_11_Pro_X_1_173_1187(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center ${styles['group']}`}>
        <img
          className={`${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a81ebde70ac27e5caedf33101654a7f2.png"
        />
        <span className={`${styles['font']} ${styles['text']}`}>Home</span>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0eafbf524f1d54d5100be7183267a44d.png"
        />
      </div>
      <div className={`flex-col ${styles['group_2']}`}>
        <span className={`self-start ${styles['font_2']} ${styles['text_2']}`}>News</span>
        <div
          className={`flex-col justify-start items-start self-stretch relative ${styles['group_3']} ${styles['mt-21']}`}
        >
          <div className={`relative ${styles['section']}`}></div>
          <div className={`flex-col justify-start items-start ${styles['text-wrapper']} ${styles['pos']}`}>
            <span className={`${styles['font_3']} ${styles['text_3']}`}>Short news title will be here</span>
          </div>
          <div className={`${styles['section_2']} ${styles['pos_3']}`}></div>
          <div className={`flex-col justify-start items-start ${styles['text-wrapper_2']} ${styles['pos_2']}`}>
            <span className={`${styles['font_3']} ${styles['text_3']}`}>Short news title will be here</span>
          </div>
        </div>
      </div>
      <div className={`flex-col items-start ${styles['group_4']}`}>
        <span className={`${styles['font_2']} ${styles['text_4']}`}>Daily Tasks:</span>
        <div className={`flex-row ${styles['equal-division']}`}>
          <div className={`flex-col ${styles['equal-division-item']} ${styles['section_3']}`}>
            <span className={`${styles['font_4']} ${styles['text_5']}`}>Daily astromeditation</span>
            <div className={`mt-22 flex-row`}>
              <span className={`${styles['font_5']} ${styles['text_8']}`}>3</span>
              <img
                className={`ml-4 self-start ${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1d853d81f647bcec7bbd902ddf42f820.png"
              />
            </div>
          </div>
          <div className={`flex-col ${styles['equal-division-item']} ${styles['section_4']} ${styles['ml-11']}`}>
            <span className={`${styles['font_4']} ${styles['text_6']}`}>Daily sleep astromeditation</span>
            <div className={`flex-row ${styles['mt-23']}`}>
              <span className={`${styles['font_5']} ${styles['text_9']}`}>1</span>
              <img
                className={`self-start ${styles['image_3']} ${styles['ml-7']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c27f9c42236a46225ce8630bf9b449a6.png"
              />
            </div>
          </div>
          <div className={`flex-col ${styles['equal-division-item']} ${styles['section_5']} ${styles['ml-11']}`}>
            <span className={`self-start ${styles['font_4']} ${styles['text_7']}`}>Daily mantra</span>
            <div className={`mt-36 flex-row self-stretch`}>
              <span className={`${styles['font_5']} ${styles['text_10']}`}>2</span>
              <img
                className={`self-start ${styles['image_3']} ${styles['ml-3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=747e2998c975b3f2b14a075777076c8c.png"
              />
            </div>
          </div>
        </div>
        <div className={`${styles['group_5']}`}>
          <span className={`${styles['text_11']}`}>Your overall progress is</span>
          <span className={`${styles['text_12']}`}>60%</span>
        </div>
        <img
          className={`${styles['image_4']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=05c898347eaf8ab983dc135848659602.png"
        />
      </div>
      <div className={`flex-col items-start ${styles['list']}`}>
        {data.items.map((item, index) => (
          <div className={`flex-row items-center mt-10 ${styles['section_6']} ${styles['list-item']}`} key={index}>
            <div className={`flex-col flex-1`}>
              <div className={`flex-row items-center self-stretch`}>
                <img
                  className={`${styles['image_5']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7992f1fc98453429a36b0c63f1359eff.png"
                />
                <span className={`ml-14 ${styles['font']} ${styles['text_13']}`}>How was your day?</span>
              </div>
              <span className={`self-end ${styles['font_6']} ${styles['text_14']} ${styles['text_15']}`}>
                Lorem ipsum dolor sit amet, consectetur
              </span>
              <span className={`self-end ${styles['font_6']} ${styles['text_14']}`}>
                adipscing elit. Ut vel odio en urna ultrice...
              </span>
            </div>
            <img
              className={`${styles['image_6']} ${styles['ml-17']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d0075e5f460068ecf4bea686caa76109.png"
            />
          </div>
        ))}
      </div>
      <div className={`flex-row justify-between ${styles['equal-division_2']}`}>
        <img
          className={`${styles['equal-division-item_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0fa1c92c65b3246085cb3b0d454e9a6b.png"
        />
        <img
          className={`${styles['equal-division-item_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=602868ebb0b98b043a291c3653c945e2.png"
        />
        <img
          className={`${styles['equal-division-item_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d4a00d43658e387c4f5ee50ee6805916.png"
        />
        <img
          className={`${styles['equal-division-item_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=54383f2bb5dfe18b55dc0c7b84746f0f.png"
        />
        <img
          className={`${styles['equal-division-item_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7c3d140a17e06d99bca9daf11acf0fcb.png"
        />
      </div>
    </div>
  );
}

IPhone_11_Pro_X_1_173_1187.defaultProps = { className: '' };