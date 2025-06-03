import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function High_Fidelity_Home_(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center ${styles['group']}`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8a34e4c288c050dc3d39dcc1312f73d8.png"
        />
        <div className={`flex-row ${styles['group_2']}`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5c53b4dc5c32c57af3b342e6350fc483.png"
          />
          <img
            className={`${styles['image_3']} ${styles['ml-5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e5593f8f8ba453d4c0791db6548dfd94.png"
          />
          <img
            className={`${styles['image_4']} ${styles['ml-5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8a97e0b71b412f76dee3712b77e0cfda.png"
          />
        </div>
      </div>
      <div className={`mt-38 flex-col ${styles['group_3']}`}>
        <div className={`flex-col ${styles['group_4']}`}>
          <div className={`flex-row justify-between items-center`}>
            <div className={`flex-col items-start`}>
              <span className={`${styles['font']} ${styles['text']}`}>Hello, Welcome 👋</span>
              <span className={`${styles['text_2']} ${styles['mt-11']}`}>Albert Stevano</span>
            </div>
            <img
              className={`${styles['image_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c7fbada82561968b1cbd045236237bf0.png"
            />
          </div>
          <div className={`flex-row ${styles['group_5']}`}>
            <div className={`flex-row items-center flex-1 ${styles['group_6']}`}>
              <img
                className={`${styles['image_7']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=47645f89c4b59f9066c4b8f5e8fa636d.png"
              />
              <span className={`${styles['text_3']} ${styles['ml-9']}`}>Search clothes. . . </span>
            </div>
            <img
              className={`ml-16 shrink-0 ${styles['image_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3d61db33aab6152500c18989bac225ff.png"
            />
          </div>
          <div className={`flex-col ${styles['group_7']}`}>
            <div className={`flex-row ${styles['group_8']}`}>
              <div className={`flex-row items-center shrink-0 ${styles['section']}`}>
                <img
                  className={`shrink-0 ${styles['image_9']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=debc9faf0e2945f6001facb93c853c53.png"
                />
                <span className={`ml-4 ${styles['font']} ${styles['text_4']}`}>All Items</span>
              </div>
              <div className={`flex-row items-center shrink-0 ${styles['group_9']} ${styles['ml-15']}`}>
                <img
                  className={`shrink-0 ${styles['image_7']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=18724753d195c6d1bcce71e6bbe7ce5b.png"
                />
                <span className={`${styles['font']} ${styles['text_5']} ${styles['ml-3']}`}>Dress</span>
              </div>
              <div className={`flex-row items-center shrink-0 ${styles['group_10']} ${styles['ml-15']}`}>
                <img
                  className={`shrink-0 ${styles['image_7']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=54dec1f496c22d81285208983812d2f7.png"
                />
                <span className={`ml-2 ${styles['font']} ${styles['text_6']}`}>T-Shirt</span>
              </div>
              <img
                className={`shrink-0 ${styles['image_8']} ${styles['ml-15']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=34454706d33e4749b3b0f4c148d19a74.png"
              />
            </div>
            <div className={`mt-24 flex-col`}>
              <div className={`flex-col justify-start relative ${styles['group_11']}`}>
                <div className={`flex-row justify-center`}>
                  <div className={`flex-col ${styles['equal-division-item']}`}>
                    <div className={`flex-col justify-start items-end self-stretch ${styles['image-wrapper']}`}>
                      <img
                        className={`shrink-0 ${styles['image_10']}`}
                        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2825714ee72e5cd00ab1ccb646bacd1f.png"
                      />
                    </div>
                    <span className={`self-start ${styles['font_2']} ${styles['text_7']} ${styles['mt-11']}`}>
                      Modern Light Clothes
                    </span>
                    <span className={`self-start ${styles['font_3']} ${styles['text_8']} ${styles['mt-11']}`}>
                      T-Shirt
                    </span>
                  </div>
                  <div
                    className={`ml-18 flex-col justify-start items-end ${styles['equal-division-item_2']} ${styles['image-wrapper_2']}`}
                  >
                    <img
                      className={`shrink-0 ${styles['image_10']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=404ded395885aff1fd046a9f0fee9308.png"
                    />
                  </div>
                </div>
                <span className={`${styles['font_2']} ${styles['text_9']} ${styles['pos']}`}>Light Dress Bless</span>
              </div>
              <div className={`flex-row items-end`}>
                <div className={`flex-row items-center`}>
                  <span className={`${styles['font_4']}`}>$212.99</span>
                  <div className={`flex-row items-center shrink-0 ${styles['ml-23']}`}>
                    <img
                      className={`shrink-0 ${styles['image_11']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=828444613b70f72db00a07231cc6e2e6.png"
                    />
                    <span className={`${styles['font']} ${styles['ml-5']}`}>5.0</span>
                  </div>
                </div>
                <span className={`ml-62 ${styles['font_3']} ${styles['text_10']}`}>Dress modern</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`mt-16 flex-row justify-end items-center relative ${styles['group_12']}`}>
          <span className={`${styles['font_4']} ${styles['text_11']}`}>$162.99</span>
          <img
            className={`${styles['image_11']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=828444613b70f72db00a07231cc6e2e6.png"
          />
          <div className={`flex-col justify-start items-end ${styles['group_13']} ${styles['pos_2']}`}>
            <span className={`${styles['font']} ${styles['text_12']}`}>5.0</span>
            <div className={`flex-row items-start ${styles['group_4']} ${styles['pos_3']}`}>
              <div className={`flex-col justify-start items-end ${styles['image-wrapper_4']}`}>
                <img
                  className={`shrink-0 ${styles['image_10']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2825714ee72e5cd00ab1ccb646bacd1f.png"
                />
              </div>
              <div className={`flex-col justify-start items-start ${styles['group_14']}`}>
                <div className={`flex-col justify-start items-end relative ${styles['image-wrapper_3']}`}>
                  <img
                    className={`${styles['image_10']} ${styles['image_12']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2825714ee72e5cd00ab1ccb646bacd1f.png"
                  />
                </div>
              </div>
              <div className={`shrink-0 ${styles['section_2']} ${styles['pos_4']}`}></div>
              <div className={`shrink-0 ${styles['section_4']} ${styles['pos_6']}`}></div>
              <div className={`flex-col justify-start shrink-0 ${styles['section_3']} ${styles['pos_5']}`}>
                <div className={`flex-row justify-between ${styles['equal-division']}`}>
                  <img
                    className={`${styles['equal-division-item_3']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=747a674d1d34a51daac1af8247ea04f5.png"
                  />
                  <img
                    className={`${styles['equal-division-item_3']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0ea49cab8a013588326a2d6d781f8e0b.png"
                  />
                  <img
                    className={`${styles['equal-division-item_3']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a992102659b1b94566f9305bfd220457.png"
                  />
                  <img
                    className={`${styles['equal-division-item_3']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2a26c37b1a12b1e2df1fb001c381ca8c.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

High_Fidelity_Home_.defaultProps = { className: '' };