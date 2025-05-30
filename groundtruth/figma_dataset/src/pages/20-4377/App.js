import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Community_20_4377(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col ${styles['group']}`}>
        <div className={`flex-row justify-between items-center self-stretch`}>
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=31816a71637f18aa1a60c21dfffe3d70.png"
          />
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=085fab2ee2948af309e4e5183fd7ef79.png"
          />
        </div>
        <span className={`self-start ${styles['text']} ${styles['mt-19']}`}>Wellness Hub</span>
      </div>
      <div className={`flex-col ${styles['group_2']}`}>
        <div className={`flex-row justify-evenly`}>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
            <span className={`${styles['text_2']}`}>Trending</span>
          </div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']}`}>
            <span className={`${styles['font']} ${styles['text_3']}`}>Relationship</span>
          </div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_3']}`}>
            <span className={`${styles['font']} ${styles['text_4']}`}>Self Care</span>
          </div>
        </div>
        <div className={`flex-col ${styles['group_3']} mt-4`}>
          <div className={`flex-col self-stretch`}>
            {data.items.map((item, index) => (
              <div className={`flex-col ${styles['list-item_1']}`} key={index}>
                <div className={`flex-row`}>
                  <img
                    className={`shrink-0 self-start ${styles['image_3']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8bea992c21edb9fb7394433454f04617.png"
                  />
                  <div className={`flex-col shrink-0 ${styles['group_4']} ${styles['view']} ml-18`}>
                    <div className={`flex-row items-center`}>
                      <span className={`${styles['font_2']} ${styles['text_12']}`}>Coal Dingo</span>
                      <span className={`${styles['font_3']} ${styles['text_6']} ${styles['text_7']} ml-6`}>
                        just now
                      </span>
                    </div>
                    <span className={`${styles['font_4']} ${styles['text_1']} mt-6`}>
                      Is there a therapy which can cure crossdressing & bdsm compulsion?
                    </span>
                  </div>
                </div>
                <div className={`flex-row justify-between items-center ${styles['group_5']} ${styles['mt-17']}`}>
                  <div className={`flex-row items-center`}>
                    <div className={`flex-row items-center`}>
                      <img
                        className={`shrink-0 ${styles['image_4']}`}
                        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7814c6e93afb19276f9ca6b81b220567.png"
                      />
                      <span className={`${styles['font_5']} ${styles['ml-9']}`}>2</span>
                    </div>
                    <img
                      className={`${styles['image_6']} ml-36`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8dad70bdbc96bf5ae21971f97ac6e3ba.png"
                    />
                  </div>
                  <img
                    className={`${styles['image_5']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=dde6e04bc3a5fa692c8ac15b90ed0091.png"
                  />
                </div>
              </div>
            ))}
          </div>
          <img
            className={`shrink-0 self-end ${styles['image_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d46df2d52a3f88ab5ec9fb32044940dd.png"
          />
        </div>
      </div>
      <div className={`flex-row justify-between items-center ${styles['section']}`}>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_9']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=76832d410ddd8d158b59e44289adc3f9.png"
          />
        </div>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_8']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=97fef03b6bc346f68033f1ea41fdc370.png"
          />
        </div>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_10']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7c565348d0d4c69b9361a3fbb223da84.png"
          />
        </div>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']} ${styles['view_5']}`}>
          <img
            className={`${styles['image_11']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0c6fe9934f40993ade1024eda858a735.png"
          />
        </div>
      </div>
    </div>
  );
}

Community_20_4377.defaultProps = { className: '' };