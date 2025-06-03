import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Dashboard_21_529(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col ${styles['group']}`}>
        <span className={`self-start ${styles['font']} ${styles['text']}`}>EVERYDAY WE’RE MUSCLE’N</span>
        <div className={`flex-row self-stretch ${styles['group_2']} ${styles['mt-15']}`}>
          <span className={`${styles['text_2']}`}>Hello, Kakashi</span>
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1ce8e8859f460a6b04befa75369dbd8a.png"
          />
        </div>
      </div>
      <div className={`flex-col ${styles['group_1']}`}>
        <span className={`self-start ${styles['font_2']} ${styles['text_3']}`}>My Plan</span>
        <div className={`flex-row self-stretch relative ${styles['group_13']} mt-16`}>
          <div className={`flex-col items-start ${styles['equal-division-item']} ${styles['section_2']}`}>
            <img
              className={`${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=da15b4f3f0ce20a05fc3770c80ec0089.png"
            />
            <span className={`${styles['font_3']} ${styles['text_4']}`}>Workout</span>
            <span className={`${styles['font_4']} ${styles['text_6']}`}>2 hours</span>
          </div>
          <div className={`flex-col items-start ${styles['equal-division-item_2']} ${styles['group_4']}`}>
            <img
              className={`${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d80a7815160043a4045f0e3adf98caae.png"
            />
            <span className={`${styles['font_3']} ${styles['text_5']}`}>Meditate</span>
            <span className={`${styles['font_4']} ${styles['text_7']}`}>1 hour</span>
          </div>
          <div className={`flex-row justify-between items-center ${styles['group_5']} ${styles['pos']}`}>
            <div className={`flex-col items-start`}>
              <span className={`${styles['font_3']}`}>Food</span>
              <span className={`${styles['font_4']} mt-8`}>1832 kcal</span>
            </div>
            <img
              className={`${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b71aab81e5c3b2d0c1b6ff284b3f25f9.png"
            />
          </div>
          <div className={`flex-col items-center ${styles['section_3']} ${styles['pos_2']}`}>
            <span className={`${styles['font_3']} ${styles['text_8']}`}>Let’s Go</span>
            <img
              className={`${styles['image_3']} mt-8`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=63004aff25b506b2a1aff73c85b8028e.png"
            />
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['group_6']}`}>
        <span className={`self-start ${styles['font_2']}`}>Weekly Stats</span>
        <div className={`flex-col self-stretch ${styles['group_7']} mt-16`}>
          <div className={`flex-row justify-center items-center ${styles['group_8']}`}>
            <span className={`${styles['font_4']} ${styles['text_9']}`}>Most Active:</span>
            <span className={`${styles['font_4']} ${styles['text_10']} ml-4`}>Friday</span>
          </div>
          <div className={`flex-col ${styles['group_9']}`}>
            <div className={`flex-row items-end ${styles['group_10']}`}>
              <div className={`${styles['section_1']}`}></div>
              <div className={`${styles['section_7']} ml-22`}></div>
              <div className={`${styles['section_10']} ml-22`}></div>
              <div className={`${styles['section_5']} ml-22`}></div>
              <div className={`${styles['section_4']} ml-22`}></div>
              <div className={`${styles['section_6']} ml-22`}></div>
              <div className={`${styles['section_1']} ml-22`}></div>
            </div>
            <div className={`flex-row justify-between items-center ${styles['group_12']} mt-8`}>
              <div className={`flex-row`}>
                <span className={`${styles['font']} ${styles['text_11']}`}>Mon</span>
                <span className={`${styles['font']} ${styles['text_12']} ml-24`}>Tue</span>
                <span className={`${styles['font']} ${styles['text_13']} ml-24`}>Wed</span>
              </div>
              <span className={`${styles['font']} ${styles['text_14']}`}>Thu</span>
              <span className={`${styles['font']} ${styles['text_15']}`}>Fri</span>
              <span className={`${styles['font']}`}>Sat</span>
              <span className={`${styles['font']} ${styles['text_16']}`}>Sun</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-row justify-between items-center ${styles['group_11']}`}>
        <div className={`flex-col items-center`}>
          <img
            className={`${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4f8d58f5bbd8c2df7d89407023f8f77d.png"
          />
          <span className={`${styles['font']} ${styles['text_17']} mt-6`}>Dashboard</span>
        </div>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=42294ad478d5ce2ee0736355be8f2517.png"
          />
        </div>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5f6e79975f6d26ec57fd1571c1736cc2.png"
          />
        </div>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7530c257bf70448ef014365645014e5b.png"
          />
        </div>
      </div>
    </div>
  );
}

Dashboard_21_529.defaultProps = { className: '' };