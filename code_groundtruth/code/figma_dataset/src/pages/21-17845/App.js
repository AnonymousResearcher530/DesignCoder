import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Page_15_A_Payment_Method_21_17845(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start ${styles['section']}`}>
        <div className={`flex-row justify-center items-center relative ${styles['section_2']}`}>
          <img
            className={`${styles['image']} ${styles['pos']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=248d2b7bedb9b973e424151c0f038940.png"
          />
          <span className={`${styles['text']}`}>Payment Method</span>
        </div>
      </div>
      <div className={`flex-col ${styles['group']} mt-36`}>
        <div className={`flex-col`}>
          <span className={`self-start ${styles['text_2']} ${styles['text_3']}`}>credit & debit card</span>
          <div className={`flex-row justify-between items-center self-stretch ${styles['section_3']} mt-24`}>
            <div className={`flex-row items-center`}>
              <img
                className={`shrink-0 ${styles['image_2']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=97961ba1a688680d0bc1fe596aaaa782.png"
              />
              <span className={`${styles['font']} ${styles['text_4']} ${styles['text_5']} ${styles['ml-11']}`}>
                add new card
              </span>
            </div>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=87ddc38825908364aaa38d08a7d0c91b.png"
            />
          </div>
        </div>
        <div className={`flex-col ${styles['mt-41']}`}>
          <span className={`self-start ${styles['font']} ${styles['text_2']} ${styles['text_6']}`}>
            more payment option
          </span>
          <div className={`flex-col self-stretch ${styles['mt-19']}`}>
            {data.items.map((item, index) => (
              <div
                className={`flex-row justify-between ${styles['section_4']} ${styles['list-item']} mt-8`}
                key={index}
              >
                <div className={`flex-row items-center self-center`}>
                  <img
                    className={`shrink-0 ${styles['image_4']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=57ecbb984ff65417571e343eaad831f0.png"
                  />
                  <span className={`${styles['font']} ${styles['text_4']} ${styles['ml-13']}`}>apple play</span>
                </div>
                <img
                  className={`self-start ${styles['image_3']} ${styles['image_5']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2adad5f9156c7be2c3a4d929c10ec9c6.png"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Page_15_A_Payment_Method_21_17845.defaultProps = { className: '' };