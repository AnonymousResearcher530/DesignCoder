import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Comprehensive_Health_Assessment_21_9153(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row items-center`}>
        <div className={`flex-col flex-1`}>
          <img
            className={`shrink-0 self-start ${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=33c3e1f7b42f606673b9193a450b5abe.png"
          />
          <div className={`flex-col justify-start items-start self-end relative ${styles['section']}`}>
            <div className={`${styles['section_2']}`}></div>
          </div>
        </div>
        <span className={`${styles['font']} ${styles['text']} ml-20`}>Skip </span>
      </div>
      <div className={`flex-col ${styles['group']}`}>
        <span className={`${styles['text_2']}`}>What is your health goal for the app?</span>
        <div className={`flex-col ${styles['list']}`}>
          {data.items.map((item, index) => (
            <div
              className={`flex-row justify-between items-center ${styles['list-item']} ${styles['mt-11']}`}
              key={index}
            >
              <div className={`flex-row items-center`}>
                <img
                  className={`shrink-0 ${styles['image_2']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5f90a0ac0ddb189aafd0287ce1370520.png"
                />
                <span className={`${styles['font']} ${styles['ml-9']}`}>I wanna get healthy</span>
              </div>
              <img
                className={`${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=032ae7abe7a9fd094cf7f87b2619dbdf.png"
              />
            </div>
          ))}
        </div>
      </div>
      <div className={`flex-row justify-center items-center ${styles['section_3']}`}>
        <span className={`${styles['text_4']}`}>Continue</span>
        <img
          className={`${styles['image_7']} ${styles['ml-9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3b1e3502560f62b60dff2d47a07ea874.png"
        />
      </div>
    </div>
  );
}

Comprehensive_Health_Assessment_21_9153.defaultProps = { className: '' };