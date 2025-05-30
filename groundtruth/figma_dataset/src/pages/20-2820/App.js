import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Guests_20_2820(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row ${styles['group']}`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c9b01b8ceb7b833e107bf1230ce0dd0a.png"
        />
        <span className={`${styles['font']} ${styles['text']} ${styles['ml-104']}`}>Guests</span>
      </div>
      <div className={`flex-row justify-between items-center ${styles['section']}`}>
        <span className={`${styles['font_2']} ${styles['text_2']}`}>Search for people and groups</span>
        <img
          className={`${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=556fe37b2c36ded260010e65dc9dc692.png"
        />
      </div>
      <div className={`flex-col ${styles['group_1']}`}>
        <div className={`flex-row justify-between ${styles['group_2']}`}>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
            <span className={`${styles['font_3']} ${styles['text_3']}`}>All</span>
          </div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']}`}>
            <span className={`${styles['font_3']} ${styles['text_4']}`}>Co-hosts</span>
          </div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_3']}`}>
            <span className={`${styles['font_3']} ${styles['text_5']}`}>Speakers</span>
          </div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_4']}`}>
            <span className={`${styles['font_3']} ${styles['text_6']}`}>Listening</span>
          </div>
        </div>
        <div className={`flex-col ${styles['group_3']}`}>
          <span className={`self-start ${styles['font']} ${styles['text_7']}`}>Host</span>
          <div className={`flex-row items-center self-stretch mt-22`}>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8286738f22d92ccbbcf54b5fc35e9d35.png"
            />
            <div className={`flex-col items-start flex-1 ml-8`}>
              <span className={`${styles['font_4']} ${styles['text_8']}`}>Louis Hamilton</span>
              <span className={`${styles['font_5']} ${styles['mt-7']}`}>Singer</span>
            </div>
          </div>
        </div>
        <div className={`flex-col ${styles['group_4']}`}>
          <span className={`self-start ${styles['font']} ${styles['text_9']}`}>Co-hosts</span>
          <div className={`flex-row items-center self-stretch ${styles['mt-15']}`}>
            <span className={`${styles['font_2']} ${styles['text_10']} ${styles['text_1']}`}>8 speakers</span>
            <span className={`${styles['font_6']} ${styles['text_10']} ${styles['ml-7']}`}>•</span>
            <span className={`${styles['font_2']} ${styles['text_10']} ${styles['text_23']} ${styles['ml-7']}`}>
              2 open spots
            </span>
          </div>
          <div className={`flex-col self-stretch ${styles['mt-15']}`}>
            <div className={`flex-row items-center`}>
              <img
                className={`${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8286738f22d92ccbbcf54b5fc35e9d35.png"
              />
              <div className={`flex-col items-start ml-8`}>
                <span className={`${styles['font_4']} ${styles['text_24']}`}>Louis Hamilton</span>
                <span className={`${styles['font_5']} ${styles['mt-9']}`}>Singer</span>
              </div>
            </div>
            <div className={`flex-row items-center mt-16`}>
              <img
                className={`${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7d9d766405e8d10ec4eb9a8c35ea6f38.png"
              />
              <div className={`flex-col items-start ml-8`}>
                <span className={`${styles['font_4']} ${styles['text_25']}`}>Louis Hamilton</span>
                <span className={`${styles['font_5']} ${styles['mt-9']}`}>Singer</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex-col ${styles['group_5']}`}>
          <span className={`self-start ${styles['font']} ${styles['text_15']}`}>Speakers</span>
          <div className={`flex-row items-center self-stretch ${styles['group_6']}`}>
            <span className={`${styles['font_2']} ${styles['text_10']} ${styles['text_11']}`}>8 speakers</span>
            <span className={`${styles['font_6']} ${styles['text_10']} ${styles['ml-7']}`}>•</span>
            <span className={`${styles['font_2']} ${styles['text_10']} ${styles['text_12']} ${styles['ml-7']}`}>
              2 open spots
            </span>
          </div>
          <div className={`flex-col self-stretch ${styles['group_7']}`}>
            <div className={`flex-row items-center`}>
              <img
                className={`${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8286738f22d92ccbbcf54b5fc35e9d35.png"
              />
              <div className={`flex-col items-start ml-8`}>
                <span className={`${styles['font_4']} ${styles['text_13']}`}>Louis Hamilton</span>
                <span className={`${styles['font_5']} ${styles['mt-9']}`}>Singer</span>
              </div>
            </div>
            <div className={`flex-row items-center mt-16`}>
              <img
                className={`${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7d9d766405e8d10ec4eb9a8c35ea6f38.png"
              />
              <div className={`flex-col items-start ml-8`}>
                <span className={`${styles['font_4']} ${styles['text_14']}`}>Louis Hamilton</span>
                <span className={`${styles['font_5']} ${styles['mt-9']}`}>Singer</span>
              </div>
            </div>
            <div className={`flex-row items-center mt-16`}>
              <img
                className={`${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3c942227093ee71265d54d23abd317d2.png"
              />
              <div className={`flex-col items-start ml-8`}>
                <span className={`${styles['font_4']} ${styles['text_16']}`}>Louis Hamilton</span>
                <span className={`${styles['font_5']} ${styles['mt-9']}`}>Singer</span>
              </div>
            </div>
            <div className={`flex-row items-center mt-16`}>
              <img
                className={`${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7d9d766405e8d10ec4eb9a8c35ea6f38.png"
              />
              <div className={`flex-col items-start ml-8`}>
                <span className={`${styles['font_4']} ${styles['text_17']}`}>Louis Hamilton</span>
                <span className={`${styles['font_5']} ${styles['mt-9']}`}>Singer</span>
              </div>
            </div>
            <div className={`flex-row items-center mt-16`}>
              <img
                className={`${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8286738f22d92ccbbcf54b5fc35e9d35.png"
              />
              <div className={`flex-col items-start ml-8`}>
                <span className={`${styles['font_4']} ${styles['text_18']}`}>Louis Hamilton</span>
                <span className={`${styles['font_5']} ${styles['mt-9']}`}>Singer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Guests_20_2820.defaultProps = { className: '' };