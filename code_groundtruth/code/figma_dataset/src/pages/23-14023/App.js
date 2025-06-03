import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function IPhone_13_mini_3_23_14023(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row items-center ${styles['group']}`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7f48a3d03ba6f516ff1d81fa1abd0919.png"
        />
        <span className={`${styles['text']} ${styles['ml-17']}`}>Account</span>
      </div>
      <div className={`flex-col ${styles['group_2']}`}>
        <div className={`flex-row self-stretch ${styles['group_3']}`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=21643804987081773fb55f79cbf32357.png"
          />
          <div className={`flex-col flex-1 ${styles['ml-17']}`}>
            <div className={`flex-col items-start self-stretch ${styles['group_4']}`}>
              <span className={`${styles['font']} ${styles['text_2']}`}>Mr. John Doe</span>
              <img
                className={`shrink-0 ${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d3db733641bdf98a9f089a51a869c790.png"
              />
            </div>
            <span className={`self-start ${styles['font_2']} ${styles['text_3']} ${styles['mt-9']}`}>@Mrjohndoe</span>
          </div>
        </div>
        <span className={`self-center ${styles['font_2']} ${styles['text_4']}`}>Manage your Google Account</span>
        <div className={`flex-row items-center self-stretch ${styles['group_3']} ${styles['view']}`}>
          <img
            className={`${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4d90369cb273d8088114e3c8f9576714.png"
          />
          <span className={`ml-20 ${styles['font']}`}>Your channel</span>
        </div>
        <div className={`flex-row items-center self-stretch ${styles['group_3']} ${styles['view_2']}`}>
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f4ee1744e71f4dcf8127405f0cc63c17.png"
          />
          <span className={`${styles['font']} ${styles['text_5']} ${styles['ml-21']}`}>Switch account</span>
        </div>
      </div>
      <div className={`flex-col ${styles['group_5']}`}>
        <div className={`flex-row items-center`}>
          <img
            className={`${styles['image_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=990c8fec5d64c834771663cd151afdf4.png"
          />
          <span className={`${styles['font']} ${styles['text_6']} ${styles['ml-21']}`}>Get YouTube Premium</span>
        </div>
        <div className={`mt-20 flex-row items-center`}>
          <img
            className={`${styles['image_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8efeb5b2535a97db59591f72d6cb7845.png"
          />
          <span className={`${styles['font_2']} ${styles['text_7']} ${styles['ml-21']}`}>
            Purchases and Memberships
          </span>
        </div>
        <div className={`mt-20 flex-row items-center`}>
          <img
            className={`${styles['image_8']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a4128d3a4834f8c40c79cf2376f384d5.png"
          />
          <span className={`ml-20 ${styles['font']} ${styles['text_8']}`}>Your data in YouTube</span>
        </div>
      </div>
      <div className={`flex-row items-center ${styles['group_6']}`}>
        <img
          className={`${styles['image_9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5e8f75f4371ebf3429c51a8ca634dd69.png"
        />
        <span className={`${styles['font_2']} ${styles['ml-21']}`}>Settings</span>
      </div>
      <div className={`flex-col ${styles['group_6']}`}>
        <div className={`flex-row items-center`}>
          <img
            className={`${styles['image_10']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c6b9a70cecd19bbf26aede55389647bf.png"
          />
          <span className={`ml-22 ${styles['font_2']} ${styles['text_9']}`}>Help</span>
        </div>
        <div className={`mt-20 flex-row items-center`}>
          <img
            className={`${styles['image_11']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c086547d8ed834bde43ada0f1aeee52a.png"
          />
          <span className={`${styles['font']} ${styles['ml-21']}`}>Feedback</span>
        </div>
      </div>
      <div className={`flex-col ${styles['section']}`}>
        <div className={`flex-row items-center ${styles['equal-division']}`}>
          <img
            className={`${styles['equal-division-item']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2c42cc555a0aef2111d5a5880318b2c7.png"
          />
          <img
            className={`${styles['equal-division-item']} ${styles['ml-69']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a7b7aa68c38af25aa8cf58cc10c2b145.png"
          />
          <img
            className={`${styles['equal-division-item']} ${styles['ml-69']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=054cb5dfab7b8700527426298d2d3877.png"
          />
          <img
            className={`${styles['equal-division-item']} ${styles['ml-69']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=cf97944cffce3b81827df6f0af91ac35.png"
          />
        </div>
        <div className={`flex-row justify-between`}>
          <span className={`self-center ${styles['font_3']} ${styles['text_10']}`}>Home</span>
          <span className={`self-start ${styles['font_3']}`}>Shorts</span>
          <span className={`self-center ${styles['font_4']} ${styles['text_11']}`}>Subscriptons</span>
          <span className={`self-center ${styles['font_4']} ${styles['text_12']}`}>Library</span>
        </div>
      </div>
    </div>
  );
}

IPhone_13_mini_3_23_14023.defaultProps = { className: '' };