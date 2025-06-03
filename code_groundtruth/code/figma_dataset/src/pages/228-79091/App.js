import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Home_228_79091(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between ${styles['group_2']}`}>
        <span className={`${styles['text']}`}>9:41</span>
        <div className={`flex-row`}>
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=be72bddd4c8bb5ba3d1df7117538ec72.png"
          />
          <img
            className={`${styles['image_2']} ${styles['ml-5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=28d6ce48787177a523d26168c79455ee.png"
          />
          <img
            className={`${styles['image_3']} ${styles['ml-5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1d1e95c45803afb0e5709cde61cb39c7.png"
          />
        </div>
      </div>
      <div className={`flex-col ${styles['group_3']}`}>
        <div className={`flex-row justify-between items-center ${styles['group_4']}`}>
          <img
            className={`${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7b14b3147f22190aa2feaf21d5fece6f.png"
          />
          <div className={`${styles['group_5']}`}>
            <span className={`${styles['font']} ${styles['text_2']}`}>
              Make home
              <br />
            </span>
            <span className={`${styles['font']} ${styles['text_3']}`}>BEAUTIFUL</span>
          </div>
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=da28b777dcd9d8a75753a23d85d5b435.png"
          />
        </div>
        <div className={`flex-row ${styles['horiz-list']} ${styles['group_6']}`}>
          <div className={`flex-col items-center ${styles['group_7']} ${styles['group_1']}`}>
            <img
              className={`${styles['image_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=cc8706e001846577961835ff9878f478.png"
            />
            <span className={`${styles['font_2']} ${styles['text_4']} ${styles['mt-9']}`}>Popular</span>
          </div>
          <div className={`flex-col items-center ${styles['group_8']} ${styles['group_13']}`}>
            <img
              className={`${styles['image_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3c691d550d0fc6474e0cbf028842348f.png"
            />
            <span className={`${styles['font_3']} ${styles['text_5']} ${styles['mt-9']}`}>Chair</span>
          </div>
          <div className={`flex-col items-center ${styles['group_9']} ${styles['horiz-list-item_3']}`}>
            <img
              className={`${styles['image_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7f736ab3e1c136410f568944a0f4796b.png"
            />
            <span className={`${styles['font_3']} ${styles['mt-9']}`}>Table</span>
          </div>
          <div className={`flex-col items-center ${styles['group_10']} ${styles['horiz-list-item_3']}`}>
            <img
              className={`${styles['image_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8acf811c1ab07586d1c3906b5aab0924.png"
            />
            <span className={`${styles['font_3']} ${styles['mt-9']}`}>Armchair</span>
          </div>
          <div className={`flex-col items-center ${styles['group_11']} ${styles['horiz-list-item_3']}`}>
            <img
              className={`${styles['image_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c27e501796b351059d7ed3a523fa48b2.png"
            />
            <span className={`${styles['font_3']} ${styles['mt-9']}`}>Bed</span>
          </div>
          <div className={`flex-col ${styles['horiz-list-item_2']} ${styles['group_12']}`}>
            <div className={`self-center ${styles['section']}`}></div>
            <span className={`self-start ${styles['font_3']} ${styles['mt-9']}`}>Lamb</span>
          </div>
        </div>
        <div className={`${styles['grid']}`}>
          <div className={`flex-col ${styles['grid-item']}`}>
            <div className={`flex-col justify-start items-end self-stretch ${styles['image-wrapper']}`}>
              <img
                className={`${styles['image_7']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9fd1222402e09e96fd8c6f5e3277ce8f.png"
              />
            </div>
            <span className={`self-start ${styles['font_4']} ${styles['text_6']} mt-12`}>Black Simple Lamp</span>
            <span className={`self-start ${styles['font_2']} mt-12`}>$ 12.00</span>
          </div>
          <div className={`flex-col ${styles['grid-item']}`}>
            <div className={`flex-col justify-start items-end self-stretch ${styles['image-wrapper_2']}`}>
              <img
                className={`${styles['image_7']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9fd1222402e09e96fd8c6f5e3277ce8f.png"
              />
            </div>
            <span className={`self-start ${styles['font_5']} ${styles['text_7']} mt-14`}>Minimal Stand</span>
            <span className={`self-start ${styles['font_2']} ${styles['text_8']} mt-14`}>$ 25.00</span>
          </div>
          <div className={`flex-col items-start ${styles['grid-item_2']}`}>
            <img
              className={`${styles['image_8']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=cb1b904a509e28004733558d09c298f7.png"
            />
            <span className={`${styles['font_5']} ${styles['text_9']} mt-14`}>Coffee Chair</span>
            <span className={`${styles['font_2']} mt-14`}>$ 20.00</span>
          </div>
          <div className={`flex-col ${styles['grid-item_2']}`}>
            <div className={`flex-col justify-start items-end self-stretch ${styles['image-wrapper_3']}`}>
              <img
                className={`${styles['image_7']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9fd1222402e09e96fd8c6f5e3277ce8f.png"
              />
            </div>
            <span className={`self-start ${styles['font_4']} ${styles['text_10']} mt-12`}>Simple Desk</span>
            <span className={`self-start ${styles['font_2']} ${styles['text_11']} mt-12`}>$ 50.00</span>
          </div>
        </div>
      </div>
      <div className={`flex-col justify-start items-center ${styles['section_2']}`}>
        <div className={`flex-row items-center`}>
          <img
            className={`${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=279634e4cb6a4b0b946eedbfac432fee.png"
          />
          <img
            className={`${styles['image_4']} ml-66`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2622a2b3f4de7d4b5d9561217b333679.png"
          />
          <img
            className={`${styles['image_4']} ml-66`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=05463d85b608a36e98fe6824dfdedb9c.png"
          />
          <img
            className={`${styles['equal-division-item']} ml-66`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a279ed02432b87c29bec5d64db7b81ae.png"
          />
        </div>
      </div>
    </div>
  );
}

Home_228_79091.defaultProps = { className: '' };