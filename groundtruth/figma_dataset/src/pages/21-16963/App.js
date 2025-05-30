import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Page_07_A_Doctors_21_16963(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start ${styles['section']}`}>
        <div className={`flex-col ${styles['section_2']}`}>
          <div className={`flex-row relative ${styles['group_1']}`}>
            <span className={`${styles['text']} ${styles['text_3']} ${styles['pos_3']}`}>Find Your Doctor</span>
            <img
              className={`${styles['image']} ${styles['pos']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=248d2b7bedb9b973e424151c0f038940.png"
            />
            <span className={`${styles['text']} ${styles['text_2']} ${styles['pos_2']}`}>Doctors</span>
          </div>
          <div className={`flex-row items-center ${styles['section_3']} ${styles['mt-23']}`}>
            <img
              className={`${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5108db2976e5877ee51241e68a65f92b.png"
            />
            <span className={`${styles['font']} ${styles['text_4']} ${styles['ml-11']}`}>Search...</span>
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['group']}`}>
        <span className={`self-end ${styles['font_2']} ${styles['text_5']} ${styles['text_6']}`}>See all</span>
        <div className={`flex-row items-center self-stretch ${styles['group_2']}`}>
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=110a7ccf57321d6dc2771e9d3807c893.png"
          />
          <img
            className={`${styles['image_3']} ${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2a6e23c824828f934d957df5187ce3cb.png"
          />
          <img
            className={`${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ed82e30498673170b96b7fc4135fb738.png"
          />
          <img
            className={`${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c1929e901bb94b815be7cb87d9cb7897.png"
          />
          <img
            className={`${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=302cd41efca68b52c69fbc8d57f7c64f.png"
          />
          <img
            className={`${styles['image_5']} ${styles['image_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=110188f7ac14cbabbe6ab99a39aef1d0.png"
          />
        </div>
        <div className={`flex-row justify-between items-center self-stretch ${styles['group_3']}`}>
          <div className={`flex-row items-center`}>
            <span className={`${styles['font_3']} ${styles['text']} ${styles['text_7']}`}>Sort by</span>
            <div className={`flex-col justify-start shrink-0 ${styles['text-wrapper']} ml-4`}>
              <span className={`${styles['font_4']} ${styles['text_8']}`}>A→Z </span>
            </div>
            <div className={`flex-col justify-start items-center shrink-0 ${styles['text-wrapper_2']} ml-4`}>
              <span className={`${styles['font_4']} ${styles['text_9']} ${styles['text_10']}`}>Filter </span>
            </div>
          </div>
          <span className={`${styles['font_2']} ${styles['text_5']} ${styles['text_11']}`}>Top Rating</span>
        </div>
        <div className={`flex-col self-stretch ${styles['list']}`}>
          {data.items.map((item, index) => (
            <div className={`flex-row items-center self-stretch relative ${styles['list-item']}`} key={index}>
              <img
                className={`shrink-0 ${styles['image_7']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6a248dd0f5d8a351413b98f635b37118.png"
              />
              <div className={`flex-col flex-1 ml-18`}>
                <span className={`self-start ${styles['font']} ${styles['text_9']}`}>Dr. Ava Williams, M.D.</span>
                <span className={`self-start ${styles['font_3']} ${styles['text_12']}`}>Maternal-Fetal Medicine</span>
                <div
                  className={`flex-row justify-between items-center self-stretch ${styles['group_4']} ${styles['view']}`}
                >
                  <img
                    className={`${styles['image_8']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3775d45d7bdb79620daf1a2b57105bab.png"
                  />
                  <div className={`flex-row items-center`}>
                    <img
                      className={`${styles['image_9']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=76dcfe945fcf5a0c335fb6ae1c116c96.png"
                    />
                    <img
                      className={`${styles['image_10']} ${styles['ml-13']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bacf92503bb2fd2f3a05fc96d34faec2.png"
                    />
                    <img
                      className={`${styles['image_11']} ${styles['ml-13']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=65b39f2b3b49c72c7d0addabc333041f.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`flex-col justify-start items-center relative ${styles['section_4']}`}>
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

Page_07_A_Doctors_21_16963.defaultProps = { className: '' };