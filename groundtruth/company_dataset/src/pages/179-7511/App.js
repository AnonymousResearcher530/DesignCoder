import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Caipuchangjingjiheye_179_7511(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-center items-center`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=48f7df4c71b46021ae7442d6c9699e5f.png"
        />
        <span className={`${styles['font']} ${styles['text']} ${styles['ml-10-5']}`}>精选菜谱</span>
        <img
          className={`${styles['image']} ${styles['ml-10-5']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ffadfb16129bfbaff7b240eeb75474d5.png"
        />
      </div>
      <div className={`flex-col ${styles['section']}`}>
        <div className={`flex-col justify-start ${styles['section_2']}`}>
          <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
            <img
              className={`${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c6627b487bf9a9a1034746f53a67a831.png"
            />
          </div>
        </div>
        <div className={`flex-row justify-between items-center ${styles['group']} ${styles['mt-15']}`}>
          <span className={`${styles['font_2']}`}>巧克力熔岩蛋糕</span>
          <div className={`flex-row items-center`}>
            <span className={`${styles['font_3']}`}>查看菜谱</span>
            <img
              className={`shrink-0 ${styles['image_3']} ${styles['ml-2-5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=db08ff12ceb9d1a7688c24335b68d7ca.png"
            />
          </div>
        </div>
        <div className={`flex-row ${styles['group_2']} ${styles['mt-15']}`}>
          <div className={`flex-col ${styles['section_3']}`}>
            <div className={`flex-col`}>
              <div className={`flex-col justify-start items-center ${styles['section_4']}`}>
                <div className={`flex-col justify-start relative ${styles['section_6']}`}>
                  <div className={`${styles['section_8']}`}></div>
                  <div className={`flex-col items-center ${styles['section_9']} ${styles['pos_3']}`}>
                    <span className={`${styles['text_4']}`}>已抢完</span>
                    <span className={`${styles['text_5']} ${styles['mt-6-5']}`}>SOLD OUT</span>
                  </div>
                </div>
              </div>
              <span className={`${styles['font_5']} ${styles['text_6']} ${styles['mt-5']}`}>
                混合蔬菜沙拉代你们要的
              </span>
            </div>
            <div className={`flex-row justify-evenly items-center ${styles['group_4']} ${styles['mt-3-5']}`}>
              <span className={`${styles['font_7']}`}>¥</span>
              <span className={`${styles['font']}`}>289.99</span>
              <span className={`${styles['font_6']} ${styles['text_11']}`}>/50g</span>
              <img
                className={`${styles['image_6']} ${styles['image_7']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bf6770a6a2857d345c21e6fcef6ebab2.png"
              />
            </div>
          </div>
          <div className={`flex-col ${styles['section_3']} ${styles['ml-3']}`}>
            <div className={`flex-col`}>
              <div className={`flex-col justify-start items-center relative ${styles['section_4']}`}>
                <div className={`${styles['section_7']}`}></div>
                <img
                  className={`${styles['image_4']} ${styles['pos_2']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d71b6acaa1415f0e1dabf7b626e684f1.png"
                />
                <div className={`flex-col justify-start items-center ${styles['section_5']} ${styles['pos']}`}>
                  <div className={`flex-col items-center ${styles['group_3']}`}>
                    <span className={`${styles['font_4']} ${styles['text_2']}`}>限时</span>
                    <span className={`${styles['font_4']} ${styles['text_3']}`}>特卖</span>
                  </div>
                </div>
              </div>
              <span className={`${styles['font_5']} ${styles['text_6']} ${styles['mt-5']}`}>
                混合蔬菜沙拉代你们要的
              </span>
            </div>
            <div className={`flex-row items-center ${styles['group_1']} ${styles['mt-3-5']}`}>
              <span className={`${styles['font_7']}`}>¥</span>
              <span className={`${styles['font']} ${styles['text_7']}`}>289.99</span>
              <span className={`${styles['font_6']} ${styles['text_15']}`}>/袋</span>
              <img
                className={`shrink-0 ${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bf6770a6a2857d345c21e6fcef6ebab2.png"
              />
            </div>
          </div>
          <div className={`flex-col ${styles['section_3']} ${styles['view']} ${styles['ml-3']}`}>
            <div className={`flex-col`}>
              <div className={`flex-col justify-start items-center ${styles['section_4']}`}>
                <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']}`}>
                  <img
                    className={`${styles['image_5']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7d8a0aaca65782a9216f33ef8993f5e8.png"
                  />
                </div>
              </div>
              <span className={`${styles['font_5']} ${styles['text_6']} ${styles['mt-5']}`}>
                混合蔬菜沙拉代你们要的
              </span>
            </div>
            <div className={`flex-row items-center ${styles['group_1']} ${styles['mt-3-5']}`}>
              <span className={`${styles['font_7']}`}>¥</span>
              <span className={`${styles['font']} ${styles['text_7']}`}>289.99</span>
              <span className={`${styles['font_6']} ${styles['text_15']}`}>/袋</span>
              <img
                className={`shrink-0 ${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bf6770a6a2857d345c21e6fcef6ebab2.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['section_10']}`}>
        <div className={`flex-col justify-start ${styles['section_11']}`}>
          <div className={`flex-col justify-start items-center ${styles['image-wrapper_3']}`}>
            <img
              className={`${styles['image_8']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6fe2e438d7d6107cef0ec5533880e8a5.png"
            />
          </div>
        </div>
        <div className={`flex-row justify-between items-center ${styles['group_5']} ${styles['mt-15']}`}>
          <span className={`${styles['font_2']}`}>巧克力熔岩蛋糕</span>
          <div className={`flex-row items-center`}>
            <span className={`${styles['font_3']}`}>查看菜谱</span>
            <img
              className={`shrink-0 ${styles['image_3']} ${styles['ml-2-5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=db08ff12ceb9d1a7688c24335b68d7ca.png"
            />
          </div>
        </div>
        <div className={`flex-col justify-start items-start relative ${styles['group_6']} ${styles['mt-15']}`}>
          <div className={`flex-row ${styles['equal-division']} ${styles['group_7']}`}>
            <div className={`flex-col ${styles['equal-division-item']}`}>
              <div className={`flex-col`}>
                <div className={`flex-col justify-start items-center relative ${styles['section_4']}`}>
                  <div className={`${styles['section_7']}`}></div>
                  <img
                    className={`${styles['image_9']} ${styles['pos_4']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1fb348facc7b1451ab08ee796bf1a2a2.png"
                  />
                </div>
                <span className={`${styles['font_5']} ${styles['text_10']} ${styles['mt-5']}`}>
                  混合蔬菜沙拉代你们要的
                </span>
              </div>
              <div className={`flex-row items-center ${styles['group_1']} ${styles['mt-3-5']}`}>
                <span className={`${styles['font_7']}`}>¥</span>
                <span className={`${styles['font']} ${styles['text_7']}`}>289.99</span>
                <span className={`${styles['font_6']} ${styles['text_15']}`}>/袋</span>
                <img
                  className={`shrink-0 ${styles['image_6']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bf6770a6a2857d345c21e6fcef6ebab2.png"
                />
              </div>
            </div>
            <div className={`flex-col ${styles['equal-division-item']} ${styles['ml-3']}`}>
              <div className={`flex-col`}>
                <div className={`flex-col justify-start items-center relative ${styles['section_4']}`}>
                  <div className={`${styles['section_7']}`}></div>
                  <img
                    className={`${styles['image_4']} ${styles['pos_5']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d71b6acaa1415f0e1dabf7b626e684f1.png"
                  />
                </div>
                <span className={`${styles['font_5']} ${styles['text_10']} ${styles['mt-5']}`}>
                  混合蔬菜沙拉代你们要的
                </span>
              </div>
              <div className={`flex-row items-center ${styles['group_1']} ${styles['mt-3-5']}`}>
                <span className={`${styles['font_7']}`}>¥</span>
                <span className={`${styles['font']} ${styles['text_7']}`}>289.99</span>
                <span className={`${styles['font_6']} ${styles['text_15']}`}>/袋</span>
                <img
                  className={`shrink-0 ${styles['image_6']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bf6770a6a2857d345c21e6fcef6ebab2.png"
                />
              </div>
            </div>
            <div className={`flex-col ${styles['equal-division-item']} ${styles['ml-3']}`}>
              <div className={`flex-col`}>
                <div className={`flex-col justify-start items-center ${styles['section_4']}`}>
                  <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']}`}>
                    <img
                      className={`${styles['image_5']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7d8a0aaca65782a9216f33ef8993f5e8.png"
                    />
                  </div>
                </div>
                <span className={`${styles['font_5']} ${styles['text_10']} ${styles['mt-5']}`}>
                  混合蔬菜沙拉代你们要的
                </span>
              </div>
              <div className={`flex-row items-center ${styles['group_1']} ${styles['mt-3-5']}`}>
                <span className={`${styles['font_7']}`}>¥</span>
                <span className={`${styles['font']} ${styles['text_7']}`}>289.99</span>
                <span className={`${styles['font_6']} ${styles['text_15']}`}>/袋</span>
                <img
                  className={`shrink-0 ${styles['image_6']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bf6770a6a2857d345c21e6fcef6ebab2.png"
                />
              </div>
            </div>
            <div className={`flex-col ${styles['equal-division-item_2']} ${styles['ml-3']}`}>
              <div className={`flex-col`}>
                <div className={`flex-col justify-start items-center relative ${styles['section_12']}`}>
                  <div className={`flex-col justify-start items-start ${styles['image-wrapper_4']}`}>
                    <img
                      className={`${styles['image_10']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c8e3c9bcfbcde37dda5699c92384c967.png"
                    />
                  </div>
                  <img
                    className={`${styles['image_11']} ${styles['pos_7']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ecc9ccc2d26ae9a6a63f4df68c486e49.png"
                  />
                </div>
                <span className={`${styles['font_5']} ${styles['text_13']} ${styles['mt-5']}`}>
                  混合蔬菜沙拉代你们要的
                </span>
              </div>
              <div className={`flex-row items-baseline ${styles['group_8']} ${styles['mt-9-5']}`}>
                <span className={`${styles['font_7']}`}>¥</span>
                <span className={`${styles['font']} ${styles['ml-1-5']}`}>289.99</span>
              </div>
            </div>
          </div>
          <div className={`${styles['section_13']} ${styles['pos_6']}`}></div>
        </div>
      </div>
    </div>
  );
}

Caipuchangjingjiheye_179_7511.defaultProps = { className: '' };