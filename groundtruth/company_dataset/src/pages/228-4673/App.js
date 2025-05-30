import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Haijingfang_copy_5_228_4673(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col items-start ${styles['page']} ${props.className}`}>
      <div className={`flex-col items-center relative ${styles['group']}`}>
        <img
          className={`shrink-0 ${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=77fc0b33b28ecfde8c38c05497c046cf.png"
        />
        <div className={`flex-col justify-start items-center relative ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=88650742ae7553ce50116f32d41f4661.png"
          />
        </div>
      </div>
      <div className={`flex-col ${styles['group_2']} ${styles['mt-15']}`}>
        <div className={`flex-col self-stretch ${styles['group_3']}`}>
          <div className={`flex-col justify-start relative ${styles['group_4']}`}>
            <div className={`flex-col ${styles['group_5']}`}>
              <span className={`self-start ${styles['font']} ${styles['text']}`}>Get US $5 Off Coupon</span>
              <img
                className={`mt-26 self-end ${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c71fee3b28890810af743db5389e9394.png"
              />
            </div>
            <img
              className={`${styles['image_3']} ${styles['pos']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a4d641fe32a738b13d409fd7851d9e67.png"
            />
            <span className={`${styles['font_2']} ${styles['text_2']} ${styles['pos_4']}`}>US $99.99</span>
            <div className={`flex-col items-start ${styles['pos_2']}`}>
              <img
                className={`shrink-0 ${styles['image_3']} ${styles['image_4']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ccacf5426d52fc1d59da8154cbc08ed1.png"
              />
              <span className={`${styles['font_2']} ${styles['text_3']}`}>US $99.99</span>
            </div>
            <div className={`${styles['section']} ${styles['pos_3']}`}></div>
          </div>
          <div className={`flex-row ${styles['group_6']} ${styles['mt-5']}`}>
            <div className={`flex-row shrink-0 self-center`}>
              <span className={`${styles['font']} ${styles['text_5']}`}>US $199.99</span>
              <span className={`ml-18 ${styles['font']} ${styles['text_5']}`}>US $199.99</span>
            </div>
            <span className={`ml-38 self-start ${styles['font_2']} ${styles['text_4']}`}>US $99.99</span>
          </div>
        </div>
        <span className={`self-end ${styles['font']} ${styles['text_5']} ${styles['text_6']} ${styles['mt-5']}`}>
          US $199.99
        </span>
      </div>
    </div>
  );
}

Haijingfang_copy_5_228_4673.defaultProps = { className: '' };