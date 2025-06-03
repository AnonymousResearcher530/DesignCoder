import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Homescreen_5_2253(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row ${styles['section']}`}>
        <img
          className={`shrink-0 self-start ${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9056b273f13b389f093edeed412f7303.png"
        />
        <img
          className={`flex-1 ${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=085e82b38eb5ff578e60dfc95cea4102.png"
        />
      </div>
      <div className={`flex-col relative ${styles['section_2']}`}>
        <div className={`flex-col self-stretch`}>
          <span className={`self-start ${styles['font']} ${styles['text']}`}>Subjects</span>
          <span className={`self-start ${styles['font_2']} ${styles['text_2']}`}>Recommendations for you</span>
          <div className={`flex-col justify-start items-start self-stretch relative ${styles['group_4']}`}>
            <div className={`flex-row`}>
              <div className={`flex-col ${styles['equal-division-item']}`}>
                <div className={`flex-row self-stretch relative ${styles['group_3']}`}>
                  <img
                    className={`self-start ${styles['image_5']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ed20d9073c2624f4b193cc0e65310240.png"
                  />
                  <div className={`flex-col justify-start items-start ${styles['image-wrapper_2']} ml-34`}>
                    <img
                      className={`${styles['image_6']} ${styles['image_7']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a705b3d3783c5abe1bca28466c7dafc5.png"
                    />
                  </div>
                </div>
                <span className={`self-start ${styles['font_3']} ${styles['text_3']} ${styles['mt-25']}`}>
                  Mathematics
                </span>
              </div>
              <div className={`flex-col ${styles['equal-division-item_2']} ml-88`}>
                <div className={`flex-row self-stretch relative ${styles['group_2']}`}>
                  <img
                    className={`self-start ${styles['image_3']} ${styles['image_4']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=596f495f6423fc175a23d19ff89f68a8.png"
                  />
                  <div className={`flex-col justify-start items-start ${styles['image-wrapper']} ${styles['ml-11']}`}>
                    <img
                      className={`${styles['image_6']} ${styles['image_8']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a705b3d3783c5abe1bca28466c7dafc5.png"
                    />
                  </div>
                </div>
                <span className={`self-start ${styles['font_3']} ${styles['text_4']} mt-28`}>Geography</span>
              </div>
            </div>
            <div className={`${styles['section_3']} ${styles['pos']}`}></div>
          </div>
        </div>
        <div className={`flex-col self-start ${styles['group_6']} mt-36`}>
          <span className={`self-start ${styles['font']} ${styles['text_5']}`}>Your Schedule</span>
          <span className={`self-start ${styles['font_2']} ${styles['text_6']}`}>Next lessons</span>
          <div className={`flex-col self-stretch ${styles['section_4']}`}>
            <div className={`flex-row self-stretch relative ${styles['group_5']}`}>
              <div className={`flex-col items-start self-start ${styles['group_7']}`}>
                <span className={`${styles['font_3']}`}>Biology</span>
                <span className={`${styles['font_4']} ${styles['text_7']} mt-10`}>Chapter 3: Animal Kingdom</span>
              </div>
              <div className={`flex-col justify-start items-start ${styles['image-wrapper_3']} ml-30`}>
                <img
                  className={`${styles['image_3']} ${styles['image_9']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=abfa012a1c36d83563b539235815c412.png"
                />
              </div>
            </div>
            <div className={`flex-row items-center self-start ${styles['mt-9']}`}>
              <img
                className={`shrink-0 ${styles['image_10']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4068332683e6fe4f81d5934accf4ac50.png"
              />
              <span className={`${styles['font_4']} ${styles['text_8']} ${styles['ml-11']}`}>Room 2-168</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-row justify-between ${styles['group_8']}`}>
        <img
          className={`${styles['image_11']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e5c455131713da515305801bc966bc34.png"
        />
        <div className={`flex-row ${styles['equal-division']}`}>
          <img
            className={`${styles['equal-division-item_1']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ee53c9868c42a849f2f727be490a55bb.png"
          />
          <img
            className={`${styles['equal-division-item_3']} ml-74`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=cc9d3b72a4053149193312d3059bd48e.png"
          />
          <img
            className={`${styles['equal-division-item_3']} ml-74`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a9156b30e172dba9a3ef6e8a6b5c54da.png"
          />
        </div>
      </div>
    </div>
  );
}

Homescreen_5_2253.defaultProps = { className: '' };