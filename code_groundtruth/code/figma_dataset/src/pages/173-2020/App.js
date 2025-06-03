import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Order_list_173_2020(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-center items-center relative ${styles['group']}`}>
        <div className={`flex-row items-center ${styles['section']} ${styles['pos']}`}>
          <img
            className={`shrink-0 ${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8ddd4613362de0fd3a142b107d51d28d.png"
          />
          <span className={`${styles['font_2']} ${styles['text_2']} ${styles['ml-5']}`}>Go back</span>
        </div>
        <span className={`${styles['font']} ${styles['text']}`}>My Basket</span>
      </div>
      <div className={`mt-40 flex-col ${styles['section_2']}`}>
        <div className={`flex-col`}>
          {data.items.map((item, index) => (
            <div className={`flex-row justify-between items-center ${styles['list-item']}`} key={index}>
              <div className={`flex-row items-center`}>
                <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
                  <img
                    className={`${styles['image_2']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=01e52e91a16764ac977c22375ac66ade.png"
                  />
                </div>
                <div className={`flex-col items-start ${styles['ml-17']}`}>
                  <span className={`${styles['font_2']} ${styles['text_3']}`}>Quinoa fruit salad</span>
                  <span className={`mt-12 ${styles['font_3']}`}>2packs</span>
                </div>
              </div>
              <div className={`flex-row items-center`}>
                <img
                  className={`shrink-0 ${styles['image_3']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4aee3da103f8e91e766f4993d6a784c1.png"
                />
                <span className={`${styles['font_2']} ${styles['text_4']} ${styles['ml-5']}`}>20,000</span>
              </div>
            </div>
          ))}
        </div>
        <div className={`flex-row items-center ${styles['group_2']} ${styles['mt-222']}`}>
          <div className={`flex-col shrink-0`}>
            <span className={`self-start ${styles['font_4']} ${styles['text_7']}`}>Total</span>
            <div className={`mt-14 flex-row items-center self-stretch`}>
              <img
                className={`shrink-0 ${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a9bc6c5a683f4a3d3d02d81b0bce7c29.png"
              />
              <span className={`ml-6 ${styles['font']} ${styles['text_9']}`}>60,000</span>
            </div>
          </div>
          <div className={`ml-22 flex-col justify-start items-center flex-1 ${styles['text-wrapper']}`}>
            <span className={`${styles['font_4']} ${styles['text_8']}`}>Checkout</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Order_list_173_2020.defaultProps = { className: '' };