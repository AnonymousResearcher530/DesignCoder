import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Account_5_9347(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null],
    items_1: [null, null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row items-center self-stretch ${styles['group']}`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3b3116c2fda9e812a5756b0b0f02de93.png"
        />
        <div className={`flex-col flex-1 ${styles['ml-21']}`}>
          <div className={`flex-row items-center self-stretch`}>
            <span className={`${styles['text']}`}>Afsar Hossen</span>
            <img
              className={`${styles['image_2']} ${styles['ml-13']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a90f45fe48e10b51571b6c88250527a1.png"
            />
          </div>
          <span className={`self-start ${styles['text_2']} mt-8`}>Imshuvo97@gmail.com</span>
        </div>
      </div>
      <div className={`flex-col self-stretch ${styles['group_2']}`}>
        <div className={`flex-row justify-between items-center ${styles['group_1']}`}>
          <div className={`flex-row items-center`}>
            <img
              className={`shrink-0 ${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=27e7d4b89a40f27130656eeab0a507f3.png"
            />
            <span className={`${styles['font']} ml-20`}>Orders</span>
          </div>
          <img
            className={`${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=337c713d03255fdbf2a730cbe859ec9c.png"
          />
        </div>
        <div className={`flex-col`}>
          <div className={`flex-col ${styles['list']}`}>
            {data.items.map((item, index) => (
              <div className={`flex-row justify-between items-center ${styles['group_4']}`} key={index}>
                <div className={`flex-row items-center`}>
                  <img
                    className={`shrink-0 ${styles['image_5']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=520ab6d0357ef8c75eb17b5bd6922c31.png"
                  />
                  <span className={`${styles['font_2']} ml-26`}>My Details</span>
                </div>
                <img
                  className={`${styles['image_6']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=76f213b4c2ce8f975ae78fd64b811ef8.png"
                />
              </div>
            ))}
          </div>
          <div className={`flex-col`}>
            {data.items_1.map((item, index) => (
              <div className={`flex-row justify-between items-center ${styles['list-item']}`} key={index}>
                <div className={`flex-row items-center`}>
                  <img
                    className={`shrink-0 ${styles['image_9']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d7525e938cd82555bf4b2cf801b618c9.png"
                  />
                  <span className={`${styles['font']} ml-24`}>Promo Cord</span>
                </div>
                <img
                  className={`${styles['image_4']} ${styles['image_1']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=337c713d03255fdbf2a730cbe859ec9c.png"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`flex-row justify-center items-center self-stretch relative ${styles['section']}`}>
        <img
          className={`${styles['image_11']} ${styles['pos']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5c6941e33de83d7c5cbc805d3bce2fde.png"
        />
        <span className={`${styles['font_2']} ${styles['text_5']}`}>Log Out</span>
      </div>
      <div className={`flex-row justify-between items-center self-start ${styles['section_2']}`}>
        <img
          className={`${styles['image_13']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=248e7550df985babefd2824da8182302.png"
        />
        <img
          className={`${styles['image_14']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=de78b414a51a65a2a4181a8f47496751.png"
        />
        <img
          className={`${styles['image_15']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=56f221ba570f844495267a66c31b03d0.png"
        />
        <img
          className={`${styles['image_16']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3545b70651e9104120ede5a1e73a088b.png"
        />
        <img
          className={`${styles['image_17']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9f6fdba6f88914f7ff7af6716ace3375.png"
        />
      </div>
    </div>
  );
}

Account_5_9347.defaultProps = { className: '' };