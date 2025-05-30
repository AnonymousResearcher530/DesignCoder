import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Page_04_C_Sign_Up_21_15882(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start ${styles['section']}`}>
        <div className={`flex-row justify-center items-center relative ${styles['section_2']}`}>
          <img
            className={`${styles['image']} ${styles['pos']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=248d2b7bedb9b973e424151c0f038940.png"
          />
          <span className={`${styles['font']} ${styles['text']} ${styles['text_2']}`}>New Account</span>
        </div>
      </div>
      <div className={`flex-col ${styles['group']}`}>
        <div className={`flex-col self-stretch`}>
          <span className={`self-start ${styles['font_2']} ${styles['text_16']}`}>Full name</span>
          <div className={`flex-col justify-start items-start self-stretch ${styles['text-wrapper']} mt-10`}>
            <span className={`${styles['font_3']} ${styles['text_3']}`}>example@example.com</span>
          </div>
        </div>
        <div className={`flex-col self-stretch ${styles['group_2']}`}>
          <span className={`self-start ${styles['font_2']} ${styles['text']} ${styles['text_1']}`}>Password </span>
          <div className={`flex-row justify-between items-center self-stretch ${styles['section_3']} mt-10`}>
            <span className={`${styles['font_3']} ${styles['text']} ${styles['text_4']}`}>*************</span>
            <img
              className={`${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ae63e17126feb4e2c0fd908b2d55cded.png"
            />
          </div>
        </div>
        <div className={`flex-col self-stretch ${styles['group_3']}`}>
          <span className={`self-start ${styles['font_2']} ${styles['text_17']}`}>Email</span>
          <div className={`flex-col justify-start items-start self-stretch ${styles['text-wrapper']} mt-10`}>
            <span className={`${styles['font_3']} ${styles['text_3']}`}>example@example.com</span>
          </div>
        </div>
        <div className={`flex-col self-stretch ${styles['group_4']}`}>
          <span className={`self-start ${styles['font_2']} ${styles['text_15']}`}>Mobile Number</span>
          <div
            className={`flex-col justify-start items-start self-stretch ${styles['text-wrapper']} ${styles['mt-9']}`}
          >
            <span className={`${styles['font_3']} ${styles['text_3']}`}>example@example.com</span>
          </div>
        </div>
        <div className={`flex-col self-stretch ${styles['group_1']}`}>
          <span className={`self-start ${styles['font_2']} ${styles['text']} ${styles['text_5']}`}>Date of birth</span>
          <div
            className={`flex-col justify-start items-start self-stretch ${styles['text-wrapper_2']} ${styles['mt-9']}`}
          >
            <span className={`${styles['font_3']} ${styles['text']} ${styles['text_6']}`}>DD / MM /YYY</span>
          </div>
        </div>
        <div className={`self-center ${styles['group_5']}`}>
          <span className={`${styles['font_4']}`}>
            By continuing, you agree to <br />
          </span>
          <span className={`${styles['font_5']} ${styles['text_11']}`}>Terms of Use</span>
          <span className={`${styles['font_4']}`}> and </span>
          <span className={`${styles['font_5']}`}>Privacy Policy.</span>
        </div>
        <div className={`flex-col justify-start items-center self-center ${styles['text-wrapper_3']}`}>
          <span className={`${styles['font']} ${styles['text_7']}`}>Sign Up</span>
        </div>
        <div className={`flex-row items-start ${styles['equal-division']} ${styles['group_7']}`}>
          <span className={`${styles['font_6']} ${styles['text_8']}`}>or sign up with</span>
          <img
            className={`${styles['image_3']} ${styles['equal-division-item']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=34b79d54f87229a71e672a0507711ce3.png"
          />
          <img
            className={`${styles['image_3']} ${styles['equal-division-item']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a1d742899d87269c21dad64daee67ea4.png"
          />
          <img
            className={`${styles['image_3']} ${styles['equal-division-item']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ce40ad9d68096f757a7e9ceb0544d0f4.png"
          />
        </div>
        <div className={`self-center ${styles['group_6']}`}>
          <span className={`${styles['font_6']}`}>already have an account? </span>
          <span className={`${styles['font_5']} ${styles['text_9']}`}>Log in</span>
        </div>
      </div>
    </div>
  );
}

Page_04_C_Sign_Up_21_15882.defaultProps = { className: '' };