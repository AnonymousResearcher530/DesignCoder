import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function SIGN_UP_5_3387(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <img
        className={`self-center ${styles['image']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=40f6aba141d619c17e28110d3c72d10a.png"
      />
      <div className={`flex-col self-stretch ${styles['group']}`}>
        <span className={`self-start ${styles['font']} ${styles['text']}`}>Name</span>
        <div className={`flex-col justify-start items-start self-stretch ${styles['text-wrapper']} ${styles['mt-15']}`}>
          <span className={`${styles['font_2']} ${styles['text_2']}`}>Design Withdesigners</span>
        </div>
      </div>
      <div className={`flex-col self-stretch ${styles['group_2']}`}>
        <span className={`self-start ${styles['font']} ${styles['text_3']}`}>Email Address</span>
        <div className={`flex-col justify-start items-start self-stretch ${styles['section']} ${styles['mt-15']}`}>
          <div className={`flex-row items-center ${styles['group_3']}`}>
            <img
              className={`shrink-0 ${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1b06dffd6189b056ee41b29e94cf0cb9.png"
            />
            <span className={`${styles['font_2']} ${styles['text_4']} ml-8`}>designwithdesigners@gmail.com</span>
          </div>
        </div>
      </div>
      <div className={`flex-col self-stretch ${styles['list-item']}`}>
        <span className={`self-start ${styles['font']} ${styles['text_1']}`}>Password</span>
        <div className={`flex-col justify-start self-stretch ${styles['section_2']} ${styles['mt-15']}`}>
          <div className={`flex-row justify-between items-center ${styles['group_4']} ${styles['view']}`}>
            <span className={`${styles['font_2']}`}>DesignWITHdesigners12345</span>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1010f5a2e7ba87b6290189deaa92be0a.png"
            />
          </div>
        </div>
      </div>
      <div className={`flex-col self-stretch ${styles['list-item_2']}`}>
        <span className={`self-start ${styles['font']} ${styles['text_5']}`}>Confirm Password</span>
        <div className={`flex-col justify-start self-stretch ${styles['section_2']} ${styles['mt-15']}`}>
          <div className={`flex-row justify-between items-center ${styles['group_4']} ${styles['view_2']}`}>
            <span className={`${styles['font_2']}`}>DesignWITHdesigners12345</span>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1010f5a2e7ba87b6290189deaa92be0a.png"
            />
          </div>
        </div>
      </div>
      <div className={`flex-col justify-start items-center self-stretch ${styles['text-wrapper_2']}`}>
        <span className={`${styles['text_6']}`}>SIGN UP</span>
      </div>
      <div className={`self-center ${styles['group_5']}`}>
        <span className={`${styles['font_2']} ${styles['text_7']}`}>Have an account already? </span>
        <span className={`${styles['font_2']} ${styles['text_8']}`}> Log in</span>
      </div>
    </div>
  );
}

SIGN_UP_5_3387.defaultProps = { className: '' };