import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function User_profile_1_20_3341(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col justify-start ${styles['page']} ${props.className}`}>
      <div className={`flex-col ${styles['group']}`}>
        <div className={`flex-col ${styles['group_2']}`}>
          <div className={`flex-col ${styles['section']}`}>
            <div className={`flex-col justify-start items-start self-end ${styles['text-wrapper']}`}>
              <span className={`${styles['text_3']}`}>Edit Profile</span>
            </div>
            <img
              className={`self-start ${styles['image_4']} ${styles['mt-33']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a5df195bddfa3ccfcae809cdad46f592.png"
            />
          </div>
          <div className={`flex-col ${styles['group_3']}`}>
            <div className={`flex-row justify-end self-stretch`}>
              <img
                className={`${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3f614cdc2be529e5225a80cbb30cb9b3.png"
              />
              <img
                className={`${styles['image_5']} ml-16`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3510ca98bd592a0721ec6c3894261afd.png"
              />
              <img
                className={`${styles['image_5']} ml-16`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f60d8995a99c0fd5521e27ed5236e23d.png"
              />
              <img
                className={`${styles['image_5']} ml-16`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=579077ec61529237f1b92392867094b7.png"
              />
            </div>
            <span className={`self-start ${styles['text_4']}`}>Julie Rose</span>
            <span className={`self-start ${styles['font_2']} ${styles['text_5']} ${styles['text_6']}`}>@julierose</span>
            <span className={`self-start ${styles['font_3']} ${styles['text_7']}`}>
              I’m all about freedom using the internet as a mechanism to put your knowledge out there.
            </span>
            <div className={`flex-row items-center self-stretch ${styles['view']}`}>
              <div className={`flex-row items-center`}>
                <span className={`${styles['font_4']}`}>162</span>
                <span className={`${styles['font_5']} ${styles['text_5']} ${styles['text_8']} ${styles['ml-9']}`}>
                  Following
                </span>
              </div>
              <div className={`flex-row ml-22`}>
                <span className={`${styles['font_4']}`}>500</span>
                <span className={`${styles['font_4']} ${styles['text_5']} ${styles['text_9']} ${styles['ml-9']}`}>
                  Followers
                </span>
              </div>
            </div>
            <div className={`flex-row items-center self-stretch ${styles['group_5']}`}>
              <img
                className={`${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f23e3108ad77419d58d42880cd792581.png"
              />
              <span className={`${styles['font_2']} ${styles['text_5']} ${styles['text_10']} ml-10`}>
                Followed by lena and julie
              </span>
            </div>
          </div>
        </div>
        <div className={`flex-col ${styles['group_11']}`}>
          <div className={`flex-col ${styles['group_6']}`}>
            <div className={`flex-row justify-between items-center self-stretch ${styles['group_7']}`}>
              <span className={`${styles['font_4']} ${styles['text_11']}`}>Clubs</span>
              <div className={`flex-row items-center`}>
                <span className={`${styles['font_5']} ${styles['text_12']}`}>Favourite Topics </span>
                <span className={`${styles['font_5']} ${styles['text_13']}`}>Speaker</span>
                <span className={`${styles['font_5']} ${styles['text_14']}`}>In</span>
              </div>
            </div>
            <div className={`self-start ${styles['section_2']}`}></div>
          </div>
          <div className={`flex-col ${styles['group_9']}`}>
            <div className={`flex-row justify-center`}>
              <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']}`}>
                <span className={`${styles['font_6']} ${styles['text_15']}`}>Top clubs</span>
              </div>
              <div className={`flex-col justify-start ${styles['text-wrapper_3']} ml-8`}>
                <span className={`${styles['font_6']} ${styles['text_16']}`}>Joined Clubs</span>
              </div>
              <div className={`flex-col justify-start items-center ${styles['text-wrapper_4']} ml-8`}>
                <span className={`${styles['font_6']} ${styles['text_17']}`}>Create club</span>
              </div>
            </div>
            <div className={`flex-col mt-16`}>
              <div className={`flex-col ${styles['section_3']}`}>
                <div className={`flex-row justify-between items-center`}>
                  <div className={`flex-row items-center`}>
                    <img
                      className={`shrink-0 ${styles['image_7']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d8976471b59a64fe0cc200d6a8599678.png"
                    />
                    <span className={`${styles['font_3']} ${styles['text_18']} ml-16`}>Today at 11:00 PM</span>
                  </div>
                  <img
                    className={`${styles['image_8']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d439f06026b1795e9c7e89b6c09cec30.png"
                  />
                </div>
                <span className={`${styles['text_19']} mt-16`}>Binance NFT Chat: Supercharge your spaces </span>
                <div className={`flex-row items-center ${styles['group_1']} mt-16`}>
                  <span className={`${styles['font_7']} ${styles['text_20']}`}>Small business</span>
                  <span className={`${styles['font_8']} ${styles['text_22']}`}>•</span>
                  <span className={`${styles['font_3']} ${styles['text_21']}`}>Cryptocurrency</span>
                </div>
              </div>
              <div className={`flex-col ${styles['section_4']}`}>
                <div className={`flex-row justify-between items-center`}>
                  <div className={`flex-row items-center`}>
                    <img
                      className={`shrink-0 ${styles['image_9']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=97f99572f5d6cda48c8957869ebfa14f.png"
                    />
                    <span className={`${styles['font_7']} ${styles['text_23']} ${styles['ml-17']}`}>Binance NFT</span>
                  </div>
                  <div className={`flex-col justify-start items-center ${styles['text-wrapper_5']}`}>
                    <span className={`${styles['text_24']}`}>Host</span>
                  </div>
                </div>
                <div className={`flex-row items-center ${styles['mt-13']}`}>
                  <span className={`${styles['font_3']} ${styles['text_25']}`}>@Binance</span>
                  <span className={`${styles['font_8']} ${styles['ml-7']}`}>•</span>
                  <span className={`${styles['font_3']} ${styles['ml-7']}`}>#NFT Market place</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex-row justify-center relative ${styles['section_5']}`}>
          <div className={`self-start ${styles['section_6']}`}></div>
          <div className={`self-center ${styles['section_7']}`}></div>
          <div className={`flex-col justify-start items-end self-center ${styles['text-wrapper_6']}`}>
            <span className={`${styles['text_26']}`}>Profile</span>
          </div>
          <div className={`flex-row items-center ${styles['equal-division']}`}>
            <img
              className={`${styles['image_7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=03d1b7028f6020301a9396a927277fbd.png"
            />
            <img
              className={`${styles['image_5']} ${styles['ml-89']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=474555dd10ce4a6cfd6e9bec0f661f6e.png"
            />
            <img
              className={`${styles['equal-division-item']} ${styles['ml-89']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=95057ec4abde89871fa2eae57a66646a.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

User_profile_1_20_3341.defaultProps = { className: '' };