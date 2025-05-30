import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Home_3_127_11580(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col`}>
        <div className={`flex-col`}>
          <div className={`flex-row justify-between items-center ${styles['group']}`}>
            <div className={`flex-col items-start`}>
              <span className={`${styles['font']} ${styles['text']}`}>Hello,</span>
              <span className={`mt-10 ${styles['text_2']}`}>Hi James</span>
            </div>
            <img
              className={`${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a92fd22648df2e312cf87171be2564a9.png"
            />
          </div>
          <div className={`mt-16 flex-col`}>
            <div className={`flex-col ${styles['group']}`}>
              <div className={`flex-col ${styles['section']}`}>
                <div className={`flex-row items-center ${styles['group_2']}`}>
                  <img
                    className={`${styles['image_2']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4c782b5118c8841527561493c094025a.png"
                  />
                  <div className={`flex-col items-start flex-1 ${styles['ml-13']}`}>
                    <span className={`${styles['font_2']} ${styles['text_3']}`}>Dr. Imran Syahir</span>
                    <span className={`mt-12 ${styles['font_3']} ${styles['text_4']}`}>General Doctor</span>
                  </div>
                </div>
                <div className={`flex-row justify-between items-center ${styles['group_3']}`}>
                  <div className={`flex-row items-center`}>
                    <img
                      className={`shrink-0 ${styles['image_3']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=20fad067ca4f643d18670dbc9f1c7662.png"
                    />
                    <span className={`ml-8 ${styles['font_4']} ${styles['text_5']}`}>Sunday, 12 June</span>
                  </div>
                  <span className={`${styles['text_6']}`}>11:00 - 12:00 AM</span>
                </div>
              </div>
              <div className={`mt-20 flex-col justify-start items-center ${styles['text-wrapper']}`}>
                <span className={`${styles['font_3']}`}>Search doctor or health issue</span>
              </div>
            </div>
            <div className={`flex-row ${styles['equal-division']} ${styles['mt-17']}`}>
              <div className={`flex-col items-center ${styles['group_4']} ${styles['equal-division-item']}`}>
                <img
                  className={`${styles['image_4']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=de135c49fe951f466f1239fd6ed7cf18.png"
                />
                <span className={`mt-14 ${styles['font_3']}`}>Covid 19</span>
              </div>
              <div className={`flex-col items-center ${styles['group_4']} ${styles['equal-division-item']}`}>
                <img
                  className={`${styles['image_4']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=40545a85d6ddfe02f97ff962b0a992e7.png"
                />
                <span className={`${styles['font_3']} ${styles['mt-15']}`}>Doctor</span>
              </div>
              <div className={`flex-col items-center ${styles['group_4']} ${styles['equal-division-item']}`}>
                <img
                  className={`${styles['image_4']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e664661894a1ecfda11af09d9e9796ca.png"
                />
                <span className={`mt-14 ${styles['font_3']}`}>Medicine</span>
              </div>
              <div className={`flex-col items-center ${styles['group_4']} ${styles['equal-division-item']}`}>
                <img
                  className={`${styles['image_4']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=10aabcb5b940478e656be5bc574f9d69.png"
                />
                <span className={`mt-14 ${styles['font_3']}`}>Hospital</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex-col ${styles['group']} ${styles['mt-35']}`}>
          <span className={`self-start ${styles['font_3']} ${styles['text_7']}`}>Near Doctor</span>
          <div className={`flex-col self-stretch ${styles['section_2']} ${styles['mt-19']}`}>
            <div className={`flex-row items-center ${styles['group_5']}`}>
              <div className={`flex-row flex-1`}>
                <img
                  className={`shrink-0 ${styles['image_2']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7be567837415f791f226b7d1eb4c1cd6.png"
                />
                <div className={`flex-col items-start flex-1 ${styles['group_6']} ${styles['ml-11']}`}>
                  <span className={`${styles['font_2']} ${styles['text_8']}`}>Dr. Joseph Brostito</span>
                  <span className={`${styles['font']} ${styles['text_10']} ${styles['mt-11']}`}>Dental Specialist</span>
                </div>
              </div>
              <span className={`ml-20 ${styles['font_3']} ${styles['text_9']}`}>1.2 KM</span>
            </div>
            <div className={`flex-row justify-between items-center ${styles['group_7']}`}>
              <span className={`${styles['font_4']} ${styles['text_11']}`}>4,8 (120 Reviews)</span>
              <span className={`${styles['font_4']} ${styles['text_12']}`}>Open at 17.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-row justify-between items-center ${styles['section_3']} ${styles['mt-25']}`}>
        <div className={`flex-row items-center`}>
          <div className={`flex-row justify-evenly items-center ${styles['section_4']}`}>
            <img
              className={`${styles['image_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d22f9ece5d4189e804d576c9357aaa61.png"
            />
            <span className={`${styles['text_13']}`}>Home</span>
          </div>
          <img
            className={`${styles['image_5']} ${styles['ml-33']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f0807256e1344d1eeff7d6d4f14c1d69.png"
          />
        </div>
        <img
          className={`${styles['image_5']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=33570039460ca41bda9cdf14b8dedf05.png"
        />
        <img
          className={`${styles['image_5']} ${styles['image_6']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=31c8d2b5483ee31ebca8082c8f5915c5.png"
        />
      </div>
    </div>
  );
}

Home_3_127_11580.defaultProps = { className: '' };