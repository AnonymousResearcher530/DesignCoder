import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Track_order_173_2094(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row items-center ${styles['group']}`}>
        <div className={`flex-row items-center ${styles['section']}`}>
          <img
            className={`shrink-0 ${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8ddd4613362de0fd3a142b107d51d28d.png"
          />
          <span className={`${styles['font']} ${styles['text_2']} ${styles['ml-5']}`}>Go back</span>
        </div>
        <span className={`${styles['text']} ${styles['ml-17']}`}>Delivery Status</span>
      </div>
      <div className={`flex-col ${styles['section_2']} mt-40`}>
        <div className={`flex-col relative ${styles['group_2']}`}>
          <div className={`shrink-0 self-start ${styles['section_4']}`}></div>
          <div className={`flex-col self-stretch relative ${styles['list']}`}>
            {data.items.map((item, index) => (
              <div
                className={`flex-row justify-between items-center self-stretch ${styles['list-item']} mt-48`}
                key={index}
              >
                <div className={`flex-row items-center`}>
                  <div className={`flex-col justify-start items-center shrink-0 ${styles['image-wrapper']}`}>
                    <img
                      className={`${styles['image_2']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=41c7d7d9740af974f55be5bff6c30bea.png"
                    />
                  </div>
                  <span className={`${styles['font']} ${styles['ml-17']}`}>Order Taken</span>
                </div>
                <img
                  className={`${styles['image_3']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1c7d73649a76a1e7bd4414025fa5fa71.png"
                />
              </div>
            ))}
          </div>
          <div className={`shrink-0 ${styles['section_3']} ${styles['pos']}`}></div>
          <div className={`shrink-0 ${styles['section_3']} ${styles['pos_2']}`}></div>
          <span className={`${styles['font_2']} ${styles['pos_4']}`}>Order Is Being Delivered</span>
          <span className={`${styles['text_3']} ${styles['pos_5']}`}>Your delivery agent is coming</span>
          <img
            className={`shrink-0 ${styles['image_5']} ${styles['pos_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8b1be653be9997202adc6b2dca991488.png"
          />
        </div>
        <img
          className={`${styles['image_6']} ${styles['mt-3']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a33083582f9874858a08cc6a35d56810.png"
        />
        <div className={`flex-row relative ${styles['group_3']} ${styles['mt-3']}`}>
          <div className={`${styles['section_3']} ${styles['pos_6']}`}></div>
          <div className={`flex-row items-center ${styles['pos_7']}`}>
            <div className={`flex-col justify-start items-center shrink-0 ${styles['image-wrapper_4']}`}>
              <img
                className={`${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e5e856c8b0e9b655297d52d439807932.png"
              />
            </div>
            <span className={`${styles['font']} ${styles['ml-17']}`}>Order Received</span>
          </div>
          <img
            className={`${styles['image_7']} ${styles['pos_8']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3f5c2f9070e5c36ae4301816620efd29.png"
          />
        </div>
      </div>
    </div>
  );
}

Track_order_173_2094.defaultProps = { className: '' };