import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Tianmao_sousuo_yipaiyi_228_56987(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col justify-start ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start ${styles['section']}`}>
        <div className={`flex-col justify-start ${styles['section_3']}`}>
          <div className={`flex-row relative ${styles['section_2']}`}>
            <div className={`flex-col justify-start items-end relative ${styles['group']}`}>
              <div className={`${styles['section_5']}`}></div>
              <div className={`${styles['section_4']} ${styles['pos_2']}`}></div>
              <div className={`flex-col justify-start items-start ${styles['image-wrapper']} ${styles['pos']}`}>
                <img
                  className={`${styles['image']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3ef9dd9520ee498a47d4cfae791d9625.png"
                />
              </div>
            </div>
            <div className={`ml-12 flex-col flex-1 self-start`}>
              <div className={`flex-col justify-start self-end ${styles['text-wrapper']}`}>
                <span className={`${styles['text']}`}>天猫精选指南</span>
              </div>
              <span className={`self-start ${styles['font']} ${styles['text_2']}`}>#运动型男#</span>
              <span className={`self-start ${styles['font']} ${styles['text_3']}`}>轻质防滑跑步鞋好评榜</span>
              <span className={`self-start ${styles['font_2']} ${styles['text_4']}`}>更有980元专享礼遇</span>
              <div className={`flex-col justify-start items-start self-stretch relative ${styles['group_2']}`}>
                <div className={`${styles['group_3']}`}></div>
                <span className={`${styles['font_2']} ${styles['text_5']} ${styles['pos_3']}`}>查看更多</span>
                <img
                  className={`${styles['image_2']} ${styles['pos_4']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=35852998609c48c5bf4c6e046e0a6b94.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Tianmao_sousuo_yipaiyi_228_56987.defaultProps = { className: '' };