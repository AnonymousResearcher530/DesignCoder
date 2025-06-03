import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Sign_in_5_2709(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <img
        className={`self-center ${styles['image']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=792f7243caa100d70a16206707c6a5aa.png"
      />
      <span className={`self-start ${styles['text']}`}>Sign in</span>
      <div className={`flex-col self-stretch ${styles['group_1']}`}>
        <div className={`flex-row items-center ${styles['group']}`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a8ced97020c3695c72a01812571702a4.png"
          />
          <span className={`${styles['font']} ${styles['text_2']} ${styles['ml-25']}`}>Email or User Name</span>
        </div>
        <div className={`flex-row justify-between items-center ${styles['group_2']} mt-38`}>
          <div className={`flex-row items-center`}>
            <img
              className={`shrink-0 ${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=85bc9673d9ce980ad4c4413529b22b9c.png"
            />
            <span className={`${styles['font']} ${styles['text_3']} ml-26`}>Password</span>
          </div>
          <img
            className={`${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f6b06ccc7a22d831c359a706b0d969d8.png"
          />
        </div>
      </div>
      <span className={`self-end ${styles['font_2']} ${styles['text_4']}`}>Forget Password ?</span>
      <div className={`flex-col justify-start items-center self-stretch ${styles['text-wrapper']}`}>
        <span className={`${styles['font_2']} ${styles['text_5']}`}>Sign in</span>
      </div>
      <div className={`flex-col self-center ${styles['group_3']}`}>
        <span className={`self-center ${styles['font_2']} ${styles['text_6']}`}>Or sign in With</span>
        <div className={`flex-row justify-between ${styles['equal-division']} ${styles['mt-25']}`}>
          <img
            className={`${styles['equal-division-item']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=61cba1b59b6f870af3e83cd4e58f9565.png"
          />
          <img
            className={`${styles['equal-division-item']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7529c044bc407de545be5007628bcc7b.png"
          />
          <img
            className={`${styles['equal-division-item']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=aac13ef401615aa7ebaee7e000eecac3.png"
          />
          <img
            className={`${styles['equal-division-item']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=78fd23d17a8ebd2e0fb9eb84390d72b2.png"
          />
        </div>
      </div>
      <div className={`flex-row justify-end items-center self-stretch ${styles['group_4']}`}>
        <span className={`${styles['font_2']} ${styles['text_8']}`}>Sing Up</span>
        <span className={`${styles['font']} ${styles['text_7']}`}>Don’t have account ? </span>
      </div>
    </div>
  );
}

Sign_in_5_2709.defaultProps = { className: '' };