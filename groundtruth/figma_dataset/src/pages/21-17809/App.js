import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Page_15_B_Paymentethod_Add_Card_21_17809(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start ${styles['section']}`}>
        <div className={`flex-row justify-center items-center relative ${styles['section_2']}`}>
          <img
            className={`${styles['image']} ${styles['pos']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=248d2b7bedb9b973e424151c0f038940.png"
          />
          <span className={`${styles['font']} ${styles['text']}`}>Add Card</span>
        </div>
      </div>
      <div className={`flex-col ${styles['mt-31']}`}>
        <div className={`flex-col justify-start self-center ${styles['section_3']}`}>
          <div className={`flex-col ${styles['section_4']}`}>
            <img
              className={`self-end ${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9264a896d4f97e79d39343ec77952ef2.png"
            />
            <div className={`mt-72 flex-col self-stretch`}>
              <span className={`self-start ${styles['font_2']} ${styles['text']} ${styles['text_2']}`}>
                000 000 000 00
              </span>
              <div className={`mt-14 flex-row items-center self-stretch`}>
                <div className={`flex-row justify-between ${styles['equal-division']} ${styles['group']}`}>
                  <div className={`flex-col items-start ${styles['equal-division-item']}`}>
                    <span className={`${styles['font_3']} ${styles['text']}`}>Card holder name</span>
                    <span className={`mt-6 ${styles['font_4']} ${styles['text']}`}>John Doe</span>
                  </div>
                  <div className={`flex-col items-start ${styles['group_2']} ${styles['equal-division-item']}`}>
                    <span className={`${styles['font_3']} ${styles['text']}`}>Expiry date</span>
                    <span className={`mt-4 ${styles['font_4']} ${styles['text']}`}>04/28</span>
                  </div>
                </div>
                <img
                  className={`${styles['image_3']} ${styles['ml-13']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a4108dc45954401dbc620470052dfb30.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`flex-col self-stretch ${styles['group_3']}`}>
          <span className={`self-start ${styles['font_2']} ${styles['text_3']} ${styles['text_4']}`}>
            Card holder name
          </span>
          <div
            className={`flex-col justify-start items-start self-stretch ${styles['text-wrapper']} ${styles['mt-13']}`}
          >
            <span className={`${styles['font_5']} ${styles['text']} ${styles['text_5']}`}>John Doe</span>
          </div>
        </div>
        <div className={`flex-col self-stretch ${styles['group_4']}`}>
          <span className={`self-start ${styles['font_2']} ${styles['text_3']} ${styles['text_6']}`}>card number</span>
          <div
            className={`flex-col justify-start items-start self-stretch ${styles['text-wrapper_2']} ${styles['mt-15']}`}
          >
            <span className={`${styles['font_5']} ${styles['text']} ${styles['text_7']}`}>000 000 000 00</span>
          </div>
        </div>
        <div className={`flex-col justify-start items-start self-stretch relative ${styles['group_5']}`}>
          <div className={`${styles['section_5']}`}></div>
          <div className={`flex-row justify-between ${styles['equal-division_2']} ${styles['group_6']}`}>
            <div className={`flex-col items-center ${styles['equal-division-item_2']}`}>
              <span className={`${styles['font_2']} ${styles['text_3']} ${styles['text_8']}`}>Expiry date</span>
              <span className={`mt-20 ${styles['font_5']} ${styles['text']} ${styles['text_9']}`}>04/28</span>
            </div>
            <div className={`flex-col ${styles['equal-division-item_3']}`}>
              <span className={`self-start ${styles['font_2']} ${styles['text_3']}`}>CVV</span>
              <div
                className={`flex-col justify-start items-start self-stretch ${styles['text-wrapper_3']} ${styles['mt-11']}`}
              >
                <span className={`${styles['font_5']} ${styles['text']} ${styles['text_10']}`}>0000</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex-col justify-start items-center self-center ${styles['text-wrapper_4']}`}>
          <span className={`${styles['font']}`}>Save Card</span>
        </div>
      </div>
    </div>
  );
}

Page_15_B_Paymentethod_Add_Card_21_17809.defaultProps = { className: '' };