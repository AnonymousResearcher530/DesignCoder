import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Place_Order_127_12138(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center ${styles['group_2']}`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2eb1bdab16be2d52cbee03ca17e98e99.png"
        />
        <div className={`flex-row items-center ${styles['group_3']}`}>
          <span className={`${styles['font']} ${styles['text']}`}>Shopping Bag</span>
          <img
            className={`shrink-0 ${styles['image_2']} ml-88`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8ac534a872e3b4c263e4351069967fb4.png"
          />
        </div>
      </div>
      <div className={`flex-row relative ${styles['group_4']}`}>
        <div className={`flex-row justify-between items-center ${styles['pos_3']}`}>
          <div className={`flex-row items-center`}>
            <img
              className={`shrink-0 ${styles['image_7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5cf02ad02d7be8c17b92d178638d03b3.png"
            />
            <span className={`${styles['font_3']} ${styles['text_6']} ml-10`}>Apply Coupons</span>
          </div>
          <span className={`${styles['font_4']} ${styles['text_7']}`}>Select</span>
        </div>
        <img
          className={`${styles['image_3']} ${styles['pos']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ed032e4c8e23d335aff6c359dcdcd1d8.png"
        />
        <div className={`flex-col ${styles['section']} ${styles['pos_2']}`}>
          <img
            className={`${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=543e3b826ceabedbc5fa823946e03336.png"
          />
          <div className={`flex-row mt-8`}>
            <div className={`flex-row ${styles['section_2']}`}>
              <span className={`self-center ${styles['font_2']} ${styles['text_2']}`}>Size</span>
              <span className={`self-center ${styles['font_2']} ${styles['text_3']} ml-10`}>42</span>
              <img
                className={`self-start ${styles['image_5']} ml-10`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2c0cb4fba3131dcec5006507ec43ae4e.png"
              />
            </div>
            <div className={`flex-row justify-center items-center ${styles['section_3']} ml-12`}>
              <span className={`${styles['text_4']}`}>Qty</span>
              <div className={`flex-row ${styles['group_5']} ml-14`}>
                <img
                  className={`self-start ${styles['image_5']} ${styles['image_6']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2c0cb4fba3131dcec5006507ec43ae4e.png"
                />
                <span className={`self-center ${styles['font_2']} ${styles['text_5']}`}>1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles['divider']} ${styles['view']}`}></div>
      <div className={`flex-col ${styles['group_7']}`}>
        <span className={`self-start ${styles['font_3']} ${styles['text_8']}`}>Order Payment Details</span>
        <div className={`flex-col self-stretch mt-30`}>
          <div className={`flex-row justify-between items-center`}>
            <span className={`${styles['font_5']}`}>Order Amounts</span>
            <div className={`flex-row items-center`}>
              <img
                className={`shrink-0 ${styles['image_8']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3531540ae245f1c54599b821e240d998.png"
              />
              <span className={`${styles['font']} ml-6`}>7,000.00</span>
            </div>
          </div>
          <div className={`flex-row justify-between items-center mt-18`}>
            <div className={`flex-row items-baseline`}>
              <span className={`${styles['font_5']}`}>Convenience</span>
              <span className={`${styles['font_6']} ${styles['text_9']} ${styles['ml-13']}`}>Know More</span>
            </div>
            <span className={`${styles['font_6']} ${styles['text_10']}`}>Apply Coupon</span>
          </div>
          <div className={`flex-row justify-between mt-18`}>
            <span className={`self-center ${styles['font_2']} ${styles['text_12']}`}>Delivery Fee</span>
            <span className={`self-start ${styles['font_4']} ${styles['text_11']}`}>Free</span>
          </div>
        </div>
      </div>
      <div className={`${styles['divider']} ${styles['divider_2']}`}></div>
      <div className={`flex-col ${styles['group_9']}`}>
        <div className={`flex-row justify-between items-center`}>
          <span className={`${styles['font_5']} ${styles['text_13']}`}>Order Total</span>
          <div className={`flex-row items-center`}>
            <img
              className={`shrink-0 ${styles['image_8']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3531540ae245f1c54599b821e240d998.png"
            />
            <span className={`${styles['font']} ml-6`}>7,000.00</span>
          </div>
        </div>
        <div className={`flex-row items-center ${styles['mt-17']}`}>
          <span className={`${styles['font_5']} ${styles['text_14']}`}>EMI</span>
          <span className={`${styles['font_5']} ${styles['text_15']}`}>Available </span>
          <span className={`${styles['font_6']} ${styles['text_16']}`}>Details</span>
        </div>
      </div>
      <img
        className={`${styles['image_9']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=43c8cb22d627b36e7babb4e9ede47d41.png"
      />
    </div>
  );
}

Place_Order_127_12138.defaultProps = { className: '' };