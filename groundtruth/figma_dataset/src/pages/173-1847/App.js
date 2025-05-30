import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Home_screen_one_173_1847(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row self-stretch relative ${styles['group']}`}>
        <div className={`${styles['pos_3']}`}>
          <span className={`${styles['font']}`}>Hello Tony, </span>
          <span className={`${styles['font']}`}>What fruit salad combo do you want today?</span>
        </div>
        <img
          className={`${styles['image_3']} ${styles['pos_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e291045df184ffaba58b01889eee9df4.png"
        />
        <div className={`flex-col items-start ${styles['group_2']} ${styles['pos']}`}>
          <img
            className={`${styles['image']} ${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d8ad8280d007d7b7e2d0b67165190854.png"
          />
          <span className={`${styles['text']} ${styles['mt-7']}`}>My basket</span>
        </div>
      </div>
      <div className={`flex-row items-center self-start ${styles['section']}`}>
        <img
          className={`${styles['image_5']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=115ef064659cb89fa4262e04782b73e7.png"
        />
        <img
          className={`${styles['image_4']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a14331cbc47d013dc3068fced355d8a8.png"
        />
        <span className={`${styles['text_2']}`}>Search for fruit salad combos</span>
      </div>
      <div className={`flex-col self-stretch ${styles['group_3']}`}>
        <span className={`self-start ${styles['font_2']} ${styles['text_3']}`}>Recommended Combo</span>
        <div className={`flex-row ${styles['equal-division']} mt-32`}>
          <div className={`flex-col ${styles['equal-division-item']} ${styles['section_2']}`}>
            <div className={`flex-row justify-evenly items-start ${styles['group_4']}`}>
              <img
                className={`${styles['image_7']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8eca4b46c2a4f2e17340d47f17c90b66.png"
              />
              <img
                className={`${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=91a53ec14afb096f1e055d752917fb08.png"
              />
            </div>
            <span className={`${styles['font_3']} mt-12`}>Honey lime combo</span>
            <div className={`flex-row justify-between items-center mt-12`}>
              <div className={`flex-row items-center`}>
                <img
                  className={`shrink-0 ${styles['image_9']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3b66a25538d7dff38ccf861fdcdb878b.png"
                />
                <span className={`${styles['font_4']} ${styles['text_5']} ${styles['ml-5']}`}>2,000</span>
              </div>
              <img
                className={`${styles['image']} ${styles['image_1']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9074d3617da93f5471083293519cf14b.png"
              />
            </div>
          </div>
          <div className={`flex-col ${styles['equal-division-item_2']} ${styles['section_3']} ${styles['ml-23']}`}>
            <div className={`flex-row justify-evenly items-start ${styles['group_5']}`}>
              <img
                className={`${styles['image_7']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4a5d791b942bb5e4c38fcff794f1a567.png"
              />
              <img
                className={`${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=91a53ec14afb096f1e055d752917fb08.png"
              />
            </div>
            <span className={`${styles['font_3']} ${styles['text_4']} ${styles['mt-11']}`}>Berry mango combo</span>
            <div className={`flex-row justify-between items-center ${styles['mt-11']}`}>
              <div className={`flex-row items-center`}>
                <img
                  className={`shrink-0 ${styles['image_9']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3b66a25538d7dff38ccf861fdcdb878b.png"
                />
                <span className={`${styles['font_4']} ${styles['text_6']} ${styles['ml-5']}`}>8,000</span>
              </div>
              <img
                className={`${styles['image']} ${styles['image_8']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9074d3617da93f5471083293519cf14b.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col self-stretch ${styles['group_1']}`}>
        <div className={`flex-col ${styles['group_6']}`}>
          <div className={`flex-row items-center self-stretch ${styles['group_7']}`}>
            <span className={`${styles['font_2']} ${styles['text_7']}`}>Hottest</span>
            <span className={`${styles['font_5']} ml-30`}>Popular</span>
            <span className={`${styles['font_5']} ${styles['text_8']} ml-30`}>New combo</span>
            <span className={`${styles['font_5']} ml-30`}>Top</span>
          </div>
          <div className={`self-start ${styles['section_4']}`}></div>
        </div>
        <div className={`flex-row ${styles['horiz-list']} ${styles['group_8']} mt-24`}>
          <div className={`flex-col ${styles['horiz-list-item']} ${styles['section_5']}`}>
            <div className={`flex-row justify-center ${styles['group_9']}`}>
              <img
                className={`${styles['image_10']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=aa7d754d13b549fc6bafe47885eb050d.png"
              />
              <img
                className={`self-start ${styles['image_6']} ml-6`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=91a53ec14afb096f1e055d752917fb08.png"
              />
            </div>
            <span className={`${styles['font_3']} ${styles['text_9']}`}>Quinoa fruit salad</span>
            <div className={`flex-row justify-between items-center ${styles['group_11']}`}>
              <div className={`flex-row items-center`}>
                <img
                  className={`shrink-0 ${styles['image_9']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3b66a25538d7dff38ccf861fdcdb878b.png"
                />
                <span className={`${styles['font_4']} ${styles['ml-5']}`}>10,000</span>
              </div>
              <img
                className={`${styles['image']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e98094d83ee299e0b57fe7aa6e32ca9d.png"
              />
            </div>
          </div>
          <div className={`flex-col ${styles['horiz-list-item']} ${styles['section_6']} ml-16`}>
            <div className={`flex-col items-end ${styles['group_10']}`}>
              <img
                className={`${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=91a53ec14afb096f1e055d752917fb08.png"
              />
              <img
                className={`${styles['image_11']} mt-2`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fe13faabc803917016bbc8c7f938eac1.png"
              />
            </div>
            <span className={`${styles['font_3']} ${styles['text_10']}`}>Tropical fruit salad</span>
            <div className={`flex-row justify-between items-center ${styles['group_12']}`}>
              <div className={`flex-row items-center`}>
                <img
                  className={`shrink-0 ${styles['image_9']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3b66a25538d7dff38ccf861fdcdb878b.png"
                />
                <span className={`${styles['font_4']} ${styles['ml-5']}`}>10,000</span>
              </div>
              <img
                className={`${styles['image']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e98094d83ee299e0b57fe7aa6e32ca9d.png"
              />
            </div>
          </div>
          <div className={`flex-col ${styles['horiz-list-item_2']} ${styles['section_7']} ml-16`}>
            <img
              className={`self-center ${styles['image_12']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=89dfd4799a53424d27963599c19c99f9.png"
            />
            <span className={`self-center ${styles['font_3']} ${styles['text_11']} ${styles['mt-15']}`}>
              melon fruit salad
            </span>
            <div className={`flex-row items-center self-stretch ${styles['mt-15']}`}>
              <img
                className={`${styles['image_9']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3b66a25538d7dff38ccf861fdcdb878b.png"
              />
              <span className={`${styles['font_4']} ${styles['ml-5']}`}>10,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Home_screen_one_173_1847.defaultProps = { className: '' };