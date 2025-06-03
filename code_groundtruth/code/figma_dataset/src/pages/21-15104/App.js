import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Sign_Up_21_15104(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col items-center self-stretch ${styles['section']}`}>
        <img
          className={`shrink-0 ${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=012bf1ec372de56d9b3ea72fb89b2e97.png"
        />
        <span className={`${styles['text']} ${styles['mt-21']}`}>Sign Up For Free!</span>
      </div>
      <div className={`flex-col self-stretch ${styles['group']}`}>
        <span className={`self-start ${styles['font']} ${styles['text_1']}`}>Email Address</span>
        <div className={`flex-row items-center self-stretch ${styles['section_1']}`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7cab8bfb5ff4847d80f03830a7b69ca4.png"
          />
          <span className={`${styles['font_2']} ${styles['text_2']} ml-8`}>Enter your email address...</span>
        </div>
        <span className={`self-start ${styles['font']} ${styles['text_3']}`}>Password</span>
        <div className={`flex-row justify-between items-center self-stretch ${styles['section_2']}`}>
          <div className={`flex-row items-center`}>
            <img
              className={`shrink-0 ${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a249a18257eecd3da7b62df7062fce0d.png"
            />
            <span className={`${styles['font_2']} ${styles['text_4']} ml-8`}>*****************</span>
          </div>
          <img
            className={`${styles['image_4']} ${styles['image_1']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=60d19c63e32f953075a6fc0393a465b6.png"
          />
        </div>
        <span className={`self-start ${styles['font']} ${styles['text_5']}`}>Password Confirmation</span>
        <div className={`flex-row justify-between items-center self-stretch ${styles['section_3']}`}>
          <div className={`flex-row items-center`}>
            <img
              className={`shrink-0 ${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a249a18257eecd3da7b62df7062fce0d.png"
            />
            <span className={`${styles['text_6']} ml-8`}>*****************</span>
          </div>
          <img
            className={`${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=60d19c63e32f953075a6fc0393a465b6.png"
          />
        </div>
        <div className={`flex-row items-center self-stretch ${styles['section_4']}`}>
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=133e56a639edabb6120e088ba273816c.png"
          />
          <span className={`${styles['font']} ${styles['text_7']} ml-10`}>ERROR: Password do not match!</span>
        </div>
      </div>
      <div className={`flex-row justify-center items-center self-stretch ${styles['section_5']}`}>
        <span className={`${styles['text_8']}`}>Sign Up</span>
        <img
          className={`${styles['image_6']} ml-10`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3b1e3502560f62b60dff2d47a07ea874.png"
        />
      </div>
      <div className={`self-center ${styles['group_2']}`}>
        <span className={`${styles['text_9']}`}>Already have an account? </span>
        <span className={`${styles['font']} ${styles['text_10']}`}>Sign In.</span>
      </div>
    </div>
  );
}

Sign_Up_21_15104.defaultProps = { className: '' };