import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Comprehensive_Health_Assessment_14_21_9876(props) {
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
      <div className={`flex-col self-stretch ${styles['group']}`}>
        <span className={`self-start ${styles['font_2']} ${styles['text_2']}`}>Voice AI Analysis</span>
        <span className={`self-stretch ${styles['text_3']} ${styles['mt-13']}`}>
          Please say the following words below. Don’t worry, we don’t steal voice data.
        </span>
      </div>
      <div className={`flex-col justify-start items-center self-center ${styles['section_3']}`}>
        <div className={`flex-col justify-start items-center ${styles['section_4']}`}>
          <div className={`flex-col justify-start items-center ${styles['section_5']}`}>
            <div className={`flex-col justify-start items-center ${styles['section_6']}`}>
              <div className={`${styles['section_7']}`}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col justify-start items-start self-stretch relative ${styles['group_3']}`}>
        <div className={`${styles['section_8']}`}></div>
        <div className={`${styles['group_4']} ${styles['pos']}`}>
          <span className={`${styles['font_2']} ${styles['text_4']}`}>The lazy fox jumps</span>
          <span className={`${styles['font_2']} ${styles['text_5']}`}>over the wild dog.</span>
        </div>
      </div>
      <div className={`flex-row justify-center items-center self-stretch ${styles['section_9']}`}>
        <span className={`${styles['font']} ${styles['text_6']}`}>Continue</span>
        <img
          className={`${styles['image_2']} ${styles['ml-9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3b1e3502560f62b60dff2d47a07ea874.png"
        />
      </div>
    </div>
  );
}

Comprehensive_Health_Assessment_14_21_9876.defaultProps = { className: '' };