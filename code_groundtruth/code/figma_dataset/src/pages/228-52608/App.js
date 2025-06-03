import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function High_Fidelity_Detail_(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center ${styles['group']}`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8a34e4c288c050dc3d39dcc1312f73d8.png"
        />
        <div className={`flex-row ${styles['group_2']}`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5c53b4dc5c32c57af3b342e6350fc483.png"
          />
          <img
            className={`${styles['image_3']} ${styles['ml-5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e5593f8f8ba453d4c0791db6548dfd94.png"
          />
          <img
            className={`${styles['image_4']} ${styles['ml-5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8a97e0b71b412f76dee3712b77e0cfda.png"
          />
        </div>
      </div>
      <div className={`flex-col ${styles['mt-35']}`}>
        <div className={`flex-row justify-between ${styles['section']}`}>
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8605e8c363f09451c6ab65aca7e3fa13.png"
          />
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=eb3bea9655ddd60808751314c828f7b6.png"
          />
        </div>
        <div className={`flex-col ${styles['section_2']}`}>
          <div className={`flex-col ${styles['group_3']}`}>
            <div className={`flex-row items-center self-stretch`}>
              <div className={`flex-col flex-1`}>
                <span className={`${styles['text']}`}>Light Dress Bless</span>
                <div className={`mt-6 flex-row items-center`}>
                  <img
                    className={`${styles['image_7']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=974d90fc110c10ea5a5144f9ca00238c.png"
                  />
                  <div className={`${styles['group_4']} ${styles['ml-9']}`}>
                    <span className={`${styles['font']} ${styles['text_3']}`}>5.0</span>
                    <span className={`${styles['font']} ${styles['text_4']}`}>(7.932 reviews)</span>
                  </div>
                </div>
              </div>
              <div className={`ml-20 flex-row items-center shrink-0`}>
                <img
                  className={`shrink-0 ${styles['image_6']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ff227b55ae3ef59792e0cdca3357ac58.png"
                />
                <span className={`ml-12 ${styles['text_2']}`}>1</span>
                <img
                  className={`ml-12 shrink-0 ${styles['image_6']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=74ccf03888674a267bbce03280d02208.png"
                />
              </div>
            </div>
            <div className={`self-start ${styles['group_5']}`}>
              <span className={`${styles['font']}`}>
                Its simple and elegant shape makes it perfect for
                <br />
              </span>
              <span className={`${styles['font']}`}>
                those of you who like you who want minimalist
                <br />
              </span>
              <span className={`${styles['font']}`}>clothes</span>
              <span className={`${styles['text_5']}`}>Read More. . .</span>
            </div>
            <div className={`self-stretch ${styles['divider']}`}></div>
            <div className={`flex-row justify-between self-stretch ${styles['group_6']}`}>
              <span className={`${styles['font_2']} ${styles['text_6']}`}>Choose Size</span>
              <span className={`${styles['font_2']} ${styles['text_7']}`}>Color</span>
            </div>
            <div className={`flex-row justify-between self-stretch ${styles['group_7']}`}>
              <div className={`flex-row`}>
                <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
                  <span className={`${styles['font_3']} ${styles['text_8']}`}>S</span>
                </div>
                <div className={`flex-col justify-start items-center ${styles['text-wrapper']} ${styles['ml-7']}`}>
                  <span className={`${styles['font_3']}`}>M</span>
                </div>
                <div className={`flex-col justify-start items-end relative ${styles['group_8']} ${styles['ml-7']}`}>
                  <div className={`${styles['group_9']}`}></div>
                  <div className={`flex-row ${styles['equal-division']}`}>
                    <div className={`flex-row items-center`}>
                      <div className={`flex-col justify-start items-center shrink-0 ${styles['text-wrapper_2']}`}>
                        <span className={`${styles['font_2']} ${styles['text_9']}`}>L</span>
                      </div>
                      <span className={`ml-14 ${styles['font_3']}`}>XL</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`flex-row`}>
                <div className={`${styles['section_3']}`}></div>
                <div className={`${styles['section_4']} ${styles['ml-7']}`}></div>
                <div className={`${styles['section_5']} ${styles['ml-7']}`}></div>
              </div>
            </div>
          </div>
          <div className={`flex-row justify-center items-center ${styles['section_6']}`}>
            <img
              className={`${styles['image_8']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=02a1fa60518ecaea45059476894c81e0.png"
            />
            <div className={`ml-8 ${styles['group_10']}`}>
              <span className={`${styles['text_10']}`}>Add to Cart | $162.99 </span>
              <span className={`${styles['text_11']}`}>$190.99</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

High_Fidelity_Detail_.defaultProps = { className: '' };