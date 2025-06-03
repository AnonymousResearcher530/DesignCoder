import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function IPhone_13_Pro_Max_5_21_356(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row relative ${styles['group']}`}>
        <span className={`${styles['text']} ${styles['pos_10']}`}>Hey Emily,</span>
        <img
          className={`${styles['image']} ${styles['pos_1']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1fc6a845dbe19dbaae1a85804ddd9328.png"
        />
        <img
          className={`${styles['image']} ${styles['pos_9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=10318ac3c7579cc210236853967dffc0.png"
        />
      </div>
      <div className={`flex-row justify-between ${styles['equal-division']}`}>
        <div className={`flex-col justify-start items-center ${styles['equal-division-item']}`}>
          <span className={`${styles['font']} ${styles['text_2']}`}>Daily</span>
        </div>
        <div className={`flex-col justify-start items-center ${styles['equal-division-item']}`}>
          <span className={`${styles['font']} ${styles['text_2']}`}>Weekly</span>
        </div>
        <div className={`flex-col justify-start items-center ${styles['equal-division-item_2']}`}>
          <span className={`${styles['font']} ${styles['text_3']}`}>Monthly</span>
        </div>
      </div>
      <div className={`flex-col ${styles['group_2']}`}>
        <div className={`flex-col justify-start relative ${styles['group_3']}`}>
          <div className={`flex-col ${styles['section']}`}>
            <span className={`self-center ${styles['font_2']} ${styles['text_4']}`}>Sleep Analysis</span>
            <div className={`flex-col self-stretch mt-72`}>
              <div className={`flex-row justify-between items-center`}>
                <div className={`flex-col items-center`}>
                  <span className={`${styles['font_3']} ${styles['text_6']}`}>Quality</span>
                  <span className={`${styles['font_2']} ${styles['text_7']} mt-6`}>80.4 %</span>
                </div>
                <div className={`flex-col items-center ${styles['group_1']}`}>
                  <span className={`${styles['font_2']} ${styles['text_5']}`}>7h 30m</span>
                  <span className={`${styles['font_4']} ${styles['text_8']} ${styles['mt-9']}`}>Sleep Duration</span>
                </div>
              </div>
              <div className={`flex-row justify-end ${styles['group_4']} mt-6`}>
                <img
                  className={`${styles['image_4']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d40a6407ccb6f62564d502e39b2ea7bf.png"
                />
                <span className={`${styles['text_9']} ${styles['ml-3']}`}>Slightly better than yesterday</span>
              </div>
            </div>
          </div>
          <img
            className={`${styles['image_3']} ${styles['pos']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=287eef16d357accb35a60557775f88f9.png"
          />
          <img
            className={`${styles['image_5']} ${styles['pos_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5216175e42e5a7c9032ac507276cafa8.png"
          />
        </div>
        <div className={`${styles['grid']} ${styles['mt-21']}`}>
          <div className={`flex-col justify-start items-start relative ${styles['grid-item_1']}`}>
            <div className={`flex-col items-start relative ${styles['section_2']}`}>
              <span className={`${styles['font_4']}`}>More Self love &</span>
              <span className={`${styles['font_4']}`}>Fulfilment</span>
            </div>
            <img
              className={`shrink-0 ${styles['image_7']} ${styles['pos_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a557639cc8a0efd7b2e2d67933cc9fc9.png"
            />
          </div>
          <div className={`flex-col justify-start relative ${styles['grid-item']}`}>
            <div className={`flex-col items-start relative ${styles['section_3']}`}>
              <div className={`${styles['group_5']}`}>
                <span className={`${styles['font_2']} ${styles['text_10']}`}>1698</span>
                <span className={`${styles['font_5']} ${styles['text_10']} ${styles['text_11']}`}>kcal</span>
              </div>
              <span className={`${styles['font_3']} ${styles['text_12']} mt-6`}>Consumed</span>
            </div>
            <img
              className={`shrink-0 ${styles['image_6']} ${styles['pos_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b1937f902d990ab474f4147d65115c4d.png"
            />
          </div>
          <div className={`flex-col justify-start items-start relative ${styles['grid-item_2']}`}>
            <div className={`${styles['group_8']}`}>
              <span className={`${styles['font_2']} ${styles['text_10']}`}>80</span>
              <span className={`${styles['font_5']} ${styles['text_10']} ${styles['text_14']}`}>bpm</span>
            </div>
            <div className={`flex-row justify-center ${styles['pos_5']}`}>
              <img
                className={`${styles['image_8']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7e30da7f341ad7057a2e3a6aff671d78.png"
              />
              <span className={`self-start ${styles['font_3']} ${styles['text_16']}`}>Avg Heart rate</span>
            </div>
          </div>
          <div className={`flex-row items-start relative ${styles['grid-item_3']}`}>
            <div className={`flex-col items-start ${styles['group_6']}`}>
              <div className={`${styles['group_7']}`}>
                <span className={`${styles['font_2']} ${styles['text_10']}`}>350</span>
                <span className={`${styles['font_5']} ${styles['text_10']} ${styles['text_13']}`}>kcal</span>
              </div>
              <span className={`${styles['font_3']} ${styles['text_15']} ${styles['mt-5']}`}>Burned</span>
            </div>
            <img
              className={`${styles['image_9']} ${styles['ml-17']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c46d42b82b913c3aa783c5eaf0c2f282.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

IPhone_13_Pro_Max_5_21_356.defaultProps = { className: '' };