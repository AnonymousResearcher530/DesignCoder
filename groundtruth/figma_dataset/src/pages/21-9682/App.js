import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Comprehensive_Health_Assessment_11_21_9682(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null, null, null, null],
  });

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
        <span className={`${styles['font']} ${styles['text']} ml-20`}>Skip </span>
      </div>
      <span className={`self-start ${styles['text_2']}`}>What medications do you take?</span>
      <div className={`flex-row self-stretch relative ${styles['group_2']}`}>
        <div className={`flex-row justify-evenly ${styles['section_3']} ${styles['pos']}`}>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
            <span className={`${styles['font_2']} ${styles['text_3']}`}>A</span>
          </div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_1']}`}>
            <span className={`${styles['font_2']}`}>B</span>
          </div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']}`}>
            <span className={`${styles['font_2']} ${styles['text_4']}`}>C</span>
          </div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_3']}`}>
            <span className={`${styles['font_2']} ${styles['text_5']}`}>...</span>
          </div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_1']}`}>
            <span className={`${styles['font_2']}`}>X</span>
          </div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_1']}`}>
            <span className={`${styles['font_2']}`}>Y</span>
          </div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_1']}`}>
            <span className={`${styles['font_2']}`}>Z</span>
          </div>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ce03417c07c60a57d88c24166a73359a.png"
          />
        </div>
        <div className={`flex-col ${styles['pos_2']}`}>
          {data.items.map((item, index) => (
            <div
              className={`flex-row justify-between items-center ${styles['list-item']} ${styles['section_1']} mt-8`}
              key={index}
            >
              <span className={`${styles['font']} ${styles['text_6']}`}>Abilify</span>
              <img
                className={`${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=accc3672d161823c024d001750d000c5.png"
              />
            </div>
          ))}
        </div>
        <div className={`flex-col justify-start ${styles['section_4']} ${styles['pos_3']}`}>
          <div className={`${styles['section_5']}`}></div>
        </div>
      </div>
      <div className={`flex-row justify-evenly items-center self-stretch ${styles['group_3']}`}>
        <span className={`${styles['font_2']} ${styles['text_10']}`}>Selected:</span>
        <div className={`flex-row items-center ${styles['section_6']}`}>
          <span className={`${styles['font_4']} ${styles['text_11']}`}>Aspirin</span>
          <img
            className={`shrink-0 ${styles['image_4']} ${styles['ml-3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3a14cdbb7744ec73ceaed3aeffd7b56d.png"
          />
        </div>
        <div className={`flex-row items-center ${styles['section_7']}`}>
          <span className={`${styles['font_4']} ${styles['text_12']}`}>Ibuprofen</span>
          <img
            className={`shrink-0 ${styles['image_4']} ml-2`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=db27ff26ffe96c099a58e11f56ee4932.png"
          />
        </div>
      </div>
      <div className={`flex-row justify-center items-center self-stretch ${styles['section_8']}`}>
        <span className={`${styles['font_3']} ${styles['text_13']}`}>Continue</span>
        <img
          className={`${styles['image_5']} ${styles['ml-9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3b1e3502560f62b60dff2d47a07ea874.png"
        />
      </div>
    </div>
  );
}

Comprehensive_Health_Assessment_11_21_9682.defaultProps = { className: '' };