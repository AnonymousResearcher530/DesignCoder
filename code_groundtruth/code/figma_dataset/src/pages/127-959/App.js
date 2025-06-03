import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Home_1_127_959(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center ${styles['group']}`}>
        <div className={`flex-col items-start`}>
          <span className={`${styles['text']} ${styles['text_2']}`}>Welcome Back,</span>
          <span className={`${styles['font']} ${styles['text_3']} ${styles['mt-7']}`}>Barly Vallendito</span>
        </div>
        <div className={`flex-row items-center`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6aee57260d652b1e83509d28a90f2fe3.png"
          />
          <img
            className={`${styles['image']} ${styles['ml-19']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2453f2743c3f2051606b6a8f5e371a33.png"
          />
        </div>
      </div>
      <div className={`flex-col ${styles['group_1']}`}>
        <div className={`flex-row items-center self-stretch`}>
          <div className={`flex-col justify-start flex-1 relative ${styles['section_2']}`}>
            <div className={`${styles['section_3']}`}></div>
            <span className={`${styles['font']} ${styles['text_5']} ${styles['pos']}`}>Balance</span>
            <img
              className={`${styles['image_3']} ${styles['pos_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d0689a5de35ea97a4bd8076a09d1ab6f.png"
            />
            <span className={`${styles['font_4']} ${styles['text_7']} ${styles['pos_3']}`}>Today, 08 Sept 2019</span>
            <span className={`${styles['font_5']} ${styles['text_9']} ${styles['pos_4']}`}>$6,420.00</span>
            <span className={`${styles['font_4']} ${styles['text_11']} ${styles['pos_6']}`}>
              up by 2% from last month
            </span>
            <img
              className={`${styles['image_4']} ${styles['pos_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f7d26757364f72965d11b5fb341ebf85.png"
            />
          </div>
          <div className={`flex-col shrink-0 ${styles['section_4']} ml-16`}>
            <div className={`flex-col items-start`}>
              <span className={`${styles['font_2']} ${styles['text_4']}`}>Balance</span>
              <span className={`${styles['font_3']} ${styles['text']} ${styles['text_6']} ${styles['mt-11']}`}>
                Today, 08 Sept 2019
              </span>
            </div>
            <div className={`flex-col items-start mt-40`}>
              <span className={`${styles['font_5']} ${styles['text_8']}`}>$4,420.00</span>
              <span className={`${styles['font_3']} ${styles['text_10']} mt-12`}>Down by 2% from last month</span>
            </div>
          </div>
        </div>
        <div className={`flex-row self-start ${styles['group_2']} mt-22`}>
          <div className={`flex-1 ${styles['section_5']}`}></div>
          <img
            className={`shrink-0 ${styles['image_5']} ${styles['ml-5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c11ea1c01fac77dce35ffbffb020e38e.png"
          />
        </div>
      </div>
      <div className={`flex-col ${styles['group_3']}`}>
        <div className={`flex-row justify-between ${styles['group_4']}`}>
          <span className={`${styles['font_2']} ${styles['text_12']}`}>Recent Transactions</span>
          <span className={`${styles['font_2']} ${styles['text_13']}`}>See all</span>
        </div>
        <div className={`flex-col ${styles['list']}`}>
          {data.items.map((item, index) => (
            <div className={`flex-row justify-between items-center ${styles['list-item']}`} key={index}>
              <div className={`flex-row items-center`}>
                <img
                  className={`${styles['image_6']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=280eb07b5c28e731b0cd2a17f7402a4a.png"
                />
                <div className={`flex-col items-start ${styles['ml-15']}`}>
                  <span className={`${styles['font_6']} ${styles['text_14']}`}>Dropbox Plan</span>
                  <span className={`${styles['font_3']} ${styles['text']} ${styles['text_15']} ${styles['mt-7']}`}>
                    Subscription
                  </span>
                </div>
              </div>
              <div className={`flex-col items-center`}>
                <span className={`${styles['font_7']}`}>- $144.00</span>
                <span className={`${styles['font_3']} ${styles['text']} ${styles['mt-9']}`}>18 Sept 2019</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`flex-col justify-start items-center ${styles['section_6']}`}>
        <div className={`flex-row items-center`}>
          <img
            className={`${styles['equal-division-item']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=54ba35d8cb98cbfaf8403a4b8a97afc8.png"
          />
          <img
            className={`${styles['equal-division-item_2']} ml-80`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1099d9a24ba9b95b79b954c59d2c366c.png"
          />
          <img
            className={`${styles['equal-division-item_3']} ml-80`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4182c149d0ffeeeca547746441e5eb21.png"
          />
          <img
            className={`${styles['equal-division-item_4']} ml-80`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d85becd5cc7c1521584557b5ebb4e684.png"
          />
        </div>
      </div>
    </div>
  );
}

Home_1_127_959.defaultProps = { className: '' };