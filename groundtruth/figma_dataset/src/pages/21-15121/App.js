import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Forgot_Password_21_15121(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col ${styles['section']}`}>
        <img
          className={`self-start ${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4645c091d5bad956e543814517cdb4cb.png"
        />
        <div className={`flex-col items-start self-stretch ${styles['mt-33']}`}>
          <span className={`${styles['text']}`}>Forgot Password?</span>
          <span className={`${styles['text_2']} ${styles['mt-21']}`}>Then let’s submit password reset.</span>
        </div>
      </div>
      <div className={`mt-32 flex-col ${styles['group']}`}>
        <div className={`flex-col`}>
          {data.items.map((item, index) => (
            <div className={`flex-row items-center ${styles['list-item']} ${styles['mt-11']}`} key={index}>
              <div className={`flex-col justify-start items-center shrink-0 ${styles['image-wrapper']}`}>
                <img
                  className={`shrink-0 ${styles['image_2']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2826f29c0f13400fff81759f98b320a0.png"
                />
              </div>
              <div className={`flex-col items-start flex-1 ${styles['group_2']}`}>
                <span className={`${styles['font']}`}>Send via Email</span>
                <span className={`${styles['font_2']} ${styles['mt-17']}`}>Reset password via email.</span>
              </div>
              <img
                className={`shrink-0 ${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=66d434463c73160a9585b61e8b41f66a.png"
              />
            </div>
          ))}
        </div>
        <div className={`mt-24 flex-row justify-center items-center ${styles['section_2']}`}>
          <span className={`${styles['font']} ${styles['text_4']}`}>Reset Password</span>
          <img
            className={`ml-6 ${styles['image_8']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e3ed05d89038a3402198501c409c5dab.png"
          />
        </div>
      </div>
    </div>
  );
}

Forgot_Password_21_15121.defaultProps = { className: '' };