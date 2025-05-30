import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function IPhone_13_Pro_Max_1_127_423(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`self-center ${styles['group']}`}>
        <span className={`${styles['font']} ${styles['text']} ${styles['text_2']}`}>M</span>
        <span className={`${styles['font']} ${styles['text']}`}>E</span>
        <span className={`${styles['font_2']} ${styles['text']}`}>N</span>
        <span className={`${styles['font_3']} ${styles['text']}`}>T</span>
        <span className={`${styles['font_4']} ${styles['text']}`}>A</span>
        <span className={`${styles['font']} ${styles['text']}`}>L </span>
        <span className={`${styles['font_2']}`}>^</span>
        <span className={`${styles['font_3']} ${styles['text']}`}>u</span>
        <span className={`${styles['font_4']} ${styles['text']}`}>p</span>
        <span className={`${styles['font']}`}>^</span>
      </div>
      <div className={`flex-col self-stretch ${styles['group_2']}`}>
        <div className={`self-center ${styles['group_4']}`}>
          <span className={`${styles['font_6']}`}>Don’t have account yet? </span>
          <span className={`${styles['font_6']} ${styles['text_7']}`}>Sign Up</span>
        </div>
        <div className={`flex-col self-stretch relative ${styles['group_3']}`}>
          <div className={`flex-col justify-start items-start ${styles['text-wrapper_1']}`}>
            <span className={`${styles['font_5']} ${styles['text_3']}`}>Username</span>
          </div>
          <div className={`flex-col justify-start items-start ${styles['text-wrapper']} mt-24`}>
            <span className={`${styles['font_5']} ${styles['text_4']}`}>Password</span>
          </div>
        </div>
        <div className={`flex-col self-stretch ${styles['group_1']}`}>
          <span className={`self-end ${styles['font_6']} ${styles['text_5']}`}>Forgot Password?</span>
          <div
            className={`flex-col justify-start items-center self-stretch ${styles['text-wrapper_2']} ${styles['mt-25']}`}
          >
            <span className={`${styles['text_6']}`}>GO</span>
          </div>
        </div>
      </div>
      <img
        className={`self-center ${styles['image']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d2bfc5b37476f2b9e752e7d4f400d9ab.png"
      />
    </div>
  );
}

IPhone_13_Pro_Max_1_127_423.defaultProps = { className: '' };