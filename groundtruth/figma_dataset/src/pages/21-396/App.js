import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function IPhone_13_Pro_Max_31_21_396(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between self-stretch ${styles['group']}`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1fc6a845dbe19dbaae1a85804ddd9328.png"
        />
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6412ee6de5ea7837c8aff0c272f293b5.png"
        />
      </div>
      <div className={`flex-col justify-start items-center self-center ${styles['image-wrapper']}`}>
        <img
          className={`${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f16c56574685e0a6a8ef597b56cee3bc.png"
        />
      </div>
      <span className={`self-center ${styles['text']}`}>Congratulations!</span>
      <div className={`flex-col self-stretch ${styles['section_2']}`}>
        <span className={`self-center ${styles['text_2']}`}>Emily has attempted 20 workouts this week.</span>
        <div className={`flex-col justify-start items-end self-start relative ${styles['group_2']}`}>
          <div className={`flex-col ${styles['section_3']}`}>
            <span className={`self-end ${styles['text_3']}`}>Share on</span>
            <div className={`flex-row items-center self-stretch mt-4`}>
              <img
                className={`${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e222b2c27704f03119d6c31157acb6a4.png"
              />
              <img
                className={`${styles['image_4']} ml-2`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a9c6d7187902765592de929c28eefe30.png"
              />
              <img
                className={`${styles['image_4']} ml-2`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1944ba3d5d304c3f3d12c56f9e7c03c9.png"
              />
            </div>
          </div>
          <img
            className={`${styles['image_3']} ${styles['pos']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=503b06c724e2e38f2fc0e5b0ac3a92f8.png"
          />
        </div>
      </div>
    </div>
  );
}

IPhone_13_Pro_Max_31_21_396.defaultProps = { className: '' };