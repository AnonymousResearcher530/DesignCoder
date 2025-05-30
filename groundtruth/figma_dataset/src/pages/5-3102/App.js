import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Onboarding_3_5_3102(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <img
        className={`self-center ${styles['image']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6aa40eaaae3c062e3050326126546c6d.png"
      />
      <img
        className={`self-center ${styles['image_2']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e8f800a5ab293e1d6cb6f253c81bcbb4.png"
      />
      <div className={`flex-col self-center ${styles['group']}`}>
        <span className={`self-center ${styles['text']}`}>Get Certified</span>
        <span className={`self-stretch ${styles['text_2']} ${styles['mt-29']}`}>
          Start learning and get certified after your training to get a lucrative job
        </span>
      </div>
      <div className={`flex-row justify-between items-center self-stretch ${styles['group_2']}`}>
        <span className={`${styles['font']} ${styles['text_3']}`}>Back</span>
        <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
          <span className={`${styles['font']} ${styles['text_4']}`}>Get Started</span>
        </div>
      </div>
    </div>
  );
}

Onboarding_3_5_3102.defaultProps = { className: '' };