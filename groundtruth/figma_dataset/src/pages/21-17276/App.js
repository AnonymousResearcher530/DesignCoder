import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Page_08_B_Edit_Profile_21_17276(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start self-stretch ${styles['section']}`}>
        <div className={`flex-col ${styles['section_2']}`}>
          <div className={`flex-row justify-center items-center self-stretch relative ${styles['group']}`}>
            <img
              className={`${styles['image_2']} ${styles['pos_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=248d2b7bedb9b973e424151c0f038940.png"
            />
            <span className={`${styles['text']} ${styles['text_2']}`}>Profile</span>
            <img
              className={`${styles['image']} ${styles['pos']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9fd0a1693f5b55bb29309772f84e1eb1.png"
            />
          </div>
          <div className={`flex-col justify-start items-end self-center ${styles['image-wrapper']} ${styles['mt-21']}`}>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e5cbaf8eaa457f928698af4c9b992754.png"
            />
          </div>
        </div>
      </div>
      <div className={`flex-col self-stretch ${styles['group_2']}`}>
        <div className={`flex-col`}>
          <span className={`self-start ${styles['font']} ${styles['text']} ${styles['text_1']}`}>Full Name</span>
          <div className={`flex-col justify-start items-start self-stretch ${styles['text-wrapper']} mt-14`}>
            <span className={`${styles['font']} ${styles['text']} ${styles['text_3']}`}>Jane Doe</span>
          </div>
        </div>
        <div className={`flex-col ${styles['group_3']}`}>
          <span className={`self-start ${styles['font']} ${styles['text']} ${styles['text_12']}`}>Phone number</span>
          <div className={`flex-col justify-start items-start self-stretch ${styles['text-wrapper_2']} mt-14`}>
            <span className={`${styles['font']} ${styles['text']} ${styles['text_4']}`}>+123 567 89000</span>
          </div>
        </div>
        <div className={`flex-col ${styles['group_3']}`}>
          <span className={`self-start ${styles['font']} ${styles['text']} ${styles['text_13']}`}>email</span>
          <div className={`flex-col justify-start items-start self-stretch ${styles['text-wrapper_3']} mt-14`}>
            <span className={`${styles['font']} ${styles['text_5']}`}>Janedoe@example.com</span>
          </div>
        </div>
        <div className={`flex-col ${styles['group_3']}`}>
          <span className={`self-start ${styles['font']} ${styles['text']} ${styles['text_6']}`}>Date of birth</span>
          <div className={`flex-col justify-start items-start self-stretch ${styles['text-wrapper_4']} mt-14`}>
            <span className={`${styles['font']} ${styles['text']} ${styles['text_7']}`}>DD / MM /YYY</span>
          </div>
        </div>
      </div>
      <div className={`flex-col justify-start items-center self-center ${styles['text-wrapper_5']}`}>
        <span className={`${styles['text_8']}`}>Update Profile</span>
      </div>
    </div>
  );
}

Page_08_B_Edit_Profile_21_17276.defaultProps = { className: '' };