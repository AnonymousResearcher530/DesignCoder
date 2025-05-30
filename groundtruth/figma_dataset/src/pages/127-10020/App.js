import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function IPhone_13_mini_19_127_10020(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between self-start ${styles['section']}`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2d060532caa92fe7a6261af9f6b8a585.png"
        />
        <div className={`flex-row items-center self-start ${styles['group']}`}>
          <img
            className={`${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=17e9baa9c5759dab58a21384d4569469.png"
          />
          <img
            className={`${styles['image_2']} ml-10`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=87dea97ba96c1e06f5b7eeee26e86034.png"
          />
        </div>
      </div>
      <div className={`flex-col self-stretch ${styles['group_1']}`}>
        <div className={`flex-col self-stretch ${styles['group_2']}`}>
          <div className={`flex-row ${styles['horiz-list']}`}>
            <img
              className={`${styles['horiz-list-item']} ${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9b0cf82bfe68d2bd360bef950c1b99a0.png"
            />
            <img
              className={`${styles['image_1']} ${styles['horiz-list-item_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=dbf27e2c1fef04631bcf18271b03192c.png"
            />
            <img
              className={`${styles['image_5']} ${styles['horiz-list-item_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b9ed8eaafaacbcd26cc1ee9217858288.png"
            />
            <img
              className={`${styles['image_5']} ${styles['horiz-list-item_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=73ab46f8787329d357a918d261bc9d60.png"
            />
            <img
              className={`${styles['horiz-list-item_3']} ${styles['image_21']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7a44145a5866aa78efa733d55b9af676.png"
            />
          </div>
          <div className={`flex-col ${styles['group_3']} ${styles['mt-25']}`}>
            <span className={`self-start ${styles['font']} ${styles['text_1']}`}>
              I have a bad habit of spending here because
            </span>
            <div className={`flex-col items-start self-stretch ${styles['list']}`}>
              {data.items.map((item, index) => (
                <div className={`flex-col ${styles['group_4']}`} key={index}>
                  <span className={`self-stretch ${styles['font']}`}>
                    I’ll see something that's Rs 27000 and my goes “ it’s okay that's only like $250 USD”
                  </span>
                  <span className={`self-start ${styles['font_2']} mt-18`}>19h ago/ 1 mil</span>
                  <div className={`flex-row items-center self-stretch mt-18`}>
                    <img
                      className={`${styles['image_6']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c14a0be826885d903e1c10220b381556.png"
                    />
                    <img
                      className={`${styles['image_7']} ml-10`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=85746bbedaa2c156997e67314ae4e33e.png"
                    />
                    <span className={`${styles['font_3']} ml-10`}>28</span>
                    <img
                      className={`${styles['image_8']} ml-10`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=09f9ee6b80a58afdccda73f0ced6fbfc.png"
                    />
                    <img
                      className={`${styles['image_9']} ml-10`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bcf0d40bd4318bbb52a95461ad2c7912.png"
                    />
                    <img
                      className={`${styles['image_10']} ml-10`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b423ff680dcdc04d09a6f0d3893904b2.png"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`flex-row items-center self-center ${styles['mt-15']}`}>
          <div className={`flex-row items-center flex-1 ${styles['section_3']}`}>
            <img
              className={`${styles['image_14']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c4cfb68692eaf71173965fc0f26b8858.png"
            />
            <span className={`${styles['text_2']} ${styles['ml-11']}`}>Chat something....</span>
          </div>
          <img
            className={`shrink-0 ${styles['image_2']} ml-16`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ae9dcc9dfe298752dda0ce3cdf80bdc2.png"
          />
        </div>
        <div className={`flex-row justify-between items-center self-center ${styles['group_6']} ${styles['mt-15']}`}>
          <img
            className={`${styles['image_16']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c362bb38ee1da6f7894f699e26782ae5.png"
          />
          <img
            className={`${styles['image_17']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a0b3d2b995464429abe1f847dcce0122.png"
          />
          <img
            className={`${styles['image_14']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0410c8b763084269bfa17b506e9f6f4a.png"
          />
          <img
            className={`${styles['image_18']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f8dcd5f56d64d32c59cb81fd58538a4d.png"
          />
          <img
            className={`${styles['image_14']} ${styles['image_19']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=323dcf7b1a8a02f4a09072e63f655d2d.png"
          />
        </div>
      </div>
    </div>
  );
}

IPhone_13_mini_19_127_10020.defaultProps = { className: '' };