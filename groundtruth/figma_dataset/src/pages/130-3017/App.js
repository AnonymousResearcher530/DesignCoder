import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Bank_Account_130_3017(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col justify-start items-center relative ${styles['page']} ${props.className}`}>
      <img
        className={`${styles['image']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=88c7df4830855bb30e8b96ea0f1b585f.png"
      />
      <div className={`flex-col ${styles['pos_13']}`}>
        <span className={`self-start ${styles['text_6']}`}>Assets</span>
        <div className={`flex-col justify-start self-stretch relative ${styles['group_3']}`}>
          <div className={`${styles['section_1']}`}></div>
          <span className={`${styles['font_3']} ${styles['pos_16']}`}>$12,094.08</span>
          <img
            className={`${styles['image_7']} ${styles['pos_14']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7a2664da9bc46b9b30424352ae3bf844.png"
          />
          <span className={`${styles['font_2']} ${styles['text_7']} ${styles['pos_15']}`}>SL</span>
          <span className={`${styles['font_4']} ${styles['pos_17']}`}>Solana</span>
        </div>
        <div className={`flex-col justify-start self-stretch relative ${styles['group_4']}`}>
          <div className={`${styles['section_1']}`}></div>
          <span className={`${styles['font_3']} ${styles['pos_21']}`}>$17,238.11</span>
          <img
            className={`${styles['image_7']} ${styles['pos_19']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fbb64bacdd998b2d0cc7fcd12037806d.png"
          />
          <span className={`${styles['font_2']} ${styles['text_7']} ${styles['pos_20']}`}>BTC</span>
          <span className={`${styles['font_4']} ${styles['text_8']} ${styles['pos_22']}`}>Bitcoin</span>
        </div>
        <div className={`flex-col justify-start self-stretch relative ${styles['group_5']}`}>
          <div className={`${styles['section_1']}`}></div>
          <span className={`${styles['font_3']} ${styles['pos_26']}`}>$8,200.00</span>
          <img
            className={`${styles['image_7']} ${styles['pos_24']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2de6334e832cc84df2fc69b497ca7689.png"
          />
          <span className={`${styles['font_2']} ${styles['text_7']} ${styles['text_9']} ${styles['pos_25']}`}>ETH</span>
          <span className={`${styles['font_4']} ${styles['pos_27']}`}>Ethereum</span>
        </div>
        <div className={`flex-col justify-start self-stretch relative ${styles['group_6']}`}>
          <div className={`${styles['section_1']}`}></div>
          <div className={`${styles['section_2']} ${styles['pos_29']}`}></div>
        </div>
      </div>
      <div className={`flex-col justify-start items-center ${styles['section_3']} ${styles['pos_30']}`}>
        <div className={`flex-row items-center`}>
          <img
            className={`${styles['equal-division-item']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f1986df5f82d8fcded2ab4ffb62fa137.png"
          />
          <img
            className={`${styles['equal-division-item_3']} ${styles['ml-69']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=dcfad5dff81f3e3f1c5a41b6989b49fe.png"
          />
          <img
            className={`${styles['equal-division-item_2']} ${styles['ml-69']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3157d21e472c8209fa080a294ffa4cf2.png"
          />
          <img
            className={`${styles['equal-division-item']} ${styles['ml-69']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=de8c71c43101786014c6c6646126c4ee.png"
          />
        </div>
      </div>
      <div className={`flex-row justify-between ${styles['pos']}`}>
        <img
          className={`${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6f191f40fcf779b85430bb7539451047.png"
        />
        <img
          className={`${styles['image_3']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ac04c37f194864ffc45b6a9f32d16c00.png"
        />
      </div>
      <div className={`flex-row ${styles['group_1']} ${styles['pos_3']}`}>
        <span className={`${styles['text']} ${styles['pos_4']}`}>Cards</span>
        <img
          className={`${styles['image_4']} ${styles['pos_5']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1a071a23b9e42b8e7c11fe853d96e4c7.png"
        />
        <div className={`flex-col justify-start ${styles['group']} ${styles['pos_32']}`}>
          <div className={`flex-row relative ${styles['section']}`}>
            <span className={`${styles['font']} ${styles['text_4']} ${styles['pos_10']}`}>Exp</span>
            <span className={`${styles['text_5']} ${styles['pos_11']}`}>09/24</span>
            <span className={`${styles['font']} ${styles['text_2']} ${styles['pos_8']}`}>Esaaa Warden</span>
            <span className={`${styles['text_3']} ${styles['pos_9']}`}>**** 5652 3356 3447</span>
            <img
              className={`shrink-0 ${styles['image_5']} ${styles['pos_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8a6b93d1c7a904ffe6ca22841ea76418.png"
            />
          </div>
        </div>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']} ${styles['pos_1']}`}>
          <img
            className={`${styles['image_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a84bbbefb25b82ccca78413dee9d9d87.png"
          />
        </div>
      </div>
    </div>
  );
}

Bank_Account_130_3017.defaultProps = { className: '' };