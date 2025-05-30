import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Onboarding_4(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <span className={`self-end ${styles['font']} ${styles['text']}`}>Skip</span>
      <img
        className={`self-center ${styles['image']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=24d126b6e3eb886e2f35caeaa27c0c84.png"
      />
      <img
        className={`self-center ${styles['image_2']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=05a754b134eebcbee8fa16045a99ef49.png"
      />
      <div className={`flex-col self-center ${styles['group']}`}>
        <span className={`self-center ${styles['text_2']}`}>Choose Your Course</span>
        <span className={`self-stretch ${styles['font']} ${styles['text_3']} ${styles['mt-29']}`}>
          Choose the course of your choice and gain industry knowledge and experience in it.
        </span>
      </div>
      <div className={`flex-row justify-between items-center self-stretch ${styles['group_2']}`}>
        <span className={`${styles['font_2']} ${styles['text_4']}`}>Back</span>
        <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
          <span className={`${styles['font_2']} ${styles['text_5']}`}>Next</span>
        </div>
      </div>
    </div>
  );
}

Onboarding_4.defaultProps = { className: '' };