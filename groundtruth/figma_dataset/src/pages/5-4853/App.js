import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Search_Booking_5_4853(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col ${styles['section']}`}>
        <div className={`flex-col justify-start items-end self-stretch relative ${styles['group']}`}>
          <div className={`flex-col justify-start items-center relative ${styles['group_3']}`}>
            <img
              className={`${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=20b0d1a13d30af3e50eb11b67ed28e81.png"
            />
            <span className={`${styles['text_2']} ${styles['pos_3']}`}>1 hour</span>
          </div>
          <div className={`flex-row justify-center ${styles['group_2']} ${styles['pos']}`}>
            <img
              className={`self-center ${styles['image']} ${styles['pos_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3a7be95558b91ab84baef7382ee6e84c.png"
            />
            <span className={`self-start ${styles['text']}`}>Booking</span>
          </div>
        </div>
        <div className={`self-end ${styles['section_2']}`}></div>
        <img
          className={`self-end ${styles['image_3']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=faa115d7eaed7755d9e68cde2179be4b.png"
        />
        <div className={`self-start ${styles['section_3']}`}></div>
        <div className={`flex-row justify-end items-end self-stretch ${styles['group_4']}`}>
          <img
            className={`${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=663130c726e42cc0a5e7f1dbaddc464d.png"
          />
          <img
            className={`${styles['image_5']} ${styles['ml-55']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5c686a6dfda73e137851a5caf4a31c2e.png"
          />
        </div>
      </div>
      <div className={`flex-col relative ${styles['section_4']}`}>
        <div className={`flex-col justify-start items-start relative ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_6']} ${styles['image_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=80d139e52c4471140ecf11da6db66bea.png"
          />
        </div>
        <div className={`flex-col ${styles['list']} ${styles['mt-21']}`}>
          {data.items.map((item, index) => (
            <div className={`flex-row items-center mt-2 ${styles['list-item']}`} key={index}>
              <img
                className={`${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=93655eca87940a387936962175fdd35a.png"
              />
              <div className={`flex-col items-start flex-1 ${styles['group_5']} ${styles['ml-13']}`}>
                <span className={`${styles['font']} ${styles['text_3']}`}>Kings Cross Underground Statio...</span>
                <span className={`${styles['font_2']} ${styles['mt-5']}`}>New York</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Search_Booking_5_4853.defaultProps = { className: '' };