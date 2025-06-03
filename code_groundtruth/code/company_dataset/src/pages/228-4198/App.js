import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Daishenhe_228_4198(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col ${styles['section']}`}>
        <div className={`flex-row justify-center items-center relative ${styles['section_2']}`}>
          <div className={`flex-row items-center ${styles['pos']}`}>
            <img
              className={`shrink-0 ${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a72610105b321332408159a1a477a169.png"
            />
            <span className={`${styles['font']} ${styles['text']} ${styles['ml-5']}`}>FB</span>
            <img
              className={`shrink-0 ${styles['image_2']} ${styles['ml-5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9fad1e45be68384d8a735638780d7851.png"
            />
          </div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
            <span className={`${styles['font']} ${styles['text_2']}`}>1:20 PM</span>
          </div>
          <div className={`flex-row items-center ${styles['pos_2']}`}>
            <img
              className={`shrink-0 ${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1680cf5817c836bed8a4dfe10fe36a06.png"
            />
            <span className={`${styles['font']} ${styles['text_3']} ${styles['ml-7']}`}>77%</span>
            <img
              className={`shrink-0 ${styles['image_4']} ${styles['ml-7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6f89a3b44bf068a39466a8c7de2d795a.png"
            />
          </div>
        </div>
        <div className={`flex-row justify-center items-center relative ${styles['group']}`}>
          <img
            className={`${styles['image_5']} ${styles['pos_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=af49307e6a02c15df48d4f7f1e2fe8fc.png"
          />
          <span className={`${styles['font_2']} ${styles['text_4']}`}>待审核</span>
        </div>
      </div>
      <div className={`flex-col ${styles['section_3']}`}>
        <div className={`flex-col justify-start self-stretch relative`}>
          <div className={`${styles['equal-division']} ${styles['section_4']}`}>
            <div className={`flex-col items-start ${styles['equal-division-item']} ${styles['group_2']}`}>
              <div className={`${styles['section_5']} ${styles['view']}`}></div>
              <span className={`${styles['font_3']} ${styles['text_5']} ${styles['text_6']} mt-2`}>活动详情</span>
            </div>
            <div className={`flex-col items-start ${styles['equal-division-item_2']} ${styles['group_3']}`}>
              <div className={`${styles['section_5']}`}></div>
              <span className={`${styles['font_3']} ${styles['text_5']} ${styles['text_7']} mt-2`}>商品提交</span>
            </div>
            <div className={`flex-col items-start ${styles['equal-division-item_3']} ${styles['group_4']}`}>
              <div className={`${styles['section_5']} ${styles['view_2']}`}></div>
              <span className={`${styles['font_3']} ${styles['text_5']} ${styles['text_8']} mt-2`}>玩法设置</span>
            </div>
            <div className={`flex-col ${styles['equal-division-item_4']} ${styles['group_5']}`}>
              <div className={`self-start relative ${styles['section_6']}`}></div>
              <div className={`flex-col justify-start items-center self-center ${styles['text-wrapper_2']}`}>
                <span className={`${styles['font_3']} ${styles['text_9']}`}>待审核</span>
              </div>
            </div>
            <div className={`flex-col ${styles['equal-division-item_5']} ${styles['group_6']}`}>
              <div className={`self-start ${styles['section_5']}`}></div>
              <div className={`flex-col justify-start items-center self-stretch ${styles['text-wrapper_3']}`}>
                <span className={`${styles['font_3']} ${styles['text_5']} ${styles['text_10']}`}>报名完成</span>
              </div>
            </div>
          </div>
          <div className={`${styles['divider']} ${styles['pos_5']}`}></div>
          <div className={`flex-col justify-start items-start ${styles['group_7']} ${styles['pos_4']}`}>
            <div className={`shrink-0 ${styles['group_8']}`}></div>
          </div>
        </div>
        <span className={`self-center ${styles['text_11']} mt-16`}>商品已提交，等待审核</span>
        <span className={`self-center ${styles['font_3']} ${styles['text_12']} mt-16`}>
          您已提交商品，我们将对您提交的商品进行审核，审核截止日期为（2019/02/03 00:00)
        </span>
        <div className={`flex-row justify-center self-stretch ${styles['group_9']} mt-16`}>
          <div className={`flex-col justify-start ${styles['section_1']}`}>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_4']} ${styles['view_3']}`}>
              <span className={`${styles['font_4']} ${styles['text_13']}`}>完善商品</span>
            </div>
          </div>
          <div className={`flex-col justify-start ${styles['section_1']} ml-20`}>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_4']} ${styles['view_4']}`}>
              <span className={`${styles['font_4']} ${styles['text_14']}`}>撤销报名</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col`}>
        <div className={`flex-col ${styles['section_8']}`}>
          <div className={`flex-row justify-center self-stretch`}>
            <div className={`self-start ${styles['section_9']}`}></div>
            <span className={`${styles['font_2']} ${styles['text_15']} ${styles['ml-7']}`}>猜你喜欢</span>
            <div className={`self-start ${styles['section_9']} ${styles['ml-7']}`}></div>
          </div>
          <span className={`self-center ${styles['font_3']} ${styles['text_16']} ${styles['mt-11']}`}>
            以下为您精选可以报名的其它活动
          </span>
        </div>
        <div className={`flex-col ${styles['list']}`}>
          {data.items.map((item, index) => (
            <div className={`flex-col ${styles['list-item']} mt-10`} key={index}>
              <div className={`flex-row ${styles['group_10']}`}>
                <div className={`shrink-0 self-start ${styles['section_10']}`}></div>
                <div className={`flex-col flex-1 self-center ${styles['ml-13']}`}>
                  <span className={`${styles['font_2']}`}>2019年聚划算三八女王节全球精选品</span>
                  <div className={`flex-row items-baseline ${styles['group_11']}`}>
                    <span className={`${styles['font_5']} ${styles['text_17']}`}>活动时间：2019/03/07 00:00:00</span>
                    <span className={`${styles['font_5']} ${styles['text_18']} ml-2`}>2019/03/09 00:00:00</span>
                  </div>
                  <div className={`flex-row items-baseline ${styles['group_1']}`}>
                    <span className={`${styles['font_5']}`}>报名时间：2019/03/07 00:00:00</span>
                    <span className={`${styles['font_5']} ml-2`}>2019/03/09 00:00:00</span>
                  </div>
                </div>
              </div>
              <div className={`flex-row justify-end items-center ${styles['group_13']}`}>
                <span className={`${styles['font_6']} ${styles['text_19']}`}>待报名</span>
                <img
                  className={`${styles['image_6']} ${styles['ml-9']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=eab11f494f6c39ccae11f66fc459a67f.png"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Daishenhe_228_4198.defaultProps = { className: '' };