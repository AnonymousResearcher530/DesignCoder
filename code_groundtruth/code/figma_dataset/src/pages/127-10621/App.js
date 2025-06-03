import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Utama_1_127_10621(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start self-start ${styles['text-wrapper']}`}>
        <span className={`${styles['text']}`}>Analytics</span>
      </div>
      <div className={`flex-col self-stretch relative ${styles['section']}`}>
        <div className={`shrink-0 self-start ${styles['section_2']} ${styles['view_1']}`}></div>
        <div className={`flex-col self-stretch ${styles['equal-division']}`}>
          <div className={`flex-row justify-between items-center ${styles['group_1']}`}>
            <span className={`${styles['font_3']} ${styles['text_7']}`}>Summary Recent Games</span>
            <div className={`flex-row items-center`}>
              <div className={`shrink-0 ${styles['section_3']}`}></div>
              <span className={`${styles['font_7']} ${styles['text_8']} ml-8`}>win</span>
              <div className={`shrink-0 ${styles['section_4']} ml-8`}></div>
              <span className={`${styles['font_7']} ${styles['text_9']} ml-8`}>Lose</span>
            </div>
          </div>
          <div className={`flex-row ${styles['group_6']} ${styles['mt-23']}`}>
            <div className={`flex-col ${styles['group_7']} ${styles['group_14']}`}>
              <div className={`flex-row items-end self-stretch`}>
                <div className={`${styles['section_5']}`}></div>
                <div className={`${styles['section_6']} ${styles['ml-11']}`}></div>
              </div>
              <span className={`self-start ${styles['font_8']} ${styles['text_10']} mt-16`}>18.09</span>
            </div>
            <div className={`flex-col ${styles['group_7']} ${styles['equal-division-item_1']}`}>
              <div className={`flex-row items-end self-stretch`}>
                <div className={`${styles['section_14']}`}></div>
                <div className={`${styles['section_6']} ${styles['ml-11']}`}></div>
              </div>
              <span className={`self-start ${styles['font_8']} ${styles['text_1']} mt-16`}>18.09</span>
            </div>
            <div className={`flex-col ${styles['group_7']} ${styles['equal-division-item_1']}`}>
              <div className={`flex-row items-end self-stretch`}>
                <div className={`${styles['section_5']}`}></div>
                <div className={`${styles['section_15']} ${styles['ml-11']}`}></div>
              </div>
              <span className={`self-start ${styles['font_8']} ${styles['text_1']} mt-16`}>18.09</span>
            </div>
            <div className={`flex-col ${styles['group_7']} ${styles['group_15']}`}>
              <div className={`flex-row items-end self-stretch`}>
                <div className={`${styles['section_1']}`}></div>
                <div className={`${styles['section_6']} ${styles['ml-11']}`}></div>
              </div>
              <span className={`self-start ${styles['font_8']} ${styles['text_20']} mt-16`}>18.09</span>
            </div>
          </div>
        </div>
        <div className={`flex-col items-start self-stretch ${styles['group_8']}`}>
          <span className={`${styles['font']}`}>You Playing Mobile Legend</span>
          <span className={`${styles['font_2']} ${styles['text_11']} ${styles['mt-19']}`}>View all</span>
        </div>
        <div className={`flex-row ${styles['equal-division_4']}`}>
          <div className={`flex-col justify-start items-start ${styles['equal-division-item']} ${styles['group_3']}`}>
            <div className={`flex-col justify-start items-start ${styles['text-wrapper_2']}`}>
              <span className={`${styles['font_3']} ${styles['text_3']}`}>Current rank</span>
            </div>
            <div className={`flex-row items-center ${styles['pos_2']}`}>
              <span className={`${styles['font_4']}`}>Plat 3</span>
              <span className={`${styles['font_5']} ml-10`}>- 16 LP</span>
            </div>
          </div>
          <div className={`flex-col items-start ${styles['equal-division-item_2']} ${styles['group_4']} ml-30`}>
            <span className={`${styles['font_3']} ${styles['text_4']}`}>Your Role</span>
            <span className={`${styles['font_6']} ${styles['text_5']}`}>Support</span>
            <span className={`${styles['font_5']} ${styles['text_6']}`}>80% | WinRaton 57%</span>
          </div>
        </div>
        <span className={`self-stretch ${styles['font']} ${styles['text_21']}`}>You Playing Mobile Legend</span>
        <span className={`self-start ${styles['font_2']} ${styles['text_2']}`}>View all</span>
      </div>
      <div className={`flex-col justify-start self-stretch relative ${styles['group_16']}`}>
        <div className={`${styles['section_7']}`}></div>
        <div className={`${styles['section_2']} ${styles['pos_1']}`}></div>
        <div className={`flex-row justify-between ${styles['group_9']} ${styles['pos_3']}`}>
          <div className={`${styles['section_8']}`}></div>
          <span className={`self-start ${styles['font_3']} ${styles['text_13']}`}>Your Role</span>
          <div className={`flex-row justify-between items-center ${styles['group_17']} ${styles['pos_6']}`}>
            <div className={`flex-row items-center`}>
              <span className={`${styles['font_4']}`}>Plat 3</span>
              <span className={`${styles['font_5']} ml-10`}>- 16 LP</span>
            </div>
            <span className={`${styles['font_6']}`}>Support</span>
          </div>
          <span className={`${styles['font_3']} ${styles['text_12']} ${styles['pos_5']}`}>Current rank</span>
        </div>
        <div className={`${styles['divider']} ${styles['pos_4']}`}></div>
      </div>
      <div className={`flex-col justify-start self-stretch relative ${styles['group_10']}`}>
        <div className={`flex-row ${styles['equal-division_2']} ${styles['section_9']}`}>
          <div className={`flex-col items-center ${styles['equal-division-item_4']}`}>
            <img
              className={`${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4468220bb26d08d0bd70b8652f2728c0.png"
            />
            <span className={`${styles['font_9']} ${styles['text_14']} mt-12`}>Game play</span>
          </div>
          <div className={`flex-col ${styles['equal-division-item_9']} ${styles['group_11']}`}>
            <img
              className={`self-center ${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=64ab9592fd0d6f510cfdd83f98b8409c.png"
            />
            <span className={`self-start ${styles['font_9']} ${styles['text_16']} ${styles['mt-15']}`}>Game Store</span>
          </div>
          <div className={`flex-col items-start ${styles['equal-division-item_6']} ${styles['group_12']}`}>
            <img
              className={`${styles['image']} ${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=10fa4e33d3bd4403d2aace82b1658d81.png"
            />
            <span className={`${styles['font_9']} ${styles['text_15']} mt-12`}>Friends</span>
          </div>
          <div className={`flex-col items-center ${styles['equal-division-item_7']} ${styles['group_13']}`}>
            <img
              className={`${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ed6170507199ad67f5cfe4dba5f123a3.png"
            />
            <span className={`${styles['text_17']} ${styles['mt-15']}`}>Analytic play</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Utama_1_127_10621.defaultProps = { className: '' };