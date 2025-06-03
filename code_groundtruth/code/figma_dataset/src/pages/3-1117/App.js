import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Homepage_3_1117(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-center items-center self-stretch relative ${styles['group']}`}>
        <img
          className={`${styles['image_2']} ${styles['pos_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=317fae69256710733022f1421020ec87.png"
        />
        <span className={`${styles['font']} ${styles['text']}`}>Fluxstore</span>
        <img
          className={`${styles['image']} ${styles['pos']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=917df1cfbf7bf86bdf7daa07c39a5402.png"
        />
      </div>
      <div className={`flex-row ${styles['equal-division']}`}>
        <div className={`flex-col items-center ${styles['group_2']} ${styles['equal-division-item']}`}>
          <img
            className={`${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=79888f75c7ec78f748a0641ff704aa05.png"
          />
          <span className={`mt-10 ${styles['font_2']} ${styles['text_2']}`}>Women</span>
        </div>
        <div className={`flex-col items-center ${styles['group_2']} ${styles['equal-division-item']}`}>
          <img
            className={`${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=762a22c4be45be4abe73da67b2097836.png"
          />
          <span className={`mt-10 ${styles['font_2']}`}>Men</span>
        </div>
        <div className={`flex-col items-center ${styles['group_2']} ${styles['equal-division-item']}`}>
          <img
            className={`${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0bd07ddaf018a5b57bd70056fcf8c3b4.png"
          />
          <span className={`mt-10 ${styles['font_2']}`}>Accessories</span>
        </div>
        <div className={`flex-col items-center ${styles['group_2']} ${styles['equal-division-item']}`}>
          <img
            className={`${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3004244a3f845dd777a7abbfe7175341.png"
          />
          <span className={`mt-10 ${styles['font_2']}`}>Beauty</span>
        </div>
      </div>
      <div className={`flex-col self-center ${styles['section']}`}>
        <div className={`flex-col items-end self-stretch ${styles['group_3']}`}>
          <span className={`${styles['font_3']} ${styles['text_3']}`}>Autumn</span>
          <span className={`${styles['font_3']} ${styles['text_4']}`}>Collection</span>
          <span className={`${styles['font_3']} ${styles['text_5']}`}>2021</span>
        </div>
        <img
          className={`mt-32 self-center ${styles['image_4']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fe4b3d13d0f269c0efd8f4762dbe7852.png"
        />
      </div>
      <div className={`flex-col self-stretch ${styles['group_4']}`}>
        <div className={`flex-row justify-between items-baseline`}>
          <span className={`${styles['font']} ${styles['text_6']}`}>Feature Products</span>
          <span className={`${styles['text_7']}`}>Show all</span>
        </div>
        <div className={`mt-22 flex-row ${styles['horiz-list']}`}>
          <div className={`flex-col items-start ${styles['group_5']} ${styles['horiz-list-item']}`}>
            <img
              className={`${styles['image_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=99ff22975d8f26ad448f9457a23d36b4.png"
            />
            <span className={`${styles['font_4']} ${styles['text_8']} ${styles['text_9']}`}>Turtleneck Sweater </span>
            <span className={`${styles['font_5']} ${styles['text_11']}`}>$ 39.99</span>
          </div>
          <div className={`ml-20 flex-col items-start ${styles['group_5']} ${styles['horiz-list-item']}`}>
            <img
              className={`${styles['image_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=408e10f38b42f349d8d5d133ceeedb53.png"
            />
            <span className={`${styles['font_4']} ${styles['text_8']}`}>Long Sleeve Dress</span>
            <span className={`${styles['font_5']} ${styles['text_12']}`}>$ 45.00</span>
          </div>
          <div className={`ml-20 flex-col ${styles['horiz-list-item_2']} ${styles['group_6']}`}>
            <div className={`self-stretch ${styles['section_2']}`}></div>
            <span className={`self-start ${styles['font_4']} ${styles['text_10']}`}>Sportwear Set</span>
            <span className={`self-start ${styles['font_5']} ${styles['text_13']}`}>$ 80.00</span>
            <img
              className={`${styles['image_6']} ${styles['pos_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6696a8fa8d12b8982a115cba079db99d.png"
            />
          </div>
        </div>
      </div>
      <div className={`flex-row justify-between ${styles['equal-division_2']} ${styles['group_7']}`}>
        <img
          className={`${styles['equal-division-item_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=dd3c1d0ffe7629271f8bee762c8dbfbe.png"
        />
        <img
          className={`${styles['equal-division-item_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0000d1de79e71e7b975941e30b0ef579.png"
        />
        <img
          className={`${styles['equal-division-item_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f78a59b488c18979a7d6acc40e4ccce1.png"
        />
        <img
          className={`${styles['equal-division-item_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=30680a2c3c74a7073278c480c659199b.png"
        />
      </div>
    </div>
  );
}

Homepage_3_1117.defaultProps = { className: '' };