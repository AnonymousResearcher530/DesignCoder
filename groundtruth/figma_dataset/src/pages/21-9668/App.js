import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Comprehensive_Health_Assessment_10_21_9668(props) {
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
      <span className={`self-start ${styles['text_2']}`}>What is your usual eating habits?</span>
      <div className={`${styles['grid']}`}>
        <div className={`flex-col items-start ${styles['grid-item']}`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c0be3ed348b987830f60f96095ad69a9.png"
          />
          <span className={`${styles['font']} ${styles['text_4']} ${styles['mt-127']}`}>Balanced Diet</span>
        </div>
        <div className={`flex-col items-start ${styles['grid-item_2']}`}>
          <img
            className={`shrink-0 ${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c8de3621466adeefa07f338f93e67e7d.png"
          />
          <span className={`${styles['font']} ${styles['text_3']} ${styles['mt-105']}`}>Mostly Vegetarian</span>
        </div>
        <div className={`flex-col items-start ${styles['grid-item']}`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b29168df89a9ea5240418d3db6949520.png"
          />
          <span className={`${styles['font']} ${styles['text_4']} ${styles['mt-126']}`}>Low Carb</span>
        </div>
        <div className={`flex-col items-start ${styles['grid-item_3']}`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a31205dac00d573cf413c7df46c5c564.png"
          />
          <span className={`${styles['font']} ${styles['text_5']} ${styles['mt-126']}`}>Gluten Free</span>
        </div>
      </div>
      <div className={`flex-row justify-center items-center self-stretch ${styles['section_3']}`}>
        <span className={`${styles['font']} ${styles['text_6']}`}>Continue</span>
        <img
          className={`${styles['image_3']} ${styles['ml-9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3b1e3502560f62b60dff2d47a07ea874.png"
        />
      </div>
    </div>
  );
}

Comprehensive_Health_Assessment_10_21_9668.defaultProps = { className: '' };