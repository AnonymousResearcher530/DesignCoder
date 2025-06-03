import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function High_Fidelity_Schedule_5_3952(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center self-stretch ${styles['group']}`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bd475e0520bc92143f08a1790f6c7816.png"
        />
        <span className={`${styles['font']} ${styles['text']}`}>Schedule</span>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=04a0be350db5c2c59e956a62e6f4166f.png"
        />
      </div>
      <img
        className={`self-center ${styles['image_2']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a22fe2444a3b73a9c1d659a84957cf9e.png"
      />
      <div className={`flex-col self-stretch ${styles['group_2']}`}>
        <div className={`flex-row justify-between items-center ${styles['group_1']}`}>
          <span className={`${styles['font']} ${styles['text_2']}`}>My Schedule</span>
          <span className={`${styles['font_2']} ${styles['text_3']}`}>See all</span>
        </div>
        <div className={`flex-col ${styles['mt-19']}`}>
          {data.items.map((item, index) => (
            <div className={`flex-row items-center ${styles['list-item']} mt-16`} key={index}>
              <img
                className={`shrink-0 ${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7ce8cc71b62d8c9278c3478785a9ddb0.png"
              />
              <div className={`flex-col flex-1 ${styles['group_3']}`}>
                <span className={`self-stretch ${styles['font_2']} ${styles['text_4']}`}>The Aston Vill Hotel</span>
                <div className={`flex-row items-center self-stretch ${styles['group_4']}`}>
                  <img
                    className={`${styles['image_4']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ed8a33750eaf70e56fcab8be8aa306df.png"
                  />
                  <span className={`${styles['font_3']} ml-6`}>19 March 2024</span>
                </div>
                <div className={`self-start ${styles['group_5']}`}>
                  <span className={`${styles['font_4']}`}>$200.7 </span>
                  <span className={`${styles['font_5']} ${styles['text_5']}`}>/night</span>
                </div>
              </div>
              <img
                className={`shrink-0 ${styles['image_5']} ${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c616035d275ae20e8ca837ec45d8f61d.png"
              />
            </div>
          ))}
        </div>
      </div>
      <div className={`flex-row justify-between items-center self-stretch ${styles['section']}`}>
        <img
          className={`${styles['image_5']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e8dcb4828648aac5ae268d2eafd924c4.png"
        />
        <div className={`flex-row items-center`}>
          <div className={`flex-row items-center ${styles['section_2']}`}>
            <img
              className={`shrink-0 ${styles['image_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ed8e0a532abebe9a83739d25cc59a365.png"
            />
            <span className={`${styles['font_3']} ${styles['text_6']} ${styles['ml-9']}`}>Schedule</span>
          </div>
          <img
            className={`${styles['image_5']} ml-26`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=678c11d32dd0f2bec28292b05865343c.png"
          />
        </div>
        <img
          className={`${styles['image_5']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b12ea8cda84c751d926f45a3e8175852.png"
        />
      </div>
    </div>
  );
}

High_Fidelity_Schedule_5_3952.defaultProps = { className: '' };