import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function My_orders_2_3_1829(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center ${styles['group_2']}`}>
        <span className={`${styles['text']}`}>9:41</span>
        <div className={`flex-row`}>
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=364e461d085e982fce4a823c014d357b.png"
          />
          <img
            className={`${styles['image_2']} ${styles['ml-7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b1263c43a068ef6c51d190ec03ec9f53.png"
          />
          <img
            className={`${styles['image_3']} ${styles['ml-7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4f7229042101da36d6463d12406b6f9e.png"
          />
        </div>
      </div>
      <div className={`flex-row justify-center items-center relative ${styles['group_3']}`}>
        <img
          className={`${styles['image_5']} ${styles['pos_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=87f01e2fe6882e370ba4599a7af9e4b9.png"
        />
        <span className={`${styles['font']} ${styles['text_2']}`}>My Orders</span>
        <img
          className={`${styles['image_4']} ${styles['pos']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=917df1cfbf7bf86bdf7daa07c39a5402.png"
        />
      </div>
      <div className={`flex-row justify-center items-center relative ${styles['group_4']}`}>
        <span className={`${styles['font_2']} ${styles['text_3']} ${styles['pos_3']}`}>Pending</span>
        <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
          <span className={`${styles['font_2']} ${styles['text_4']}`}>Delivered</span>
        </div>
        <span className={`${styles['font_2']} ${styles['text_5']} ${styles['pos_4']}`}>Cancelled</span>
      </div>
      <div className={`flex-col ${styles['list']}`}>
        {data.items.map((item, index) => (
          <div
            className={`flex-col relative ${styles['list-item']} ${styles['section_1']} ${styles['mt-19']}`}
            key={index}
          >
            <div className={`flex-row justify-between items-center`}>
              <span className={`${styles['font']} ${styles['text_6']}`}>Order #1514</span>
              <span className={`${styles['font_3']} ${styles['text_1']}`}>13/05/2021</span>
            </div>
            <div className={`flex-col ${styles['mt-27']}`}>
              <div className={`flex-row items-center`}>
                <span className={`${styles['font_4']} ${styles['text_7']}`}>Tracking number: </span>
                <span className={`${styles['font_2']} ${styles['text_8']}`}> IK987362341</span>
              </div>
              <div className={`flex-row justify-between items-center mt-20`}>
                <div className={`flex-row items-center`}>
                  <span className={`${styles['font_4']} ${styles['text_9']}`}>Quanlity:</span>
                  <span className={`${styles['font_2']} ${styles['text_10']} ${styles['ml-3']}`}>2</span>
                </div>
                <div className={`flex-row items-baseline ${styles['group_5']}`}>
                  <span className={`${styles['font_6']}`}>Subtotal:</span>
                  <span className={`${styles['font_5']} ${styles['ml-3']}`}>$110</span>
                </div>
              </div>
              <div className={`flex-row justify-between items-center ${styles['group_1']} mt-20`}>
                <span className={`${styles['font_7']} ${styles['text_11']}`}>DELIVERED</span>
                <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']}`}>
                  <span className={`${styles['font_2']}`}>Details</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={`flex-col justify-start items-center relative ${styles['section']}`}>
        <div className={`flex-row`}>
          <img
            className={`${styles['equal-division-item']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=84384861534a0e4d4c2e5b9ff92a7baf.png"
          />
          <img
            className={`${styles['equal-division-item_2']} ml-62`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7381ec76467496f83a51ff18d9946549.png"
          />
          <img
            className={`${styles['equal-division-item_3']} ml-62`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4820a4428ea07000938741d013a55cca.png"
          />
          <img
            className={`${styles['equal-division-item_4']} ml-62`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c2fc93e687e588e0740c7ab86e6e0536.png"
          />
        </div>
      </div>
    </div>
  );
}

My_orders_2_3_1829.defaultProps = { className: '' };