import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Activity_Page(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center self-stretch ${styles['group']}`}>
        <img
          className={`${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e29232e259d33dc258ff6ed70cda0670.png"
        />
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6efa563841fe12ddf40085e7fff416a7.png"
        />
      </div>
      <span className={`self-start ${styles['text']}`}>Your activities</span>
      <span className={`self-start ${styles['font']} ${styles['text_2']}`}>This week</span>
      <div className={`flex-col justify-start self-stretch relative ${styles['group_2']}`}>
        <div className={`flex-row ${styles['equal-division']}`}>
          <div className={`flex-col items-center ${styles['section']} ${styles['equal-division-item']}`}>
            <span className={`${styles['font_2']} ${styles['text_3']}`}>Sat</span>
            <span className={`mt-14 ${styles['font']}`}>26</span>
          </div>
          <div className={`ml-14 flex-col items-center ${styles['section']} ${styles['equal-division-item']}`}>
            <span className={`${styles['font_2']} ${styles['text_4']}`}>Sun</span>
            <span className={`mt-14 ${styles['font']} ${styles['text_8']}`}>27</span>
          </div>
          <div className={`ml-14 flex-col items-center ${styles['section']} ${styles['section_2']}`}>
            <span className={`${styles['font_3']} ${styles['text_5']}`}>Mon</span>
            <span className={`mt-14 ${styles['font']} ${styles['text_9']}`}>28</span>
          </div>
          <div className={`ml-14 flex-col items-center ${styles['section']} ${styles['equal-division-item']}`}>
            <span className={`${styles['font_2']} ${styles['text_6']}`}>Tue</span>
            <span className={`mt-14 ${styles['font']}`}>29</span>
          </div>
          <div className={`ml-14 flex-col items-center ${styles['section']} ${styles['equal-division-item']}`}>
            <span className={`${styles['font_2']} ${styles['text_7']}`}>Wed</span>
            <span className={`mt-14 ${styles['font']} ${styles['text_10']}`}>30</span>
          </div>
        </div>
        <div className={`${styles['section_3']} ${styles['pos']}`}></div>
      </div>
      <div className={`self-start ${styles['group_3']}`}>
        <span className={`${styles['text_11']}`}>1680 </span>
        <span className={`${styles['text_12']}`}>kcal</span>
      </div>
      <div className={`flex-col self-stretch ${styles['group_4']}`}>
        <img
          className={`${styles['image_3']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1b03189657fa9e8137532f3ee4862af4.png"
        />
        <div className={`mt-14 flex-row ${styles['group_5']}`}>
          <div className={`flex-row justify-start`}>
            <span className={`${styles['font_3']} ${styles['text_13']}`}>8AM</span>
          </div>
          <div className={`flex-row justify-start ${styles['text-wrapper']}`}>
            <span className={`${styles['font_3']} ${styles['text_14']}`}>10AM</span>
          </div>
          <div className={`flex-row justify-start ${styles['text-wrapper_2']}`}>
            <span className={`${styles['font_3']}`}>12AM</span>
          </div>
          <div className={`flex-row justify-start items-center ${styles['text-wrapper_3']} ${styles['view']}`}>
            <span className={`${styles['font_3']}`}>2PM</span>
          </div>
          <div className={`flex-row justify-start items-center ${styles['text-wrapper_3']} ${styles['view_2']}`}>
            <span className={`${styles['font_3']} ${styles['text_15']}`}>4PM</span>
          </div>
        </div>
      </div>
      <div className={`flex-col self-stretch ${styles['group_6']}`}>
        <div className={`flex-col ${styles['section_4']}`}>
          <div className={`flex-row items-center self-stretch`}>
            <img
              className={`${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d1d98919f5b56e25969203396c057b11.png"
            />
            <span className={`${styles['font_4']} ${styles['text_16']}`}>Running </span>
            <img
              className={`${styles['image_5']} ${styles['image_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6c2236f0d42a406a9c3584c4a11e06e3.png"
            />
            <span className={`${styles['font_5']} ${styles['text_17']}`}>8.00 AM - 9.30AM</span>
          </div>
          <div className={`mt-24 flex-row ${styles['equal-division_2']}`}>
            <div className={`flex-col justify-start items-end ${styles['group_7']} ${styles['equal-division-item_2']}`}>
              <span className={`${styles['font_7']}`}>hours</span>
              <span className={`${styles['font_6']} ${styles['pos_2']}`}>1.32 </span>
            </div>
            <div
              className={`flex-col justify-start items-end ${styles['group_8']} ${styles['equal-division-item_3']} ${styles['ml-25']}`}
            >
              <span className={`${styles['font_7']}`}>kilometers</span>
              <span className={`${styles['font_6']} ${styles['pos_3']}`}>9.50 </span>
            </div>
          </div>
        </div>
        <div className={`mt-10 flex-col ${styles['section_4']}`}>
          <div className={`flex-row items-center self-stretch`}>
            <img
              className={`${styles['image_7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b3a6e7ce33d02b5e1c144f440ab5ef0c.png"
            />
            <span className={`ml-8 ${styles['font_4']}`}>Swimming</span>
            <img
              className={`ml-8 ${styles['image_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fda707aa76840b517d8ebd0366b36ea6.png"
            />
            <span className={`ml-8 ${styles['font_5']}`}>8.00 AM - 9.30AM</span>
          </div>
          <div className={`mt-24 flex-row ${styles['equal-division_2']}`}>
            <div className={`flex-col justify-start items-end ${styles['group_7']} ${styles['equal-division-item_2']}`}>
              <span className={`${styles['font_7']}`}>hours</span>
              <span className={`${styles['font_6']} ${styles['pos_4']}`}>1.32 </span>
            </div>
            <div
              className={`flex-col justify-start items-end ${styles['group_8']} ${styles['equal-division-item_3']} ${styles['ml-25']}`}
            >
              <span className={`${styles['font_7']}`}>kilometers</span>
              <span className={`${styles['font_6']} ${styles['pos_5']}`}>9.50 </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Activity_Page.defaultProps = { className: '' };