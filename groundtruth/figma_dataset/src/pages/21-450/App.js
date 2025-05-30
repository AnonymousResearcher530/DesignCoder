import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function IPhone_13_Pro_Max_53_21_450(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col`}>
        <div className={`flex-row justify-between self-stretch`}>
          <img
            className={`self-start ${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e376cc2d2a32132ff1836d21a7d8d02d.png"
          />
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=65db0c47989bc351329af744437ec5d8.png"
          />
        </div>
        <span className={`self-start ${styles['text']} mt-8`}>Hey Emily,</span>
      </div>
      <div className={`flex-col ${styles['group_1']} mt-60`}>
        <div className={`flex-row ${styles['equal-division']}`}>
          <div
            className={`flex-col justify-start items-center ${styles['text-wrapper']} ${styles['equal-division-item']}`}
          >
            <span className={`${styles['font']} ${styles['text_2']}`}>Daily</span>
          </div>
          <div
            className={`flex-col justify-start items-center ${styles['text-wrapper']} ${styles['equal-division-item']} ${styles['ml-31']}`}
          >
            <span className={`${styles['font']} ${styles['text_2']}`}>Weekly</span>
          </div>
          <div
            className={`flex-col justify-start items-center ${styles['text-wrapper']} ${styles['equal-division-item']} ${styles['ml-31']}`}
          >
            <span className={`${styles['font']} ${styles['text_2']}`}>Monthly</span>
          </div>
        </div>
        <div className={`flex-col justify-start items-start ${styles['image-wrapper']}`}>
          <img
            className={`shrink-0 ${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=249bf073aa0bc96be96e3bc43f5609ab.png"
          />
        </div>
        <div className={`flex-row ${styles['equal-division_2']}`}>
          <div className={`flex-col justify-start items-start ${styles['equal-division-item_2']} ${styles['group']}`}>
            <span className={`${styles['font_5']} ${styles['text_6']}`}>Burned</span>
            <div className={`${styles['section']} ${styles['pos']}`}></div>
            <img
              className={`${styles['image_4']} ${styles['pos_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9c1cb59031e6b7ee8b024d66518ca286.png"
            />
            <span className={`${styles['font_5']} ${styles['text_5']} ${styles['pos_6']}`}>Consumed</span>
            <div className={`${styles['group_4']} ${styles['pos_3']}`}>
              <span className={`${styles['font_3']} ${styles['text_3']}`}>1698</span>
              <span className={`${styles['font_4']} ${styles['text_3']}`}>kcal</span>
            </div>
          </div>
          <div
            className={`flex-col justify-start ${styles['equal-division-item_2']} ${styles['group_2']} ${styles['ml-11']}`}
          >
            <div className={`${styles['section_2']}`}></div>
            <img
              className={`${styles['image_4']} ${styles['pos_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9c1cb59031e6b7ee8b024d66518ca286.png"
            />
            <div className={`${styles['group_3']} ${styles['pos_2']}`}>
              <span className={`${styles['font_2']} ${styles['text_3']}`}>1698</span>
              <span className={`${styles['font_4']} ${styles['text_3']} ${styles['text_4']}`}>kcal</span>
            </div>
          </div>
        </div>
        <div className={`flex-row ${styles['group_5']}`}>
          <div className={`flex-col justify-start items-start self-start relative ${styles['group_6']}`}>
            <span className={`${styles['font_3']} ${styles['text_7']}`}>7h 30m</span>
            <div className={`flex-col justify-start items-start ${styles['section_3']} ${styles['pos_7']}`}>
              <span className={`${styles['text_9']}`}>Sleep Duration</span>
              <img
                className={`${styles['image_6']} ${styles['pos_11']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9fdf3b34c5f47034597ba5dbe8169489.png"
              />
            </div>
          </div>
          <div className={`flex-col justify-start items-start relative ${styles['group_7']} ml-18`}>
            <div className={`${styles['group_9']}`}>
              <span className={`${styles['font_3']} ${styles['text_3']}`}>350</span>
              <span className={`${styles['font_4']} ${styles['text_3']}`}>kcal</span>
            </div>
            <div className={`flex-col justify-start items-start ${styles['section_4']} ${styles['pos_8']}`}>
              <div className={`${styles['group_8']}`}>
                <span className={`${styles['font_2']} ${styles['text_3']}`}>80</span>
                <span className={`${styles['text_3']} ${styles['text_8']}`}>bpm</span>
              </div>
              <div className={`flex-col justify-start items-start ${styles['group_10']} ${styles['pos_9']}`}>
                <span className={`${styles['font_5']} ${styles['text_11']}`}>Burned</span>
                <span className={`${styles['text_10']} ${styles['pos_12']}`}>Avg Heart rate</span>
                <img
                  className={`${styles['image_5']} ${styles['pos_10']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1f9f07242d7002a451144b75fb8c8569.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

IPhone_13_Pro_Max_53_21_450.defaultProps = { className: '' };