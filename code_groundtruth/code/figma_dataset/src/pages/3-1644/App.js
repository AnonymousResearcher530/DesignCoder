import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Order_info_1_3_1644(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-center items-center relative ${styles['group']}`}>
        <img
          className={`${styles['image']} ${styles['pos']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e435072a57f2a281f0e02750881f8881.png"
        />
        <img
          className={`${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=28e0bc7d8c3528c23c417363685c82ca.png"
        />
      </div>
      <div className={`flex-row justify-between items-center ${styles['section']}`}>
        <div className={`flex-col items-center`}>
          <span className={`${styles['text']}`}>Your order is delivered</span>
          <span className={`${styles['text_2']} mt-18`}>Rate product to get 5 points for collect.</span>
        </div>
        <img
          className={`${styles['image_3']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4d0c44526e5538e2e9fbfb078c0e138c.png"
        />
      </div>
      <div className={`flex-col ${styles['section_2']}`}>
        <div className={`flex-row justify-between`}>
          <span className={`${styles['font']} ${styles['text_3']}`}>Order number</span>
          <span className={`${styles['font_2']} ${styles['text_4']}`}>#1514</span>
        </div>
        <div className={`flex-row justify-between items-center ${styles['mt-23']}`}>
          <span className={`${styles['font']} ${styles['text_5']}`}>Tracking Number</span>
          <span className={`${styles['font_2']} ${styles['text_6']}`}>IK987362341</span>
        </div>
        <div className={`flex-row justify-between ${styles['mt-23']}`}>
          <span className={`${styles['font']} ${styles['text_7']}`}>Delivery address</span>
          <span className={`${styles['font']} ${styles['text_8']}`}>SBI Building, Software Park</span>
        </div>
      </div>
      <div className={`flex-col ${styles['section_3']}`}>
        <div className={`flex-row justify-between items-center`}>
          <span className={`${styles['font_4']} ${styles['text_9']}`}>Maxi Dress</span>
          <div className={`flex-row items-center ${styles['group_8']}`}>
            <span className={`${styles['font_5']} ${styles['text_10']}`}>x1</span>
            <span className={`${styles['font_3']} ${styles['ml-41']}`}>$68.00</span>
          </div>
        </div>
        <div className={`flex-row justify-between items-center ${styles['group_1']}`}>
          <span className={`${styles['font_4']} ${styles['text_11']}`}>Linen Dress</span>
          <div className={`flex-row items-baseline ${styles['group_4']}`}>
            <span className={`${styles['font_5']} ${styles['text_12']}`}>x1</span>
            <span className={`${styles['font_3']} ml-42`}>$52.00</span>
          </div>
        </div>
        <div className={`flex-row justify-between items-center ${styles['group_5']} ${styles['view']}`}>
          <span className={`${styles['font_4']} ${styles['text_13']}`}>Sub Total</span>
          <span className={`${styles['font_6']}`}>120.00</span>
        </div>
        <div className={`flex-row justify-between ${styles['group_5']} ${styles['view_2']}`}>
          <span className={`self-center ${styles['font_4']} ${styles['text_14']}`}>Shipping</span>
          <span className={`self-start ${styles['font_6']}`}>0.00</span>
        </div>
        <div className={`flex-row justify-between ${styles['group_2']}`}>
          <span className={`self-start ${styles['font_4']} ${styles['text_16']}`}>Total</span>
          <span className={`self-center ${styles['font_6']} ${styles['text_15']}`}>$120.00</span>
        </div>
      </div>
      <div className={`flex-row ${styles['group_3']}`}>
        <div className={`flex-col justify-start items-center flex-1 ${styles['text-wrapper']}`}>
          <span className={`${styles['font_6']} ${styles['text_17']}`}>Return home</span>
        </div>
        <div className={`flex-col justify-start items-center shrink-0 ${styles['text-wrapper_2']} ml-20`}>
          <span className={`${styles['font_6']} ${styles['text_18']}`}>Rate</span>
        </div>
      </div>
    </div>
  );
}

Order_info_1_3_1644.defaultProps = { className: '' };