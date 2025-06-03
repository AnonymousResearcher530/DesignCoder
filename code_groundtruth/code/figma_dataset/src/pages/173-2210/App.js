import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Input_card_details_173_2210(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col justify-start relative ${styles['page']} ${props.className}`}>
      <div className={`flex-col`}>
        <div className={`flex-row justify-center items-center relative ${styles['group']}`}>
          <div className={`flex-row items-center ${styles['section_2']} ${styles['pos_2']}`}>
            <img
              className={`shrink-0 ${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8ddd4613362de0fd3a142b107d51d28d.png"
            />
            <span className={`${styles['text_2']} ${styles['ml-5']}`}>Go back</span>
          </div>
          <span className={`${styles['text']}`}>My Basket</span>
        </div>
        <div className={`flex-row justify-between items-center ${styles['section_3']} mt-40`}>
          <div className={`flex-row items-center`}>
            <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
              <img
                className={`${styles['image_2']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=01e52e91a16764ac977c22375ac66ade.png"
              />
            </div>
            <div className={`flex-col items-start ${styles['ml-17']}`}>
              <span className={`${styles['font']} ${styles['text_3']}`}>Quinoa fruit salad</span>
              <span className={`${styles['text_5']} mt-12`}>2packs</span>
            </div>
          </div>
          <div className={`flex-row items-center`}>
            <img
              className={`shrink-0 ${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4aee3da103f8e91e766f4993d6a784c1.png"
            />
            <span className={`${styles['font']} ${styles['text_4']} ${styles['ml-5']}`}>20,000</span>
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['section']} ${styles['pos']}`}>
        <img
          className={`self-center ${styles['image_4']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6e0e5c41bd6c73c30942f725335b0ecc.png"
        />
        <div className={`flex-col self-stretch ${styles['section_4']} mt-16`}>
          <span className={`self-start ${styles['font_2']} ${styles['text_6']}`}>Card Holders Name</span>
          <div className={`flex-col justify-start items-start self-stretch ${styles['text-wrapper']}`}>
            <span className={`${styles['font_3']} ${styles['text_7']}`}>Adolphus Chris</span>
          </div>
          <div className={`flex-col self-stretch ${styles['group_1']}`}>
            <span className={`self-start ${styles['font_2']}`}>Card Number</span>
            <div className={`flex-col justify-start items-start self-stretch ${styles['text-wrapper_2']} mt-24`}>
              <span className={`${styles['font_3']} ${styles['text_9']}`}>1234 5678 9012 1314</span>
            </div>
          </div>
          <div className={`flex-col self-stretch ${styles['group_6']}`}>
            <div className={`flex-row justify-between ${styles['group_2']}`}>
              <span className={`${styles['font_2']} ${styles['text_10']}`}>Date</span>
              <span className={`${styles['font_2']} ${styles['text_11']}`}>CCV</span>
            </div>
            <div className={`flex-row justify-between ${styles['group_3']} mt-24`}>
              <div className={`flex-col justify-start items-start ${styles['text-wrapper_1']}`}>
                <span className={`${styles['font_3']} ${styles['text_13']}`}>10/30</span>
              </div>
              <div className={`flex-col justify-start items-start ${styles['text-wrapper_3']}`}>
                <span className={`${styles['font_3']} ${styles['text_14']}`}>123</span>
              </div>
            </div>
          </div>
          <div className={`flex-col justify-start items-center self-stretch ${styles['section_5']}`}>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_4']}`}>
              <span className={`${styles['font']} ${styles['text_15']}`}>Complete Order</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Input_card_details_173_2210.defaultProps = { className: '' };