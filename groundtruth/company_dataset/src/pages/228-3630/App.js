import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Querendingdanye_hetiaozhuan_copy_228_3630(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null, null],
    items_1: [null, null, null, null],
  });

  return (
    <div className={`flex-col relative ${styles['page']} ${props.className}`}>
      <div className={`flex-col ${styles['section_3']}`}>
        <div className={`flex-col`}>
          {data.items.map((item, index) => (
            <div
              className={`flex-row items-center relative ${styles['list-item']} ${styles['group_3']} mt-12`}
              key={index}
            >
              <img
                className={`${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8250f586e03f582ba658b415ddaa74a3.png"
              />
              <div className={`flex-col justify-start ${styles['text-wrapper_2']}`}>
                <span className={`${styles['font_8']} ${styles['text_8']}`}>过期退</span>
              </div>
              <div className={`flex-col ${styles['pos_6']}`}>
                <div className={`flex-row items-center self-stretch ${styles['group_4']}`}>
                  <img
                    className={`${styles['image_2']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0d706dea6fb13ae8fb513c891c2d1cc7.png"
                  />
                  <span className={`${styles['font_3']} ${styles['text_5']} ${styles['ml-8-5']}`}>麦当劳(近铁店)</span>
                </div>
                <span className={`self-end ${styles['font_3']} ${styles['text_6']}`}>
                  麦当劳 早餐皮蛋鸡肉粥+油条 3次券
                </span>
                <div className={`flex-col justify-start items-center ${styles['text-wrapper']} ${styles['pos_7']}`}>
                  <span className={`${styles['font_2']}`}>2</span>
                </div>
              </div>
              <div className={`${styles['group_5']} ${styles['pos_8']}`}>
                <span className={`${styles['font_4']}`}>￥36</span>
                <span className={`${styles['font_6']}`}>.</span>
                <span className={`${styles['font_5']}`}>00</span>
              </div>
              <span className={`${styles['font_7']} ${styles['text_7']} ${styles['pos_9']}`}>×2</span>
            </div>
          ))}
        </div>
        <div className={`flex-col mt-6`}>
          <div className={`flex-col justify-start items-start ${styles['section_4']}`}>
            <div className={`flex-row items-baseline ${styles['group_13']}`}>
              <span className={`shrink-0 ${styles['font_9']} ${styles['text_13']}`}>手机号码</span>
              <span className={`shrink-0 ${styles['font_10']} ${styles['text_14']} ${styles['ml-11-5']}`}>
                153 1708 1560{' '}
              </span>
            </div>
          </div>
          <div className={`flex-col`}>
            {data.items_1.map((item, index) => (
              <div className={`flex-row justify-between ${styles['list-item_2']}`} key={index}>
                <div className={`flex-row ${styles['group_14']}`}>
                  <span className={`shrink-0 ${styles['font_9']} ${styles['text_15']}`}>商品优惠</span>
                  <span className={`shrink-0 ${styles['font_11']} ${styles['text_16']} ml-10`}>薯条优惠:省20元</span>
                </div>
                <div className={`flex-row`}>
                  <div className={`flex-row items-center ${styles['group_15']}`}>
                    <div className={`shrink-0 ${styles['section_5']}`}></div>
                    <div className={`${styles['group_16']} ${styles['ml-4-5']}`}>
                      <span className={`${styles['font_10']}`}>¥20.</span>
                      <span className={`${styles['font_5']}`}>00</span>
                    </div>
                  </div>
                  <img
                    className={`${styles['image_4']} ${styles['ml-13']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=85e3a14b5fa9f9b59c891960e2fed97b.png"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className={`flex-col justify-start items-end ${styles['section_6']}`}>
            <div className={`${styles['group_18']}`}>
              <span className={`${styles['font_12']}`}>共1件 </span>
              <span className={`${styles['font_3']} ${styles['text_20']}`}>小计:</span>
              <span className={`${styles['font_10']} ${styles['text_21']}`}>￥144.</span>
              <span className={`${styles['font_5']} ${styles['text_22']}`}>00</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-row justify-between items-center ${styles['section_7']}`}>
        <div className={`flex-row items-center`}>
          <div className={`flex-col justify-start items-center shrink-0 ${styles['text-wrapper_5']}`}>
            <span className={`${styles['text_24']}`}>券</span>
          </div>
          <span className={`${styles['text_23']} ${styles['ml-6-5']}`}>双11购物券</span>
        </div>
        <div className={`flex-row`}>
          <div className={`flex-row items-center ${styles['group_19']}`}>
            <div className={`shrink-0 ${styles['section_5']}`}></div>
            <span className={`${styles['font_10']} ${styles['text_25']} ${styles['ml-4-5']}`}>¥20.30</span>
          </div>
          <img
            className={`${styles['image_4']} ${styles['ml-13']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=85e3a14b5fa9f9b59c891960e2fed97b.png"
          />
        </div>
      </div>
      <div className={`flex-col justify-start items-center ${styles['text-wrapper_1']} ${styles['pos_5']}`}>
        <span className={`${styles['font_2']}`}>1</span>
      </div>
      <div className={`flex-col justify-start ${styles['section']} ${styles['pos']}`}>
        <div className={`${styles['section_2']}`}></div>
        <div className={`${styles['group_2']} ${styles['pos_2']}`}>
          <span className={`${styles['font']} ${styles['text']} ${styles['text_2']}`}>9:4</span>
          <span className={`${styles['font']} ${styles['text']} ${styles['text_3']}`}>1</span>
        </div>
        <img
          className={`${styles['image']} ${styles['pos_4']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3923287831a6fb647ab728c97feccf30.png"
        />
        <span className={`${styles['text_4']} ${styles['pos_3']}`}>确认订单</span>
      </div>
      <div className={`flex-row items-center relative ${styles['group_20']}`}>
        <img
          className={`${styles['image_6']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bc33811020e666ea4b9e4fe14a3ed53a.png"
        />
        <span className={`${styles['font_12']} ${styles['text_26']}`}>匿名购买</span>
        <img
          className={`${styles['image_7']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=efad7cc95ce21e0b0bc92afe60be7bfc.png"
        />
      </div>
      <img
        className={`relative ${styles['image_8']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ae41bd6227bc757c5547c921f0e9f659.png"
      />
    </div>
  );
}

Querendingdanye_hetiaozhuan_copy_228_3630.defaultProps = { className: '' };