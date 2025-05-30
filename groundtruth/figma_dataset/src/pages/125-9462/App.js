import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Onboarding_2_125_9462(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col items-center`}>
        <span className={`${styles['font']} ${styles['text']}`}>Welcome to the Red Podcast!</span>
        <span className={`${styles['text_2']} ${styles['mt-15']}`}>Tell us what content do you like to listen to?</span>
      </div>
      <div className={`flex-col ${styles['group']}`}>
        <div className={`flex-row justify-center`}>
          <div className={`flex-row items-center ${styles['section']}`}>
            <span className={`${styles['font_2']}`}>📰</span>
            <span className={`ml-10 ${styles['font_3']}`}>News</span>
          </div>
          <div className={`ml-10 flex-row items-center ${styles['section']}`}>
            <span className={`${styles['font_2']}`}>🤣</span>
            <span className={`ml-10 ${styles['font_2']} ${styles['text_3']}`}>Comedy</span>
          </div>
          <div className={`ml-10 flex-row items-center ${styles['section_2']}`}>
            <span className={`${styles['font_2']}`}>🧳</span>
            <span className={`ml-10 ${styles['font']}`}>Business</span>
          </div>
        </div>
        <div className={`mt-20 flex-row justify-center`}>
          <div className={`flex-row items-center ${styles['section_3']}`}>
            <span className={`${styles['font_2']}`}>🎨</span>
            <span className={`ml-10 ${styles['font']} ${styles['text_4']}`}>Art</span>
          </div>
          <div className={`ml-10 flex-row items-center ${styles['section_4']}`}>
            <span className={`${styles['font_2']}`}>🧟‍♀️</span>
            <span className={`ml-10 ${styles['font_3']} ${styles['text_5']}`}>Horror</span>
          </div>
          <div className={`ml-10 flex-row items-center ${styles['section_3']}`}>
            <span className={`${styles['font_2']}`}>👮🏼‍♀️</span>
            <span className={`ml-10 ${styles['font']} ${styles['text_6']}`}>Criminal</span>
          </div>
        </div>
        <div className={`mt-20 flex-col`}>
          <div className={`flex-row justify-center self-stretch`}>
            <div className={`flex-row items-center ${styles['section_2']}`}>
              <span className={`${styles['font_2']}`}>💻</span>
              <span className={`${styles['font_4']} ${styles['text_7']} ${styles['ml-9']}`}>Technology</span>
            </div>
            <div className={`ml-10 flex-row items-center ${styles['section_2']}`}>
              <span className={`${styles['font_2']}`}>📸</span>
              <span className={`ml-10 ${styles['font_4']} ${styles['text_8']}`}>Lifestyle</span>
            </div>
            <div className={`ml-10 flex-row items-center ${styles['section_2']}`}>
              <span className={`${styles['font_2']}`}>🍿</span>
              <span className={`ml-10 ${styles['font']} ${styles['text_9']}`}>Movie</span>
            </div>
          </div>
          <div className={`mt-20 flex-row justify-center self-stretch`}>
            <div className={`flex-row items-center ${styles['section_2']}`}>
              <span className={`${styles['font_2']}`}>🎮</span>
              <span className={`ml-10 ${styles['font']} ${styles['text_10']}`}>Game</span>
            </div>
            <div className={`ml-10 flex-row items-center ${styles['section']}`}>
              <span className={`${styles['font_2']}`}>🏌🏽</span>
              <span className={`ml-10 ${styles['font_3']} ${styles['text_11']}`}>Hobbies</span>
            </div>
            <div className={`ml-10 flex-row items-center ${styles['section_2']}`}>
              <span className={`${styles['font_2']}`}>🏀</span>
              <span className={`ml-10 ${styles['font_4']} ${styles['text_12']}`}>Sports</span>
            </div>
          </div>
          <div className={`mt-20 flex-row self-stretch ${styles['group_2']}`}>
            <div className={`flex-row items-center shrink-0 ${styles['section_3']}`}>
              <span className={`${styles['font_2']}`}>📚</span>
              <span className={`ml-10 ${styles['font']} ${styles['text_15']}`}>Educatio</span>
            </div>
            <div className={`ml-10 flex-row flex-1 ${styles['section_5']}`}>
              <span className={`shrink-0 self-start ${styles['font_2']} ${styles['text_14']}`}>👶🏼</span>
              <span className={`ml-10 flex-1 ${styles['font']} ${styles['text_13']}`}>en_Parenting/Anak</span>
            </div>
          </div>
          <div className={`mt-20 flex-row justify-center items-center self-center ${styles['section_6']}`}>
            <span className={`${styles['font_2']}`}>🕌</span>
            <span className={`ml-10 ${styles['font_4']} ${styles['text_16']}`}>Spiritual</span>
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['group_3']}`}>
        <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
          <span className={`${styles['text_17']}`}>Goon</span>
        </div>
        <div className={`mt-16 flex-col justify-start items-center ${styles['text-wrapper_2']}`}>
          <span className={`${styles['text_18']}`}>en_Kembali</span>
        </div>
      </div>
    </div>
  );
}

Onboarding_2_125_9462.defaultProps = { className: '' };