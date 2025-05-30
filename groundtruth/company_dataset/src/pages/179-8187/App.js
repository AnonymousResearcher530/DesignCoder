import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Sousuo_jieguo_179_8187(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col relative ${styles['section']}`}>
        <div className={`flex-row justify-between ${styles['group']}`}>
          <div className={`flex-row ${styles['group_2']}`}>
            <div className={`flex-row items-center shrink-0 self-start ${styles['group_3']}`}>
              <img
                className={`shrink-0 ${styles['image_4']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a658e78778d465d154845d0a5d49b92d.png"
              />
              <span className={`${styles['font']} ${styles['text_2']}`}>UED1</span>
              <img
                className={`shrink-0 ${styles['image_2']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=24ec89a69c369058a6364e9d2a34410c.png"
              />
            </div>
            <span className={`${styles['text']} ml-70`}>11:56 AM</span>
          </div>
          <div className={`flex-row items-center`}>
            <img
              className={`${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9da49808432a5686bae54a13dbcdaf77.png"
            />
            <img
              className={`${styles['image_3']} ml-6`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8170f63be75991287ec14308c0b99e81.png"
            />
          </div>
        </div>
        <div className={`flex-row items-center ${styles['group_4']}`}>
          <img
            className={`shrink-0 ${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8c6feb9ca1525a0b1dd100b69f6b548a.png"
          />
          <div className={`flex-row items-center flex-1 ${styles['section_2']} ${styles['ml-13']}`}>
            <img
              className={`${styles['image_7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=02931f22e506dd2956b547881a38bf14.png"
            />
            <span className={`${styles['font_2']} ${styles['text_3']} ${styles['ml-9']}`}>输入关键词</span>
          </div>
          <img
            className={`shrink-0 ${styles['image_6']} ${styles['ml-13']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=757283e5b6137d07250769f432207a15.png"
          />
        </div>
      </div>
      <div className={`flex-col`}>
        <div className={`flex-row ${styles['section_3']}`}>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
            <span className={`${styles['font_2']} ${styles['text_4']}`}>默认排序</span>
          </div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_1']}`}>
            <span className={`${styles['font_2']}`}>优惠优先</span>
          </div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']}`}>
            <span className={`${styles['font_2']} ${styles['text_5']}`}>销量优先</span>
          </div>
        </div>
        <div className={`${styles['grid']} mt-2`}>
          <div className={`flex-col ${styles['grid-item']}`}>
            <div className={`flex-col`}>
              <div className={`flex-col justify-start self-stretch ${styles['section_4']}`}>
                <div className={`flex-col justify-start items-center ${styles['section_6']}`}>
                  <div className={`flex-col items-center ${styles['section_7']}`}>
                    <span className={`${styles['text_6']}`}>已抢完</span>
                    <span className={`${styles['text_7']} ${styles['mt-9']}`}>SOLD OUT</span>
                  </div>
                </div>
              </div>
              <span className={`self-center ${styles['font_3']} ${styles['text_8']} ${styles['mt-5']}`}>
                混合蔬菜500g 蔬菜沙拉 16:00限时抢购
              </span>
            </div>
            <div className={`flex-row ${styles['group_5']} ${styles['mt-5']}`}>
              <div className={`flex-col flex-1 self-center`}>
                <div className={`flex-row`}>
                  <img
                    className={`${styles['image_9']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=76c8af8fc1c4e585d3d043bed580031b.png"
                  />
                  <img
                    className={`${styles['image_9']} ml-4`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=32e37d6569d0d4737297bd599ee6c103.png"
                  />
                </div>
                <div className={`flex-row justify-evenly items-baseline ${styles['mt-7-5']}`}>
                  <span className={`${styles['font_4']}`}>¥999.99</span>
                  <span className={`${styles['font_5']} ${styles['text_10']}`}>/袋</span>
                  <span className={`${styles['font']} ${styles['text_12']}`}>¥ 999.99</span>
                </div>
              </div>
              <img
                className={`shrink-0 self-start ${styles['image_10']} ${styles['image_11']} ${styles['ml-12-5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=eea9624b38fa05b2c30b9d7d7825fd43.png"
              />
            </div>
          </div>
          <div className={`flex-col ${styles['grid-item']}`}>
            <div className={`flex-col relative`}>
              <div className={`self-stretch ${styles['section_5']}`}></div>
              <span className={`self-start ${styles['font_3']} ${styles['text_9']}`}>
                澳洲YP级精修牛腩块500g 进口牛肉牛腩
              </span>
              <img
                className={`${styles['image_8']} ${styles['pos']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d91dbd147ba627eb9fd9656e4b2e660e.png"
              />
            </div>
            <div className={`flex-row ${styles['group_1']} ${styles['mt-15-5']}`}>
              <div className={`flex-row justify-evenly items-baseline flex-1 self-start ${styles['group_6']}`}>
                <span className={`${styles['font_4']}`}>¥999.99</span>
                <span className={`${styles['font_5']} ${styles['text_11']}`}>/袋</span>
                <span className={`${styles['font']} ${styles['text_12']}`}>¥ 999.99</span>
              </div>
              <img
                className={`shrink-0 ${styles['image_10']} ${styles['ml-12-5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=eea9624b38fa05b2c30b9d7d7825fd43.png"
              />
            </div>
          </div>
          <div className={`flex-col ${styles['grid-item_2']}`}>
            <div className={`flex-col items-center`}>
              <img
                className={`${styles['image_12']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8ec141a797b6bb662b4cb43e8952843f.png"
              />
              <span className={`${styles['font_3']} ${styles['text_13']} ${styles['mt-5']}`}>
                越南红心火龙果2.5kg 约450g/个 新鲜水果
              </span>
            </div>
            <div className={`flex-row ${styles['group_8']} ${styles['mt-15-5']}`}>
              <div className={`flex-row justify-evenly items-baseline flex-1 self-start ${styles['group_9']}`}>
                <span className={`${styles['font_4']}`}>¥999.99</span>
                <span className={`${styles['font_5']} ${styles['text_15']}`}>/袋</span>
                <span className={`${styles['font']} ${styles['text_12']}`}>¥ 999.99</span>
              </div>
              <img
                className={`shrink-0 ${styles['image_10']} ${styles['ml-12-5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=eea9624b38fa05b2c30b9d7d7825fd43.png"
              />
            </div>
          </div>
          <div className={`flex-col ${styles['grid-item_2']}`}>
            <div className={`flex-col items-center`}>
              <img
                className={`${styles['image_12']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fe2f161c1dc3a3166949ba4907602e89.png"
              />
              <span className={`${styles['font_3']} ${styles['text_14']} ${styles['mt-5']}`}>
                墨西哥牛油果120-140g/个 新鲜水果
              </span>
            </div>
            <div className={`flex-row ${styles['group_1']} ${styles['mt-15-5']}`}>
              <div className={`flex-row justify-evenly items-baseline flex-1 self-start ${styles['group_9']}`}>
                <span className={`${styles['font_4']}`}>¥999.99</span>
                <span className={`${styles['font_5']} ${styles['text_15']}`}>/袋</span>
                <span className={`${styles['font']} ${styles['text_12']}`}>¥ 999.99</span>
              </div>
              <img
                className={`shrink-0 ${styles['image_10']} ${styles['ml-12-5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=eea9624b38fa05b2c30b9d7d7825fd43.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Sousuo_jieguo_179_8187.defaultProps = { className: '' };