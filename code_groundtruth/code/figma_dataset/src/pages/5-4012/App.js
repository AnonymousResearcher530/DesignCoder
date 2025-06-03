import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function High_Fidelity_Detail_5_4012(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col relative ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bd475e0520bc92143f08a1790f6c7816.png"
        />
        <span className={`${styles['font']} ${styles['text']}`}>Detail</span>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5d731fd0ed4beb06c878a54710e38591.png"
        />
      </div>
      <div className={`flex-col ${styles['group']}`}>
        <div className={`flex-col justify-start items-end ${styles['image-wrapper']}`}>
          <img
            className={`shrink-0 ${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=14689da691c73734712123f1acf12180.png"
          />
        </div>
        <div className={`flex-row justify-center ${styles['group_2']}`}>
          <div className={`flex-row items-center ${styles['section_1']}`}>
            <img
              className={`shrink-0 ${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=07f3a2dd2cf556cb32fdfb4702779a1a.png"
            />
            <span className={`${styles['font_2']} ml-8`}>Free Wifi</span>
          </div>
          <div className={`flex-row items-center ${styles['section']} ml-12`}>
            <img
              className={`shrink-0 ${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2afbde72b075e498f7a5c74edfbe3799.png"
            />
            <span className={`${styles['font_2']} ${styles['text_2']} ${styles['ml-7']}`}>Free Breakfast</span>
          </div>
          <div className={`flex-row items-center ${styles['section_3']} ml-12`}>
            <img
              className={`shrink-0 ${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ae1acfde377b265de5a65c4e3406abbe.png"
            />
            <span className={`${styles['font_2']} ${styles['text_3']} ${styles['ml-7']}`}>5.0</span>
          </div>
        </div>
      </div>
      <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
        <span className={`${styles['text_12']}`}>Booking Now</span>
      </div>
      <div className={`flex-col relative ${styles['group_3']}`}>
        <div className={`flex-row justify-between items-center`}>
          <span className={`${styles['font']} ${styles['text_4']}`}>The Aston Vill Hotel</span>
          <div className={`${styles['group_4']}`}>
            <span className={`${styles['text_5']}`}>$200.7</span>
            <span className={`${styles['font_3']} ${styles['text_6']}`}>/night</span>
          </div>
        </div>
        <div className={`flex-row items-center ${styles['mt-11']}`}>
          <img
            className={`${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=378817fb3307d5cd26e768f9a02111d4.png"
          />
          <span className={`${styles['font_2']} ${styles['text_7']} ${styles['ml-9']}`}>
            Alice Springs NT 0870, Australia
          </span>
        </div>
      </div>
      <div className={`flex-col ${styles['group_5']}`}>
        <span className={`self-start ${styles['font_3']} ${styles['text_8']}`}>Description</span>
        <div className={`self-stretch ${styles['group_6']}`}>
          <span className={`${styles['text_9']}`}>
            Aston Hotel, Alice Springs NT 0870, Australia is a modern hotel. elegant 5 star hotel overlooking the sea.
            perfect for a romantic, charming{' '}
          </span>
          <span className={`${styles['font_2']} ${styles['text_10']}`}>Read More. . .</span>
        </div>
        <span className={`self-start ${styles['font_3']} ${styles['text_11']}`}>Preview</span>
      </div>
      <div className={`flex-col ${styles['group_7']} ${styles['pos']}`}>
        <div className={`flex-row`}>
          <img
            className={`${styles['image_5']} ${styles['equal-division-item']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=dca6111c56b88adfea959c3a7e5caf1d.png"
          />
          <img
            className={`${styles['image_5']} ${styles['equal-division-item']} ml-16`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bd57a87170310a8364fccd3b333464bb.png"
          />
          <img
            className={`${styles['image_5']} ${styles['equal-division-item']} ml-16`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bf4f782fee8773dbdb25f6f82f9ddee8.png"
          />
        </div>
        <div className={`shrink-0 relative ${styles['section_2']}`}></div>
      </div>
    </div>
  );
}

High_Fidelity_Detail_5_4012.defaultProps = { className: '' };