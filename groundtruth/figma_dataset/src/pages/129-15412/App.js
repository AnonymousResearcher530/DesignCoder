import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Home_Room_129_15412(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col relative ${styles['page']} ${props.className}`}>
      <div className={`flex-col self-stretch ${styles['section']}`}>
        <div className={`flex-row justify-between`}>
          <span className={`self-start ${styles['text']}`}>Home</span>
          <img
            className={`self-center ${styles['image']} ${styles['image_13']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=111fabcdb79f0a952a86e7f67119026a.png"
          />
        </div>
        <div className={`flex-row justify-between items-center mt-16`}>
          <span className={`${styles['text_2']}`}>Family Members</span>
          <div className={`flex-col justify-start items-start relative ${styles['group']}`}>
            <img
              className={`${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=172eaffcc43c64e2f5ff0c4ed9388d2c.png"
            />
            <img
              className={`${styles['image_2']} ${styles['pos']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f595cce19cf1839b95b1813179734150.png"
            />
            <img
              className={`${styles['image_2']} ${styles['pos_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d697aaf345e98dc12232c334d505ea3a.png"
            />
            <img
              className={`${styles['image_2']} ${styles['pos_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=cdd361e647b965fa33009c09aaae9fe5.png"
            />
          </div>
        </div>
      </div>
      <div className={`flex-col self-center ${styles['section_2']}`}>
        <div className={`flex-row justify-between ${styles['group_1']}`}>
          <div className={`flex-col items-start`}>
            <span className={`${styles['text_3']}`}>My Location</span>
            <span className={`${styles['font']} mt-8`}>New Delhi</span>
          </div>
          <span className={`${styles['text_4']}`}>8°</span>
        </div>
        <div className={`flex-row justify-between items-end ${styles['mt-27']}`}>
          <div className={`flex-row items-center self-stretch ${styles['group_3']}`}>
            <img
              className={`shrink-0 ${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7de2f99265663dadde6676c22e775415.png"
            />
            <span className={`shrink-0 ${styles['font']} ${styles['text_5']} ${styles['ml-5']}`}>Partly Cloudy</span>
          </div>
          <span className={`${styles['font']} ${styles['text_6']}`}>H: 16° L: 6°</span>
        </div>
      </div>
      <div className={`flex-row self-center relative ${styles['group_9']}`}>
        <div className={`flex-row ${styles['section_3']} ${styles['pos_4']}`}>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
            <span className={`${styles['font_2']} ${styles['text_7']}`}>Room</span>
          </div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']} ml-2`}>
            <span className={`${styles['font_2']} ${styles['text_8']}`}>Devices</span>
          </div>
        </div>
        <div className={`flex-col ${styles['section_4']} ${styles['pos_1']}`}>
          <div className={`shrink-0 self-stretch ${styles['section_5']}`}></div>
          <span className={`self-stretch ${styles['font_3']} ${styles['text_10']}`}>Master Bedroom</span>
          <span className={`self-start ${styles['font_4']} ${styles['text_12']}`}>4 Devices</span>
          <div className={`flex-row justify-between items-center self-stretch ${styles['group_5']}`}>
            <span className={`${styles['font_5']} ${styles['text_14']}`}>ON</span>
            <img
              className={`${styles['image_5']} ${styles['image_1']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e39fac3eda5c1a82d6a510f3d2a9b7db.png"
            />
          </div>
        </div>
        <div className={`flex-col ${styles['section_4']} ${styles['pos_12']}`}>
          <div className={`flex-col justify-start items-end self-stretch ${styles['image-wrapper']}`}>
            <img
              className={`${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a82d29cfe93f4bc3aca744578d225637.png"
            />
          </div>
          <span className={`self-start ${styles['font_3']} ${styles['text_11']}`}>Living Room</span>
          <span className={`self-start ${styles['font_4']} ${styles['text_13']}`}>8 Devices</span>
          <div className={`flex-row justify-between self-stretch ${styles['group_4']}`}>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_3']}`}>
              <span className={`${styles['font_5']} ${styles['text_15']}`}>OFF</span>
            </div>
            <img
              className={`${styles['image_5']} ${styles['image_12']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3d016f7b04ea0652c14007821ede5745.png"
            />
          </div>
        </div>
        <div className={`flex-col justify-start ${styles['section_6']} ${styles['pos_6']}`}>
          <div className={`flex-col justify-start items-end ${styles['image-wrapper_2']}`}>
            <img
              className={`${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a82d29cfe93f4bc3aca744578d225637.png"
            />
          </div>
        </div>
        <div className={`flex-col justify-start ${styles['section_6']} ${styles['pos_7']}`}>
          <div className={`flex-col justify-start items-end ${styles['image-wrapper_3']}`}>
            <img
              className={`${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a82d29cfe93f4bc3aca744578d225637.png"
            />
          </div>
        </div>
      </div>
      <div className={`flex-row justify-center items-start ${styles['section_7']} ${styles['pos_5']}`}>
        <img
          className={`${styles['image_7']} ${styles['pos_11']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f288c9807ffe75d23739e51d410a0151.png"
        />
        <img
          className={`${styles['image_6']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=26ca7da80d44c1a9e190152d591aa342.png"
        />
        <img
          className={`${styles['image']} ${styles['pos_13']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=afa979414ffb63bf0dba8451f8470869.png"
        />
      </div>
    </div>
  );
}

Home_Room_129_15412.defaultProps = { className: '' };