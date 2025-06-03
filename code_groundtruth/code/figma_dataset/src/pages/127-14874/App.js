import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Homescreen_1_127_14874(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center ${styles['group']}`}>
        <div className={`flex-row items-center`}>
          <img
            className={`shrink-0 ${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=aa494de25300bc365b0ec60eb249f976.png"
          />
          <span className={`${styles['text']} ${styles['ml-15']}`}>Cart</span>
        </div>
        <div className={`flex-row items-center ${styles['group_2']}`}>
          <span className={`${styles['font']} ${styles['text_2']}`}>1</span>
          <span className={`${styles['text_3']} ${styles['ml-9']}`}>Item(s)</span>
        </div>
      </div>
      <div className={`flex-row items-center ${styles['section']}`}>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fcf66ca2fc4cd6e7f71c769341404f08.png"
          />
        </div>
        <div className={`ml-12 flex-col flex-1`}>
          <span className={`self-start ${styles['font']} ${styles['text_4']}`}>Mixed Black Coffee</span>
          <div className={`mt-14 flex-row items-center self-stretch`}>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7d049a4fa8fa57e7d7183a9c8871dd05.png"
            />
            <span className={`ml-6 ${styles['font_2']} ${styles['text_5']}`}>4.5</span>
          </div>
          <div className={`mt-14 flex-row justify-between items-center self-stretch`}>
            <div className={`flex-row items-center`}>
              <span className={`${styles['font_3']} ${styles['text_6']}`}>$</span>
              <span className={`${styles['font_3']} ${styles['text_7']}`}>12</span>
            </div>
            <div className={`flex-row items-center ${styles['section_2']}`}>
              <div className={`${styles['section_3']}`}></div>
              <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
                <span className={`${styles['font_4']} ${styles['text_8']}`}>0</span>
              </div>
              <img
                className={`${styles['image_4']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f5e17092aee374090b32ec4808e774db.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['group_3']}`}>
        <div className={`flex-row justify-between`}>
          <span className={`${styles['font_4']}`}>Sub Total</span>
          <span className={`${styles['text_9']}`}>12</span>
        </div>
        <div className={`flex-row justify-between ${styles['mt-27']}`}>
          <span className={`${styles['font_3']} ${styles['text_10']}`}>TOTAL</span>
          <div className={`flex-row items-center`}>
            <span className={`${styles['text_11']}`}>$</span>
            <span className={`ml-2 ${styles['font']} ${styles['text_12']}`}>12</span>
          </div>
        </div>
      </div>
      <div className={`flex-col justify-start ${styles['section_4']}`}>
        <div className={`flex-row ${styles['equal-division']}`}>
          <div className={`flex-col items-center ${styles['group_4']} ${styles['equal-division-item']}`}>
            <img
              className={`${styles['image_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ffd3e0180c3743e77d0f679f109afae9.png"
            />
            <span className={`mt-2 ${styles['font_2']}`}>Home</span>
          </div>
          <div className={`flex-col items-center ${styles['group_4']} ${styles['equal-division-item']}`}>
            <img
              className={`${styles['image_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=950ac28366576ae4008740a8ffadeff0.png"
            />
            <span className={`mt-2 ${styles['font_2']} ${styles['text_15']}`}>Menu</span>
          </div>
          <div className={`flex-col items-center ${styles['group_4']} ${styles['equal-division-item']}`}>
            <img
              className={`${styles['image_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1c99435051cc6718c87626869256e848.png"
            />
            <span className={`${styles['font_2']} ${styles['text_13']}`}>Favourite</span>
          </div>
          <div className={`flex-col items-center ${styles['group_4']} ${styles['equal-division-item']}`}>
            <img
              className={`shrink-0 ${styles['image_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=66dc6581f3b2e38e83017eee9334d197.png"
            />
            <span className={`${styles['font_2']} ${styles['text_14']}`}>Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Homescreen_1_127_14874.defaultProps = { className: '' };