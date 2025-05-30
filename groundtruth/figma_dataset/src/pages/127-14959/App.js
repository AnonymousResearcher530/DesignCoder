import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Homescreen_2_127_14959(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center ${styles['group']}`}>
        <div className={`flex-row items-center`}>
          <img
            className={`shrink-0 ${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=46712945b2bb72f198e04d436a0faa24.png"
          />
          <span className={`${styles['text']} ${styles['ml-15']}`}>Cart</span>
        </div>
        <div className={`flex-row items-center ${styles['group_2']}`}>
          <span className={`${styles['text_2']}`}>0</span>
          <span className={`ml-8 ${styles['font']} ${styles['text_3']}`}>Item(s)</span>
        </div>
      </div>
      <div className={`flex-col items-center ${styles['section']}`}>
        <img
          className={`${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d62edca4c8309d173556dd4cc8b68783.png"
        />
        <span className={`mt-16 ${styles['font']} ${styles['text_4']}`}>No item in your cart</span>
      </div>
      <div className={`flex-col ${styles['group_3']}`}>
        <div className={`flex-row justify-between`}>
          <span className={`${styles['text_5']}`}>Sub Total</span>
          <span className={`${styles['text_6']}`}>0</span>
        </div>
        <div className={`flex-row justify-between ${styles['mt-27']}`}>
          <span className={`${styles['text_7']}`}>TOTAL</span>
          <div className={`flex-row items-center`}>
            <span className={`${styles['font_2']} ${styles['text_8']}`}>$</span>
            <span className={`${styles['font_2']} ${styles['text_9']} ${styles['ml-3']}`}>0</span>
          </div>
        </div>
      </div>
      <div className={`flex-col justify-start ${styles['section_2']}`}>
        <div className={`flex-row ${styles['equal-division']}`}>
          <div className={`flex-col items-center ${styles['equal-division-item']} ${styles['group_4']}`}>
            <img
              className={`shrink-0 ${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=235f7bec307cc00c3d3f6b063b8e51f1.png"
            />
            <span className={`${styles['font_3']} ${styles['text_12']}`}>Home</span>
          </div>
          <div className={`flex-col items-center ${styles['equal-division-item']} ${styles['group_5']}`}>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=de5bbe5fb229998f878ea1c99afb07e0.png"
            />
            <span className={`mt-2 ${styles['font_3']} ${styles['text_13']}`}>Menu</span>
          </div>
          <div
            className={`flex-col justify-start items-center ${styles['equal-division-item']} ${styles['equal-division-item_2']}`}
          >
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=627c284e2cb7e70962edf349e56dc28f.png"
            />
            <span className={`${styles['font_3']} ${styles['text_10']} ${styles['pos']}`}>Favourite</span>
          </div>
          <div
            className={`flex-col justify-start items-center ${styles['equal-division-item']} ${styles['equal-division-item_2']}`}
          >
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0450fd6b3241bd847261b558454f25a9.png"
            />
            <span className={`${styles['font_3']} ${styles['text_11']} ${styles['pos_2']}`}>Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Homescreen_2_127_14959.defaultProps = { className: '' };