import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Product_Detail_5_8390(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col ${styles['section']}`}>
        <div className={`flex-row justify-between`}>
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d9afc63079c19b72621c2c6ba5aa6a8b.png"
          />
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=48a89bf9fc2962000abcedf291fb033b.png"
          />
        </div>
        <div className={`flex-col justify-start items-center relative ${styles['group']} mt-28`}>
          <img
            className={`${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=519008decc91d7a935b7313bd9f4409a.png"
          />
          <img
            className={`${styles['image_5']} ${styles['pos_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d7d56c3f5d8a59e7aa29f9c6a24b5995.png"
          />
          <img
            className={`${styles['image_3']} ${styles['pos']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1db54d0be9d8493a040dd3d11fc074e3.png"
          />
        </div>
      </div>
      <div className={`flex-col justify-start items-center ${styles['text-wrapper_3']}`}>
        <span className={`${styles['font_3']} ${styles['text_7']}`}>Add To Basket</span>
      </div>
      <div className={`flex-col relative ${styles['group_2']}`}>
        <div className={`flex-col justify-start`}>
          <div className={`flex-row relative ${styles['group_3']}`}>
            <span className={`${styles['font_2']} ${styles['text_2']} ${styles['pos_5']}`}>1kg, Price</span>
            <span className={`${styles['font']} ${styles['text']} ${styles['pos_3']}`}>Naturel Red Apple</span>
            <img
              className={`${styles['image_6']} ${styles['pos_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=205dff1490c44165c0f08bcf807e1d7b.png"
            />
          </div>
        </div>
        <div className={`flex-row justify-between items-center ${styles['mt-31']}`}>
          <div className={`flex-row items-center`}>
            <img
              className={`${styles['image_8']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5faaf6ca9a53f3021817359b04d2a68b.png"
            />
            <div className={`flex-col justify-start items-center ${styles['text-wrapper']} ${styles['ml-19']}`}>
              <span className={`${styles['font_3']} ${styles['text_3']}`}>1</span>
            </div>
            <img
              className={`${styles['image_7']} ${styles['ml-19']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e55bd8d2b5d8d0dfeac19b4f8d8b8274.png"
            />
          </div>
          <span className={`${styles['font']}`}>$4.99</span>
        </div>
        <div className={`flex-col ${styles['mt-31']}`}>
          <div className={`flex-col ${styles['group_4']}`}>
            <div className={`flex-row justify-between items-center ${styles['group_5']}`}>
              <span className={`${styles['font_2']} ${styles['text_4']}`}>Product Detail</span>
              <img
                className={`${styles['image_9']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7c4aaee8410ff6b2497ec7b692c28e16.png"
              />
            </div>
            <span className={`${styles['text_5']} ${styles['mt-15']}`}>
              Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a
              healtful and varied diet.
            </span>
          </div>
          <div className={`flex-row justify-between items-center ${styles['group_6']}`}>
            <span className={`${styles['font_2']}`}>Nutritions</span>
            <div className={`flex-row items-center`}>
              <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']}`}>
                <span className={`${styles['text_6']}`}>100gr</span>
              </div>
              <img
                className={`${styles['image_10']} ml-20`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ec03ce6fb27e058de2f07e1f563cccdd.png"
              />
            </div>
          </div>
          <div className={`flex-row justify-between items-center ${styles['group_7']}`}>
            <span className={`${styles['font_2']}`}>Review</span>
            <div className={`flex-row`}>
              <img
                className={`${styles['image_11']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=652b2dfe99f65d79040ade2a45377359.png"
              />
              <img
                className={`${styles['image_10']} ml-20`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f68faf2d93491cdd961a27b160ec25fa.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Product_Detail_5_8390.defaultProps = { className: '' };