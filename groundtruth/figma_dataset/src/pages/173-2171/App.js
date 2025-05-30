import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Order_complete_173_2171(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <img
        className={`self-center ${styles['image']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0b1f01c89bf1817c3902b3bd83c6312d.png"
      />
      <div className={`flex-col self-stretch ${styles['group']}`}>
        <span className={`${styles['text']}`}>Congratulations!!!</span>
        <span className={`mt-14 ${styles['text_2']}`}>Your order have been taken and is being attended to</span>
      </div>
      <div className={`flex-col justify-start items-center self-center ${styles['text-wrapper']}`}>
        <span className={`${styles['font']} ${styles['text_3']}`}>Track order</span>
      </div>
      <div className={`flex-col justify-start items-center self-center ${styles['text-wrapper_2']}`}>
        <span className={`${styles['font']} ${styles['text_4']}`}>Continue shopping</span>
      </div>
    </div>
  );
}

Order_complete_173_2171.defaultProps = { className: '' };