import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Upcoming_Bills_130_2758(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col justify-start relative ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center ${styles['section']}`}>
        <span className={`${styles['font_2']} ${styles['text_3']}`}>My Balance</span>
        <span className={`${styles['font_2']} ${styles['text_5']}`}>Transactions</span>
      </div>
      <div className={`flex-row justify-between ${styles['pos']}`}>
        <div className={`flex-row items-center`}>
          <img
            className={`shrink-0 ${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ac04c37f194864ffc45b6a9f32d16c00.png"
          />
          <div className={`${styles['group']} ml-10`}>
            <span className={`${styles['font']} ${styles['text']}`}>Hi,</span>
            <span className={`${styles['font']} ${styles['text_2']}`}> Esaaa!</span>
          </div>
        </div>
        <div className={`flex-row`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e5fb304b47bdb3629f97f730dcb3ef7a.png"
          />
          <img
            className={`${styles['image_2']} ${styles['ml-5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ccc622cdda9058607e8d2f2116c41264.png"
          />
        </div>
      </div>
      <span className={`${styles['font_2']} ${styles['text_4']} ${styles['pos_2']}`}>Upcoming Bills </span>
      <div className={`flex-row items-end ${styles['pos_3']}`}>
        <span className={`flex-1 ${styles['text_6']}`}>Upcoming Bills</span>
        <img
          className={`shrink-0 ${styles['image_3']} ${styles['ml-3']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=64971895704b4a4c61100ae41f483232.png"
        />
        <img
          className={`shrink-0 ${styles['image_3']} ${styles['ml-3']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f967db36e212312bbfc76e67e6801500.png"
        />
        <img
          className={`shrink-0 ${styles['image_3']} ${styles['ml-3']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8a97170185a940dfd76fcf4e4c4e137a.png"
        />
      </div>
      <div className={`flex-col justify-start ${styles['pos_4']}`}>
        <div className={`${styles['section_1']}`}></div>
        <div className={`flex-col justify-start items-center ${styles['text-wrapper_1']} ${styles['pos_11']}`}>
          <span className={`${styles['font_6']} ${styles['text_1']}`}>Pay now</span>
        </div>
        <img
          className={`${styles['image_4']} ${styles['pos_5']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fca903ab40406ce479da89f812d6f3fe.png"
        />
        <span className={`${styles['font_3']} ${styles['pos_6']}`}>Adobe XD</span>
        <span className={`${styles['font_5']} ${styles['text_8']} ${styles['pos_9']}`}>1 month</span>
        <span className={`${styles['font_5']} ${styles['text_7']} ${styles['pos_8']}`}>Aug 19, 2023</span>
        <span className={`${styles['font_5']} ${styles['text_9']} ${styles['pos_10']}`}>Subscriptions</span>
        <span className={`${styles['font_4']} ${styles['pos_7']}`}>$126.02</span>
      </div>
      <div className={`flex-col justify-start ${styles['pos_12']}`}>
        <div className={`${styles['section_1']}`}></div>
        <img
          className={`${styles['image_4']} ${styles['pos_13']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d234421a2aae4d85306a7747111b4c30.png"
        />
        <span className={`${styles['font_3']} ${styles['pos_14']}`}>Netflix</span>
        <div className={`flex-col justify-start items-center ${styles['text-wrapper']} ${styles['pos_19']}`}>
          <span className={`${styles['font_6']} ${styles['text_10']}`}>Pay now</span>
        </div>
        <span className={`${styles['font_5']} ${styles['text_12']} ${styles['pos_17']}`}>1 years</span>
        <span className={`${styles['font_5']} ${styles['text_11']} ${styles['pos_16']}`}>Jul 08, 2023</span>
        <span className={`${styles['font_5']} ${styles['text_13']} ${styles['pos_18']}`}>Subscriptions</span>
        <span className={`${styles['font_4']} ${styles['pos_15']}`}>$932.53</span>
      </div>
      <div className={`flex-col justify-start ${styles['pos_20']}`}>
        <div className={`${styles['group_3']}`}></div>
        <img
          className={`${styles['image_4']} ${styles['pos_21']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5717afe85f8f811d421866a002f6ae94.png"
        />
        <span className={`${styles['font_4']} ${styles['text_14']} ${styles['pos_23']}`}>Line Messenger</span>
        <span className={`${styles['font_4']} ${styles['pos_22']}`}>$21.00</span>
      </div>
      <div className={`flex-col justify-start items-center ${styles['section_2']} ${styles['pos_24']}`}>
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
    </div>
  );
}

Upcoming_Bills_130_2758.defaultProps = { className: '' };