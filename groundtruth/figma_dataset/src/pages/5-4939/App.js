import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Senior_Register_5_4939(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start items-start self-stretch ${styles['image-wrapper']}`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f2abb7d0bf3d46457093ed7f52510f4f.png"
        />
      </div>
      <img
        className={`self-center ${styles['image_2']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=20963bb38a7e76f944910b45587c0a93.png"
      />
      <div className={`flex-col items-center self-stretch ${styles['group']}`}>
        <span className={`${styles['font']}`}>Enter your senior</span>
        <span className={`${styles['font']}`}>phone number</span>
      </div>
      <div className={`flex-row items-center self-center ${styles['section']}`}>
        <img
          className={`${styles['image_3']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d10437714bee4e1e5d9372c11aa4b827.png"
        />
        <span className={`${styles['text']} ${styles['ml-17']}`}>+994 50 245 22 45</span>
      </div>
      <div className={`flex-row justify-end items-center self-center ${styles['section_2']}`}>
        <span className={`${styles['text_2']}`}>Add Senior</span>
        <img
          className={`shrink-0 ${styles['image_4']} ${styles['ml-21']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=941524f4e11f8bb6f4c064852846f229.png"
        />
      </div>
    </div>
  );
}

Senior_Register_5_4939.defaultProps = { className: '' };