import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Overview_23_13049(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between ${styles['group_1']}`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2ab1bb35971e4fbb966aeded300febd0.png"
        />
        <span className={`self-start ${styles['text']}`}>Course Overview</span>
        <img
          className={`${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b4213da0b1d2d107ae6344d6280608e1.png"
        />
      </div>
      <div className={`flex-col ${styles['group']}`}>
        <div className={`flex-col justify-start relative ${styles['section']}`}>
          <div className={`${styles['section_2']}`}></div>
          <img
            className={`${styles['image_3']} ${styles['pos']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=42df6ca0ed51abc1809d27d9a9d7ace6.png"
          />
        </div>
        <div className={`flex-col justify-start ${styles['mt-31']}`}>
          <div className={`flex-col`}>
            <span className={`self-start ${styles['text_2']}`}>Figma master class for beginners</span>
            <div className={`flex-row justify-between items-center self-stretch ${styles['mt-11']}`}>
              <div className={`flex-row items-center`}>
                <img
                  className={`shrink-0 ${styles['image_4']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f12acf8a568267742ff5e967b9a7deba.png"
                />
                <span className={`${styles['font']} ${styles['text_3']} ${styles['ml-7']}`}>6h 30min</span>
                <div className={`shrink-0 ${styles['section_4']} ${styles['ml-7']}`}></div>
                <span className={`${styles['font']} ${styles['text_4']} ${styles['ml-7']}`}>28 lessons</span>
              </div>
              <div className={`flex-row items-center ${styles['section_3']}`}>
                <img
                  className={`shrink-0 ${styles['image_5']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e9fcc2c8d86732b2e61557d40f7b8af6.png"
                />
                <span className={`${styles['font']} ${styles['text_5']} ml-4`}>4.9</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['list']}`}>
        {data.items.map((item, index) => (
          <div
            className={`flex-row justify-between items-center self-stretch ${styles['list-item']} ${styles['mt-27']}`}
            key={index}
          >
            <div className={`flex-row items-center`}>
              <img
                className={`${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=efb58b64637fa88d160763c1948dc01b.png"
              />
              <div className={`flex-col items-start ${styles['ml-25']}`}>
                <span className={`${styles['font_3']}`}>Introduction to figma</span>
                <span className={`${styles['font_4']} mt-8`}>04:28 min</span>
              </div>
            </div>
            <img
              className={`${styles['image_7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=73050c68b178fa09b1bc7433ae717131.png"
            />
          </div>
        ))}
      </div>
      <div className={`flex-row relative ${styles['section_6']}`}>
        <div className={`flex-col justify-start items-center shrink-0 ${styles['section_7']}`}>
          <div className={`${styles['group_4']}`}>
            <span className={`${styles['text_10']}`}>$</span>
            <span className={`${styles['font_2']}`}>399</span>
          </div>
        </div>
        <div className={`flex-col justify-start items-center flex-1 ${styles['text-wrapper']} ${styles['ml-15']}`}>
          <span className={`${styles['text_11']}`}>Enroll Now</span>
        </div>
      </div>
    </div>
  );
}

Overview_23_13049.defaultProps = { className: '' };