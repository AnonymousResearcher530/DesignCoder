import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Sessions_20_4246(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between ${styles['group_2']}`}>
        <img
          className={`self-center ${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=31816a71637f18aa1a60c21dfffe3d70.png"
        />
        <img
          className={`self-start ${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=085fab2ee2948af309e4e5183fd7ef79.png"
        />
      </div>
      <div className={`flex-col items-start ${styles['section']}`}>
        <span className={`${styles['text']}`}>Upcoming Session</span>
        <span className={`${styles['font']} ${styles['text_2']} ${styles['mt-11']}`}>
          Sahana V, Msc in Clinical Psychology
        </span>
        <span className={`${styles['font_2']} ${styles['text_2']} ${styles['text_3']} ${styles['mt-11']}`}>
          7:30 PM - 8:30 PM
        </span>
        <div className={`flex-row ${styles['group_3']} ${styles['mt-11']}`}>
          <span className={`${styles['text_4']}`}>Join Now</span>
          <img
            className={`${styles['image_3']} ${styles['image_4']} ${styles['ml-3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=dd57919cd7d06c883834f48d7dab6fcc.png"
          />
        </div>
      </div>
      <div className={`flex-col ${styles['group_1']}`}>
        <div className={`flex-row justify-between items-center ${styles['view']}`}>
          <div className={`flex-row items-end`}>
            <span className={`${styles['text_5']}`}>All Sessions</span>
            <img
              className={`shrink-0 ${styles['image_6']} ${styles['ml-5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=be2a56dd91d36833b5fcd24fd6cab51f.png"
            />
          </div>
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=cd7184e5c3257b7b5ac1c7dbd3e70bd7.png"
          />
        </div>
        <div className={`flex-col ${styles['group_5']} ${styles['mt-23']}`}>
          {data.items.map((item, index) => (
            <div className={`flex-col ${styles['section_2']} ${styles['list-item']} ${styles['mt-11']}`} key={index}>
              <div className={`flex-row items-center ${styles['group_6']}`}>
                <img
                  className={`${styles['image_7']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=09923ecb5dbfcf2e01d355d884d6fcda.png"
                />
                <div className={`flex-col items-start ml-16`}>
                  <span className={`${styles['font_3']}`}>Sahana V</span>
                  <span className={`${styles['font']} ${styles['mt-11']}`}>Msc in Clinical Psychology</span>
                </div>
              </div>
              <div className={`flex-row items-center ${styles['group_4']} ${styles['mt-15']}`}>
                <img
                  className={`${styles['image_8']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1878a69e5cfa1d6632ccee28895f0882.png"
                />
                <span className={`${styles['font_2']} ${styles['text_6']}`}>31st March ‘22</span>
                <img
                  className={`${styles['image_3']} ${styles['image_9']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=63354ade670de50ffeb8d8ed52101999.png"
                />
                <span className={`${styles['font_2']} ${styles['text_7']}`}>7:30 PM - 8:30 PM</span>
              </div>
              <div className={`flex-row items-center ${styles['group_7']} ${styles['mt-15']}`}>
                <div className={`flex-col justify-start items-center ${styles['text-wrapper_1']}`}>
                  <span className={`${styles['font_4']} ${styles['text_8']}`}>Reschedule</span>
                </div>
                <span className={`${styles['font_5']} ${styles['text_9']} ml-38`}>Join Now</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`flex-row justify-between items-center ${styles['section_4']}`}>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_13']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=757e4e785b392f0a7a824325c81849f9.png"
          />
        </div>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_12']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=173ca0f5a2a2a6f906a1362757c57d03.png"
          />
        </div>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_14']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=482e6a2bcac2ed30f969a611776d8e5b.png"
          />
        </div>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_15']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9d340901932680d381c2b919bcd84b56.png"
          />
        </div>
      </div>
    </div>
  );
}

Sessions_20_4246.defaultProps = { className: '' };