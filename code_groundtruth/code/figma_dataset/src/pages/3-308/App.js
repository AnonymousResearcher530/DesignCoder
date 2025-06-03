import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Create_Team_3_308(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-center items-center self-stretch relative ${styles['group']}`}>
        <img
          className={`${styles['image']} ${styles['pos']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2a5f8c4d52d698a8551d82037a6f21eb.png"
        />
        <span className={`${styles['font']} ${styles['text']}`}>Create Team</span>
      </div>
      <div className={`flex-col justify-start items-center self-stretch relative ${styles['group_2']}`}>
        <img
          className={`${styles['image_3']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=26de80b829ae7c9b1b722911ba9de9f2.png"
        />
        <img
          className={`${styles['image_2']} ${styles['pos_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=757653f0c5442450d93f9af0da6a5800.png"
        />
      </div>
      <div className={`flex-col self-stretch ${styles['group_3']}`}>
        <span className={`self-center ${styles['font']}`}>Upload logo file</span>
        <div className={`flex-row items-center self-stretch ${styles['mt-9']}`}>
          <span className={`${styles['font_2']}`}>Your</span>
          <span className={`${styles['font_2']} ${styles['ml-7']}`}>logo will publish always</span>
        </div>
      </div>
      <div className={`flex-col self-stretch ${styles['group_4']}`}>
        <span className={`self-start ${styles['font_3']} ${styles['text_2']}`}>Team Name</span>
        <div className={`flex-col justify-start items-start self-stretch ${styles['text-wrapper']} ${styles['mt-17']}`}>
          <span className={`${styles['font']} ${styles['text_3']}`}>Team Align</span>
        </div>
      </div>
      <div className={`flex-col self-stretch ${styles['group_5']}`}>
        <span className={`self-start ${styles['font_3']} ${styles['text_4']}`}>Team Member</span>
        <div className={`flex-row self-stretch ${styles['group_6']}`}>
          <img
            className={`${styles['image_4']} ${styles['image_1']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fedb51d27d8bf957ec9192316b0e4919.png"
          />
          <img
            className={`${styles['image_4']} ${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6a59d3805791a1bcebd5222480ff89f9.png"
          />
          <img
            className={`${styles['image_4']} ${styles['image_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c1963e88b046b3c5213f216055bf4176.png"
          />
          <img
            className={`${styles['image_4']} ${styles['image_8']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7451dc94cfa558e0a531915362ff7577.png"
          />
          <img
            className={`${styles['image_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0eb05d73c6b2cdca50365bf64f16af14.png"
          />
        </div>
        <div className={`flex-row items-center self-stretch ${styles['group_8']}`}>
          <span className={`${styles['font_4']}`}>Jeny</span>
          <span className={`${styles['font_3']} ${styles['ml-11']}`}>mehrin</span>
          <span className={`${styles['font_3']} ${styles['ml-11']}`}>Avishek</span>
          <span className={`${styles['font_3']} ${styles['text_5']} ${styles['ml-11']}`}>Jafor</span>
        </div>
      </div>
      <div className={`flex-col self-stretch ${styles['group_9']}`}>
        <span className={`self-start ${styles['font_4']} ${styles['text_6']}`}>Type</span>
        <div className={`flex-row justify-center self-stretch mt-14`}>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']}`}>
            <span className={`${styles['font_3']} ${styles['text_7']}`}>Private</span>
          </div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_3']} ml-14`}>
            <span className={`${styles['font_3']} ${styles['text_8']}`}>Public</span>
          </div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_4']} ml-14`}>
            <span className={`${styles['font_3']} ${styles['text_9']}`}>Secret</span>
          </div>
        </div>
      </div>
      <div className={`flex-col justify-start items-center self-center ${styles['text-wrapper_5']}`}>
        <span className={`${styles['text_10']}`}>Create Team</span>
      </div>
    </div>
  );
}

Create_Team_3_308.defaultProps = { className: '' };