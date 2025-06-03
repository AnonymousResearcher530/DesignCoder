import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Comprehensive_Health_Assessment_5_21_9272(props) {
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
        <span className={`ml-20 ${styles['font']} ${styles['text']}`}>Skip </span>
      </div>
      <div className={`flex-col self-stretch ${styles['group']}`}>
        <span className={`self-start ${styles['text_2']}`}>What is your current fitness level?</span>
        <img
          className={`mt-26 self-stretch ${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9dcf0428461f57ebebab30c29d46b17e.png"
        />
        <div className={`mt-26 flex-col justify-start items-start self-stretch ${styles['section_4']}`}>
          <div className={`flex-row items-center ${styles['section_3']}`}>
            <div className={`${styles['section_5']}`}></div>
            <div className={`${styles['section_5']} ${styles['ml-53']}`}></div>
            <div className={`flex-row items-center ${styles['group_2']} ${styles['ml-53']}`}>
              <div className={`${styles['section_5']}`}></div>
              <img
                className={`${styles['image_3']} ${styles['ml-15']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f85018ebdbdc265a3f9839e0c221f671.png"
              />
              <div className={`${styles['section_6']} ${styles['ml-15']}`}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={`self-center ${styles['group_3']}`}>
        <span className={`${styles['font_2']} ${styles['text_3']}`}>Level 3</span>
        <span className={`${styles['font']} ${styles['text_4']}`}>(2-3x Exercise/Week)</span>
      </div>
      <div className={`flex-row justify-center items-center self-stretch ${styles['section_7']}`}>
        <span className={`${styles['font_2']} ${styles['text_5']}`}>Continue</span>
        <img
          className={`${styles['image_4']} ${styles['ml-9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5a7ca0f8bc7857e8d6f8710e2bf116a7.png"
        />
      </div>
    </div>
  );
}

Comprehensive_Health_Assessment_5_21_9272.defaultProps = { className: '' };