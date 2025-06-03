import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Beverages(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-center relative`}>
        <img
          className={`${styles['image']} ${styles['pos']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b1bc9cd63f7ba095dab18ec19ec43271.png"
        />
        <span className={`${styles['text']}`}>Beverages</span>
        <img
          className={`${styles['image_2']} ${styles['pos_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4e87433365605d8009675ff6fcc6ffb6.png"
        />
      </div>
      <div className={`${styles['grid']} ${styles['mt-29']}`}>
        <img
          className={`${styles['grid-item']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fdde96a4b125b052bd3f66ea1ece000a.png"
        />
        <div className={`flex-col ${styles['grid-item_2']}`}>
          <div className={`flex-col justify-start items-center self-stretch relative ${styles['group']}`}>
            <img
              className={`${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=498f03836e15e973774be61b62b3e4d7.png"
            />
            <img
              className={`${styles['image_3']} ${styles['pos_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=56ad3b3ec6ee98e4c3b2b0a8a83ad16c.png"
            />
          </div>
          <span className={`self-start ${styles['font']} ${styles['text_2']}`}>Sprite Can</span>
          <span className={`self-start ${styles['font_2']} ${styles['text_3']}`}>325ml, Price</span>
          <div className={`flex-row justify-between items-center self-stretch ${styles['group_2']}`}>
            <span className={`${styles['font_3']}`}>$1.50</span>
            <img
              className={`${styles['image_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1b18b9ed3ac2b98eaa3ceb20c95f910a.png"
            />
          </div>
        </div>
        <div className={`flex-col ${styles['grid-item_2']}`}>
          <img
            className={`self-center ${styles['image_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=855a0f623e29351c2691621d7e3bd718.png"
          />
          <div className={`flex-col self-stretch ${styles['mt-17']}`}>
            <span className={`self-start ${styles['font_4']}`}>Apple & Grape </span>
            <span className={`self-start ${styles['font_4']}`}>Juice</span>
            <span className={`self-start ${styles['font_2']} ${styles['text_5']}`}>2L, Price</span>
            <div className={`flex-row justify-between items-center self-stretch ${styles['group_3']}`}>
              <span className={`${styles['font_3']}`}>$15.99</span>
              <img
                className={`${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fd849dabc47c6428b683ebb60b52f65b.png"
              />
            </div>
          </div>
        </div>
        <div className={`flex-col ${styles['grid-item_2']}`}>
          <img
            className={`self-center ${styles['image_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=32b9d1af6ba0691909b08647e248382d.png"
          />
          <div className={`flex-col self-stretch ${styles['mt-29']}`}>
            <span className={`self-start ${styles['font']} ${styles['text_4']}`}>Orenge Juice</span>
            <div className={`flex-row justify-between items-start self-stretch ${styles['mt-17']}`}>
              <div className={`flex-col items-center`}>
                <span className={`${styles['font_2']} ${styles['text_6']}`}>2L, Price</span>
                <span className={`mt-18 ${styles['font_3']}`}>$15.99</span>
              </div>
              <img
                className={`${styles['image_5']} ${styles['image_7']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=82be47b7a0f81aafecc0275932ee52a6.png"
              />
            </div>
          </div>
        </div>
        <div className={`flex-col ${styles['grid-item_2']}`}>
          <div className={`flex-col justify-start items-center self-stretch relative ${styles['group']}`}>
            <img
              className={`${styles['image_11']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2e64639e8b348d8a8d0e0565aa61057b.png"
            />
            <img
              className={`${styles['image_8']} ${styles['pos_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=cd6f4dc689eae8c44515ececfbe50925.png"
            />
          </div>
          <span className={`self-start ${styles['font']} ${styles['text_7']}`}>Coca Cola Can</span>
          <span className={`self-start ${styles['font_2']} ${styles['text_9']}`}>325ml, Price</span>
          <div className={`flex-row justify-between items-center self-stretch ${styles['group_2']}`}>
            <span className={`${styles['font_3']}`}>$4.99</span>
            <img
              className={`${styles['image_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8b5613cb38ae3f26db89e77963f5ad54.png"
            />
          </div>
        </div>
        <div className={`flex-col ${styles['grid-item_2']}`}>
          <div className={`flex-col justify-start items-center self-stretch relative ${styles['group_4']}`}>
            <img
              className={`${styles['image_10']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=61638b4dd6a4c36ed1b47f025826e35c.png"
            />
            <img
              className={`${styles['image_9']} ${styles['pos_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=87c9b5712de40e38f09e58c0df5aa50b.png"
            />
          </div>
          <span className={`self-start ${styles['font']} ${styles['text_8']}`}>Pepsi Can </span>
          <span className={`self-start ${styles['font_2']} ${styles['text_10']}`}>330ml, Price</span>
          <div className={`flex-row justify-between items-center self-stretch ${styles['group_2']}`}>
            <span className={`${styles['font_3']}`}>$4.99</span>
            <img
              className={`${styles['image_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=41a18658b0eab86a1513d69b052008c4.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Beverages.defaultProps = { className: '' };