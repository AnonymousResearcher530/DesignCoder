import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Childrens_23_12534(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row self-stretch relative ${styles['group']}`}>
        <div className={`flex-row justify-center ${styles['group_2']} ${styles['pos']}`}>
          <div className={`self-start ${styles['section']}`}></div>
          <div className={`flex-col justify-start items-end ${styles['image-wrapper']}`}>
            <img
              className={`shrink-0 ${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b0a5c9f86382b7d81fe9ead82e42ac37.png"
            />
          </div>
          <img
            className={`${styles['image_2']} ${styles['pos_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=05951a48c48439ee99026107ff065ea0.png"
          />
        </div>
        <div className={`${styles['section_2']} ${styles['pos_3']}`}></div>
        <img
          className={`${styles['image_3']} ${styles['pos_4']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fea71629328fd455e3c862bdee1786fe.png"
        />
        <div className={`flex-col justify-start items-center ${styles['image-wrapper_3']} ${styles['pos_6']}`}>
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=619d0e27658c882682006f2a9e49784d.png"
          />
        </div>
        <div className={`flex-col justify-start items-end ${styles['image-wrapper_2']} ${styles['pos_5']}`}>
          <img
            className={`${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=68a9cf1c71381b3b5413a80df7090ba0.png"
          />
        </div>
      </div>
      <div className={`flex-col justify-start self-start ${styles['group_1']}`}>
        <div className={`flex-col justify-start ${styles['group_3']}`}>
          <span className={`${styles['text']}`}>
            True masters in their fields,
            <br />
            ready to teach you
          </span>
        </div>
      </div>
      <div className={`flex-col justify-start items-end self-start ${styles['text-wrapper']}`}>
        <span className={`${styles['text_2']}`}>Meet experts</span>
      </div>
      <div className={`flex-row justify-around items-center self-stretch ${styles['section_3']}`}>
        <div className={`flex-row items-center ${styles['section_4']}`}>
          <img
            className={`shrink-0 ${styles['image_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7311326ae3f8a81e93740722c37d1ec0.png"
          />
          <span className={`${styles['text_3']} ml-8`}>Home</span>
        </div>
        <img
          className={`${styles['image_7']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2cb52b8a357bd915215b4398dc3174c1.png"
        />
        <img
          className={`${styles['image_8']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7dcf25c39152cfc6302d8edf9c30150c.png"
        />
        <img
          className={`${styles['image_9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d04b761db2972e20d5463779db441ba8.png"
        />
      </div>
    </div>
  );
}

Childrens_23_12534.defaultProps = { className: '' };