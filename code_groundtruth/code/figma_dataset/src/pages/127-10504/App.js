import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Utama_127_10504(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row self-start ${styles['group_12']}`}>
        <div className={`flex-col justify-start items-center shrink-0 ${styles['text-wrapper']}`}>
          <span className={`${styles['font']} ${styles['text_2']}`}>All</span>
        </div>
        <span className={`self-start ${styles['font_2']} ${styles['text_3']}`}>House</span>
        <span className={`self-start ${styles['font_2']} ${styles['text_4']}`}>Connect</span>
      </div>
      <div className={`flex-row justify-between items-end self-start relative ${styles['group_11']}`}>
        <span className={`${styles['text']}`}>Teman</span>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=de20b4abd06abb6ec2437a9553cded8e.png"
        />
      </div>
      <div className={`flex-col self-stretch ${styles['section_2']}`}>
        <div className={`flex-col`}>
          <span className={`self-start ${styles['font_3']} ${styles['text_5']}`}>Online (2)</span>
          <div className={`flex-row items-center self-stretch ${styles['mt-33']}`}>
            <div className={`flex-col items-center`}>
              <img
                className={`${styles['image_2']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d28dabf79007b4f5370e402e98db196b.png"
              />
              <img
                className={`${styles['image_2']} mt-16`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d28dabf79007b4f5370e402e98db196b.png"
              />
            </div>
            <div className={`flex-col ${styles['ml-29']}`}>
              <div className={`flex-col items-start`}>
                <span className={`${styles['font_4']} ${styles['text_6']}`}>Zaker nighto kun</span>
                <span className={`${styles['font_5']} mt-8`}>Play Fornite </span>
              </div>
              <div className={`flex-col items-start ${styles['mt-31']}`}>
                <span className={`${styles['font_4']} ${styles['text_7']}`}>Zaker nighto kun</span>
                <span className={`${styles['font_5']} ${styles['text_1']} mt-8`}>Play Fornite </span>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex-col ${styles['mt-45']}`}>
          <span className={`self-start ${styles['font_3']} ${styles['text_8']}`}>Group House</span>
          <div className={`flex-row items-center self-stretch ${styles['mt-21']}`}>
            <div className={`flex-col`}>
              <div className={`flex-row ${styles['section_3']}`}>
                <div className={`flex-col justify-start items-start relative ${styles['group_3']}`}>
                  <img
                    className={`${styles['image_3']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2df4db0bf3d772f6a29f79dc46a08f3d.png"
                  />
                  <img
                    className={`${styles['image_3']} ${styles['pos_2']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2df4db0bf3d772f6a29f79dc46a08f3d.png"
                  />
                </div>
                <span className={`self-start ${styles['font']} ${styles['text_9']} ml-8`}>+5</span>
              </div>
              <div className={`flex-row ${styles['section_3']} mt-24`}>
                <div className={`flex-col justify-start items-start relative ${styles['group_3']}`}>
                  <img
                    className={`${styles['image_3']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2df4db0bf3d772f6a29f79dc46a08f3d.png"
                  />
                  <img
                    className={`${styles['image_3']} ${styles['pos_3']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2df4db0bf3d772f6a29f79dc46a08f3d.png"
                  />
                </div>
                <span className={`self-start ${styles['font']} ${styles['text_9']} ml-8`}>+5</span>
              </div>
            </div>
            <div className={`flex-col flex-1 ${styles['ml-37']}`}>
              <div className={`flex-col items-start`}>
                <span className={`${styles['font_4']}`}>Asolele Group</span>
                <span className={`${styles['font_6']} ${styles['text_10']} ${styles['mt-15']}`}>Play Fornite</span>
              </div>
              <div className={`flex-col items-start ${styles['mt-43']}`}>
                <span className={`${styles['font_4']}`}>Asolele Group</span>
                <span className={`${styles['font_6']} ${styles['text_11']} ${styles['mt-15']}`}>Play Fornite</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex-col ${styles['mt-45']}`}>
          <span className={`self-start ${styles['font_3']} ${styles['text_20']}`}>Request Connect</span>
          <div className={`flex-col self-stretch ${styles['mt-21']}`}>
            <div className={`flex-row justify-between items-center`}>
              <div className={`flex-row items-center`}>
                <img
                  className={`${styles['image_3']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a093afe141fa361cadcc362343dbfbf3.png"
                />
                <div className={`flex-col items-start ml-34`}>
                  <span className={`${styles['font_7']}`}>Zakerrrr</span>
                  <span className={`${styles['font_5']} ${styles['text_12']} mt-16`}>@zakerr</span>
                </div>
              </div>
              <img
                className={`${styles['image_4']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=cd598348b4d02b5bd41c7548a5d91d68.png"
              />
            </div>
            <div className={`flex-row ${styles['group_1']} mt-18`}>
              <img
                className={`${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a093afe141fa361cadcc362343dbfbf3.png"
              />
              <span className={`self-start ${styles['font_7']} ${styles['text_13']} ml-34`}>Zakerrrr</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-row ${styles['equal-division']} ${styles['section_4']}`}>
        <div className={`flex-col items-center ${styles['equal-division-item_1']}`}>
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4468220bb26d08d0bd70b8652f2728c0.png"
          />
          <span className={`${styles['font_8']} ${styles['text_16']} mt-12`}>Game play</span>
        </div>
        <div className={`flex-col ${styles['equal-division-item_2']} ${styles['group_5']}`}>
          <img
            className={`self-center ${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=64ab9592fd0d6f510cfdd83f98b8409c.png"
          />
          <span className={`self-start ${styles['font_8']} ${styles['text_17']} ${styles['mt-15']}`}>Game Store</span>
        </div>
        <div className={`flex-col items-start ${styles['equal-division-item_3']} ${styles['group_6']}`}>
          <img
            className={`${styles['image_5']} ${styles['image_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2f9afa98fc5dec74a5d20fe7ec911b9e.png"
          />
          <span className={`${styles['text_14']} mt-12`}>Friends</span>
        </div>
        <div className={`flex-col items-center ${styles['equal-division-item_4']} ${styles['equal-division-item']}`}>
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9c562d2c07e3c5fac0295cf67893e223.png"
          />
          <span className={`${styles['font_8']} ${styles['text_15']} mt-10`}>Analytic play</span>
        </div>
      </div>
    </div>
  );
}

Utama_127_10504.defaultProps = { className: '' };