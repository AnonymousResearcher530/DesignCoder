import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function IPhone_13_13_Pro_1_125_9358(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col relative ${styles['page']} ${props.className}`}>
      <span className={`self-start ${styles['text']}`}>Red Podcast</span>
      <div className={`flex-col ${styles['group']} ${styles['pos']}`}>
        <div className={`flex-col justify-start items-center self-stretch ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c350e30fe55811956662f24fd03e653f.png"
          />
        </div>
        <div className={`flex-row self-end relative ${styles['group_14']}`}>
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d920b321273a5e62065cd73f84129c94.png"
          />
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=28c5dc4f4d8f2d780fcc9338808d1080.png"
          />
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=96ce88d0433ce95eb2a32958b8cb4315.png"
          />
        </div>
      </div>
      <div className={`flex-row self-stretch relative ${styles['view']}`}>
        <span className={`${styles['font']} ${styles['pos_14']}`}>Moview</span>
        <div className={`flex-col ${styles['group_4']} ${styles['pos_23']}`}>
          <div className={`flex-col justify-start items-start self-stretch relative`}>
            <img
              className={`${styles['image_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ce6fb71e22fe8825cf067eb4447877a3.png"
            />
            <div className={`flex-col justify-start items-center ${styles['text-wrapper']} ${styles['pos_2']}`}>
              <span className={`${styles['font']} ${styles['text_2']}`}>New</span>
            </div>
          </div>
          <span className={`self-start ${styles['font']} ${styles['text_3']} mt-14`}>Podcast</span>
        </div>
        <div className={`flex-col items-center ${styles['group_5']} ${styles['pos_1']}`}>
          <span className={`${styles['font_2']} ${styles['text_1']}`}>First of all</span>
          <span className={`${styles['font_2']}`}>League of nations</span>
          <img
            className={`shrink-0 ${styles['image_5']} ${styles['image_11']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ce6fb71e22fe8825cf067eb4447877a3.png"
          />
        </div>
        <div className={`flex-col items-center ${styles['pos_22']}`}>
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ce6fb71e22fe8825cf067eb4447877a3.png"
          />
          <span className={`${styles['font']} ${styles['text_4']} ${styles['mt-13']}`}>Sport</span>
        </div>
        <div className={`flex-col items-center ${styles['pos_24']}`}>
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c0a614a7da4207e2be4af6e7383fc140.png"
          />
          <span className={`${styles['font']} ${styles['text_5']} mt-14`}>First of all</span>
        </div>
        <div className={`flex-col items-center ${styles['pos_19']}`}>
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ce6fb71e22fe8825cf067eb4447877a3.png"
          />
          <span className={`${styles['font']} ${styles['text_6']} ${styles['mt-13']}`}>TV Show</span>
        </div>
        <div className={`flex-col justify-start items-end ${styles['image-wrapper_2']} ${styles['pos_21']}`}>
          <img
            className={`${styles['image_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=cfcf5724e2c4faf57723b63da1a64392.png"
          />
        </div>
      </div>
      <div className={`flex-col self-stretch relative ${styles['group_13']}`}>
        <div className={`flex-row justify-between items-center ${styles['group_1']}`}>
          <span className={`${styles['font_3']}`}>Originals</span>
          <img
            className={`${styles['image_7']} ${styles['image_1']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=19571af9a89ad93e17f83919ce5e685d.png"
          />
        </div>
        <div className={`flex-row justify-center ${styles['mt-11']}`}>
          <div className={`flex-col justify-start items-center ${styles['equal-division-item']}`}>
            <img
              className={`${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c350e30fe55811956662f24fd03e653f.png"
            />
          </div>
          <div className={`flex-col justify-start items-center ${styles['equal-division-item']} ml-10`}>
            <img
              className={`${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c350e30fe55811956662f24fd03e653f.png"
            />
          </div>
          <div className={`flex-col justify-start items-end ${styles['equal-division-item_2']} ml-10`}>
            <img
              className={`${styles['image_4']} ${styles['image_8']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c350e30fe55811956662f24fd03e653f.png"
            />
          </div>
        </div>
      </div>
      <div className={`flex-col self-stretch relative ${styles['group_8']}`}>
        <div className={`flex-row justify-between items-center ${styles['group_10']}`}>
          <span className={`${styles['font_3']} ${styles['text_8']}`}>Today's match</span>
          <img
            className={`${styles['image_7']} ${styles['image_10']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=19571af9a89ad93e17f83919ce5e685d.png"
          />
        </div>
        <div className={`flex-row ${styles['mt-11']}`}>
          <div className={`flex-col justify-start items-end shrink-0 relative ${styles['group_9']}`}>
            <div className={`${styles['section']}`}></div>
            <div className={`flex-col items-center ${styles['section_4']} ${styles['pos_3']}`}>
              <img
                className={`${styles['image_4']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c350e30fe55811956662f24fd03e653f.png"
              />
              <span className={`${styles['font']} mt-8`}>Home</span>
            </div>
            <img
              className={`${styles['image_4']} ${styles['pos_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c350e30fe55811956662f24fd03e653f.png"
            />
            <span className={`${styles['font']} ${styles['text_9']} ${styles['pos_8']}`}>Live</span>
          </div>
          <div className={`flex-row flex-1 relative ml-10`}>
            <div className={`flex-1 ${styles['section_2']}`}></div>
            <div className={`shrink-0 ${styles['section_3']}`}></div>
            <img
              className={`shrink-0 ${styles['image_4']} ${styles['pos_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c350e30fe55811956662f24fd03e653f.png"
            />
            <img
              className={`shrink-0 ${styles['image_4']} ${styles['pos_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c350e30fe55811956662f24fd03e653f.png"
            />
            <img
              className={`shrink-0 ${styles['image_4']} ${styles['pos_7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c350e30fe55811956662f24fd03e653f.png"
            />
            <span className={`${styles['font']} ${styles['pos_9']}`}>For You</span>
            <span className={`${styles['font']} ${styles['text_10']} ${styles['pos_10']}`}>Watchlist</span>
            <span className={`${styles['font']} ${styles['text_11']} ${styles['pos_11']}`}>Games</span>
          </div>
        </div>
      </div>
    </div>
  );
}

IPhone_13_13_Pro_1_125_9358.defaultProps = { className: '' };