import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Androidqingdanhuhang_coming_soon(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <img
        className={`shrink-0 ${styles['image']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=daaf1a4cea6a7dc6fb2f7fb1e553ed41.png"
      />
      <div className={`flex-row justify-between items-center relative ${styles['section']}`}>
        <div className={`flex-row`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d996b11950bef61b9d727624e7ea49db.png"
          />
          <img
            className={`${styles['image_3']} ${styles['ml-32-5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2da9d21bcc0943aeb3cb41bc89274546.png"
          />
        </div>
        <div className={`flex-row`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=eb080cc38b17147b404bb3b2a9b8c1b1.png"
          />
          <img
            className={`ml-24 ${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e6bda2638878ad6b7c515aefb4de25a0.png"
          />
          <img
            className={`ml-24 ${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0760c6bdd9b02f9a25df6e8d779493d1.png"
          />
        </div>
      </div>
      <div className={`flex-row ${styles['section_2']}`}>
        <div className={`flex-row flex-1 relative ${styles['group']}`}>
          <span className={`${styles['font']} ${styles['pos_2']}`}>10.28</span>
          <span className={`${styles['font']} ${styles['pos_3']}`}>10.29</span>
          <div className={`${styles['divider']} ${styles['pos_4']}`}></div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper']} ${styles['pos']}`}>
            <span className={`${styles['font']} ${styles['text']}`}>10.30</span>
          </div>
        </div>
        <span className={`self-start ${styles['font']} ${styles['text_2']} ${styles['ml-19']}`}>11.01</span>
      </div>
      <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']}`}>
        <span className={`${styles['font']} ${styles['text_3']}`}>Starting 10.30</span>
      </div>
      <div className={`flex-row ${styles['equal-division']} ${styles['section_3']}`}>
        <div className={`flex-col items-center ${styles['equal-division-item']}`}>
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=367a2663427f72cd098d4eb10ba449f1.png"
          />
          <span className={`mt-6 ${styles['font_2']} ${styles['text_4']}`}>Sale Home</span>
        </div>
        <div className={`flex-col items-center ${styles['group_2']} ${styles['equal-division-item_2']}`}>
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7e042525a459ea8eeb2488c2aca1b87f.png"
          />
          <span className={`mt-6 ${styles['font_2']}`}>Explore</span>
        </div>
        <div className={`flex-col items-center ${styles['group_3']} ${styles['equal-division-item']}`}>
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5423917ad8d2fc0b7c51a1d6f4ab2450.png"
          />
          <span className={`mt-6 ${styles['text_5']}`}>Fan Lists</span>
        </div>
        <div className={`flex-col items-center ${styles['group_4']} ${styles['equal-division-item_2']}`}>
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8ebe724585b89738712c70105cfd389c.png"
          />
          <span className={`mt-6 ${styles['font_2']} ${styles['text_6']}`}>My 11.11</span>
        </div>
      </div>
    </div>
  );
}

Androidqingdanhuhang_coming_soon.defaultProps = { className: '' };