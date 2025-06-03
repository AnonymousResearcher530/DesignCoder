import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function IPhone_13_13_Pro_5_125_9495(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col`}>
        <div className={`flex-col ${styles['group']}`}>
          <div className={`flex-row justify-between items-center self-stretch ${styles['group_1']}`}>
            <span className={`${styles['font']} ${styles['text']}`}>Listening from</span>
            <img
              className={`${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=157c7e7258a55a81c8114942f6159475.png"
            />
          </div>
          <span className={`self-start ${styles['text_2']} mt-6`}>Make your Mood.</span>
        </div>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=188c82b2b50f1128f5bf121132d995d1.png"
          />
        </div>
        <div className={`flex-row justify-between items-center ${styles['section']}`}>
          <div className={`flex-col items-start`}>
            <span className={`${styles['text_3']}`}>Podcast Title Here</span>
            <span className={`${styles['font']} ${styles['text_4']} mt-12`}>Podcast Creator</span>
          </div>
          <img
            className={`${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=dffa2312ec5599f6667f436fc8820d66.png"
          />
          <img
            className={`${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f2a8b1280ba6b2cb5759d21d7eda0f8b.png"
          />
          <img
            className={`${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2fdf0649f1d4904616f29da0344f3060.png"
          />
        </div>
        <div className={`flex-row justify-between ${styles['group_2']}`}>
          <span className={`${styles['font_2']} ${styles['text_5']}`}>0:11</span>
          <span className={`${styles['font_2']} ${styles['text_6']}`}>- 23:02</span>
        </div>
      </div>
      <div className={`flex-col ${styles['group_3']}`}>
        <div className={`flex-row justify-between items-center`}>
          <span className={`${styles['text_7']}`}>Transcript</span>
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8abcfd5269dbef15e71796c18cb6b719.png"
          />
        </div>
        <div className={`flex-col ${styles['mt-5']}`}>
          <span className={`${styles['font']}`}>
            Lorem ipsum dolor sit amet, consectetur. You need to decorate the football player of the real estate market.
            The children, however, read it with hatred, but it was suspended in its entirety. Purus mauris purus nibh
            vitae at
            <br />
            <br />
          </span>
          <span className={`${styles['font']} ${styles['text_8']}`}>
            It is necessary to decorate the pillow at the tincidunt. Ultricies does not have a free course. I twist the
            urn like a fish from the mouth of life. Tomorrow's news is always the news of CNN Morbi.
          </span>
        </div>
      </div>
      <div className={`flex-row ${styles['equal-division']} ${styles['section_2']}`}>
        <div className={`flex-col items-center ${styles['equal-division-item_1']}`}>
          <img
            className={`${styles['image_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8191cb89dc3be8539086f5386803a187.png"
          />
          <span className={`${styles['font_2']} ${styles['text_9']} ${styles['mt-9']}`}>Like</span>
        </div>
        <div className={`flex-col items-center ${styles['equal-division-item_2']} ${styles['equal-division-item']}`}>
          <img
            className={`${styles['image_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=64737f11ae93c75980ce899eaea541c4.png"
          />
          <span className={`${styles['font_2']} ${styles['text_10']} ${styles['mt-9']}`}>Comment</span>
        </div>
        <div className={`flex-col items-center ${styles['equal-division-item_3']} ${styles['group_6']}`}>
          <img
            className={`${styles['image_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8191cb89dc3be8539086f5386803a187.png"
          />
          <span className={`${styles['font_2']} ${styles['text_11']} ${styles['mt-9']}`}>Share</span>
        </div>
        <div className={`flex-col items-center ${styles['group_7']} ${styles['equal-division-item_1']}`}>
          <img
            className={`${styles['image_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=64737f11ae93c75980ce899eaea541c4.png"
          />
          <span className={`${styles['font_2']} ${styles['mt-9']}`}>Add</span>
        </div>
      </div>
    </div>
  );
}

IPhone_13_13_Pro_5_125_9495.defaultProps = { className: '' };