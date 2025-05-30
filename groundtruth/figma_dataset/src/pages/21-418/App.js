import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function IPhone_13_Pro_Max_30_21_418(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1fc6a845dbe19dbaae1a85804ddd9328.png"
        />
        <img
          className={`${styles['image']} ${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=10318ac3c7579cc210236853967dffc0.png"
        />
      </div>
      <div className={`flex-col ${styles['group_2']}`}>
        <span className={`self-center ${styles['font']} ${styles['text_2']}`}>Premium Member</span>
        <div className={`flex-col items-end self-stretch relative ${styles['group_3']}`}>
          <img
            className={`shrink-0 ${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a139245ba601fbfd882c26de42015b0b.png"
          />
          <img
            className={`shrink-0 ${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=83af480931bbcc3f7ae9fd2edd5105ea.png"
          />
        </div>
        <span className={`self-center ${styles['text']}`}>Emily</span>
      </div>
      <div className={`${styles['grid']}`}>
        <div className={`flex-col items-start relative ${styles['grid-item']}`}>
          <span className={`${styles['text_3']}`}>3</span>
          <span className={`${styles['font']} ${styles['text_6']}`}>Rewards</span>
          <img
            className={`${styles['image_5']} ${styles['pos']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8fc97405392dc54cfa6a7e62c5321ced.png"
          />
        </div>
        <div className={`flex-col justify-start ${styles['grid-item_2']}`}>
          <div className={`flex-col items-start ${styles['section']}`}>
            <div className={`${styles['group_4']}`}>
              <span className={`${styles['font_2']} ${styles['text_4']}`}>2290</span>
              <span className={`${styles['font_3']} ${styles['text_4']} ${styles['text_5']}`}>kcal</span>
            </div>
            <span className={`${styles['font_4']} ${styles['mt-5']}`}>Total calories burned</span>
          </div>
        </div>
        <div className={`flex-col ${styles['grid-item_3']}`}>
          <span className={`self-start ${styles['font_2']} ${styles['text_8']}`}>41/60</span>
          <div className={`flex-row self-stretch ${styles['group_6']} ${styles['mt-3']}`}>
            <span className={`self-start ${styles['font_4']} ${styles['text_11']}`}>Workouts</span>
            <img
              className={`flex-1 ${styles['image_6']} ml-10`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5a25db9b0d6b08cd0577cfac6c537e69.png"
            />
          </div>
        </div>
        <div className={`flex-col justify-start ${styles['grid-item_2']}`}>
          <div className={`flex-col items-start ${styles['section_2']}`}>
            <div className={`${styles['group_5']}`}>
              <span className={`${styles['font_2']} ${styles['text_4']} ${styles['text_7']}`}>5</span>
              <span className={`${styles['font_3']} ${styles['text_4']} ${styles['text_9']}`}>kgs</span>
            </div>
            <span className={`${styles['font_4']} ${styles['text_10']} ${styles['mt-3']}`}>Weight Reduced</span>
          </div>
        </div>
      </div>
    </div>
  );
}

IPhone_13_Pro_Max_30_21_418.defaultProps = { className: '' };