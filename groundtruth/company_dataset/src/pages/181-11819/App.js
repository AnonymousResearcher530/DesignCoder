import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Androidqingdanhuang_descrishouqi(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <img
        className={`shrink-0 ${styles['image']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=daaf1a4cea6a7dc6fb2f7fb1e553ed41.png"
      />
      <div className={`flex-row justify-between items-center relative ${styles['section']}`}>
        <div className={`flex-row items-center`}>
          <img
            className={`shrink-0 ${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d996b11950bef61b9d727624e7ea49db.png"
          />
          <span className={`${styles['font']} ${styles['text']} ${styles['ml-32-5']}`}>Fan Lists</span>
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
            className={`ml-24 ${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0760c6bdd9b02f9a25df6e8d779493d1.png"
          />
        </div>
      </div>
      <div className={`flex-col justify-start relative ${styles['group']}`}>
        <div className={`flex-col ${styles['section_2']}`}>
          <div className={`flex-row items-center self-stretch ${styles['group_2']}`}>
            <span className={`${styles['font']}`}>10.28</span>
            <div className={`flex-col justify-start items-center shrink-0 ${styles['text-wrapper']}`}>
              <span className={`${styles['font']} ${styles['text_2']}`}>10.29</span>
            </div>
            <span className={`${styles['font']} ${styles['text_3']}`}>10.30</span>
            <span className={`${styles['font']} ${styles['text_4']}`}>11.01</span>
          </div>
          <div className={`self-start ${styles['section_3']}`}></div>
        </div>
        <img
          className={`${styles['image_4']} ${styles['pos']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=713333c68f4fb24042739f69e8867811.png"
        />
      </div>
      <div className={`flex-col justify-start items-center relative ${styles['section_4']}`}>
        <img
          className={`shrink-0 ${styles['image_10']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7691c304b88fba9876eefe8fd1067b7e.png"
        />
        <img
          className={`shrink-0 ${styles['image_5']} ${styles['pos_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0fbebb5ef68f102422d9e33f1504b344.png"
        />
        <img
          className={`shrink-0 ${styles['image_6']} ${styles['pos_3']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6deb0fe2e6e051d9c9273a4eceb5fb2d.png"
        />
        <div className={`flex-col items-start ${styles['section_5']} ${styles['pos_4']}`}>
          <div className={`flex-row justify-between ${styles['group_3']}`}>
            <div className={`flex-row items-end`}>
              <img
                className={`${styles['image_8']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fba5347679ef0374f4ef6f41e16001ca.png"
              />
              <div className={`${styles['section_6']} ${styles['ml-10-5']}`}></div>
            </div>
            <img
              className={`self-start ${styles['image_9']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3af9f204fac4b10b77389a86dea70c06.png"
            />
          </div>
          <img
            className={`${styles['image_12']} ${styles['mt-110']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1439807cf16918547e9e3582987fdda8.png"
          />
        </div>
        <img
          className={`shrink-0 ${styles['image_11']} ${styles['pos_7']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6f7caed5bc0785f1a9cc61069dc9c913.png"
        />
        <img
          className={`shrink-0 ${styles['image_7']} ${styles['pos_5']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b7a1a311a0aad3e278906b7f99d49afe.png"
        />
        <div className={`flex-col ${styles['group_4']} ${styles['pos_6']}`}>
          <div className={`flex-col items-start`}>
            <span className={`${styles['font_2']}`}>CREATE A LIST AND </span>
            <span className={`${styles['font_2']}`}>WIN A US $50 COUPON</span>
          </div>
          <div className={`flex-col items-start ${styles['mt-16-5']}`}>
            <span className={`${styles['text_5']}`}>Today’s theme</span>
            <span className={`${styles['font_3']} ${styles['text_6']}`}>MUST-HAVE</span>
            <span className={`${styles['font_3']} ${styles['text_7']}`}>GADGETS</span>
          </div>
        </div>
        <div className={`flex-row ${styles['section_7']} ${styles['pos_8']}`}>
          <img
            className={`shrink-0 self-start ${styles['image_13']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fd5c31ff4d0cd609efd0e442efe87fac.png"
          />
          <div
            className={`flex-col justify-start flex-1 self-center relative ${styles['group_5']} ${styles['ml-7-5']}`}
          >
            <div className={`${styles['group_6']}`}>
              <span className={`${styles['font_4']} ${styles['text_8']}`}>
                From phones to tablets that literally do everything, the tech-savvy among us are always the best gif
              </span>
              <span className={`${styles['text_10']}`}>...</span>
            </div>
            <span className={`${styles['font_4']} ${styles['text_9']} ${styles['pos_9']}`}>EXPAND</span>
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['section_8']}`}>
        <div className={`flex-row justify-between self-stretch ${styles['group_7']}`}>
          <span className={`${styles['text_11']}`}>FEATURED LISTS </span>
          <span className={`${styles['font_4']} ${styles['text_12']}`}>FAN LISTS</span>
        </div>
        <div className={`self-start ${styles['section_9']}`}></div>
      </div>
      <div className={`flex-row ${styles['equal-division']} ${styles['section_10']}`}>
        <div className={`flex-col items-center ${styles['equal-division-item']}`}>
          <img
            className={`${styles['image_14']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=367a2663427f72cd098d4eb10ba449f1.png"
          />
          <span className={`mt-6 ${styles['font_5']} ${styles['text_13']}`}>Sale Home</span>
        </div>
        <div className={`flex-col items-center ${styles['group_8']} ${styles['equal-division-item_2']}`}>
          <img
            className={`${styles['image_14']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7e042525a459ea8eeb2488c2aca1b87f.png"
          />
          <span className={`mt-6 ${styles['font_5']}`}>Explore</span>
        </div>
        <div className={`flex-col items-center ${styles['group_9']} ${styles['equal-division-item']}`}>
          <img
            className={`${styles['image_14']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5423917ad8d2fc0b7c51a1d6f4ab2450.png"
          />
          <span className={`mt-6 ${styles['text_14']}`}>Fan Lists</span>
        </div>
        <div className={`flex-col items-center ${styles['group_10']} ${styles['equal-division-item_2']}`}>
          <img
            className={`${styles['image_14']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8ebe724585b89738712c70105cfd389c.png"
          />
          <span className={`mt-6 ${styles['font_5']} ${styles['text_15']}`}>My 11.11</span>
        </div>
      </div>
    </div>
  );
}

Androidqingdanhuang_descrishouqi.defaultProps = { className: '' };