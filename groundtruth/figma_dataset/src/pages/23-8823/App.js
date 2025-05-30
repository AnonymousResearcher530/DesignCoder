import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Page_2_23_8823(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-center items-center self-stretch relative ${styles['group_2']}`}>
        <img
          className={`${styles['image']} ${styles['pos']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a6e13cb5f97f1f582102fe38a6b1c9c3.png"
        />
        <span className={`${styles['text']}`}>Discover</span>
      </div>
      <div className={`flex-row items-center self-start ${styles['section']} ${styles['mt-25']}`}>
        <img
          className={`${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e54ccad2c1e7b8b49f8adca91a2c15c6.png"
        />
        <span className={`${styles['font']} ${styles['text_2']} ml-10`}>Ma </span>
      </div>
      <div className={`flex-col self-stretch ${styles['section_2']} ${styles['mt-25']}`}>
        <div className={`self-center ${styles['section_3']}`}></div>
        <div className={`flex-col self-stretch ${styles['group_3']} ${styles['mt-29']}`}>
          <div className={`flex-row justify-between items-center self-stretch ${styles['group_4']}`}>
            <span className={`${styles['font_2']} ${styles['text_3']}`}>Top</span>
            <span className={`${styles['font_2']} ${styles['text_4']}`}>Quiz</span>
            <span className={`${styles['font_2']} ${styles['text_5']}`}>Categories</span>
            <span className={`${styles['font_2']} ${styles['text_6']}`}>Friends</span>
          </div>
          <div className={`self-start ${styles['section_4']}`}></div>
        </div>
        <div className={`flex-col self-stretch ${styles['mt-29']}`}>
          <div className={`flex-row justify-between items-center ${styles['group_1']}`}>
            <span className={`${styles['font_3']} ${styles['text_7']}`}>Quiz</span>
            <span className={`${styles['text_8']}`}>See all</span>
          </div>
          <div className={`flex-col mt-22`}>
            <div className={`flex-row items-center ${styles['section_5']}`}>
              <div className={`flex-col justify-start items-start shrink-0 ${styles['section_6']}`}>
                <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
                  <img
                    className={`${styles['image_4']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4afb9276d61c166a6ec6719f46a4e7d3.png"
                  />
                </div>
              </div>
              <div className={`flex-col items-start flex-1 ml-18`}>
                <span className={`${styles['font']} ${styles['text_9']}`}>Statistics Math Quiz</span>
                <span className={`${styles['font_4']} ${styles['mt-17']}`}>Math • 12 Quizzes</span>
              </div>
              <img
                className={`shrink-0 ${styles['image_3']} ml-18`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=080ee06ff3ccaa2ad8959213cbec31ca.png"
              />
            </div>
            <div className={`flex-row justify-between items-center ${styles['section_5']} mt-14`}>
              <div className={`flex-row items-center`}>
                <div className={`flex-col justify-start items-center ${styles['section_7']}`}>
                  <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']}`}>
                    <img
                      className={`${styles['image_5']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=75f90163a90f28b19c8309d1218cd51b.png"
                    />
                  </div>
                </div>
                <div className={`flex-col items-start ${styles['ml-17']}`}>
                  <span className={`${styles['font']} ${styles['text_10']}`}>Matrices Quiz</span>
                  <span className={`${styles['font_4']} ${styles['mt-17']}`}>Math • 6 Quizzes</span>
                </div>
              </div>
              <img
                className={`${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=080ee06ff3ccaa2ad8959213cbec31ca.png"
              />
            </div>
          </div>
        </div>
        <div className={`flex-col self-stretch ${styles['mt-29']}`}>
          <span className={`self-start ${styles['font_3']} ${styles['text_11']}`}>Friends</span>
          <div className={`flex-col justify-start items-start self-stretch ${styles['mt-23']}`}>
            <div className={`flex-col relative`}>
              {data.items.map((item, index) => (
                <div className={`flex-row items-center`} key={index}>
                  <div className={`flex-col justify-start items-center ${styles['image-wrapper_3']}`}>
                    <img
                      className={`${styles['image-wrapper_3']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d0041e1e5d5862ad8a49f9f73ec6a373.png"
                    />
                  </div>
                  <div className={`flex-col items-start ${styles['ml-21']}`}>
                    <span className={`${styles['font_5']}`}>Maren Workman</span>
                    <span className={`${styles['font_2']} mt-16`}>325 points</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Page_2_23_8823.defaultProps = { className: '' };