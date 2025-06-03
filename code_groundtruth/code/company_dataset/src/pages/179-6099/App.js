import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Sousuojieguoye_jdianleimu_guojia_179_6099(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null],
  });

  return (
    <div className={`flex-col relative ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-center items-center relative ${styles['section']}`}>
        <div className={`flex-row items-center ${styles['pos']}`}>
          <img
            className={`shrink-0 ${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c4396734f6932ff5c3902fc7124728d5.png"
          />
          <span className={`${styles['font']} ${styles['text']}`}>Carrier</span>
          <img
            className={`shrink-0 ${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d7ec226a5574535654c24ad7eb1162d2.png"
          />
        </div>
        <span className={`${styles['font']} ${styles['text_2']}`}>4:34 PM</span>
        <div className={`flex-row ${styles['pos_2']}`}>
          <img
            className={`shrink-0 ${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6d0ae8e76f53476d482a523388aba6aa.png"
          />
          <span className={`${styles['font']} ${styles['text_3']}`}>100%</span>
          <img
            className={`shrink-0 ${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c315715881e7268783f800e678faa8dd.png"
          />
        </div>
      </div>
      <div className={`flex-row items-center relative ${styles['section_2']}`}>
        <img
          className={`shrink-0 ${styles['image_6']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e5dcf64622ba9ccc4a364f0547ca5030.png"
        />
        <div className={`flex-row justify-between items-center flex-1 ${styles['section_3']} ml-18`}>
          <div className={`flex-row items-center`}>
            <span className={`${styles['font_5']} ${styles['text_4']}`}>宝贝</span>
            <img
              className={`shrink-0 ${styles['image_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=cb21d272b67dfab0b48e2e6d1fbc40f4.png"
            />
            <span className={`${styles['font_5']} ${styles['text_5']}`}>澳大利亚</span>
          </div>
          <img
            className={`${styles['image_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7e495053200902199aa0b27e2cd6782f.png"
          />
        </div>
      </div>
      <div className={`flex-col relative ${styles['group_1']}`}>
        <img
          className={`${styles['image_8']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=09d57649a4087ba64a80f173e7cee07b.png"
        />
        <div className={`flex-row justify-between ${styles['section_4']}`}>
          <div className={`flex-row items-center self-center ${styles['group']}`}>
            <div className={`${styles['group_2']}`}>
              <span className={`${styles['font_3']}`}>住</span>
              <span className={`${styles['font_4']} ${styles['text_6']}`}>
                05.25
                <br />
              </span>
              <span className={`${styles['font_3']}`}>离</span>
              <span className={`${styles['font_4']}`}> 05.29</span>
            </div>
            <img
              className={`shrink-0 ${styles['image_9']} ${styles['ml-4-5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=99bad6087bd971003c0f1864a522b94c.png"
            />
          </div>
          <div className={`flex-row self-start ${styles['group_3']}`}>
            <span className={`${styles['font_5']} ${styles['text_7']}`}>综合排序</span>
            <img
              className={`shrink-0 self-center ${styles['image_9']} ${styles['ml-4-5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=99bad6087bd971003c0f1864a522b94c.png"
            />
          </div>
          <div className={`flex-row items-end self-center`}>
            <span className={`${styles['font_1']} ${styles['text_8']}`}>酒店位置</span>
            <img
              className={`shrink-0 ${styles['image_9']} ${styles['image_10']} ${styles['ml-3-5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d43eb57e4003149c2d4f030172116c6e.png"
            />
          </div>
          <div className={`flex-row items-end self-start ${styles['group_4']}`}>
            <span className={`${styles['font_1']} ${styles['text_9']}`}>筛选</span>
            <img
              className={`shrink-0 ${styles['image_9']} ${styles['image_11']} ${styles['ml-4-5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d43eb57e4003149c2d4f030172116c6e.png"
            />
          </div>
        </div>
        <div className={`flex-col ${styles['section_5']}`}>
          <span className={`${styles['font_6']} ${styles['text_10']}`}>
            以下是为您精选的 悉尼 热门酒店，还可搜索其他城市酒店，如：
          </span>
          <div className={`flex-row ${styles['mt-8-5']}`}>
            <div className={`flex-col justify-start ${styles['text-wrapper_1']}`}>
              <span className={`${styles['font_7']} ${styles['text_12']}`}>墨尔本 洲际</span>
            </div>
            <div className={`flex-col justify-start ${styles['text-wrapper']} ml-6`}>
              <span className={`${styles['font_7']} ${styles['text_13']}`}>堪培拉 酒店</span>
            </div>
          </div>
        </div>
        <div className={`flex-col`}>
          {data.items.map((item, index) => (
            <div className={`flex-col ${styles['section_6']}`} key={index}>
              <div className={`flex-row items-center self-stretch ${styles['group_5']}`}>
                <div className={`flex-col justify-start items-start shrink-0 ${styles['section_7']}`}>
                  <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']}`}>
                    <span className={`${styles['font_9']}`}>酒店</span>
                  </div>
                </div>
                <div className={`flex-col flex-1 ${styles['group_6']} ml-12`}>
                  <span className={`self-start ${styles['font_8']} ${styles['text_14']}`}>香格里拉悉尼大酒店</span>
                  <span className={`self-start ${styles['font_10']} ${styles['text_15']}`}>
                    Shangri-La Hotel-Sydney
                  </span>
                  <span className={`self-start ${styles['font_11']} ${styles['text_16']}`}>豪华型｜悉尼中央商业区</span>
                  <div className={`flex-row self-stretch ${styles['group_7']}`}>
                    <img
                      className={`${styles['image_12']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=588472eb0e73183f719554c1c0fb1a5b.png"
                    />
                    <div className={`flex-col justify-start ${styles['text-wrapper_4']} ${styles['ml-2-5']}`}>
                      <span className={`${styles['font_12']} ${styles['text_17']}`}>预约发票</span>
                    </div>
                    <div
                      className={`flex-col justify-start items-center ${styles['text-wrapper_5']} ${styles['ml-2-5']}`}
                    >
                      <span className={`${styles['font_13']} ${styles['text_18']}`}>红包</span>
                    </div>
                    <div
                      className={`flex-col justify-start items-center ${styles['text-wrapper_6']} ${styles['ml-2-5']}`}
                    >
                      <span className={`${styles['font_14']}`}>团</span>
                    </div>
                  </div>
                  <div className={`flex-row items-baseline self-stretch ${styles['group_8']}`}>
                    <div className={`${styles['group_9']}`}>
                      <span className={`${styles['font_6']}`}>4.9分 超出预期</span>
                      <span className={`${styles['font_16']}`}>｜32568条评价</span>
                    </div>
                    <span className={`${styles['font_15']} ${styles['text_19']}`}>9999</span>
                    <span className={`${styles['font_18']} ${styles['text_21']}`}>￥</span>
                    <span className={`${styles['font_17']} ${styles['text_20']}`}>起</span>
                  </div>
                </div>
              </div>
              <div className={`self-end ${styles['section_9']}`}></div>
            </div>
          ))}
        </div>
        <div className={`flex-col`}>
          <div className={`flex-row items-center ${styles['section_10']}`}>
            <img
              className={`shrink-0 ${styles['image_13']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fb6960cf83d9e74d1995af30f7f706ae.png"
            />
            <div className={`flex-col flex-1 ${styles['ml-11']}`}>
              <div className={`flex-col ${styles['group_12']}`}>
                <div className={`flex-row justify-around items-center ${styles['group_13']}`}>
                  <div className={`${styles['section_11']}`}></div>
                  <span className={`${styles['font_19']} ${styles['text_28']}`}>澳大利亚游记</span>
                  <div className={`${styles['section_11']}`}></div>
                </div>
                <span className={`${styles['font_20']} ${styles['mt-13']}`}>
                  玛丽丽旅行志 | 如此上镜的悉尼，何不暴走！(6日经典路线)
                </span>
              </div>
              <div className={`flex-row justify-between items-center ${styles['mt-17']}`}>
                <div className={`flex-row`}>
                  <img
                    className={`shrink-0 ${styles['image_14']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e55f04b42967020a1f324895ce332411.png"
                  />
                  <span className={`self-start ${styles['font_19']} ${styles['text_29']} ml-6`}>玛丽丽旅行志</span>
                </div>
                <div className={`${styles['group_14']}`}>
                  <span className={`${styles['font_21']} ${styles['text_31']}`}>5276</span>
                  <span className={`${styles['font_6']} ${styles['text_30']}`}>人已读</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`flex-col justify-start`}>
            <div className={`flex-col ${styles['section_13']}`}>
              <div className={`flex-col justify-start items-end relative ${styles['group_16']}`}>
                <div className={`${styles['section_14']}`}></div>
                <img
                  className={`${styles['image_15']} ${styles['pos_4']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0dbbfe24d738e98d7b12f5dfadfb1ced.png"
                />
              </div>
              <div className={`flex-row items-center ${styles['mt-3-5']}`}>
                <img
                  className={`shrink-0 ${styles['image_13']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=cd4c226fe5dc735dfbf8f123b9561f1b.png"
                />
                <div className={`flex-col flex-1 ${styles['group_17']} ml-12`}>
                  <div className={`flex-row justify-evenly items-center ${styles['group_18']}`}>
                    <div className={`${styles['section_11']}`}></div>
                    <span className={`${styles['font_19']} ${styles['text_33']}`}>澳大利亚玩法</span>
                    <div className={`${styles['section_11']}`}></div>
                  </div>
                  <div className={`flex-col justify-start ${styles['group_19']}`}>
                    <span className={`${styles['font_20']} ${styles['text_34']}`}>
                      澳大利亚经典玩法4日游澳大利亚经典玩法4日游
                    </span>
                  </div>
                  <div className={`flex-col justify-start items-start relative ${styles['group_20']}`}>
                    <div className={`${styles['section_15']}`}></div>
                    <div className={`${styles['group_21']} ${styles['pos_7']}`}>
                      <span className={`${styles['font_21']} ${styles['text_36']}`}>40%</span>
                      <span className={`${styles['font_6']} ${styles['text_35']}`}> 游客出游选择这个玩法</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['group_23']} ${styles['pos_3']}`}>
        <div className={`${styles['section_12']}`}></div>
        <span className={`${styles['font_10']} ${styles['text_32']} ${styles['pos_5']}`}>顶部</span>
        <img
          className={`relative ${styles['image_16']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fa755df8d7f6d8ccf6ee12313f1b035d.png"
        />
      </div>
    </div>
  );
}

Sousuojieguoye_jdianleimu_guojia_179_6099.defaultProps = { className: '' };