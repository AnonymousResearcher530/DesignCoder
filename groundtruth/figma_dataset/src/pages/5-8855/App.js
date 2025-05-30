import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Favorites_5_8855(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <span className={`self-center ${styles['text']}`}>Favorurite</span>
      <div className={`flex-col self-stretch ${styles['list']}`}>
        {data.items.map((item, index) => (
          <div className={`flex-row justify-between ${styles['group']}`} key={index}>
            <div className={`flex-row items-center self-center`}>
              <img
                className={`${styles['image']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=39e2868b2ca44c676e6d0dde28d7582b.png"
              />
              <div className={`flex-col items-center ${styles['ml-43']}`}>
                <span className={`${styles['font']} ${styles['text_2']}`}>Sprite Can</span>
                <span className={`${styles['font_3']} mt-10`}>325ml, Price</span>
              </div>
            </div>
            <div className={`flex-row self-start ${styles['group_2']}`}>
              <span className={`${styles['font_2']}`}>$1.50</span>
              <img
                className={`shrink-0 ${styles['image_2']} ml-14`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e75d0ebfeeb406585a2864b8e3d51641.png"
              />
            </div>
          </div>
        ))}
      </div>
      <div className={`flex-col justify-start self-stretch ${styles['group_10']}`}>
        <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
          <span className={`${styles['text_8']}`}>Add All To Cart</span>
        </div>
      </div>
      <div className={`flex-row justify-between items-center self-stretch ${styles['section']}`}>
        <img
          className={`${styles['image_7']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=248e7550df985babefd2824da8182302.png"
        />
        <img
          className={`${styles['image_8']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=de78b414a51a65a2a4181a8f47496751.png"
        />
        <img
          className={`${styles['image_9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=56f221ba570f844495267a66c31b03d0.png"
        />
        <img
          className={`${styles['image_10']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3545b70651e9104120ede5a1e73a088b.png"
        />
        <img
          className={`${styles['image_11']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9f6fdba6f88914f7ff7af6716ace3375.png"
        />
      </div>
    </div>
  );
}

Favorites_5_8855.defaultProps = { className: '' };