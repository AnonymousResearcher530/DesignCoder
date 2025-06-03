import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Product_5_173_1491(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center ${styles['group']}`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=336028ef0a8752ac04f478fb86f5c61b.png"
        />
        <img
          className={`${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=88ffc3f961c15362af2c4d0a6cc47084.png"
        />
      </div>
      <div className={`flex-row items-start ${styles['group_2']} ${styles['view']}`}>
        <img
          className={`shrink-0 ${styles['image_3']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ef46fb220362ae4bd23cf6f8d7822b2f.png"
        />
        <div className={`flex-col shrink-0 ${styles['group_3']} ${styles['ml-57']}`}>
          <div className={`${styles['group_1']}`}>
            <span className={`${styles['text']}`}>Customize</span>
            <span className={`${styles['font']} ${styles['text_2']}`}>
              {' '}
              Your Burger to Your Tastes. Ultimate Experience
            </span>
          </div>
          <div className={`flex-col ${styles['group_4']}`}>
            <span className={`self-start ${styles['font']} ${styles['text_3']}`}>Spicy</span>
            <div className={`flex-col self-stretch mt-10`}>
              <div className={`flex-col justify-start relative ${styles['group_5']}`}>
                <div className={`flex-col justify-start items-start relative ${styles['section_2']}`}>
                  <div className={`${styles['section_3']}`}></div>
                </div>
                <div className={`${styles['section']} ${styles['pos']}`}></div>
              </div>
              <div className={`flex-row justify-between ${styles['mt-7']}`}>
                <span className={`${styles['font_2']} ${styles['text_4']}`}>Mild</span>
                <span className={`${styles['font_2']} ${styles['text_5']}`}>Hot</span>
              </div>
            </div>
          </div>
          <div className={`flex-row ${styles['group_6']}`}>
            <div className={`flex-col items-start ${styles['group_7']}`}>
              <span className={`${styles['font']} ${styles['text_6']}`}>Portion</span>
              <img
                className={`${styles['image_4']} ${styles['mt-13']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=81d773c0e29522badbb16c884a4becba.png"
              />
            </div>
            <div
              className={`flex-col justify-start items-center self-start ${styles['text-wrapper']} ${styles['ml-5']}`}
            >
              <span className={`${styles['font_3']} ${styles['text_7']}`}>2</span>
            </div>
            <div
              className={`flex-col justify-start items-center self-start ${styles['image-wrapper']} ${styles['ml-5']}`}
            >
              <img
                className={`${styles['image_4']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=95707291899ff273668a99a745882d63.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['group_2']} ${styles['view_1']}`}>
        <span className={`self-start ${styles['font_4']}`}>Toppings</span>
        <div className={`flex-row ${styles['group_9']} ${styles['horiz-list']} ${styles['mt-11']}`}>
          <div className={`flex-col justify-start ${styles['group_10']} ${styles['horiz-list-item']}`}>
            <div className={`flex-col justify-start items-start relative ${styles['section_1']}`}>
              <span className={`${styles['font_2']} ${styles['text_9']}`}>Tomato</span>
              <img
                className={`${styles['image_10']} ${styles['pos_7']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c90b0d2fcc9bc5f873bfdef53292baed.png"
              />
            </div>
            <div className={`flex-col justify-start items-center ${styles['image-wrapper_1']} ${styles['pos_2']}`}>
              <img
                className={`${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9989d3bfaf8d8ed5a3166bd68d271703.png"
              />
            </div>
          </div>
          <div className={`flex-col justify-start ${styles['group_10']} ${styles['horiz-list-item']} ml-30`}>
            <div className={`flex-col justify-start items-start relative ${styles['section_4']}`}>
              <span className={`${styles['font_2']} ${styles['text_10']}`}>Onions</span>
              <img
                className={`${styles['image_10']} ${styles['pos_8']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c90b0d2fcc9bc5f873bfdef53292baed.png"
              />
            </div>
            <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']} ${styles['pos_3']}`}>
              <img
                className={`${styles['image_7']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b3c6fad850c753751f41ddcd28136ee9.png"
              />
            </div>
          </div>
          <div className={`flex-col justify-start ${styles['group_10']} ${styles['horiz-list-item']} ml-30`}>
            <div className={`flex-col justify-start items-start relative ${styles['section_5']}`}>
              <span className={`${styles['font_2']} ${styles['text_1']}`}>Pickles</span>
              <img
                className={`${styles['image_10']} ${styles['pos_9']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c90b0d2fcc9bc5f873bfdef53292baed.png"
              />
            </div>
            <div className={`flex-col justify-start items-center ${styles['image-wrapper_4']} ${styles['pos_4']}`}>
              <img
                className={`${styles['image_8']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8450b69e472d43b3c0a9ac7fac6445ed.png"
              />
            </div>
          </div>
          <div className={`flex-col justify-start items-start ${styles['group_10']} ${styles['group_11']} ml-30`}>
            <div className={`flex-col justify-start items-start relative ${styles['section_6']}`}>
              <span className={`${styles['font_2']} ${styles['text_11']}`}>Bacons</span>
              <img
                className={`${styles['image_11']} ${styles['pos_10']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=84f31cdfd7aa51f19e4f92d49c6f4e31.png"
              />
            </div>
            <div className={`flex-col justify-start items-center ${styles['image-wrapper_3']} ${styles['pos_5']}`}>
              <img
                className={`${styles['image_9']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=120d0917100556d1c88ef827914e1597.png"
              />
            </div>
            <img
              className={`${styles['image_5']} ${styles['pos_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5934f1ff8afac051f73ddc1212f98f3b.png"
            />
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['group_2']} ${styles['view_2']}`}>
        <span className={`self-start ${styles['font_4']} ${styles['text_12']}`}>Side options</span>
        <div className={`flex-row ${styles['group_9']} ${styles['horiz-list']} ${styles['mt-11']}`}>
          <div className={`flex-col justify-start ${styles['group_10']} ${styles['horiz-list-item_2']}`}>
            <div className={`flex-row justify-between items-center relative ${styles['section_11']}`}>
              <span className={`${styles['font_2']} ${styles['text_13']}`}>Fries</span>
              <img
                className={`${styles['image_18']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=766e308eaf704c0b21b712a5031c0db6.png"
              />
            </div>
            <div className={`flex-col justify-start items-center ${styles['section_7']} ${styles['pos_11']}`}>
              <div className={`${styles['section_10']}`}></div>
              <img
                className={`${styles['image_15']} ${styles['pos_18']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1b07243b3c002a9dd6557bbc55bf5ef1.png"
              />
            </div>
          </div>
          <div className={`flex-col justify-start ${styles['group_10']} ${styles['horiz-list-item_2']} ml-30`}>
            <div className={`flex-row justify-evenly items-center relative ${styles['section_13']}`}>
              <span className={`${styles['font_2']}`}>Coleslaw</span>
              <img
                className={`${styles['image_18']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=766e308eaf704c0b21b712a5031c0db6.png"
              />
            </div>
            <div className={`flex-col justify-start items-center ${styles['section_7']} ${styles['pos_12']}`}>
              <div className={`${styles['section_10']}`}></div>
              <img
                className={`${styles['image_14']} ${styles['pos_17']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8801c64dc05afa2284b6cdb3f5ad2396.png"
              />
            </div>
          </div>
          <div className={`flex-col justify-start ${styles['group_10']} ${styles['horiz-list-item_2']} ml-30`}>
            <div className={`flex-row justify-between items-center relative ${styles['section_14']}`}>
              <span className={`${styles['font_2']}`}>Salad</span>
              <img
                className={`${styles['image_18']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=766e308eaf704c0b21b712a5031c0db6.png"
              />
            </div>
            <div className={`flex-col justify-start items-center ${styles['section_8']} ${styles['pos_13']}`}>
              <img
                className={`${styles['image_16']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d10fe287dd4817b3beb5e434b3df5800.png"
              />
              <img
                className={`${styles['image_12']} ${styles['pos_14']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=99f11d6ae267641687646802303387c5.png"
              />
            </div>
          </div>
          <div className={`flex-col justify-start items-start ${styles['group_10']} ${styles['group_12']} ml-30`}>
            <div className={`flex-row items-center relative ${styles['section_12']}`}>
              <span className={`${styles['font_2']} ${styles['text_14']}`}>Onion</span>
              <img
                className={`shrink-0 ${styles['image_19']} ml-24`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b0ab71c64fa94debcff2a028bd37117a.png"
              />
            </div>
            <div className={`flex-col justify-start items-center ${styles['section_9']} ${styles['pos_15']}`}>
              <img
                className={`${styles['image_17']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4b0fc8494208b32b5e96b52885dbb58d.png"
              />
              <img
                className={`${styles['image_13']} ${styles['pos_16']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8dc3d230692d0b2500b2aea86db1c347.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-row justify-between ${styles['group_13']}`}>
        <div className={`flex-col items-start ${styles['group_14']}`}>
          <span className={`${styles['font_4']} ${styles['text_15']}`}>Total</span>
          <div className={`${styles['mt-21']}`}>
            <span className={`${styles['text_18']}`}>$</span>
            <span className={`${styles['text_17']}`}>16.49</span>
          </div>
        </div>
        <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']}`}>
          <span className={`${styles['font_3']} ${styles['text_16']}`}>ORDER NOW</span>
        </div>
      </div>
    </div>
  );
}

Product_5_173_1491.defaultProps = { className: '' };