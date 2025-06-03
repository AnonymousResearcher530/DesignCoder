import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Home_5_20_3947(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col relative ${styles['page']} ${props.className}`}>
      <div className={`flex-col ${styles['group_2']}`}>
        <div className={`flex-row justify-between items-center self-stretch`}>
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=31816a71637f18aa1a60c21dfffe3d70.png"
          />
          <div className={`flex-col justify-start items-start relative ${styles['group_3']}`}>
            <img
              className={`${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d1c466ed3a4dd7bf5f0e19f93db61225.png"
            />
            <div className={`flex-col justify-start items-center ${styles['text-wrapper']} ${styles['pos']}`}>
              <span className={`${styles['font']} ${styles['text']}`}>3</span>
            </div>
          </div>
        </div>
        <div className={`self-start ${styles['group_4']} mt-16`}>
          <span className={`${styles['font_2']}`}>Good Afternoon</span>
          <span className={`${styles['font_2']} ${styles['text_2']}`}>, </span>
          <span className={`${styles['font_2']} ${styles['text_3']}`}>Sarina!</span>
        </div>
      </div>
      <div className={`flex-col ${styles['group_5']} ${styles['view']}`}>
        <span className={`self-start ${styles['text_4']}`}>How are you feeling today ?</span>
        <div className={`flex-row self-stretch ${styles['group_5']} ${styles['mt-21']}`}>
          <div className={`flex-col items-center shrink-0`}>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f00603d8443717ebbb305fa623daf159.png"
            />
            <span className={`${styles['font_3']} ${styles['text_5']} mt-10`}>Happy</span>
          </div>
          <div className={`flex-col items-center shrink-0 ${styles['group_6']} ml-24`}>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=964ac957df6d94925d4b94b26bcd18a6.png"
            />
            <span className={`${styles['font']} ${styles['text_6']} ${styles['mt-9']}`}>Calm</span>
          </div>
          <div className={`flex-col items-center shrink-0 ${styles['group_7']} ml-24`}>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1ced13266c76823d08ed9d2378b3fd1b.png"
            />
            <span className={`${styles['font']} mt-10`}>Manic</span>
          </div>
          <div className={`flex-col items-center shrink-0 ml-24`}>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=858fd429979949505e80beb19ba033df.png"
            />
            <span className={`${styles['font_3']} mt-10`}>Angry</span>
          </div>
          <img
            className={`shrink-0 ${styles['image_4']} ml-24`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0d56a5c51ef01cdbad5f69e9dc585589.png"
          />
        </div>
      </div>
      <div className={`flex-col items-start ${styles['section']}`}>
        <span className={`${styles['font_4']} ${styles['text_7']}`}>1 on 1 Sessions</span>
        <div className={`flex-col justify-start items-start relative ${styles['group_8']} mt-2`}>
          <span className={`${styles['text_8']}`}>Let’s open up to the things that matter the most </span>
          <div className={`flex-col ${styles['group_9']} ${styles['pos_2']}`}>
            <div className={`flex-col justify-start items-end relative ${styles['group_10']}`}>
              <img
                className={`${styles['image_7']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7e11c005bdc93d2a79bd040934febe81.png"
              />
              <img
                className={`${styles['image_6']} ${styles['pos_4']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=35069362c125810cec5fc0eff5cf0a16.png"
              />
              <img
                className={`${styles['image_5']} ${styles['pos_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=28c190f9471803bd4a848be784db322c.png"
              />
            </div>
            <div className={`flex-col justify-start items-end relative ${styles['group_11']}`}>
              <img
                className={`${styles['image_9']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7571e1209102366bc5e04c24a519743c.png"
              />
              <div className={`flex-row items-center ${styles['group_12']} ${styles['pos_5']}`}>
                <span className={`${styles['text_9']}`}>Book Now</span>
                <img
                  className={`${styles['image_8']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=97006003e599e59a08e0c074530344c0.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['group_13']}`}>
        <div className={`flex-row ${styles['equal-division']}`}>
          <div
            className={`flex-row justify-center items-center ${styles['equal-division-item_1']} ${styles['section_2']}`}
          >
            <img
              className={`${styles['image_10']} ${styles['pos_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f05532e9fea3ae1847da605496e68666.png"
            />
            <span className={`${styles['font_5']} ${styles['text_10']}`}>Journal</span>
          </div>
          <div
            className={`flex-row items-center ${styles['equal-division-item_2']} ${styles['equal-division-item']} ${styles['ml-15']}`}
          >
            <img
              className={`${styles['image_11']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=62350907e0a48a2e2df8f974c86a3c13.png"
            />
            <span className={`${styles['font_5']} ${styles['text_11']} ${styles['ml-15']}`}>Library</span>
          </div>
        </div>
        <div className={`flex-row items-center ${styles['section_3']} ${styles['mt-15']}`}>
          <span className={`flex-1 ${styles['text_12']}`}>
            “It is better to conquer yourself than to win a thousand battles”
          </span>
          <img
            className={`shrink-0 ${styles['image_12']} ${styles['ml-13']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9d0b0309e3ba74011ef5085d16e22926.png"
          />
        </div>
      </div>
      <div className={`flex-col justify-start ${styles['group_1']}`}>
        <div className={`flex-col justify-start items-start ${styles['text-wrapper_2']}`}>
          <span className={`${styles['font_4']} ${styles['text_13']}`}>Plan Expired</span>
        </div>
      </div>
      <div className={`flex-row justify-between items-center ${styles['section_4']} ${styles['pos_7']}`}>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_14']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=76832d410ddd8d158b59e44289adc3f9.png"
          />
        </div>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_13']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=97fef03b6bc346f68033f1ea41fdc370.png"
          />
        </div>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_15']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0a315bdce9f0ce0c130bc6a9c3b8f894.png"
          />
        </div>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_16']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b1aa2e918cf75da9f30e43b768e0e92f.png"
          />
        </div>
      </div>
    </div>
  );
}

Home_5_20_3947.defaultProps = { className: '' };