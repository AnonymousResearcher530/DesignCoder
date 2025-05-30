import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Game_store_Trending_127_10740(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center self-center ${styles['section']}`}>
        <div className={`flex-row items-center`}>
          <img
            className={`shrink-0 ${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8a18564945107a10bbfde7e7c40f99ac.png"
          />
          <span className={`${styles['text']} ${styles['ml-15']}`}>Game Store</span>
        </div>
        <img
          className={`${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4f518f2554c0f39872ad0f90c6ea5edb.png"
        />
      </div>
      <div className={`flex-col self-stretch ${styles['group']}`}>
        <div className={`flex-row items-center`}>
          <div className={`flex-row items-center shrink-0`}>
            <div className={`flex-col justify-start items-start shrink-0 ${styles['text-wrapper']}`}>
              <span className={`${styles['text_2']}`}>Trending</span>
            </div>
            <span className={`${styles['text_3']} ${styles['ml-35']}`}>Info </span>
          </div>
          <span className={`${styles['font']} ${styles['text_4']}`}>Console</span>
          <span className={`${styles['font']} ${styles['text_5']}`}>Subscriptions</span>
        </div>
        <div className={`flex-col justify-start ${styles['section_2']}`}>
          <div className={`flex-col justify-start items-center ${styles['section_3']}`}>
            <div className={`${styles['section_4']}`}></div>
          </div>
        </div>
        <div className={`flex-col ${styles['group_4']}`}>
          <div className={`flex-row justify-between items-start ${styles['group_5']}`}>
            <span className={`${styles['font_2']} ${styles['text_6']}`}>Hot Release</span>
            <img
              className={`${styles['image_3']} ${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=411317344253c329cfc56c65de3899ae.png"
            />
          </div>
          <div className={`flex-row justify-between ${styles['group_6']}`}>
            <div className={`flex-col justify-start relative ${styles['section_5']}`}>
              <div className={`shrink-0 ${styles['section_6']}`}></div>
              <div className={`flex-col ${styles['section_8']} ${styles['pos']}`}>
                <span className={`self-start ${styles['font_3']} ${styles['text_7']}`}>Ghost Of Tsuhima</span>
                <div className={`flex-row items-center self-stretch mt-10`}>
                  <img
                    className={`${styles['image_6']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=aa962040c8a0360c34d418f82c3571a7.png"
                  />
                  <img
                    className={`${styles['image_7']} ml-22`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f254ae759989074c93e855deb486b214.png"
                  />
                  <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']} ml-22`}>
                    <span className={`${styles['font_3']}`}>50 USD</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={`flex-col justify-start items-center relative ${styles['section_7']}`}>
              <img
                className={`shrink-0 ${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0868b49bed942a1d907d6dcf1504ece3.png"
              />
              <div className={`flex-col ${styles['section_9']} ${styles['pos_2']}`}>
                <span className={`self-start ${styles['font_3']} ${styles['text_8']}`}>Cyberpunk 77</span>
                <div className={`flex-row self-stretch ${styles['group_7']}`}>
                  <img
                    className={`${styles['image_6']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=aa962040c8a0360c34d418f82c3571a7.png"
                  />
                  <img
                    className={`${styles['image_7']} ml-24`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f254ae759989074c93e855deb486b214.png"
                  />
                </div>
                <div className={`flex-col justify-start items-end ${styles['text-wrapper_3']} ${styles['pos_3']}`}>
                  <span className={`${styles['font_3']} ${styles['text_9']}`}>50 USD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex-row justify-between items-center ${styles['group_8']}`}>
          <span className={`${styles['font_2']} ${styles['text_10']}`}>Popular</span>
          <img
            className={`${styles['image_3']} ${styles['image_8']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f304914e7b7638cebc054b2bbae16cf7.png"
          />
        </div>
      </div>
      <div className={`flex-row justify-between self-stretch relative ${styles['group_9']}`}>
        <img
          className={`${styles['image_9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=70810f76b4477ceeb12b07951c7c42f7.png"
        />
        <img
          className={`${styles['image_9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ffbec5e59d4531a3f58b9de2093623cb.png"
        />
        <img
          className={`self-start ${styles['image_10']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b415eb973b0c8f7727ad76dcd2bd2efa.png"
        />
        <div className={`flex-col ${styles['section_10']} ${styles['pos_4']}`}>
          <div className={`flex-row justify-between items-center ${styles['group_10']}`}>
            <img
              className={`${styles['image_11']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5adb22d69b31ab24fc95bdf6001cf925.png"
            />
            <img
              className={`${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0439abd42f6c91ac3d76157739029cc4.png"
            />
            <img
              className={`${styles['image_12']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6423eb6757485722ff6e939c6ef32757.png"
            />
            <img
              className={`${styles['image_13']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=afbded709c3b9e8e9a533aa323815451.png"
            />
          </div>
          <div className={`flex-row ${styles['mt-13']}`}>
            <span className={`self-center ${styles['font_4']} ${styles['text_12']}`}>Game play</span>
            <span className={`self-start ${styles['text_14']}`}>Game Store</span>
            <span className={`self-center ${styles['font_4']} ${styles['text_13']}`}>Friends</span>
            <span className={`self-center ${styles['font_4']} ${styles['text_11']}`}>Analytic play</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Game_store_Trending_127_10740.defaultProps = { className: '' };