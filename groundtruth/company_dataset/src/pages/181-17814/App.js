import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Page_1_copy_5_181_17814(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col ${styles['section']}`}>
        <div className={`flex-row justify-center items-center relative ${styles['group_2']}`}>
          <div className={`flex-row items-center ${styles['pos_2']}`}>
            <img
              className={`${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bde31d366cb81d6168dae4715fd5186a.png"
            />
            <img
              className={`${styles['image_2']} ${styles['ml-5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f9eff6f518e76f92cf2ca6913ea660e3.png"
            />
          </div>
          <span className={`${styles['font']} ${styles['text_2']}`}>1:20 PM</span>
          <div className={`flex-row self-stretch ${styles['pos']}`}>
            <img
              className={`shrink-0 self-center ${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=84036208133ba61793547c145357b688.png"
            />
            <span className={`self-start ${styles['font']} ${styles['text']}`}>77%</span>
            <img
              className={`shrink-0 self-center ${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=20b6d623853d9cf567a8e22daa5b92d6.png"
            />
          </div>
        </div>
        <div className={`flex-col`}>
          <div className={`flex-col ${styles['group_3']}`}>
            <div className={`flex-row justify-center items-center relative ${styles['group_4']}`}>
              <div className={`flex-row items-center ${styles['pos_4']}`}>
                <img
                  className={`shrink-0 ${styles['image_6']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c99adb03c003324ae8850fa4fe5892b2.png"
                />
                <span className={`${styles['font_2']} ${styles['text_4']} ${styles['ml-4-5']}`}>返回</span>
              </div>
              <span className={`${styles['text_3']}`}>余额宝</span>
              <div className={`flex-row ${styles['pos_3']}`}>
                <img
                  className={`${styles['image_5']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c7e311cb55ff2ba785190fd4986085c1.png"
                />
                <img
                  className={`${styles['image_7']} ${styles['ml-21']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4456dc2defc72b353c1ac5c82954687c.png"
                />
              </div>
            </div>
            <div className={`flex-col ${styles['group_5']} ${styles['mt-20-5']}`}>
              <div className={`flex-col items-center`}>
                <span className={`${styles['font_3']} ${styles['text_5']}`}>昨日收益(元)</span>
                <span className={`${styles['text_6']} ${styles['mt-11']}`}>9.30</span>
              </div>
              <div className={`flex-col ${styles['group_6']} ${styles['mt-25']}`}>
                <div className={`flex-row items-center self-stretch ${styles['group_7']}`}>
                  <span className={`${styles['font_4']} ${styles['text_7']}`}>总金额 100,670.33 元</span>
                  <img
                    className={`shrink-0 ${styles['image_8']} ${styles['ml-7']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5e9e63a0d7be0c258912664228f08947.png"
                  />
                </div>
                <span className={`self-center ${styles['font_4']} ${styles['text_8']} ${styles['mt-6-5']}`}>
                  冻结金额 0.98 元
                </span>
              </div>
            </div>
          </div>
          <div className={`flex-row justify-center ${styles['equal-division']} ${styles['section_2']}`}>
            <div className={`flex-col items-center ${styles['equal-division-item_1']} ${styles['group_16']}`}>
              <span className={`${styles['font_3']} ${styles['text_5']}`}>累计收益(元)</span>
              <span className={`${styles['font_4']} ${styles['text_37']} ${styles['mt-8-5']}`}>1070.33</span>
            </div>
            <div className={`flex-col items-center ${styles['equal-division-item']}`}>
              <span className={`${styles['font_3']} ${styles['text_5']}`}>万份收益(元)</span>
              <span className={`${styles['font_4']} ${styles['mt-8-5']}`}>1.1017</span>
            </div>
            <div className={`flex-col items-center ${styles['equal-division-item_3']} ${styles['group_1']}`}>
              <span className={`${styles['font_3']} ${styles['text_5']} ${styles['text_1']}`}>七日年化(%)</span>
              <span className={`${styles['font_4']} ${styles['mt-9']}`}>4.0990</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
        <span className={`${styles['text_9']}`}>＊余额宝货币基金销售服务由天弘基金提供</span>
      </div>
      <div className={`flex-col ${styles['group_17']}`}>
        <div className={`flex-row self-stretch relative ${styles['section_3']}`}>
          <img
            className={`self-center ${styles['image_9']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e762bc01492f80d8f5d0fb468d58f235.png"
          />
          <span className={`self-start ${styles['font_5']} ${styles['text_10']} ${styles['ml-8-5']}`}>优质理财</span>
        </div>
        <div className={`flex-col self-stretch ${styles['section_4']}`}>
          <div className={`flex-row justify-between items-center`}>
            <span className={`${styles['font_6']}`}>4.3430%</span>
            <span className={`${styles['font_2']} ${styles['text_11']}`}>活期理财新选择</span>
          </div>
          <div className={`flex-row justify-between ${styles['mt-9-5']}`}>
            <span className={`${styles['font_7']}`}>七日年化(7.11)</span>
            <div className={`flex-row items-center`}>
              <span className={`${styles['font_1']} ${styles['text_12']}`}>活期</span>
              <span className={`${styles['font_1']} ${styles['text_14']}`}>|</span>
              <span className={`${styles['font_1']} ${styles['text_13']}`}>低风险</span>
            </div>
          </div>
        </div>
        <div className={`shrink-0 self-start relative ${styles['section_5']}`}></div>
        <div className={`flex-col justify-start self-stretch relative ${styles['section_6']}`}>
          <div className={`flex-col ${styles['view']}`}>
            <div className={`flex-row justify-between items-center`}>
              <span className={`${styles['font_6']}`}>4.770%</span>
              <div className={`flex-row`}>
                <span className={`${styles['font_2']} ${styles['text_15']}`}>48天期限</span>
                <span className={`${styles['font_2']} ${styles['text_16']} ${styles['ml-7']}`}>5万元起购</span>
              </div>
            </div>
            <div className={`flex-row justify-between ${styles['mt-10-5']}`}>
              <span className={`${styles['font_7']}`}>业绩基准(年化)</span>
              <div className={`flex-row items-center`}>
                <span className={`${styles['font_1']}`}>定期</span>
                <span className={`${styles['font_1']} ${styles['text_18']}`}>|</span>
                <span className={`${styles['font_1']} ${styles['text_17']}`}>低风险</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex-row justify-center items-center self-stretch ${styles['section_1']}`}>
          <span className={`${styles['font_2']} ${styles['text_19']}`}>更多优质理财</span>
          <img
            className={`${styles['image_10']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=70bdcab481dbd907a565d58b4d083e3c.png"
          />
        </div>
      </div>
      <div className={`flex-col ${styles['group_11']}`}>
        <div className={`flex-row justify-between items-center relative ${styles['section_8']}`}>
          <div className={`flex-row items-center`}>
            <img
              className={`shrink-0 ${styles['image_11']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3d7d73ba2d9c832c42447279bfec44d3.png"
            />
            <span className={`${styles['font_5']} ${styles['text_20']} ${styles['ml-9']}`}>资金管理</span>
          </div>
          <div className={`flex-row items-center`}>
            <span className={`${styles['font_1']}`}>简单生活轻松赚</span>
            <img
              className={`shrink-0 ${styles['image_12']} ml-14`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=398c979341ada58109026bf6f07362f8.png"
            />
          </div>
        </div>
        <div className={`flex-row justify-between ${styles['section_9']}`}>
          <span className={`self-start ${styles['font_9']} ${styles['text_21']}`}>工资转入</span>
          <div className={`flex-col self-center ${styles['group_8']}`}>
            <div className={`flex-row items-baseline`}>
              <span className={`${styles['font_10']} ${styles['text_23']}`}>02-27</span>
              <span className={`${styles['font_10']} ${styles['text_22']} ml-12`}>1000.00元 已转</span>
            </div>
            <div className={`flex-row items-baseline ${styles['mt-11-5']}`}>
              <span className={`${styles['text_25']}`}>03-03</span>
              <span className={`${styles['font_10']} ${styles['text_24']} ${styles['ml-12-5']}`}>1000.00元 将转</span>
            </div>
          </div>
        </div>
        <div className={`flex-col relative ${styles['group_9']}`}>
          <div className={`flex-col items-start relative ${styles['section_11']}`}>
            <span className={`${styles['font_9']} ${styles['text_26']}`}>自动还贷</span>
            <span className={`${styles['font_8']} ${styles['text_27']} ${styles['mt-10-5']}`}>一次设置，每月省心</span>
          </div>
          <div className={`flex-col items-start ${styles['section_12']}`}>
            <span className={`${styles['font_9']}`}>余额自动转入</span>
            <span className={`${styles['font_8']} ${styles['text_28']} ${styles['mt-11-5']}`}>
              不让余额白躺着，能赚收益也能花
            </span>
          </div>
          <div className={`${styles['section_10']} ${styles['pos_5']}`}></div>
        </div>
      </div>
      <div className={`flex-col`}>
        <div className={`flex-row justify-between items-center relative ${styles['section_8']}`}>
          <div className={`flex-row items-center`}>
            <img
              className={`shrink-0 ${styles['image_13']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f18a936279f3d727b28890f0834119a8.png"
            />
            <span className={`${styles['font_5']} ${styles['ml-11-5']}`}>心愿储蓄</span>
          </div>
          <div className={`flex-row items-center`}>
            <span className={`${styles['font_1']} ${styles['text_29']}`}>帮你的心愿管住钱</span>
            <img
              className={`shrink-0 ${styles['image_12']} ml-14`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=398c979341ada58109026bf6f07362f8.png"
            />
          </div>
        </div>
        <div className={`flex-col justify-start relative ${styles['section_13']}`}>
          <div className={`flex-row ${styles['equal-division_2']}`}>
            <div className={`flex-col items-center ${styles['group_10']} ${styles['group_12']}`}>
              <img
                className={`${styles['image_14']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0214129f44e4c3cfdbc0d2af72f9e0fb.png"
              />
              <span className={`${styles['font_10']} ${styles['text_30']} ${styles['mt-17-5']}`}>给爸妈的礼物</span>
            </div>
            <div className={`flex-col items-center ${styles['group_10']} ${styles['group_13']}`}>
              <img
                className={`${styles['image_14']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=afa1577fcd10d47a41d303c5e332e6aa.png"
              />
              <span className={`${styles['font_10']} ${styles['text_33']} ${styles['mt-17-5']}`}>来一次远行</span>
            </div>
            <div className={`flex-col items-center ${styles['group_10']} ${styles['group_14']}`}>
              <img
                className={`${styles['image_14']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=839a0ba358ab7306ce72271139f1a8f6.png"
              />
              <span className={`${styles['font_10']} ${styles['text_34']} ${styles['mt-17-5']}`}>许下心愿</span>
            </div>
          </div>
        </div>
        <div className={`flex-row justify-center items-center ${styles['section_7']}`}>
          <span className={`${styles['font_2']}`}>心愿管理</span>
          <img
            className={`${styles['image_10']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=70bdcab481dbd907a565d58b4d083e3c.png"
          />
        </div>
      </div>
      <div className={`flex-row ${styles['group_15']}`}>
        <div className={`flex-col justify-start items-center relative ${styles['text-wrapper_2']}`}>
          <span className={`${styles['font_11']} ${styles['text_31']}`}>转出</span>
        </div>
        <div className={`flex-col justify-start items-center ${styles['text-wrapper_3']}`}>
          <span className={`${styles['font_11']} ${styles['text_32']}`}>转入</span>
        </div>
      </div>
    </div>
  );
}

Page_1_copy_5_181_17814.defaultProps = { className: '' };