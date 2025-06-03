import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Page_03_A_Onboarding_21_15764(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start items-end self-stretch relative ${styles['group']}`}>
        <span className={`${styles['text']} ${styles['text_2']}`}>Skip</span>
        <div className={`flex-col justify-start items-end ${styles['image-wrapper']} ${styles['pos']}`}>
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=71cb32b49abee7b8b0db8df74ad403ca.png"
          />
        </div>
      </div>
      <span className={`self-end ${styles['text']} ${styles['text_3']}`}>Choose your doctor </span>
      <span className={`self-center ${styles['text_4']}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.{' '}
      </span>
      <img
        className={`self-center ${styles['image_2']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f344946e9b04021abcce6df479b61629.png"
      />
      <div className={`flex-col justify-start items-center self-center ${styles['text-wrapper']}`}>
        <span className={`${styles['text_5']}`}>Next</span>
      </div>
    </div>
  );
}

Page_03_A_Onboarding_21_15764.defaultProps = { className: '' };