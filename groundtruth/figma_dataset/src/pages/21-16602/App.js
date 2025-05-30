import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Page_07_F_Favorite_Female_Doc_21_16602(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start ${styles['section']}`}>
        <div className={`flex-row justify-center relative ${styles['section_2']}`}>
          <img
            className={`${styles['image']} ${styles['pos']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=248d2b7bedb9b973e424151c0f038940.png"
          />
          <span className={`${styles['text']} ${styles['text_2']}`}>Female</span>
        </div>
      </div>
      <div className={`flex-col ${styles['group']}`}>
        <div className={`flex-row items-center`}>
          <span className={`${styles['font']} ${styles['text']} ${styles['text_3']}`}>Sort by</span>
          <div className={`flex-col justify-start ${styles['text-wrapper']} ml-4`}>
            <span className={`${styles['font_2']} ${styles['text_4']}`}>A→Z </span>
          </div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']} ml-4`}>
            <span className={`${styles['font_2']} ${styles['text_5']} ${styles['text_6']}`}>Filter </span>
          </div>
        </div>
        <div className={`flex-col ${styles['list']} ${styles['mt-23']}`}>
          {data.items.map((item, index) => (
            <div className={`flex-row self-stretch relative ${styles['group_2']}`} key={index}>
              <div className={`flex-row items-center flex-1 self-center`}>
                <img
                  className={`shrink-0 ${styles['image_3']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=08f4a7e0761ec45256761fc69ede823c.png"
                />
                <div className={`flex-col flex-1 ${styles['ml-11']}`}>
                  <div className={`flex-row items-center self-stretch`}>
                    <img
                      className={`${styles['image_2']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=62cead857cdc136caf252dc6e23c606e.png"
                    />
                    <span className={`${styles['font_3']} ${styles['ml-3']}`}>Professional Doctor</span>
                  </div>
                  <span className={`self-stretch ${styles['font_4']} ${styles['text_5']} ${styles['text_7']}`}>
                    Dr. Ava Williams, M.D.
                  </span>
                  <span className={`self-start ${styles['font_5']} ${styles['text_8']}`}>Maternal-Fetal Medicine</span>
                  <img
                    className={`self-start ${styles['image_4']} ${styles['image_5']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3775d45d7bdb79620daf1a2b57105bab.png"
                  />
                </div>
              </div>
              <div className={`flex-row items-center shrink-0 self-start ${styles['group_3']} ml-2`}>
                <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
                  <img
                    className={`${styles['image_6']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=76dcfe945fcf5a0c335fb6ae1c116c96.png"
                  />
                </div>
                <div className={`flex-col justify-start items-center ${styles['image-wrapper']} ml-10`}>
                  <img
                    className={`${styles['image_7']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bacf92503bb2fd2f3a05fc96d34faec2.png"
                  />
                </div>
                <div className={`flex-col justify-start items-center ${styles['image-wrapper']} ml-10`}>
                  <img
                    className={`${styles['image_8']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=65b39f2b3b49c72c7d0addabc333041f.png"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`flex-col justify-start relative ${styles['group_12']}`}>
        <div className={`flex-col justify-start items-center ${styles['section_3']}`}>
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
    </div>
  );
}

Page_07_F_Favorite_Female_Doc_21_16602.defaultProps = { className: '' };