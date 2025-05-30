import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Home_1_23_12987(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between ${styles['group']}`}>
        <div className={`flex-col items-start ${styles['group_3']}`}>
          <span className={`${styles['text']}`}>Hi, Jerel</span>
          <span className={`${styles['font']} ${styles['text_2']} ${styles['mt-9']}`}>Find your lessons today!</span>
        </div>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b7caebdcb400405cc65c3978737b4c8a.png"
        />
      </div>
      <div className={`flex-row ${styles['group_4']}`}>
        <div className={`flex-row items-center flex-1 relative ${styles['section']}`}>
          <img
            className={`${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9dc0f2e3ef15b882b2c24a19c1baf3e0.png"
          />
          <span className={`${styles['text_3']} ${styles['ml-13']}`}>Search now...</span>
        </div>
        <img
          className={`shrink-0 ${styles['image_2']} ml-20`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=18000c280334eb592a1890213cd622e6.png"
        />
      </div>
      <div className={`flex-row justify-center ${styles['section_2']}`}>
        <div className={`flex-col self-start ${styles['group_5']}`}>
          <span className={`${styles['font_2']} ${styles['text_4']}`}>Discover Top Picks</span>
          <div className={`${styles['group_6']}`}>
            <span className={`${styles['text_5']}`}>+100 </span>
            <span className={`${styles['font_2']} ${styles['text_6']}`}>lessons</span>
          </div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
            <span className={`${styles['font']} ${styles['text_7']}`}>Explore more</span>
          </div>
        </div>
        <img
          className={`${styles['image_4']} ${styles['ml-11']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=19cf489095495f8a09422acba4774867.png"
        />
      </div>
      <div className={`flex-col ${styles['group_1']}`}>
        <div className={`flex-row justify-between items-center ${styles['view']}`}>
          <span className={`${styles['font']} ${styles['text_8']}`}>Popular lessons</span>
          <span className={`${styles['text_9']}`}>See All</span>
        </div>
        <div className={`flex-row ${styles['group_7']} ${styles['mt-25']}`}>
          <div className={`flex-col shrink-0 relative ${styles['section_3']}`}>
            <div className={`flex-col`}>
              <div className={`flex-col justify-start items-end self-stretch ${styles['image-wrapper']}`}>
                <img
                  className={`${styles['image_6']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1fea885eab8d8518a2da9e931ce7a9ea.png"
                />
              </div>
              <span className={`self-start ${styles['font']} ${styles['text_10']}`}>Figma master class</span>
              <div className={`self-start ${styles['group_9']}`}>
                <span className={`${styles['font']}`}>UI Design</span>
                <span className={`${styles['font_3']}`}> (28 lessons)</span>
              </div>
            </div>
            <div className={`flex-row justify-between items-center ${styles['mt-27']}`}>
              <div className={`flex-row items-center ${styles['section_5']}`}>
                <img
                  className={`shrink-0 ${styles['image_7']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=cd1886c563f95127320b5025fcd263d7.png"
                />
                <span className={`${styles['font_4']} ${styles['text_12']} ${styles['ml-5']}`}>6h 30min</span>
              </div>
              <div className={`flex-row items-center`}>
                <img
                  className={`shrink-0 ${styles['image_8']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e9fcc2c8d86732b2e61557d40f7b8af6.png"
                />
                <span className={`${styles['font_4']} ${styles['text_13']} ml-4`}>4.9</span>
              </div>
            </div>
          </div>
          <div className={`flex-col shrink-0 ${styles['section_4']} ml-16`}>
            <div className={`flex-col items-start self-stretch ${styles['group_8']}`}>
              <img
                className={`${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d00b62a66ccca9730820717d72624856.png"
              />
              <span className={`${styles['font']} ${styles['text_11']}`}>Web design for beginn...</span>
              <div className={`${styles['group_10']}`}>
                <span className={`${styles['font']}`}>UX Design</span>
                <span className={`${styles['font_3']}`}> (28 lessons)</span>
              </div>
            </div>
            <div className={`flex-row items-center self-start ${styles['section_6']}`}>
              <img
                className={`shrink-0 ${styles['image_7']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7282eb6a8a8804ae6a217429cdad0394.png"
              />
              <span className={`${styles['font_4']} ${styles['text_14']} ${styles['ml-5']}`}>8h 30min</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col justify-start items-center ${styles['section_7']}`}>
        <div className={`flex-row`}>
          <img
            className={`${styles['equal-division-item']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0914eb60b0bd6899f07b09d3e9bf7c2d.png"
          />
          <img
            className={`${styles['equal-division-item_2']} ${styles['image_9']} ${styles['ml-67']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d5ea16c0d805c195d2a9f1646032a265.png"
          />
          <img
            className={`${styles['equal-division-item_3']} ${styles['ml-67']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a6fa4178afee4755e01567f0406fe78f.png"
          />
          <img
            className={`${styles['equal-division-item_4']} ${styles['ml-67']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=16da3594609e73be1d410e94907fc5ae.png"
          />
        </div>
      </div>
    </div>
  );
}

Home_1_23_12987.defaultProps = { className: '' };