import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Follow_user_20_3517(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col ${styles['group_8']}`}>
        <div className={`flex-col self-stretch ${styles['group_4']}`}>
          <div className={`flex-row items-center ${styles['group_1']}`}>
            <div className={`flex-row items-center`}>
              <span className={`${styles['font_3']} ${styles['text_6']}`}>162</span>
              <span className={`${styles['font_4']} ${styles['text_3']} ${styles['text_7']} ${styles['ml-9']}`}>
                Following
              </span>
            </div>
            <div className={`flex-row ml-22`}>
              <span className={`${styles['font_3']} ${styles['text_8']}`}>500</span>
              <span className={`${styles['text_3']} ${styles['text_9']} ${styles['ml-9']}`}>Followers</span>
            </div>
          </div>
          <div className={`flex-row items-center ${styles['mt-9']}`}>
            <img
              className={`${styles['image_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f23e3108ad77419d58d42880cd792581.png"
            />
            <span className={`${styles['font']} ${styles['text_3']} ${styles['text_10']} ml-10`}>
              Followed by lena and julie
            </span>
          </div>
        </div>
        <div className={`flex-col self-stretch relative ${styles['section']}`}>
          <div className={`flex-col justify-start items-center self-end ${styles['text-wrapper']}`}>
            <span className={`${styles['text']}`}>Follow</span>
          </div>
          <img
            className={`self-start ${styles['image']} ${styles['mt-33']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=38691bca72db9136ccc8ee42694ffff8.png"
          />
        </div>
        <div className={`flex-row justify-end self-stretch ${styles['group_2']}`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=16026c92c5533b14bf07cd511682b12b.png"
          />
          <img
            className={`${styles['image_3']} ml-16`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c8f67b9940b4160172a40ce009b98f13.png"
          />
          <img
            className={`${styles['image_4']} ml-16`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7d240377e83115528b411fefb5da028b.png"
          />
          <img
            className={`${styles['image_5']} ml-16`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b64d74e04ebbbf6c6fbf9553f084511a.png"
          />
        </div>
        <div className={`flex-col self-start ${styles['group_3']}`}>
          <span className={`self-start ${styles['text_2']}`}>Julie Rose</span>
          <span className={`self-start ${styles['font']} ${styles['text_3']} ${styles['text_4']} mt-12`}>
            @julierose
          </span>
          <span className={`self-stretch ${styles['font_5']} ${styles['text_5']} mt-12`}>
            I’m all about freedom using the internet as a mechanism to put your knowledge out there.
          </span>
        </div>
      </div>
      <div className={`flex-col ${styles['group_5']}`}>
        <div className={`self-stretch ${styles['grid']}`}>
          <div className={`flex-row justify-between items-center ${styles['grid-item']}`}>
            <span className={`${styles['font_5']} ${styles['text_13']}`}>Traveling</span>
            <span className={`${styles['font_5']}`}>✈</span>
          </div>
          <div className={`flex-row justify-between items-center ${styles['grid-item_2']}`}>
            <span className={`${styles['font_2']}`}>Movies</span>
            <span className={`${styles['font_5']}`}>🎥</span>
          </div>
          <div className={`flex-row justify-between items-center ${styles['grid-item_2']}`}>
            <span className={`${styles['font_2']}`}>Music</span>
            <span className={`${styles['font_5']}`}>🎵</span>
          </div>
          <div className={`flex-row justify-between items-center ${styles['grid-item_3']}`}>
            <span className={`${styles['font_5']} ${styles['text_14']}`}>Photography</span>
            <span className={`${styles['font_5']}`}>📷</span>
          </div>
        </div>
        <div className={`flex-row items-center self-stretch relative ${styles['group_6']}`}>
          <span className={`${styles['font_4']} ${styles['text_11']}`}>Favourite Topics </span>
          <span className={`${styles['font_4']} ${styles['text_12']}`}>Clubs</span>
          <div className={`flex-row items-center shrink-0 ${styles['group_7']}`}>
            <span className={`${styles['font_4']}`}>Speaker</span>
            <span className={`${styles['font_4']} ml-6`}>In</span>
          </div>
        </div>
        <div className={`shrink-0 self-start ${styles['section_2']}`}></div>
      </div>
    </div>
  );
}

Follow_user_20_3517.defaultProps = { className: '' };