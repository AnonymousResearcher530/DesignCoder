import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function My_Cart_5_8723(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null, null],
  });

  return (
    <div className={`flex-col relative ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-center items-center self-stretch relative ${styles['section']}`}>
        <span className={`${styles['font_3']} ${styles['text_9']}`}>Go to Checkout</span>
        <div className={`flex-col justify-start items-center ${styles['text-wrapper']} ${styles['pos_3']}`}>
          <span className={`${styles['text_10']}`}>$12.96</span>
        </div>
      </div>
      <span className={`self-center ${styles['text']}`}>My Cart</span>
      <div className={`flex-col justify-start ${styles['pos']}`}>
        <div className={`flex-col ${styles['list']}`}>
          {data.items.map((item, index) => (
            <div className={`flex-row relative ${styles['list-item']} ${styles['group_5']}`} key={index}>
              <div className={`flex-row justify-between ${styles['group_3']} ${styles['pos_1']}`}>
                <span className={`${styles['font']} ${styles['text_2']}`}>Bell Pepper Red</span>
                <img
                  className={`${styles['image']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a60fc81517f4902b9618cf7e2306a2f0.png"
                />
              </div>
              <div className={`flex-row justify-between items-start ${styles['group_14']} ${styles['pos_6']}`}>
                <img
                  className={`${styles['image_2']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=35d6c624a54ccb37bae7575f59a837f2.png"
                />
                <div className={`flex-row items-end ${styles['group_6']}`}>
                  <div className={`flex-col`}>
                    <span className={`self-start ${styles['font_2']} ${styles['text_3']}`}>1kg, Price</span>
                    <div className={`flex-row items-center self-stretch ${styles['mt-15']}`}>
                      <img
                        className={`shrink-0 ${styles['image_3']}`}
                        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2719a9f580f3c8573b097b5315f3bb6e.png"
                      />
                      <span className={`${styles['font_4']} ${styles['ml-17']}`}>1</span>
                    </div>
                  </div>
                  <img
                    className={`${styles['image_3']} ${styles['image_10']} ${styles['ml-19']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=eeeb8eb1d747f40e9d09a034c530ee83.png"
                  />
                </div>
              </div>
              <span className={`${styles['font_3']} ${styles['pos_4']}`}>$4.99</span>
            </div>
          ))}
        </div>
      </div>
      <div className={`flex-row justify-between items-center self-stretch relative ${styles['section_2']}`}>
        <img
          className={`${styles['image_9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=248e7550df985babefd2824da8182302.png"
        />
        <img
          className={`${styles['image_14']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=de78b414a51a65a2a4181a8f47496751.png"
        />
        <img
          className={`${styles['image_11']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=56f221ba570f844495267a66c31b03d0.png"
        />
        <img
          className={`${styles['image_12']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3545b70651e9104120ede5a1e73a088b.png"
        />
        <img
          className={`${styles['image_13']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9f6fdba6f88914f7ff7af6716ace3375.png"
        />
      </div>
    </div>
  );
}

My_Cart_5_8723.defaultProps = { className: '' };