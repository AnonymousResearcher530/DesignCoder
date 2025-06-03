import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Task_Status_3_396(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2a5f8c4d52d698a8551d82037a6f21eb.png"
        />
        <span className={`${styles['font']} ${styles['text']}`}>Task Status</span>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d017f2e100ad3531164d9f8c3b0cfebb.png"
        />
      </div>
      <div className={`flex-col items-center relative ${styles['group']}`}>
        <span className={`${styles['text_2']}`}>65%</span>
        <span className={`${styles['font']} ${styles['text_3']}`}>Cpmplete</span>
        <img
          className={`${styles['image_2']} ${styles['pos']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7bacb3b093925f022558c78530b0e94d.png"
        />
      </div>
      <div className={`flex-row justify-between items-center ${styles['group_2']}`}>
        <div className={`flex-row items-center`}>
          <div className={`shrink-0 ${styles['section']}`}></div>
          <span className={`${styles['font_2']} ${styles['text_4']} ${styles['ml-11']}`}>To Do</span>
        </div>
        <div className={`flex-row items-center`}>
          <div className={`shrink-0 ${styles['section_2']}`}></div>
          <span className={`${styles['font_2']} ${styles['ml-11']}`}>In Progress</span>
        </div>
        <div className={`flex-row items-center`}>
          <div className={`shrink-0 ${styles['section_3']}`}></div>
          <span className={`${styles['font_2']} ${styles['text_5']} ${styles['ml-11']}`}>Completed</span>
        </div>
      </div>
      <div className={`flex-col ${styles['group_5']}`}>
        <span className={`self-start ${styles['text_6']}`}>Monthly</span>
        <div className={`flex-col self-stretch mt-18`}>
          {data.items.map((item, index) => (
            <div className={`flex-col ${styles['group_6']} ${styles['list-item']} mt-14`} key={index}>
              <div className={`flex-row justify-between`}>
                <span className={`self-center ${styles['font_3']} ${styles['text_7']}`}>Completed</span>
                <img
                  className={`self-start ${styles['image_3']} ${styles['image_4']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2eff6deb30da625faf2870c2225d536b.png"
                />
              </div>
              <div className={`flex-row items-center ${styles['mt-5']}`}>
                <span className={`${styles['font_4']} ${styles['text_8']}`}>18 Task now</span>
                <span className={`${styles['font_5']} ${styles['ml-13']}`}>18 Task Completed</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`flex-row justify-between items-center ${styles['group_7']}`}>
        <img
          className={`${styles['image_6']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ff7bde4b9849e58e9d7587c552889542.png"
        />
        <img
          className={`${styles['image_7']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=239197c1e6c21f2d238e550996a7620c.png"
        />
        <img
          className={`${styles['image_5']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6ccb747ec38497ad9488913749e9ee48.png"
        />
        <img
          className={`${styles['image_8']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=76e082169cd6fc5f6bf23e9dcd02b411.png"
        />
        <img
          className={`${styles['image_9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7c665f777461a3678a0848c4403cd06f.png"
        />
      </div>
    </div>
  );
}

Task_Status_3_396.defaultProps = { className: '' };