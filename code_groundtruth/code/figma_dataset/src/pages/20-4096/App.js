import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Home_6_20_4096(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col relative ${styles['page']} ${props.className}`}>
      <div className={`flex-row relative ${styles['group']}`}>
        <img
          className={`${styles['image_3']} ${styles['pos_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f00603d8443717ebbb305fa623daf159.png"
        />
        <img
          className={`${styles['image_3']} ${styles['pos_3']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a4b6ad2e83dc55ba87938588f6b8680e.png"
        />
        <img
          className={`${styles['image_3']} ${styles['pos_4']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1ced13266c76823d08ed9d2378b3fd1b.png"
        />
        <img
          className={`${styles['image_3']} ${styles['pos_5']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=858fd429979949505e80beb19ba033df.png"
        />
        <span className={`${styles['font']} ${styles['text']} ${styles['pos_7']}`}>Happy</span>
        <span className={`${styles['font_2']} ${styles['text_2']} ${styles['pos_8']}`}>Calm</span>
        <span className={`${styles['font_2']} ${styles['pos_9']}`}>Manic</span>
        <span className={`${styles['font']} ${styles['pos_10']}`}>Angry</span>
        <img
          className={`${styles['image_4']} ${styles['pos_6']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0d56a5c51ef01cdbad5f69e9dc585589.png"
        />
      </div>
      <div className={`flex-row justify-between ${styles['section']} ${styles['pos']}`}>
        <img
          className={`self-center ${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=31816a71637f18aa1a60c21dfffe3d70.png"
        />
        <img
          className={`self-start ${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fb0f9fd6c703de89023b40061eee73f4.png"
        />
      </div>
      <div className={`flex-row relative ${styles['section_2']}`}>
        <div className={`flex-col flex-1 self-center`}>
          <span className={`self-stretch ${styles['font_3']} ${styles['text_3']}`}>1 on 1 Sessions</span>
          <span className={`self-stretch ${styles['font_4']} ${styles['text_4']}`}>
            Let’s open up to the things that matter the most{' '}
          </span>
          <div className={`flex-row items-center self-start ${styles['group_4']}`}>
            <span className={`${styles['font_5']} ${styles['text_5']}`}>Book Now</span>
            <img
              className={`${styles['image_8']} ml-2`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a8135567e69cdd843be8310943720c15.png"
            />
          </div>
        </div>
        <div className={`flex-col justify-start items-start self-start relative ${styles['group_3']} ml-18`}>
          <img
            className={`${styles['image_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7e11c005bdc93d2a79bd040934febe81.png"
          />
          <img
            className={`${styles['image_6']} ${styles['pos_12']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=35069362c125810cec5fc0eff5cf0a16.png"
          />
          <img
            className={`${styles['image_5']} ${styles['pos_11']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=28c190f9471803bd4a848be784db322c.png"
          />
        </div>
      </div>
      <div className={`flex-col relative ${styles['group_1']}`}>
        <div className={`flex-row`}>
          <div
            className={`flex-row justify-center items-center ${styles['equal-division-item_1']} ${styles['section_3']}`}
          >
            <img
              className={`${styles['image_9']} ${styles['pos_13']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=706fdb7abc1d590f63c5145a042da5fd.png"
            />
            <span className={`${styles['font_6']} ${styles['text_6']}`}>Journal</span>
          </div>
          <div
            className={`flex-row items-center ${styles['equal-division-item_2']} ${styles['equal-division-item']} ${styles['ml-15']}`}
          >
            <img
              className={`${styles['image_10']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7770d52de6ed0b76aea8c760a3118826.png"
            />
            <span className={`${styles['font_6']} ${styles['text_7']} ml-18`}>Library</span>
          </div>
        </div>
        <div className={`flex-row items-center ${styles['section_4']} ${styles['mt-15']}`}>
          <span className={`flex-1 ${styles['text_8']}`}>
            “It is better to conquer yourself than to win a thousand battles”
          </span>
          <img
            className={`shrink-0 ${styles['image_11']} ${styles['ml-13']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9d0b0309e3ba74011ef5085d16e22926.png"
          />
        </div>
      </div>
      <div className={`flex-col justify-start items-start relative ${styles['group_5']}`}>
        <div className={`${styles['section_5']}`}></div>
        <img
          className={`${styles['image_12']} ${styles['pos_14']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3523a1bea8b8f8ae04cb2531fd4e642e.png"
        />
        <span className={`${styles['font_3']} ${styles['text_9']} ${styles['pos_15']}`}>Plan Expired</span>
        <span className={`${styles['font_4']} ${styles['text_10']} ${styles['pos_17']}`}>
          Get back chat access and session credits
        </span>
        <span className={`${styles['font_5']} ${styles['text_11']} ${styles['pos_19']}`}>Buy More</span>
        <img
          className={`${styles['image_14']} ${styles['pos_18']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1fcb835a2276c05589f446dd98c816a4.png"
        />
        <img
          className={`${styles['image_13']} ${styles['pos_16']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ce88ed03cb9816b8fc5bc4ce45278bd2.png"
        />
      </div>
      <div className={`flex-col ${styles['section_6']} ${styles['pos_20']}`}>
        <img
          className={`self-start ${styles['image_15']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5bcad1b003e18eab0ba7178bcb528c4e.png"
        />
        <div className={`flex-row justify-between items-center self-stretch ${styles['mt-9']}`}>
          <img
            className={`${styles['image_17']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=76832d410ddd8d158b59e44289adc3f9.png"
          />
          <img
            className={`${styles['image_16']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=97fef03b6bc346f68033f1ea41fdc370.png"
          />
          <img
            className={`${styles['image_18']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0a315bdce9f0ce0c130bc6a9c3b8f894.png"
          />
          <img
            className={`${styles['image_19']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0c6fe9934f40993ade1024eda858a735.png"
          />
        </div>
      </div>
    </div>
  );
}

Home_6_20_4096.defaultProps = { className: '' };