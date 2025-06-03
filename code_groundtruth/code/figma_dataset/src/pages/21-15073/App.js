import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Sign_In_21_15073(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col items-center self-stretch ${styles['section']}`}>
        <img
          className={`shrink-0 ${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=012bf1ec372de56d9b3ea72fb89b2e97.png"
        />
        <span className={`${styles['text']} ${styles['mt-21']}`}>Sign In</span>
      </div>
      <div className={`flex-col self-stretch ${styles['group']}`}>
        <div className={`flex-col`}>
          <span className={`self-start ${styles['font']}`}>Email Address</span>
          <div className={`flex-row items-center self-stretch ${styles['section_2']} mt-10`}>
            <img
              className={`${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7cab8bfb5ff4847d80f03830a7b69ca4.png"
            />
            <span className={`${styles['font_2']} ${styles['text_2']} ml-8`}>elementary221b@gmail.co</span>
          </div>
        </div>
        <div className={`flex-col ${styles['mt-29']}`}>
          <span className={`self-start ${styles['font']}`}>Password</span>
          <div
            className={`flex-row justify-between items-center self-stretch ${styles['section_3']} ${styles['mt-11']}`}
          >
            <div className={`flex-row items-center`}>
              <img
                className={`shrink-0 ${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a249a18257eecd3da7b62df7062fce0d.png"
              />
              <span className={`${styles['text_3']} ml-8`}>*****************</span>
            </div>
            <img
              className={`${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=60d19c63e32f953075a6fc0393a465b6.png"
            />
          </div>
        </div>
      </div>
      <div className={`flex-row justify-center items-center self-stretch ${styles['section_4']}`}>
        <span className={`${styles['font_2']} ${styles['text_4']}`}>Sign In</span>
        <img
          className={`${styles['image_5']} ${styles['ml-11']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3b1e3502560f62b60dff2d47a07ea874.png"
        />
      </div>
      <div className={`flex-row justify-center items-center self-stretch ${styles['group_3']}`}>
        <div className={`${styles['section_5']}`}></div>
        <span className={`${styles['text_5']} ml-8`}>Or</span>
        <div className={`${styles['section_6']} ml-8`}></div>
      </div>
      <div className={`flex-row ${styles['equal-division']}`}>
        <img
          className={`${styles['image_6']} ${styles['equal-division-item']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fd223fe08c6052e942a4eed14a56c420.png"
        />
        <img
          className={`${styles['image_6']} ${styles['equal-division-item']} ${styles['ml-9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1adbf19594f02c1a6bb4d73c40b12b15.png"
        />
        <img
          className={`${styles['image_6']} ${styles['equal-division-item']} ${styles['ml-9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2bff0dfcaffac084eb8b034ef622abe1.png"
        />
      </div>
      <div className={`self-center ${styles['group_4']}`}>
        <span className={`${styles['font']} ${styles['text_6']}`}>Don’t have an account? </span>
        <span className={`${styles['font']} ${styles['text_7']}`}>Sign Up.</span>
      </div>
    </div>
  );
}

Sign_In_21_15073.defaultProps = { className: '' };