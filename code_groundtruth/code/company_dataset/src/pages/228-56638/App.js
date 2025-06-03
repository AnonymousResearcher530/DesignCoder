import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Shoutao_sousuo_yipaier_228_56638(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-center items-center relative ${styles['section']}`}>
        <div className={`flex-row ${styles['pos']}`}>
          <img
            className={`shrink-0 self-center ${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=cedfa67304a977744868e2fda09f85e9.png"
          />
          <span className={`${styles['font']} ${styles['text']} ml-4`}>中国移动</span>
          <img
            className={`shrink-0 self-center ${styles['image']} ml-4`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=368153cb7206d2bf9f70e2604a46369a.png"
          />
        </div>
        <span className={`${styles['font']} ${styles['text_2']}`}>9:41 AM</span>
        <div className={`flex-row ${styles['pos_2']}`}>
          <span className={`${styles['font']} ${styles['text_3']}`}>100%</span>
          <img
            className={`shrink-0 ${styles['image_2']} ml-2`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d6393dee3b5e05237288e94bed66f4ad.png"
          />
        </div>
      </div>
      <div className={`flex-row items-center ${styles['section_2']}`}>
        <div className={`flex-row items-center flex-1`}>
          <img
            className={`shrink-0 ${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fe159e8e57eabb4e6799b4974c85b6be.png"
          />
          <div className={`flex-row justify-between items-center flex-1 ${styles['section_3']} ml-18`}>
            <span className={`${styles['text_4']}`}>3c</span>
            <img
              className={`${styles['image_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1339672c0e8c8360c0ae8d8c19e39f4c.png"
            />
          </div>
        </div>
        <img
          className={`shrink-0 ${styles['image_6']} ml-20`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=586c0dc1ba5f9d3cf1b12a1976770c7d.png"
        />
      </div>
      <div className={`flex-col ${styles['section_4']}`}>
        <div className={`flex-row justify-between self-stretch ${styles['group']}`}>
          <div className={`flex-row items-baseline`}>
            <span className={`${styles['font_2']} ${styles['text_5']}`}>全部 </span>
            <span className={`${styles['font_2']} ${styles['text_6']} ${styles['ml-41-5']}`}>天猫</span>
          </div>
          <span className={`${styles['font_2']}`}>店铺</span>
          <div className={`flex-row ${styles['group_2']}`}>
            <span className={`${styles['font_2']}`}>淘攻略</span>
            <span className={`${styles['font_2']} ml-32`}>挑尖货</span>
          </div>
        </div>
        <div className={`self-start ${styles['section_5']}`}></div>
      </div>
      <div className={`flex-col ${styles['group_1']}`}>
        <div className={`flex-row justify-between items-center ${styles['section_6']}`}>
          <div className={`flex-row items-center`}>
            <span className={`${styles['font_3']} ${styles['text_7']}`}>综合</span>
            <img
              className={`shrink-0 ${styles['image_9']} ${styles['ml-5-5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1bf9d6a286832d485fa53d13a0c47d39.png"
            />
          </div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
            <span className={`${styles['font_3']} ${styles['text_8']}`}>销量</span>
          </div>
          <div className={`flex-row items-center`}>
            <div className={`flex-col justify-start items-start ${styles['image-wrapper']}`}>
              <img
                className={`${styles['image_8']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=76961bc1975e7334347c9cbc4b88b7db.png"
              />
            </div>
            <div className={`flex-row items-center ${styles['ml-21-5']}`}>
              <span className={`${styles['font_3']}`}>筛选</span>
              <img
                className={`shrink-0 ${styles['image_7']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=07f513fb276af34f5d45b2f58ca4dc74.png"
              />
            </div>
          </div>
        </div>
        <div className={`${styles['grid']}`}>
          <div className={`flex-col ${styles['grid-item']}`}>
            <div className={`flex-col self-stretch ${styles['section_7']}`}>
              <div className={`flex-col self-stretch ${styles['group_3']}`}>
                <img
                  className={`self-start ${styles['image_10']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=406049fea5bfc902df86ed64a4d4e4a9.png"
                />
                <span className={`self-center ${styles['text_9']} mt-2`}>3.5吋超薄人工智能</span>
              </div>
              <span className={`self-center ${styles['font_4']} ${styles['mt-4-5']}`}>1.06cm超薄A73强芯</span>
              <div className={`flex-col self-stretch relative ${styles['mt-4-5']}`}>
                <div className={`self-center ${styles['section_8']}`}></div>
                <div className={`flex-row items-center self-stretch ${styles['section_1']}`}>
                  <div className={`flex-col items-start flex-1`}>
                    <span className={`${styles['font_6']} ${styles['text_24']}`}>抢2018元购物卡</span>
                    <span className={`${styles['font_9']} ${styles['text_26']} ${styles['mt-3']}`}>买3000减100元</span>
                  </div>
                  <div className={`shrink-0 ${styles['section_10']} ${styles['view']}`}></div>
                  <div className={`flex-col items-start shrink-0 ${styles['group_4']}`}>
                    <span className={`${styles['font_5']}`}>到手价</span>
                    <div className={`${styles['group_5']} ${styles['mt-3-5']}`}>
                      <span className={`${styles['font_8']} ${styles['text_13']}`}>￥</span>
                      <span className={`${styles['font_7']}`}>2296</span>
                    </div>
                  </div>
                </div>
                <img
                  className={`${styles['section_8']} ${styles['pos_3']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8cd4ced7f193d41ab1e361bd52ab5eab.png"
                />
              </div>
            </div>
            <span className={`self-start ${styles['font_11']} ${styles['text_17']}`}>Skyworth/创维 50M9 </span>
            <div
              className={`flex-row justify-between items-center self-stretch ${styles['group_6']} ${styles['view_3']}`}
            >
              <div className={`flex-row ${styles['group_7']}`}>
                <div className={`flex-col justify-start shrink-0 ${styles['text-wrapper_2']}`}>
                  <span className={`${styles['font_12']} ${styles['text_19']}`}>金币抵扣2%</span>
                </div>
                <div
                  className={`flex-col justify-start items-center shrink-0 ${styles['text-wrapper_3']} ${styles['ml-3']}`}
                >
                  <span className={`${styles['font_13']} ${styles['text_20']}`}>包邮</span>
                </div>
              </div>
              <span className={`${styles['font_14']} ${styles['text_21']}`}>杭州</span>
            </div>
            <div className={`flex-row justify-between items-center self-stretch ${styles['group_8']}`}>
              <div className={`flex-row items-center self-stretch`}>
                <div className={`${styles['group_9']}`}>
                  <span className={`${styles['font_16']}`}>￥</span>
                  <span className={`${styles['font_15']}`}>2296</span>
                </div>
                <span className={`${styles['font_14']} ${styles['ml-7']}`}>30人付款</span>
              </div>
              <img
                className={`${styles['image_11']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c45b7b34678ee355c3baa5dc5e8a4c24.png"
              />
            </div>
          </div>
          <div className={`flex-col ${styles['grid-item']}`}>
            <div className={`flex-col self-stretch ${styles['section_7']}`}>
              <div className={`flex-col self-stretch ${styles['group_3']}`}>
                <img
                  className={`self-start ${styles['image_10']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5e17f8394b6f54c91f07fcd72353aa24.png"
                />
                <span className={`self-center ${styles['font_2']} ${styles['text_10']} ${styles['mt-3-5']}`}>
                  3.5吋超薄人工智能
                </span>
              </div>
              <span className={`self-center ${styles['font_4']} mt-4`}>1.06cm超薄A73强芯</span>
              <div className={`flex-col self-stretch relative mt-4`}>
                <div className={`self-center ${styles['section_8']}`}></div>
                <div className={`flex-row items-center self-stretch ${styles['section_9']}`}>
                  <div className={`flex-col items-start flex-1`}>
                    <span className={`${styles['font_6']}`}>限时直降300元</span>
                    <span className={`${styles['font_10']} ${styles['text_15']} ${styles['mt-3-5']}`}>
                      预约送489元爱奇艺会员
                    </span>
                  </div>
                  <div className={`shrink-0 ${styles['section_10']} ${styles['view_2']}`}></div>
                  <div className={`flex-col items-start shrink-0 ${styles['group_4']}`}>
                    <span className={`${styles['font_5']} ${styles['text_11']}`}>到手价</span>
                    <div className={`${styles['group_5']} ${styles['mt-3-5']}`}>
                      <span className={`${styles['font_8']} ${styles['text_13']}`}>￥</span>
                      <span className={`${styles['font_7']}`}>2296</span>
                    </div>
                  </div>
                </div>
                <img
                  className={`${styles['section_8']} ${styles['pos_4']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c6e94dbcc728d4bde8c83364c4ce96b6.png"
                />
              </div>
            </div>
            <span className={`self-start ${styles['font_11']} ${styles['text_18']}`}>Haier/海尔 LE48A31</span>
            <div
              className={`flex-row justify-between items-center self-stretch ${styles['group_6']} ${styles['view_1']}`}
            >
              <div className={`flex-row ${styles['group_7']}`}>
                <div className={`flex-col justify-start shrink-0 ${styles['text-wrapper_2']}`}>
                  <span className={`${styles['font_12']} ${styles['text_19']}`}>金币抵扣2%</span>
                </div>
                <div
                  className={`flex-col justify-start items-center shrink-0 ${styles['text-wrapper_3']} ${styles['ml-3']}`}
                >
                  <span className={`${styles['font_13']} ${styles['text_20']}`}>包邮</span>
                </div>
              </div>
              <span className={`${styles['font_14']} ${styles['text_21']}`}>杭州</span>
            </div>
            <div className={`flex-row justify-between items-center self-stretch ${styles['group_8']}`}>
              <div className={`flex-row items-center self-stretch`}>
                <div className={`${styles['group_9']}`}>
                  <span className={`${styles['font_16']}`}>￥</span>
                  <span className={`${styles['font_15']}`}>2296</span>
                </div>
                <span className={`${styles['font_14']} ${styles['ml-7']}`}>30人付款</span>
              </div>
              <img
                className={`${styles['image_11']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c45b7b34678ee355c3baa5dc5e8a4c24.png"
              />
            </div>
          </div>
          <div className={`flex-col ${styles['grid-item']}`}>
            <div className={`flex-col self-stretch ${styles['section_11']}`}>
              <img
                className={`self-start ${styles['image_13']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=587a1fbe82cb8f6a8926e0b9467bb63c.png"
              />
              <div className={`flex-col self-stretch ${styles['mt-6-5']}`}>
                <span className={`self-center ${styles['text_22']}`}>空调3匹定频冷暖</span>
                <span className={`self-center ${styles['font_10']} ${styles['text_23']} ${styles['mt-4-5']}`}>
                  自动化霜 独立除湿
                </span>
                <div className={`flex-col self-stretch relative ${styles['mt-4-5']}`}>
                  <div className={`self-center ${styles['section_8']}`}></div>
                  <div className={`flex-row items-center self-stretch ${styles['section_1']}`}>
                    <div className={`flex-col items-start flex-1`}>
                      <span className={`${styles['font_8']} ${styles['text_24']}`}>抢2018元购物卡</span>
                      <span className={`${styles['font_9']} ${styles['text_26']} ${styles['mt-3']}`}>
                        买3000减100元
                      </span>
                    </div>
                    <div className={`shrink-0 ${styles['section_10']} ${styles['view_4']}`}></div>
                    <div className={`flex-col items-start shrink-0 ${styles['group_10']}`}>
                      <span className={`${styles['font_5']}`}>到手价</span>
                      <div className={`${styles['group_11']} ${styles['mt-3-5']}`}>
                        <span className={`${styles['font_8']} ${styles['text_25']}`}>￥</span>
                        <span className={`${styles['font_7']}`}>2296</span>
                      </div>
                    </div>
                  </div>
                  <img
                    className={`${styles['section_8']} ${styles['pos_8']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=304bcc4a14ae8236fde6989bf1aced8d.png"
                  />
                </div>
              </div>
            </div>
            <span className={`self-start ${styles['font_11']} ${styles['text_28']}`}>Gree/格力 KFR-72LW</span>
            <div
              className={`flex-row justify-between items-center self-stretch ${styles['group_6']} ${styles['view_6']}`}
            >
              <div className={`flex-row ${styles['group_7']}`}>
                <div className={`flex-col justify-start shrink-0 ${styles['text-wrapper_2']}`}>
                  <span className={`${styles['font_12']} ${styles['text_19']}`}>金币抵扣2%</span>
                </div>
                <div
                  className={`flex-col justify-start items-center shrink-0 ${styles['text-wrapper_3']} ${styles['ml-3']}`}
                >
                  <span className={`${styles['font_13']} ${styles['text_20']}`}>包邮</span>
                </div>
              </div>
              <span className={`${styles['font_14']} ${styles['text_21']}`}>杭州</span>
            </div>
            <div className={`flex-row justify-between items-center self-stretch ${styles['group_8']}`}>
              <div className={`flex-row items-center self-stretch`}>
                <div className={`${styles['group_9']}`}>
                  <span className={`${styles['font_16']}`}>￥</span>
                  <span className={`${styles['font_15']}`}>2296</span>
                </div>
                <span className={`${styles['font_14']} ${styles['ml-7']}`}>30人付款</span>
              </div>
              <img
                className={`${styles['image_11']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c45b7b34678ee355c3baa5dc5e8a4c24.png"
              />
            </div>
          </div>
          <div className={`flex-col justify-start items-center relative ${styles['grid-item_2']}`}>
            <img
              className={`shrink-0 ${styles['image_12']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=cd19e597707c34e92bb669f6942bb4db.png"
            />
            <div className={`flex-col ${styles['section_14']} ${styles['pos_9']}`}>
              <span className={`self-center ${styles['font_6']} ${styles['text_27']}`}>#运动型男#</span>
              <span className={`self-center ${styles['font_6']} ${styles['text_29']}`}>轻质防滑跑步鞋好评榜</span>
              <div className={`flex-row justify-evenly self-stretch ${styles['group_12']}`}>
                <div className={`self-center ${styles['section_15']}`}></div>
                <span className={`${styles['font_6']} ${styles['text_30']}`}>天猫精选指南</span>
                <div className={`self-center ${styles['section_15']}`}></div>
              </div>
            </div>
            <div className={`shrink-0 ${styles['section_13']} ${styles['pos_7']}`}></div>
            <div className={`shrink-0 ${styles['section_12']} ${styles['pos_6']}`}></div>
            <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']} ${styles['pos_5']}`}>
              <img
                className={`${styles['image_14']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=250421b151a2d10eb18d09b34902b473.png"
              />
            </div>
          </div>
          <div className={`flex-col justify-start relative ${styles['grid-item_3']}`}>
            <div className={`${styles['section_16']}`}></div>
            <img
              className={`${styles['image_10']} ${styles['pos_10']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fcb137b4d125ef3dd3685649f8b53f61.png"
            />
          </div>
          <div className={`flex-col relative ${styles['grid-item_4']}`}>
            <div className={`flex-col self-stretch`}>
              <img
                className={`self-start ${styles['image_10']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5e17f8394b6f54c91f07fcd72353aa24.png"
              />
              <span className={`self-center ${styles['text_31']} ${styles['mt-2-5']}`}>3.5吋超薄人工智能</span>
            </div>
            <span className={`self-center ${styles['font_4']} ${styles['text_32']}`}>1.06cm超薄A73强芯</span>
            <div className={`self-stretch ${styles['section_17']}`}></div>
            <img
              className={`${styles['section_8']} ${styles['pos_11']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c86f811c8bef9869369d0a4857fb9afc.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Shoutao_sousuo_yipaier_228_56638.defaultProps = { className: '' };