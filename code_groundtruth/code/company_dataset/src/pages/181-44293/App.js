import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Baobiaorukou1_yochuxianhongdian_(props) {
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
          <div className={`ml-24 flex-col justify-start items-start flex-1 relative ${styles['group_2']}`}>
            <img
              className={`${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7ceb0bfa524e077588993f74ae531e78.png"
            />
            <div className={`${styles['section_2']} ${styles['pos']}`}></div>
            <span className={`${styles['text']} ${styles['pos_3']}`}>智能报表</span>
            <img
              className={`${styles['image_3']} ${styles['pos_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ad0ded675bdc33347e8e3ef780ced651.png"
            />
          </div>
        </div>
        <div className={`mt-60 flex-col`}>
          <div className={`flex-row justify-between`}>
            <div className={`flex-row justify-start items-center ${styles['image-wrapper']} ${styles['view']}`}>
              <img
                className={`${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=92c083fa191efb88d0e5f4bb97c46092.png"
              />
            </div>
            <div className={`flex-row justify-start items-center ${styles['image-wrapper']}`}>
              <img
                className={`${styles['image_4']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=22a86a09622c02255d2951378d41392c.png"
              />
            </div>
            <div className={`flex-row justify-start items-center ${styles['image-wrapper']}`}>
              <img
                className={`${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6e723ca99e2a087491d3e6ada4fea7db.png"
              />
            </div>
          </div>
          <div className={`flex-row justify-center relative ${styles['group_3']}`}>
            <img
              className={`${styles['image_7']} ${styles['pos_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=da0d2802dcaefefc361c7e6b0be52903.png"
            />
            <img
              className={`self-start ${styles['image_8']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2025bf001631b9482fa3013c93a58592.png"
            />
            <img
              className={`self-center ${styles['image_9']} ${styles['pos_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a57e5616e53dbef49a80425185f42323.png"
            />
          </div>
          <div className={`flex-row items-center ${styles['group_4']}`}>
            <div className={`flex-row justify-start items-center ${styles['image-wrapper_2']}`}>
              <img
                className={`${styles['image_10']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=910cb52a9a02c033d1adb10ba7bd063c.png"
              />
            </div>
            <div className={`ml-32 flex-row justify-start items-center ${styles['image-wrapper_4']}`}>
              <img
                className={`${styles['image_12']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=76d44bb7d4743ae4bdd8e9c24f5f011b.png"
              />
            </div>
            <div className={`ml-32 flex-row justify-start items-center ${styles['image-wrapper_3']}`}>
              <img
                className={`${styles['image_11']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=117c70755f2aa9d42fda07c35e33bfd4.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Baobiaorukou1_yochuxianhongdian_.defaultProps = { className: '' };