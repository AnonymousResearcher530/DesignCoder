import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Comprehensive_Health_Assessment_8_21_9627(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row items-center`}>
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
      <div className={`flex-col ${styles['group_1']}`}>
        <span className={`self-start ${styles['text_2']}`}>What is your current sleep level?</span>
        <div className={`flex-row self-stretch relative ${styles['group']} ${styles['mt-45']}`}>
          <div className={`flex-row items-center ${styles['pos']}`}>
            <img
              className={`shrink-0 ${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c409c1bca42f4d61a85a6a792d7262ea.png"
            />
            <span className={`${styles['font_2']} ${styles['text_3']} ml-6`}>Moderate</span>
          </div>
          <img
            className={`${styles['image_3']} ${styles['pos_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c6cc668e9cb669a3fb7680ce12427d56.png"
          />
          <span className={`${styles['text_5']} ${styles['pos_6']}`}>3</span>
          <span className={`${styles['font']} ${styles['text_4']} ${styles['pos_4']}`}>~5-8hr daily</span>
          <div className={`flex-col ${styles['section_3']} ${styles['pos_3']}`}>
            <img
              className={`self-end ${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c6cc668e9cb669a3fb7680ce12427d56.png"
            />
            <img
              className={`self-center ${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1081998899b46d6dc796dc6cf95e6ffa.png"
            />
            <div className={`flex-col justify-start items-start ${styles['image-wrapper']} ${styles['pos_5']}`}>
              <img
                className={`${styles['image_3']} ${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=270326aeb743816690561c07b67eaa23.png"
              />
            </div>
          </div>
          <img
            className={`${styles['image_3']} ${styles['pos_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=270326aeb743816690561c07b67eaa23.png"
          />
        </div>
      </div>
      <div className={`flex-row justify-center items-center ${styles['section_4']}`}>
        <span className={`${styles['font_2']} ${styles['text_6']}`}>Continue</span>
        <img
          className={`${styles['image_6']} ${styles['ml-9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3b1e3502560f62b60dff2d47a07ea874.png"
        />
      </div>
    </div>
  );
}

Comprehensive_Health_Assessment_8_21_9627.defaultProps = { className: '' };