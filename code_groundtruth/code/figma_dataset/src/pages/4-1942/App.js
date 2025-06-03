import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Android_11_4_1942(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <img
        className={`self-start ${styles['image']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=cf71d1b002a0611ca0a5bb227af4d4d4.png"
      />
      <div className={`flex-col self-stretch ${styles['group']}`}>
        <span className={`self-center ${styles['text']}`}>Create a account</span>
        <div className={`flex-col items-center self-stretch ${styles['mt-31']}`}>
          <span className={`${styles['font']}`}>What language would you like to start with? </span>
          <span className={`${styles['font']}`}>You can change it at any time!</span>
        </div>
      </div>
      <div className={`flex-col self-stretch ${styles['group_2']}`}>
        <div className={`flex-row items-center ${styles['section']}`}>
          <div className={`${styles['section_2']}`}></div>
          <span className={`${styles['font_2']} ${styles['text_2']} ${styles['ml-25']}`}>Facebook</span>
        </div>
        <div className={`flex-row items-center ${styles['section']} mt-14`}>
          <div className={`${styles['section_2']}`}></div>
          <span className={`${styles['font_2']} ${styles['text_3']} ${styles['ml-25']}`}>Google</span>
        </div>
        <div className={`flex-row items-center ${styles['section']} mt-14`}>
          <div className={`${styles['section_2']}`}></div>
          <span className={`${styles['font_2']} ${styles['text_4']} ml-26`}>Email</span>
        </div>
      </div>
      <div className={`self-center ${styles['group_3']}`}>
        <span className={`${styles['font_3']}`}>
          By using it you confirm that you have read and <br />
        </span>
        <span className={`${styles['font_3']}`}>agree to our </span>
        <span className={`${styles['font_3']}`}>terms of service</span>
        <span className={`${styles['font_3']}`}> and </span>
        <span className={`${styles['font_3']}`}>privacy policy</span>
      </div>
    </div>
  );
}

Android_11_4_1942.defaultProps = { className: '' };