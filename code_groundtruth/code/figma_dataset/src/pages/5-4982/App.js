import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Welcome_5_4982(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col items-center self-stretch ${styles['section']}`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=797a382bad8c2b234d4afce39ca3e279.png"
        />
        <img
          className={`mt-16 ${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=67405161273f7f3be29cde1af11d00c2.png"
        />
      </div>
      <div className={`flex-col self-stretch ${styles['group']}`}>
        <span className={`self-start ${styles['text']}`}>Password</span>
        <div className={`mt-12 flex-row justify-between self-stretch ${styles['section_2']}`}>
          <img
            className={`self-start ${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d10437714bee4e1e5d9372c11aa4b827.png"
          />
          <img
            className={`self-center ${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d48533e989fb511c776ee99a8979cfbc.png"
          />
        </div>
      </div>
      <img
        className={`self-center ${styles['image_5']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1987076362e62fda4ab00826f75a6f3f.png"
      />
      <img
        className={`self-center ${styles['image_6']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b6631b785c93e4a9d7350c4a02e66e63.png"
      />
    </div>
  );
}

Welcome_5_4982.defaultProps = { className: '' };