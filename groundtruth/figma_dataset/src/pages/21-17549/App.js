import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Page_13_A_Pharmacy_21_17549(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col ${styles['section_2']}`}>
        <div className={`flex-row relative ${styles['group_16']}`}>
          <span className={`${styles['font']} ${styles['text_3']} ${styles['pos_3']}`}>Find Your Pharmacy</span>
          <img
            className={`${styles['image']} ${styles['pos']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=248d2b7bedb9b973e424151c0f038940.png"
          />
          <span className={`${styles['text']} ${styles['text_2']} ${styles['pos_2']}`}>Pharmacy</span>
        </div>
        <div className={`flex-row items-center ${styles['section_3']} mt-20`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5108db2976e5877ee51241e68a65f92b.png"
          />
          <span className={`${styles['text_4']} ${styles['text_5']} ${styles['ml-11']}`}>Search...</span>
        </div>
      </div>
      <div className={`flex-col ${styles['group']}`}>
        <div className={`flex-row items-center ${styles['group_2']}`}>
          <div className={`flex-row items-center`}>
            <span className={`${styles['font_2']} ${styles['text']} ${styles['text_6']}`}>Sort by</span>
            <div className={`flex-col justify-start items-center shrink-0 ${styles['text-wrapper']} ${styles['ml-1']}`}>
              <span className={`${styles['font_3']} ${styles['text_7']}`}>A→Z </span>
            </div>
          </div>
          <div className={`flex-row ${styles['ml-25']}`}>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']}`}>
              <span className={`${styles['font_3']} ${styles['text_8']} ${styles['text_9']}`}>Info</span>
            </div>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_3']} ${styles['ml-7']}`}>
              <span className={`${styles['font_3']} ${styles['text_8']} ${styles['text_10']}`}>Favorites</span>
            </div>
          </div>
        </div>
        <div className={`flex-col ${styles['list']}`}>
          {data.items.map((item, index) => (
            <div className={`flex-row items-center ${styles['list-item_1']}`} key={index}>
              <div className={`flex-col justify-start items-center shrink-0 ${styles['image-wrapper']}`}>
                <img
                  className={`${styles['image-wrapper']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=503aa8a60d8f0592f0341d980daf136d.png"
                />
              </div>
              <div className={`flex-col flex-1 ${styles['group_3']} ml-24`}>
                <div className={`flex-row items-start`}>
                  <div className={`flex-col flex-1`}>
                    <span className={`self-start ${styles['font']} ${styles['text']} ${styles['text_11']}`}>
                      MediCure Pharmacy
                    </span>
                    <div className={`flex-row self-stretch ${styles['group_4']}`}>
                      <span className={`${styles['font_2']} ${styles['text']}`}>Address:</span>
                      <span className={`${styles['font_2']} ${styles['text']} ${styles['ml-9']}`}>
                        778 Locust View Drive
                      </span>
                    </div>
                    <span className={`self-center ${styles['font_2']} ${styles['text']}`}>Oakland, CA</span>
                    <span className={`self-start ${styles['font_2']} ${styles['text']}`}>
                      schedule: 7:15 aM - 6:30 pM
                    </span>
                  </div>
                  <span className={`${styles['font_2']} ${styles['text']} ${styles['text_12']}`}>
                    <br />
                  </span>
                  <div className={`shrink-0 ${styles['section_4']}`}></div>
                  <img
                    className={`shrink-0 ${styles['image_3']} ${styles['image_4']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=90b2bd082f628a6068a8c3da56638d83.png"
                  />
                </div>
                <div className={`flex-row items-center relative ${styles['group_5']}`}>
                  <span className={`${styles['font_4']} ${styles['text_4']}`}>recommended</span>
                  <img
                    className={`${styles['image_5']} ${styles['ml-7']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5cc297b2beecc3a2664299e1e5fbb3e5.png"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`flex-col justify-start items-center ${styles['section_5']}`}>
        <div className={`flex-row`}>
          <img
            className={`${styles['equal-division-item_1']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=32163c36729e3e2856c83acb79fba34f.png"
          />
          <img
            className={`${styles['equal-division-item']} ${styles['ml-47']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9a8f0999b5f7fb7556db53ece297cd1e.png"
          />
          <img
            className={`${styles['equal-division-item_3']} ${styles['ml-47']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=290519311ed4a724f16dddc9ca2f8dfe.png"
          />
          <img
            className={`${styles['equal-division-item_4']} ${styles['ml-47']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f65f7d51325afa47cd073af5e08740dd.png"
          />
        </div>
      </div>
    </div>
  );
}

Page_13_A_Pharmacy_21_17549.defaultProps = { className: '' };