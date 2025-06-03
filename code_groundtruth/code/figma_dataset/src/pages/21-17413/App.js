import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Page_13_C_Pharmacy_21_17413(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start ${styles['section']}`}>
        <div className={`flex-row justify-between items-center ${styles['section_2']}`}>
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=248d2b7bedb9b973e424151c0f038940.png"
          />
          <span className={`${styles['text']} ${styles['text_2']}`}>MediCure Pharmacy</span>
        </div>
      </div>
      <div className={`flex-col ${styles['group']}`}>
        <div className={`flex-col ${styles['group_2']}`}>
          <div className={`flex-row justify-between items-center`}>
            <span className={`${styles['font']} ${styles['text']} ${styles['text_3']}`}>MediCure Pharmacy</span>
            <img
              className={`${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2b6dc4a4460616fa3928b42f152cb310.png"
            />
          </div>
          <span className={`${styles['font_2']} ${styles['text_4']} ${styles['mt-11']}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus nulla ac porttitor rutrum. Praesent
            dui ante, aliquet sit amet est at, ornare imperdiet massa.
          </span>
        </div>
        <div className={`flex-col ${styles['group_1']} mt-18`}>
          <div className={`flex-row items-center`}>
            <span className={`${styles['font_3']}`}>Address:</span>
            <span className={`${styles['font_4']} ${styles['text']} ${styles['text_5']} ${styles['ml-7']}`}>
              778 Locust View Drive Oakland, CA
            </span>
          </div>
          <div className={`flex-row items-center relative ${styles['group_4']}`}>
            <span className={`${styles['font_3']}`}>Phone:</span>
            <span className={`${styles['font_4']} ${styles['text']} ${styles['text_6']} ml-18`}>(323) 302-9912</span>
          </div>
        </div>
        <div className={`flex-col ${styles['group_1']} mt-18`}>
          <div className={`flex-row items-center self-stretch`}>
            <span className={`${styles['font_3']}`}>Attention schedule:</span>
            <span className={`${styles['font_4']} ${styles['text']} ${styles['text_5']} ${styles['ml-3']}`}>
              7:15 aM - 6:30 pM
            </span>
          </div>
          <span className={`self-end ${styles['font_4']} ${styles['text']} ${styles['text_7']}`}>
            Monday to Saturday
          </span>
        </div>
      </div>
      <div className={`${styles['divider']}`}></div>
      <div className={`flex-col ${styles['group_5']}`}>
        <span className={`self-start ${styles['font']} ${styles['text_8']} ${styles['text_9']}`}>user frequency</span>
        <div className={`flex-col self-stretch ${styles['view_2']}`}>
          <div className={`flex-row items-center`}>
            <span className={`${styles['font_5']} ${styles['text']}`}>7:15 aM - 12:00 PM</span>
            <div className={`flex-col justify-start items-end flex-1 ${styles['text-wrapper']} ml-4`}>
              <span className={`${styles['font_2']} ${styles['text']} ${styles['text_10']}`}>20%</span>
            </div>
          </div>
          <div className={`flex-row items-center ${styles['mt-3']}`}>
            <span className={`${styles['font_5']} ${styles['text']}`}>1:00 pM - 4:00 PM</span>
            <div className={`flex-col justify-start items-end flex-1 ${styles['text-wrapper_2']} ${styles['ml-7']}`}>
              <span className={`${styles['font_2']} ${styles['text']} ${styles['text_11']}`}>50%</span>
            </div>
          </div>
          <div className={`flex-row ${styles['mt-3']}`}>
            <span className={`self-center ${styles['font_5']} ${styles['text']}`}>5:00 pM - 6:30 PM</span>
            <div
              className={`flex-col justify-start items-end flex-1 self-stretch ${styles['text-wrapper_3']} ${styles['ml-5']}`}
            >
              <span className={`${styles['font_2']} ${styles['text']} ${styles['text_1']}`}>80%</span>
            </div>
          </div>
        </div>
        <div className={`flex-row items-center self-stretch ${styles['group_7']}`}>
          <span className={`${styles['text_8']} ${styles['text_12']}`}>recommended</span>
          <img
            className={`${styles['image_3']} ${styles['ml-5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2f017de8dcc947ea3f1a1adc27d70089.png"
          />
        </div>
        <div className={`flex-col justify-start items-center self-stretch ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ffb7c9832c7af78472b19286a38fa926.png"
          />
        </div>
        <div className={`flex-row justify-between items-center self-stretch ${styles['group_8']}`}>
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=84cf0315345ff589ed71d465abb6e91b.png"
          />
          <img
            className={`${styles['image_5']} ${styles['image_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=dc08ac58d0290928449e4c6cef51a4d7.png"
          />
        </div>
      </div>
      <div className={`flex-col justify-start items-center ${styles['section_3']}`}>
        <div className={`flex-row`}>
          <img
            className={`${styles['equal-division-item_1']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=32163c36729e3e2856c83acb79fba34f.png"
          />
          <img
            className={`${styles['equal-division-item']} ${styles['ml-47']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9a8f0999b5f7fb7556db53ece297cd1e.png"
          />
          <img
            className={`${styles['equal-division-item_3']} ${styles['ml-47']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=290519311ed4a724f16dddc9ca2f8dfe.png"
          />
          <img
            className={`${styles['equal-division-item_4']} ${styles['ml-47']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f65f7d51325afa47cd073af5e08740dd.png"
          />
        </div>
      </div>
    </div>
  );
}

Page_13_C_Pharmacy_21_17413.defaultProps = { className: '' };