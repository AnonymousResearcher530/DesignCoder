import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Login_as_5_4953(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <img
        className={`self-center ${styles['image']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f28456a081880845abcc5985e5a932b0.png"
      />
      <span className={`self-center ${styles['text']}`}>I am a</span>
      <div className={`flex-col self-stretch ${styles['group']}`}>
        <div className={`flex-col justify-start relative ${styles['group_2']}`}>
          <div className={`flex-row justify-end ${styles['section']}`}>
            <span className={`self-center ${styles['font']} ${styles['text_2']}`}>Caregiver</span>
            <img
              className={`self-start ${styles['image_3']} ${styles['ml-57']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7c9fee15c47ec562ffc2c267c7c4407d.png"
            />
          </div>
          <img
            className={`${styles['image_2']} ${styles['pos']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e52f5fcffed6e3c99b802a25e1c6943c.png"
          />
        </div>
        <div className={`flex-row justify-center relative ${styles['section_2']}`}>
          <img
            className={`self-center ${styles['image_2']} ${styles['pos_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=adee4c93ff8c6ad2373a1013efc046df.png"
          />
          <span className={`self-start ${styles['font']} ${styles['text_3']}`}>Senior</span>
          <img
            className={`self-start ${styles['image_3']} ${styles['pos_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e9ba274c528b271e766da18a78fc2dc2.png"
          />
        </div>
      </div>
      <img
        className={`self-end ${styles['image_4']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=998aa084ee956270b6e935ad534151e8.png"
      />
    </div>
  );
}

Login_as_5_4953.defaultProps = { className: '' };