import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Comprehensive_Health_Assessment_3_21_9240(props) {
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
      <div className={`flex-col ${styles['group_1']}`}>
        <span className={`self-start ${styles['font_2']} ${styles['text_2']}`}>What is your age?</span>
        <div className={`flex-col self-stretch ${styles['group']} ${styles['mt-49']}`}>
          <span className={`self-center ${styles['font_2']}`}>17</span>
          <div className={`flex-col self-stretch ${styles['group_2']}`}>
            <span className={`self-center ${styles['font_3']}`}>18</span>
            <div
              className={`flex-col justify-start items-center self-stretch ${styles['text-wrapper']} ${styles['mt-21']}`}
            >
              <span className={`${styles['text_3']}`}>19</span>
            </div>
          </div>
          <div className={`flex-col items-center self-stretch ${styles['group_3']}`}>
            <span className={`${styles['font_3']}`}>20</span>
            <span className={`${styles['font_2']} ${styles['text_4']} mt-30`}>21</span>
          </div>
        </div>
      </div>
      <div className={`flex-row justify-center items-center ${styles['section_3']}`}>
        <span className={`${styles['font']} ${styles['text_5']}`}>Continue</span>
        <img
          className={`${styles['image_2']} ${styles['ml-9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3b1e3502560f62b60dff2d47a07ea874.png"
        />
      </div>
    </div>
  );
}

Comprehensive_Health_Assessment_3_21_9240.defaultProps = { className: '' };