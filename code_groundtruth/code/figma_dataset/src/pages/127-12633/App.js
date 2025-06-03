import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Home_4_127_12633(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col justify-start ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start items-center relative ${styles['section']}`}>
        <img
          className={`shrink-0 ${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=240c7db98fa6513e0ffee807c0874db7.png"
        />
        <img
          className={`shrink-0 ${styles['image_2']} ${styles['pos_5']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7886d3ce87a99bbfcdb3b274a68f1128.png"
        />
        <div className={`flex-row ${styles['group_1']} ${styles['pos']}`}>
          <span className={`${styles['text']} ${styles['pos_2']}`}>Montreal</span>
          <span className={`${styles['text_2']} ${styles['pos_3']}`}>19°</span>
          <span className={`${styles['font']} ${styles['text_3']} ${styles['pos_4']}`}>
            Mostly Clear
            <br />
          </span>
          <span className={`${styles['font']} ${styles['pos_14']}`}>H:24°</span>
          <span className={`${styles['font']} ${styles['text_4']} ${styles['pos_15']}`}>L:18°</span>
        </div>
        <div className={`flex-col justify-start items-center ${styles['section_3']} ${styles['pos_6']}`}>
          <div className={`shrink-0 ${styles['section_5']}`}></div>
          <div className={`flex-col justify-start ${styles['group_2']} ${styles['pos_7']}`}>
            <div className={`flex-col ${styles['section_4']}`}>
              <div className={`${styles['divider']}`}></div>
              <div className={`flex-col justify-start items-center relative ${styles['group_3']}`}>
                <div className={`${styles['section_5']}`}></div>
                <div className={`${styles['section_5']} ${styles['pos_8']}`}></div>
              </div>
              <div className={`flex-row justify-between ${styles['group_4']}`}>
                <span className={`${styles['font_2']} ${styles['text_5']}`}>Hourly Forecast</span>
                <span className={`${styles['font_2']} ${styles['text_6']}`}>Weekly Forecast</span>
              </div>
              <div className={`flex-col justify-start ${styles['group_5']}`}>
                <div className={`flex-col justify-start items-end relative ${styles['group_6']}`}>
                  <div className={`${styles['section_6']}`}></div>
                  <div className={`flex-row ${styles['group_7']} ${styles['pos_9']}`}>
                    <div className={`flex-row ${styles['equal-division']}`}>
                      <div className={`flex-col ${styles['equal-division-item']} ${styles['section_7']}`}>
                        <span className={`self-center ${styles['font_3']}`}>12 AM</span>
                        <div className={`flex-col items-center self-stretch ${styles['group_8']}`}>
                          <img
                            className={`shrink-0 ${styles['image_3']}`}
                            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d80d3115a2e0fa7a76b2487108e45ad0.png"
                          />
                          <span className={`${styles['text_10']}`}>30%</span>
                        </div>
                        <span className={`self-center ${styles['font_4']} ${styles['text_11']}`}>19°</span>
                      </div>
                      <div
                        className={`flex-col items-center ${styles['equal-division-item']} ${styles['section_8']} ml-12`}
                      >
                        <span className={`${styles['font_3']} ${styles['text_7']}`}>Now</span>
                        <img
                          className={`${styles['image_3']} ${styles['image_4']}`}
                          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d80d3115a2e0fa7a76b2487108e45ad0.png"
                        />
                        <span className={`${styles['font_4']} ${styles['text_12']}`}>19°</span>
                      </div>
                      <div
                        className={`flex-col items-center ${styles['equal-division-item']} ${styles['section_15']} ml-12`}
                      >
                        <span className={`${styles['font_3']}`}>2 AM</span>
                        <span className={`${styles['font_4']} mt-80`}>18°</span>
                      </div>
                      <div
                        className={`flex-col items-center ${styles['equal-division-item']} ${styles['section_14']} ml-12`}
                      >
                        <span className={`${styles['font_3']} ${styles['text_8']}`}>3 AM</span>
                        <img
                          className={`${styles['image_3']} ${styles['image_10']}`}
                          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d80d3115a2e0fa7a76b2487108e45ad0.png"
                        />
                        <span className={`${styles['font_4']} ${styles['text_1']}`}>19°</span>
                      </div>
                      <div className={`flex-col items-center ${styles['section_9']} ${styles['section_1']} ml-12`}>
                        <span className={`${styles['font_3']} ${styles['text_9']}`}>4 AM</span>
                        <img
                          className={`${styles['image_3']} ${styles['image_1']}`}
                          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d80d3115a2e0fa7a76b2487108e45ad0.png"
                        />
                        <span className={`${styles['font_4']} ${styles['text_13']}`}>19°</span>
                      </div>
                    </div>
                    <div className={`shrink-0 ${styles['section_10']} ${styles['ml-11']}`}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`flex-col justify-start ${styles['group_9']} ${styles['pos_1']}`}>
            <div className={`flex-row justify-between ${styles['section_11']}`}>
              <img
                className={`self-center ${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=020ee817462fb26f833ad80056ebd1e8.png"
              />
              <img
                className={`self-start ${styles['image_7']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f12092b747db10b9b82f4c67082834dc.png"
              />
            </div>
            <div className={`flex-col justify-start items-center ${styles['image-wrapper']} ${styles['pos_10']}`}>
              <img
                className={`${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3f27bfbc76cf30d80524e0a7984ab192.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Home_4_127_12633.defaultProps = { className: '' };