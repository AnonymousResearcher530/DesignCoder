import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Songyaoshangmen_180_12304(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start relative ${styles['section']}`}>
        <div className={`${styles['section_2']}`}></div>
        <img
          className={`${styles['image_4']} ${styles['pos_8']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e3632b81098d7b208987b69a3edce603.png"
        />
        <span className={`${styles['text']} ${styles['pos_2']}`}>VIRGIN</span>
        <img
          className={`${styles['image_2']} ${styles['pos_3']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a62d72559ffd4b0090fc81fa6ed82dd5.png"
        />
        <span className={`${styles['font']} ${styles['pos_4']}`}>4 21 PM</span>
        <span className={`${styles['font']} ${styles['text_2']} ${styles['pos_5']}`}>:</span>
        <img
          className={`${styles['image']} ${styles['pos']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=22613da4616e00640483f0839fc44ff5.png"
        />
        <span className={`${styles['font']} ${styles['text_3']} ${styles['pos_6']}`}>22%</span>
        <img
          className={`${styles['image_3']} ${styles['pos_7']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fb2fe59f5600ef1b23d0c3fc597b26ad.png"
        />
        <img
          className={`${styles['image_6']} ${styles['pos_11']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bc6c1e79bbdd2b27a556d816008ceab2.png"
        />
        <div className={`flex-row justify-between ${styles['section_3']} ${styles['pos_9']}`}>
          <div className={`flex-col justify-start items-start ${styles['image-wrapper']}`}>
            <img
              className={`${styles['image_7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0a30a6f166b8e7768965c7b7c4cc726d.png"
            />
          </div>
          <img
            className={`${styles['image_8']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9127605e4e6525e899db1300c3fe2c83.png"
          />
        </div>
        <img
          className={`${styles['image_5']} ${styles['pos_10']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1e93197f9a22f542c72b42d78a226956.png"
        />
      </div>
      <div className={`flex-row justify-between items-center ${styles['section_4']}`}>
        <div className={`flex-row items-center`}>
          <img
            className={`shrink-0 ${styles['image_9']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f0d5f9e14abb2e5aeeefa51589561482.png"
          />
          <span className={`${styles['font_2']} ${styles['text_4']} ${styles['ml-7-5']}`}>北京, 绿地中心</span>
          <img
            className={`shrink-0 ${styles['image_10']} ${styles['ml-7-5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1ef6232fc0d00a2ac48b53cbc3aa16eb.png"
          />
        </div>
        <span className={`${styles['font_3']} ${styles['text_5']}`}>附近药店为您服务，一小时送达</span>
      </div>
      <div className={`flex-row ${styles['section_5']}`}>
        <img
          className={`shrink-0 self-center ${styles['image_11']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fff68ff86c981ba23d2dcf47420d8ffd.png"
        />
        <div className={`flex-col flex-1 self-start ${styles['group']} ${styles['ml-15']}`}>
          <span className={`self-start ${styles['font_4']} ${styles['text_6']}`}>益丰大药房(望京店)</span>
          <div className={`flex-row self-stretch ${styles['group_2']}`}>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
              <span className={`${styles['font_5']} ${styles['text_7']}`}>附近药店</span>
            </div>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']} ${styles['ml-5-5']}`}>
              <span className={`${styles['font_5']} ${styles['text_8']}`}>极速</span>
            </div>
          </div>
          <div className={`flex-row items-center self-stretch ${styles['group_3']}`}>
            <span className={`${styles['font_3']}`}>最早18:30送达</span>
            <div className={`${styles['section_6']} ${styles['view']}`}></div>
            <span className={`${styles['font_3']} ${styles['text_9']}`}>0元起送</span>
            <div className={`${styles['section_6']} ${styles['view_2']}`}></div>
            <span className={`${styles['font_3']} ${styles['text_10']}`}>配送费4元</span>
          </div>
        </div>
      </div>
      <div className={`flex-row items-center ${styles['section_7']}`}>
        <div className={`flex-col justify-start items-center ${styles['text-wrapper_3']}`}>
          <span className={`${styles['font_3']} ${styles['text_11']}`}>惠</span>
        </div>
        <span className={`${styles['font_3']} ${styles['text_12']} ${styles['ml-9']}`}>
          购买买200立减80元, 每周四配送免费
        </span>
      </div>
      <div className={`flex-col ${styles['section_8']}`}>
        <div className={`flex-row justify-between self-stretch ${styles['group_4']}`}>
          <span className={`${styles['font_2']} ${styles['text_13']}`}>首页</span>
          <span className={`${styles['font_4']} ${styles['text_14']}`}>全部商品</span>
          <span className={`${styles['font_4']} ${styles['text_15']}`}>评价</span>
          <span className={`${styles['font_4']} ${styles['text_16']}`}>店铺信息</span>
        </div>
        <div className={`self-start ${styles['section_9']}`}></div>
      </div>
      <div className={`flex-col ${styles['section_10']}`}>
        <span className={`self-center ${styles['font_2']}`}>热销品类</span>
        <div className={`mt-18 flex-col self-stretch`}>
          <div className={`flex-row`}>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_4']}`}>
              <span className={`${styles['font_4']} ${styles['text_17']}`}>感冒发烧</span>
            </div>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_5']} ${styles['ml-8-5']}`}>
              <span className={`${styles['font_4']}`}>胃痛胃胀</span>
            </div>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_6']} ${styles['ml-8-5']}`}>
              <span className={`${styles['font_4']} ${styles['text_18']}`}>跌打扭伤</span>
            </div>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_7']} ${styles['ml-8-5']}`}>
              <span className={`${styles['font_4']} ${styles['text_19']}`}>腹痛腹泻</span>
            </div>
          </div>
          <div className={`flex-row ${styles['mt-9']}`}>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_6']}`}>
              <span className={`${styles['font_4']} ${styles['text_20']}`}>喉咙干哑</span>
            </div>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_7']} ${styles['ml-8-5']}`}>
              <span className={`${styles['font_4']}`}>儿童用药</span>
            </div>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_8']} ${styles['ml-8-5']}`}>
              <span className={`${styles['font_4']} ${styles['text_21']}`}>妇科用药</span>
            </div>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_5']} ${styles['ml-8-5']}`}>
              <span className={`${styles['font_4']} ${styles['text_22']}`}>维生素类</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Songyaoshangmen_180_12304.defaultProps = { className: '' };