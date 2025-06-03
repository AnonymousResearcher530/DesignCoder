import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Detail_228_75993(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between self-center ${styles['group']}`}>
        <span className={`${styles['text']}`}>9:41</span>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8e551220045821cae606be3e2b5b09c3.png"
        />
      </div>
      <div className={`flex-row justify-center items-center self-stretch relative ${styles['group_2']}`}>
        <img
          className={`${styles['image_2']} ${styles['pos_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=cc94967109d396fb175e5b85e7c1d9b2.png"
        />
        <span className={`${styles['text_2']}`}>PEUGEOT - LR01</span>
      </div>
      <div className={`flex-col self-stretch ${styles['group_3']}`}>
        <div className={`flex-row justify-between self-stretch relative ${styles['section_2']}`}>
          <div className={`${styles['section_4']}`}></div>
          <div className={`${styles['section_5']}`}></div>
          <div className={`${styles['section_3']} ${styles['pos_3']}`}></div>
        </div>
        <img
          className={`self-center ${styles['image_3']} ${styles['mt-9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=be8680eb719bf75c58c76bb9a920a1df.png"
        />
      </div>
      <div className={`flex-col self-stretch ${styles['section_6']}`}>
        <div className={`flex-row justify-between self-start ${styles['group_4']}`}>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
            <span className={`${styles['text_3']}`}>Description</span>
          </div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']}`}>
            <span className={`${styles['font']} ${styles['text_4']}`}>Specification</span>
          </div>
        </div>
        <div className={`flex-col self-center ${styles['group_5']}`}>
          <span className={`self-start ${styles['text_5']}`}>PEUGEOT - LR01</span>
          <span className={`self-stretch ${styles['font']} ${styles['text_6']} ${styles['mt-19']}`}>
            The LR01 uses the same design as the most iconic bikes from PEUGEOT Cycles' 130-year history and combines it
            with agile, dynamic performance that's perfectly suited to navigating today's cities. As well as a lugged
            steel frame and iconic PEUGEOT black-and-white chequer design, this city bike also features a 16-speed
            Shimano Claris drivetrain.
          </span>
        </div>
        <div className={`flex-row justify-between items-center self-stretch ${styles['section_7']}`}>
          <span className={`${styles['text_7']}`}>$ 1,999.99</span>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_3']}`}>
            <span className={`${styles['font']} ${styles['text_8']}`}>Add to Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Detail_228_75993.defaultProps = { className: '' };