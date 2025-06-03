import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Page_06_B_Cardiology_Doc_21_16309(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start ${styles['section']}`}>
        <div className={`flex-col ${styles['section_2']}`}>
          <div className={`flex-row justify-center items-center self-stretch relative`}>
            <img
              className={`${styles['image']} ${styles['pos']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=248d2b7bedb9b973e424151c0f038940.png"
            />
            <span className={`${styles['text']} ${styles['text_2']}`}>Cardiology</span>
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
      <div className={`flex-col ${styles['group_2']}`}>
        <div className={`flex-row justify-between items-center ${styles['group_3']}`}>
          <div className={`flex-row items-center`}>
            <span className={`${styles['font_2']} ${styles['text']} ${styles['text_5']}`}>Sort by</span>
            <div className={`flex-col justify-start shrink-0 ${styles['text-wrapper']} ml-4`}>
              <span className={`${styles['font_3']} ${styles['text_6']}`}>A→Z </span>
            </div>
            <div className={`flex-col justify-start items-center shrink-0 ${styles['text-wrapper_2']} ml-4`}>
              <span className={`${styles['font_3']} ${styles['text_7']} ${styles['text_8']}`}>Filter </span>
            </div>
          </div>
          <span className={`${styles['text_9']}`}>See all</span>
        </div>
        <div className={`flex-col`}>
          <div className={`flex-row ${styles['group_4']}`}>
            <div className={`flex-col justify-start items-start shrink-0 self-center ${styles['group_5']}`}>
              <div className={`flex-col justify-start items-center relative ${styles['image-wrapper']}`}>
                <img
                  className={`${styles['image_3']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f62a2e6bcab20c741beb928a2d35ecbc.png"
                />
              </div>
            </div>
            <div className={`flex-col flex-1 self-start ${styles['group_6']} ml-10`}>
              <span className={`self-start ${styles['font_4']} ${styles['text_7']}`}>Dr. Daniel Rodriguez</span>
              <span className={`self-start ${styles['font_2']} ${styles['text_10']}`}>Interventional Cardiologist</span>
              <div className={`flex-row justify-between items-center self-stretch ${styles['group_16']}`}>
                <img
                  className={`${styles['image_4']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3775d45d7bdb79620daf1a2b57105bab.png"
                />
                <div className={`flex-row items-center`}>
                  <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']}`}>
                    <img
                      className={`${styles['image_5']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=76dcfe945fcf5a0c335fb6ae1c116c96.png"
                    />
                  </div>
                  <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']} ml-10`}>
                    <img
                      className={`${styles['image_6']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bacf92503bb2fd2f3a05fc96d34faec2.png"
                    />
                  </div>
                  <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']} ml-10`}>
                    <img
                      className={`${styles['image_7']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=65b39f2b3b49c72c7d0addabc333041f.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`flex-row ${styles['group_8']}`}>
            <img
              className={`self-center ${styles['image_8']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=aa066ba94afd4d0543b5009432c8d862.png"
            />
            <div className={`flex-col flex-1 self-start ${styles['group_9']} ${styles['ml-17']}`}>
              <div className={`flex-col items-start`}>
                <span className={`${styles['font']} ${styles['text_7']} ${styles['text_11']}`}>
                  Dr. Jessica Ramirez
                </span>
                <span className={`${styles['font_2']} mt-10`}> Electrophysiologist</span>
              </div>
              <div className={`flex-row justify-between items-center ${styles['group_10']} mt-18`}>
                <img
                  className={`${styles['image_4']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3775d45d7bdb79620daf1a2b57105bab.png"
                />
                <div className={`flex-row items-center`}>
                  <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']}`}>
                    <img
                      className={`${styles['image_5']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=76dcfe945fcf5a0c335fb6ae1c116c96.png"
                    />
                  </div>
                  <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']} ml-10`}>
                    <img
                      className={`${styles['image_6']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bacf92503bb2fd2f3a05fc96d34faec2.png"
                    />
                  </div>
                  <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']} ml-10`}>
                    <img
                      className={`${styles['image_7']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f12c50c740e4c4ecf232df1a4f81e30e.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`flex-row items-center ${styles['group_11']}`}>
            <img
              className={`shrink-0 ${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b69d356e5672173fb08053d470bd0ebb.png"
            />
            <div className={`flex-col flex-1 ${styles['group_1']} ${styles['ml-13']}`}>
              <span className={`self-start ${styles['font_4']} ${styles['text_7']}`}>Dr. Michael Chang</span>
              <span className={`self-start ${styles['font_2']} ${styles['text_12']}`}>Cardiac Imaging Specialist</span>
              <div className={`flex-row justify-between items-center self-stretch ${styles['group_15']}`}>
                <img
                  className={`${styles['image_4']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3775d45d7bdb79620daf1a2b57105bab.png"
                />
                <div className={`flex-row items-center`}>
                  <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']}`}>
                    <img
                      className={`${styles['image_5']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=76dcfe945fcf5a0c335fb6ae1c116c96.png"
                    />
                  </div>
                  <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']} ml-10`}>
                    <img
                      className={`${styles['image_6']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bacf92503bb2fd2f3a05fc96d34faec2.png"
                    />
                  </div>
                  <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']} ml-10`}>
                    <img
                      className={`${styles['image_7']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f12c50c740e4c4ecf232df1a4f81e30e.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`flex-row ${styles['group_12']}`}>
            <img
              className={`shrink-0 ${styles['image_8']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e2d200b1d760c26d0b0f72324f22cd14.png"
            />
            <div className={`flex-col items-start flex-1 self-start ${styles['group_13']} ${styles['ml-13']}`}>
              <span className={`${styles['font']} ${styles['text_7']} ${styles['text_13']}`}>
                Dr. Michael Davidson, M.D.
              </span>
              <span className={`${styles['font_2']} ${styles['mt-5']}`}>Cardiology</span>
            </div>
          </div>
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

Page_06_B_Cardiology_Doc_21_16309.defaultProps = { className: '' };