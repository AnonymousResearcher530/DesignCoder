import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Page_1_23_8799(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null],
  });

  return (
    <div className={`flex-col relative ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between relative ${styles['group']}`}>
        <div className={`flex-col ${styles['group_2']}`}>
          <div className={`flex-row items-center`}>
            <img
              className={`${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2f2b1a3e9dff7607201ac80f849d3299.png"
            />
            <span className={`${styles['font']} ${styles['text']} ${styles['ml-9']}`}>GOOD MORNING</span>
          </div>
          <span className={`${styles['text_2']} ${styles['mt-13']}`}>Madelyn Dias</span>
        </div>
        <div className={`${styles['section']}`}></div>
        <img
          className={`${styles['section']} ${styles['pos']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d0041e1e5d5862ad8a49f9f73ec6a373.png"
        />
      </div>
      <div className={`flex-col ${styles['section_5']}`}>
        <div className={`flex-row justify-between items-center ${styles['group_3']}`}>
          <span className={`${styles['text_8']}`}>Live Quizzes</span>
          <span className={`${styles['font_3']} ${styles['text_9']}`}>See all</span>
        </div>
        <div className={`flex-col ${styles['group_4']} mt-22`}>
          <div className={`flex-col ${styles['group']}`}>
            {data.items.map((item, index) => (
              <div className={`flex-row items-center ${styles['list-item']} mt-14`} key={index}>
                <div className={`flex-col justify-start items-start shrink-0 ${styles['section_6']}`}>
                  <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
                    <img
                      className={`${styles['image_8']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4afb9276d61c166a6ec6719f46a4e7d3.png"
                    />
                  </div>
                </div>
                <div className={`flex-col items-start flex-1 ml-18`}>
                  <span className={`${styles['font_4']} ${styles['text_10']}`}>Statistics Math Quiz</span>
                  <span className={`${styles['font']} ${styles['mt-17']}`}>Math • 12 Quizzes</span>
                </div>
                <img
                  className={`shrink-0 ${styles['image_7']} ml-18`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=080ee06ff3ccaa2ad8959213cbec31ca.png"
                />
              </div>
            ))}
          </div>
          <div className={`flex-col relative ${styles['section_7']}`}>
            <img
              className={`shrink-0 self-center ${styles['image_9']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=395309f9ce02c8a48d2081f7481d9dd1.png"
            />
            <div className={`flex-row justify-between items-center self-stretch relative ${styles['group_5']}`}>
              <div className={`flex-row`}>
                <img
                  className={`${styles['image_12']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9fd3725f725660a2e78f3fb835accd1b.png"
                />
                <img
                  className={`${styles['image']} ${styles['ml-57']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=90602aee147258219db0c08ebca76181.png"
                />
              </div>
              <div className={`flex-row`}>
                <img
                  className={`${styles['image_11']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2d893456f54d3f94a651e9e99bbfff4c.png"
                />
                <img
                  className={`${styles['image_11']} ml-50`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0fb69cc94a49096ac927849537e1fade.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col justify-start items-center ${styles['pos_5']}`}>
        <img
          className={`${styles['image_3']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4f5d3651a4d1a2c4dc43ddcf596a5db3.png"
        />
        <div className={`flex-row justify-center items-center ${styles['section_4']} ${styles['pos_12']}`}>
          <img
            className={`${styles['image_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=965377b386f3fbb040478c1e9f9f82ca.png"
          />
          <span className={`${styles['font_3']} ${styles['text_7']} ${styles['ml-11']}`}>Find Friends</span>
        </div>
        <img
          className={`${styles['image_5']} ${styles['pos_11']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=abd7fc889520ea8e161b19f4c91212e1.png"
        />
        <img
          className={`${styles['image_2']} ${styles['pos_8']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=540ca1fc820ed93f61ebe49d412b5e49.png"
        />
        <span className={`${styles['font_3']} ${styles['text_5']} ${styles['pos_9']}`}>FEATURED</span>
        <span className={`${styles['font_2']} ${styles['text_6']} ${styles['pos_10']}`}>
          Take part in challenges with friends or other players
        </span>
      </div>
      <div className={`flex-col justify-start ${styles['section_2']} ${styles['pos_2']}`}>
        <div className={`${styles['section_3']}`}></div>
        <span className={`${styles['text_3']} ${styles['pos_4']}`}>RECENT QUIZ</span>
        <img
          className={`${styles['image_4']} ${styles['pos_6']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ff5d419c13f888d1cfe629f91b1271cf.png"
        />
        <span className={`${styles['font_2']} ${styles['text_4']} ${styles['pos_7']}`}>A Basic Music Quiz</span>
        <img
          className={`${styles['image_2']} ${styles['pos_3']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=59fca6003b42f2c6c2bb2e4b7d7fcff1.png"
        />
      </div>
    </div>
  );
}

Page_1_23_8799.defaultProps = { className: '' };