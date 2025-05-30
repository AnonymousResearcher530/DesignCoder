import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Page_06_D_Gen_Doc_21_16199(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start ${styles['section']}`}>
        <div className={`flex-col ${styles['section_2']}`}>
          <div className={`flex-row justify-center self-stretch relative`}>
            <img
              className={`${styles['image']} ${styles['pos']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=248d2b7bedb9b973e424151c0f038940.png"
            />
            <span className={`${styles['text']} ${styles['text_2']}`}>General Medicine</span>
          </div>
          <span className={`self-center ${styles['font']} ${styles['text']} ${styles['text_3']}`}>
            Find Your Doctor
          </span>
          <div className={`flex-row items-center self-stretch ${styles['section_3']}`}>
            <img
              className={`${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5108db2976e5877ee51241e68a65f92b.png"
            />
            <span className={`${styles['font']} ${styles['text_4']} ${styles['ml-11']}`}>Search...</span>
          </div>
        </div>
      </div>
      <div className={`mt-26 flex-col ${styles['group']}`}>
        <div className={`flex-col ${styles['group_2']}`}>
          <div className={`flex-row justify-between items-center ${styles['group_3']}`}>
            <div className={`flex-row items-center`}>
              <span className={`${styles['text']} ${styles['text_5']}`}>Sort by</span>
              <div className={`flex-col justify-start shrink-0 ${styles['text-wrapper']}`}>
                <span className={`${styles['font_2']} ${styles['text_6']}`}>A→Z </span>
              </div>
              <div className={`flex-col justify-start items-center shrink-0 ${styles['text-wrapper_2']}`}>
                <span className={`${styles['font_2']} ${styles['text_7']} ${styles['text_8']}`}>Filter </span>
              </div>
            </div>
            <span className={`${styles['text_9']}`}>See all</span>
          </div>
          <div className={`flex-col`}>
            {data.items.map((item, index) => (
              <div className={`flex-row ${styles['list-item']}`} key={index}>
                <img
                  className={`self-center ${styles['image_3']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0f3c6f2e81556db7755a5763c4888eac.png"
                />
                <div className={`ml-12 flex-col flex-1 self-start ${styles['group_4']}`}>
                  <span className={`self-start ${styles['font_3']} ${styles['text_7']} ${styles['text_10']}`}>
                    Dr. Emma Hall, M.D.
                  </span>
                  <span className={`self-start ${styles['font_4']} ${styles['text_11']}`}>General Doctor</span>
                  <div
                    className={`flex-row justify-between items-center self-stretch ${styles['group_5']} ${styles['view']}`}
                  >
                    <span className={`${styles['font_2']} ${styles['text_7']} ${styles['text_12']}`}>Info</span>
                    <div className={`flex-row items-center`}>
                      <img
                        className={`${styles['image_4']}`}
                        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=76dcfe945fcf5a0c335fb6ae1c116c96.png"
                      />
                      <img
                        className={`${styles['image_5']} ${styles['ml-13']}`}
                        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bacf92503bb2fd2f3a05fc96d34faec2.png"
                      />
                      <img
                        className={`${styles['image_6']} ${styles['ml-13']}`}
                        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=65b39f2b3b49c72c7d0addabc333041f.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={`flex-row ${styles['group_7']}`}>
            <img
              className={`shrink-0 ${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0cf651e179b178a98b0699eef430ac46.png"
            />
            <div className={`ml-12 flex-col items-start flex-1 self-start ${styles['group_8']}`}>
              <span className={`${styles['font_3']} ${styles['text_7']} ${styles['text_16']}`}>
                Dr. Thomas Rivera, M.D.
              </span>
              <span className={`${styles['font_4']} ${styles['text_17']} ${styles['mt-9']}`}>General Doctor</span>
            </div>
          </div>
        </div>
        <div className={`flex-col justify-start items-center relative ${styles['section_4']}`}>
          <div className={`flex-row`}>
            <img
              className={`${styles['equal-division-item']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=32163c36729e3e2856c83acb79fba34f.png"
            />
            <img
              className={`${styles['equal-division-item']} ${styles['ml-47']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9a8f0999b5f7fb7556db53ece297cd1e.png"
            />
            <img
              className={`${styles['equal-division-item']} ${styles['ml-47']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=290519311ed4a724f16dddc9ca2f8dfe.png"
            />
            <img
              className={`${styles['equal-division-item']} ${styles['ml-47']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f65f7d51325afa47cd073af5e08740dd.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Page_06_D_Gen_Doc_21_16199.defaultProps = { className: '' };