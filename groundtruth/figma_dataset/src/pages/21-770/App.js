import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Onboarding_21_770(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start self-stretch relative ${styles['group_3']}`}>
        <div className={`flex-col items-start ${styles['section']}`}>
          <div className={`flex-row justify-end relative ${styles['group']}`}>
            <div className={`shrink-0 self-center ${styles['section_3']}`}></div>
            <span className={`self-start ${styles['font']} ${styles['text_2']}`}>EXERGIZE</span>
            <span className={`${styles['font']} ${styles['text']} ${styles['pos_3']}`}>EXERGIZE</span>
            <img
              className={`shrink-0 ${styles['image']} ${styles['pos']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8dbd5fcb1d8f3c111930072b79508329.png"
            />
          </div>
          <div className={`flex-row justify-between items-start ${styles['group_4']} mt-76`}>
            <div className={`${styles['section_6']}`}></div>
            <div className={`${styles['section_5']}`}></div>
          </div>
        </div>
        <div className={`flex-col ${styles['section_2']} ${styles['pos_2']}`}>
          <img
            className={`self-start ${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a7855b4d7e64c322e71d5df29e748cfc.png"
          />
          <div className={`flex-col items-start self-stretch mt-98`}>
            <div className={`${styles['section_4']}`}></div>
            <img
              className={`${styles['image_5']} mt-38`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=746f9a7d816d584f3d5b93e880f71b36.png"
            />
          </div>
        </div>
        <img
          className={`${styles['image_3']} ${styles['pos_4']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e94ce4679f97ba7afdb8b4b9faa74d91.png"
        />
        <img
          className={`${styles['image_4']} ${styles['pos_5']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=36bbda58d039a67b359b8ce641630c7b.png"
        />
      </div>
      <div className={`flex-col self-stretch relative ${styles['group_5']}`}>
        <span className={`self-center ${styles['text_3']}`}>Waffles are just pancakes with abs</span>
        <span className={`self-stretch ${styles['text_4']}`}>
          Our recipes and workouts are the perfect way to start your day. Sweat hard, then have a snack or drink.
          Whatever you prefer!
        </span>
        <div className={`self-end ${styles['section_8']}`}></div>
        <div className={`${styles['section_7']} ${styles['pos_7']}`}></div>
      </div>
      <div className={`flex-col justify-start items-center self-center ${styles['text-wrapper']}`}>
        <span className={`${styles['text_5']}`}>Get Started</span>
      </div>
    </div>
  );
}

Onboarding_21_770.defaultProps = { className: '' };