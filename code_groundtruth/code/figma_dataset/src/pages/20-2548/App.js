import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Rooms_20_2548(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row items-center ${styles['group']}`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3e4d225406e04e33351a406e3f9df3be.png"
        />
        <span className={`${styles['font']} ${styles['text']} ml-10`}>Spaces</span>
      </div>
      <div className={`flex-col ${styles['group_3']}`}>
        <div className={`flex-col items-start self-start`}>
          <span className={`${styles['text_2']}`}>Happening Now</span>
          <span className={`${styles['font_2']} ${styles['text_3']} mt-8`}>Spaces going on right now</span>
        </div>
        <div className={`flex-col self-stretch mt-20`}>
          <span className={`self-start ${styles['font']}`}>💡 You follow cryptocurrencies</span>
          <div className={`flex-col self-stretch ${styles['mt-9']}`}>
            <div className={`flex-col ${styles['section']}`}>
              <div className={`flex-row justify-between items-center`}>
                <div className={`flex-row items-center`}>
                  <img
                    className={`shrink-0 ${styles['image_2']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9b8e649df14a8c46b17e1f08ec428b7b.png"
                  />
                  <span className={`${styles['font_2']} ${styles['text_5']} ${styles['ml-17']}`}>
                    Today at 11:00 PM
                  </span>
                </div>
                <img
                  className={`${styles['image_3']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d439f06026b1795e9c7e89b6c09cec30.png"
                />
              </div>
              <span className={`${styles['font_3']} mt-16`}>Binance NFT Chat: Supercharge your spaces </span>
              <div className={`flex-row items-center mt-16`}>
                <span className={`${styles['font_4']} ${styles['text_6']}`}>Small business</span>
                <span className={`${styles['font_5']} ${styles['text_8']}`}>•</span>
                <span className={`${styles['font_2']} ${styles['text_7']}`}>Cryptocurrency</span>
              </div>
            </div>
            <div className={`flex-col ${styles['section_2']}`}>
              <div className={`flex-row justify-between items-center self-stretch`}>
                <div className={`flex-row items-center`}>
                  <img
                    className={`shrink-0 ${styles['image_4']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e7865ab8b81e73320ba8e35fd3bc98ce.png"
                  />
                  <span className={`${styles['font_4']} ${styles['ml-17']}`}>Binance NFT</span>
                </div>
                <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
                  <span className={`${styles['font_6']}`}>Host</span>
                </div>
              </div>
              <div className={`flex-row items-center self-stretch ${styles['group_1']}`}>
                <span className={`${styles['font_2']} ${styles['text_9']}`}>@Binance</span>
                <span className={`${styles['font_5']} ${styles['ml-7']}`}>•</span>
                <span className={`${styles['font_2']} ${styles['ml-7']}`}>#NFT Market place</span>
              </div>
              <span className={`self-start ${styles['font_2']} ${styles['text_10']}`}>The one stop for NFT</span>
            </div>
          </div>
        </div>
        <div className={`flex-col self-stretch mt-20`}>
          <span className={`self-start ${styles['font']}`}>💡 You follow cryptocurrencies</span>
          <div className={`flex-col self-stretch ${styles['mt-9']}`}>
            {data.items.map((item, index) => (
              <div className={`flex-col ${styles['section_3']}`} key={index}>
                <div className={`flex-row justify-between items-center`}>
                  <div className={`flex-row items-center`}>
                    <img
                      className={`shrink-0 ${styles['image_5']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d8976471b59a64fe0cc200d6a8599678.png"
                    />
                    <span className={`${styles['font_2']} ${styles['text_12']} ml-16`}>Today at 11:00 PM</span>
                  </div>
                  <img
                    className={`${styles['image_3']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d439f06026b1795e9c7e89b6c09cec30.png"
                  />
                </div>
                <span className={`${styles['font_3']} mt-16`}>Binance NFT Chat: Supercharge your spaces </span>
                <div className={`flex-row items-center ${styles['group_5']} mt-16`}>
                  <span className={`${styles['font_4']} ${styles['text_13']}`}>Small business</span>
                  <span className={`${styles['font_5']} ${styles['text_15']}`}>•</span>
                  <span className={`${styles['font_2']} ${styles['text_14']}`}>Cryptocurrency</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`flex-row relative ${styles['section_5']}`}>
        <div className={`flex-col justify-start items-center self-start ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=712a0d4b4321f6ce7ad76a898f57a2bf.png"
          />
        </div>
        <div className={`flex-row justify-center items-center self-center ${styles['section_6']} ml-8`}>
          <img
            className={`${styles['image_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=71701859078bd25041f146ba6aea854f.png"
          />
          <span className={`${styles['text_18']} ${styles['ml-9']}`}>Rooms</span>
        </div>
        <div className={`flex-col justify-start items-center self-center ${styles['image-wrapper_2']} ml-8`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fa18ed9d8c2409a6e38f416980f88423.png"
          />
        </div>
      </div>
    </div>
  );
}

Rooms_20_2548.defaultProps = { className: '' };