import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Page_15_C_Payment_Summary_21_17761(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start ${styles['section']}`}>
        <div className={`flex-col ${styles['section_2']}`}>
          <div className={`flex-row justify-center items-center self-stretch relative`}>
            <img
              className={`${styles['image']} ${styles['pos']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=248d2b7bedb9b973e424151c0f038940.png"
            />
            <span className={`${styles['font']} ${styles['text']}`}>Payment</span>
          </div>
          <span className={`self-center ${styles['text']} ${styles['text_2']} mt-42`}>$ 100.00</span>
        </div>
      </div>
      <div className={`flex-col ${styles['group']} ${styles['mt-25']}`}>
        <div className={`flex-row items-center ${styles['group_2']}`}>
          <img
            className={`shrink-0 ${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=61ebaaa7c927429a69e9945536ebe2c3.png"
          />
          <div className={`flex-col flex-1 ml-14`}>
            <div className={`flex-row items-center self-stretch`}>
              <span className={`${styles['text']} ${styles['text_3']}`}>Dr. Emma Hall, M.D.</span>
              <img
                className={`shrink-0 ${styles['image_3']} ml-22`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4149c2a961cee433f50d532a0c68e99f.png"
              />
            </div>
            <span className={`self-start ${styles['font_2']} ${styles['text_4']}`}>General Doctor</span>
            <div className={`flex-row ${styles['equal-division']}`}>
              <div className={`flex-row justify-center items-center ${styles['section_3']} ${styles['section_1']}`}>
                <img
                  className={`${styles['image_4']} ${styles['pos_2']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4d612ca8fe5ab07098c98abc19433ef4.png"
                />
                <span className={`${styles['font_3']} ${styles['text_5']}`}>5</span>
              </div>
              <div className={`flex-row justify-center ${styles['section_3']} ${styles['section_4']} ml-6`}>
                <img
                  className={`${styles['image_5']} ${styles['pos_3']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=412d5ccc9df3ac71eb0671528328a326.png"
                />
                <span className={`${styles['font_3']} ${styles['text_6']}`}>30</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex-col ${styles['group_3']}`}>
          <div className={`flex-row justify-between items-center`}>
            <span className={`${styles['font_4']} ${styles['text_7']} ${styles['text_8']}`}>Date / Hour</span>
            <span className={`${styles['font_5']} ${styles['text']} ${styles['text_9']}`}>
              Month 24, Year / 10:00 aM
            </span>
          </div>
          <div className={`flex-row justify-between items-center ${styles['mt-15']}`}>
            <span className={`${styles['font_4']} ${styles['text_7']} ${styles['text_10']}`}>Duration</span>
            <span className={`${styles['font_2']} ${styles['text']} ${styles['text_11']}`}>30 minutes</span>
          </div>
          <div className={`flex-row justify-between items-baseline ${styles['mt-15']}`}>
            <span className={`${styles['font_6']} ${styles['text_7']} ${styles['text_12']}`}>Booking for</span>
            <span className={`${styles['font_2']} ${styles['text']} ${styles['text_13']}`}>Jhon Doe</span>
          </div>
        </div>
        <div className={`flex-col ${styles['group_5']}`}>
          <div className={`flex-col`}>
            <div className={`flex-row justify-between items-center`}>
              <span className={`${styles['font_4']} ${styles['text_7']} ${styles['text_14']}`}>Amount</span>
              <span className={`${styles['font_5']} ${styles['text']} ${styles['text_15']}`}>$100.00</span>
            </div>
            <div className={`flex-row justify-between items-center ${styles['mt-15']}`}>
              <span className={`${styles['font_4']} ${styles['text_7']} ${styles['text_16']}`}>Duration</span>
              <span className={`${styles['font_2']} ${styles['text']} ${styles['text_17']}`}>30 minutes</span>
            </div>
          </div>
          <div className={`flex-row justify-between items-center mt-36`}>
            <span className={`${styles['font_4']} ${styles['text_7']}`}>Total</span>
            <span className={`${styles['font_5']} ${styles['text']} ${styles['text_18']}`}>$100</span>
          </div>
        </div>
        <div className={`flex-row justify-between ${styles['group_6']}`}>
          <span className={`${styles['font_6']} ${styles['text_7']} ${styles['text_19']}`}>Payment Method</span>
          <div className={`flex-row items-center ${styles['group_7']}`}>
            <span className={`${styles['font_2']} ${styles['text']}`}>Card</span>
            <span className={`${styles['font_6']} ${styles['text_20']} ${styles['ml-9']}`}>Change</span>
          </div>
        </div>
        <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
          <span className={`${styles['font']}`}>Pay Now</span>
        </div>
      </div>
    </div>
  );
}

Page_15_C_Payment_Summary_21_17761.defaultProps = { className: '' };