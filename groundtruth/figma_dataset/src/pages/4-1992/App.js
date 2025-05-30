import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Android_7_4_1992(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <img
        className={`self-start ${styles['image']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=cf71d1b002a0611ca0a5bb227af4d4d4.png"
      />
      <span className={`self-center ${styles['text']}`}>LOGO</span>
      <div className={`flex-col items-center self-stretch ${styles['group']}`}>
        <span className={`${styles['font']}`}>Already have an account?</span>
        <span className={`${styles['font_2']} ${styles['mt-21']}`}>Recomece de onde parou</span>
      </div>
      <div className={`flex-col justify-start items-center self-stretch ${styles['text-wrapper']}`}>
        <span className={`${styles['font']} ${styles['text_2']}`}>Login</span>
      </div>
      <div className={`self-stretch ${styles['divider']}`}></div>
      <div className={`flex-col items-center self-stretch ${styles['group_2']}`}>
        <span className={`${styles['font']}`}>Are you new here?</span>
        <span className={`${styles['font_2']} ${styles['text_3']} ${styles['mt-21']}`}>Start learning today</span>
      </div>
      <div className={`flex-col justify-start items-center self-stretch ${styles['text-wrapper_2']}`}>
        <span className={`${styles['font']} ${styles['text_4']}`}>Start</span>
      </div>
    </div>
  );
}

Android_7_4_1992.defaultProps = { className: '' };