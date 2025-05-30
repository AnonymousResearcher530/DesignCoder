import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Exercise_page_Pressed_(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null, null, null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col ${styles['section']}`}>
        <div className={`flex-row justify-between items-center`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e29232e259d33dc258ff6ed70cda0670.png"
          />
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6efa563841fe12ddf40085e7fff416a7.png"
          />
        </div>
        <div className={`flex-col ${styles['mt-31']}`}>
          <span className={`self-start ${styles['text']}`}>Warm up</span>
          <span className={`self-stretch ${styles['text_2']}`}>
            Warm up properly before exercising to prevent  injury and make your workouts more effective.
          </span>
          <div className={`flex-row self-stretch ${styles['group']}`}>
            <div className={`flex-row items-center ${styles['section_2']}`}>
              <img
                className={`shrink-0 ${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=61e7f6ff1fa77742b3763643423874ab.png"
              />
              <span className={`${styles['font']} ${styles['text_3']} ${styles['ml-15']}`}>10.00 mins</span>
            </div>
            <div className={`ml-6 flex-row items-center ${styles['section_3']}`}>
              <img
                className={`shrink-0 ${styles['image_4']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=88319325821b9fc5c738f10ae966c772.png"
              />
              <span className={`${styles['font']} ${styles['text_4']} ${styles['ml-15']}`}>Running</span>
            </div>
          </div>
          <span className={`self-start ${styles['text_5']}`}>Exercises</span>
          <div className={`flex-col self-stretch relative ${styles['list']}`}>
            {data.items.map((item, index) => (
              <div className={`flex-row justify-between items-center self-stretch`} key={index}>
                <div className={`flex-row items-center`}>
                  <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
                    <img
                      className={`${styles['image-wrapper']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d8fd5329d1709c120fce1af07d674907.png"
                    />
                  </div>
                  <div className={`ml-22 flex-col items-start`}>
                    <span className={`${styles['font']}`}>Exercise 1</span>
                    <span className={`mt-12 ${styles['font_2']}`}>02.30 Minutes</span>
                  </div>
                </div>
                <img
                  className={`${styles['image_5']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=98f10078c35e246965b3639e71170b81.png"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`flex-col justify-start items-center ${styles['section_4']}`}>
        <div className={`flex-row`}>
          <img
            className={`${styles['equal-division-item']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3dca41eeeb2a30652dda1462538eadae.png"
          />
          <img
            className={`ml-76 ${styles['equal-division-item']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=07d22a260a49ca914552c1b4d6eeaf09.png"
          />
          <img
            className={`ml-76 ${styles['equal-division-item']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=eb9b4fcae2ad69c831a2af558ba7a273.png"
          />
          <img
            className={`ml-76 ${styles['equal-division-item']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=17e2f51733b5d5bd4a2bcbb758ccfedf.png"
          />
        </div>
      </div>
    </div>
  );
}

Exercise_page_Pressed_.defaultProps = { className: '' };