import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Android_62_4_2008(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col self-stretch ${styles['group']}`}>
        <img
          className={`self-start ${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8dfb8dc8d2766ba3fa44627729296e63.png"
        />
        <div className={`mt-12 flex-col self-stretch ${styles['group_2']}`}>
          <span className={`self-center ${styles['text']}`}>Choose your goals</span>
          <div className={`mt-14 flex-col items-center self-stretch`}>
            <span className={`${styles['font']}`}>What are your mind goals? We will</span>
            <span className={`${styles['font']}`}>help you achieve them!</span>
          </div>
        </div>
      </div>
      <div className={`flex-col self-stretch ${styles['list']}`}>
        {data.items.map((item, index) => (
          <div className={`flex-row items-center mt-12 ${styles['section']} ${styles['list-item']}`} key={index}>
            <img
              className={`${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=218956783c7c487cffac9b47fecef63a.png"
            />
            <span className={`ml-20 ${styles['font_2']} ${styles['text_2']}`}>Learn from Scratch</span>
          </div>
        ))}
      </div>
      <div className={`flex-col justify-start items-center self-stretch ${styles['text-wrapper']}`}>
        <span className={`${styles['font_2']} ${styles['text_5']}`}>Conitinue</span>
      </div>
      <div className={`self-center ${styles['group_3']}`}>
        <span className={`${styles['font_4']}`}>
          By using it you confirm that you have read and <br />
        </span>
        <span className={`${styles['font_4']}`}>agree to our </span>
        <span className={`${styles['font_4']}`}>terms of service</span>
        <span className={`${styles['font_4']}`}> and </span>
        <span className={`${styles['font_4']}`}>privacy policy</span>
      </div>
    </div>
  );
}

Android_62_4_2008.defaultProps = { className: '' };