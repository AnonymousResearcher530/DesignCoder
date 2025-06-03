import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Sidebar_setting_125_8715(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col justify-start ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start items-start ${styles['section']}`}>
        <div className={`flex-col ${styles['section_2']}`}>
          <div className={`flex-row justify-center items-center self-stretch`}>
            <img
              className={`${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=01c4b92fe20b11eaea3d5a683ff19b7b.png"
            />
            <div className={`flex-col items-start ml-18`}>
              <span className={`${styles['font']} ${styles['text']}`}>Sunie Pham</span>
              <span className={`${styles['text_2']} ${styles['mt-15']}`}>sunieux@gmail.com</span>
            </div>
          </div>
          <div className={`flex-col self-stretch ${styles['group_2']}`}>
            <div className={`flex-row items-center ${styles['group_3']}`}>
              <img
                className={`${styles['image_2']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=929cdc3acb4716274c831dc6d09c265d.png"
              />
              <span className={`${styles['font_2']} ${styles['text_3']} ml-22`}>Homepage</span>
            </div>
            <div className={`flex-row items-center ${styles['group_4']}`}>
              <img
                className={`${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c161486425cb989b7d83a5aac029612f.png"
              />
              <span className={`${styles['font']} ml-22`}>Discover</span>
            </div>
            <div className={`flex-row items-center ${styles['group_5']}`}>
              <img
                className={`${styles['image_4']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=deece725cccf14bec3f27a0693bfa23e.png"
              />
              <span className={`${styles['font_2']} ${styles['text_4']} ${styles['ml-21']}`}>My Order</span>
            </div>
            <div className={`flex-row items-center ${styles['group_1']}`}>
              <img
                className={`${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9b72276a83ae3265a5d5b011ea65092c.png"
              />
              <span className={`${styles['font_2']} ${styles['ml-21']}`}>My profile</span>
            </div>
          </div>
          <div className={`flex-col self-stretch ${styles['group_6']}`}>
            <span className={`self-start ${styles['font_3']} ${styles['text_5']}`}>other</span>
            <div className={`flex-row items-center self-stretch ${styles['section_3']}`}>
              <img
                className={`${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=71545d6c985fa49a8928280e86dc8d18.png"
              />
              <span className={`${styles['font_2']} ${styles['text_6']} ml-22`}>Setting</span>
            </div>
            <div className={`flex-row items-center self-stretch ${styles['group_8']}`}>
              <img
                className={`${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fb8ddbada8a4fab0854670d19ff399af.png"
              />
              <span className={`${styles['font_2']} ${styles['text_7']} ml-22`}>Support</span>
            </div>
            <div className={`flex-row items-center self-stretch ${styles['group_9']}`}>
              <img
                className={`${styles['image_7']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8b05ba947807d90fbef35622851ef871.png"
              />
              <span className={`${styles['font']} ${styles['text_8']} ml-20`}>About us</span>
            </div>
          </div>
          <div className={`flex-row ${styles['equal-division']} ${styles['section_4']}`}>
            <div className={`flex-row items-center ${styles['equal-division-item']}`}>
              <img
                className={`shrink-0 ${styles['image_8']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=cf81339b18a51c80b85ead70139f4875.png"
              />
              <span className={`${styles['font_3']} ${styles['text_9']} ml-10`}>Light</span>
            </div>
            <div className={`flex-row items-center ${styles['equal-division-item_2']} ml-4`}>
              <img
                className={`shrink-0 ${styles['image_9']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f37ee50d63b72d54b31dc5d597831dbe.png"
              />
              <span className={`${styles['font_3']} ${styles['text_10']} ${styles['ml-9']}`}>Dark</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Sidebar_setting_125_8715.defaultProps = { className: '' };