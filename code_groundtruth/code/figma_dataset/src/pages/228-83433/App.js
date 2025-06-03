import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Welcome_screen_228_83433(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col justify-start items-center relative ${styles['page']} ${props.className}`}>
      <div className={`flex-row`}>
        <span className={`${styles['text_5']}`}>297</span>
        <span className={`self-start ${styles['text_2']} ${styles['text_4']} ${styles['ml-5']}`}>km</span>
      </div>
      <div className={`flex-col ${styles['section']} ${styles['pos']}`}>
        <img
          className={`self-end ${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7a51abeb0cf20f91d14bb01b70f1bc6d.png"
        />
        <div className={`flex-row justify-center self-stretch relative ${styles['mt-67']}`}>
          <img
            className={`self-start ${styles['image_2']} ${styles['pos_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f5fe323d44ccfc0d93653d02507bedbb.png"
          />
          <div className={`flex-col`}>
            <div className={`flex-col items-center self-stretch`}>
              <span className={`${styles['font']} ${styles['text']}`}>Tesla</span>
              <span className={`${styles['text_2']} ${styles['text_3']} ${styles['mt-15']}`}>Cybertruck</span>
            </div>
            <span className={`self-center ${styles['font']} ${styles['text_6']}`}>A/C is turned on</span>
            <div className={`flex-col items-center self-stretch ${styles['group']}`}>
              <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
                <img
                  className={`${styles['image_3']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b80b9a3f6ec70208a697adaa051625b9.png"
                />
              </div>
              <span className={`${styles['text_7']} mt-20`}>Tap to open the car</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Welcome_screen_228_83433.defaultProps = { className: '' };