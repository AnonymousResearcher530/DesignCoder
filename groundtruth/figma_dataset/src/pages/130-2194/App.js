import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function IPhone_11_Pro_Max_1_130_2194(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col`}>
        <div className={`flex-col ${styles['section_2']}`}>
          <div className={`flex-row justify-between`}>
            <img
              className={`${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e31ee1499b67aceb306e53c6e79151b6.png"
            />
            <img
              className={`${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=35e0e040dfb256c8d24395a0883a3aea.png"
            />
          </div>
          <div className={`flex-col ${styles['section_3']} mt-60`}>
            <img
              className={`shrink-0 self-center ${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8e5d2d8dd37510a440508faabaef38c3.png"
            />
            <span className={`self-center ${styles['font']} ${styles['text']}`}>Dianna Leen</span>
            <span className={`self-stretch ${styles['font_2']} ${styles['text_2']}`}>
              Has maiorum habemus detraxit at. Timeam fabulas splendide et his.Usu nullam dolorum quaestio ei, sit vidit
              facilisis ea. Per ne impedit iracundia neglegentur.
            </span>
            <div className={`flex-row self-stretch ${styles['group']}`}>
              <div className={`flex-col justify-start items-center flex-1 ${styles['text-wrapper']}`}>
                <span className={`${styles['font']} ${styles['text_3']}`}>Follow</span>
              </div>
              <img
                className={`shrink-0 ${styles['image_4']} ml-16`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ed2011560b440763d290dc84ff1db34e.png"
              />
            </div>
          </div>
        </div>
        <div className={`flex-row ${styles['group_2']}`}>
          <div className={`flex-col shrink-0 ${styles['section_4']}`}>
            <div className={`flex-col items-center ${styles['group_3']}`}>
              <span className={`${styles['font_3']}`}>10K</span>
              <span className={`${styles['font_5']} ${styles['text_5']} ${styles['mt-11']}`}>Likes</span>
            </div>
            <div className={`flex-col items-center ${styles['group_6']}`}>
              <span className={`${styles['font_3']} ${styles['text_7']}`}>641</span>
              <span className={`${styles['font_5']} ${styles['text_8']} ${styles['mt-11']}`}>Following</span>
            </div>
            <div className={`flex-col items-center ${styles['group_7']}`}>
              <span className={`${styles['font_3']} ${styles['text_9']}`}>2.1k</span>
              <span className={`${styles['font_5']} ${styles['text_10']} ${styles['mt-11']}`}>Followers</span>
            </div>
          </div>
          <div className={`flex-col flex-1 ${styles['group_4']} ml-16`}>
            <div className={`flex-col`}>
              <span className={`self-start ${styles['text_4']}`}>Friends</span>
              <div className={`flex-row justify-between ${styles['horiz-list']} ${styles['group_5']} mt-16`}>
                <img
                  className={`${styles['image_5']} ${styles['horiz-list-item']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=086240a4db048b031576ce3fd3e76180.png"
                />
                <img
                  className={`${styles['image_5']} ${styles['horiz-list-item']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1122f10719c59b72361d8075da070791.png"
                />
                <img
                  className={`${styles['image_5']} ${styles['horiz-list-item']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8306355ad9e4cbf30e81ca11a0eb5dc6.png"
                />
                <img
                  className={`${styles['image_5']} ${styles['image_6']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1f0487ec5ed8cb849a7cf3f2a4190334.png"
                />
              </div>
            </div>
            <div className={`flex-col ${styles['mt-43']}`}>
              <span className={`self-start ${styles['font_2']} ${styles['text_6']}`}>Gallery</span>
              <div className={`flex-row justify-center self-stretch mt-12`}>
                <img
                  className={`${styles['image_7']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c0132cfe4a2c440c5b65aac1c8d78694.png"
                />
                <img
                  className={`${styles['image_7']} ml-10`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6549d70f4b4dd728f246ab2ecaf612c6.png"
                />
                <img
                  className={`${styles['image_8']} ml-10`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f753f2a16ddf3f2d2479449aabfed1aa.png"
                />
              </div>
              <div className={`flex-row justify-center self-stretch mt-12`}>
                <img
                  className={`${styles['image_9']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ed37f9229e518e04e3c96d2ad190bfa6.png"
                />
                <img
                  className={`${styles['image_9']} ml-10`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=245b4e6d5f9b4f08ccaa64443252eacf.png"
                />
                <img
                  className={`${styles['image_10']} ml-10`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ae685e07194096e5d381bb37ca1226f1.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-row ${styles['mt-67']}`}>
        <div className={`flex-col items-center ${styles['group_8']} ${styles['group_1']}`}>
          <img
            className={`${styles['image_11']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=af04a9c8db3048c9198cb169eb1a4786.png"
          />
          <span className={`${styles['font_1']} ${styles['text_1']} mt-4`}>Home</span>
        </div>
        <div className={`flex-col items-center ${styles['group_8']} ${styles['equal-division-item_2']} ml-2`}>
          <img
            className={`${styles['image_11']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a19fadfbc4d2a652211c4b732720063d.png"
          />
          <span className={`${styles['font_5']} ${styles['text_12']} ${styles['mt-3']}`}>Chat</span>
        </div>
        <div className={`flex-col ${styles['group_8']} ${styles['group_9']} ml-2`}>
          <img
            className={`self-center ${styles['image_11']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5befa9904aaf274b2523f1463cd9659c.png"
          />
          <span className={`self-start ${styles['font_1']} ${styles['text_13']} mt-4`}>Favorite</span>
        </div>
        <div className={`flex-col items-center ${styles['group_8']} ${styles['equal-division-item_2']} ml-2`}>
          <img
            className={`${styles['image_11']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4b2ebea5382634150a073faa4016808d.png"
          />
          <span className={`${styles['font_5']} ${styles['text_11']} ${styles['mt-3']}`}>Profile</span>
        </div>
      </div>
    </div>
  );
}

IPhone_11_Pro_Max_1_130_2194.defaultProps = { className: '' };