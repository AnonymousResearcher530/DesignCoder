import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function No_Notifications_Found_23_12655(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col items-center ${styles['group']}`}>
        <img
          className={`shrink-0 ${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2228aa3f7ac131163c58ab632ab259af.png"
        />
        <span className={`${styles['text_2']}`}>No notification, yet!</span>
        <span className={`${styles['font']} ${styles['text_3']}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua
        </span>
      </div>
      <div className={`flex-col relative ${styles['section']}`}>
        <div className={`flex-row justify-between ${styles['group_2']}`}>
          <span className={`self-start ${styles['text']}`}>Notification</span>
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7466830194c1f00137d6056469e4fa29.png"
          />
        </div>
        <div className={`${styles['divider']} mt-22`}></div>
      </div>
      <div className={`flex-row justify-between items-center ${styles['section_2']}`}>
        <img
          className={`${styles['image_3']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c2adf7270210aff5e2889463bceda8aa.png"
        />
        <img
          className={`${styles['image_4']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1f6d33c4513e8f416c90a3e5fa1a1b16.png"
        />
        <div className={`flex-row items-center ${styles['section_3']}`}>
          <img
            className={`shrink-0 ${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a31362974e2b3bcbffe71cd17b1178a0.png"
          />
          <span className={`${styles['font']} ${styles['text_4']} ml-8`}>Notification</span>
        </div>
        <img
          className={`${styles['image_6']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d6be17e880249386e29994e6c26fb123.png"
        />
      </div>
    </div>
  );
}

No_Notifications_Found_23_12655.defaultProps = { className: '' };