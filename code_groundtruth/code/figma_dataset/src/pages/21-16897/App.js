import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Page_07_B_Info_Doctors_21_16897(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start ${styles['section']}`}>
        <div className={`flex-col ${styles['section_2']}`}>
          <div className={`flex-row justify-between`}>
            <div className={`flex-row items-center`}>
              <img
                className={`${styles['image_4']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=248d2b7bedb9b973e424151c0f038940.png"
              />
              <div className={`flex-row items-center ${styles['section_3']}`}>
                <img
                  className={`shrink-0 ${styles['image_5']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b8301eeff14e9a011226a7c12b24bbd9.png"
                />
                <span className={`${styles['font']} ${styles['text']} ${styles['text_2']} ${styles['ml-7']}`}>
                  Schedule
                </span>
              </div>
              <img
                className={`${styles['image']} ${styles['image_1']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ff6e6307a02c203802783293c2d65ffc.png"
              />
              <img
                className={`${styles['image']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b4e7f257c0f2db90c3d34dceaa8cb763.png"
              />
              <img
                className={`${styles['image']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d52779050bbc2ac94aaf97feb435a25f.png"
              />
            </div>
            <div className={`flex-row`}>
              <img
                className={`${styles['image_2']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=44ffa7ac156600ac6577052632abd9c8.png"
              />
              <img
                className={`${styles['image_3']} ml-2`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0479797700146cfee4982c67440da8d3.png"
              />
            </div>
          </div>
          <div className={`flex-row items-center ${styles['group_2']} ${styles['mt-31']}`}>
            <img
              className={`shrink-0 ${styles['image_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c39d7576aea8cd2e9fa10c1f1aa44ac4.png"
            />
            <div className={`flex-col items-start flex-1 ml-10`}>
              <span className={`${styles['text_3']}`}>Dr. Jacob Lopez, M.D.</span>
              <span className={`${styles['text_4']}`}>Surgical Dermatology</span>
              <div className={`flex-row ${styles['equal-division']}`}>
                <div
                  className={`flex-row justify-center items-center ${styles['equal-division-item_7']} ${styles['section_4']}`}
                >
                  <img
                    className={`${styles['image_7']} ${styles['pos']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=387a4dc411a38dfbed658a199dd69e2a.png"
                  />
                  <span className={`${styles['font']} ${styles['text_5']}`}>5</span>
                </div>
                <div
                  className={`flex-row justify-evenly items-center ${styles['equal-division-item_1']} ${styles['equal-division-item']} ml-6`}
                >
                  <img
                    className={`${styles['image_8']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=38eeb8160b4ff3c6c6ab59c3f0e27f0c.png"
                  />
                  <span className={`${styles['font']}`}>40</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col relative ${styles['group_3']}`}>
        <div className={`flex-row`}>
          <div className={`flex-row shrink-0 relative ${styles['section_5']}`}>
            <img
              className={`self-center ${styles['image_9']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9ee03657b2dcfeed6f0f62324bc08e4b.png"
            />
            <span className={`self-start ${styles['text_6']}`}>15 years</span>
            <span className={`${styles['font_3']} ${styles['text_8']} ${styles['pos_2']}`}>experience</span>
          </div>
          <div className={`flex-row items-center flex-1 ${styles['section_6']} ml-4`}>
            <img
              className={`shrink-0 ${styles['image_10']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5d5baa34a176657cfecf1d10add35bca.png"
            />
            <span className={`${styles['font_2']} ${styles['text_7']} ml-4`}>Mon-Sat / 9:00AM - 5:00PM</span>
          </div>
        </div>
        <div className={`flex-col justify-start ${styles['section_7']}`}>
          <div className={`${styles['group_4']}`}>
            <span className={`${styles['font_3']} ${styles['text_9']}`}>Focus:</span>
            <span className={`${styles['font_3']}`}>
              {' '}
              The impact of hormonal imbalances on skin conditions, specializing in acne, hirsutism, and other skin
              disorders.
            </span>
          </div>
        </div>
        <div className={`flex-col ${styles['group_5']}`}>
          <span className={`self-start ${styles['font_2']} ${styles['text']} ${styles['text_10']}`}>Profile</span>
          <div className={`self-stretch ${styles['divider']} ${styles['view']}`}></div>
          <span className={`self-stretch ${styles['font_3']} ${styles['text_11']}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </span>
          <div className={`self-stretch ${styles['divider']} ${styles['view_2']}`}></div>
          <span className={`self-start ${styles['font_2']} ${styles['text']} ${styles['text_12']}`}>Career Path</span>
          <div className={`self-stretch ${styles['divider']} ${styles['view_3']}`}></div>
          <span className={`self-stretch ${styles['font_3']} ${styles['text_13']}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </span>
          <div className={`self-stretch ${styles['divider']} ${styles['view_4']}`}></div>
          <span className={`self-start ${styles['font_2']} ${styles['text']} ${styles['text_14']}`}>Highlights</span>
          <div className={`self-stretch ${styles['divider']} ${styles['view_5']}`}></div>
          <span className={`self-stretch ${styles['font_3']} ${styles['text_15']}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo conseq uat.
          </span>
        </div>
      </div>
      <div className={`flex-col justify-start items-center ${styles['section_8']}`}>
        <div className={`flex-row`}>
          <img
            className={`${styles['equal-division-item_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=32163c36729e3e2856c83acb79fba34f.png"
          />
          <img
            className={`${styles['equal-division-item_4']} ${styles['ml-47']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9a8f0999b5f7fb7556db53ece297cd1e.png"
          />
          <img
            className={`${styles['equal-division-item_5']} ${styles['ml-47']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=290519311ed4a724f16dddc9ca2f8dfe.png"
          />
          <img
            className={`${styles['equal-division-item_6']} ${styles['ml-47']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f65f7d51325afa47cd073af5e08740dd.png"
          />
        </div>
      </div>
    </div>
  );
}

Page_07_B_Info_Doctors_21_16897.defaultProps = { className: '' };