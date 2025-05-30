import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Page_04_B_Log_In_21_15916(props) {
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
          <span className={`${styles['font']} ${styles['text']} ${styles['text_2']}`}>Hello!</span>
        </div>
      </div>
      <div className={`flex-col self-center ${styles['group']} mt-38`}>
        <span className={`self-start ${styles['font']} ${styles['text']} ${styles['text_3']}`}>Welcome</span>
        <div className={`flex-col self-stretch ${styles['group_2']}`}>
          <span className={`self-start ${styles['font_2']} ${styles['text_13']}`}>Email or Mobile Number</span>
          <div className={`flex-col justify-start items-start self-stretch ${styles['text-wrapper']} mt-14`}>
            <span className={`${styles['font_3']} ${styles['text_4']}`}>example@example.com</span>
          </div>
        </div>
        <div className={`flex-col self-stretch ${styles['group_3']}`}>
          <span className={`self-start ${styles['font_2']} ${styles['text']} ${styles['text_1']}`}>Password </span>
          <div className={`flex-row justify-between items-center self-stretch ${styles['section_3']}`}>
            <span className={`${styles['font_3']} ${styles['text']} ${styles['text_5']}`}>*************</span>
            <img
              className={`${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ae63e17126feb4e2c0fd908b2d55cded.png"
            />
          </div>
          <span className={`self-end ${styles['font_4']} ${styles['text_6']}`}>Forget Password</span>
        </div>
        <div className={`flex-col justify-start items-center self-center ${styles['text-wrapper_2']}`}>
          <span className={`${styles['text_7']}`}>Log In</span>
        </div>
        <div className={`flex-col items-center self-stretch ${styles['group_4']}`}>
          <span className={`${styles['font_5']} ${styles['text_8']}`}>or</span>
          <img
            className={`${styles['image_3']} ${styles['mt-13']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ce40ad9d68096f757a7e9ceb0544d0f4.png"
          />
        </div>
        <div className={`self-center ${styles['group_5']}`}>
          <span className={`${styles['font_5']} ${styles['text_9']}`}>Don’t have an account? </span>
          <span className={`${styles['font_4']} ${styles['text_10']}`}>Sign Up</span>
        </div>
      </div>
    </div>
  );
}

Page_04_B_Log_In_21_15916.defaultProps = { className: '' };