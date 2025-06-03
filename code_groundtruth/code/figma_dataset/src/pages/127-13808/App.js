import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Exercise_page_127_13808(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start items-end relative ${styles['group']}`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9cbd10a5e503468643644e9bce4a764d.png"
        />
        <div className={`flex-col ${styles['section']} ${styles['pos']}`}>
          <img
            className={`self-end ${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=94442b68a8f7c6acff07d80d5e815544.png"
          />
          <div className={`flex-col justify-start items-center self-center ${styles['image-wrapper']} mt-100`}>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5449bf528573c26abe931b6a05893ebb.png"
            />
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['section_2']}`}>
        <div className={`self-center ${styles['section_3']}`}></div>
        <div className={`flex-col self-stretch ${styles['group_2']} mt-18`}>
          <div className={`flex-col ${styles['group_11']}`}>
            <span className={`self-start ${styles['text']}`}>Warm up</span>
            <span className={`self-stretch ${styles['text_2']} mt-12`}>
              Warm up properly before exercising to prevent  injury and make your workouts more effective.
            </span>
          </div>
          <div className={`flex-row ${styles['group_3']}`}>
            <div className={`flex-row items-center ${styles['section_4']}`}>
              <img
                className={`shrink-0 ${styles['image_4']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=53b09165edbda0cf523656b3556c3cb5.png"
              />
              <span className={`${styles['font']} ${styles['text_3']} ${styles['ml-15']}`}>10.00 mins</span>
            </div>
            <div className={`flex-row items-center ${styles['section_5']} ml-6`}>
              <img
                className={`shrink-0 ${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1ca956645214eceb1a3639e0fb3ab0ea.png"
              />
              <span className={`${styles['font']} ${styles['text_4']} ${styles['ml-15']}`}>Running</span>
            </div>
          </div>
          <div className={`flex-col ${styles['group_1']}`}>
            <span className={`self-start ${styles['text_5']}`}>Exercises</span>
            <div className={`flex-col self-stretch ${styles['group_4']} mt-16`}>
              <div className={`flex-row justify-between items-center`}>
                <div className={`flex-row items-center relative`}>
                  <div className={`${styles['section_6']}`}></div>
                  <div className={`flex-col items-start ${styles['group_5']}`}>
                    <span className={`${styles['font']}`}>Exercise 1</span>
                    <span className={`${styles['font_2']} mt-12`}>02.30 Minutes</span>
                  </div>
                  <img
                    className={`${styles['section_6']} ${styles['pos_2']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4ec97329b4f285bbc550702812388568.png"
                  />
                </div>
                <img
                  className={`${styles['image_6']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=98f10078c35e246965b3639e71170b81.png"
                />
              </div>
              <div className={`flex-row justify-between items-center mt-18`}>
                <div className={`flex-row items-center relative`}>
                  <div className={`${styles['section_6']}`}></div>
                  <div className={`flex-col items-start ${styles['group_6']}`}>
                    <span className={`${styles['font']}`}>Exercise 2</span>
                    <span className={`${styles['font_2']} mt-12`}>02.00 Minutes</span>
                  </div>
                  <img
                    className={`${styles['section_6']} ${styles['pos_3']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=45ca43e306c25d7935a16d738d4fd4c5.png"
                  />
                </div>
                <img
                  className={`${styles['image_6']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=98f10078c35e246965b3639e71170b81.png"
                />
              </div>
              <div className={`flex-row justify-between items-center mt-18`}>
                <div className={`flex-row items-center relative`}>
                  <div className={`${styles['section_6']}`}></div>
                  <div className={`flex-col items-start ${styles['group_7']}`}>
                    <span className={`${styles['font']}`}>Exercise 3</span>
                    <span className={`${styles['font_2']} mt-12`}>03.20 Minutes</span>
                  </div>
                  <img
                    className={`${styles['section_6']} ${styles['pos_4']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=dd221e667ca9bb54f1706b07be75e85b.png"
                  />
                </div>
                <img
                  className={`${styles['image_6']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=98f10078c35e246965b3639e71170b81.png"
                />
              </div>
              <div className={`flex-row justify-between ${styles['group_8']} mt-18`}>
                <div className={`flex-row`}>
                  <div className={`flex-col justify-start items-center shrink-0 ${styles['image-wrapper_2']}`}>
                    <img
                      className={`${styles['image_7']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c5fb6bd955a6d8a1e3a37c634e96cde7.png"
                    />
                  </div>
                  <span className={`self-start ${styles['font']} ${styles['text_6']} ml-22`}>Exercise 4</span>
                </div>
                <img
                  className={`self-start ${styles['image_8']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d12618169103d39f5071305c56494528.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-row justify-between ${styles['section_7']}`}>
        <img
          className={`${styles['image_9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3dca41eeeb2a30652dda1462538eadae.png"
        />
        <img
          className={`${styles['image_10']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=07d22a260a49ca914552c1b4d6eeaf09.png"
        />
        <img
          className={`${styles['image_11']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=eb9b4fcae2ad69c831a2af558ba7a273.png"
        />
        <img
          className={`${styles['image_12']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=17e2f51733b5d5bd4a2bcbb758ccfedf.png"
        />
      </div>
    </div>
  );
}

Exercise_page_127_13808.defaultProps = { className: '' };