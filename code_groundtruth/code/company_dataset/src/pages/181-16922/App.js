import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Frame_1_181_16922(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col`}>
        {data.items.map((item, index) => (
          <div className={`flex-col ${styles['section']} ${styles['list-item']} mt-12`} key={index}>
            <div className={`flex-row justify-between items-baseline self-end ${styles['group']}`}>
              <span className={`${styles['font']} ${styles['text']}`}>猜你喜欢</span>
              <span className={`${styles['font_2']}`}>更多</span>
            </div>
            <div className={`flex-col self-stretch ${styles['mt-17-5']}`}>
              <div className={`flex-row justify-center relative ${styles['group_2']}`}>
                <img
                  className={`${styles['image']} ${styles['pos_2']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e5d83ee094c03260ae2a26a680a5e823.png"
                />
                <img
                  className={`${styles['image']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a539aa1969b1795708395bedac20ff45.png"
                />
              </div>
              <div className={`flex-row ${styles['equal-division']} mt-8`}>
                <div className={`flex-col ${styles['group_3']} ${styles['equal-division-item']}`}>
                  <span className={`${styles['font_3']}`}>同仁堂六味地黄丸</span>
                  <div className={`flex-row justify-center items-baseline ${styles['mt-9']}`}>
                    <span className={`${styles['font_4']}`}>¥28.0</span>
                    <span className={`${styles['font_5']} ${styles['ml-13']}`}>¥480.0</span>
                  </div>
                </div>
                <div className={`flex-col ${styles['group_3']} ${styles['group_1']}`}>
                  <span className={`${styles['font_3']}`}>同仁堂六味地黄丸</span>
                  <div className={`flex-row justify-center items-baseline ${styles['mt-9']}`}>
                    <span className={`${styles['font_4']}`}>¥28.0</span>
                    <span className={`${styles['font_5']} ${styles['ml-13']}`}>¥480.0</span>
                  </div>
                </div>
                <div className={`flex-col ${styles['group_3']} ${styles['equal-division-item']}`}>
                  <span className={`${styles['font_3']}`}>同仁堂六味地黄丸</span>
                  <div className={`flex-row justify-center items-baseline ${styles['mt-9']}`}>
                    <span className={`${styles['font_4']}`}>¥28.0</span>
                    <span className={`${styles['font_5']} ${styles['ml-13']}`}>¥480.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={`${styles['grid']}`}>
        <div className={`flex-row justify-center items-center ${styles['grid-item']}`}>
          <img
            className={`${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d6d17586718deb4339bf61e022fbec19.png"
          />
          <span className={`${styles['font_6']} ${styles['text_4']} ${styles['ml-7-5']}`}>商品类别</span>
        </div>
        <div className={`flex-row justify-center items-center ${styles['grid-item_2']}`}>
          <img
            className={`${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=64add5bb7092e5f879b53cec9a034abd.png"
          />
          <span className={`${styles['font_6']} ${styles['text_5']} ${styles['ml-7']}`}>联系药店</span>
        </div>
      </div>
    </div>
  );
}

Frame_1_181_16922.defaultProps = { className: '' };