import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Add_to_basket_173_1960(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col self-start ${styles['group']}`}>
        <div className={`flex-row justify-evenly items-center self-start ${styles['section']}`}>
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8ddd4613362de0fd3a142b107d51d28d.png"
          />
          <span className={`${styles['font']} ${styles['text']}`}>Go back</span>
        </div>
        <img
          className={`self-end ${styles['image_2']} mt-10`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0613f5d6c5a97eeb9981bd5447b73f5d.png"
        />
      </div>
      <div className={`flex-col self-stretch ${styles['section_2']} mt-32`}>
        <div className={`flex-col ${styles['group_2']}`}>
          <span className={`self-start ${styles['text_2']}`}>Quinoa Fruit Salad</span>
          <div className={`flex-row justify-between items-center self-stretch ${styles['mt-31']}`}>
            <div className={`flex-row items-center`}>
              <img
                className={`shrink-0 ${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=863ca6e86650afe8cfa4572c0fee5c64.png"
              />
              <span className={`${styles['font_2']} ${styles['text_3']}`}>1 </span>
              <img
                className={`shrink-0 ${styles['image_4']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=23e84ea846d52b28d08d4601f9d6f923.png"
              />
            </div>
            <div className={`flex-row items-center`}>
              <img
                className={`shrink-0 ${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=eba37f631b654c467040a0023df58269.png"
              />
              <span className={`${styles['font_2']} ${styles['text_4']} ml-6`}>2,000</span>
            </div>
          </div>
        </div>
        <div className={`flex-col ${styles['group_1']}`}>
          <div className={`flex-col items-start self-stretch`}>
            <span className={`${styles['text_5']}`}>One Pack Contains:</span>
            <div className={`${styles['section_3']} ${styles['mt-9']}`}></div>
          </div>
          <span className={`self-stretch ${styles['text_6']}`}>
            Red Quinoa, Lime, Honey, Blueberries, Strawberries, Mango, Fresh mint.
          </span>
          <span className={`self-start ${styles['text_7']}`}>
            If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you. make
          </span>
        </div>
        <div className={`flex-row justify-between ${styles['group_4']}`}>
          <img
            className={`${styles['image_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=10263804c5a7a8ad301748f525d07e39.png"
          />
          <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
            <span className={`${styles['font']} ${styles['text_8']}`}>Add to basket</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Add_to_basket_173_1960.defaultProps = { className: '' };