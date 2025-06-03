import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Start_5_5008(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col items-center self-stretch ${styles['section_2']}`}>
        <span className={`${styles['text']}`}>Welcome to</span>
        <img
          className={`${styles['image']} mt-32`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=060030038aa9fcd72c1003cb04785380.png"
        />
      </div>
      <div className={`flex-row justify-center self-center relative ${styles['section_3']}`}>
        <span className={`${styles['text_2']}`}>Let’s Go</span>
        <img
          className={`${styles['image_2']} ${styles['pos']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e9ba274c528b271e766da18a78fc2dc2.png"
        />
      </div>
      <img
        className={`self-center ${styles['image_3']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bac96481da213aaa1394aca5a8227369.png"
      />
    </div>
  );
}

Start_5_5008.defaultProps = { className: '' };