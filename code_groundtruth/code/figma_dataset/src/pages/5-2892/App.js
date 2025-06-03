import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function HOME_PAGE_5_2892(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col ${styles['group']}`}>
        <div className={`flex-row justify-between items-center self-stretch`}>
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=be8ec0decb428ff2b02fb9676c440152.png"
          />
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=48daf3a6a96e99ad81a772a3bbdcd1aa.png"
          />
        </div>
        <div className={`flex-col items-start self-start ${styles['group_12']}`}>
          <span className={`${styles['text']}`}>Hello, Habibah</span>
          <span className={`${styles['font']} ${styles['text_2']} ${styles['text_3']} ${styles['mt-21']}`}>
            What do you want to learn?
          </span>
        </div>
        <div className={`flex-row items-center self-stretch ${styles['section']}`}>
          <img
            className={`${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9043ff5160258cf6575f6c57fee8494e.png"
          />
          <span className={`${styles['font_2']} ${styles['text_4']} ${styles['ml-9']}`}>Search..</span>
        </div>
        <div className={`flex-col justify-start self-stretch ${styles['section_2']}`}>
          <div className={`flex-row justify-center ${styles['group_2']}`}>
            <img
              className={`${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e89945c60a29c9f225362fbf85a28705.png"
            />
            <div className={`flex-col items-start ${styles['group_3']}`}>
              <span className={`${styles['font_3']} ${styles['text_5']}`}>New Course!</span>
              <span className={`${styles['font_4']} ${styles['text_6']}`}>User Experience Class</span>
              <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
                <span className={`${styles['text_7']}`}>View now</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex-col self-stretch ${styles['group_13']}`}>
          <div className={`flex-row justify-between items-baseline`}>
            <span className={`${styles['font_3']} ${styles['text_8']}`}>Course</span>
            <span className={`${styles['font_2']} ${styles['text_2']} ${styles['text_9']}`}>View All</span>
          </div>
          <div className={`flex-row justify-around items-center ${styles['group_5']}`}>
            <span className={`${styles['font_2']} ${styles['text_2']} ${styles['text_11']}`}>All</span>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']}`}>
              <span className={`${styles['font_4']}`}>Design</span>
            </div>
            <span className={`${styles['font']} ${styles['text_2']}`}>Programming</span>
            <span className={`${styles['font_2']} ${styles['text_2']} ${styles['text_10']}`}>UI/UX</span>
          </div>
          <div className={`flex-col ${styles['group_6']}`}>
            <div className={`flex-row ${styles['section_3']}`}>
              <img
                className={`self-center ${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=df6555cbaf0c86d2c805850caad51c42.png"
              />
              <div className={`flex-col items-start flex-1 self-start ${styles['group_7']} ${styles['ml-23']}`}>
                <span className={`${styles['font_5']} ${styles['text_12']}`}>Photoshop Course</span>
                <div className={`flex-row ${styles['equal-division']} mt-2`}>
                  <div className={`flex-row items-center ${styles['group_8']} ${styles['group_11']}`}>
                    <img
                      className={`${styles['image_7']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d8a6de682f2308d48180a1a5b384665b.png"
                    />
                    <span className={`${styles['font_6']} ${styles['text_2']} ${styles['text_13']} ml-10`}>5.0</span>
                  </div>
                  <div className={`flex-row justify-between items-center ${styles['group_8']} ${styles['group_1']}`}>
                    <img
                      className={`${styles['image_6']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=dde49f550391e33303976b5408d40102.png"
                    />
                    <span className={`${styles['font_6']} ${styles['text_2']} ${styles['text_1']}`}>5h 15m</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={`flex-row justify-between items-center ${styles['section_4']} ${styles['mt-9']}`}>
              <img
                className={`${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=256572092222e9a08961d8f78db48a21.png"
              />
              <div className={`flex-col ${styles['group_9']}`}>
                <span className={`self-start ${styles['font_5']} ${styles['text_14']}`}>3D Design</span>
                <div className={`flex-row items-center self-stretch ${styles['mt-7']}`}>
                  <img
                    className={`${styles['image_7']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=45ee94656a829223a113a49bf4c163d5.png"
                  />
                  <span className={`${styles['font_6']} ${styles['text_2']} ${styles['text_15']}`}>4.6</span>
                  <img
                    className={`${styles['image_6']} ${styles['image_8']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ade9cbea56fc8f5a6f33f347691975fd.png"
                  />
                  <span className={`${styles['font_6']} ${styles['text_2']} ${styles['text_16']}`}>10h 30m</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-row justify-between items-center ${styles['section_5']} mt-12`}>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_9']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8ea6a642e60a21b136556edd0e333012.png"
          />
        </div>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_10']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6bed497b771cc471af1dcd55c1a18e3e.png"
          />
        </div>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_11']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=45466e92b66a4f74df5a20b4ada353dc.png"
          />
        </div>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']} ${styles['view']}`}>
          <img
            className={`${styles['image_12']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=82c8ac702f63985e657043d63496bc93.png"
          />
        </div>
      </div>
    </div>
  );
}

HOME_PAGE_5_2892.defaultProps = { className: '' };