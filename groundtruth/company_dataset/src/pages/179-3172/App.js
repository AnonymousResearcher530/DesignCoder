import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Sousuojieguoye_jgangyouhua_moren_179_3172(props) {
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
            <span className={`${styles['font_2']} ${styles['text_4']}`}>宝贝</span>
            <img
              className={`shrink-0 ${styles['image_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=cb21d272b67dfab0b48e2e6d1fbc40f4.png"
            />
            <span className={`${styles['font_2']} ${styles['text_5']}`}>澳大利亚</span>
          </div>
          <img
            className={`${styles['image_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7e495053200902199aa0b27e2cd6782f.png"
          />
        </div>
      </div>
      <div className={`flex-row justify-between items-center ${styles['section_4']} ${styles['pos_3']}`}>
        <div className={`flex-row items-center`}>
          <div className={`${styles['section_5']}`}></div>
          <div className={`flex-col ml-14`}>
            <div className={`flex-row`}>
              <span className={`self-center ${styles['font_3']} ${styles['text_6']}`}>澳大利亚</span>
              <img
                className={`shrink-0 self-start ${styles['image_8']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=24d4170b5e7a3bb9d24bffdfb57e37db.png"
              />
              <span className={`self-center ${styles['font_4']} ${styles['text_7']}`}>36℃</span>
            </div>
            <div className={`flex-row ${styles['group_1']} ${styles['mt-9']}`}>
              <span className={`${styles['font_4']} ${styles['text_8']}`}>38921人去过</span>
              <span className={`${styles['font_4']} ${styles['text_9']} ml-14`}>521篇游记</span>
            </div>
          </div>
        </div>
        <img
          className={`${styles['image_6']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=84b3da0f90dcb11e5abcdb2cc4f9792a.png"
        />
      </div>
      <div className={`flex-col relative ${styles['group_18']}`}>
        <img
          className={`${styles['image_9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=336740788b3ce5b9066eb9590011fbb6.png"
        />
        <div className={`flex-row items-center ${styles['section_6']}`}>
          <div className={`flex-row items-center shrink-0`}>
            <img
              className={`shrink-0 ${styles['image_10']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5eb6f03693b13558db660c8126667804.png"
            />
            <span className={`${styles['font_5']} ${styles['text_10']} ${styles['ml-4-5']}`}>全国出发</span>
            <img
              className={`shrink-0 ${styles['image_11']} ${styles['ml-4-5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a925fc914f63dc15c29781b5651cf366.png"
            />
          </div>
          <span className={`${styles['font_5']} ${styles['text_11']}`}>推荐排序</span>
          <div className={`flex-row shrink-0 ${styles['group']}`}>
            <span className={`${styles['font_5']} ${styles['text_12']}`}>综合筛选</span>
            <img
              className={`shrink-0 self-center ${styles['image_11']} ${styles['ml-4-5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a925fc914f63dc15c29781b5651cf366.png"
            />
          </div>
        </div>
        <div className={`flex-col`}>
          {data.items.map((item, index) => (
            <div className={`flex-col ${styles['section_7']}`} key={index}>
              <div className={`flex-row items-center self-stretch ${styles['group_2']}`}>
                <div className={`flex-col ${styles['section_8']}`}>
                  <div className={`flex-col justify-start items-center self-start ${styles['text-wrapper']}`}>
                    <span className={`${styles['font_6']} ${styles['text_13']}`}>自由行</span>
                  </div>
                  <div className={`flex-col justify-start items-center self-stretch ${styles['text-wrapper_4']} mt-64`}>
                    <span className={`${styles['font_4']} ${styles['text_18']}`}>多地出发</span>
                  </div>
                </div>
                <div className={`flex-col flex-1 ${styles['group_3']} ml-12`}>
                  <span className={`self-start ${styles['font_7']} ${styles['text_14']}`}>
                    北京 - 悉尼 6天5晚自由行
                  </span>
                  <span className={`self-start ${styles['font_8']} ${styles['text_15']}`}>
                    交通｜班期:春节 12/12 12/16 12/19等
                  </span>
                  <div className={`flex-row self-stretch ${styles['group_4']}`}>
                    <img
                      className={`${styles['image_12']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=22d0f9938910a0cfc0be0e811c9b136c.png"
                    />
                    <img
                      className={`${styles['image_13']} ${styles['ml-3']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=941c06e306d911b00ec6f245ae108d4a.png"
                    />
                    <div className={`flex-col justify-start ${styles['text-wrapper_2']} ${styles['ml-3']}`}>
                      <span className={`${styles['font_9']} ${styles['text_16']}`}>即时确认</span>
                    </div>
                    <div className={`flex-col justify-start ${styles['text-wrapper_3']} ${styles['ml-3']}`}>
                      <span className={`${styles['font_10']} ${styles['text_17']}`}>满减券</span>
                    </div>
                  </div>
                  <div className={`flex-row justify-between items-center self-stretch ${styles['group_5']}`}>
                    <span className={`${styles['font_8']}`}>月售58笔｜38条评价</span>
                    <div className={`flex-row items-baseline`}>
                      <span className={`${styles['font_3']} ${styles['text_19']}`}>9999</span>
                      <span className={`${styles['font_12']} ${styles['text_21']}`}>￥</span>
                      <span className={`${styles['font_11']} ${styles['text_20']}`}>起</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`self-end ${styles['section_10']}`}></div>
            </div>
          ))}
        </div>
        <div className={`flex-row items-center ${styles['section_12']}`}>
          <img
            className={`shrink-0 ${styles['image_15']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fb6960cf83d9e74d1995af30f7f706ae.png"
          />
          <div className={`flex-col flex-1 ${styles['ml-11']}`}>
            <div className={`flex-col ${styles['group_9']}`}>
              <div className={`flex-row justify-around items-center ${styles['group_10']}`}>
                <div className={`${styles['section_13']}`}></div>
                <span className={`${styles['font_4']} ${styles['text_34']}`}>澳大利亚游记</span>
                <div className={`${styles['section_13']}`}></div>
              </div>
              <span className={`${styles['font_14']} ${styles['mt-13']}`}>
                玛丽丽旅行志 | 如此上镜的悉尼，何不暴走！(6日经典路线)
              </span>
            </div>
            <div className={`flex-row justify-between items-center ${styles['mt-17']}`}>
              <div className={`flex-row`}>
                <img
                  className={`shrink-0 ${styles['image_16']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e55f04b42967020a1f324895ce332411.png"
                />
                <span className={`self-start ${styles['font_4']} ${styles['text_35']} ml-6`}>玛丽丽旅行志</span>
              </div>
              <div className={`${styles['group_12']}`}>
                <span className={`${styles['font_13']} ${styles['text_37']}`}>5276</span>
                <span className={`${styles['font_13']} ${styles['text_36']}`}>人已读</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex-col justify-start`}>
          <div className={`flex-col ${styles['section_15']}`}>
            <div className={`self-end ${styles['section_16']}`}></div>
            <div className={`flex-row self-stretch relative ${styles['group_13']} mt-10`}>
              <img
                className={`${styles['image_15']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=cd4c226fe5dc735dfbf8f123b9561f1b.png"
              />
              <div className={`self-start ${styles['section_13']} ${styles['view']}`}></div>
              <span className={`self-start ${styles['font_4']} ${styles['text_39']}`}>澳大利亚玩法</span>
              <div className={`flex-col ${styles['group_14']} ${styles['pos_7']}`}>
                <div className={`self-end ${styles['section_13']} ${styles['view_2']}`}></div>
                <div className={`flex-col justify-start self-stretch ${styles['mt-16-5']}`}>
                  <span className={`${styles['font_14']}`}>澳大利亚经典玩法4日游澳大利亚经典玩法4日游</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['group_19']} ${styles['pos_10']}`}>
        <div className={`${styles['section_14']}`}></div>
        <img
          className={`${styles['image_17']} ${styles['pos_4']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5fbfc5e534755452d6d8fb970ae9f3fc.png"
        />
        <span className={`${styles['font_6']} ${styles['text_38']} ${styles['pos_5']}`}>顶部</span>
        <img
          className={`relative ${styles['image_18']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fa755df8d7f6d8ccf6ee12313f1b035d.png"
        />
      </div>
    </div>
  );
}

Sousuojieguoye_jgangyouhua_moren_179_3172.defaultProps = { className: '' };