import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Page_5_23_9270(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col ${styles['group']}`}>
        <div className={`flex-row justify-center items-center relative`}>
          <img
            className={`${styles['image']} ${styles['pos']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a6e13cb5f97f1f582102fe38a6b1c9c3.png"
          />
          <span className={`${styles['font']} ${styles['text']}`}>Leaderboard</span>
        </div>
        <div className={`mt-26 flex-col`}>
          <div className={`flex-col`}>
            <div className={`flex-row ${styles['group_2']}`}>
              <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
                <span className={`${styles['font_2']} ${styles['text_2']}`}>Weekly</span>
              </div>
              <div className={`ml-4 flex-col justify-start items-center ${styles['text-wrapper_2']}`}>
                <span className={`${styles['font_3']} ${styles['text_3']}`}>All Time</span>
              </div>
            </div>
            <div className={`mt-16 flex-row justify-center items-center ${styles['section']}`}>
              <div className={`flex-col justify-start items-center ${styles['text-wrapper_3']}`}>
                <span className={`${styles['font']} ${styles['text_5']}`}>#4</span>
              </div>
              <span className={`${styles['font_3']} ${styles['text_4']} ${styles['ml-17']}`}>
                You are doing better than 60% of other players!
              </span>
            </div>
          </div>
          <div className={`mt-16 flex-col ${styles['group_3']}`}>
            <div className={`flex-row ${styles['group_4']}`}>
              <div className={`flex-col shrink-0 self-start ${styles['group_7']}`}>
                <div className={`flex-col justify-start items-center relative ${styles['group_8']}`}>
                  <div className={`${styles['section_4']}`}></div>
                  <img
                    className={`${styles['section_4']} ${styles['pos_4']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0ddd811c94e625b8242a982d5ae0d8b8.png"
                  />
                  <img
                    className={`${styles['image_5']} ${styles['pos_7']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d5306f5954c3bea8fa8509b78fef09af.png"
                  />
                </div>
                <span className={`mt-22 ${styles['font_3']}`}>Alena Donin</span>
              </div>
              <div className={`flex-col flex-1 ${styles['ml-11']}`}>
                <div className={`flex-row items-start ${styles['group_5']}`}>
                  <div className={`flex-col justify-start shrink-0 relative ${styles['group_6']}`}>
                    <div className={`${styles['section_3']}`}></div>
                    <img
                      className={`${styles['image_4']} ${styles['pos_3']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b01ca26754d76c67803086592cf8581f.png"
                    />
                    <img
                      className={`${styles['image_5']} ${styles['pos_5']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=196be3486497e569f27e52a9dc7acaf6.png"
                    />
                    <img
                      className={`${styles['image_2']} ${styles['pos_2']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c5328209006f4a2d07b105b4ec8965bc.png"
                    />
                  </div>
                  <div className={`flex-row items-center flex-1 ${styles['section_2']} ${styles['ml-11']}`}>
                    <img
                      className={`shrink-0 ${styles['image_3']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7b15dc392717b6d6412c05e6606dde4c.png"
                    />
                    <span className={`ml-4 ${styles['font_4']} ${styles['text_6']}`}>06d 23h 00m</span>
                  </div>
                </div>
                <div className={`mt-4 flex-row items-start`}>
                  <div className={`flex-col items-center ${styles['group_10']}`}>
                    <span className={`${styles['font_3']}`}>Davis Curtis</span>
                    <div
                      className={`flex-col justify-start items-center ${styles['text-wrapper_4']} ${styles['mt-11']}`}
                    >
                      <span className={`${styles['font_4']} ${styles['text_7']}`}>2,569 QP</span>
                    </div>
                  </div>
                  <div className={`ml-26 flex-col justify-start relative ${styles['group_9']}`}>
                    <div className={`${styles['section_5']} ${styles['view']}`}></div>
                    <img
                      className={`${styles['image_6']} ${styles['pos_6']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=02ba9a60d8e93ce47e993852c0894b79.png"
                    />
                    <img
                      className={`${styles['image_5']} ${styles['pos_8']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=57eb609bc3252f460fe26309b34f0482.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={`flex-row items-start`}>
              <div className={`flex-col shrink-0`}>
                <div className={`flex-col justify-start items-center self-center ${styles['text-wrapper_5']}`}>
                  <span className={`${styles['font_4']}`}>1,469 QP</span>
                </div>
                <img
                  className={`self-center ${styles['image_8']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=102b79b50667d14810e1efe3baa08265.png"
                />
                <div className={`flex-col justify-start items-center self-stretch ${styles['text-wrapper_7']}`}>
                  <span className={`${styles['text_10']}`}>2</span>
                </div>
              </div>
              <div className={`flex-col flex-1 ${styles['group_11']}`}>
                <div className={`flex-row`}>
                  <img
                    className={`flex-1 ${styles['image_7']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b881b2ea5ac58d7a9e31012fc8e15dc2.png"
                  />
                  <span className={`ml-6 ${styles['font_2']} ${styles['text_8']}`}>Craig Gouse</span>
                </div>
                <div className={`flex-row`}>
                  <div className={`flex-col justify-start items-center flex-1 ${styles['text-wrapper_6']}`}>
                    <span className={`${styles['text_9']}`}>1</span>
                  </div>
                  <div className={`flex-col shrink-0 self-start ${styles['group_12']}`}>
                    <div className={`flex-col justify-start items-center self-center ${styles['text-wrapper_5']}`}>
                      <span className={`${styles['font_4']}`}>1,053 QP</span>
                    </div>
                    <img
                      className={`self-center ${styles['image_8']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8bc2fd688acb4feb88df9391e2427b4c.png"
                    />
                    <div className={`flex-col justify-start items-center self-stretch ${styles['text-wrapper_8']}`}>
                      <span className={`${styles['text_11']}`}>3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col relative ${styles['section_6']}`}>
        <div className={`self-center ${styles['section_7']}`}></div>
        <div className={`mt-26 flex-row items-center self-stretch ${styles['section_8']}`}>
          <img
            className={`${styles['image_10']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=35785b4eb2eee8cb1289d1e817cede95.png"
          />
          <div className={`ml-14 flex-col justify-start relative ${styles['group_9']}`}>
            <div className={`${styles['section_5']} ${styles['view_2']}`}></div>
            <img
              className={`${styles['image_9']} ${styles['pos_9']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7e78ed8f85c71288775260a2506166a9.png"
            />
            <img
              className={`${styles['image_5']} ${styles['pos_10']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=69036fcd6f16251a5113fd7b20a46abc.png"
            />
          </div>
          <div className={`ml-14 flex-col items-start flex-1`}>
            <span className={`${styles['font_2']} ${styles['text_12']}`}>Madelyn Dias</span>
            <span className={`${styles['font_5']} ${styles['text_13']} ${styles['mt-13']}`}>590 points</span>
          </div>
        </div>
      </div>
      <div className={`flex-row items-center relative ${styles['section_9']}`}>
        <img
          className={`${styles['image_10']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d82e9eb9faeb797c7463865492e0984e.png"
        />
        <div className={`ml-14 flex-col justify-start relative ${styles['group_9']}`}>
          <div className={`flex-col justify-start ${styles['section_5']} ${styles['view_3']}`}>
            <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
              <img
                className={`${styles['image_11']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7354c8fb62c43662f2440177794bf2c6.png"
              />
            </div>
          </div>
          <img
            className={`${styles['image_5']} ${styles['pos_11']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c00b1aadce00efe18887ed9644f64fb6.png"
          />
        </div>
        <div className={`ml-14 flex-col items-start flex-1`}>
          <span className={`${styles['font_3']} ${styles['text_14']}`}>Zain Vaccaro</span>
          <span className={`mt-16 ${styles['font_5']} ${styles['text_15']}`}>448 points</span>
        </div>
      </div>
    </div>
  );
}

Page_5_23_9270.defaultProps = { className: '' };