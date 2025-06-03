import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Home_3_11(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center self-stretch ${styles['group_1']}`}>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=05dc7baebc0d0899f8c62f5828283044.png"
          />
        </div>
        <div className={`flex-col justify-start`}>
          <span className={`${styles['font']} ${styles['text']}`}>Friday, 26</span>
        </div>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6796a48ffd51f861e59d724e951544f9.png"
          />
        </div>
      </div>
      <div className={`flex-col justify-start items-start self-start relative ${styles['group']}`}>
        <span className={`${styles['text_2']}`}>Let’s make a habits together 🙌</span>
        <img
          className={`${styles['image_2']} ${styles['pos']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=757653f0c5442450d93f9af0da6a5800.png"
        />
      </div>
      <div className={`flex-row self-stretch ${styles['group_3']}`}>
        <div className={`flex-col shrink-0 ${styles['section']}`}>
          <div className={`flex-col items-start`}>
            <span className={`${styles['font_1']}`}>Application Design</span>
            <span className={`${styles['font_2']} ${styles['mt-11']}`}>UI Design Kit</span>
          </div>
          <div className={`flex-row items-center mt-24`}>
            <img
              className={`shrink-0 ${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c6b32aa73e2ca9113f6ce8df160bcb95.png"
            />
            <div className={`flex-col flex-1 ml-26`}>
              <div className={`flex-row justify-between items-center ${styles['group_4']}`}>
                <span className={`${styles['font_2']} ${styles['text_7']}`}>Progress</span>
                <span className={`${styles['font_3']} ${styles['text_6']}`}>50/80</span>
              </div>
              <img
                className={`${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8da2f9965072a83c3e5d1a9a1393428c.png"
              />
            </div>
          </div>
        </div>
        <div className={`flex-col ${styles['section_2']} ${styles['ml-15']}`}>
          <div className={`flex-col items-start self-stretch`}>
            <span className={`${styles['font']} ${styles['text_4']}`}>Overlay Design</span>
            <span className={`${styles['font_3']} ${styles['text_5']} ${styles['mt-11']}`}>UI Design Kit</span>
          </div>
          <img
            className={`self-start ${styles['image_4']} ${styles['mt-25']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c13f779da91a6a442556c726827301bf.png"
          />
        </div>
      </div>
      <div className={`flex-col self-stretch ${styles['group_11']}`}>
        <div className={`flex-row justify-between items-center ${styles['group_5']}`}>
          <span className={`${styles['text_8']}`}>In Progress</span>
          <img
            className={`${styles['image_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2e5039ef98ac2315aa160a2e487beee2.png"
          />
        </div>
        <div className={`flex-col ${styles['mt-21']}`}>
          {data.items.map((item, index) => (
            <div
              className={`flex-row justify-between items-center ${styles['list-item']} ${styles['section_3']} ${styles['mt-15']}`}
              key={index}
            >
              <div className={`flex-col items-start`}>
                <span className={`${styles['font_3']} ${styles['text_9']}`}>Productivity Mobile App</span>
                <span className={`${styles['font_4']} mt-8`}>Create Detail Booking</span>
                <span className={`${styles['font_3']} mt-8`}>2 min ago</span>
              </div>
              <div className={`flex-col justify-start items-center relative ${styles['group_7']}`}>
                <span className={`${styles['font_5']}`}>60%</span>
                <img
                  className={`${styles['image']} ${styles['pos_2']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8c5d9aec268195a788fc656235101080.png"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`flex-row justify-around items-center self-stretch ${styles['group_8']}`}>
        <img
          className={`${styles['image_8']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ff7bde4b9849e58e9d7587c552889542.png"
        />
        <img
          className={`${styles['image_9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=239197c1e6c21f2d238e550996a7620c.png"
        />
        <img
          className={`${styles['image_7']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6ccb747ec38497ad9488913749e9ee48.png"
        />
        <img
          className={`${styles['image_10']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=76e082169cd6fc5f6bf23e9dcd02b411.png"
        />
        <img
          className={`${styles['image_11']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7c665f777461a3678a0848c4403cd06f.png"
        />
      </div>
    </div>
  );
}

Home_3_11.defaultProps = { className: '' };