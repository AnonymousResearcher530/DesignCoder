import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Huiyuankapian_copy_178_1414(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col justify-start ${styles['page']} ${props.className}`}>
      <div className={`flex-col ${styles['section']}`}>
        <div className={`flex-row justify-between items-center`}>
          <div className={`flex-col items-start ${styles['group']}`}>
            <div className={`flex-row`}>
              <img
                className={`shrink-0 ${styles['image']} ${styles['image_1']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7f9942082d4ee1fe958b29eaa13b1118.png"
              />
              <img
                className={`shrink-0 ${styles['image']} ${styles['image_11']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=05412ba0fc3bb6d32b6a14b73c910e2e.png"
              />
              <img
                className={`shrink-0 ${styles['image_2']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1da6536ffb1e1d2b36dfc899705398c6.png"
              />
              <img
                className={`shrink-0 ${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2d21414ed754bd48041195d4f0f4fec7.png"
              />
              <img
                className={`shrink-0 ${styles['image_4']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a0b163510f52f0a4264311f4f8b8f859.png"
              />
              <img
                className={`shrink-0 self-start ${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0ae6bf96f8740056abc588f8027c72ca.png"
              />
              <div className={`shrink-0 self-center ${styles['section_3']}`}></div>
              <div className={`self-start ${styles['group_2']}`}>
                <span className={`${styles['text']} ${styles['text_2']}`}>充值超级</span>
                <span className={`${styles['text']} ${styles['text_3']}`}>VIP</span>
              </div>
            </div>
            <span className={`${styles['text_5']} ${styles['mt-9']}`}>尊享3大充值折扣优惠，2018.11.24会员到期</span>
          </div>
          <div className={`flex-col justify-start items-center ${styles['section_2']}`}>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
              <span className={`${styles['text_4']}`}>我的88VIP </span>
            </div>
          </div>
        </div>
        <div className={`flex-row relative ${styles['group_1']} ${styles['mt-127']}`}>
          <span className={`${styles['text_6']} ${styles['pos']}`}>已为我充值节省</span>
          <div className={`flex-row items-start ${styles['pos_2']}`}>
            <span className={`${styles['text_7']}`}>0</span>
            <span className={`${styles['text_9']}`}>元</span>
            <img
              className={`shrink-0 ${styles['image_8']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f836435f55b8e24406bcebe8d34065eb.png"
            />
          </div>
          <div className={`flex-row justify-between ${styles['group_3']} ${styles['pos_3']}`}>
            <div className={`flex-row items-start ${styles['group_4']}`}>
              <img
                className={`shrink-0 ${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f772db790f55952883c448cde1a871fa.png"
              />
              <span className={`shrink-0 ${styles['font']} ${styles['text_8']} ${styles['ml-13']}`}>我的订单</span>
            </div>
            <div className={`flex-row ${styles['group_5']}`}>
              <img
                className={`shrink-0 self-start ${styles['image_7']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=704e83848ee7507a008b521df0d1da5e.png"
              />
              <span className={`shrink-0 self-center ${styles['font']} ml-14`}>优惠券</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Huiyuankapian_copy_178_1414.defaultProps = { className: '' };