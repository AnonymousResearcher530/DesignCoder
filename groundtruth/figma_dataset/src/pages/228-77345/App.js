import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Calculator(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null, null, null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col ${styles['group']}`}>
        <div className={`flex-col justify-start items-end relative`}>
          <div className={`${styles['section_2']}`}></div>
          <div className={`flex-row justify-between items-center ${styles['section']} ${styles['pos']}`}>
            <span className={`${styles['font']}`}>35</span>
            <div className={`flex-row items-center`}>
              <span className={`${styles['font']} ${styles['text']}`}>Days</span>
              <img
                className={`shrink-0 ${styles['image']} ${styles['ml-27']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=45516d5f0807068cfad813f11308a718.png"
              />
            </div>
          </div>
        </div>
        <div className={`mt-28 flex-col ${styles['list']}`}>
          {data.items.map((item, index) => (
            <div
              className={`flex-row justify-between items-center ${styles['list-item']} ${styles['mt-9']}`}
              key={index}
            >
              <div className={`flex-row items-center`}>
                <img
                  className={`shrink-0 ${styles['image_2']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6f0252d8ffd8e943106d7dc6d4a8157f.png"
                />
                <span className={`${styles['font_2']} ${styles['ml-21']}`}>Refrigerator</span>
              </div>
              <img
                className={`${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=62bb64496446cbb3bd160376d1c0dc45.png"
              />
            </div>
          ))}
        </div>
      </div>
      <div className={`mt-34 flex-col`}>
        <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
          <span className={`${styles['font_4']} ${styles['text_5']}`}>Calculate</span>
        </div>
        <div className={`flex-col ${styles['group_2']} ${styles['mt-23']}`}>
          <span className={`${styles['font_3']} ${styles['text_6']}`}>
            For the above consumption rate and duration, your estimated spendings is:
          </span>
          <div className={`mt-12 flex-col justify-start items-start ${styles['text-wrapper_2']}`}>
            <span className={`${styles['font']} ${styles['text_7']}`}>GHS 80.50</span>
          </div>
        </div>
        <div className={`flex-col ${styles['mt-23']}`}>
          <div className={`flex-row justify-center items-center relative ${styles['section_3']}`}>
            <span className={`${styles['font_4']} ${styles['text_8']}`}>Recharge Now</span>
            <img
              className={`${styles['image_4']} ${styles['pos_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d21ef550f0f666f8aeed09b0e60ef063.png"
            />
          </div>
          <div className={`flex-row justify-between items-center ${styles['mt-23']}`}>
            <div className={`flex-row items-center`}>
              <div className={`flex-col items-center`}>
                <img
                  className={`${styles['image_5']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8e56b545059f3527dd483a69ce357356.png"
                />
                <span className={`mt-10 ${styles['font_5']} ${styles['text_9']}`}>Readings</span>
              </div>
              <div className={`flex-row items-center ${styles['ml-29']}`}>
                <div className={`flex-col relative ${styles['section_4']}`}>
                  <img
                    className={`self-center ${styles['image_7']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a5641741cb728ac0c73104d15a9d86b0.png"
                  />
                  <span className={`mt-8 self-start ${styles['font_5']} ${styles['text_10']}`}>Calculate</span>
                </div>
                <div className={`ml-12 flex-col items-center`}>
                  <img
                    className={`${styles['image_7']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=12d47c747932ca7b0c4cb801e395b5ce.png"
                  />
                  <span className={`mt-8 ${styles['font_5']}`}>Advanced</span>
                </div>
              </div>
            </div>
            <div className={`flex-col items-center ${styles['group_3']}`}>
              <img
                className={`${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=218cd5ef466061bb94245d5b5c63b9ba.png"
              />
              <span className={`${styles['font_5']} ${styles['text_11']} ${styles['mt-9']}`}>Account</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Calculator.defaultProps = { className: '' };