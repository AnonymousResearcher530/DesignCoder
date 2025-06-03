import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Onbarding_Welcome_23_12757(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col`}>
        <div className={`flex-col justify-start items-center self-stretch relative ${styles['group']}`}>
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ffe5d6f92a83b56b79fde5c8ba99edd3.png"
          />
          <img
            className={`${styles['image_2']} ${styles['pos']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f91dce9411edd9143d62b9bf204f17cd.png"
          />
        </div>
        <span className={`self-center ${styles['text']} ${styles['mt-9']}`}>Welcome to Learner</span>
        <span className={`self-center ${styles['text_2']} ${styles['mt-9']}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua
        </span>
      </div>
      <div className={`mt-50 flex-row justify-center items-center relative ${styles['section']}`}>
        <span className={`${styles['text_3']}`}>Get Started</span>
        <img
          className={`${styles['image_3']} ${styles['pos_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=70b0db0cbf240cea743d4d2535ad93dc.png"
        />
      </div>
    </div>
  );
}

Onbarding_Welcome_23_12757.defaultProps = { className: '' };