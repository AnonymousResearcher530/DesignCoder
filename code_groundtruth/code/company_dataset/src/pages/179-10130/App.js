import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Kaixiangzhong_179_10130(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start relative ${styles['section']}`}>
        <div className={`${styles['section_2']}`}></div>
        <img
          className={`${styles['image_3']} ${styles['pos_6']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4c82e6e08e221e7414d508ae5f1c6e7b.png"
        />
        <span className={`${styles['font']} ${styles['text']} ${styles['pos']}`}>Raaay</span>
        <img
          className={`${styles['image']} ${styles['pos_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f806292bebf80bb6bd786cfc692a9156.png"
        />
        <span className={`${styles['font_2']} ${styles['pos_3']}`}>00:00 AM</span>
        <span className={`${styles['font_2']} ${styles['text_2']} ${styles['pos_4']}`}>100%</span>
        <img
          className={`${styles['image_2']} ${styles['pos_5']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bb98c27129dd8b746139f7b428ce6b54.png"
        />
        <div className={`flex-col justify-start items-center ${styles['text-wrapper']} ${styles['pos_7']}`}>
          <span className={`${styles['font_3']} ${styles['text_3']}`}>盒马天天霸王餐</span>
        </div>
      </div>
      <div className={`flex-col justify-start relative ${styles['group']}`}>
        <div className={`${styles['section_11']}`}></div>
        <div className={`flex-col ${styles['section_15']} ${styles['pos_16']}`}>
          <div className={`flex-row justify-center items-center`}>
            <img
              className={`${styles['image_8']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bf4d0aba37aa6dec45ef5dbdeac74606.png"
            />
            <span className={`${styles['font_7']} ${styles['text_14']} ${styles['ml-9-5']}`}>开箱记录</span>
            <img
              className={`${styles['image_8']} ${styles['ml-9-5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bf4d0aba37aa6dec45ef5dbdeac74606.png"
            />
          </div>
          <div className={`flex-col ${styles['mt-11']}`}>
            {data.items.map((item, index) => (
              <div className={`flex-col justify-start ${styles['list-item']}`} key={index}>
                <div className={`flex-row justify-between items-center ${styles['group_10']}`}>
                  <div className={`flex-row`}>
                    <img
                      className={`${styles['image_11']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=83b49e10bad01e3ef9f34b9a99cb8882.png"
                    />
                    <div className={`flex-col ${styles['group_11']} ${styles['ml-9-5']}`}>
                      <div className={`flex-row`}>
                        <span className={`${styles['font']} ${styles['text_15']}`}>斯嘉丽</span>
                        <span
                          className={`${styles['font']} ${styles['text_16']} ${styles['text_17']} ${styles['ml-12-5']}`}
                        >
                          （S**M）
                        </span>
                      </div>
                      <span className={`${styles['font_10']} ${styles['text_16']} mt-6`}>2017-05-20 20:49:01</span>
                    </div>
                  </div>
                  <span className={`${styles['font_9']}`}>开出￥99</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={`flex-col ${styles['section_3']} ${styles['pos_8']}`}>
          <div className={`flex-col justify-start items-center self-stretch ${styles['text-wrapper_2']}`}>
            <span className={`${styles['font']} ${styles['text_4']}`}>恭喜 R***y 抽中【清空购物车】大奖！</span>
          </div>
          <div className={`flex-col justify-start self-stretch relative ${styles['group_3']}`}>
            <div className={`${styles['section_6']}`}></div>
            <div className={`flex-col ${styles['section_5']} ${styles['pos_10']}`}>
              <span className={`self-center ${styles['font_4']} ${styles['text_9']}`}>
                邀请好友打开剩余宝箱，全部打开解锁大奖
              </span>
              <div className={`flex-row ${styles['equal-division']} ${styles['group_5']} mt-24`}>
                <div
                  className={`flex-row justify-center items-end ${styles['group_6']} ${styles['equal-division-item']}`}
                >
                  <div className={`flex-col ${styles['section_10']}`}>
                    <img
                      className={`${styles['image_7']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b6ca5b56dabeedc3d709384e34651648.png"
                    />
                    <div className={`flex-row ${styles['group_7']}`}>
                      <span className={`self-start ${styles['font_5']}`}>￥</span>
                      <span className={`self-center ${styles['font_6']}`}>99</span>
                    </div>
                  </div>
                  <div className={`flex-col justify-start items-center ${styles['text-wrapper_3']} ml-6`}>
                    <span className={`${styles['font_4']}`}>开启</span>
                  </div>
                </div>
                <div
                  className={`flex-row justify-center items-end ${styles['group_6']} ${styles['equal-division-item']} ${styles['ml-1']}`}
                >
                  <div className={`flex-col ${styles['section_10']}`}>
                    <img
                      className={`${styles['image_7']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b6ca5b56dabeedc3d709384e34651648.png"
                    />
                    <div className={`flex-row ${styles['group_7']}`}>
                      <span className={`self-start ${styles['font_5']}`}>￥</span>
                      <span className={`self-center ${styles['font_6']}`}>99</span>
                    </div>
                  </div>
                  <div className={`flex-col justify-start items-center ${styles['text-wrapper_3']} ml-6`}>
                    <span className={`${styles['font_4']}`}>开启</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={`flex-row ${styles['section_4']} ${styles['pos_9']}`}>
              <img
                className={`${styles['image_4']} ${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=41bad774f71abd0b74b8ef72a7119a7c.png"
              />
              <img
                className={`${styles['image_4']} ${styles['image_6']} ml-10`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=41bad774f71abd0b74b8ef72a7119a7c.png"
              />
            </div>
            <div className={`flex-col justify-start items-center ${styles['section_9']} ${styles['pos_13']}`}>
              <div className={`flex-row ${styles['group_4']}`}>
                <span className={`self-start ${styles['font_3']} ${styles['text_7']}`}>还差</span>
                <span className={`self-center ${styles['text_6']}`}>2</span>
                <span className={`self-center ${styles['font_3']} ${styles['text_8']}`}>个宝箱可解锁</span>
              </div>
            </div>
            <div className={`flex-col justify-start ${styles['section_7']} ${styles['pos_11']}`}>
              <div className={`shrink-0 ${styles['section_8']}`}></div>
              <span className={`${styles['text_5']} ${styles['pos_12']}`}>奖品介绍</span>
            </div>
          </div>
          <div className={`flex-col justify-start items-center self-center ${styles['text-wrapper_4']}`}>
            <span className={`${styles['text_10']}`}>召唤好友帮忙</span>
          </div>
        </div>
        <div className={`flex-col ${styles['section_12']} ${styles['pos_14']}`}>
          <div className={`flex-row justify-center items-center`}>
            <img
              className={`${styles['image_8']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bf4d0aba37aa6dec45ef5dbdeac74606.png"
            />
            <span className={`${styles['font_7']} ${styles['ml-9-5']}`}>本轮奖品</span>
            <img
              className={`${styles['image_8']} ${styles['ml-9-5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bf4d0aba37aa6dec45ef5dbdeac74606.png"
            />
          </div>
          <div className={`flex-col justify-start items-center relative ${styles['group_8']} ${styles['mt-21']}`}>
            <img
              className={`${styles['image_9']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=536273f82e6e60ee31dc7cc2c1578fb1.png"
            />
            <div className={`flex-col justify-start ${styles['section_13']} ${styles['pos_15']}`}>
              <div className={`flex-col ${styles['section_14']}`}>
                <span className={`self-start ${styles['font_3']} ${styles['text_11']}`}>￥5 盒马云超优惠券</span>
                <div className={`flex-row justify-between items-center self-stretch ${styles['mt-25']}`}>
                  <div className={`flex-col items-start ${styles['group_9']}`}>
                    <span className={`${styles['font_8']}`}>仅限门店自提</span>
                    <span className={`${styles['font_8']} ${styles['text_13']} ${styles['mt-6-5']}`}>
                      2018.08.30到期
                    </span>
                  </div>
                  <div className={`flex-col justify-start items-center ${styles['text-wrapper_5']}`}>
                    <span className={`${styles['font_4']} ${styles['text_12']}`}>查看</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Kaixiangzhong_179_10130.defaultProps = { className: '' };