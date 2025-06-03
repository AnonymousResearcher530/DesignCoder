import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function IPhone_13_Pro_Max_3_127_495(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row items-center self-stretch ${styles['section']}`}>
        <span className={`${styles['text']}`}>Verbal skills</span>
        <img
          className={`shrink-0 ${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=59d445740051127116d9f95c8ed37fa9.png"
        />
        <span className={`${styles['font']} ${styles['text_2']}`}>3</span>
        <img
          className={`shrink-0 ${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=059a18294b6a83eedac9da710aaebcaa.png"
        />
        <span className={`${styles['font']} ${styles['text_3']}`}>213</span>
      </div>
      <div className={`flex-col justify-start items-center self-stretch relative ${styles['group']}`}>
        <div className={`flex-col ${styles['section_2']}`}>
          <span className={`self-center ${styles['font_2']} ${styles['text_4']}`}>Unit 1</span>
          <div className={`flex-row items-end self-stretch mt-8`}>
            <div className={`flex-col justify-start shrink-0 relative ${styles['group_2']}`}>
              <img
                className={`${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3115af85bfa976e7db01595edbaf4557.png"
              />
              <img
                className={`${styles['image_4']} ${styles['pos_2']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=231fa8b5f889fc78669b0ad2899a87c3.png"
              />
            </div>
            <span className={`${styles['font_3']} ${styles['text_5']} ml-16`}>3/40</span>
          </div>
        </div>
        <img
          className={`${styles['image_3']} ${styles['pos']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=dda92d4cb50c47da7ac378700a41ace2.png"
        />
      </div>
      <div className={`flex-col self-center ${styles['group_3']}`}>
        <div className={`flex-col self-center ${styles['section_3']}`}>
          <span className={`self-center ${styles['font_2']} ${styles['text_6']}`}>Intro</span>
          <img
            className={`shrink-0 self-start ${styles['image_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=678c4f0dc77a6687ba4fa18d15d2a154.png"
          />
          <span className={`self-end ${styles['font_3']} ${styles['text_1']}`}>1</span>
        </div>
        <div className={`flex-row ${styles['equal-division']}`}>
          <div className={`flex-col ${styles['group_4']} ${styles['equal-division-item']}`}>
            <div className={`flex-row justify-center self-stretch ${styles['section_1']}`}>
              <img
                className={`self-center ${styles['image_7']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=04df98bbb0ca7fbc2b3362411397aeee.png"
              />
              <span className={`self-start ${styles['font_3']} ${styles['text_7']} ml-10`}>1</span>
            </div>
            <span className={`self-center ${styles['font_2']} ${styles['mt-13']}`}>Phrases</span>
          </div>
          <div className={`flex-col ${styles['group_4']} ${styles['equal-division-item']}`}>
            <div className={`flex-row justify-center self-stretch ${styles['section_4']}`}>
              <img
                className={`self-center ${styles['image_7']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0433b5495d356f462da4e93a2c602357.png"
              />
              <span className={`self-start ${styles['font_3']} ${styles['text_7']} ml-10`}>1</span>
            </div>
            <span className={`self-center ${styles['font_2']} ${styles['mt-13']}`}>Travel</span>
          </div>
        </div>
        <div className={`flex-col justify-start items-center self-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_8']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d8d6e3ffeaa0149a4dc751529a42df3b.png"
          />
        </div>
        <div className={`flex-row ${styles['equal-division_2']}`}>
          <div
            className={`flex-col justify-start items-center ${styles['image-wrapper_2']} ${styles['equal-division-item_2']}`}
          >
            <img
              className={`${styles['image_8']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d8d6e3ffeaa0149a4dc751529a42df3b.png"
            />
          </div>
          <div
            className={`flex-col justify-start items-center ${styles['image-wrapper_2']} ${styles['equal-division-item_2']} ml-16`}
          >
            <img
              className={`${styles['image_8']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d8d6e3ffeaa0149a4dc751529a42df3b.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

IPhone_13_Pro_Max_3_127_495.defaultProps = { className: '' };