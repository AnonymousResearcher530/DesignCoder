import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Baobiaorukou1_yochuxianhongdian_178_2576(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col justify-start ${styles['page']} ${props.className}`}>
      <div className={`flex-col ${styles['section']}`}>
        <div className={`flex-row ${styles['group']}`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=52ec5996b291ae23e2a36a413d63dd2f.png"
          />
          <img
            className={`${styles['image']} ml-24`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7ceb0bfa524e077588993f74ae531e78.png"
          />
        </div>
        <div className={`flex-row relative ${styles['group_2']} mt-60`}>
          <img
            className={`${styles['image_6']} ${styles['pos_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=92c083fa191efb88d0e5f4bb97c46092.png"
          />
          <img
            className={`${styles['image_4']} ${styles['pos']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=22a86a09622c02255d2951378d41392c.png"
          />
          <img
            className={`${styles['image_5']} ${styles['pos_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6e723ca99e2a087491d3e6ada4fea7db.png"
          />
          <img
            className={`${styles['image_7']} ${styles['pos_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=da0d2802dcaefefc361c7e6b0be52903.png"
          />
          <img
            className={`${styles['image_8']} ${styles['pos_8']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2025bf001631b9482fa3013c93a58592.png"
          />
          <img
            className={`${styles['image_9']} ${styles['pos_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a57e5616e53dbef49a80425185f42323.png"
          />
          <img
            className={`${styles['image_10']} ${styles['pos_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=910cb52a9a02c033d1adb10ba7bd063c.png"
          />
          <img
            className={`${styles['image_12']} ${styles['pos_9']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=76d44bb7d4743ae4bdd8e9c24f5f011b.png"
          />
          <img
            className={`${styles['image_11']} ${styles['pos_10']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=117c70755f2aa9d42fda07c35e33bfd4.png"
          />
        </div>
      </div>
    </div>
  );
}

Baobiaorukou1_yochuxianhongdian_178_2576.defaultProps = { className: '' };