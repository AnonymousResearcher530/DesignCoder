import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Senior_List_5_4877(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <img
        className={`self-center ${styles['image']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d2177f3b8ffb7ea4b44684f5a2d133d3.png"
      />
      <div className={`flex-col justify-start items-center self-stretch ${styles['section']}`}>
        <div className={`flex-col`}>
          {data.items.map((item, index) => (
            <div className={`flex-col relative ${styles['list-item']} ${styles['mt-19']}`} key={index}>
              <div className={`flex-row items-center self-stretch ${styles['group_1']}`}>
                <span className={`${styles['font']} ${styles['text']} ${styles['text_2']}`}>Maria</span>
                <img
                  className={`shrink-0 ${styles['image_2']} ${styles['ml-163']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=18e5a2ad34e526e5e1b4a231a452638c.png"
                />
              </div>
              <div className={`flex-row items-center self-center ${styles['section_2']} mt-10`}>
                <span className={`${styles['font_2']} ${styles['text']}`}>Success</span>
                <img
                  className={`shrink-0 ${styles['image_3']} ml-6`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a6f89690cce6d2119d991da185a643d4.png"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`flex-row justify-center items-center self-center ${styles['section_5']}`}>
        <span className={`${styles['text_5']}`}>Add new senior</span>
        <img
          className={`${styles['image_6']} ${styles['ml-11']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=020bd82543b99a6251e8d63994af3799.png"
        />
      </div>
    </div>
  );
}

Senior_List_5_4877.defaultProps = { className: '' };