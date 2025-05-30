import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Gaidiqubuzhichi88vip_178_1388(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row ${styles['group']}`}>
        <div className={`self-start ${styles['section_2']}`}></div>
        <span className={`self-start ${styles['text']} ${styles['ml-7']}`}>充话费95折</span>
        <div className={`flex-col justify-start self-center ${styles['section']} ${styles['ml-7']}`}>
          <div className={`${styles['group_2']}`}>
            <span className={`${styles['font']} ${styles['text_2']}`}>本月可享受</span>
            <span className={`${styles['font']} ${styles['text_3']}`}>0</span>
            <span className={`${styles['font']}`}>次</span>
          </div>
        </div>
      </div>
      <div className={`flex-col mt-30`}>
        <div className={`flex-row justify-between ${styles['group_3']}`}>
          <span className={`${styles['text_4']}`}>132 8888 8888</span>
          <div className={`flex-col justify-start items-center relative ${styles['group_4']}`}>
            <div className={`${styles['group_5']}`}></div>
            <img
              className={`${styles['image']} ${styles['pos']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7c50b13c2bd0ae29a9eb60060e863949.png"
            />
          </div>
        </div>
        <div className={`flex-row items-center ${styles['group_6']}`}>
          <span className={`${styles['font_2']} ${styles['text_5']}`}>高圆圆</span>
          <span className={`${styles['font_2']} ${styles['text_6']} ml-8`}>(浙江联通）</span>
        </div>
        <div className={`flex-col justify-start items-start relative ${styles['group_7']}`}>
          <div className={`${styles['section_4']}`}></div>
          <div className={`flex-col ${styles['section_3']} ${styles['pos_2']}`}>
            <span className={`${styles['font_3']} ${styles['text_7']}`}>安徽联通的88VIP权益即将开通，敬请期待…</span>
            <div className={`flex-row justify-center ${styles['mt-15']}`}>
              <span className={`${styles['font_3']}`}>查看已开通地区</span>
              <img
                className={`self-start ${styles['image_2']} ${styles['ml-5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=800a5bb78aca6240838299a62da9e876.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Gaidiqubuzhichi88vip_178_1388.defaultProps = { className: '' };