import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Search_jieguo4_228_4445(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col relative ${styles['page']} ${props.className}`}>
      <div className={`${styles['grid']}`}>
        <div className={`flex-col ${styles['grid-item_1']}`}>
          <div className={`flex-col items-start`}>
            <img
              className={`${styles['image_1']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5198a2ddb39211e7b3e505bb45a60f59.png"
            />
            <span className={`${styles['font']} ${styles['text_1']} ${styles['mt-17']}`}>US $199.98</span>
          </div>
          <div className={`flex-col ${styles['group']} mt-34`}>
            <span className={`self-start ${styles['font_2']}`}>Free shipping</span>
            <div className={`flex-row justify-evenly items-center self-stretch ${styles['mt-6-5']}`}>
              <span className={`${styles['font_3']}`}>4.3</span>
              <img
                className={`${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=499d286dc4c22163b393ea93fe02eb77.png"
              />
              <span className={`${styles['font_4']}`}>1,982 Orders</span>
            </div>
          </div>
        </div>
        <div className={`flex-col ${styles['grid-item_1']}`}>
          <div className={`flex-col items-start`}>
            <img
              className={`${styles['image_1']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=aa61ee23d20c1d77a83ca8ddda616a34.png"
            />
            <span className={`${styles['font']} ${styles['text_1']} ${styles['mt-17']}`}>US $199.98</span>
          </div>
          <div className={`flex-col ${styles['group']} mt-34`}>
            <span className={`self-start ${styles['font_2']}`}>Free shipping</span>
            <div className={`flex-row justify-evenly items-center self-stretch ${styles['mt-6-5']}`}>
              <span className={`${styles['font_3']}`}>4.3</span>
              <img
                className={`${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=499d286dc4c22163b393ea93fe02eb77.png"
              />
              <span className={`${styles['font_4']}`}>1,982 Orders</span>
            </div>
          </div>
        </div>
        <div className={`flex-col ${styles['grid-item']}`}>
          <div className={`flex-col items-start`}>
            <img
              className={`${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4507717da7c4ca0bf63927fb5825ffa4.png"
            />
            <span className={`${styles['font']} ${styles['text']} ${styles['mt-16-5']}`}>US $199.98</span>
          </div>
          <div className={`flex-col ${styles['group']} ${styles['mt-35']}`}>
            <span className={`self-start ${styles['font_2']}`}>Free shipping</span>
            <div className={`flex-row justify-evenly items-center self-stretch ${styles['mt-6-5']}`}>
              <span className={`${styles['font_3']}`}>4.3</span>
              <img
                className={`${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=499d286dc4c22163b393ea93fe02eb77.png"
              />
              <span className={`${styles['font_4']}`}>1,982 Orders</span>
            </div>
          </div>
        </div>
        <div className={`flex-col ${styles['grid-item']}`}>
          <div className={`flex-col items-start`}>
            <img
              className={`${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=cde7b5d9d8a6af4d026b4a9444383bac.png"
            />
            <span className={`${styles['font']} ${styles['text']} ${styles['mt-16-5']}`}>US $199.98</span>
          </div>
          <div className={`flex-col ${styles['group']} ${styles['mt-35']}`}>
            <span className={`self-start ${styles['font_2']}`}>Free shipping</span>
            <div className={`flex-row justify-evenly items-center self-stretch ${styles['mt-6-5']}`}>
              <span className={`${styles['font_3']}`}>4.3</span>
              <img
                className={`${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=499d286dc4c22163b393ea93fe02eb77.png"
              />
              <span className={`${styles['font_4']}`}>1,982 Orders</span>
            </div>
          </div>
        </div>
      </div>
      <img
        className={`${styles['image_2']} ${styles['pos']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a7160afc0223a03eab6c5a1cb9eb8493.png"
      />
      <div className={`flex-col justify-start items-center relative ${styles['text-wrapper']}`}>
        <span className={`${styles['text_2']}`}>show more</span>
      </div>
      <div className={`flex-row justify-between items-center relative ${styles['section']}`}>
        <div className={`flex-row items-center`}>
          <img
            className={`${styles['equal-division-item']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9c755e6798409bc441033fd3ac2feecb.png"
          />
        </div>
        <div className={`${styles['group_2']}`}></div>
        <div className={`${styles['group_3']}`}></div>
      </div>
    </div>
  );
}

Search_jieguo4_228_4445.defaultProps = { className: '' };