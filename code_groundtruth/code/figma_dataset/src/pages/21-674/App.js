import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Training_21_674(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col items-start self-stretch ${styles['group']}`}>
        <span className={`${styles['font']} ${styles['text']}`}>TOO MUCH PROTEIN? NO WHEY, MATE!</span>
        <div className={`flex-col justify-start relative ${styles['group_2']} ${styles['mt-13']}`}>
          <span className={`${styles['text_2']}`}>Choose a training for today</span>
          <img
            className={`${styles['image']} ${styles['pos']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4d25768a4201652ff7d7e001c458e256.png"
          />
        </div>
      </div>
      <div className={`flex-col self-end ${styles['group_3']}`}>
        <div className={`flex-row self-start relative ${styles['group_1']}`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=95d702ad2740d39d936eb9ad751df479.png"
          />
          <img
            className={`${styles['image_3']} ${styles['pos_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2f252be4c74bb3d55c36a5e5df0337a1.png"
          />
          <img
            className={`self-start relative ${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=37f678f1202a9ae09c2d391ece192a3b.png"
          />
          <img
            className={`self-start relative ${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b98e7479360de1e9bff3232ddea71baf.png"
          />
        </div>
        <div className={`flex-col self-stretch relative ${styles['section']}`}>
          <span className={`self-center ${styles['font_2']} ${styles['text_3']}`}>Running</span>
          <div className={`flex-row justify-center self-start ${styles['group_5']}`}>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
              <span className={`${styles['font']} ${styles['text_4']}`}>Beginner</span>
            </div>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']} ml-12`}>
              <span className={`${styles['text_5']}`}>Intermediate</span>
            </div>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_3']} ml-12`}>
              <span className={`${styles['text_6']}`}>Advanced</span>
            </div>
          </div>
          <div className={`flex-col justify-start items-center self-center ${styles['text-wrapper_4']}`}>
            <span className={`${styles['font_2']} ${styles['text_8']}`}>14 km/h</span>
          </div>
          <div className={`flex-col justify-start self-start relative ${styles['group_4']}`}>
            <span className={`${styles['text_7']}`}>
              Running refers to terrestrial locomotion allowing humans and other animals to move rapidly on foot.{' '}
            </span>
          </div>
        </div>
      </div>
      <div className={`flex-row justify-between items-center self-stretch relative ${styles['section_2']}`}>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b7b69172b7861a41e92fed9b0674facf.png"
          />
        </div>
        <div className={`flex-col items-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=42747ff3e40ddbfd609d503d22a0127b.png"
          />
          <span className={`${styles['font']} ${styles['text_9']} ${styles['mt-5']}`}>Training</span>
        </div>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_8']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=69da4a4f5b25c291494a6b5d38324121.png"
          />
        </div>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_9']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b00f16bb051cd85a496690e76d80315f.png"
          />
        </div>
      </div>
    </div>
  );
}

Training_21_674.defaultProps = { className: '' };