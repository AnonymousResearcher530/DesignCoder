import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Home_light_127_10433(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between ${styles['group_1']}`}>
        <div className={`flex-row items-center ${styles['section']}`}>
          <img
            className={`shrink-0 ${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2282db4ea1ef957dc50219addb8d7e78.png"
          />
          <span className={`${styles['text']} ml-8`}>1200 USD</span>
        </div>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=de20b4abd06abb6ec2437a9553cded8e.png"
        />
      </div>
      <div className={`flex-col ${styles['group_2']}`}>
        <span className={`self-start ${styles['font']} ${styles['text_2']}`}>Your friend playing</span>
        <span className={`self-start ${styles['font_2']} ${styles['text_3']}`}>
          play the same game with your friends and find the fun
        </span>
        <div className={`flex-row ${styles['horiz-list']} ${styles['group_3']}`}>
          <div className={`flex-col ${styles['horiz-list-item']} ${styles['section_2']}`}>
            <div className={`flex-row items-center ${styles['group_5']}`}>
              <img
                className={`shrink-0 ${styles['image_8']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5457086a64dcb0f41585a0a85b49bd71.png"
              />
              <img
                className={`flex-1 ${styles['image_9']} ${styles['ml-9']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e5eda021df4fdc83bfdef00e8cb3f099.png"
              />
            </div>
            <img
              className={`shrink-0 ${styles['image_11']} ${styles['mt-17']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=02343df388a7ed8caabdcb1d5db34392.png"
            />
          </div>
          <div className={`flex-col ${styles['horiz-list-item']} ${styles['section_3']} ml-18`}>
            <div className={`flex-row justify-evenly items-center ${styles['group_4']}`}>
              <img
                className={`${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2a0602c1da85559b666caf77a6b44a7f.png"
              />
              <img
                className={`${styles['image_4']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3657e81c828fcce580b53840747f286a.png"
              />
              <img
                className={`${styles['image_4']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=12bb50e40bf264e2458d53f5567dc13b.png"
              />
              <img
                className={`${styles['image_7']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b3f15026e39fe7dc8be71547e65031f4.png"
              />
              <img
                className={`${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7d87db74c3ab7024f4f49308d923d15d.png"
              />
            </div>
            <img
              className={`shrink-0 ${styles['image_12']} ${styles['mt-7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b06a4cfb732e1c2c159bed01d7027a6b.png"
            />
          </div>
          <div className={`flex-col items-start ${styles['horiz-list-item']} ${styles['section_4']} ml-18`}>
            <img
              className={`shrink-0 ${styles['image_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1fc2e5c0940a220a8d1bbdef9d80c7bd.png"
            />
            <img
              className={`shrink-0 ${styles['image_10']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e501825ea0b8e960a95803f182c76656.png"
            />
          </div>
        </div>
      </div>
      <div className={`flex-col items-start ${styles['group_8']}`}>
        <span className={`${styles['font']} ${styles['text_4']}`}>Your recent play</span>
        <span className={`${styles['font_2']} ${styles['text_5']}`}>that you played last time</span>
        <img
          className={`${styles['image_13']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e22b28c8a4b3f99a1b29fe1b0321e8a7.png"
        />
      </div>
      <div className={`flex-col ${styles['section_5']}`}>
        <div className={`flex-row justify-between ${styles['group_6']}`}>
          <img
            className={`self-start ${styles['image_14']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=10acfcf8b1227da38fe4fbb4caa98964.png"
          />
          <img
            className={`self-start ${styles['image_15']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0b7245de16716bf6e29a96b003b23279.png"
          />
          <img
            className={`self-start ${styles['image_16']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=115bd92a09a228df365c48966326d6b4.png"
          />
          <img
            className={`${styles['image_17']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7c2a1320348c5c1e79b3ab4371546d38.png"
          />
        </div>
        <div className={`flex-row justify-between items-start mt-6`}>
          <div className={`flex-row items-baseline`}>
            <span className={`${styles['font_2']} ${styles['text_6']}`}>Game play</span>
            <span className={`${styles['font_3']} ${styles['text_7']} ml-28`}>Game Store</span>
          </div>
          <span className={`${styles['font_3']}`}>Friends</span>
          <span className={`${styles['font_3']} ${styles['text_8']}`}>Analytic play</span>
        </div>
      </div>
    </div>
  );
}

Home_light_127_10433.defaultProps = { className: '' };