import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Get_Started_228_76206(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col justify-start relative ${styles['page']} ${props.className}`}>
      <div className={`${styles['section']}`}></div>
      <div className={`flex-row ${styles['pos']}`}>
        <span className={`${styles['text']}`}>9:41</span>
        <img
          className={`shrink-0 ${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8e551220045821cae606be3e2b5b09c3.png"
        />
        <img
          className={`shrink-0 ${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d35030ea84413acdc76487dd47a4729f.png"
        />
        <img
          className={`shrink-0 ${styles['image_3']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4766179ad05065c32f1eff14b275ba8c.png"
        />
      </div>
      <div className={`flex-col ${styles['section_2']} ${styles['pos_5']}`}>
        <div className={`flex-col`}>
          <span className={`self-stretch ${styles['text_2']}`}>You want Authentic, here you go!</span>
          <span className={`self-center ${styles['text_3']} mt-14`}>Find it here, buy it now!</span>
        </div>
        <div className={`flex-col justify-start items-center ${styles['text-wrapper']} ${styles['mt-47']}`}>
          <span className={`${styles['text_4']}`}>Get Started</span>
        </div>
      </div>
    </div>
  );
}

Get_Started_228_76206.defaultProps = { className: '' };