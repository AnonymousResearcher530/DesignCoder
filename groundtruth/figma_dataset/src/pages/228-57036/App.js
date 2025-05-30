import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Youhuiquanlingqu_228_57036(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null],
  });

  return (
    <div className={`flex-col justify-start ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start relative ${styles['section']}`}>
        <div className={`flex-col justify-start ${styles['section_2']}`}>
          <div className={`flex-col justify-start items-center ${styles['group']}`}>
            <img
              className={`shrink-0 ${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5cfbdd26b96bff5caafa365ece6ff1dd.png"
            />
          </div>
        </div>
        <div className={`flex-col ${styles['section_3']} ${styles['pos_1']}`}>
          <div className={`flex-col self-stretch`}>
            <div className={`flex-col justify-start items-center ${styles['section_4']}`}>
              <div className={`flex-col justify-start items-center relative ${styles['group_2']}`}>
                <img
                  className={`shrink-0 ${styles['image']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=af102af42d5a91b749d8ece04c74f582.png"
                />
                <span className={`${styles['font']} ${styles['text']} ${styles['pos']}`}>天猫精选指南</span>
                <span className={`${styles['font']} ${styles['pos_2']}`}>300元礼遇</span>
              </div>
            </div>
            <div className={`flex-col justify-start relative ${styles['group_3']}`}>
              <div className={`${styles['section_7']}`}></div>
              <div className={`flex-col ${styles['pos_3']}`}>
                {data.items.map((item, index) => (
                  <div className={`flex-col justify-start ${styles['list-item']} ${styles['mt-5-5']}`} key={index}>
                    <div className={`flex-row justify-between items-center ${styles['section_5']}`}>
                      <div className={`flex-col ${styles['group_4']}`}>
                        <div className={`flex-row items-baseline self-stretch ${styles['group_5']}`}>
                          <span className={`shrink-0 ${styles['font_4']} ${styles['text_4']}`}>¥</span>
                          <span className={`shrink-0 ${styles['font_2']} ${styles['text_2']}`}>30</span>
                          <span className={`shrink-0 ${styles['font_3']} ${styles['text_3']}`}>
                            Nike官方旗舰店优惠券
                          </span>
                        </div>
                        <span className={`self-start ${styles['font_6']} ${styles['text_6']}`}>本店商品满300可用</span>
                        <span className={`self-start ${styles['font_6']} ${styles['text_7']}`}>
                          有效期：2017.11.01 - 2018.12.31
                        </span>
                      </div>
                      <div className={`flex-col justify-start items-end ${styles['text-wrapper']}`}>
                        <span className={`${styles['font_5']} ${styles['text_5']}`}>已领取</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <span className={`self-center ${styles['text_11']}`}>优惠券可在我的淘宝-卡券包中查看</span>
          <div className={`flex-col justify-start items-center self-center ${styles['text-wrapper_2']}`}>
            <span className={`${styles['text_12']}`}>已领取</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Youhuiquanlingqu_228_57036.defaultProps = { className: '' };