import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Payment_173_1693(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=336028ef0a8752ac04f478fb86f5c61b.png"
        />
        <img
          className={`${styles['image_2']} ${styles['image_3']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=88ffc3f961c15362af2c4d0a6cc47084.png"
        />
      </div>
      <div className={`flex-col ${styles['group']}`}>
        <span className={`self-start ${styles['font']} ${styles['text']}`}>Order summary</span>
        <div className={`flex-col self-stretch ${styles['view']}`}>
          <div className={`flex-row justify-between items-center ${styles['group_1']}`}>
            <span className={`${styles['font_2']}`}>Order</span>
            <span className={`${styles['font_3']}`}>$16.48</span>
          </div>
          <div className={`flex-row justify-between items-baseline ${styles['group_2']}`}>
            <span className={`${styles['font_2']} ${styles['text_2']}`}>Taxes</span>
            <span className={`${styles['font_3']} ${styles['text_1']}`}>$0.3</span>
          </div>
          <div className={`flex-row justify-between items-center ${styles['group_3']}`}>
            <span className={`${styles['font_3']} ${styles['text_3']}`}>Delivery fees</span>
            <span className={`${styles['font_3']}`}>$1.5</span>
          </div>
          <img
            className={`${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b2871e6cc2953b4ee88cf0429d427bf0.png"
          />
        </div>
        <div className={`flex-row justify-between items-center self-stretch ${styles['view_2']}`}>
          <span className={`${styles['font_4']} ${styles['text_4']}`}>Total:</span>
          <span className={`${styles['font_4']} ${styles['text_5']}`}>$18.19</span>
        </div>
        <div className={`flex-row justify-between items-center self-stretch ${styles['group_4']}`}>
          <span className={`${styles['font_5']} ${styles['text_6']}`}>Estimated delivery time:</span>
          <span className={`${styles['font_5']} ${styles['text_7']}`}>15 - 30mins</span>
        </div>
      </div>
      <div className={`flex-col ${styles['group_13']}`}>
        <span className={`self-start ${styles['font']} ${styles['text_8']}`}>Payment methods</span>
        <div className={`flex-col self-stretch ${styles['group_5']}`}>
          <div className={`flex-row justify-between items-center ${styles['section']}`}>
            <div className={`flex-row`}>
              <img
                className={`${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=17c6cb19dbd2c1b0bd47138c572465dc.png"
              />
              <div className={`flex-col items-start ${styles['group_6']} ml-32`}>
                <span className={`${styles['font_6']} ${styles['text_9']}`}>Credit card</span>
                <span className={`${styles['font_6']} mt-16`}>5105 **** **** 0505</span>
              </div>
            </div>
            <img
              className={`${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=abf33ed4a3c0457956ec79964e28bf35.png"
            />
          </div>
          <div className={`flex-row justify-between items-center ${styles['section_2']} ${styles['mt-27']}`}>
            <div className={`flex-row`}>
              <img
                className={`${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9a532d5d8ebf3e2fa75999265c4a15f5.png"
              />
              <div className={`flex-col items-start ml-18`}>
                <span className={`${styles['font_6']} ${styles['text_10']}`}>Debit card</span>
                <span className={`${styles['font_6']} mt-16`}>3566 **** **** 0505</span>
              </div>
            </div>
            <img
              className={`${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e5f8709c909e5ac1d5214a30c02e5805.png"
            />
          </div>
        </div>
        <div className={`flex-row items-center self-stretch ${styles['group_7']}`}>
          <img
            className={`${styles['image_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f7d44a05199e70e7ab33d906dca679fd.png"
          />
          <span className={`${styles['font_7']} ${styles['text_11']} ml-10`}>
            Save card details for future payments
          </span>
        </div>
      </div>
      <div className={`flex-row justify-between items-center ${styles['group_8']}`}>
        <div className={`flex-col items-start`}>
          <span className={`${styles['font_7']} ${styles['text_12']}`}>Total price</span>
          <div className={`${styles['mt-9']}`}>
            <span className={`${styles['font_8']} ${styles['text_14']}`}>$</span>
            <span className={`${styles['font_8']} ${styles['text_15']}`}>18.19</span>
          </div>
        </div>
        <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
          <span className={`${styles['text_13']}`}>Pay Now</span>
        </div>
      </div>
    </div>
  );
}

Payment_173_1693.defaultProps = { className: '' };