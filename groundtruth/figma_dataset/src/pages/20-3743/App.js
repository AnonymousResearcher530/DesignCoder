import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Follow_friends_20_3743(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row items-center`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b185dfbc3881a8d212e683cae1d8d222.png"
        />
        <img
          className={`${styles['image_2']} ml-6`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=78c8fae9e6161ded18848e45d286bf83.png"
        />
      </div>
      <div className={`flex-col ${styles['group']}`}>
        <span className={`self-start ${styles['font']} ${styles['text']}`}>
          Follow new friends to have access to their rooms
        </span>
        <div className={`flex-row justify-between items-center self-stretch ${styles['mt-23']}`}>
          <div className={`flex-row items-center`}>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8286738f22d92ccbbcf54b5fc35e9d35.png"
            />
            <div className={`flex-col items-start ml-8`}>
              <span className={`${styles['font']} ${styles['text_1']}`}>Louis Hamilton</span>
              <span className={`${styles['font_2']} mt-6`}>Singer</span>
            </div>
          </div>
          <img
            className={`${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=98e52ce804a1f39e9f244e8a2d03fc41.png"
          />
        </div>
        <div className={`flex-row justify-between items-center self-stretch ${styles['mt-23']}`}>
          <div className={`flex-row items-center`}>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=520b963a3699d5507905d6a0d68b6cef.png"
            />
            <div className={`flex-col items-start ml-8`}>
              <span className={`${styles['font']} ${styles['text_11']}`}>Louis Hamilton</span>
              <span className={`${styles['font_2']} mt-6`}>Singer</span>
            </div>
          </div>
          <img
            className={`${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=98e52ce804a1f39e9f244e8a2d03fc41.png"
          />
        </div>
        <div className={`flex-row justify-between items-center self-stretch ${styles['mt-23']}`}>
          <div className={`flex-row items-center`}>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7d9d766405e8d10ec4eb9a8c35ea6f38.png"
            />
            <div className={`flex-col items-start ml-8`}>
              <span className={`${styles['font']} ${styles['text_12']}`}>Louis Hamilton</span>
              <span className={`${styles['font_2']} mt-6`}>Singer</span>
            </div>
          </div>
          <img
            className={`${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=98e52ce804a1f39e9f244e8a2d03fc41.png"
          />
        </div>
        <div className={`flex-row justify-between items-center self-stretch ${styles['mt-23']}`}>
          <div className={`flex-row items-center`}>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ae5dfde7de36d3aaedf0aa36ca2967f5.png"
            />
            <div className={`flex-col items-start ml-8`}>
              <span className={`${styles['font']} ${styles['text_5']}`}>Louis Hamilton</span>
              <span className={`${styles['font_2']} mt-6`}>Singer</span>
            </div>
          </div>
          <img
            className={`${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=98e52ce804a1f39e9f244e8a2d03fc41.png"
          />
        </div>
        <div className={`flex-row justify-between items-center self-stretch ${styles['mt-23']}`}>
          <div className={`flex-row items-center`}>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3c942227093ee71265d54d23abd317d2.png"
            />
            <div className={`flex-col items-start ml-8`}>
              <span className={`${styles['font']} ${styles['text_6']}`}>Louis Hamilton</span>
              <span className={`${styles['font_2']} mt-6`}>Singer</span>
            </div>
          </div>
          <img
            className={`${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=98e52ce804a1f39e9f244e8a2d03fc41.png"
          />
        </div>
        <div className={`flex-row justify-between items-center self-stretch ${styles['mt-23']}`}>
          <div className={`flex-row items-center`}>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8286738f22d92ccbbcf54b5fc35e9d35.png"
            />
            <div className={`flex-col items-start ml-8`}>
              <span className={`${styles['font']} ${styles['text_7']}`}>Louis Hamilton</span>
              <span className={`${styles['font_2']} mt-6`}>Singer</span>
            </div>
          </div>
          <img
            className={`${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=98e52ce804a1f39e9f244e8a2d03fc41.png"
          />
        </div>
      </div>
      <div className={`flex-col ${styles['group_7']}`}>
        <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
          <span className={`${styles['font_3']} ${styles['text_2']} ${styles['text_3']}`}>Follow</span>
        </div>
        <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']} ${styles['mt-7']}`}>
          <span className={`${styles['font_3']} ${styles['text_2']} ${styles['text_4']}`}>Deselect all</span>
        </div>
      </div>
    </div>
  );
}

Follow_friends_20_3743.defaultProps = { className: '' };