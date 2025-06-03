import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Search_5_8966(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row items-center ${styles['group']}`}>
        <div className={`flex-row justify-between items-center flex-1 ${styles['section']}`}>
          <div className={`flex-row items-center`}>
            <img
              className={`shrink-0 ${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f0823801c2e186f8c8d059343e8dc14b.png"
            />
            <span className={`${styles['text']} ml-10`}>Egg</span>
          </div>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7ce0b9b3d59d86ac3752ada9a6d32141.png"
          />
        </div>
        <img
          className={`shrink-0 ${styles['image_3']} ${styles['ml-19']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f2d7e630833d04cc95c71ecc64bb3d1e.png"
        />
      </div>
      <div className={`flex-row relative ${styles['group_1']} mt-30`}>
        <div className={`flex-col ${styles['grid-item']} ${styles['pos_17']}`}>
          <div className={`flex-col self-stretch`}>
            <div className={`flex-col justify-start items-center self-stretch relative ${styles['group_2']}`}>
              <img
                className={`${styles['image_7']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=424e6daa49395703395a24a04ecfe48d.png"
              />
              <img
                className={`${styles['image_4']} ${styles['pos']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=63a0f86b11be50955fa9c83299c5cff7.png"
              />
            </div>
            <span className={`self-start ${styles['font']}`}>Egg Chicken Red</span>
          </div>
          <span className={`self-start ${styles['font_2']} ${styles['text_3']}`}>4pcs, Price</span>
          <div className={`flex-row justify-between items-center self-stretch ${styles['group_4']}`}>
            <span className={`${styles['font_3']}`}>$1.99</span>
            <img
              className={`${styles['image_8']} ${styles['image_1']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a4f88180e7c1ecf45fe5b4e7b15c00cd.png"
            />
          </div>
        </div>
        <div className={`flex-col ${styles['grid-item_2']} ${styles['pos_15']}`}>
          <div className={`flex-col justify-start items-center self-stretch relative ${styles['group_3']}`}>
            <img
              className={`${styles['image_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=60e78f800a8dc4bfa5d00384a8cb5dd8.png"
            />
            <img
              className={`${styles['image_5']} ${styles['pos_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=19d730db60c22175b89997f257c8cdb4.png"
            />
          </div>
          <span className={`self-stretch ${styles['font']} ${styles['text_2']}`}>Egg Chicken White</span>
          <span className={`self-start ${styles['font_2']} ${styles['text_4']}`}>180g, Price</span>
          <div className={`flex-row justify-between items-center self-stretch ${styles['group_5']}`}>
            <span className={`${styles['font_3']}`}>$1.50</span>
            <img
              className={`${styles['image_8']} ${styles['image_9']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9cb580955acecacc340d7236ef5c187e.png"
            />
          </div>
        </div>
        <div className={`flex-col ${styles['grid-item_3']} ${styles['pos_1']}`}>
          <div className={`flex-col justify-start items-center relative ${styles['group_7']}`}>
            <img
              className={`${styles['image_13']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bc9b0819b9ca99f408798182193a2e6f.png"
            />
            <img
              className={`${styles['image_11']} ${styles['pos_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1ba3a86329055e294466e2f0b803b0a2.png"
            />
          </div>
          <div className={`flex-col mt-24`}>
            <span className={`self-start ${styles['font_4']} ${styles['text_5']}`}>Egg Pasta </span>
            <span className={`self-start ${styles['font_2']} ${styles['text_6']}`}>30gm, Price</span>
            <div className={`flex-row justify-between items-center self-stretch ${styles['group_9']}`}>
              <span className={`${styles['font_3']}`}>$15.99</span>
              <img
                className={`${styles['image_8']} ${styles['image_25']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0ceeb71e933dc8bb7d2f0a6dc3b06d25.png"
              />
            </div>
          </div>
        </div>
        <div className={`flex-col ${styles['grid-item_4']} ${styles['pos_16']}`}>
          <div className={`flex-col justify-start items-center relative ${styles['group_6']}`}>
            <img
              className={`${styles['image_12']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ceeaa5d9fd269d016598361ff9638993.png"
            />
            <img
              className={`${styles['image_10']} ${styles['pos_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1bf3e00114e2d31a52804c6c193e3a02.png"
            />
          </div>
          <div className={`flex-col items-start ${styles['group_8']}`}>
            <span className={`${styles['font_4']}`}>Egg Noodles</span>
            <span className={`${styles['font_2']} ${styles['text_7']} ${styles['mt-17']}`}>2L, Price</span>
            <span className={`${styles['font_3']} ${styles['mt-17']}`}>$15.99</span>
          </div>
          <img
            className={`${styles['image_8']} ${styles['pos_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=636c6b099c288b05e11e0447769fa2af.png"
          />
        </div>
        <div className={`flex-col ${styles['grid-item_5']} ${styles['pos_10']}`}>
          <div className={`flex-col justify-start items-center relative ${styles['group_10']}`}>
            <img
              className={`${styles['image_16']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=61d0c542cca2170c2f8b904a677661cb.png"
            />
            <img
              className={`${styles['image_14']} ${styles['pos_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=993d24de8885895e2beb352c83ede36e.png"
            />
          </div>
          <span className={`${styles['font_4']} ${styles['mt-19']}`}>Mayonnais Eggless</span>
        </div>
        <div className={`flex-col ${styles['grid-item_6']} ${styles['pos_11']}`}>
          <div className={`flex-col justify-start items-center self-stretch relative ${styles['group_11']}`}>
            <img
              className={`${styles['image_17']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d6e0554a4032a7099cd4998d4e319e5d.png"
            />
            <img
              className={`${styles['image_15']} ${styles['pos_7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2cc6c4db0fd66fe61b475a41e49a9ca9.png"
            />
          </div>
          <span className={`self-start ${styles['font_4']} mt-28`}>Egg Noodles</span>
        </div>
        <div className={`flex-row justify-between items-center ${styles['section_2']} ${styles['pos_8']}`}>
          <img
            className={`${styles['image_18']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=248e7550df985babefd2824da8182302.png"
          />
          <img
            className={`${styles['image_19']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=de78b414a51a65a2a4181a8f47496751.png"
          />
          <img
            className={`${styles['image_20']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=56f221ba570f844495267a66c31b03d0.png"
          />
          <img
            className={`${styles['image_21']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3545b70651e9104120ede5a1e73a088b.png"
          />
          <img
            className={`${styles['image_22']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9f6fdba6f88914f7ff7af6716ace3375.png"
          />
        </div>
      </div>
    </div>
  );
}

Search_5_8966.defaultProps = { className: '' };