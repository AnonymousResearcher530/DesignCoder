import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function A_C_fast_settings_228_83173(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col justify-start relative ${styles['page']} ${props.className}`}>
      <div className={`shrink-0 ${styles['section']}`}></div>
      <div className={`flex-row ${styles['group_1']} ${styles['pos']}`}>
        <img
          className={`${styles['image']} ${styles['pos_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=923de53d5dfba0482ea8bc9a677c792e.png"
        />
        <span className={`${styles['font']} ${styles['pos_3']}`}>Tesla</span>
        <span className={`${styles['font_2']} ${styles['text']} ${styles['pos_1']}`}>Cybertruck</span>
        <img
          className={`${styles['image']} ${styles['pos_15']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=591e716bbc8210760c9abf3675deaf66.png"
        />
      </div>
      <div className={`shrink-0 ${styles['section_3']} ${styles['pos_19']}`}></div>
      <div className={`flex-row justify-between ${styles['group']} ${styles['pos_21']}`}>
        <div className={`flex-col relative ${styles['group_2']}`}>
          <span className={`self-start ${styles['font_3']} ${styles['text_2']}`}>A/C is ON</span>
          <span className={`self-stretch ${styles['font']} ${styles['text_3']}`}>
            Currently 27 C  Will change in 2min
          </span>
          <div className={`${styles['group_3']} ${styles['pos_6']}`}></div>
        </div>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d0bc2c59c617de81af8adb6cb2cca9d5.png"
          />
        </div>
      </div>
      <div className={`flex-col ${styles['group_4']} ${styles['pos_20']}`}>
        <div className={`self-center relative ${styles['section_4']}`}></div>
        <div className={`flex-row self-stretch relative ${styles['section_5']} ${styles['mt-7']}`}>
          <span className={`${styles['text_5']} ${styles['pos_12']}`}>Cooling...</span>
          <span className={`${styles['font_4']} ${styles['pos_9']}`}>24</span>
          <span className={`${styles['font_4']} ${styles['text_4']} ${styles['pos_10']}`}>C</span>
          <div className={`${styles['group_5']} ${styles['pos_8']}`}></div>
          <img
            className={`${styles['image_4']} ${styles['pos_11']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7714ea6c42082d95c22e4a569a7f5517.png"
          />
          <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']} ${styles['pos_7']}`}>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=92f0afb635611e8c513f8da45bb0e0ed.png"
            />
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['group_12']} ${styles['pos_16']}`}>
        <span className={`self-center ${styles['font_3']} ${styles['text_6']}`}>Fan speed</span>
        <div className={`flex-col self-stretch mt-32`}>
          <div className={`flex-row justify-between ${styles['group_7']}`}>
            <span className={`${styles['font_5']} ${styles['text_7']}`}>1</span>
            <span className={`${styles['font_5']}`}>2</span>
            <span className={`${styles['font_5']} ${styles['text_8']}`}>3</span>
            <span className={`${styles['font_5']} ${styles['text_9']}`}>4</span>
            <span className={`${styles['font_5']} ${styles['text_10']}`}>5</span>
          </div>
          <div className={`flex-col justify-start relative ${styles['group_8']}`}>
            <div className={`flex-col justify-start items-start relative ${styles['image-wrapper_3']}`}>
              <img
                className={`${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1f349536dba99e4c82220570c5edbb38.png"
              />
            </div>
            <img
              className={`${styles['image_5']} ${styles['pos_13']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e78735c67a3f59372999d80abbd56f1a.png"
            />
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['group_12']} ${styles['pos_18']}`}>
        <span className={`self-center ${styles['font_3']} ${styles['text_11']}`}>Mode</span>
        <div className={`flex-row ${styles['equal-division']} ${styles['mt-19']}`}>
          <div className={`flex-col items-center ${styles['equal-division-item']} ${styles['group_10']}`}>
            <span className={`${styles['font']} ${styles['text_12']}`}>Auto</span>
            <img
              className={`${styles['image_7']} mt-16`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=58e30a1af019ce40e42728279f0e3641.png"
            />
          </div>
          <div className={`flex-col ${styles['equal-division-item']} ${styles['equal-division-item_2']}`}>
            <span className={`self-center ${styles['font_2']} ${styles['text_13']}`}>Dry</span>
            <div
              className={`flex-col justify-start items-center self-stretch ${styles['image-wrapper_4']} ${styles['view']} ${styles['mt-13']}`}
            >
              <img
                className={`${styles['image_8']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0b47ff13788e7ca0002db78851f44f80.png"
              />
            </div>
          </div>
          <div className={`flex-col ${styles['equal-division-item']} ${styles['group_11']}`}>
            <span className={`self-center ${styles['font']}`}>Cool</span>
            <div className={`flex-col justify-start items-center self-stretch ${styles['view_2']} mt-16`}>
              <img
                className={`${styles['image_9']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a31335c07a078601bb4d67c04afedef4.png"
              />
            </div>
          </div>
          <div className={`flex-col ${styles['equal-division-item']} ${styles['equal-division-item_2']}`}>
            <span className={`self-center ${styles['font_2']} ${styles['text_14']}`}>Program</span>
            <div
              className={`flex-col justify-start items-center self-stretch ${styles['image-wrapper_4']} ${styles['view_3']} ${styles['mt-13']}`}
            >
              <img
                className={`${styles['image_10']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=15ccf33a1699bd4a60b11513489f4b19.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

A_C_fast_settings_228_83173.defaultProps = { className: '' };