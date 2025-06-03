import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Forgot_Password_1_21_15137(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col justify-start relative ${styles['page']} ${props.className}`}>
      <div className={`flex-col`}>
        <div className={`flex-col ${styles['section']}`}>
          <img
            className={`self-start ${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0c08b281acb743fe533c72b16ca0737e.png"
          />
          <div className={`flex-col items-start self-stretch ${styles['mt-33']}`}>
            <span className={`${styles['font']} ${styles['text']}`}>Forgot Password?</span>
            <span className={`${styles['font_2']} ${styles['text_2']} ${styles['mt-21']}`}>
              Then let’s submit password reset.
            </span>
          </div>
        </div>
        <div className={`flex-col ${styles['group']} mt-32`}>
          <div className={`flex-col`}>
            <div className={`relative ${styles['section_5']}`}></div>
            <div className={`relative ${styles['section_6']} ${styles['mt-15']}`}></div>
            <div className={`relative ${styles['section_5']} ${styles['mt-15']}`}></div>
            <div className={`${styles['section_5']} ${styles['mt-15']}`}></div>
          </div>
          <div className={`flex-row justify-center items-center ${styles['section_8']} mt-24`}>
            <span className={`${styles['font_3']}`}>Reset Password</span>
            <img
              className={`${styles['image_5']} ml-6`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e3ed05d89038a3402198501c409c5dab.png"
            />
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['section_2']} ${styles['pos']}`}>
        <div className={`flex-col self-stretch relative ${styles['section_3']}`}>
          <div className={`${styles['section_4']}`}></div>
          <div className={`flex-col ${styles['group_2']}`}>
            <span className={`self-start ${styles['font']} ${styles['text_3']}`}>Password Sent!</span>
            <div className={`flex-col self-stretch ${styles['mt-15']}`}>
              <span className={`self-start ${styles['font_2']} ${styles['text_4']}`}>
                We’ve sent the password to elem*******221b@gmail.com
              </span>
              <div
                className={`flex-row justify-center items-center self-stretch ${styles['section_7']} ${styles['mt-19']}`}
              >
                <span className={`${styles['font_3']}`}>Re-Sent Code</span>
                <img
                  className={`${styles['image_3']} ml-8`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3b1e3502560f62b60dff2d47a07ea874.png"
                />
              </div>
            </div>
          </div>
          <img
            className={`${styles['image_2']} ${styles['pos_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7cf6d992638a9e0a4a62964a59f1ec2a.png"
          />
        </div>
        <img
          className={`self-center ${styles['image_4']} mt-54`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ea8a0abb5e4173dab97a4e7b5359d8a0.png"
        />
      </div>
    </div>
  );
}

Forgot_Password_1_21_15137.defaultProps = { className: '' };