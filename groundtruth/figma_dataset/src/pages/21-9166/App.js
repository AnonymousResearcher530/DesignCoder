import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Comprehensive_Health_Assessment_1_21_9166(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row items-center ${styles['group']}`}>
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
      <div className={`flex-col ${styles['group_2']}`}>
        <div className={`flex-col items-start self-start ${styles['group_1']}`}>
          <span className={`${styles['text_2']}`}>What is your Gender?</span>
          <span className={`${styles['text_3']} ${styles['mt-13']}`}>
            Please select your gender for better personalized health experience.
          </span>
        </div>
        <div className={`flex-row items-center self-stretch ${styles['mt-27']}`}>
          <div className={`flex-col justify-start items-start shrink-0 ${styles['section_4']}`}>
            <div className={`shrink-0 ${styles['group_3']}`}></div>
          </div>
          <div className={`flex-col flex-1 ${styles['section_3']} ml-16`}>
            <div className={`flex-row justify-between`}>
              <div className={`flex-row items-center`}>
                <img
                  className={`shrink-0 ${styles['image_2']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f734806fd9e90b0daefd2663a8f3d7c6.png"
                />
                <span className={`${styles['font_2']} ${styles['text_4']} ${styles['ml-9']}`}>I Am Male</span>
              </div>
              <img
                className={`${styles['image_2']} ${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c39fe7f2398ba6e2d0da57641ea3cb43.png"
              />
            </div>
            <img
              className={`shrink-0 ${styles['image_5']} mt-10`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3968ad3fe97968aa3bcfc7bf1cc07f5d.png"
            />
          </div>
          <div className={`flex-col justify-start items-end shrink-0 ${styles['image-wrapper']} ml-16`}>
            <img
              className={`shrink-0 ${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=00d9b23cdda217df9030c1bb5e0e9eaf.png"
            />
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['group_4']}`}>
        <div className={`flex-row justify-center items-center ${styles['section_5']}`}>
          <span className={`${styles['font']} ${styles['text_5']}`}>Prefer to skip this</span>
          <img
            className={`${styles['image_6']} ml-6`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a65e08572b32689118d5a8024c2d7de3.png"
          />
        </div>
        <div className={`flex-row justify-center items-center ${styles['section_6']} mt-8`}>
          <span className={`${styles['font_2']} ${styles['text_6']}`}>Continue</span>
          <img
            className={`${styles['image_6']} ${styles['ml-9']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3b1e3502560f62b60dff2d47a07ea874.png"
          />
        </div>
      </div>
    </div>
  );
}

Comprehensive_Health_Assessment_1_21_9166.defaultProps = { className: '' };