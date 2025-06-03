import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function IPhone_13_mini_27_127_10129(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col ${styles['group']}`}>
        <div className={`flex-row justify-end items-center self-stretch ${styles['group_2']}`}>
          <span className={`${styles['text']}`}>Profile</span>
          <div className={`flex-col justify-start items-center ${styles['image-wrapper']} ${styles['ml-17']}`}>
            <img
              className={`${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b27897e0a7b7147b1953f50df21d24ec.png"
            />
          </div>
        </div>
        <div className={`flex-row justify-center items-start self-stretch relative ${styles['group_3']}`}>
          <img
            className={`${styles['image_4']} ${styles['pos_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0ff902ba391e541c5dd5f88f7a41ed57.png"
          />
          <div className={`flex-col justify-start relative ${styles['group_4']}`}>
            <img
              className={`${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=46f08eb17d8bbf4db5c74216e5758dc0.png"
            />
            <img
              className={`${styles['image_3']} ${styles['pos']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8fff3f19e6ac65aff6997a13ada386f4.png"
            />
          </div>
        </div>
        <span className={`self-center ${styles['font']} ${styles['text_2']}`}>
          Change your conversation Icon as often as you like
        </span>
        <div className={`flex-col self-stretch ${styles['group_5']}`}>
          <div className={`flex-col ${styles['section']}`}>
            <span className={`self-center ${styles['text_3']}`}>103</span>
            <div className={`mt-22 flex-col self-stretch`}>
              <span className={`self-center ${styles['font']} ${styles['text_4']}`}>My points</span>
              <div className={`mt-12 flex-col items-center self-stretch`}>
                <span className={`${styles['font']}`}>You get chit points for posting, gathering</span>
                <span className={`${styles['font']}`}>upvote, and receiving comments.</span>
              </div>
            </div>
          </div>
          <div className={`flex-row justify-between items-end relative ${styles['group_6']}`}>
            <img
              className={`${styles['image_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d2d47a262b59afb9e937823fa90069da.png"
            />
            <img
              className={`${styles['image_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=cbec236f4d07a86bdd5ed7ebd719f012.png"
            />
          </div>
        </div>
      </div>
      <div className={`mt-92 flex-row justify-between items-center ${styles['section_2']}`}>
        <img
          className={`${styles['image_7']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f51b2eb379d7b018f0d8a235d54a044d.png"
        />
        <img
          className={`${styles['image_8']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6e7d5e8127bb5f1170bcdc6475084c93.png"
        />
        <img
          className={`${styles['image_10']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=47501603e91178c8125901a22713279f.png"
        />
        <img
          className={`${styles['image_9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b77b0ed6728b73849158f8e1ad557f55.png"
        />
        <img
          className={`${styles['image_10']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0b57e7b141277fc65949fa8fc5352b51.png"
        />
      </div>
    </div>
  );
}

IPhone_13_mini_27_127_10129.defaultProps = { className: '' };