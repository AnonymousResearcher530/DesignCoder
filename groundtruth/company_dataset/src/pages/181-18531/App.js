import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Tesepindao_wutoubuqukuai_181_18531(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start ${styles['section']}`}>
        <div className={`flex-col justify-start relative ${styles['section_2']}`}>
          <div className={`${styles['section_3']}`}></div>
          <div className={`flex-row justify-center items-center ${styles['group']} ${styles['pos']}`}>
            <div className={`flex-row items-center ${styles['pos_2']}`}>
              <img
                className={`shrink-0 ${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3aeb6f183064bdbb538e192fb8fab217.png"
              />
              <span className={`${styles['font']} ${styles['text']} ml-4`}>中国移动</span>
              <img
                className={`shrink-0 ${styles['image']} ml-4`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5ccc458b515ce2600e90453aefae7f9f.png"
              />
            </div>
            <span className={`${styles['font']}`}>9:41 AM</span>
            <div className={`flex-row ${styles['pos_3']}`}>
              <span className={`${styles['font']} ${styles['text_2']}`}>100%</span>
              <img
                className={`shrink-0 ${styles['image_2']} ml-2`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1fb7cded18c89f3fae0d4c196f3e15da.png"
              />
            </div>
          </div>
          <div className={`flex-row justify-center items-center ${styles['pos_4']}`}>
            <img
              className={`${styles['image_5']} ${styles['pos_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ed9cc101ee2ea3658778d4c72a7ce3ef.png"
            />
            <img
              className={`${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bcebf83c4d5398e4f4be6f52e239e8b7.png"
            />
            <img
              className={`${styles['image_6']} ${styles['pos_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e4cff888e1e11b087666b01723d1b763.png"
            />
          </div>
          <div className={`flex-col ${styles['group_2']} ${styles['pos_7']}`}>
            <div className={`flex-row justify-between items-center self-stretch ${styles['group_3']}`}>
              <span className={`${styles['font_2']} ${styles['text_4']} ${styles['text_5']}`}>今日推荐</span>
              <span className={`${styles['font_2']} ${styles['text_4']}`}>红人店主</span>
              <span className={`${styles['font_2']} ${styles['text_4']} ${styles['text_6']}`}>匠人匠心</span>
              <div className={`flex-row items-baseline`}>
                <span className={`${styles['text_3']}`}>奇葩创意</span>
                <span className={`${styles['font_2']} ${styles['text_4']} ${styles['text_7']} ${styles['ml-22-5']}`}>
                  有腔调
                </span>
              </div>
            </div>
            <div className={`shrink-0 self-end ${styles['section_4']}`}></div>
          </div>
        </div>
      </div>
      <div className={`flex-col items-center relative ${styles['group_4']}`}>
        <img
          className={`${styles['image_7']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6627f375f69b4e527b8cd4900bdbe2f9.png"
        />
        <img
          className={`${styles['image_8']} ${styles['mt-9-5']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b8c8c30deb66660c886a6d7332a3b7ca.png"
        />
        <img
          className={`${styles['image_9']} ${styles['mt-9-5']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=89267ece17625af76383327317c3974f.png"
        />
      </div>
    </div>
  );
}

Tesepindao_wutoubuqukuai_181_18531.defaultProps = { className: '' };