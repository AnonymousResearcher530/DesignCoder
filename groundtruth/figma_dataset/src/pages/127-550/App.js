import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function IPhone_13_Pro_Max_4_127_550(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
        <span className={`${styles['font']} ${styles['text']}`}>Profile</span>
      </div>
      <div className={`flex-row justify-between items-center ${styles['group_2']}`}>
        <div className={`flex-col`}>
          <span className={`self-stretch ${styles['font']} ${styles['text_2']}`}>Nidhi Pandya</span>
          <span className={`self-start ${styles['font_2']} ${styles['text_3']}`}>Nidhi12</span>
          <div className={`flex-row items-center self-stretch ${styles['group_3']}`}>
            <img
              className={`${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=11966d21d29deca6e63388a383915327.png"
            />
            <span className={`${styles['font_3']} ${styles['text_4']} ml-10`}>Joined March 2022</span>
          </div>
        </div>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=028a4bf2daf7b90e94e8a9eaa77640f5.png"
        />
      </div>
      <div className={`flex-row justify-between items-center ${styles['group_5']}`}>
        <div className={`flex-row items-baseline`}>
          <span className={`${styles['text_5']}`}>🎊</span>
          <span className={`${styles['font_4']} ${styles['text_6']} ${styles['ml-17']}`}>Friends updates</span>
        </div>
        <img
          className={`${styles['image_3']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=34042913be3897af1b13508919f39114.png"
        />
      </div>
      <div className={`flex-col ${styles['group_6']}`}>
        <span className={`self-start ${styles['font']} ${styles['text_7']}`}>Statistics</span>
        <div className={`self-stretch ${styles['grid']} ${styles['mt-19']}`}>
          <div className={`flex-row justify-center relative ${styles['grid-item']}`}>
            <img
              className={`self-start ${styles['image_4']} ${styles['pos']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5a01e0478d64994406510ff6949c6edb.png"
            />
            <div className={`self-center ${styles['group_7']}`}>
              <span className={`${styles['font_4']}`}>
                3<br />
              </span>
              <span className={`${styles['font_5']}`}>Day Streak</span>
            </div>
          </div>
          <div className={`flex-row justify-center relative ${styles['grid-item_2']}`}>
            <img
              className={`self-start ${styles['image_5']} ${styles['pos_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b4aaa85db418e6db18732a416aff667d.png"
            />
            <div className={`self-center ${styles['group_1']}`}>
              <span className={`${styles['font_4']}`}>
                1432
                <br />
              </span>
              <span className={`${styles['font_5']}`}>Total XP</span>
            </div>
          </div>
          <div className={`flex-row justify-center items-center ${styles['grid-item_3']}`}>
            <img
              className={`${styles['image_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c850c12a298902c9a9ab5f3a97a49c6d.png"
            />
            <div className={`${styles['view']} ml-10`}>
              <span className={`${styles['font_4']}`}>
                Bronze
                <br />
              </span>
              <span className={`${styles['font_5']}`}>Current League</span>
            </div>
          </div>
          <div className={`flex-row justify-center items-center ${styles['grid-item_4']}`}>
            <img
              className={`${styles['image_7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=48086321bcf4dd615e9d2447943b0ab7.png"
            />
            <div className={`${styles['view_2']} ml-14`}>
              <span className={`${styles['font_4']}`}>
                0<br />
              </span>
              <span className={`${styles['font_5']}`}>Top 3 Finishes</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['group_8']}`}>
        <div className={`flex-row justify-between items-center ${styles['group_9']}`}>
          <span className={`${styles['font']} ${styles['text_8']}`}>Friends</span>
          <span className={`${styles['font_2']} ${styles['text_9']}`}>ADD FRIENDS</span>
        </div>
        <div className={`flex-col relative ${styles['group_10']}`}>
          <div className={`shrink-0 self-stretch ${styles['divider']}`}></div>
          <div className={`shrink-0 self-end relative ${styles['section_2']}`}></div>
          <div className={`shrink-0 ${styles['section']} ${styles['pos_4']}`}></div>
          <div className={`flex-col ${styles['group_11']} ${styles['pos_3']}`}>
            <div className={`flex-row justify-between ${styles['group_12']}`}>
              <span className={`${styles['font_6']} ${styles['text_10']}`}>FOLLOWING</span>
              <span className={`${styles['font_6']} ${styles['text_11']}`}>FOLLOWERS</span>
            </div>
            <div className={`flex-col ${styles['mt-21']}`}>
              <div className={`flex-row justify-between items-center`}>
                <div className={`flex-row items-center`}>
                  <div className={`flex-col justify-start items-center shrink-0 ${styles['text-wrapper_2']}`}>
                    <span className={`${styles['font_3']} ${styles['text_12']}`}>H</span>
                  </div>
                  <div className={`${styles['group_13']} ${styles['ml-17']}`}>
                    <span className={`${styles['font_4']}`}>
                      Hardi
                      <br />
                    </span>
                    <span className={`${styles['font_5']}`}>4367 XP</span>
                  </div>
                </div>
                <img
                  className={`${styles['image_8']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=88a794b1a0c727db46cfd4147438eb4b.png"
                />
              </div>
              <div className={`flex-row justify-between items-center mt-18`}>
                <div className={`flex-row`}>
                  <div
                    className={`flex-col justify-start items-center shrink-0 self-start ${styles['text-wrapper_3']}`}
                  >
                    <span className={`${styles['font_3']} ${styles['text_13']}`}>K</span>
                  </div>
                  <div className={`${styles['group_13']} ${styles['view_1']} ${styles['ml-17']}`}>
                    <span className={`${styles['font_4']}`}>
                      Krishna
                      <br />
                    </span>
                    <span className={`${styles['font_5']}`}>2334 XP</span>
                  </div>
                </div>
                <img
                  className={`${styles['image_8']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fe65f6c1beeddcc7329f2cbde122b7dd.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['group_14']}`}>
        <div className={`flex-row items-start self-stretch ${styles['group_15']}`}>
          <img
            className={`shrink-0 ${styles['image_9']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=22ed51026ae922fb473b344f1338dc1d.png"
          />
          <div className={`flex-1 ${styles['group_16']} ml-38`}>
            <span className={`${styles['font_4']}`}>
              Invite your friends
              <br />
            </span>
            <span className={`${styles['text_14']}`}>
              <br />
            </span>
            <span className={`${styles['font_4']}`}>Tell your friends it’s free and fun to learn on Mental up!</span>
          </div>
        </div>
        <div className={`flex-col justify-start items-center self-center ${styles['text-wrapper_4']}`}>
          <span className={`${styles['font_2']} ${styles['text_15']}`}>INVITE FRIENDS</span>
        </div>
      </div>
      <div className={`flex-col justify-start items-center ${styles['section_3']}`}>
        <div className={`flex-row`}>
          <img
            className={`${styles['equal-division-item_1']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8ffd4714df5d90b483a46c9cfa58f249.png"
          />
          <img
            className={`${styles['equal-division-item']} ${styles['ml-53']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ccba15509a4259b1ac6f60d4cceade54.png"
          />
          <img
            className={`${styles['equal-division-item_3']} ${styles['ml-53']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=381ed6000e36a05df6781e0469dd849c.png"
          />
          <img
            className={`${styles['equal-division-item_3']} ${styles['ml-53']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b7d26fa299d7a67b558fc6790a8df8a7.png"
          />
        </div>
      </div>
    </div>
  );
}

IPhone_13_Pro_Max_4_127_550.defaultProps = { className: '' };