import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Page_03_C_Onboarding_21_15724(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col items-center ${styles['page']} ${props.className}`}>
      <img
        className={`${styles['image']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9317ef637f50eb08cf99e4a4ec9566d7.png"
      />
      <span className={`${styles['text']}`}>Check your medical history</span>
      <span className={`${styles['text_2']}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.{' '}
      </span>
      <img
        className={`${styles['image_2']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=907ba0e39e695daccd2c36a0c074e685.png"
      />
      <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
        <span className={`${styles['text_3']}`}>Get Started</span>
      </div>
    </div>
  );
}

Page_03_C_Onboarding_21_15724.defaultProps = { className: '' };