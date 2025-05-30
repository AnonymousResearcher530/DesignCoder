import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Homescreen_127_14728(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row relative ${styles['group']}`}>
        <span className={`${styles['text_3']} ${styles['pos_10']}`}>Kindly select your preferred coffee type</span>
        <div className={`flex-row items-center ${styles['pos_1']}`}>
          <img
            className={`shrink-0 ${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=57f4072e90499461ae9cda9d91db909c.png"
          />
          <span className={`${styles['text_2']} ${styles['ml-7']}`}>Coffee Menu</span>
        </div>
        <div className={`flex-col justify-start items-start ${styles['group_2']} ${styles['pos_9']}`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=43e9134596c834b82617db42a328a15e.png"
          />
          <div className={`flex-col justify-start items-center ${styles['text-wrapper']} ${styles['pos']}`}>
            <span className={`${styles['text']}`}>0</span>
          </div>
        </div>
      </div>
      <div className={`flex-row items-center ${styles['section']}`}>
        <img
          className={`${styles['image_3']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e5a5b5d57dafb831fbc7751e9e66a7ba.png"
        />
        <span className={`${styles['text_4']} ml-10`}>Search by coffee name</span>
      </div>
      <div className={`${styles['grid']}`}>
        <div className={`flex-col ${styles['grid-item']}`}>
          <div className={`flex-col justify-start items-center self-stretch relative ${styles['section_2']}`}>
            <img
              className={`${styles['image_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=acc64bca47a33b132a16ddbc10187af4.png"
            />
            <img
              className={`${styles['image_4']} ${styles['pos_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e84bbbb1bba1d1bf78d3c82895254d06.png"
            />
          </div>
          <span className={`self-stretch ${styles['font']} ${styles['text_5']}`}>Mixed Black Coffee</span>
          <div className={`flex-row items-center self-stretch ${styles['group_1']}`}>
            <span className={`${styles['font_2']}`}>$</span>
            <span className={`${styles['font_3']}`}>12.00</span>
          </div>
          <div className={`flex-row justify-evenly items-center self-start ${styles['section_4']}`}>
            <div className={`${styles['section_5']}`}></div>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']}`}>
              <span className={`${styles['font_4']} ${styles['text_6']}`}>0</span>
            </div>
            <img
              className={`${styles['image_7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e0eb956de4cc6a6611d4229d65e5c014.png"
            />
          </div>
        </div>
        <div className={`flex-col ${styles['grid-item']}`}>
          <div className={`flex-col justify-start items-center self-stretch relative ${styles['section_3']}`}>
            <img
              className={`${styles['image_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f7cead595727b7d4cea29e03825fb870.png"
            />
            <img
              className={`${styles['image_4']} ${styles['pos_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e2340c739225e5a42bdc73cc3f420b49.png"
            />
          </div>
          <span className={`self-stretch ${styles['font']} ${styles['text_15']}`}>Mixed Black Coffee</span>
          <div className={`flex-row items-center self-stretch ${styles['group_3']}`}>
            <span className={`${styles['font_2']}`}>$</span>
            <span className={`${styles['font_3']}`}>12.00</span>
          </div>
          <div className={`flex-row justify-evenly items-center self-start ${styles['section_1']}`}>
            <div className={`${styles['section_5']}`}></div>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']}`}>
              <span className={`${styles['font_4']} ${styles['text_6']}`}>0</span>
            </div>
            <img
              className={`${styles['image_7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e0eb956de4cc6a6611d4229d65e5c014.png"
            />
          </div>
        </div>
        <div className={`flex-col ${styles['grid-item']}`}>
          <div className={`flex-col justify-start items-center relative ${styles['section_6']}`}>
            <img
              className={`${styles['image_9']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f444c7a74583bf706dfa77bed48f066a.png"
            />
            <img
              className={`${styles['image_8']} ${styles['pos_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0e97d2fda7fecc8ea7bc7a654ac1162d.png"
            />
          </div>
          <span className={`${styles['font']} ${styles['text_14']}`}>Mixed Black Coffee</span>
          <div className={`flex-row items-center ${styles['group_12']}`}>
            <span className={`${styles['font_2']}`}>$</span>
            <span className={`${styles['font_3']}`}>12.00</span>
          </div>
          <div className={`flex-row justify-between ${styles['section_10']}`}>
            <div className={`${styles['group_5']}`}></div>
            <div className={`${styles['group_5']}`}></div>
          </div>
        </div>
        <div className={`flex-col ${styles['grid-item']}`}>
          <div className={`flex-col justify-start items-center self-stretch relative ${styles['section_7']}`}>
            <img
              className={`${styles['image_4']} ${styles['pos_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e2340c739225e5a42bdc73cc3f420b49.png"
            />
            <img
              className={`relative ${styles['image_10']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=233a5fc0f087677f99d82f01b537ab4f.png"
            />
          </div>
          <span className={`self-start ${styles['font']} ${styles['text_1']}`}>Hot Chocolate</span>
          <div className={`flex-row items-center self-stretch ${styles['group_6']}`}>
            <span className={`${styles['font_2']}`}>$</span>
            <span className={`${styles['font_3']}`}>12.00</span>
          </div>
          <div className={`flex-row justify-between self-stretch ${styles['section_10']}`}>
            <div className={`${styles['group_5']}`}></div>
            <div className={`${styles['group_5']}`}></div>
          </div>
        </div>
      </div>
      <div className={`flex-col justify-start relative ${styles['section_8']}`}>
        <div className={`flex-row ${styles['equal-division']}`}>
          <div className={`flex-col items-center ${styles['group_4']} ${styles['group_7']}`}>
            <img
              className={`${styles['image_11']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c5cafe87b4d9a99d91352392963eb23c.png"
            />
            <span className={`${styles['font']} ${styles['text_9']} mt-2`}>Home</span>
          </div>
          <div className={`flex-col items-center ${styles['group_4']} ${styles['group_8']}`}>
            <img
              className={`${styles['image_11']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e285de20014f458e8c4d6727a01e8421.png"
            />
            <span className={`${styles['font_5']} ${styles['text_10']} mt-2`}>Menu</span>
          </div>
          <div className={`flex-col items-center ${styles['group_4']} ${styles['group_9']}`}>
            <img
              className={`${styles['image_11']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1c99435051cc6718c87626869256e848.png"
            />
            <span className={`${styles['font_5']} ${styles['text_7']}`}>Favourite</span>
          </div>
          <div className={`flex-col items-center ${styles['group_4']} ${styles['group_10']}`}>
            <img
              className={`shrink-0 ${styles['image_11']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=66dc6581f3b2e38e83017eee9334d197.png"
            />
            <span className={`${styles['font_5']} ${styles['text_8']}`}>Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Homescreen_127_14728.defaultProps = { className: '' };