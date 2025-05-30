import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Zhouerxianshiqiang_181_17692(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col`}>
        <div className={`flex-col ${styles['section']}`}>
          <div className={`flex-row justify-between`}>
            <div className={`flex-row items-center`}>
              <img
                className={`${styles['image_4']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3aeb6f183064bdbb538e192fb8fab217.png"
              />
              <img
                className={`${styles['image']} ${styles['ml-3-5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=774d78f870927fc3994db08faf7b94e8.png"
              />
              <img
                className={`${styles['image_2']} ${styles['ml-3-5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5ccc458b515ce2600e90453aefae7f9f.png"
              />
            </div>
            <div className={`flex-row items-center`}>
              <div className={`flex-row ${styles['group']}`}>
                <div className={`${styles['group_2']}`}>
                  <span className={`${styles['font']}`}>9 </span>
                  <span className={`${styles['font']} ${styles['text']}`}>AM</span>
                </div>
                <span className={`${styles['font']} ${styles['text_2']} ${styles['ml-106-5']}`}>100%</span>
              </div>
              <img
                className={`${styles['image_3']} ${styles['ml-1-5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1fb7cded18c89f3fae0d4c196f3e15da.png"
              />
            </div>
          </div>
          <div className={`flex-row justify-center relative ${styles['group_3']} mt-8`}>
            <img
              className={`self-start ${styles['image_5']} ${styles['pos']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ed9cc101ee2ea3658778d4c72a7ce3ef.png"
            />
            <span className={`self-center ${styles['text_3']}`}>9块9包邮</span>
          </div>
        </div>
        <div className={`flex-row justify-between items-center ${styles['section_2']}`}>
          <span className={`${styles['font_2']} ${styles['text_4']}`}>周二限时抢</span>
          <span className={`${styles['font_3']} ${styles['text_5']} ${styles['text_6']}`}>9块9包邮</span>
          <div className={`flex-row`}>
            <span className={`${styles['font_4']} ${styles['text_5']} ${styles['text_7']}`}>19块9</span>
            <span className={`${styles['font_4']} ${styles['text_5']} ${styles['text_8']} ${styles['ml-23-5']}`}>
              29块9
            </span>
          </div>
          <span className={`${styles['font_4']} ${styles['text_5']} ${styles['text_9']}`}>39块9</span>
        </div>
      </div>
      <div className={`flex-col ${styles['group_4']}`}>
        <div className={`flex-row items-center ${styles['section_3']}`}>
          <span className={`${styles['text_5']} ${styles['text_10']}`}>每周二百款特价商品 一折起疯抢</span>
          <div className={`flex-row shrink-0 ${styles['group_5']} ml-40`}>
            <span className={`shrink-0 self-center ${styles['font']} ${styles['text_5']} ${styles['text_11']}`}>
              还剩
            </span>
            <div className={`flex-col justify-start flex-1 relative ${styles['group_6']} ${styles['ml-5']}`}>
              <div className={`flex-row justify-between ${styles['section_4']}`}>
                <span className={`${styles['font_5']}`}>04</span>
                <span className={`${styles['font_5']}`}>26</span>
              </div>
              <span className={`${styles['font_5']} ${styles['text_12']} ${styles['pos_2']}`}>18</span>
            </div>
          </div>
        </div>
        <div className={`flex-col`}>
          {data.items.map((item, index) => (
            <div
              className={`flex-row justify-between items-center ${styles['list-item']} ${styles['section_5']} ${styles['mt-5-5']}`}
              key={index}
            >
              <img
                className={`${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=94d15117bf57f7f0441238d3801cb526.png"
              />
              <div className={`flex-col ${styles['group_7']}`}>
                <div className={`flex-col ${styles['group_8']}`}>
                  <span className={`self-stretch ${styles['font_6']}`}>荐形容的狠货厚高的工艺拉毛点缀羊毛连衣裙</span>
                  <span className={`self-start ${styles['font_3']} ${styles['mt-6-5']}`}>亏本销售，今天付款送手表</span>
                </div>
                <div className={`flex-row items-center ${styles['group_9']} ${styles['mt-31']}`}>
                  <div className={`flex-col items-start relative ${styles['group_10']}`}>
                    <div className={`${styles['group_11']}`}>
                      <span className={`${styles['font_2']}`}>¥</span>
                      <span className={`${styles['font_7']} ${styles['text_13']}`}>612.00</span>
                    </div>
                    <span className={`${styles['font_9']} ${styles['text_14']}`}>￥200</span>
                    <div className={`${styles['section_6']} ${styles['pos_3']}`}></div>
                  </div>
                  <div className={`flex-col justify-start items-center ${styles['text-wrapper_1']} ${styles['ml-31']}`}>
                    <span className={`${styles['font_8']}`}>马上购</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Zhouerxianshiqiang_181_17692.defaultProps = { className: '' };