import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function VERIFY_EMAIL_ADDRESS_5_3359(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center ${styles['group']}`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3bacf2332072a4128ef9c20946339cc6.png"
        />
        <span className={`${styles['font']} ${styles['text']}`}>Verify your email address</span>
      </div>
      <div className={`${styles['group_2']}`}>
        <span className={`${styles['font_2']}`}>
          We sent you a 4 digit code to verify <br />
        </span>
        <span className={`${styles['font_2']}`}>your email address </span>
        <span className={`${styles['font_2']} ${styles['text_2']}`}>(desx@gmail.com). </span>
        <span className={`${styles['font_2']}`}> Enter in the field below.</span>
      </div>
      <div className={`flex-row justify-center ${styles['group_3']}`}>
        <div className={`${styles['section']}`}></div>
        <div className={`ml-10 ${styles['section']}`}></div>
        <div className={`ml-10 ${styles['section']}`}></div>
        <div className={`ml-10 ${styles['section']}`}></div>
      </div>
      <div className={`flex-col items-center ${styles['group_4']}`}>
        <div className={`${styles['group_5']}`}>
          <span className={`${styles['font_3']} ${styles['text_3']}`}>Didn’t get the code? </span>
          <span className={`${styles['text_4']}`}>Resend</span>
        </div>
        <div className={`${styles['group_6']} ${styles['mt-15']}`}>
          <span className={`${styles['font_3']} ${styles['text_5']}`}>Expires in </span>
          <span className={`${styles['font_3']} ${styles['text_6']}`}>01:00</span>
        </div>
      </div>
      <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
        <span className={`${styles['font']} ${styles['text_7']}`}>Submit</span>
      </div>
    </div>
  );
}

VERIFY_EMAIL_ADDRESS_5_3359.defaultProps = { className: '' };