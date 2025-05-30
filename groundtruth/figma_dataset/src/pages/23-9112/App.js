import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Page_3_23_9112(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col relative ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center ${styles['group_1']}`}>
        <img
          className={`${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a6e13cb5f97f1f582102fe38a6b1c9c3.png"
        />
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d823b8824b5bbd09f145a8a1c060807b.png"
        />
      </div>
      <div className={`flex-col justify-start relative ${styles['group']} mt-2`}>
        <div className={`flex-col ${styles['section_3']}`}>
          <span className={`self-center ${styles['text']}`}>Madelyn Dias</span>
          <div className={`flex-row justify-center ${styles['equal-division']} ${styles['section_4']}`}>
            <div className={`flex-col items-center ${styles['group_2']} ${styles['group_8']}`}>
              <img
                className={`${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bc74425536648bf61f3e243986cea185.png"
              />
              <span className={`${styles['font']} ${styles['text_2']} ${styles['mt-9']}`}>POINTS</span>
              <span className={`${styles['font_2']} ${styles['mt-9']}`}>590</span>
            </div>
            <div className={`${styles['section_5']} ${styles['horiz-divider']}`}></div>
            <div className={`flex-col items-center ${styles['equal-division-item_2']} ${styles['group_3']}`}>
              <img
                className={`${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=facdc3073b9deea49b2182974dea341b.png"
              />
              <span className={`${styles['font']} ${styles['text_2']} ${styles['mt-9']}`}>WORLD RANK</span>
              <span className={`${styles['font_2']} ${styles['text_3']} ${styles['mt-9']}`}>#1,438</span>
            </div>
            <div className={`${styles['section_5']} ${styles['horiz-divider']}`}></div>
            <div className={`flex-col items-center ${styles['equal-division-item']}`}>
              <img
                className={`${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1034a4baa49c48d68a178059d4d132fd.png"
              />
              <span className={`${styles['font']} ${styles['text_2']} ${styles['mt-9']}`}>LOCAL RANK</span>
              <span className={`${styles['font_2']} ${styles['text_4']} ${styles['mt-9']}`}>#56</span>
            </div>
          </div>
          <div className={`flex-col self-stretch ${styles['group_4']}`}>
            <div className={`flex-row justify-between items-center self-stretch ${styles['group_5']}`}>
              <div className={`flex-col justify-start`}>
                <span className={`${styles['text_5']}`}>Badge</span>
              </div>
              <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
                <span className={`${styles['font_3']} ${styles['text_6']}`}>Stats</span>
              </div>
              <div className={`flex-col justify-start`}>
                <span className={`${styles['font_3']}`}>Details</span>
              </div>
            </div>
            <div className={`self-start ${styles['section_6']}`}></div>
            <div className={`self-stretch ${styles['grid']}`}>
              <div className={`flex-col justify-start items-center ${styles['grid-item']}`}>
                <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
                  <img
                    className={`${styles['image_6']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d1f9139f464d3359260c01bc2ec9a170.png"
                  />
                </div>
              </div>
              <div className={`flex-col justify-start items-center ${styles['grid-item_2']}`}>
                <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']}`}>
                  <img
                    className={`${styles['image_5']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=eaafafcb54d7266f860588b6984cd46d.png"
                  />
                </div>
              </div>
              <div className={`flex-col justify-start items-center ${styles['grid-item_3']}`}>
                <div className={`flex-col justify-start items-center ${styles['image-wrapper_3']}`}>
                  <img
                    className={`${styles['image_6']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=18e43621054c979aa9f46b68de7dae78.png"
                  />
                </div>
              </div>
              <div className={`flex-col justify-start items-center ${styles['grid-item_4']}`}>
                <div className={`flex-col justify-start items-center ${styles['image-wrapper_4']}`}>
                  <img
                    className={`${styles['image_6']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=22d3a5b9a3ebc91f6275a1ef11832c7b.png"
                  />
                </div>
              </div>
              <div className={`flex-col justify-start items-center ${styles['grid-item_5']}`}>
                <div className={`flex-col justify-start items-center ${styles['image-wrapper_5']}`}>
                  <img
                    className={`${styles['image_9']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ad32ad728d5fa8bb8d53adff34a071d2.png"
                  />
                </div>
              </div>
              <div className={`flex-col justify-start items-center relative ${styles['grid-item_6']}`}>
                <div className={`flex-col justify-start items-center ${styles['image-wrapper_6']}`}>
                  <img
                    className={`${styles['image_6']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c70aab15311b81ad2a9d3ba18ec7d468.png"
                  />
                </div>
                <img
                  className={`${styles['image_7']} ${styles['pos_6']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ad665bd1d886e783ed97e5d4cbbe3fcc.png"
                />
                <img
                  className={`${styles['image_8']} ${styles['pos_7']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=65375b08fac331c2c659580680284d2c.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`flex-col justify-start ${styles['group_9']} ${styles['pos']}`}>
          <div className={`${styles['section_2']}`}></div>
          <img
            className={`${styles['image_3']} ${styles['pos_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3d9f9274165515f21822a7c79b98a49a.png"
          />
          <img
            className={`${styles['image_4']} ${styles['pos_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e4c65cad6afc8d1ddabe287cd924a935.png"
          />
        </div>
      </div>
      <div className={`flex-col justify-start ${styles['group_6']} ${styles['pos_1']} mt-2`}>
        <div className={`flex-row justify-between items-center ${styles['section_7']}`}>
          <div className={`flex-row`}>
            <img
              className={`${styles['image_12']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f5738476bb501b190300df3ec164e9d6.png"
            />
            <img
              className={`${styles['image_12']} ml-56`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=90602aee147258219db0c08ebca76181.png"
            />
          </div>
          <div className={`flex-row`}>
            <img
              className={`${styles['image_11']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2d893456f54d3f94a651e9e99bbfff4c.png"
            />
            <img
              className={`${styles['image_11']} ml-50`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=51fcbad5f98a211c847c8f9fee6241fc.png"
            />
          </div>
        </div>
        <img
          className={`${styles['image_10']} ${styles['pos_8']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=395309f9ce02c8a48d2081f7481d9dd1.png"
        />
      </div>
    </div>
  );
}

Page_3_23_9112.defaultProps = { className: '' };