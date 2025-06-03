import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Comprehensive_Health_Assessment_12_21_9717(props) {
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
      <span className={`self-start ${styles['text_2']}`}>Do you have any symptoms/allergy?</span>
      <img
        className={`self-stretch ${styles['image_2']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e6a44f3bbece4c6a17d99a5dc9428eb9.png"
      />
      <div className={`flex-col self-stretch ${styles['section_3']}`}>
        <div className={`flex-row`}>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
            <span className={`${styles['font_2']} ${styles['text_3']}`}>Headache</span>
          </div>
          <div className={`flex-col justify-start items-end ${styles['text-wrapper_2']} ml-8`}>
            <span className={`${styles['text_4']}`}>Muscle Fatigue</span>
          </div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_3']} ml-8`}>
            <span className={`${styles['font_2']} ${styles['text_5']}`}>Ash</span>
          </div>
        </div>
        <div className={`flex-row justify-end items-center ${styles['group']} mt-32`}>
          <img
            className={`${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b02defafe3c2624319b4c5c8c6169659.png"
          />
          <span className={`${styles['text_6']} ${styles['ml-5']}`}>2/10</span>
        </div>
      </div>
      <div className={`flex-row justify-center items-center self-stretch ${styles['section_4']}`}>
        <span className={`${styles['font']} ${styles['text_7']}`}>Continue</span>
        <img
          className={`${styles['image_4']} ${styles['ml-9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=93f9cb260dfe2b388a8040625ea561ec.png"
        />
      </div>
    </div>
  );
}

Comprehensive_Health_Assessment_12_21_9717.defaultProps = { className: '' };