import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Account(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null],
    items_1: [null, null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row items-center ${styles['group']}`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4ab4d3e2dfed1e6a6bc5d2c17ebb23f4.png"
        />
        <div className={`flex-col flex-1 ${styles['ml-21']}`}>
          <div className={`flex-row items-center self-stretch`}>
            <span className={`${styles['text']}`}>Afsar Hossen</span>
            <img
              className={`${styles['image_2']} ${styles['ml-13']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a90f45fe48e10b51571b6c88250527a1.png"
            />
          </div>
          <span className={`mt-8 self-start ${styles['text_2']}`}>Imshuvo97@gmail.com</span>
        </div>
      </div>
      <div className={`flex-col ${styles['group_2']}`}>
        <div className={`flex-row justify-between items-center ${styles['group_3']}`}>
          <div className={`flex-row items-center`}>
            <img
              className={`shrink-0 ${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=27e7d4b89a40f27130656eeab0a507f3.png"
            />
            <span className={`ml-20 ${styles['font']}`}>Orders</span>
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
                  <span className={`ml-26 ${styles['font_2']}`}>My Details</span>
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
                  <span className={`ml-24 ${styles['font']}`}>Promo Cord</span>
                </div>
                <img
                  className={`${styles['image_4']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=337c713d03255fdbf2a730cbe859ec9c.png"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['group_7']}`}>
        <div className={`flex-row justify-center items-center relative ${styles['section']}`}>
          <img
            className={`${styles['image_11']} ${styles['pos']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5c6941e33de83d7c5cbc805d3bce2fde.png"
          />
          <span className={`${styles['font_2']} ${styles['text_5']}`}>Log Out</span>
        </div>
        <img
          className={`mt-24 ${styles['image_12']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9429c838c4eaa0735c62d404c9d95248.png"
        />
      </div>
    </div>
  );
}

Account.defaultProps = { className: '' };