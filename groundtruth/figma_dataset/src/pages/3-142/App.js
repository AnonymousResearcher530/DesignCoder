import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Today_Task_Details_3_142(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center self-stretch ${styles['group']}`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2a5f8c4d52d698a8551d82037a6f21eb.png"
        />
        <span className={`${styles['font']}`}>Today Task</span>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=61c1b6dfcf237d49e1c4fa3af4b67433.png"
        />
      </div>
      <div className={`flex-row justify-end self-start relative ${styles['group_2']}`}>
        <img
          className={`self-start ${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3f49c89667379629cb9ace5317592345.png"
        />
        <div className={`flex-col ${styles['section']}`}>
          <div className={`flex-row items-baseline self-stretch`}>
            <span className={`${styles['font_2']}`}>October, 20</span>
            <span className={`${styles['font_2']} ml-6`}>✍</span>
          </div>
          <span className={`self-start ${styles['font_3']} ${styles['text_2']} ${styles['mt-11']}`}>15 task today</span>
        </div>
      </div>
      <div className={`flex-row ${styles['horiz-list']} ${styles['group_5']}`}>
        <div className={`flex-col items-center ${styles['section_2']} ${styles['section_1']}`}>
          <span className={`${styles['font_4']} ${styles['text_3']}`}>19</span>
          <span className={`${styles['font_3']} ${styles['text_8']} mt-14`}>Sat</span>
        </div>
        <div className={`flex-col items-center ${styles['horiz-list-item_2']} ${styles['section_3']} ml-16`}>
          <span className={`${styles['font_4']} ${styles['text_4']}`}>20</span>
          <span className={`${styles['font_5']} ${styles['text_9']} mt-14`}>Sun</span>
        </div>
        <div className={`flex-col items-start ${styles['section_2']} ${styles['section_4']} ml-16`}>
          <span className={`${styles['font_4']} ${styles['text_5']}`}>21</span>
          <span className={`${styles['font_6']} ${styles['mt-15']}`}>Mon</span>
        </div>
        <div className={`flex-col items-center ${styles['section_2']} ${styles['section_15']} ml-16`}>
          <span className={`${styles['font_4']} ${styles['text_6']}`}>22</span>
          <span className={`${styles['font_6']} ${styles['mt-15']}`}>Tue</span>
        </div>
        <div className={`flex-col items-start ${styles['section_2']} ${styles['section_5']} ml-16`}>
          <span className={`${styles['font_4']} ${styles['text_7']}`}>23</span>
          <span className={`${styles['font_3']} ${styles['text_10']} mt-14`}>Wed</span>
        </div>
      </div>
      <div className={`shrink-0 self-stretch ${styles['divider']} ${styles['view']}`}></div>
      <div className={`flex-col self-stretch relative ${styles['group_6']}`}>
        <span className={`self-start ${styles['font_7']} ${styles['text_14']}`}>11 am</span>
        <span className={`self-start ${styles['font_9']} ${styles['text_18']}`}>01 pm</span>
        <span className={`self-start ${styles['font_9']} ${styles['text_21']}`}>02 pm</span>
        <span className={`self-start ${styles['font_7']} ${styles['text_11']}`}>10 am</span>
        <div className={`shrink-0 self-stretch ${styles['divider']} ${styles['view_2']}`}></div>
        <span className={`self-start ${styles['font_9']} ${styles['text_16']}`}>12 pm</span>
        <div className={`shrink-0 self-stretch ${styles['divider_2']}`}></div>
        <div className={`shrink-0 self-stretch relative ${styles['divider']} ${styles['view_3']}`}></div>
        <div className={`flex-col justify-start ${styles['group_8']} ${styles['pos']}`}>
          <div className={`${styles['divider']}`}></div>
          <div className={`flex-col justify-start items-start ${styles['section_7']} ${styles['pos_5']}`}>
            <div className={`flex-col relative ${styles['section_6']}`}>
              <span className={`self-center ${styles['font_5']} ${styles['text_12']}`}>Wareframe elements ☺</span>
              <div className={`flex-row items-center self-stretch ${styles['group_9']} mt-10`}>
                <img
                  className={`shrink-0 ${styles['image_3']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=26093c84d98aed78239aba6db1c18849.png"
                />
                <span className={`${styles['font_8']} ${styles['text_13']} ${styles['ml-106']}`}>10am - 11am</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex-col justify-start ${styles['group_13']} ${styles['pos_16']}`}>
          <div className={`${styles['divider']}`}></div>
          <div className={`flex-col justify-start items-start ${styles['section_11']} ${styles['pos_8']}`}>
            <div className={`flex-col relative ${styles['section_10']}`}>
              <span className={`self-center ${styles['font_5']}`}>Design Team call 🤗</span>
              <div className={`flex-row items-center self-stretch ${styles['group_14']} ${styles['mt-7']}`}>
                <div className={`flex-col justify-start items-start relative ${styles['group_15']}`}>
                  <img
                    className={`${styles['image_3']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2be13e24d8953484e2e9ff428bb28926.png"
                  />
                  <img
                    className={`${styles['image_5']} ${styles['pos_9']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=31cda158d579b0a8aa5e1af234d84785.png"
                  />
                  <div className={`flex-col justify-start items-center ${styles['text-wrapper']} ${styles['pos_10']}`}>
                    <span className={`${styles['font_8']} ${styles['text_19']}`}>+5</span>
                  </div>
                </div>
                <span className={`${styles['font_10']} ${styles['text_20']} ${styles['ml-37']}`}>
                  01:20pm - 02:20pm
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex-col justify-start items-start ${styles['section_9']} ${styles['pos_3']}`}>
          <div className={`flex-col relative ${styles['section_8']}`}>
            <span className={`self-start ${styles['font_5']} ${styles['text_15']}`}>Mobile app Design 😍</span>
            <div className={`flex-row items-center self-stretch ${styles['mt-7']}`}>
              <img
                className={`shrink-0 ${styles['image_4']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a988af5755b457c7457f8c74aabaea31.png"
              />
              <span className={`${styles['font_10']} ${styles['text_17']} ml-58`}>11:40am - 12:40pm</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-row items-center self-center relative ${styles['group_16']}`}>
        <img
          className={`${styles['image_6']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6ccb747ec38497ad9488913749e9ee48.png"
        />
        <img
          className={`${styles['image_8']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=239197c1e6c21f2d238e550996a7620c.png"
        />
        <img
          className={`${styles['image_7']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ff7bde4b9849e58e9d7587c552889542.png"
        />
        <img
          className={`${styles['image_9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=76e082169cd6fc5f6bf23e9dcd02b411.png"
        />
        <img
          className={`${styles['image_10']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7c665f777461a3678a0848c4403cd06f.png"
        />
      </div>
    </div>
  );
}

Today_Task_Details_3_142.defaultProps = { className: '' };