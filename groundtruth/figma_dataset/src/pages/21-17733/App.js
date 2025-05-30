import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Page_15_D_Payment_Successfully_21_17733(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start self-stretch ${styles['section']}`}>
        <div className={`flex-row justify-center items-center relative ${styles['section_2']}`}>
          <img
            className={`${styles['image']} ${styles['pos']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=248d2b7bedb9b973e424151c0f038940.png"
          />
          <span className={`${styles['font']} ${styles['text']} ${styles['text_2']}`}>Payment</span>
        </div>
      </div>
      <div className={`flex-col self-stretch ${styles['group']}`}>
        <img
          className={`self-center ${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=31713805fa9023054f02564e100e4edf.png"
        />
        <div className={`flex-col items-center self-stretch ${styles['mt-25']}`}>
          <span className={`${styles['text_3']}`}>Congratulation</span>
          <span className={`${styles['font_2']} ${styles['text_4']} mt-8`}>Payment is Successfully</span>
        </div>
      </div>
      <div className={`flex-col self-stretch ${styles['group_2']}`}>
        <div className={`flex-col ${styles['section_3']}`}>
          <span className={`${styles['text_5']}`}>You have successfully booked an appointment with</span>
          <div className={`flex-col ${styles['mt-19']}`}>
            <span className={`self-center ${styles['font_2']} ${styles['text_6']}`}>Dr. Emma Hall, M.D.</span>
            <div className={`flex-row ${styles['equal-division']} mt-10`}>
              <div className={`flex-row items-center ${styles['equal-division-item']}`}>
                <img
                  className={`shrink-0 ${styles['image_3']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b50887782edd28b2f22f538555772aa1.png"
                />
                <span className={`${styles['font_3']} ${styles['text']} ${styles['text_7']} ml-6`}>Month 24, Year</span>
              </div>
              <div
                className={`flex-row items-center ${styles['equal-division-item_2']} ${styles['group_3']} ${styles['ml-19']}`}
              >
                <img
                  className={`shrink-0 ${styles['image_4']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f163e6dfad32267948a2993a7b9acbb1.png"
                />
                <span className={`${styles['font_3']} ${styles['text']} ${styles['text_8']} ${styles['ml-5']}`}>
                  10:00 aM
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex-row justify-center items-center ${styles['section_4']} mt-8`}>
          <span className={`${styles['text']} ${styles['text_9']}`}>download receipt</span>
          <div className={`${styles['section_5']}`}></div>
        </div>
      </div>
      <div className={`flex-col justify-start items-center self-center ${styles['text-wrapper']}`}>
        <span className={`${styles['font']} ${styles['text_10']}`}>Return Now</span>
      </div>
    </div>
  );
}

Page_15_D_Payment_Successfully_21_17733.defaultProps = { className: '' };