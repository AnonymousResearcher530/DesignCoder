import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Light_Dashboard_1_22_6217(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center ${styles['group']}`}>
        <div className={`flex-row items-center`}>
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7e35f2cd5978ed7fc89bfc263f5d61a2.png"
          />
          <div className={`flex-col items-start ml-18`}>
            <span className={`${styles['font']} ${styles['text']}`}>Welcome</span>
            <span className={`${styles['text_2']} ${styles['mt-11']}`}>Elina Krohnke</span>
          </div>
        </div>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3964fab403208321121be5c74e4afa70.png"
          />
        </div>
      </div>
      <div className={`flex-col ${styles['group_2']}`}>
        <div className={`flex-col self-stretch`}>
          <span className={`self-start ${styles['font_2']} ${styles['text_3']}`}>symptoms you have?</span>
          <div
            className={`flex-row justify-between items-center self-stretch ${styles['section_2']} ${styles['mt-11']}`}
          >
            <div className={`flex-row items-center`}>
              <img
                className={`shrink-0 ${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e27e4d21fb4bb7b32e2819e989a2a97a.png"
              />
              <span className={`${styles['text_4']} ${styles['ml-13']}`}>Select Symptoms</span>
            </div>
            <img
              className={`${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=11e942f6310f712e30b9c455992fd636.png"
            />
          </div>
        </div>
        <div className={`flex-col self-stretch ${styles['mt-35']}`}>
          <span className={`self-start ${styles['font_2']} ${styles['text_5']}`}>Your Stress levels?</span>
          <div className={`flex-col self-stretch mt-14`}>
            <div className={`flex-col justify-start items-center relative ${styles['section_3']}`}>
              <img
                className={`${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9dcf1c5a9180d21b22817f6bb0c7eeca.png"
              />
              <img
                className={`${styles['image_5']} ${styles['pos']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d83f697239802565899db140b1d4fecf.png"
              />
            </div>
            <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']}`}>
              <img
                className={`${styles['image_7']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=01c25cad65705d9226a9f9a162953046.png"
              />
            </div>
          </div>
        </div>
        <div className={`flex-col self-stretch ${styles['mt-35']}`}>
          <span className={`self-start ${styles['font']}`}>How are you feeling today?</span>
          <div className={`flex-row ${styles['equal-division']} mt-12`}>
            <div className={`flex-col ${styles['section_4']} ${styles['section_1']}`}>
              <img
                className={`self-center ${styles['image_8']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9f22f4ff71a317fc95a3b6e14a5674bc.png"
              />
              <div className={`flex-col items-center self-stretch mt-16`}>
                <span className={`${styles['font_3']}`}>Feeling</span>
                <span className={`${styles['font_3']}`}>Good</span>
              </div>
            </div>
            <div className={`flex-col ${styles['section_4']} ${styles['section_7']} ${styles['ml-17']}`}>
              <img
                className={`self-center ${styles['image_8']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=990694acc2eb1c5ef235505eadea9413.png"
              />
              <div className={`flex-col items-center self-stretch mt-16`}>
                <span className={`${styles['font_3']}`}>Feeling</span>
                <span className={`${styles['font_3']}`}>Disappointed</span>
              </div>
            </div>
            <div
              className={`flex-col ${styles['equal-division-item_2']} ${styles['equal-division-item']} ${styles['ml-17']}`}
            >
              <img
                className={`self-center ${styles['image_8']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=26e5857de46ecd2154d60c236c70ef95.png"
              />
              <div className={`flex-col items-center self-stretch mt-16`}>
                <span className={`${styles['font_3']}`}>Feeling</span>
                <span className={`${styles['font_3']}`}>Bad</span>
              </div>
            </div>
          </div>
        </div>
        <span className={`self-start ${styles['font']} ${styles['mt-35']}`}>Your anxiety levels?</span>
      </div>
      <div className={`flex-col ${styles['section_5']}`}>
        <div className={`flex-row justify-between items-start ${styles['equal-division_2']}`}>
          <img
            className={`${styles['equal-division-item_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7c5d46fe1a8c513b4207cd801b6821c9.png"
          />
          <img
            className={`${styles['equal-division-item_4']} ${styles['image_9']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ed09eebcb100034c986f6306dfff5d09.png"
          />
          <img
            className={`${styles['equal-division-item_5']} ${styles['image_10']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6e8bf043a6248558b5360fd26e7b3ee1.png"
          />
          <img
            className={`${styles['equal-division-item_6']} ${styles['image_11']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d5e682d119472f57e2bf2b847fcc8cad.png"
          />
        </div>
        <span className={`self-start ${styles['text_6']}`}>Home</span>
      </div>
    </div>
  );
}

Light_Dashboard_1_22_6217.defaultProps = { className: '' };