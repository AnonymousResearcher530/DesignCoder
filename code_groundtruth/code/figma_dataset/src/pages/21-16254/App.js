import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Page_06_C_Derma_Doc_21_16254(props) {
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
            <span className={`${styles['text']} ${styles['text_2']}`}>Dermatology</span>
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
      <div className={`flex-col relative ${styles['group_13']}`}>
        <div className={`flex-row justify-between items-center self-stretch ${styles['group']}`}>
          <div className={`flex-row items-center`}>
            <span className={`${styles['text']} ${styles['text_5']}`}>Sort by</span>
            <div className={`flex-col justify-start shrink-0 ${styles['text-wrapper']} ml-4`}>
              <span className={`${styles['font_2']} ${styles['text_6']}`}>A→Z </span>
            </div>
            <div className={`flex-col justify-start items-center shrink-0 ${styles['text-wrapper_2']} ml-4`}>
              <span className={`${styles['font_2']} ${styles['text_7']} ${styles['text_8']}`}>Filter </span>
            </div>
          </div>
          <span className={`${styles['text_9']}`}>See all</span>
        </div>
        <div className={`self-center ${styles['divider']}`}></div>
        <div className={`self-center ${styles['divider_2']} ${styles['view_1']}`}></div>
        <div className={`self-center ${styles['divider_3']}`}></div>
        <div className={`self-center ${styles['divider_2']} ${styles['view_3']}`}></div>
        <div className={`flex-col ${styles['pos_2']}`}>
          <div className={`flex-row justify-center ${styles['group_2']}`}>
            <div className={`flex-col justify-start items-start self-center ${styles['image-wrapper']}`}>
              <img
                className={`shrink-0 ${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=18995d0d5a99c663422cc39408959b34.png"
              />
            </div>
            <div className={`flex-col self-start ${styles['group_3']} ml-12`}>
              <span className={`self-start ${styles['font_3']} ${styles['text_7']} ${styles['text_10']}`}>
                Dr. Hannah Lewis, M.D.
              </span>
              <span className={`self-start ${styles['font_4']} ${styles['text_12']}`}>Dermatopathology</span>
              <div className={`flex-row items-center self-stretch ${styles['view']}`}>
                <span className={`${styles['font_2']} ${styles['text_7']}`}>Info</span>
                <div className={`flex-row items-center shrink-0 ml-78`}>
                  <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']}`}>
                    <img
                      className={`${styles['image_4']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=76dcfe945fcf5a0c335fb6ae1c116c96.png"
                    />
                  </div>
                  <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']} ml-10`}>
                    <img
                      className={`${styles['image_5']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bacf92503bb2fd2f3a05fc96d34faec2.png"
                    />
                  </div>
                  <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']} ml-10`}>
                    <img
                      className={`${styles['image_6']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f12c50c740e4c4ecf232df1a4f81e30e.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`flex-row justify-center ${styles['group_5']}`}>
            <img
              className={`self-center ${styles['image_7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=23720b9f7481549448540fdcd6958425.png"
            />
            <div className={`flex-col self-start ${styles['group_6']} ${styles['ml-11']}`}>
              <div className={`flex-col items-start`}>
                <span className={`${styles['font_3']} ${styles['text_7']} ${styles['text_13']}`}>
                  Dr. Jacob Lopez, M.D.
                </span>
                <span className={`${styles['font_4']} ${styles['text_14']} ${styles['mt-7']}`}>
                  Surgical Dermatology
                </span>
              </div>
              <div className={`flex-row items-center ${styles['group_1']} mt-18`}>
                <span className={`${styles['font_2']} ${styles['text_7']}`}>Info</span>
                <div className={`flex-row items-center shrink-0 ml-78`}>
                  <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']}`}>
                    <img
                      className={`${styles['image_4']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=76dcfe945fcf5a0c335fb6ae1c116c96.png"
                    />
                  </div>
                  <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']} ml-10`}>
                    <img
                      className={`${styles['image_5']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bacf92503bb2fd2f3a05fc96d34faec2.png"
                    />
                  </div>
                  <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']} ml-10`}>
                    <img
                      className={`${styles['image_6']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f12c50c740e4c4ecf232df1a4f81e30e.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`flex-row justify-center items-center ${styles['group_12']}`}>
            <img
              className={`${styles['image_7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a1eff1546b127240f159b72704fe5e28.png"
            />
            <div className={`flex-col ${styles['ml-11']}`}>
              <span className={`self-start ${styles['font_3']} ${styles['text_7']} ${styles['text_15']}`}>
                Dr. Lucy Perez, Ph.D.
              </span>
              <span className={`self-start ${styles['font_4']} ${styles['text_16']}`}>Clinical Dermatology</span>
              <div className={`flex-row items-center self-stretch ${styles['view_2']}`}>
                <span className={`${styles['font_2']} ${styles['text_7']}`}>Info</span>
                <div className={`flex-row items-center shrink-0 ml-78`}>
                  <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']}`}>
                    <img
                      className={`${styles['image_4']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=76dcfe945fcf5a0c335fb6ae1c116c96.png"
                    />
                  </div>
                  <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']} ml-10`}>
                    <img
                      className={`${styles['image_5']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bacf92503bb2fd2f3a05fc96d34faec2.png"
                    />
                  </div>
                  <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']} ml-10`}>
                    <img
                      className={`${styles['image_6']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f12c50c740e4c4ecf232df1a4f81e30e.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`flex-col justify-start ${styles['group_7']}`}>
            <div className={`flex-row justify-center`}>
              <img
                className={`${styles['image_7']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7c6411c1a46f5a5d358ae74f6dda7b85.png"
              />
              <div className={`flex-col items-start self-start ${styles['group_8']} ml-12`}>
                <span className={`${styles['font_3']} ${styles['text_7']} ${styles['text_17']}`}>
                  Dr. Logan Williams, M.D.
                </span>
                <span className={`${styles['font_4']} ${styles['text_18']} mt-8`}>Dermatology</span>
              </div>
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

Page_06_C_Derma_Doc_21_16254.defaultProps = { className: '' };