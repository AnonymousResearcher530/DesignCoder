import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Xiangqingyeticeng_179_2641(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col justify-start relative ${styles['page']} ${props.className}`}>
      <div className={`${styles['section']}`}></div>
      <img
        className={`${styles['image_2']} ${styles['pos_2']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5de537bb78429674d28f03bc43fe5d4e.png"
      />
      <div className={`flex-row items-center ${styles['section_2']} ${styles['pos']}`}>
        <div className={`flex-row flex-1`}>
          <img
            className={`shrink-0 self-start ${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=077aceb4bbfb8cd0667ee50aceb4c31b.png"
          />
          <img
            className={`shrink-0 ${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ae22231c3afdb792d8107d8f73929576.png"
          />
          <span className={`flex-1 ${styles['font']} ${styles['text']}`}>添加生活号到“朋友”页，查找更方便</span>
        </div>
        <div className={`ml-20 flex-col justify-start items-center shrink-0 ${styles['text-wrapper']}`}>
          <span className={`${styles['font']} ${styles['text_2']}`}>立即添加</span>
        </div>
      </div>
    </div>
  );
}

Xiangqingyeticeng_179_2641.defaultProps = { className: '' };