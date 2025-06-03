import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Search_jieguo2_228_4317(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <img
        className={`${styles['image']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a3ab9d896f035ea57c347b40ef678259.png"
      />
      <div className={`flex-col`}>
        <div className={`flex-row justify-between items-center ${styles['section']}`}>
          <div className={`flex-row items-center`}>
            <span className={`${styles['font']} ${styles['text']}`}>Best Match</span>
            <img
              className={`shrink-0 ${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e75ff74a9586210d61114c35337ca2e9.png"
            />
          </div>
          <div className={`flex-row ${styles['group']}`}>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1067d5712ce5cfcc8b9d744af36102e9.png"
            />
            <div className={`${styles['section_2']}`}></div>
            <img
              className={`${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8f22b8426743ad02b796a6927865f27c.png"
            />
          </div>
        </div>
        <div className={`flex-col ${styles['list']}`}>
          {data.items.map((item, index) => (
            <div className={`flex-col justify-start ${styles['list-item']}`} key={index}>
              <div className={`flex-row ${styles['group_2']}`}>
                <img
                  className={`shrink-0 ${styles['image_5']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2ba967fab561bf3d756435f9fe2e7feb.png"
                />
                <div className={`flex-col ${styles['group_3']} ml-12`}>
                  <div className={`flex-col ${styles['group_4']}`}>
                    <span className={`self-stretch ${styles['font']}`}>
                      The Always List Sub Nike Men’s Cotton in Naval Blue…
                    </span>
                    <span className={`self-start ${styles['font_2']} ${styles['mt-3']}`}>US $199.98</span>
                  </div>
                  <div className={`flex-row justify-between items-end ${styles['mt-35']}`}>
                    <div className={`flex-col`}>
                      <span className={`${styles['font_3']}`}>Free shipping</span>
                      <div className={`flex-row ${styles['mt-6-5']}`}>
                        <span className={`${styles['font_4']}`}>4.3</span>
                        <img
                          className={`shrink-0 ${styles['image_6']} ml-6`}
                          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=499d286dc4c22163b393ea93fe02eb77.png"
                        />
                      </div>
                    </div>
                    <span className={`${styles['font_5']}`}>1,982 Orders</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`flex-row justify-between items-center ${styles['section_3']}`}>
        <div className={`flex-row items-center`}>
          <img
            className={`${styles['equal-division-item']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9c755e6798409bc441033fd3ac2feecb.png"
          />
        </div>
        <div className={`${styles['group_5']}`}></div>
        <div className={`${styles['group_6']}`}></div>
      </div>
    </div>
  );
}

Search_jieguo2_228_4317.defaultProps = { className: '' };