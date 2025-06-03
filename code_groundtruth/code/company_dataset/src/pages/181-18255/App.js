import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Jinrituijian_toubuqukuaihulve_181_18255(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col justify-start relative ${styles['page']} ${props.className}`}>
      <div className={`flex-col ${styles['section_2']}`}>
        <div className={`flex-row justify-center items-center self-stretch relative ${styles['group']}`}>
          <div className={`flex-row items-center ${styles['pos']}`}>
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
          <div className={`flex-row ${styles['pos_2']}`}>
            <span className={`${styles['font']} ${styles['text_2']}`}>100%</span>
            <img
              className={`shrink-0 ${styles['image_2']} ml-2`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1fb7cded18c89f3fae0d4c196f3e15da.png"
            />
          </div>
        </div>
        <div className={`flex-row justify-center items-center self-stretch relative ${styles['group_2']}`}>
          <img
            className={`${styles['image_5']} ${styles['pos_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ed9cc101ee2ea3658778d4c72a7ce3ef.png"
          />
          <img
            className={`${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bcebf83c4d5398e4f4be6f52e239e8b7.png"
          />
          <img
            className={`${styles['image_6']} ${styles['pos_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e4cff888e1e11b087666b01723d1b763.png"
          />
        </div>
        <div className={`flex-col self-start ${styles['group_3']}`}>
          <div className={`flex-row justify-between items-center self-stretch ${styles['group_4']}`}>
            <span className={`${styles['text_3']}`}>今日推荐</span>
            <span className={`${styles['font_2']} ${styles['text_4']}`}>红人店主</span>
            <span className={`${styles['font_2']} ${styles['text_4']} ${styles['text_5']}`}>匠人匠心</span>
            <span className={`${styles['font_2']} ${styles['text_4']}`}>奇葩创意</span>
            <span className={`${styles['font_2']} ${styles['text_4']} ${styles['text_6']}`}>有腔调</span>
          </div>
          <div className={`shrink-0 self-start ${styles['section_3']}`}></div>
        </div>
      </div>
      <div className={`flex-row ${styles['equal-division']}`}>
        <img
          className={`${styles['image_7']} ${styles['equal-division-item']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f7b1aa909e50c84ae7d4f78320b38c2a.png"
        />
        <img
          className={`${styles['image_7']} ${styles['equal-division-item']} ${styles['ml-9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=47cdccfc045fe1659ed1b97ba6f4eb90.png"
        />
        <img
          className={`${styles['image_7']} ${styles['image_1']} ${styles['ml-9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=74d9d7b5ccf1ff2b88b1e17e47a714f6.png"
        />
      </div>
      <div className={`flex-col items-center ${styles['pos_5']}`}>
        <img
          className={`${styles['image_8']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7c479fb24607c18b899a11e90ecd02ba.png"
        />
        <img
          className={`${styles['image_8']} ${styles['mt-9-5']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1d5a8fe1d3ab84fa78fdc5108ed50825.png"
        />
        <img
          className={`${styles['image_8']} ${styles['mt-9-5']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bd2c51423cfe5d2e26bb0abe466d4209.png"
        />
      </div>
    </div>
  );
}

Jinrituijian_toubuqukuaihulve_181_18255.defaultProps = { className: '' };