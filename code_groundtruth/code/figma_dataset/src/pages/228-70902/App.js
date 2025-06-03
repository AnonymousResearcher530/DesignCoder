import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function High_Fidelity_Home_1(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col ${styles['group']}`}>
        <div className={`flex-row justify-between`}>
          <div className={`flex-col`}>
            <span className={`self-start ${styles['font']} ${styles['text']}`}>Current location</span>
            <div className={`mt-14 flex-row items-center self-stretch`}>
              <img
                className={`shrink-0 ${styles['image_2']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3044bcac7c907d0843550f031ebe3553.png"
              />
              <span className={`ml-8 ${styles['text_2']}`}>Wallace, Australia</span>
            </div>
          </div>
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ffd94dab9fcb7edf13bf55508509224b.png"
          />
        </div>
        <div className={`mt-32 flex-row`}>
          <div className={`flex-row items-center ${styles['section']}`}>
            <img
              className={`shrink-0 ${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7b72619de70803bef9a77931a091c6b9.png"
            />
            <span className={`${styles['font_2']} ${styles['text_3']} ${styles['ml-7']}`}>Hotel</span>
          </div>
          <div className={`ml-16 flex-row items-center ${styles['section_2']}`}>
            <img
              className={`shrink-0 ${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1062fdc6a1c7e062f2a2af1906beb6ff.png"
            />
            <span className={`${styles['font_3']} ${styles['text_4']} ${styles['ml-7']}`}>Homestay</span>
          </div>
          <div className={`ml-16 flex-row items-center ${styles['section_2']}`}>
            <img
              className={`shrink-0 ${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3deac31d5eff57db3e85a1a8b7d3f876.png"
            />
            <span className={`${styles['font_3']} ${styles['text_4']} ${styles['ml-7']}`}>Apart</span>
          </div>
        </div>
        <div className={`mt-32 flex-col ${styles['group_2']}`}>
          <div className={`flex-row justify-between items-baseline`}>
            <span className={`${styles['font_4']} ${styles['text_5']}`}>Near Location</span>
            <span className={`${styles['font_5']} ${styles['text_6']}`}>See all</span>
          </div>
          <div className={`flex-row ${styles['group_2']} ${styles['view']}`}>
            <div className={`flex-col justify-start items-end shrink-0 ${styles['image-wrapper']}`}>
              <img
                className={`shrink-0 ${styles['image_4']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=14689da691c73734712123f1acf12180.png"
              />
            </div>
            <div className={`ml-16 flex-col justify-start items-start shrink-0 ${styles['image-wrapper_2']}`}>
              <img
                className={`shrink-0 ${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f31930f45186940fe774dde1057c8766.png"
              />
            </div>
          </div>
          <div className={`flex-row ${styles['group_2']}`}>
            <div className={`flex-col shrink-0 ${styles['section_3']}`}>
              <div className={`flex-col self-stretch`}>
                <div className={`flex-row justify-between items-center self-stretch`}>
                  <span className={`${styles['font_2']} ${styles['text_7']}`}>The Aston Vill Hotel</span>
                  <div className={`flex-row items-center`}>
                    <img
                      className={`shrink-0 ${styles['image_2']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b183e3e8a1a22a90172986ab916aa5c8.png"
                    />
                    <span className={`${styles['text_8']} ${styles['ml-9']}`}>5.0</span>
                  </div>
                </div>
                <span className={`self-start ${styles['font']} ${styles['text_9']} ${styles['mt-9']}`}>
                  Alice Springs NT 0870, Australia
                </span>
              </div>
              <div className={`self-start ${styles['group_3']} ${styles['mt-23']}`}>
                <span className={`${styles['font_6']}`}>$200.7</span>
                <span className={`${styles['font']} ${styles['text_11']}`}>/night</span>
              </div>
            </div>
            <div className={`ml-16 flex-col ${styles['section_4']}`}>
              <div className={`flex-col items-start self-stretch`}>
                <span className={`${styles['font_2']}`}>Golden Palace Hotel</span>
                <span className={`${styles['font']} ${styles['text_10']} ${styles['mt-13']}`}>
                  Nothern Territory 0872, Australia
                </span>
              </div>
              <div className={`self-start ${styles['group_4']} ${styles['mt-23']}`}>
                <span className={`${styles['font_6']}`}>$175.9</span>
                <span className={`${styles['font']} ${styles['text_12']}`}>/night</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`mt-32 flex-col ${styles['group_2']}`}>
          <div className={`flex-row justify-between items-center self-stretch ${styles['group_5']}`}>
            <span className={`${styles['font_4']} ${styles['text_13']}`}>Popular Hotel</span>
            <span className={`${styles['font_5']}`}>See all</span>
          </div>
          <div className={`flex-row justify-center self-start ${styles['section_5']}`}>
            <img
              className={`self-center ${styles['image_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7db2b624e8e0c32ece490369f024a1ea.png"
            />
            <div className={`flex-col self-center ${styles['ml-13']}`}>
              <div className={`flex-col items-start self-stretch`}>
                <span className={`${styles['font_2']} ${styles['text_14']}`}>Asteria Hotel</span>
                <span className={`${styles['font']} ${styles['text_15']} ${styles['mt-13']}`}>
                  Wilora NT 0872, Australia
                </span>
              </div>
              <div className={`self-start ${styles['group_6']} ${styles['mt-23']}`}>
                <span className={`${styles['font_6']}`}>$165.3 </span>
                <span className={`${styles['font']} ${styles['text_16']}`}>/night</span>
              </div>
            </div>
            <img
              className={`self-start ${styles['image_6']} ${styles['ml-13']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2cf77aabd31f98c637b04f8f1c945e58.png"
            />
          </div>
        </div>
      </div>
      <div className={`mt-16 flex-row justify-between items-center ${styles['section_6']}`}>
        <div className={`flex-row items-center ${styles['section_7']}`}>
          <img
            className={`shrink-0 ${styles['image_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f3319a1918f113657b13e97b8beca470.png"
          />
          <span className={`ml-6 ${styles['text_17']}`}>Home</span>
        </div>
        <img
          className={`${styles['image_7']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e57405924beab70d61dde388496cabf6.png"
        />
        <img
          className={`${styles['image_7']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=678c11d32dd0f2bec28292b05865343c.png"
        />
        <img
          className={`${styles['image_7']} ${styles['image_8']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=94ae6bae1212c01847d567da6a6b9223.png"
        />
      </div>
    </div>
  );
}

High_Fidelity_Home_1.defaultProps = { className: '' };