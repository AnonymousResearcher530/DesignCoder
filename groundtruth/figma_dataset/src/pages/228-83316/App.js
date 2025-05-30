import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Main_screen_228_83316(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col self-stretch ${styles['section_8']}`}>
        <div className={`self-center relative ${styles['section_9']}`}></div>
        <div className={`flex-row justify-between items-center self-stretch ${styles['group_7']}`}>
          <div className={`flex-col ${styles['group_8']}`}>
            <span className={`self-start ${styles['font_2']} ${styles['text_14']}`}>A/C is ON</span>
            <span className={`self-stretch ${styles['font_3']} ${styles['text_15']} ${styles['mt-15']}`}>
              Tap to turn off or swipe up  for a fast setup
            </span>
          </div>
          <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
            <img
              className={`${styles['image_11']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d0bc2c59c617de81af8adb6cb2cca9d5.png"
            />
          </div>
        </div>
      </div>
      <div className={`flex-row justify-between items-baseline self-center relative ${styles['group_12']}`}>
        <span className={`${styles['font_2']} ${styles['text_12']}`}>Navigation</span>
        <span className={`${styles['font_3']} ${styles['text_13']}`}>History</span>
      </div>
      <div
        className={`flex-row justify-between items-center self-center relative ${styles['group_1']} ${styles['view_1']}`}
      >
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=923de53d5dfba0482ea8bc9a677c792e.png"
        />
        <div className={`flex-col items-center`}>
          <span className={`${styles['font']} ${styles['text']}`}>Tesla</span>
          <span className={`${styles['text_2']} ${styles['mt-9']}`}>Cybertruck</span>
        </div>
        <img
          className={`${styles['image']} ${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=591e716bbc8210760c9abf3675deaf66.png"
        />
      </div>
      <div className={`flex-col items-end self-center relative ${styles['group']}`}>
        <img
          className={`${styles['image_4']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=596f6d32a81d0b6ca9478a14002e5eb3.png"
        />
        <img
          className={`${styles['image_5']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a17bf38162d4e4185e7618485107048c.png"
        />
        <img
          className={`${styles['image_6']} ${styles['pos_3']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6fd070ba07f5a0b83a84f595ebbd2c7f.png"
        />
        <div className={`flex-col justify-start items-end ${styles['section_2']} ${styles['pos_2']}`}>
          <div className={`flex-col justify-start ${styles['section_3']} ${styles['view']}`}>
            <div className={`flex-col justify-start items-center ${styles['section_3']}`}>
              <img
                className={`${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=109c6c11096015d2dd9ff5b1c6fabab4.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col self-center ${styles['group_1']} ${styles['view_3']}`}>
        <span className={`self-start ${styles['font_2']} ${styles['text_3']}`}>Status</span>
        <div className={`flex-col self-stretch ${styles['group_2']} mt-34`}>
          <div className={`flex-row`}>
            <div className={`flex-row`}>
              <div className={`flex-row items-center`}>
                <img
                  className={`shrink-0 ${styles['image_7']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d28697d720d57a29f8177ddda3ca70da.png"
                />
                <span className={`${styles['font_3']} ml-8`}>Battery</span>
              </div>
              <div className={`flex-row items-center ml-38`}>
                <img
                  className={`shrink-0 ${styles['image_8']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8db1ef93a8954b3ad7b7d64f91292667.png"
                />
                <span className={`${styles['font_3']} ${styles['text_4']} ${styles['ml-7']}`}>Range</span>
              </div>
            </div>
            <div className={`flex-row items-center ${styles['ml-51']}`}>
              <img
                className={`shrink-0 ${styles['image_9']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=457a47e5ccb5778932b8f19c84459d24.png"
              />
              <span className={`${styles['font_3']} ${styles['ml-7']}`}>Temperture</span>
            </div>
          </div>
          <div className={`flex-row justify-center items-center relative ${styles['group_3']} mt-10`}>
            <span className={`${styles['font_4']} ${styles['text_5']} ${styles['pos_4']}`}>54%</span>
            <div className={`flex-row items-center`}>
              <span className={`${styles['font_4']} ${styles['text_6']}`}>297 km</span>
              <div className={`flex-col items-end shrink-0 ${styles['ml-53']}`}>
                <div className={`${styles['group_4']}`}></div>
                <span className={`${styles['font_4']} ${styles['text_7']}`}>27 C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col self-center ${styles['group_11']}`}>
        <span className={`self-start ${styles['font_2']} ${styles['text_1']}`}>Information</span>
        <div className={`flex-row self-stretch ${styles['group_5']} mt-28`}>
          <div className={`flex-col justify-start relative ${styles['section_7']}`}>
            <div className={`flex-col items-start ${styles['section_4']}`}>
              <span className={`${styles['font_4']} ${styles['text_8']}`}>Engine</span>
              <span className={`${styles['font_3']} ${styles['text_10']} ${styles['mt-9']}`}>Sleeping mode</span>
            </div>
          </div>
          <div className={`flex-col justify-start ${styles['section_5']}`}>
            <div className={`flex-col ${styles['section_6']}`}>
              <img
                className={`self-start ${styles['image_10']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2146cea5368410fc00d2c67ef231d19f.png"
              />
              <div className={`flex-col items-start self-stretch ${styles['mt-77']}`}>
                <span className={`${styles['font_4']}`}>Climate</span>
                <span className={`${styles['font']} ${styles['text_11']} ${styles['mt-13']}`}>A/C is ON</span>
              </div>
            </div>
          </div>
          <div className={`flex-col items-start self-start ${styles['group_6']}`}>
            <img
              className={`${styles['image_10']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8b8bbc80ebb8351fe8a3487face33760.png"
            />
            <span className={`${styles['font_4']} ${styles['text_9']} ${styles['mt-77']}`}>Tires</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Main_screen_228_83316.defaultProps = { className: '' };