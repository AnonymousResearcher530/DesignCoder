import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Sign_up_5_2798(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row items-center ${styles['group']}`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=92a2e8d2f5639cd6be8d3176c06b478b.png"
        />
        <span className={`${styles['text']} ${styles['ml-11']}`}>Back</span>
      </div>
      <div className={`flex-col ${styles['group_2']}`}>
        <img
          className={`self-center ${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=792f7243caa100d70a16206707c6a5aa.png"
        />
        <span className={`mt-20 self-start ${styles['text_2']}`}>Sign Up</span>
      </div>
      <div className={`flex-col ${styles['list']}`}>
        {data.items.map((item, index) => (
          <div className={`flex-row items-center mt-38 ${styles['list-item']}`} key={index}>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a8ced97020c3695c72a01812571702a4.png"
            />
            <span className={`${styles['font']} ${styles['ml-25']}`}>Full Name</span>
          </div>
        ))}
      </div>
      <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
        <span className={`${styles['font_2']} ${styles['text_5']}`}>Sign Up</span>
      </div>
      <div className={`flex-row justify-end ${styles['group_3']}`}>
        <span className={`${styles['font_2']} ${styles['text_7']}`}>Sing In</span>
        <span className={`${styles['text_6']}`}>Already have an account ? </span>
      </div>
    </div>
  );
}

Sign_up_5_2798.defaultProps = { className: '' };