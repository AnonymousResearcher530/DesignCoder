import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Search_23_13122(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between ${styles['group']}`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2ab1bb35971e4fbb966aeded300febd0.png"
        />
        <span className={`self-start ${styles['text']}`}>Search</span>
        <img
          className={`${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c5078385eec1c67f4fa9f9bff4bdedb1.png"
        />
      </div>
      <div className={`flex-col justify-start ${styles['group_2']} ${styles['view_1']}`}>
        <div className={`flex-row`}>
          <div className={`flex-row items-center flex-1 relative ${styles['section']}`}>
            <img
              className={`${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9dc0f2e3ef15b882b2c24a19c1baf3e0.png"
            />
            <span className={`${styles['text_2']} ${styles['ml-13']}`}>Search now...</span>
          </div>
          <img
            className={`shrink-0 ${styles['image_3']} ml-20`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=18000c280334eb592a1890213cd622e6.png"
          />
        </div>
      </div>
      <div className={`flex-col ${styles['group_1']}`}>
        {data.items.map((item, index) => (
          <div className={`flex-row ${styles['list-item']} ${styles['section_1']}`} key={index}>
            <img
              className={`shrink-0 self-center ${styles['image_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b21bc0767dc8ce2143e5e6961ea2867e.png"
            />
            <div className={`flex-col flex-1 self-center ${styles['group_3']}`}>
              <div className={`flex-col items-start ${styles['group_9']}`}>
                <span className={`${styles['font_2']} ${styles['text_4']}`}>Mobile UI Essentials</span>
                <span className={`${styles['font_3']} ${styles['text_5']} ${styles['mt-15']}`}>
                  Intermediate / 28 lessons
                </span>
              </div>
              <div className={`flex-row items-center ${styles['mt-27']}`}>
                <img
                  className={`${styles['image_4']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9663bd5fab45b48ccccef80b02928056.png"
                />
                <span className={`${styles['font_4']} ${styles['text_6']}`}>4.9</span>
                <div className={`${styles['section_3']} ${styles['view']}`}></div>
                <span className={`${styles['font_5']} ${styles['text_7']}`}>6h 30min</span>
              </div>
            </div>
            <img
              className={`shrink-0 self-start ${styles['image_7']} ${styles['image_8']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3df1036a1de2df51e491e50e1558eda0.png"
            />
          </div>
        ))}
      </div>
      <div className={`flex-col justify-start items-center ${styles['section_5']}`}>
        <div className={`flex-row`}>
          <img
            className={`${styles['equal-division-item']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0914eb60b0bd6899f07b09d3e9bf7c2d.png"
          />
          <img
            className={`${styles['equal-division-item_2']} ${styles['image_13']} ${styles['ml-67']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d5ea16c0d805c195d2a9f1646032a265.png"
          />
          <img
            className={`${styles['equal-division-item_3']} ${styles['ml-67']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a6fa4178afee4755e01567f0406fe78f.png"
          />
          <img
            className={`${styles['equal-division-item_4']} ${styles['ml-67']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=16da3594609e73be1d410e94907fc5ae.png"
          />
        </div>
      </div>
    </div>
  );
}

Search_23_13122.defaultProps = { className: '' };