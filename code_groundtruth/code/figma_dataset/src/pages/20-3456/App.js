import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Edit_profile_20_3456(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col`}>
        <div className={`flex-col ${styles['section']}`}>
          <img
            className={`self-center ${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b9e6bf7bf7f134eff8ad6487d5ddba2a.png"
          />
          <img
            className={`self-start ${styles['image_2']} ${styles['mt-3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=31549aee8cedf2b5dd0cd41891599f77.png"
          />
        </div>
        <div className={`flex-col ${styles['group']} mt-60`}>
          <div className={`flex-col`}>
            <span className={`self-start ${styles['font']} ${styles['text']}`}>Personal Info</span>
            <div className={`flex-col self-stretch ${styles['section_2']} ${styles['mt-19']}`}>
              <div className={`flex-row justify-between`}>
                <span className={`${styles['font_2']}`}>Full Name</span>
                <span className={`${styles['font_3']} ${styles['text_2']} ${styles['text_3']}`}>Julie Rose</span>
              </div>
              <div className={`flex-row justify-between ${styles['mt-27']}`}>
                <span className={`${styles['font_2']}`}>Phone Number</span>
                <span className={`${styles['font_3']} ${styles['text_2']} ${styles['text_4']}`}>+01 12213 1231</span>
              </div>
              <div className={`flex-row justify-between items-center ${styles['mt-27']}`}>
                <span className={`${styles['font_2']}`}>Email</span>
                <span className={`${styles['font_4']} ${styles['text_2']} ${styles['text_5']}`}>
                  julierose@gmail.com
                </span>
              </div>
              <div className={`flex-row justify-between items-center ${styles['mt-27']}`}>
                <span className={`${styles['font_2']} ${styles['text_6']}`}>Username</span>
                <span className={`${styles['font_4']} ${styles['text_2']} ${styles['text_7']}`}>@julierose</span>
              </div>
              <div className={`flex-row justify-between items-center ${styles['mt-27']}`}>
                <span className={`${styles['font_2']} ${styles['text_8']}`}>Bio</span>
                <span className={`${styles['font_2']} ${styles['text_2']} ${styles['text_9']}`}>
                  I’m all about freedom using the internet as a mechanism to put your knowledge out there.
                </span>
              </div>
            </div>
          </div>
          <div className={`flex-col ${styles['mt-29']}`}>
            <span className={`self-start ${styles['font']} ${styles['text_10']}`}>Connected Accounts</span>
            <div className={`flex-col self-stretch mt-20`}>
              {data.items.map((item, index) => (
                <div
                  className={`flex-row justify-between items-center ${styles['section_3']} ${styles['list-item']} ${styles['mt-7']}`}
                  key={index}
                >
                  <div className={`flex-row items-center`}>
                    <img
                      className={`shrink-0 ${styles['image_3']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bc77ff06cbb5b0e7e1baaf6b2aa3d1ea.png"
                    />
                    <span className={`${styles['font_3']} ml-8`}>Tiktok</span>
                  </div>
                  <span className={`${styles['font_5']}`}>connected</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col justify-start items-center ${styles['text-wrapper']} mt-40`}>
        <span className={`${styles['text_13']}`}>Log out</span>
      </div>
    </div>
  );
}

Edit_profile_20_3456.defaultProps = { className: '' };