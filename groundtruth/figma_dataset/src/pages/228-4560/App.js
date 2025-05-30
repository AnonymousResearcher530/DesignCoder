import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Shaixuan_jiageshuru_228_4560(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-end items-center self-stretch ${styles['section']}`}>
        <img
          className={`${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=78d1177c05e5cdd0f508de9047362b8a.png"
        />
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=950e06546b96b07735eecaf618cc69e5.png"
        />
        <span className={`${styles['text']}`}>12:30</span>
      </div>
      <div className={`flex-col self-end relative ${styles['section_3']}`}>
        <div className={`flex-row justify-between items-center relative ${styles['group']}`}>
          <span className={`${styles['font_2']}`}>Sleeve Style</span>
          <span className={`${styles['font_3']}`}>Any</span>
          <div className={`flex-row justify-between items-center ${styles['section_4']} ${styles['pos']}`}>
            <div className={`flex-row items-center`}>
              <span className={`${styles['font']} ${styles['text_3']}`}>RESET</span>
              <div className={`flex-col items-center shrink-0 ${styles['ml-49']}`}>
                <span className={`${styles['text_2']}`}>FILTER</span>
                <span className={`${styles['text_5']} mt-6`}>120 items</span>
              </div>
            </div>
            <span className={`${styles['font']} ${styles['text_4']}`}>Done</span>
          </div>
        </div>
        <div className={`flex-row justify-between ${styles['group_2']} ${styles['view']}`}>
          <span className={`self-start ${styles['font']}`}>Silhouette</span>
          <span className={`self-center ${styles['font_3']}`}>Any</span>
        </div>
        <div className={`flex-row justify-center items-end ${styles['group_3']}`}>
          <span className={`${styles['font']}`}>Show more</span>
          <img
            className={`${styles['image_3']} ${styles['ml-15-5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c5c090324a929bcb5d20ca7217c99568.png"
          />
        </div>
        <div className={`flex-row justify-between items-center ${styles['group_2']} ${styles['view_2']}`}>
          <span className={`${styles['font_2']}`}>Ship from</span>
          <span className={`${styles['font_3']}`}>Any</span>
        </div>
        <div className={`flex-row justify-between items-center ${styles['group_4']}`}>
          <span className={`${styles['font_4']} ${styles['text_6']}`}>Ship to</span>
          <div className={`flex-row items-center ${styles['group_5']}`}>
            <img
              className={`shrink-0 ${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fd371d4322226eedfa6c829bf59f0d02.png"
            />
            <span className={`${styles['font']} ${styles['ml-16-5']}`}>United States</span>
          </div>
        </div>
        <div className={`flex-col ${styles['group_6']}`}>
          <div className={`flex-row justify-between ${styles['group_7']}`}>
            <span className={`self-start ${styles['font_4']} ${styles['text_9']}`}>Price Range</span>
            <div className={`flex-row items-center self-center ${styles['group_8']}`}>
              <span className={`${styles['font']} ${styles['text_7']}`}>Min.</span>
              <span className={`${styles['text_10']}`}>－</span>
              <span className={`${styles['font_5']} ${styles['text_8']}`}>Max.</span>
            </div>
          </div>
          <div className={`flex-col items-end`}>
            <div className={`shrink-0 ${styles['section_5']}`}></div>
            <div className={`shrink-0 ${styles['section_6']}`}></div>
          </div>
        </div>
        <div className={`flex-row justify-between items-center ${styles['group_1']}`}>
          <span className={`${styles['font_5']} ${styles['text_11']}`}>Freeshipping</span>
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e73c050b485cbf4fa82e7eee42bb9589.png"
          />
        </div>
      </div>
      <img
        className={`self-stretch ${styles['image_6']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ac368d196bbd19da1e703efdab700657.png"
      />
      <div className={`flex-row justify-between items-center self-stretch ${styles['section_7']}`}>
        <div className={`flex-row items-center`}>
          <img
            className={`${styles['equal-division-item']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9c755e6798409bc441033fd3ac2feecb.png"
          />
        </div>
        <div className={`${styles['group_9']}`}></div>
        <div className={`${styles['group_10']}`}></div>
      </div>
    </div>
  );
}

Shaixuan_jiageshuru_228_4560.defaultProps = { className: '' };