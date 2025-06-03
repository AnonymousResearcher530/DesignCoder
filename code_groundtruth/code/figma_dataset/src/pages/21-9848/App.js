import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Comprehensive_Health_Assessment_13_21_9848(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row items-center self-stretch`}>
        <div className={`flex-row items-center flex-1`}>
          <img
            className={`shrink-0 ${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=33c3e1f7b42f606673b9193a450b5abe.png"
          />
          <div className={`flex-col justify-start items-start flex-1 ${styles['section']} ${styles['ml-33']}`}>
            <div className={`${styles['section_2']}`}></div>
          </div>
        </div>
        <span className={`ml-20 ${styles['font']} ${styles['text']}`}>Skip </span>
      </div>
      <div className={`flex-col self-start ${styles['group']}`}>
        <span className={`self-start ${styles['text_2']}`}>Textual AI Health Analysis</span>
        <span className={`mt-8 self-stretch ${styles['text_3']}`}>
          Write any ongoing health conditions you have right now. Our AI will analyze it.
        </span>
      </div>
      <div className={`flex-col self-stretch ${styles['section_3']}`}>
        <div className={`flex-col relative ${styles['group_2']}`}>
          <div className={`self-end ${styles['section_4']}`}></div>
          <div className={`self-start ${styles['section_6']}`}></div>
          <img
            className={`${styles['image_2']} ${styles['pos_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5e83f879de84eefc02167d4e3e93def2.png"
          />
          <div className={`${styles['section_7']} ${styles['pos_4']}`}></div>
          <div className={`${styles['section_5']} ${styles['pos_3']}`}></div>
          <div className={`${styles['pos']}`}>
            <span className={`${styles['font_2']}`}>I haven’t been eating well lately, and </span>
            <span className={`${styles['font_2']} ${styles['text_4']}`}>
              I dont know why. My right foot also hurts{' '}
            </span>
            <span className={`${styles['font_2']}`}>so much, please help me, doc A!</span>
          </div>
        </div>
        <div className={`mt-18 flex-row justify-between items-center ${styles['group_3']}`}>
          <div className={`flex-row`}>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4b50a1007fce2a41b9cd32ba5465fb45.png"
            />
            <img
              className={`ml-8 ${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e66ec5b2e65f4031d801b5e720e61119.png"
            />
          </div>
          <div className={`flex-row items-center`}>
            <img
              className={`shrink-0 ${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0cfd21a93ecb3a13c998a881b692bb28.png"
            />
            <span className={`${styles['font_3']} ${styles['text_5']} ${styles['ml-5']}`}>100/250</span>
          </div>
        </div>
      </div>
      <div className={`flex-row justify-evenly items-center self-center ${styles['section_8']}`}>
        <span className={`${styles['font_3']} ${styles['text_6']}`}>Use Voice Instead</span>
        <img
          className={`${styles['image_5']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d55c21de6d611c5cadd5bc66c7566960.png"
        />
      </div>
      <div className={`flex-row justify-center items-center self-stretch ${styles['section_9']}`}>
        <span className={`${styles['font']} ${styles['text_7']}`}>Continue</span>
        <img
          className={`${styles['image_6']} ${styles['ml-9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3b1e3502560f62b60dff2d47a07ea874.png"
        />
      </div>
    </div>
  );
}

Comprehensive_Health_Assessment_13_21_9848.defaultProps = { className: '' };