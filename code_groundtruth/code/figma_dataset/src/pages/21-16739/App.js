import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Page_07_D_Favorite_Doc(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col`}>
        <div className={`flex-col justify-start ${styles['section']}`}>
          <div className={`flex-row justify-center items-center relative ${styles['section_2']}`}>
            <img
              className={`${styles['image']} ${styles['pos']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=248d2b7bedb9b973e424151c0f038940.png"
            />
            <span className={`${styles['text']} ${styles['text_2']}`}>Favorite</span>
          </div>
        </div>
        <div className={`flex-col ${styles['group']}`}>
          <div className={`flex-row`}>
            <div className={`flex-row items-center`}>
              <span className={`${styles['font_2']} ${styles['text']} ${styles['text_5']}`}>Sort by</span>
              <div className={`flex-col justify-start shrink-0 ${styles['text-wrapper']} ${styles['ml-1']}`}>
                <span className={`${styles['font']} ${styles['text_6']}`}>A→Z </span>
              </div>
            </div>
            <span className={`self-start ${styles['font']} ${styles['text_3']} ${styles['text_4']} ${styles['ml-37']}`}>
              Filter{' '}
            </span>
          </div>
          <div className={`flex-row ${styles['mt-19']}`}>
            <div
              className={`flex-col justify-start items-center ${styles['equal-division-item']} ${styles['text-wrapper_2']}`}
            >
              <span className={`${styles['font_3']} ${styles['text_7']}`}>Doctors</span>
            </div>
            <div
              className={`ml-4 flex-col justify-start items-center ${styles['equal-division-item']} ${styles['text-wrapper_3']}`}
            >
              <span className={`${styles['font_3']} ${styles['text_8']}`}>Services</span>
            </div>
          </div>
          <div className={`flex-col ${styles['mt-19']}`}>
            {data.items.map((item, index) => (
              <div className={`flex-row ${styles['group_2']}`} key={index}>
                <img
                  className={`shrink-0 self-start ${styles['image_3']} ${styles['image_4']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2993bb20519d377bf0f0a6f5e250f4b1.png"
                />
                <div className={`flex-col flex-1 self-center`}>
                  <div className={`flex-row items-center self-stretch ${styles['group_3']}`}>
                    <img
                      className={`${styles['image_2']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ac525831d33754e5b1b41864a2dc55fc.png"
                    />
                    <span className={`${styles['font_4']} ${styles['ml-3']}`}>Professional Doctor</span>
                  </div>
                  <div className={`flex-row justify-between self-stretch ${styles['group_4']}`}>
                    <span className={`self-start ${styles['font_5']} ${styles['text_3']}`}>Dr. Ava Williams, M.D.</span>
                    <img
                      className={`self-center ${styles['image_5']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a78b5bb12b37b95d153ca59b4e24570e.png"
                    />
                  </div>
                  <span className={`self-start ${styles['font_2']} ${styles['text_9']}`}>Maternal-Fetal Medicine</span>
                  <div
                    className={`flex-col justify-start items-center self-stretch ${styles['text-wrapper_4']} ${styles['view']}`}
                  >
                    <span className={`${styles['font_6']}`}>Make Appointment</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`mt-38 flex-col justify-start items-center ${styles['section_3']}`}>
        <div className={`flex-row`}>
          <img
            className={`${styles['equal-division-item_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=32163c36729e3e2856c83acb79fba34f.png"
          />
          <img
            className={`${styles['equal-division-item_2']} ${styles['ml-47']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9a8f0999b5f7fb7556db53ece297cd1e.png"
          />
          <img
            className={`${styles['equal-division-item_2']} ${styles['ml-47']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=290519311ed4a724f16dddc9ca2f8dfe.png"
          />
          <img
            className={`${styles['equal-division-item_2']} ${styles['ml-47']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f65f7d51325afa47cd073af5e08740dd.png"
          />
        </div>
      </div>
    </div>
  );
}

Page_07_D_Favorite_Doc.defaultProps = { className: '' }; 