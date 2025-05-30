import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Schedule_127_11749(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row self-stretch ${styles['group']}`}>
        <div className={`flex-col justify-start items-start shrink-0 ${styles['text-wrapper_2']}`}>
          <span className={`${styles['font_1']} ${styles['text']}`}>Canceled Schedule</span>
        </div>
        <div className={`flex-col justify-start items-center shrink-0 ${styles['text-wrapper']} ml-12`}>
          <span className={`${styles['text_2']}`}>Upcoming schedule</span>
        </div>
        <div className={`flex-col justify-start items-end shrink-0 ${styles['text-wrapper_3']} ml-12`}>
          <span className={`${styles['font']} ${styles['text_3']}`}>Completed schedule</span>
        </div>
      </div>
      <div className={`flex-col self-stretch ${styles['list-item']} ${styles['section_1']}`}>
        <div className={`flex-col ${styles['group_3']}`}>
          <div className={`flex-row items-center self-stretch ${styles['group_4']}`}>
            <img
              className={`${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7be567837415f791f226b7d1eb4c1cd6.png"
            />
            <div className={`flex-col items-start ${styles['ml-11']}`}>
              <span className={`${styles['font_2']} ${styles['text_4']}`}>Dr. Joseph Brostito</span>
              <span className={`${styles['font_3']} ${styles['mt-11']}`}>Dental Specialist</span>
            </div>
          </div>
          <div
            className={`flex-row justify-between ${styles['group_5']} ${styles['equal-division']} ${styles['mt-21']}`}
          >
            <div className={`flex-row items-center`}>
              <img
                className={`shrink-0 ${styles['image_2']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=57b6c10dbc49776b846ee3d8aabaaac8.png"
              />
              <span className={`${styles['font']} ${styles['ml-9']}`}>Sunday, 12 June</span>
            </div>
            <div className={`flex-row items-center`}>
              <img
                className={`shrink-0 ${styles['image_2']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d5364d14dfdc5c202dceabfc07f89fff.png"
              />
              <span className={`${styles['font_1']} ${styles['ml-9']}`}>11:00 - 12:00 AM</span>
            </div>
          </div>
        </div>
        <div className={`flex-col justify-start items-center ${styles['text-wrapper_4']}`}>
          <span className={`${styles['font_4']}`}>Detail</span>
        </div>
      </div>
      <div className={`flex-col self-stretch ${styles['list-item']} ${styles['section_2']}`}>
        <div className={`flex-col ${styles['group_3']}`}>
          <div className={`flex-row items-center self-stretch ${styles['group_4']}`}>
            <img
              className={`${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7f0390ceaa02233649b50cc27653bd8d.png"
            />
            <div className={`flex-col items-start ${styles['ml-11']}`}>
              <span className={`${styles['font_2']} ${styles['text_1']}`}>Dr. Bessie Coleman</span>
              <span className={`${styles['font_3']} ${styles['mt-15']}`}>Dental Specialist</span>
            </div>
          </div>
          <div
            className={`flex-row justify-between ${styles['group_5']} ${styles['equal-division']} ${styles['mt-21']}`}
          >
            <div className={`flex-row items-center`}>
              <img
                className={`shrink-0 ${styles['image_2']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=57b6c10dbc49776b846ee3d8aabaaac8.png"
              />
              <span className={`${styles['font']} ${styles['ml-9']}`}>Sunday, 12 June</span>
            </div>
            <div className={`flex-row items-center`}>
              <img
                className={`shrink-0 ${styles['image_2']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d5364d14dfdc5c202dceabfc07f89fff.png"
              />
              <span className={`${styles['font_1']} ${styles['ml-9']}`}>11:00 - 12:00 AM</span>
            </div>
          </div>
        </div>
        <div className={`flex-col justify-start items-center ${styles['text-wrapper_4']}`}>
          <span className={`${styles['font_4']}`}>Detail</span>
        </div>
      </div>
      <div className={`flex-col self-stretch ${styles['list-item_2']}`}>
        <div className={`flex-col`}>
          <div className={`flex-row items-center self-stretch ${styles['group_6']}`}>
            <img
              className={`${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8309f4db9e5d53863ad5e51ab48961de.png"
            />
            <div className={`flex-col items-start ${styles['ml-11']}`}>
              <span className={`${styles['font_2']} ${styles['text_6']}`}>Dr. Babe Didrikson</span>
              <span className={`${styles['font_3']} ${styles['mt-15']}`}>Dental Specialist</span>
            </div>
          </div>
          <div
            className={`flex-row justify-between ${styles['group_5']} ${styles['equal-division']} ${styles['mt-21']}`}
          >
            <div className={`flex-row items-center`}>
              <img
                className={`shrink-0 ${styles['image_2']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=57b6c10dbc49776b846ee3d8aabaaac8.png"
              />
              <span className={`${styles['font']} ${styles['ml-9']}`}>Sunday, 12 June</span>
            </div>
            <div className={`flex-row items-center`}>
              <img
                className={`shrink-0 ${styles['image_2']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d5364d14dfdc5c202dceabfc07f89fff.png"
              />
              <span className={`${styles['font_1']} ${styles['ml-9']}`}>11:00 - 12:00 AM</span>
            </div>
          </div>
        </div>
        <div className={`flex-col justify-start ${styles['mt-21']}`}>
          <div className={`${styles['section']}`}></div>
        </div>
      </div>
      <div className={`flex-row items-center self-center relative ${styles['group_1']}`}>
        <img
          className={`${styles['image_3']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=453a6ed1b807c250cc75191bba5af042.png"
        />
        <div className={`flex-row items-center ${styles['section_3']}`}>
          <img
            className={`shrink-0 ${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d6a23886c6c6491137681b68e7f4f524.png"
          />
          <span className={`${styles['text_5']} ${styles['ml-9']}`}>Schedule</span>
        </div>
        <img
          className={`${styles['image_3']} ${styles['image_4']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=33570039460ca41bda9cdf14b8dedf05.png"
        />
        <img
          className={`${styles['image_3']} ${styles['image_5']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0509062387c0b09795a29e16ba7f6175.png"
        />
      </div>
    </div>
  );
}

Schedule_127_11749.defaultProps = { className: '' };