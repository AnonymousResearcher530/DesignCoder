import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Page_04_A_Log_In_21_15940(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start self-stretch ${styles['section']}`}>
        <div className={`flex-row justify-center items-center relative ${styles['section_2']}`}>
          <img
            className={`${styles['image']} ${styles['pos']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=248d2b7bedb9b973e424151c0f038940.png"
          />
          <span className={`${styles['font']} ${styles['text']}`}>Log In</span>
        </div>
      </div>
      <div className={`flex-col self-center ${styles['group_1']} mt-36`}>
        <div className={`flex-col self-stretch ${styles['group']}`}>
          <span className={`self-start ${styles['font']} ${styles['text']} ${styles['text_2']}`}>Welcome</span>
          <span className={`self-stretch ${styles['font_2']} ${styles['text_3']} ${styles['mt-13']}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.{' '}
          </span>
        </div>
        <div className={`flex-col self-stretch ${styles['view']}`}>
          <div className={`flex-col`}>
            <span className={`self-start ${styles['font_3']} ${styles['text_11']}`}>Email or Mobile Number</span>
            <div className={`flex-col justify-start items-start self-stretch ${styles['text-wrapper']} mt-12`}>
              <span className={`${styles['font_4']} ${styles['text_4']}`}>example@example.com</span>
            </div>
          </div>
          <div className={`flex-col mt-20`}>
            <span className={`self-start ${styles['font_3']} ${styles['text']} ${styles['text_1']}`}>Password </span>
            <div
              className={`flex-row justify-between items-center self-stretch ${styles['section_3']} ${styles['mt-11']}`}
            >
              <span className={`${styles['font_4']} ${styles['text']} ${styles['text_5']}`}>*************</span>
              <img
                className={`${styles['image_2']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2abf8dbf204ecc4d91eb88c297a3b45c.png"
              />
            </div>
            <span className={`self-end ${styles['font_5']} ${styles['text_6']} ${styles['mt-11']}`}>
              Forget Password
            </span>
          </div>
        </div>
        <div className={`flex-col justify-start items-center self-center ${styles['text-wrapper_2']}`}>
          <span className={`${styles['font']}`}>Log In</span>
        </div>
        <div className={`flex-col items-center self-stretch ${styles['group_3']}`}>
          <span className={`${styles['font_2']} ${styles['text_7']}`}>or sign up with</span>
          <div className={`flex-row ${styles['mt-11']}`}>
            <img
              className={`${styles['image_3']} ${styles['equal-division-item']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=34b79d54f87229a71e672a0507711ce3.png"
            />
            <img
              className={`${styles['image_3']} ${styles['equal-division-item']} ${styles['ml-9']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a1d742899d87269c21dad64daee67ea4.png"
            />
            <img
              className={`${styles['image_3']} ${styles['equal-division-item']} ${styles['ml-9']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ce40ad9d68096f757a7e9ceb0544d0f4.png"
            />
          </div>
        </div>
        <div className={`self-center ${styles['group_4']}`}>
          <span className={`${styles['font_2']}`}>Don’t have an account? </span>
          <span className={`${styles['font_5']} ${styles['text_8']}`}>Sign Up</span>
        </div>
      </div>
    </div>
  );
}

Page_04_A_Log_In_21_15940.defaultProps = { className: '' };