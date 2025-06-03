import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Chat_3_504(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2a5f8c4d52d698a8551d82037a6f21eb.png"
        />
        <span className={`${styles['text']}`}>Chat</span>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5741a57bece972df349e968e49996352.png"
        />
      </div>
      <div className={`flex-row items-center ${styles['section']}`}>
        <img
          className={`${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=92255df48d8eb9d4d1a1832a56a1ec34.png"
        />
        <span className={`${styles['font']} ${styles['text_2']} ${styles['ml-13']}`}>Search</span>
      </div>
      <div className={`flex-col ${styles['list']}`}>
        {data.items.map((item, index) => (
          <div className={`flex-row justify-between items-center ${styles['group_2']}`} key={index}>
            <div className={`flex-row items-center`}>
              <img
                className={`${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=29e4a94f44684fe1a22a5868949634d4.png"
              />
              <div className={`flex-col items-start ${styles['ml-17']}`}>
                <span className={`${styles['font_2']}`}>Jenny Alxinder</span>
                <span className={`${styles['font_3']} ${styles['text_3']} ${styles['mt-7']}`}>Active now</span>
              </div>
            </div>
            <img
              className={`${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=209fbe53ce547db5ee7ccd2cf7d3539e.png"
            />
          </div>
        ))}
      </div>
      <div className={`flex-row justify-between items-center ${styles['group_6']}`}>
        <img
          className={`${styles['image_7']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=25b08e2a2568f8f7d4b0539edb9d87d9.png"
        />
        <img
          className={`${styles['image_8']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=239197c1e6c21f2d238e550996a7620c.png"
        />
        <img
          className={`${styles['image_6']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6ccb747ec38497ad9488913749e9ee48.png"
        />
        <img
          className={`${styles['image_9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6e7aaf7c99284246e6e3792a62b02219.png"
        />
        <img
          className={`${styles['image_10']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7c665f777461a3678a0848c4403cd06f.png"
        />
      </div>
    </div>
  );
}

Chat_3_504.defaultProps = { className: '' };