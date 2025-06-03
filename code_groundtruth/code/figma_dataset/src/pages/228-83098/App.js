import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Detail_228_83098(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start`}>
        <div className={`flex-col ${styles['group']}`}>
          <div className={`flex-row justify-between ${styles['group_2']}`}>
            <span className={`${styles['text']}`}>9:41</span>
            <div className={`flex-row`}>
              <img
                className={`${styles['image']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0b2251689996a6e79bc376536a09795e.png"
              />
              <img
                className={`${styles['image_2']} ${styles['ml-5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5b438f309bbbbaf35c0093592446d679.png"
              />
              <img
                className={`${styles['image_3']} ${styles['ml-5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7f88c7dc7a595350279d45f871baf6b0.png"
              />
            </div>
          </div>
          <div className={`flex-row justify-center relative ${styles['group_3']} mt-24`}>
            <img
              className={`self-center ${styles['image_5']} ${styles['pos_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a3527e4409863607dd572c2fa2ec4783.png"
            />
            <span className={`self-start ${styles['font']}`}>Details product</span>
            <div className={`flex-col justify-start items-center ${styles['group_4']} ${styles['pos']}`}>
              <img
                className={`${styles['image_4']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f1c9967dd5075d71ec1b2fa14ae99484.png"
              />
              <div className={`flex-col justify-start items-center ${styles['text-wrapper']} ${styles['pos_2']}`}>
                <span className={`${styles['text_2']}`}>2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['group_1']}`}>
        <img
          className={`${styles['image_6']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7cd2d260bc987278d99724fcab5246da.png"
        />
        <div className={`flex-row justify-between ${styles['group_5']}`}>
          <div className={`flex-col ${styles['group_6']}`}>
            <span className={`self-start ${styles['font']}`}>Air pods max by Apple</span>
            <div className={`flex-row items-baseline self-stretch mt-10`}>
              <span className={`${styles['text_3']}`}>$ 1999,99</span>
              <span className={`${styles['font_2']} ${styles['text_4']} ml-10`}>( 219 people buy this )</span>
            </div>
          </div>
          <img
            className={`${styles['image_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bcb7fd8a1f1ac3b30455191fe4d6cecf.png"
          />
        </div>
        <div className={`flex-col ${styles['group_8']}`}>
          <span className={`self-start ${styles['font_3']} ${styles['text_5']}`}>Choose the color</span>
          <div className={`flex-row self-stretch mt-12`}>
            <div className={`${styles['section']}`}></div>
            <div className={`relative ${styles['section_2']} ${styles['ml-11']}`}></div>
            <div className={`${styles['section_3']} ${styles['ml-11']}`}></div>
            <div className={`${styles['section_4']} ${styles['ml-11']}`}></div>
            <div className={`${styles['section_5']} ${styles['ml-11']}`}></div>
          </div>
        </div>
        <div className={`flex-row justify-between items-center ${styles['group_10']}`}>
          <div className={`flex-row items-center`}>
            <img
              className={`${styles['image_8']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a0c5e6e0462f05802efbe26990c8f3f8.png"
            />
            <div className={`flex-col items-start ml-12`}>
              <span className={`${styles['font']} ${styles['text_6']}`}>Apple Store</span>
              <span className={`${styles['font_4']} ${styles['text_8']} ${styles['mt-7']}`}>online 12 mins ago</span>
            </div>
          </div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']}`}>
            <span className={`${styles['font_3']} ${styles['text_7']}`}>Follow</span>
          </div>
        </div>
        <div className={`flex-col ${styles['group_11']}`}>
          <span className={`self-start ${styles['font']} ${styles['text_9']}`}>Description of product</span>
          <span className={`self-stretch ${styles['font_4']} ${styles['text_10']} ${styles['mt-11']}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet arcu id tincidunt tellus arcu rhoncus,
            turpis nisl sed. Neque viverra ipsum orci, morbi semper. Nulla bibendum purus tempor semper purus. Ut
            curabitur platea sed blandit. Amet non at proin justo nulla et. A, blandit morbi suspendisse vel malesuada
            purus massa mi. Faucibus neque a mi hendrerit.
            <br />
            <br />
          </span>
        </div>
      </div>
      <div className={`flex-row ${styles['section_6']}`}>
        <div className={`flex-col justify-start items-center ${styles['text-wrapper_3']}`}>
          <span className={`${styles['font_3']} ${styles['text_11']}`}>Add to Cart</span>
        </div>
        <div className={`flex-col justify-start items-center ${styles['text-wrapper_4']} ml-14`}>
          <span className={`${styles['font_2']} ${styles['text_12']}`}>Buy Now</span>
        </div>
      </div>
    </div>
  );
}

Detail_228_83098.defaultProps = { className: '' };