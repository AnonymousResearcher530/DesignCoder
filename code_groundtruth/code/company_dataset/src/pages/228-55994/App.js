import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Juhuasuanhuodong_2_228_55994(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col`}>
        <span className={`self-center ${styles['font']}`}>2015年5月8日</span>
        <div className={`flex-col self-stretch ${styles['mt-7']}`}>
          <div className={`flex-row items-center ${styles['section']}`}>
            <div className={`${styles['section_2']}`}></div>
            <span className={`${styles['font_2']} ${styles['text']} ${styles['ml-9']}`}>皇冠曲奇 全场包邮</span>
          </div>
          <div className={`flex-col justify-start relative ${styles['section_3']}`}>
            <div className={`${styles['section_4']}`}></div>
            <span className={`${styles['font_3']} ${styles['text_2']} ${styles['pos']}`}>皇冠曲奇</span>
            <div className={`${styles['section_5']} ${styles['pos_2']}`}></div>
            <span className={`${styles['text_3']} ${styles['pos_3']}`}>全场包邮</span>
            <div className={`${styles['section_5']} ${styles['pos_4']}`}></div>
          </div>
          <div className={`flex-col ${styles['section_6']}`}>
            <span className={`${styles['text_4']}`}>
              有口皆碑！一辈子忘不掉的好味道，让焦糖饼干打开你的味蕾，告诉你真正的生活真谛、生活的真理。
            </span>
            <div className={`mt-6 flex-row justify-between items-center ${styles['group']}`}>
              <span className={`${styles['font_3']}`}>查看详情</span>
              <img
                className={`${styles['image']} ${styles['image_2']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a9b410743f4829759af0618094f36d98.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`mt-20 flex-col`}>
        <span className={`self-center ${styles['font']}`}>2015年5月7日</span>
        <div className={`mt-6 flex-col self-stretch ${styles['section_7']}`}>
          <div className={`flex-row items-center`}>
            <div className={`${styles['section_2']}`}></div>
            <span className={`ml-8 ${styles['font_2']}`}>新品上市 恭迎品鉴</span>
          </div>
          <img
            className={`mt-10 ${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2855c9b59c2e6fa5564f01934d2587d5.png"
          />
          <div className={`mt-10 flex-row justify-between items-center ${styles['group_2']}`}>
            <span className={`${styles['font_3']}`}>查看详情</span>
            <img
              className={`${styles['image']} ${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a9b410743f4829759af0618094f36d98.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Juhuasuanhuodong_2_228_55994.defaultProps = { className: '' };