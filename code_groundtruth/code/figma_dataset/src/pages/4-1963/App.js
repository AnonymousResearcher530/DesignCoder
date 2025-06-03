import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Android_12_4_1963(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <img
        className={`self-start ${styles['image']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=76d521836c023b699ab924c2a834d95b.png"
      />
      <div className={`flex-col self-stretch ${styles['group_1']} ${styles['mt-13']}`}>
        <span className={`self-center ${styles['text']}`}>Create your profile</span>
        <div className={`flex-col justify-start items-center self-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6bbfa7acbb9f89aed815ac66c3e14090.png"
          />
        </div>
        <div className={`flex-col self-stretch ${styles['group']}`}>
          <div className={`flex-col`}>
            <span className={`self-start ${styles['font']} ${styles['text_2']}`}>Name</span>
            <div className={`flex-col justify-start items-start self-stretch ${styles['text-wrapper']} mt-16`}>
              <span className={`${styles['font']} ${styles['text_3']}`}>Bruno Delorence</span>
            </div>
          </div>
          <div className={`flex-col mt-20`}>
            <span className={`self-start ${styles['font']} ${styles['text_4']}`}>Username</span>
            <div className={`flex-col justify-start items-start self-stretch ${styles['text-wrapper']} mt-16`}>
              <span className={`${styles['font']} ${styles['text_11']}`}>brunodelorence</span>
            </div>
          </div>
          <div className={`flex-col mt-20`}>
            <span className={`self-start ${styles['font']} ${styles['text_1']}`}>Password</span>
            <div className={`flex-col justify-start items-start self-stretch ${styles['text-wrapper_2']} mt-16`}>
              <span className={`${styles['font']} ${styles['text_5']}`}>******</span>
            </div>
          </div>
          <div className={`flex-col mt-20`}>
            <span className={`self-start ${styles['font']} ${styles['text_6']}`}>Email</span>
            <div className={`flex-col justify-start items-start self-stretch ${styles['text-wrapper_1']} mt-16`}>
              <span className={`${styles['font']} ${styles['text_7']}`}>brunodelorence@gmail.com</span>
            </div>
          </div>
        </div>
        <div className={`flex-col justify-start items-center self-stretch ${styles['text-wrapper_3']}`}>
          <span className={`${styles['text_8']}`}>Create</span>
        </div>
        <div className={`self-center ${styles['group_4']}`}>
          <span className={`${styles['font_2']}`}>
            By using it you confirm that you have read and <br />
          </span>
          <span className={`${styles['font_2']}`}>agree to our </span>
          <span className={`${styles['font_2']}`}>terms of service</span>
          <span className={`${styles['font_2']}`}> and </span>
          <span className={`${styles['font_2']}`}>privacy policy</span>
        </div>
      </div>
    </div>
  );
}

Android_12_4_1963.defaultProps = { className: '' };