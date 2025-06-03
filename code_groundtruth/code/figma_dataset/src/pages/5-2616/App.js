import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function My_Courses_5_2616(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col self-stretch ${styles['section']}`}>
        <div className={`flex-row justify-between items-center self-center ${styles['group']}`}>
          <div className={`flex-row items-center`}>
            <img
              className={`shrink-0 ${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=92a2e8d2f5639cd6be8d3176c06b478b.png"
            />
            <span className={`${styles['font']} ${styles['text']} ${styles['ml-11']}`}>Back</span>
          </div>
          <div className={`flex-row`}>
            <img
              className={`${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c3ca28b6f4934e25e7e5510c67838e63.png"
            />
            <img
              className={`${styles['image_2']} ml-20`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=eeb650f8c563cddd8d5a793306670955.png"
            />
          </div>
        </div>
        <div className={`flex-col self-stretch mt-34`}>
          <div className={`flex-row ${styles['group_2']}`}>
            <div className={`flex-row justify-between items-center flex-1 relative ${styles['section_2']}`}>
              <span className={`${styles['text_2']}`}>Search Courses </span>
              <img
                className={`${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2177dc62e48bfb3a304bb8d8240e6faa.png"
              />
            </div>
            <img
              className={`shrink-0 ${styles['image_4']} ml-10`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d74dac242fd29f9c8e31af02e8fb83a3.png"
            />
          </div>
          <div className={`flex-row justify-between mt-20`}>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
              <span className={`${styles['font']} ${styles['text_3']}`}>All</span>
            </div>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']}`}>
              <span className={`${styles['font_2']} ${styles['text_4']}`}>Progress</span>
            </div>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_3']}`}>
              <span className={`${styles['font']}`}>Finished</span>
            </div>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_4']}`}>
              <span className={`${styles['font']} ${styles['text_5']}`}>New</span>
            </div>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_5']}`}>
              <span className={`${styles['font_2']}`}>Trending</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col self-stretch ${styles['group_3']}`}>
        <img
          className={`${styles['image_6']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=054e6337244777ddc2b0999952b5b104.png"
        />
        <div className={`flex-row justify-between items-baseline ${styles['group_4']}`}>
          <span className={`${styles['text_6']}`}>Introduction to Web Development</span>
          <span className={`${styles['text_7']}`}>20/40</span>
        </div>
        <div className={`flex-row justify-between items-center ${styles['group_5']}`}>
          <span className={`${styles['text_8']}`}>Instructor | Davit Rouben</span>
          <img
            className={`${styles['image_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1aad3e235b8e3109f2fbd4de052da7b1.png"
          />
        </div>
        <div className={`flex-col ${styles['group_1']}`}>
          <div className={`flex-col justify-start items-start relative ${styles['section_3']}`}>
            <div className={`${styles['section_4']}`}></div>
          </div>
          <div className={`flex-row justify-between items-center ${styles['mt-7']}`}>
            <span className={`${styles['font_3']} ${styles['text_9']}`}>Complete</span>
            <span className={`${styles['font_3']} ${styles['text_10']}`}>50%</span>
          </div>
        </div>
      </div>
      <div className={`flex-col justify-start items-center self-center ${styles['text-wrapper_6']}`}>
        <span className={`${styles['font_2']} ${styles['text_11']}`}>Continue Learning </span>
      </div>
      <img
        className={`self-center ${styles['image_8']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7deb14506591b2b063e2cd685effb6f2.png"
      />
    </div>
  );
}

My_Courses_5_2616.defaultProps = { className: '' };