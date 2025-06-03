import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Screen_2_173_957(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col relative ${styles['page']} ${props.className}`}>
      <div className={`flex-col ${styles['group']}`}>
        <div className={`flex-row justify-between items-center self-stretch ${styles['group_2']}`}>
          <span className={`${styles['text']}`}>Explore</span>
          <div className={`flex-row items-center ${styles['group_3']}`}>
            <img
              className={`shrink-0 ${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ef6e29f4b6ceef8cbca1452e0465ffc0.png"
            />
            <span className={`${styles['font']} ${styles['text_2']} ml-4`}>Aspen, USA</span>
            <img
              className={`shrink-0 ${styles['image_2']} ml-4`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=983cd88d2298c8f833b49159944bc528.png"
            />
          </div>
        </div>
        <span className={`self-start ${styles['text_3']} ${styles['mt-9']}`}>Aspen</span>
      </div>
      <div className={`flex-row items-center ${styles['section']}`}>
        <img
          className={`${styles['image_3']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d5358f4f1b4e48f0734a8d04e7810126.png"
        />
        <span className={`${styles['font_2']} ${styles['text_4']} ${styles['ml-9']}`}>Find things to do</span>
      </div>
      <div className={`flex-col relative ${styles['group_1']}`}>
        <div className={`flex-row items-center ${styles['group_4']}`}>
          <div className={`flex-col justify-start items-center shrink-0 ${styles['text-wrapper']}`}>
            <span className={`${styles['font_2']} ${styles['text_5']}`}>Location</span>
          </div>
          <span className={`${styles['font_2']} ml-30`}>Hotels</span>
          <span className={`${styles['font_2']} ml-30`}>Food</span>
          <div className={`flex-row shrink-0 ${styles['group_5']} ml-30`}>
            <span className={`shrink-0 ${styles['font_2']}`}>Adventure</span>
            <span className={`shrink-0 ${styles['font_2']} ${styles['ml-25']}`}>Adventure</span>
          </div>
        </div>
        <div className={`flex-col ${styles['group_6']} mt-36`}>
          <div className={`flex-row justify-between items-center self-stretch ${styles['group_7']}`}>
            <span className={`${styles['font_3']} ${styles['text_6']}`}>Popular </span>
            <span className={`${styles['font']} ${styles['text_7']}`}>See all</span>
          </div>
          <div className={`flex-row justify-between self-start ${styles['section_2']}`}>
            <div className={`flex-col self-center`}>
              <div className={`flex-col justify-start items-center self-stretch ${styles['text-wrapper_2']}`}>
                <span className={`${styles['font']} ${styles['text_8']}`}>Alley Palace</span>
              </div>
              <div className={`flex-row items-center self-start ${styles['section_3']} mt-6`}>
                <img
                  className={`shrink-0 ${styles['image_4']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1f8149baafa6bacb36cec3f56f330f55.png"
                />
                <span className={`${styles['text_9']} ${styles['ml-5']}`}>4.1</span>
              </div>
            </div>
            <img
              className={`self-start ${styles['image_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8a49d50975a90b78981633acc795ada6.png"
            />
          </div>
        </div>
        <div className={`flex-col relative ${styles['group_8']} mt-36`}>
          <span className={`self-start ${styles['font_3']} ${styles['text_10']}`}>Recommended</span>
          <div className={`self-stretch ${styles['section_6']}`}></div>
          <div className={`flex-row ${styles['horiz-list']} ${styles['group_9']}`}>
            <div className={`flex-col ${styles['horiz-list-item']} ${styles['section_4']}`}>
              <div className={`flex-col justify-start items-center self-stretch relative ${styles['group_10']}`}>
                <img
                  className={`${styles['image_6']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3c59638c8d0981d58e0998a7263412f0.png"
                />
                <div className={`flex-col justify-start items-center ${styles['text-wrapper_3']} ${styles['pos']}`}>
                  <span className={`${styles['font_4']} ${styles['text_11']}`}>4N/5D</span>
                </div>
              </div>
              <span className={`self-start ${styles['font_5']} ${styles['text_12']}`}>Explore Aspen</span>
            </div>
            <div className={`flex-col ${styles['horiz-list-item']} ${styles['section_5']} ${styles['ml-15']}`}>
              <div className={`flex-col justify-start items-center self-stretch relative ${styles['group_10']}`}>
                <img
                  className={`${styles['image_6']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ea83fcdc22da44b040746b6c5d1b27be.png"
                />
                <div className={`flex-col justify-start items-center ${styles['text-wrapper_4']} ${styles['pos_2']}`}>
                  <span className={`${styles['font_4']} ${styles['text_11']}`}>2N/3D</span>
                </div>
              </div>
              <span className={`self-start ${styles['font_5']} ${styles['text_13']}`}>Luxurious Aspen</span>
            </div>
          </div>
          <img
            className={`${styles['image_11']} ${styles['pos_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9b6062a646a6693bcbef7f1edaecb273.png"
          />
        </div>
      </div>
      <div className={`flex-row justify-between items-center ${styles['section_7']} ${styles['pos_3']}`}>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a856b01a5502b056c5e29ef2a7e07749.png"
          />
        </div>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_8']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fad378a199a3c06ffcc1de64cfd0021d.png"
          />
        </div>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_9']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b73320241eb9a4ef52de5593cb929f10.png"
          />
        </div>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_10']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=051dce3f626a263cf8ff266581c1c82f.png"
          />
        </div>
      </div>
    </div>
  );
}

Screen_2_173_957.defaultProps = { className: '' };