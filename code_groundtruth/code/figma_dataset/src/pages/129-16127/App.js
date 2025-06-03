import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Card_129_16127(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-center items-center self-stretch relative ${styles['group']}`}>
        <span className={`${styles['text']}`}>Add new card</span>
        <img
          className={`${styles['image']} ${styles['pos']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7a3fba589d9bceeaa461ef716921e1d5.png"
        />
      </div>
      <div className={`flex-col justify-start self-center ${styles['group_2']}`}>
        <div className={`flex-col justify-start ${styles['section']}`}>
          <div className={`flex-col ${styles['section_2']}`}>
            <div className={`flex-col ${styles['group_3']}`}>
              <div className={`flex-row justify-between items-center self-stretch ${styles['group_4']}`}>
                <span className={`${styles['text_2']}`}>CHASE BANK</span>
                <img
                  className={`${styles['image_2']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6180c1cc156ea6c178b86227eabe8a92.png"
                />
              </div>
              <img
                className={`mt-18 self-start ${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f5ff96024548a3175743490367193cfe.png"
              />
            </div>
            <div className={`flex-col`}>
              <div className={`flex-col justify-start items-center self-start ${styles['text-wrapper']}`}>
                <span className={`${styles['text_3']}`}>xxxx-xxxx-xxxx-xxxx</span>
              </div>
              <span className={`self-end ${styles['text_4']} ${styles['mt-5']}`}>Exp. 00/00</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col self-stretch ${styles['group_5']}`}>
        <span className={`self-start ${styles['font']}`}>Card holder name</span>
        <div className={`flex-col justify-start items-start self-stretch ${styles['text-wrapper_2']}`}>
          <span className={`${styles['font_2']} ${styles['text_5']}`}>Sara Miler</span>
        </div>
        <span className={`self-start ${styles['font']} ${styles['text_6']}`}>Card number</span>
        <div className={`flex-col justify-start items-start self-stretch ${styles['text-wrapper_3']}`}>
          <span className={`${styles['font_2']} ${styles['text_7']}`}>1089-3896-0234-3089</span>
        </div>
        <div className={`flex-col self-stretch ${styles['group_6']}`}>
          <div className={`flex-row justify-between items-center`}>
            <span className={`${styles['font']} ${styles['text_8']}`}>Expire date</span>
            <span className={`${styles['font']} ${styles['text_9']}`}>CVV/CVC</span>
          </div>
          <div className={`flex-row justify-between ${styles['mt-5']}`}>
            <div className={`flex-col justify-start items-start ${styles['text-wrapper_4']}`}>
              <span className={`${styles['font_2']} ${styles['text_10']}`}>10/25/2026</span>
            </div>
            <div className={`flex-col justify-start items-start ${styles['text-wrapper_5']}`}>
              <span className={`${styles['font_2']} ${styles['text_11']}`}>278</span>
            </div>
          </div>
        </div>
        <div className={`flex-row items-center self-stretch ${styles['group_7']}`}>
          <img
            className={`${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d6f5e28a5067e03e94f2238e13860479.png"
          />
          <span className={`${styles['font_2']} ${styles['text_12']} ${styles['ml-9']}`}>Remember my card</span>
        </div>
      </div>
      <div className={`flex-col justify-start items-center self-stretch ${styles['text-wrapper_6']}`}>
        <span className={`${styles['font_2']} ${styles['text_13']}`}> Add card</span>
      </div>
    </div>
  );
}

Card_129_16127.defaultProps = { className: '' };