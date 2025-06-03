import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Liebiaotongzhi_178_2416(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col ${styles['section']}`}>
        <div className={`flex-row justify-center relative`}>
          <div className={`flex-row items-center ${styles['pos']}`}>
            <img
              className={`shrink-0 ${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=cc2245046a34e3a619d49ce692cdf892.png"
            />
            <span className={`${styles['font']} ${styles['text']}`}>Sketch</span>
            <img
              className={`shrink-0 ${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=442c9564fc4b64acf6fabfb8a67f74b0.png"
            />
          </div>
          <span className={`${styles['font']} ${styles['text_2']}`}>9:41 AM</span>
          <div className={`flex-row ${styles['pos_2']}`}>
            <span className={`${styles['font']} ${styles['text_3']}`}>100%</span>
            <img
              className={`shrink-0 ${styles['image_3']} ${styles['ml-3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f72e035e2974ee11af64328d397a80b4.png"
            />
          </div>
        </div>
        <div className={`flex-row justify-center relative ${styles['group']} mt-18`}>
          <div className={`flex-row items-center ${styles['pos_3']}`}>
            <img
              className={`shrink-0 ${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ac87f9425cceb23ecc4e1afe1baf5048.png"
            />
            <span className={`${styles['font_2']} ${styles['text_5']} ${styles['ml-7']}`}>返回</span>
            <span className={`${styles['font_2']} ${styles['text_6']} ${styles['ml-7']}`}>关闭</span>
          </div>
          <span className={`self-center ${styles['text_4']}`}>智能报表</span>
          <img
            className={`self-center ${styles['image_5']} ${styles['pos_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=22bd1608cde0f429dbf5a0114f6e2b45.png"
          />
        </div>
      </div>
      <div className={`flex-row items-center ${styles['section_2']}`}>
        <img
          className={`shrink-0 ${styles['image_6']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1840123ce6420c6a1667d366f2c35a28.png"
        />
        <span className={`${styles['font_3']} ${styles['text_7']} ml-10`}>
          已为您自动创建3个报表，数据开始时间为2016-05-12。报表设计功能暂未开放，敬请期待。
        </span>
      </div>
      <div className={`flex-col ${styles['group_16']}`}>
        <div className={`flex-col self-stretch ${styles['section_3']}`}>
          <div className={`flex-row self-stretch ${styles['group_2']}`}>
            <div className={`flex-row flex-1 self-center`}>
              <div className={`flex-col justify-start items-center shrink-0 ${styles['image-wrapper']}`}>
                <img
                  className={`${styles['image_7']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=84e3c66291da886ba49b5f964b7d7485.png"
                />
              </div>
              <div className={`flex-col items-start flex-1 ${styles['group_3']} ${styles['ml-11']}`}>
                <span className={`${styles['font_4']}`}>报销数据分析</span>
                <div className={`${styles['group_4']} ${styles['mt-9']}`}>
                  <span className={`${styles['font_3']} ${styles['text_8']}`}>[预警]</span>
                  <span className={`${styles['font_3']} ${styles['text_9']}`}>本月报销金额大于30W</span>
                </div>
                <span className={`${styles['font_5']} ${styles['text_10']} ${styles['mt-9']}`}>蒲轶梅</span>
              </div>
            </div>
            <span className={`self-start ${styles['font_6']} ${styles['text_11']} ml-20`}>2016.02.25</span>
          </div>
          <div className={`self-start ${styles['section_4']}`}></div>
        </div>
        <div className={`flex-col self-stretch ${styles['section_3']}`}>
          <div className={`flex-row items-center self-stretch ${styles['group_5']}`}>
            <div className={`flex-col justify-start items-center shrink-0 ${styles['image-wrapper_2']}`}>
              <img
                className={`${styles['image_8']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=43dfabddf786a889ecbd67e5482bc99c.png"
              />
            </div>
            <div className={`flex-col flex-1 ${styles['group_6']} ${styles['ml-11']}`}>
              <span className={`self-start ${styles['font_4']}`}>请假数据分析</span>
              <span className={`self-stretch ${styles['font_3']} mt-10`}>近30天请假数据分析及近6个月请假数据汇总</span>
              <div className={`flex-row justify-between self-stretch mt-10`}>
                <span className={`self-center ${styles['font_5']} ${styles['text_12']}`}>刘晶</span>
                <span className={`self-start ${styles['font_6']} ${styles['text_13']}`}>2016.02.25</span>
              </div>
            </div>
          </div>
          <div className={`self-start ${styles['section_4']}`}></div>
        </div>
        <div className={`flex-col self-stretch ${styles['section_5']}`}>
          <div className={`flex-col justify-start relative ${styles['group_15']}`}>
            <div className={`flex-col justify-start items-start relative ${styles['group_7']}`}>
              <span className={`${styles['font_4']} ${styles['text_14']}`}>出差数据分析</span>
              <div className={`flex-col justify-start items-start ${styles['pos_5']}`}>
                <div className={`${styles['section_6']}`}></div>
                <div className={`${styles['divider']} ${styles['pos_6']}`}></div>
              </div>
            </div>
            <span className={`${styles['font_3']} ${styles['text_15']} ${styles['pos_8']}`}>近12个月出差数据汇总</span>
            <div className={`${styles['divider_2']} ${styles['pos_9']}`}></div>
            <img
              className={`${styles['image_9']} ${styles['pos_7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=af95c072224e4c1461ed5ae938a32049.png"
            />
            <span className={`${styles['font_5']} ${styles['text_16']} ${styles['pos_10']}`}>徐天</span>
            <span className={`${styles['font_6']} ${styles['pos_11']}`}>2016.02.25</span>
          </div>
          <div className={`${styles['section_5']} ${styles['section_7']}`}></div>
        </div>
        <div className={`flex-col self-stretch ${styles['group_16']} ${styles['group_8']}`}>
          <div className={`self-start ${styles['section_4']}`}></div>
          <div className={`flex-row justify-between items-end self-stretch ${styles['group_9']}`}>
            <div className={`flex-row ${styles['group_1']}`}>
              <div className={`flex-col justify-start items-center ${styles['image-wrapper_3']}`}>
                <img
                  className={`${styles['image_10']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=cf904408fc17b927a867685af9bd4553.png"
                />
              </div>
              <div className={`flex-col items-start ${styles['group_12']} ${styles['ml-11']}`}>
                <span className={`${styles['font_4']}`}>外出数据分析</span>
                <span className={`${styles['font_3']} ${styles['text_17']} mt-10`}>近6个月外出数据汇总</span>
                <span className={`${styles['font_5']} ${styles['text_18']} mt-10`}>唐韧</span>
              </div>
            </div>
            <span className={`${styles['font_6']} ${styles['text_19']}`}>2016.02.25</span>
          </div>
        </div>
        <div className={`shrink-0 self-start ${styles['section_4']} ${styles['view']}`}></div>
        <div className={`flex-row justify-between self-stretch ${styles['section_8']}`}>
          <div className={`flex-row self-center`}>
            <div className={`flex-col justify-start items-center ${styles['image-wrapper_4']}`}>
              <img
                className={`${styles['image_7']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6ad9c7888743e905bb4c9ebf6322a7a6.png"
              />
            </div>
            <div className={`flex-col items-start ${styles['group_10']} ${styles['ml-11']}`}>
              <span className={`${styles['font_4']}`}>物品领用分析</span>
              <span className={`${styles['font_3']} mt-10`}>近12个月物品领用数</span>
              <span className={`${styles['font_5']} mt-10`}>韩雪琴</span>
            </div>
          </div>
          <span className={`self-start ${styles['font_6']} ${styles['text_20']}`}>2016.02.25</span>
        </div>
      </div>
      <div className={`flex-col justify-start relative ${styles['group_11']}`}>
        <div className={`flex-row justify-center items-center ${styles['section_9']}`}>
          <img
            className={`${styles['image_11']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=204f8ac6035be891c5084cab1138627e.png"
          />
          <span className={`${styles['font_3']} ${styles['text_22']} ml-6`}>新增报表</span>
        </div>
        <div className={`flex-col justify-start ${styles['text-wrapper']} ${styles['pos_12']}`}>
          <span className={`${styles['font_5']} ${styles['text_21']}`}>暂未开放，敬请期待</span>
        </div>
      </div>
    </div>
  );
}

Liebiaotongzhi_178_2416.defaultProps = { className: '' };