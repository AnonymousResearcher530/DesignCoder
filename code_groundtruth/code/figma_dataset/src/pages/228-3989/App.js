import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Shangpintijiao_yixuanshangpin_228_3989(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null, null],
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
          <span className={`${styles['text_4']}`}>商品提交</span>
        </div>
      </div>
      <div className={`flex-row relative ${styles['section_3']}`}>
        <div className={`${styles['divider']} ${styles['pos_8']}`}></div>
        <div className={`flex-col justify-start items-start ${styles['group_3']} ${styles['pos_4']}`}>
          <div className={`flex-col ${styles['group_4']}`}>
            <div className={`shrink-0 self-end relative ${styles['section_5']}`}></div>
            <span className={`self-start ${styles['font_2']} ${styles['text_5']} ${styles['text_6']} mt-2`}>
              活动详情
            </span>
          </div>
          <div className={`flex-col ${styles['group_5']} ${styles['pos_5']}`}>
            <div className={`flex-row justify-between self-start ${styles['group_2']}`}>
              <div className={`${styles['section_4']}`}></div>
              <div className={`${styles['section_4']}`}></div>
            </div>
            <div className={`flex-row justify-center self-stretch relative mt-2`}>
              <span className={`${styles['font_2']} ${styles['text_7']}`}>商品提交</span>
              <span className={`${styles['font_2']} ${styles['text_5']} ${styles['text_8']} ${styles['pos_9']}`}>
                玩法设置
              </span>
            </div>
          </div>
        </div>
        <div className={`${styles['section_4']} ${styles['pos_6']}`}></div>
        <div className={`${styles['section_4']} ${styles['pos_7']}`}></div>
        <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']} ${styles['pos_10']}`}>
          <span className={`${styles['font_2']} ${styles['text_5']} ${styles['text_9']}`}>待审核</span>
        </div>
        <div className={`flex-col justify-start items-center ${styles['text-wrapper_3']} ${styles['pos_11']}`}>
          <span className={`${styles['font_2']} ${styles['text_5']} ${styles['text_10']}`}>报名完成</span>
        </div>
      </div>
      <div className={`flex-col`}>
        <div className={`flex-col ${styles['section_6']}`}>
          <div className={`flex-row items-center self-stretch ${styles['group_6']}`}>
            <div className={`flex-row items-end shrink-0 ${styles['group_7']}`}>
              <span className={`${styles['font_3']} ${styles['text_11']}`}>商品列表（全部）</span>
              <img
                className={`shrink-0 ${styles['image_6']} ${styles['image_1']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9e13dd1542150b08331b54d00162430d.png"
              />
            </div>
            <div className={`shrink-0 ${styles['section_7']}`}></div>
            <div className={`flex-row justify-center items-center flex-1 ${styles['group_8']}`}>
              <span className={`${styles['font_2']} ${styles['text_12']}`}>已选商品（全部）</span>
              <img
                className={`${styles['image_6']} ${styles['image_7']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=57b0c4201fd30e30e2e606a3a3d88b52.png"
              />
            </div>
          </div>
          <div className={`self-end ${styles['section_8']}`}></div>
        </div>
        <div className={`flex-col ${styles['list']}`}>
          {data.items.map((item, index) => (
            <div className={`flex-row ${styles['list-item']} mt-10`} key={index}>
              <img
                className={`shrink-0 self-center ${styles['image_9']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=08707778cb2222ba3f84051a7b3ee0d4.png"
              />
              <img
                className={`shrink-0 self-center ${styles['image_8']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6e097b5d211661959110134cd9b8738d.png"
              />
              <div className={`flex-col flex-1 self-start ${styles['group_9']}`}>
                <span className={`${styles['font_4']}`}>木智工坊 原创实木晾衣架实木家具原创欧美进口实木架子</span>
                <div className={`flex-row items-center ${styles['group_10']} mt-14`}>
                  <span className={`${styles['font_5']} ${styles['text_13']}`}>一口价</span>
                  <span className={`${styles['font_6']} ${styles['text_14']}`}>¥880.00</span>
                  <span className={`${styles['font_5']} ${styles['text_15']}`}>库存</span>
                  <span className={`${styles['font_3']} ${styles['text_1']}`}>12345,890件</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`flex-row justify-between items-center relative ${styles['section_9']}`}>
        <div className={`flex-row items-center`}>
          <img
            className={`shrink-0 ${styles['image_10']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8f978cba41d44e5ea545aa6df2c0c293.png"
          />
          <span className={`${styles['font_7']} ${styles['text_16']}`}>全选</span>
          <div className={`flex-row items-baseline shrink-0 ${styles['group_11']}`}>
            <span className={`${styles['font_5']} ${styles['text_18']}`}>已选商品</span>
            <span className={`${styles['font_2']} ${styles['text_19']} ${styles['ml-5']}`}>128件</span>
          </div>
        </div>
        <div className={`flex-col justify-start items-center ${styles['text-wrapper_4']}`}>
          <span className={`${styles['font_7']} ${styles['text_17']}`}>下一步</span>
        </div>
      </div>
    </div>
  );
}

Shangpintijiao_yixuanshangpin_228_3989.defaultProps = { className: '' };