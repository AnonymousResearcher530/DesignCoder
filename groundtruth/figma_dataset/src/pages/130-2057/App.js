import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Products_130_2057(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between ${styles['group_3']}`}>
        <span className={`${styles['text']}`}>Find the home furniture </span>
        <img
          className={`self-start ${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=45bbcbccc2a55f44a3dda1d2d2a33a27.png"
        />
      </div>
      <div className={`flex-row relative ${styles['group_2']}`}>
        <div className={`flex-row items-center ${styles['pos_19']}`}>
          <div className={`flex-col justify-start items-center relative ${styles['text-wrapper']}`}>
            <span className={`${styles['font']} ${styles['text_2']}`}>All</span>
          </div>
          <div className={`flex-col justify-start items-center relative ${styles['image-wrapper']}`}>
            <img
              className={`${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=284da44d991ed22078fd1400da814798.png"
            />
          </div>
          <div className={`flex-col justify-start items-center relative ${styles['image-wrapper_2']}`}>
            <img
              className={`${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=821b7a417677e2e9533d4009aa43b07f.png"
            />
          </div>
          <div className={`flex-col justify-start items-center relative ${styles['image-wrapper_3']}`}>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=81e73fc76e3beb9ea583c9c303162b15.png"
            />
          </div>
          <div className={`${styles['section']}`}></div>
        </div>
        <div className={`flex-col justify-start ${styles['group_6']} ${styles['pos_22']}`}>
          <div className={`flex-col relative ${styles['section_2']}`}>
            <div className={`flex-col items-start self-stretch`}>
              <span className={`${styles['font']} ${styles['text_3']}`}>Room Sofa</span>
              <img
                className={`${styles['image_8']} ${styles['mt-13']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=aed587e600ce0a7f71bc7d8e4c0b4d2a.png"
              />
            </div>
            <span className={`self-start ${styles['font']} ${styles['text_5']}`}>¥2500</span>
            <img
              className={`${styles['image_9']} ${styles['pos_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=aac5a9c7c4b69c808bca680ff3ca38e7.png"
            />
          </div>
          <img
            className={`${styles['image_5']} ${styles['pos']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f19caba9e2b83fe4a10611b07ced39ee.png"
          />
          <img
            className={`${styles['image_6']} ${styles['pos_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=de5cbc321eaa28db32695dfb5b8d0d4a.png"
          />
        </div>
        <div className={`flex-col justify-start ${styles['group_7']} ${styles['pos_23']}`}>
          <div className={`flex-col relative ${styles['section_3']}`}>
            <img
              className={`self-end ${styles['image_7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c35ce8106ef5e10019fac066726824d0.png"
            />
            <div className={`flex-col self-stretch mt-58`}>
              <div className={`flex-col items-start`}>
                <span className={`${styles['font']} ${styles['text_4']}`}>Toshiba Tv</span>
                <img
                  className={`${styles['image_8']} ${styles['mt-13']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2e9ff8c88bed14dc2bfbd8775c7c2c41.png"
                />
              </div>
              <div className={`flex-row justify-between items-center ${styles['group_8']} mt-24`}>
                <span className={`${styles['font']}`}>¥35250</span>
                <img
                  className={`${styles['image_9']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=aac5a9c7c4b69c808bca680ff3ca38e7.png"
                />
              </div>
            </div>
          </div>
          <img
            className={`${styles['image_5']} ${styles['pos_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f91a869bd0807b752c51c217351285e9.png"
          />
        </div>
        <div className={`flex-col ${styles['section_4']} ${styles['pos_7']}`}>
          <img
            className={`shrink-0 self-center ${styles['image_10']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=32c482560001eeb26ee6116f6d783f88.png"
          />
          <img
            className={`shrink-0 ${styles['image_6']} ${styles['pos_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5bd3dfc26e610344aa8bfaac90b26073.png"
          />
          <div className={`flex-col items-start self-stretch relative ${styles['group_11']}`}>
            <span className={`${styles['font']} ${styles['text_6']}`}>Table Lamp</span>
            <img
              className={`${styles['image_12']} ${styles['mt-11']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=be69c2545a3ddafd8037268b81e0bb4e.png"
            />
          </div>
          <div className={`flex-row justify-between items-center self-stretch relative ${styles['mt-39']}`}>
            <span className={`${styles['font']}`}>¥550</span>
            <img
              className={`${styles['image_13']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=665afd87bdce9af9566aaf2635554e09.png"
            />
          </div>
        </div>
        <div className={`flex-col ${styles['section_5']} ${styles['pos_21']}`}>
          <img
            className={`shrink-0 self-stretch ${styles['image_11']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=da4b6414c514b6b52c7c3ec3e499265e.png"
          />
          <img
            className={`shrink-0 ${styles['image_6']} ${styles['pos_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4dcf6df60b9a50d5d437346adee2a60b.png"
          />
          <div className={`flex-col self-stretch relative ${styles['group_14']}`}>
            <div className={`flex-row justify-center self-stretch relative`}>
              <span className={`${styles['font']} ${styles['text_7']} ${styles['pos_9']}`}>Wood</span>
              <span className={`${styles['font']} ${styles['text_8']}`}>Table</span>
            </div>
            <img
              className={`self-start ${styles['image_12']} ${styles['image_1']} mt-14`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6bbdcdf7f9c9093b40742f6b476bc7a2.png"
            />
          </div>
          <span className={`self-start relative ${styles['font']} ${styles['text_9']}`}>¥905</span>
          <img
            className={`shrink-0 ${styles['image_14']} ${styles['pos_11']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e6b0be774930830e79fdf806873f3471.png"
          />
        </div>
      </div>
      <div className={`flex-col justify-start items-center relative ${styles['group_12']}`}>
        <div className={`flex-col justify-start items-center relative ${styles['image-wrapper_4']}`}>
          <img
            className={`${styles['image_16']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d2606cf25a68a529557df7243bc20abb.png"
          />
        </div>
        <img
          className={`shrink-0 ${styles['image_15']} ${styles['pos_1']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=40294ba1c5d29f5cd5f1d475354f6abd.png"
        />
        <img
          className={`shrink-0 ${styles['image_21']} ${styles['pos_16']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6de2e55b77632ace004bf21e12b7e475.png"
        />
        <img
          className={`shrink-0 ${styles['image_17']} ${styles['pos_12']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d6dd81a3c20c2533c16ad1d6cd5fa367.png"
        />
        <img
          className={`shrink-0 ${styles['image_18']} ${styles['pos_13']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3a1b3da3d45936c130ea584e649786a9.png"
        />
        <img
          className={`shrink-0 ${styles['image_20']} ${styles['pos_15']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2fbc5ed0a258c728017da77364f832d7.png"
        />
        <img
          className={`shrink-0 ${styles['image_19']} ${styles['pos_14']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=89336c2bed02b8092ac8e1c4ead40b3e.png"
        />
      </div>
    </div>
  );
}

Products_130_2057.defaultProps = { className: '' };