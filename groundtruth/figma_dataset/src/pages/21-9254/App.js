import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Comprehensive_Health_Assessment_4_21_9254(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row items-center`}>
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
      <div className={`flex-col ${styles['group']}`}>
        <span className={`self-start ${styles['text_2']}`}>What’s your official blood type?</span>
        <div className={`flex-row self-stretch ${styles['section_3']} ${styles['mt-33']}`}>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
            <span className={`${styles['font_2']} ${styles['text_3']}`}>A</span>
          </div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']}`}>
            <span className={`${styles['font_2']}`}>B</span>
          </div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_1']}`}>
            <span className={`${styles['font_2']}`}>AB</span>
          </div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_3']}`}>
            <span className={`${styles['font_2']} ${styles['text_4']}`}>O</span>
          </div>
        </div>
        <img
          className={`self-center ${styles['image_2']} ${styles['mt-33']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1540d440e791f1a0315795c334c8fe6a.png"
        />
        <div className={`flex-row self-stretch ${styles['mt-33']}`}>
          <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
            <img
              className={`shrink-0 ${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ed09c2fdb26ef802ae30fa39ce2cd1db.png"
            />
          </div>
          <div className={`flex-col justify-start items-center ${styles['section_4']} ml-8`}>
            <div className={`shrink-0 ${styles['section_5']}`}></div>
          </div>
        </div>
      </div>
      <div className={`flex-row justify-center items-center ${styles['section_6']}`}>
        <span className={`${styles['font']} ${styles['text_5']}`}>Continue</span>
        <img
          className={`${styles['image_4']} ${styles['ml-9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=aec2cf47c8f0a5e73a5d0f4e32af5dc8.png"
        />
      </div>
    </div>
  );
}

Comprehensive_Health_Assessment_4_21_9254.defaultProps = { className: '' };