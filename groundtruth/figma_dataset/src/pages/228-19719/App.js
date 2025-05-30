import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Android_61(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col self-stretch ${styles['group']}`}>
        <img
          className={`self-start ${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8dfb8dc8d2766ba3fa44627729296e63.png"
        />
        <div className={`mt-12 flex-col self-stretch ${styles['group_2']}`}>
          <span className={`self-center ${styles['text']}`}>What's your Level</span>
          <div className={`flex-col items-center self-stretch ${styles['mt-13']}`}>
            <span className={`${styles['font']}`}>Choose your current level, We wil</span>
            <span className={`${styles['font']}`}>suggest the best lesson for you</span>
          </div>
        </div>
      </div>
      <div className={`flex-col self-stretch ${styles['list']}`}>
        {data.items.map((item, index) => (
          <div className={`flex-row items-center mt-12 ${styles['list-item']}`} key={index}>
            <img
              className={`${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=453598f6736979e8445adf63f01c1bab.png"
            />
            <span className={`${styles['font_2']} ${styles['text_2']} ${styles['ml-27']}`}>I'm just Starting</span>
          </div>
        ))}
      </div>
      <div className={`flex-col justify-start items-center self-stretch ${styles['text-wrapper']}`}>
        <span className={`${styles['font_2']} ${styles['text_6']}`}>Continue</span>
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

Android_61.defaultProps = { className: '' };