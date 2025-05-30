import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Tianmao_sousuo_guanlianbangdan_228_57010(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col justify-start relative ${styles['page']} ${props.className}`}>
      <div className={`${styles['section']}`}></div>
      <div className={`flex-col justify-start items-center ${styles['section_2']} ${styles['pos']}`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c18ebca860d77d514309e9e5172abb3f.png"
        />
        <div className={`flex-col ${styles['section_5']} ${styles['pos_5']}`}>
          <span className={`self-center ${styles['font']} ${styles['text']}`}>#运动型男#</span>
          <span className={`self-center ${styles['font']} ${styles['text_2']}`}>轻质防滑跑步鞋好评榜</span>
          <div className={`flex-row justify-evenly self-stretch ${styles['group']}`}>
            <div className={`self-center ${styles['section_6']}`}></div>
            <span className={`${styles['font']} ${styles['text_3']}`}>天猫精选指南</span>
            <div className={`self-center ${styles['section_6']}`}></div>
          </div>
        </div>
        <div className={`${styles['section_4']} ${styles['pos_4']}`}></div>
        <div className={`${styles['section_3']} ${styles['pos_3']}`}></div>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']} ${styles['pos_2']}`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=250421b151a2d10eb18d09b34902b473.png"
          />
        </div>
      </div>
    </div>
  );
}

Tianmao_sousuo_guanlianbangdan_228_57010.defaultProps = { className: '' };