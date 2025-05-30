import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Comprehensive_Health_Assessment_7_21_9603(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col ${styles['section']}`}>
        <div className={`flex-row justify-between`}>
          <div className={`flex-col items-center ${styles['equal-division-item']}`}>
            <img
              className={`${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=cfb6f34855ee87e85707f9a01639593d.png"
            />
            <span className={`${styles['font']} ${styles['text']}`}>128</span>
            <span className={`${styles['font_2']} ${styles['text_2']}`}>mmHg</span>
          </div>
          <div className={`flex-col items-center ${styles['equal-division-item']}`}>
            <img
              className={`${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=35558a460f680b8ca4abebb503e7f08c.png"
            />
            <span className={`${styles['font']} ${styles['text']}`}>87</span>
            <span className={`${styles['font_2']} ${styles['text_2']}`}>bpm</span>
          </div>
        </div>
        <div className={`flex-row justify-between ${styles['group']}`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5707ed3dab2ace2f3400d95a134dfea3.png"
          />
          <img
            className={`${styles['image_3']} ${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=06e10adea523121c1375a74a47a37a98.png"
          />
        </div>
        <div className={`flex-col ${styles['group_2']}`}>
          <div className={`shrink-0 ${styles['section_2']}`}></div>
          <div className={`flex-row justify-between items-center relative ${styles['group_3']}`}>
            <img
              className={`${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b3add94b4a7bd584c5197f2c04d772ad.png"
            />
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6256b1649708ca69cc30270419a74db2.png"
            />
            <div className={`${styles['section_3']} ${styles['pos']}`}></div>
          </div>
        </div>
      </div>
      <div className={`flex-col justify-start relative ${styles['group_4']}`}>
        <div className={`${styles['section_4']}`}></div>
        <div className={`flex-row justify-between ${styles['equal-division']} ${styles['group_5']}`}>
          <img
            className={`${styles['equal-division-item_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=08942ef3e46b2686c6d7fa856db59170.png"
          />
          <img
            className={`${styles['equal-division-item_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f551e0e87786a9d72316194d3433b2e7.png"
          />
        </div>
        <img
          className={`${styles['image_5']} ${styles['pos_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=01af91afe5202f9e8dc2e44bfa4913df.png"
        />
      </div>
    </div>
  );
}

Comprehensive_Health_Assessment_7_21_9603.defaultProps = { className: '' };