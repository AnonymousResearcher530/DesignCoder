import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Comprehensive_Health_Assessment_9_21_9648(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row items-center self-stretch`}>
        <div className={`flex-row items-center flex-1`}>
          <img
            className={`shrink-0 ${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=33c3e1f7b42f606673b9193a450b5abe.png"
          />
          <div className={`flex-col justify-start items-start flex-1 ${styles['section']} ${styles['ml-33']}`}>
            <div className={`${styles['section_2']}`}></div>
          </div>
        </div>
        <span className={`${styles['font']} ${styles['text']} ml-20`}>Skip </span>
      </div>
      <span className={`self-start ${styles['text_2']}`}>What is your current emotion right now?</span>
      <div className={`flex-col self-stretch ${styles['group_1']}`}>
        <div className={`flex-col justify-start items-center self-stretch relative ${styles['group']}`}>
          <img
            className={`${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0b8339759b780ec5a14c03fb0cc48907.png"
          />
          <img
            className={`${styles['image_2']} ${styles['pos']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c63bb398610e2d5dce9981d89521bc79.png"
          />
          <img
            className={`${styles['image_4']} ${styles['pos_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9feeb9dfdfbc2a5215d0018ea4c4f25b.png"
          />
          <img
            className={`${styles['image_3']} ${styles['pos_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ba1c2cd45a564819119bafb9d93bee81.png"
          />
        </div>
        <span className={`self-center ${styles['text_3']} mt-54`}>I’m feeling neutral.</span>
      </div>
      <div className={`flex-row justify-center items-center self-stretch ${styles['section_3']}`}>
        <span className={`${styles['font']} ${styles['text_4']}`}>Continue</span>
        <img
          className={`${styles['image_5']} ${styles['ml-9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=30cc1f702a28411892521477c6fab3ba.png"
        />
      </div>
    </div>
  );
}

Comprehensive_Health_Assessment_9_21_9648.defaultProps = { className: '' };