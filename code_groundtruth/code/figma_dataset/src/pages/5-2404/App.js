import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Home_screen_5_2404(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col ${styles['section']}`}>
        <div className={`flex-row justify-between items-center`}>
          <div className={`flex-row items-center`}>
            <img
              className={`${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0c21e844309e913951a7a3e46c927b66.png"
            />
            <img
              className={`${styles['image_2']} ${styles['ml-9']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a57e77458be864aa57e8c92cac20d0a0.png"
            />
            <img
              className={`${styles['image_5']} ${styles['ml-9']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c038ad2cb531d11c170f3628df2dd3d8.png"
            />
          </div>
          <div className={`flex-row ${styles['group']}`}>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a27ac78df1fbbfc23fd83ea3a0ac0932.png"
            />
            <img
              className={`${styles['image_4']} ${styles['ml-17']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4de24749a8e667b08f6392c84261ed51.png"
            />
          </div>
        </div>
        <div className={`flex-row mt-22`}>
          <div className={`flex-row justify-between items-center flex-1 relative ${styles['section_2']}`}>
            <span className={`${styles['text']}`}>Search Courses </span>
            <img
              className={`${styles['image_7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=98ce063cef62b26c2baf1e158affdc71.png"
            />
          </div>
          <img
            className={`shrink-0 ${styles['image_6']} ml-10`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d74dac242fd29f9c8e31af02e8fb83a3.png"
          />
        </div>
      </div>
      <div className={`flex-col ${styles['group_3']}`}>
        <span className={`self-center ${styles['font']} ${styles['text_2']}`}>Course</span>
        <div className={`self-stretch ${styles['grid']} ${styles['mt-37']}`}>
          <div className={`flex-col justify-start items-start relative ${styles['grid-item']}`}>
            <span className={`${styles['font_2']} ${styles['text_3']}`}>Learn to Code</span>
            <div className={`flex-col justify-start items-start ${styles['section_3']} ${styles['pos']}`}>
              <div className={`flex-col justify-start items-center ${styles['text-wrapper_1']} ${styles['view']}`}>
                <span className={`${styles['font_3']}`}>Enroll Now</span>
              </div>
            </div>
          </div>
          <div className={`flex-col justify-start ${styles['grid-item_2']}`}>
            <div className={`flex-col items-start ${styles['section_4']}`}>
              <span className={`${styles['font_2']} ${styles['text_16']}`}>Learn to Code</span>
              <div className={`flex-col justify-start items-center ${styles['text-wrapper_1']} ${styles['group_10']}`}>
                <span className={`${styles['font_3']}`}>Enroll Now</span>
              </div>
            </div>
          </div>
          <div className={`flex-col justify-start ${styles['grid-item_3']}`}>
            <div className={`flex-col items-start ${styles['section_4']}`}>
              <span className={`${styles['font_2']} ${styles['text_16']}`}>Learn to Code</span>
              <div className={`flex-col justify-start items-center ${styles['text-wrapper_1']} ${styles['group_10']}`}>
                <span className={`${styles['font_3']}`}>Enroll Now</span>
              </div>
            </div>
          </div>
          <div className={`flex-col items-start ${styles['grid-item_4']}`}>
            <span className={`${styles['font_2']} ${styles['text_4']}`}>Learn to Code</span>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_1']} ${styles['group_10']}`}>
              <span className={`${styles['font_3']}`}>Enroll Now</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['group_4']}`}>
        <span className={`self-center ${styles['font']} ${styles['text_5']}`}>My Courses</span>
        <div className={`flex-col self-stretch ${styles['mt-31']}`}>
          <div className={`flex-row`}>
            <img
              className={`shrink-0 ${styles['image_8']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0ab9773e1c02214459ad079d614ad9e9.png"
            />
            <div className={`flex-col flex-1 ${styles['group_5']} ml-10`}>
              <span className={`self-start ${styles['font_2']} ${styles['text_6']}`}>Network Administration</span>
              <span className={`self-start ${styles['font_4']} ${styles['text_7']}`}>
                Configuring and Securing Networks
              </span>
              <div className={`flex-col self-stretch`}>
                <div
                  className={`flex-col justify-start items-start relative ${styles['section_5']} ${styles['view_2']}`}
                >
                  <div className={`${styles['section_6']}`}></div>
                </div>
                <div className={`flex-row justify-between items-center ${styles['group_10']}`}>
                  <span className={`${styles['font_5']} ${styles['text_8']}`}>Complete</span>
                  <span className={`${styles['font_6']} ${styles['text_9']}`}>50%</span>
                </div>
              </div>
              <div className={`flex-col justify-start items-center self-start ${styles['text-wrapper']}`}>
                <span className={`${styles['font_3']} ${styles['text_14']}`}>Continue</span>
              </div>
            </div>
          </div>
          <div className={`flex-row mt-20`}>
            <img
              className={`shrink-0 ${styles['image_8']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b446969d44d2c564aff28076a8546d1c.png"
            />
            <div className={`flex-col flex-1 ${styles['group_8']} ml-10`}>
              <span className={`self-start ${styles['text_11']}`}>Mobile App Development</span>
              <span className={`self-stretch ${styles['font_4']} ${styles['text_1']}`}>
                Building iOS Apps and Android Apps
              </span>
              <div className={`flex-col self-stretch`}>
                <div
                  className={`flex-col justify-start items-start relative ${styles['section_5']} ${styles['view_3']}`}
                >
                  <div className={`${styles['section_6']}`}></div>
                </div>
                <div className={`flex-row justify-between items-center ${styles['group_10']}`}>
                  <span className={`${styles['font_5']} ${styles['text_12']}`}>Complete</span>
                  <span className={`${styles['font_6']} ${styles['text_13']}`}>50%</span>
                </div>
              </div>
              <div className={`flex-col justify-start items-center self-start ${styles['text-wrapper']}`}>
                <span className={`${styles['font_3']} ${styles['text_14']}`}>Continue</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Home_screen_5_2404.defaultProps = { className: '' };