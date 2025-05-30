import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function WhatsApp_Notifications_127_10899(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-center items-center self-stretch relative ${styles['section']}`}>
        <div className={`flex-row items-center ${styles['group']} ${styles['pos']}`}>
          <img
            className={`shrink-0 ${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a67e12f3065f9900031d602e4a27cf96.png"
          />
          <span className={`shrink-0 ${styles['font']} ${styles['text']} ml-6`}>Settings</span>
        </div>
        <span className={`${styles['font_2']} ${styles['text_2']}`}>Notifications</span>
      </div>
      <div className={`flex-col self-stretch ${styles['group_2']}`}>
        <span className={`${styles['text_3']}`}>
          WARNING: Push Notifications are disabled. To enable visit:
          <br />
          iPhone Settings > Notifications > WhatsApp
        </span>
        <div className={`${styles['divider']} ${styles['mt-13']}`}></div>
      </div>
      <div className={`flex-col self-stretch ${styles['group_3']} ${styles['view']}`}>
        <span className={`self-start ${styles['font_3']} ${styles['text_4']} ${styles['text_5']}`}>
          Message notifications
        </span>
        <div className={`flex-col self-stretch ${styles['section_2']} ${styles['mt-9']}`}>
          <div className={`flex-col justify-start ${styles['section_3']}`}>
            <div className={`flex-row justify-between items-center ${styles['group_4']}`}>
              <span className={`${styles['font_2']}`}>Show Notifications</span>
              <img
                className={`${styles['image_2']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d681d168ae6a1a17eb17322f83eea867.png"
              />
            </div>
          </div>
          <div className={`flex-row justify-between ${styles['section_4']}`}>
            <span className={`${styles['font_2']} ${styles['text_6']}`}>Sound</span>
            <div className={`flex-row`}>
              <span className={`${styles['font_4']} ${styles['text_7']}`}>Note</span>
              <img
                className={`shrink-0 ${styles['image_3']} ${styles['ml-11']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1fb30c8d3f5a546f32d1c248ac9098ee.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col self-stretch ${styles['group_3']} ${styles['view_2']}`}>
        <span className={`self-start ${styles['font_3']} ${styles['text_4']} ${styles['text_8']}`}>
          Group notifications
        </span>
        <div className={`flex-col self-stretch ${styles['section_2']} ${styles['mt-9']}`}>
          <div className={`flex-col justify-start ${styles['section_3']}`}>
            <div className={`flex-row justify-between items-center ${styles['group_4']}`}>
              <span className={`${styles['font_2']}`}>Show Notifications</span>
              <img
                className={`${styles['image_2']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d681d168ae6a1a17eb17322f83eea867.png"
              />
            </div>
          </div>
          <div className={`flex-row justify-between ${styles['section_4']}`}>
            <span className={`${styles['font_2']} ${styles['text_6']}`}>Sound</span>
            <div className={`flex-row`}>
              <span className={`${styles['font_4']} ${styles['text_7']}`}>Note</span>
              <img
                className={`shrink-0 ${styles['image_3']} ${styles['ml-11']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1fb30c8d3f5a546f32d1c248ac9098ee.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-row justify-between items-center self-stretch ${styles['section_5']}`}>
        <div className={`flex-col items-center`}>
          <span className={`${styles['font_2']} ${styles['text_9']}`}>In-App Notifications</span>
          <span className={`${styles['font_5']} ${styles['text_10']} mt-8`}>Banners, Sounds, Vibrate</span>
        </div>
        <img
          className={`${styles['image_3']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=10ff228f388b8735ef0d73f8510b8161.png"
        />
      </div>
      <div className={`flex-row justify-between items-center self-stretch ${styles['section_6']}`}>
        <span className={`${styles['font_2']}`}>Show Preview</span>
        <img
          className={`${styles['image_2']} ${styles['image_4']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d681d168ae6a1a17eb17322f83eea867.png"
        />
      </div>
      <span className={`self-start ${styles['font_3']} ${styles['text_11']}`}>
        Preview message text inside new message notifications.
      </span>
      <div className={`flex-col justify-start items-start self-stretch ${styles['text-wrapper']}`}>
        <span className={`${styles['font']} ${styles['text_12']}`}>Reset Notification Settings</span>
      </div>
      <div className={`flex-row ${styles['equal-division']} ${styles['section_7']}`}>
        <div className={`flex-col items-center ${styles['equal-division-item_1']}`}>
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fbeff12e69f072e652926f163b60130f.png"
          />
          <span className={`${styles['font_5']} ${styles['mt-3']}`}>Status</span>
        </div>
        <div className={`flex-col items-center ${styles['group_6']} ${styles['equal-division-item']}`}>
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9503e0e9632a872de06ba50338a7c8b6.png"
          />
          <span className={`${styles['font_5']} ${styles['text_13']} ${styles['mt-3']}`}>Calls</span>
        </div>
        <div className={`flex-col items-center ${styles['group_6']} ${styles['equal-division-item_3']}`}>
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f7e3251f68af0d7beb437c454b342539.png"
          />
          <span className={`${styles['font_5']} ${styles['mt-3']}`}>Camera</span>
        </div>
        <div className={`flex-col items-center ${styles['group_6']} ${styles['equal-division-item_3']}`}>
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=15e5bc6950ea818bf6ffe5e42db22007.png"
          />
          <span className={`${styles['font_5']} ${styles['text_14']} ${styles['mt-3']}`}>Chats</span>
        </div>
        <div className={`flex-col items-center ${styles['equal-division-item_4']} ${styles['group_8']}`}>
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b4ade131ee040db2265d870e18a67f4f.png"
          />
          <span className={`${styles['font_5']} ${styles['text_15']} ${styles['mt-3']}`}>Settings</span>
        </div>
      </div>
    </div>
  );
}

WhatsApp_Notifications_127_10899.defaultProps = { className: '' };