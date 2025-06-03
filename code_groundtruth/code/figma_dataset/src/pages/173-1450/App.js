import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Product_1_173_1450(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col relative ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start items-center relative ${styles['group']}`}>
        <div className={`${styles['section']}`}></div>
        <img
          className={`${styles['image_3']} ${styles['pos']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c45af7e4c677af09b4ccfe09513356a9.png"
        />
      </div>
      <div className={`flex-row justify-between items-center ${styles['pos_4']}`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=336028ef0a8752ac04f478fb86f5c61b.png"
        />
        <img
          className={`${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=88ffc3f961c15362af2c4d0a6cc47084.png"
        />
      </div>
      <div className={`flex-col relative ${styles['group_2']}`}>
        <span className={`self-start ${styles['text']}`}>Cheeseburger Wendy's Burger</span>
        <div className={`flex-row items-center self-stretch ${styles['group_3']}`}>
          <img
            className={`${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=14b7cc19e71e56ff5bcbf4a9a8194f42.png"
          />
          <span className={`${styles['font']} ml-6`}>4.9</span>
          <div className={`${styles['section_2']} ml-6`}></div>
          <span className={`${styles['font']} ${styles['text_2']} ml-6`}>26 mins</span>
        </div>
        <span className={`self-stretch ${styles['font']} ${styles['text_3']}`}>
          The Cheeseburger Wendy's Burger is a classic fast food burger that packs a punch of flavor in every bite. Made
          with a juicy beef patty cooked to perfection, it's topped with melted American cheese, crispy lettuce, ripe
          tomato, and crunchy pickles.
        </span>
      </div>
      <div className={`flex-col relative ${styles['group_4']}`}>
        <div className={`flex-row justify-between items-center`}>
          <span className={`${styles['text_4']}`}>Spicy</span>
          <span className={`${styles['font']} ${styles['text_5']}`}>Portion</span>
        </div>
        <div className={`flex-row justify-between items-center mt-6`}>
          <div className={`flex-col ${styles['group_5']}`}>
            <div className={`flex-col justify-start relative ${styles['group_6']}`}>
              <div className={`flex-col justify-start items-start relative ${styles['section_4']}`}>
                <div className={`${styles['section_5']}`}></div>
              </div>
              <div className={`${styles['section_3']} ${styles['pos_2']}`}></div>
            </div>
            <div className={`flex-row ${styles['mt-7']}`}>
              <span className={`${styles['font_3']} ${styles['text_7']}`}>Mild</span>
              <span className={`${styles['font_3']} ${styles['text_8']} ${styles['ml-125']}`}>Hot</span>
            </div>
          </div>
          <div className={`flex-row items-center`}>
            <img
              className={`shrink-0 ${styles['image_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=81d773c0e29522badbb16c884a4becba.png"
            />
            <span className={`${styles['font_2']} ${styles['text_6']} ${styles['ml-15']}`}>2</span>
            <img
              className={`shrink-0 ${styles['image_5']} ${styles['ml-15']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=95707291899ff273668a99a745882d63.png"
            />
          </div>
        </div>
      </div>
      <div className={`flex-row relative ${styles['group_7']}`}>
        <div className={`flex-col justify-start items-center shrink-0 relative ${styles['text-wrapper']}`}>
          <span className={`${styles['text_9']}`}>$8.24</span>
        </div>
        <div className={`flex-col justify-start items-center flex-1 ${styles['text-wrapper_2']} ${styles['ml-49']}`}>
          <span className={`${styles['font_2']} ${styles['text_10']}`}>ORDER NOW</span>
        </div>
      </div>
    </div>
  );
}

Product_1_173_1450.defaultProps = { className: '' };