import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function WhatsApp_Chats_127_11036(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null, null, null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-center relative ${styles['section']}`}>
        <span className={`${styles['font']} ${styles['text']} ${styles['pos_2']}`}>Edit</span>
        <span className={`${styles['font_2']} ${styles['text_2']}`}>Chats</span>
        <img
          className={`${styles['image']} ${styles['pos']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d8aba42e35b95dad52e8cb31f902eb5b.png"
        />
      </div>
      <div className={`flex-row justify-between items-center relative ${styles['section_2']}`}>
        <span className={`${styles['font']} ${styles['text_3']}`}>Broadcast Lists</span>
        <span className={`${styles['font']} ${styles['text_4']}`}>New Group</span>
      </div>
      <div className={`flex-row ${styles['group']}`}>
        <div className={`flex-col shrink-0 ${styles['section_3']}`}>
          <div className={`flex-row justify-between items-center`}>
            <span className={`${styles['font_3']} ${styles['text_5']}`}>Martin Randolph</span>
            <span className={`${styles['font_4']} ${styles['text_6']}`}>11/19/19</span>
          </div>
          <div className={`flex-col ${styles['group_2']} mt-4`}>
            <img
              className={`self-end ${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=03c925f1beacb09be506a1627d2a51c6.png"
            />
            <span className={`self-start ${styles['font_4']} ${styles['text_7']}`}>Yes, 2pm is awesome</span>
          </div>
        </div>
        <div className={`flex-col items-center shrink-0 ${styles['section_4']}`}>
          <img
            className={`${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5c5d07783c2cf5b8584c8234b003eba7.png"
          />
          <span className={`${styles['font_5']} ${styles['text_8']} mt-16`}>More</span>
        </div>
        <div className={`flex-col items-center shrink-0 ${styles['section_5']}`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f9c6bd62b2f00b97c1eb02e120c112ae.png"
          />
          <span className={`${styles['font_5']} ${styles['text_9']} ${styles['mt-9']}`}>Archive</span>
        </div>
      </div>
      <div className={`flex-col`}>
        {data.items.map((item, index) => (
          <div className={`flex-row self-stretch ${styles['list-item']}`} key={index}>
            <img
              className={`shrink-0 self-center ${styles['image_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bd6ea3137f7c20c0f04ee640efa32841.png"
            />
            <div className={`flex-col flex-1 self-start ${styles['group_14']}`}>
              <div className={`flex-row justify-between items-baseline`}>
                <span className={`${styles['font_2']} ${styles['text_10']}`}>Andrew Parker</span>
                <span className={`${styles['font_4']}`}>11/16/19</span>
              </div>
              <div className={`flex-row items-center mt-18`}>
                <img
                  className={`${styles['image_8']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1044171573ba1ee337e0f06633dded51.png"
                />
                <span className={`${styles['font_4']} ${styles['text_11']} ${styles['ml-3']}`}>
                  What kind of strategy is better?
                </span>
              </div>
            </div>
            <img
              className={`shrink-0 self-center ${styles['image_6']} ${styles['image_7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=10ff228f388b8735ef0d73f8510b8161.png"
            />
          </div>
        ))}
      </div>
      <div className={`flex-col justify-start relative ${styles['group_8']}`}>
        <div className={`${styles['section_7']}`}></div>
        <div className={`flex-row ${styles['equal-division']} ${styles['section_8']}`}>
          <div className={`flex-col items-center ${styles['equal-division-item_1']}`}>
            <img
              className={`${styles['image_13']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6321cb1590c5f53d67445f579562654b.png"
            />
            <span className={`${styles['font_7']} ${styles['mt-3']}`}>Status</span>
          </div>
          <div className={`flex-col items-center ${styles['group_9']} ${styles['equal-division-item']}`}>
            <img
              className={`${styles['image_13']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9503e0e9632a872de06ba50338a7c8b6.png"
            />
            <span className={`${styles['font_7']} ${styles['text_24']} ${styles['mt-3']}`}>Calls</span>
          </div>
          <div className={`flex-col items-center ${styles['group_9']} ${styles['equal-division-item_3']}`}>
            <img
              className={`${styles['image_13']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f7e3251f68af0d7beb437c454b342539.png"
            />
            <span className={`${styles['font_7']} ${styles['mt-3']}`}>Camera</span>
          </div>
          <div className={`flex-col items-center ${styles['group_9']} ${styles['equal-division-item_3']}`}>
            <img
              className={`${styles['image_13']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=70e70c813c485748f0f4535ccb4eb3db.png"
            />
            <span className={`${styles['font_7']} ${styles['text_25']} ${styles['mt-3']}`}>Chats</span>
          </div>
          <div className={`flex-col items-center ${styles['group_10']} ${styles['group_13']}`}>
            <img
              className={`${styles['image_13']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b04af086dd167d9acc8c3266a97393cf.png"
            />
            <span className={`${styles['font_7']} ${styles['text_26']} ${styles['mt-3']}`}>Settings</span>
          </div>
        </div>
      </div>
    </div>
  );
}

WhatsApp_Chats_127_11036.defaultProps = { className: '' };