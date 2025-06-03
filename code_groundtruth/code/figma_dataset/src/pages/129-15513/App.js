import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Home_Devices_129_15513(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col relative ${styles['page']} ${props.className}`}>
      <div className={`flex-col self-stretch ${styles['section']}`}>
        <div className={`flex-row justify-between`}>
          <span className={`self-start ${styles['text']}`}>Home</span>
          <img
            className={`self-center ${styles['image']} ${styles['image_15']}`}
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
        <div className={`flex-row ${styles['section_3']} ${styles['pos_1']}`}>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
            <span className={`${styles['font_2']} ${styles['text_7']}`}>Room</span>
          </div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']} ml-2`}>
            <span className={`${styles['font_2']} ${styles['text_8']}`}>Devices</span>
          </div>
        </div>
        <div className={`flex-col ${styles['section_4']} ${styles['equal-division-item']}`}>
          <div className={`flex-row justify-evenly self-stretch ${styles['section_5']}`}>
            <img
              className={`self-center ${styles['image_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=83f0eae380448e96aae3f46ad89722a0.png"
            />
            <img
              className={`self-start ${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a82d29cfe93f4bc3aca744578d225637.png"
            />
          </div>
          <span className={`self-center ${styles['font_3']} ${styles['text_9']}`}>Heater</span>
          <span className={`self-center ${styles['font_4']} ${styles['text_11']}`}>4 Devices</span>
          <div className={`flex-row justify-between items-center self-stretch ${styles['group_5']}`}>
            <span className={`${styles['font_5']} ${styles['text_13']}`}>ON</span>
            <img
              className={`${styles['image_7']} ${styles['image_1']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e39fac3eda5c1a82d6a510f3d2a9b7db.png"
            />
          </div>
        </div>
        <div className={`flex-col ${styles['section_11']} ${styles['equal-division-item']}`}>
          <div className={`flex-col justify-start items-center self-stretch relative ${styles['section_1']}`}>
            <img
              className={`${styles['image_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=64f354176ad695c6949d00382f20e005.png"
            />
            <img
              className={`${styles['image_4']} ${styles['pos_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a82d29cfe93f4bc3aca744578d225637.png"
            />
          </div>
          <span className={`self-center ${styles['font_3']} ${styles['text_10']}`}>Lights</span>
          <span className={`self-center ${styles['font_4']} ${styles['text_12']}`}>8 Devices</span>
          <div className={`flex-row justify-between self-stretch ${styles['group_4']}`}>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_3']}`}>
              <span className={`${styles['font_5']} ${styles['text_14']}`}>OFF</span>
            </div>
            <img
              className={`${styles['image_7']} ${styles['image_14']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3d016f7b04ea0652c14007821ede5745.png"
            />
          </div>
        </div>
        <div className={`flex-col justify-start ${styles['section_7']} ${styles['pos_11']}`}>
          <div className={`flex-col justify-start items-center relative ${styles['section_6']}`}>
            <img
              className={`${styles['image_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b05dd89f076a29c25450df9b1eed7e7f.png"
            />
            <img
              className={`${styles['image_4']} ${styles['pos_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a82d29cfe93f4bc3aca744578d225637.png"
            />
          </div>
        </div>
        <div className={`flex-col justify-start ${styles['section_7']} ${styles['pos_7']}`}>
          <div className={`flex-col justify-start items-center relative ${styles['section_6']}`}>
            <img
              className={`${styles['image_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7efbdc29f283937a36920b522ac01dbf.png"
            />
            <img
              className={`${styles['image_4']} ${styles['pos_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a82d29cfe93f4bc3aca744578d225637.png"
            />
          </div>
        </div>
      </div>
      <div className={`flex-row items-start ${styles['section_8']} ${styles['pos_8']}`}>
        <img
          className={`${styles['image_8']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=26ca7da80d44c1a9e190152d591aa342.png"
        />
        <img
          className={`${styles['image_9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f288c9807ffe75d23739e51d410a0151.png"
        />
        <img
          className={`${styles['image']} ${styles['image_10']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=afa979414ffb63bf0dba8451f8470869.png"
        />
      </div>
    </div>
  );
}

Home_Devices_129_15513.defaultProps = { className: '' };