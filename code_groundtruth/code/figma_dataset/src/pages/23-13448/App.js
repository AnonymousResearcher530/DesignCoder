import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function IPhone_13_mini_2_23_13448(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null],
  });

  return (
    <div className={`flex-col relative ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center ${styles['group_2']}`}>
        <div className={`flex-row items-center`}>
          <img
            className={`shrink-0 ${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4dcd705699dafe60a974f1542a23ae5a.png"
          />
          <span className={`${styles['text']} ${styles['ml-7']}`}>Youtube</span>
        </div>
        <div className={`flex-row items-center`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ba0a74d2ceca04311e61fac787ef65fc.png"
          />
          <img
            className={`${styles['image']} ml-8`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8c837d543d44d3c3bfd81a982749da10.png"
          />
        </div>
      </div>
      <div className={`flex-col ${styles['group']} ${styles['pos']}`}>
        <div className={`flex-row justify-between items-center ${styles['view']}`}>
          <div className={`flex-row items-center`}>
            <img
              className={`shrink-0 ${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e16583bee71d5ca1be43cf9b358fe139.png"
            />
            <span className={`${styles['font']} ${styles['text_2']} ${styles['ml-15']}`}>History</span>
          </div>
          <span className={`${styles['font']} ${styles['text_3']}`}>View all</span>
        </div>
        <div className={`flex-row ${styles['horiz-list']}`}>
          <div className={`flex-col ${styles['group_4']} ${styles['horiz-list-item']}`}>
            <div className={`flex-col justify-start items-start ${styles['section']}`}>
              <div className={`${styles['section_4']}`}></div>
            </div>
            <div className={`flex-row items-center ${styles['group_6']}`}>
              <div className={`flex-col flex-1`}>
                <span className={`self-start ${styles['font_2']}`}>Title</span>
                <span
                  className={`self-start ${styles['font_2']} ${styles['text_4']} ${styles['text_5']} ${styles['mt-5']}`}
                >
                  Channel Name
                </span>
                <div className={`flex-row justify-evenly items-center self-stretch ${styles['mt-5']}`}>
                  <span className={`${styles['font_2']} ${styles['text_4']}`}>570 views</span>
                  <div className={`${styles['section_5']}`}></div>
                  <span className={`${styles['font_3']} ${styles['text_4']}`}>1 year ago</span>
                </div>
              </div>
              <img
                className={`shrink-0 ${styles['image_6']} ml-10`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2b49f824b81d2c3dc2fa97749562a928.png"
              />
            </div>
          </div>
          <div className={`flex-col ${styles['group_4']} ${styles['horiz-list-item']}`}>
            <div className={`flex-col justify-start items-start ${styles['section_2']}`}>
              <div className={`${styles['section_4']}`}></div>
            </div>
            <div className={`flex-row items-center ${styles['group_6']}`}>
              <div className={`flex-col flex-1`}>
                <span className={`self-start ${styles['font_2']}`}>Title</span>
                <span
                  className={`self-start ${styles['font_2']} ${styles['text_4']} ${styles['text_5']} ${styles['mt-5']}`}
                >
                  Channel Name
                </span>
                <div className={`flex-row justify-evenly items-center self-stretch ${styles['mt-5']}`}>
                  <span className={`${styles['font_2']} ${styles['text_4']}`}>570 views</span>
                  <div className={`${styles['section_5']}`}></div>
                  <span className={`${styles['font_3']} ${styles['text_4']}`}>1 year ago</span>
                </div>
              </div>
              <img
                className={`shrink-0 ${styles['image_6']} ml-10`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2b49f824b81d2c3dc2fa97749562a928.png"
              />
            </div>
          </div>
          <div className={`flex-col ${styles['group_4']} ${styles['group_5']}`}>
            <div className={`flex-col items-start ${styles['section_3']}`}>
              <img
                className={`${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7943fb488e37225ec017a119d0aa1011.png"
              />
              <div className={`${styles['section_4']}`}></div>
            </div>
            <div className={`flex-row items-center ${styles['group_6']}`}>
              <div className={`flex-col flex-1`}>
                <span className={`self-start ${styles['font_2']}`}>Title</span>
                <span
                  className={`self-start ${styles['font_2']} ${styles['text_4']} ${styles['text_6']} ${styles['mt-5']}`}
                >
                  Channel Name
                </span>
                <div className={`flex-row justify-evenly items-center self-stretch ${styles['mt-5']}`}>
                  <span className={`${styles['font_2']} ${styles['text_4']}`}>570 views</span>
                  <div className={`${styles['section_5']}`}></div>
                  <span className={`${styles['font_3']} ${styles['text_4']}`}>1 year ago</span>
                </div>
              </div>
              <img
                className={`shrink-0 ${styles['image_6']} ml-10`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2b49f824b81d2c3dc2fa97749562a928.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col relative ${styles['group_7']}`}>
        <div className={`flex-row items-center`}>
          <img
            className={`${styles['image_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c54167931f85da6164c4513ccc7d0bba.png"
          />
          <span className={`${styles['font']} ${styles['ml-13']}`}>Your videos</span>
        </div>
        <div className={`flex-row items-center ${styles['mt-19']}`}>
          <img
            className={`${styles['image_8']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=629dbba7a436acc9da233f00a3ff2d92.png"
          />
          <span className={`${styles['font']} ml-12`}>Your Movies</span>
        </div>
      </div>
      <div className={`flex-col relative ${styles['group_8']}`}>
        <span className={`self-start ${styles['text_7']}`}>Playlists</span>
        <div className={`flex-col self-stretch ${styles['group_9']} mt-26`}>
          <div className={`flex-row ${styles['group_10']}`}>
            <div className={`flex-col justify-start ${styles['section_6']}`}>
              <div className={`flex-row items-center ${styles['section_7']}`}>
                <img
                  className={`${styles['image_9']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c81d34578f9d91a43a5154470eb78b3e.png"
                />
                <span className={`${styles['font_5']} ${styles['text_9']} ml-4`}>811+</span>
              </div>
            </div>
            <div className={`flex-col items-start flex-1 self-start ${styles['group_11']} ml-12`}>
              <span className={`${styles['font_2']}`}>Liked Videos</span>
              <span className={`${styles['font_4']} ${styles['text_4']} ${styles['text_8']} ${styles['mt-5']}`}>
                Private
              </span>
            </div>
          </div>
          <div className={`flex-col mt-12`}>
            {data.items.map((item, index) => (
              <div className={`flex-row ${styles['group_10']} mt-12`} key={index}>
                <div className={`flex-col justify-start ${styles['section_6']}`}>
                  <div className={`flex-row items-center ${styles['section_7']}`}>
                    <img
                      className={`${styles['image_9']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c81d34578f9d91a43a5154470eb78b3e.png"
                    />
                    <span className={`${styles['font_5']} ${styles['text_9']} ml-4`}>811+</span>
                  </div>
                </div>
                <div className={`flex-col items-start flex-1 self-start ${styles['group_1']} ml-12`}>
                  <span className={`${styles['font_2']} ${styles['text_10']}`}>Colorful arts </span>
                  <span className={`${styles['font_4']} ${styles['text_4']} ${styles['mt-5']}`}>Channel Name</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`flex-col relative ${styles['section_10']}`}>
        <div className={`flex-row items-center ${styles['equal-division']}`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2c42cc555a0aef2111d5a5880318b2c7.png"
          />
          <img
            className={`${styles['equal-division-item_3']} ${styles['ml-69']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a7b7aa68c38af25aa8cf58cc10c2b145.png"
          />
          <img
            className={`${styles['equal-division-item']} ${styles['ml-69']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=054cb5dfab7b8700527426298d2d3877.png"
          />
          <img
            className={`${styles['equal-division-item_2']} ${styles['ml-69']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=cf97944cffce3b81827df6f0af91ac35.png"
          />
        </div>
        <div className={`flex-row justify-between`}>
          <span className={`self-center ${styles['font_6']} ${styles['text_16']}`}>Home</span>
          <span className={`self-start ${styles['font_6']} ${styles['text_17']}`}>Shorts</span>
          <span className={`self-center ${styles['font_7']} ${styles['text_18']}`}>Subscriptons</span>
          <span className={`self-center ${styles['font_7']} ${styles['text_19']}`}>Library</span>
        </div>
      </div>
    </div>
  );
}

IPhone_13_mini_2_23_13448.defaultProps = { className: '' };