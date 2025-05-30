import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Courses_5_2536(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null],
  });

  return (
    <div className={`flex-col relative ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center ${styles['group']}`}>
        <div className={`flex-row items-center`}>
          <img
            className={`shrink-0 ${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=92a2e8d2f5639cd6be8d3176c06b478b.png"
          />
          <span className={`${styles['font']} ${styles['text']} ${styles['ml-11']}`}>Back</span>
        </div>
        <div className={`flex-row ${styles['group_2']}`}>
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c3ca28b6f4934e25e7e5510c67838e63.png"
          />
          <img
            className={`${styles['image_2']} ml-20`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=eeb650f8c563cddd8d5a793306670955.png"
          />
        </div>
      </div>
      <div className={`flex-col ${styles['group_1']}`}>
        <img
          className={`${styles['image_4']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=590b371d474845f415125ed8cce2405f.png"
        />
        <div className={`flex-row justify-between items-center ${styles['group_3']}`}>
          <span className={`${styles['font_2']} ${styles['text_2']}`}>Instructor | Davit Rouben</span>
          <div className={`flex-row items-center`}>
            <img
              className={`shrink-0 ${styles['image_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=47a90a3d8fd00e5ae9d191c397ac2497.png"
            />
            <span className={`${styles['font_2']} ${styles['text_3']} ${styles['ml-3']}`}>Rate</span>
          </div>
        </div>
        <div className={`flex-row justify-between items-baseline ${styles['group_5']}`}>
          <span className={`${styles['text_4']}`}>Learn to Code</span>
          <span className={`${styles['text_5']}`}>2.5 Hours | 38 Modules</span>
        </div>
        <span className={`${styles['font_2']} ${styles['text_6']}`}>
          Are you intrigued by the world of coding but don't know where to start? Our "Learn to Code" course is the
          perfect introduction to the fascinating and empowering world of programming.Designed for absolute beginners,
          this course will demystify coding and provide you with a solid foundation to kickstart your coding journey.
        </span>
      </div>
      <div className={`flex-col ${styles['group_6']}`}>
        <div className={`self-center ${styles['section']}`}></div>
        <div className={`flex-col justify-start self-stretch ${styles['section_2']}`}>
          <div className={`flex-col`}>
            {data.items.map((item, index) => (
              <div
                className={`flex-row justify-between items-center relative ${styles['list-item']} mt-10`}
                key={index}
              >
                <div className={`flex-row items-center`}>
                  <img
                    className={`shrink-0 ${styles['image_6']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=75d93220784a6c7e6eba07d1d7211fa3.png"
                  />
                  <div className={`flex-col shrink-0 ${styles['group_7']} ml-16`}>
                    <span className={`${styles['font_3']}`}>Discover the fundamentals of programming</span>
                    <div className={`flex-row items-center ${styles['group_8']} ${styles['mt-9']}`}>
                      <img
                        className={`${styles['image_8']}`}
                        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6c98d7cc4d1f0fe8d83d48abb2d0a3f3.png"
                      />
                      <span className={`${styles['font_4']} ${styles['ml-5']}`}>16 min</span>
                    </div>
                  </div>
                </div>
                <img
                  className={`${styles['image_7']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1e9911179ca017a66c31cb8caec7a82e.png"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`flex-col justify-start ${styles['pos_1']}`}>
        <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
          <span className={`${styles['font_3']} ${styles['group_7']}`}>Discover the fundamentals of programming</span>
        </div>
        <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']} ${styles['pos']}`}>
          <span className={`${styles['font']} ${styles['text_7']}`}>Enroll Now</span>
        </div>
      </div>
    </div>
  );
}

Courses_5_2536.defaultProps = { className: '' };