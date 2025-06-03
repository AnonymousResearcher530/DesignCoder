import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Page_6_23_9418(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null, null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start`}>
        <div className={`flex-row justify-center items-center relative ${styles['group_2']}`}>
          <img
            className={`${styles['image']} ${styles['pos']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a6e13cb5f97f1f582102fe38a6b1c9c3.png"
          />
          <span className={`${styles['text']}`}>Leaderboard</span>
        </div>
      </div>
      <div className={`flex-col ${styles['section']} mt-90`}>
        <div className={`flex-row self-stretch relative ${styles['group_3']}`}>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
            <span className={`${styles['font']} ${styles['text_2']}`}>Weekly</span>
          </div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']} ml-4`}>
            <span className={`${styles['font']} ${styles['text_3']}`}>All Time</span>
          </div>
        </div>
        <div className={`shrink-0 self-center ${styles['section_2']}`}></div>
        <div className={`flex-col self-stretch ${styles['list']}`}>
          {data.items.map((item, index) => (
            <div className={`flex-row justify-between items-center ${styles['list-item']} mt-16`} key={index}>
              <div className={`flex-row items-center`}>
                <img
                  className={`${styles['image_4']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7c4d7adf690fa99311bc92a5729e5931.png"
                />
                <div className={`flex-col justify-start relative ${styles['group_4']} ml-14`}>
                  <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
                    <img
                      className={`${styles['image_2']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=188f4f562fd518b3a243d23d319ed141.png"
                    />
                  </div>
                  <img
                    className={`${styles['image_5']} ${styles['pos_2']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=87022889fe42689edb7ea04ebd257a31.png"
                  />
                </div>
                <div className={`flex-col items-start ml-14`}>
                  <span className={`${styles['font_2']} ${styles['text_4']}`}>Davis Curtis</span>
                  <span className={`${styles['font_3']} mt-16`}>2,569 points</span>
                </div>
              </div>
              <img
                className={`${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=edcacd9940c30de0a58e275112d31a60.png"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Page_6_23_9418.defaultProps = { className: '' };