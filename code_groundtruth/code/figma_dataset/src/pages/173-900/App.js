import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Screen_3_173_900(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col ${styles['group']}`}>
        <img
          className={`shrink-0 ${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0544846ad0991637751fa166cf9423b5.png"
        />
        <div className={`flex-col relative ${styles['group_1']}`}>
          <div className={`flex-row justify-between items-baseline self-stretch ${styles['group_2']}`}>
            <span className={`${styles['font']} ${styles['text']}`}>Coeurdes Alpes</span>
            <span className={`${styles['font_2']} ${styles['text_2']}`}>Show map</span>
          </div>
          <div className={`flex-row items-center self-stretch ${styles['group_3']}`}>
            <img
              className={`${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9b601ed288181c74577271fbf8ab53df.png"
            />
            <span className={`${styles['font_3']} ${styles['text_3']} ${styles['ml-7']}`}>4.5 (355 Reviews)</span>
          </div>
          <span className={`self-start ${styles['text_4']}`}>
            Aspen is as close as one can get to a storybook alpine town in America. The choose-your-own-adventure
            possibilities—skiing, hiking, dining shopping and ....
          </span>
          <div className={`flex-row items-end self-stretch ${styles['group_4']}`}>
            <span className={`${styles['font_2']} ${styles['text_5']}`}>Read more</span>
            <img
              className={`${styles['image_3']} ${styles['ml-7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=678307dff5f1d761700a03a8fcab7573.png"
            />
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['group_5']}`}>
        <span className={`self-start ${styles['text_6']}`}>Facilities</span>
        <div className={`flex-row justify-evenly items-center self-stretch ${styles['mt-21']}`}>
          <div className={`flex-col items-center ${styles['section']}`}>
            <img
              className={`${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2c5c0ed3998f43a5e778cd10471a905c.png"
            />
            <span className={`${styles['font_4']} ${styles['text_7']} mt-8`}>1 Heater</span>
          </div>
          <div className={`flex-col items-center ${styles['section_2']}`}>
            <img
              className={`${styles['image_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e2cc70dca5497bbf10744148ab8213d4.png"
            />
            <span className={`${styles['font_4']} ${styles['text_8']} mt-8`}>Dinner</span>
          </div>
          <div className={`flex-col items-center ${styles['section_3']}`}>
            <img
              className={`${styles['image_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d5dc44dab74974bd05c4096bc75882f6.png"
            />
            <span className={`${styles['font_4']} mt-8`}>1 Tub</span>
          </div>
          <div className={`flex-col items-center ${styles['section_4']}`}>
            <img
              className={`${styles['image_7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8bdc4b0046f435dc73fb4ee14adc7bdd.png"
            />
            <span className={`${styles['font_4']} mt-8`}>Pool</span>
          </div>
        </div>
      </div>
      <div className={`flex-row justify-between items-center ${styles['group_6']}`}>
        <div className={`flex-col items-start`}>
          <span className={`${styles['font_3']} ${styles['text_9']}`}>Price</span>
          <span className={`${styles['font']} ${styles['text_11']} mt-10`}>$199</span>
        </div>
        <div className={`flex-row items-center ${styles['section_5']}`}>
          <span className={`${styles['text_10']}`}>Book Now</span>
          <img
            className={`${styles['image_8']} ml-6`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5e5166d9f9bba1a7fcb17c761461ab5c.png"
          />
        </div>
      </div>
    </div>
  );
}

Screen_3_173_900.defaultProps = { className: '' };