import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Artboard(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col ${styles['section']}`}>
        <div className={`flex-row justify-center items-center self-stretch relative`}>
          <div className={`flex-row items-center ${styles['pos']}`}>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c533ad212043184479cdae8a0fb2bfb2.png"
            />
            <img
              className={`ml-4 ${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bc241b9da2b4d96dbf43c9aae4de0aa4.png"
            />
          </div>
          <span className={`${styles['font']} ${styles['text']}`}>下午15:17</span>
          <div className={`flex-row items-center ${styles['pos_2']}`}>
            <span className={`${styles['font']} ${styles['text_2']}`}>100%</span>
            <img
              className={`shrink-0 ${styles['image_2']} ${styles['ml-3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=848523138d4d1d83017a365f07a52513.png"
            />
          </div>
        </div>
        <img
          className={`self-center ${styles['image_4']} ${styles['mt-17']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ca87b6383fddd04fdd1ce37d0a8cc310.png"
        />
      </div>
      <div className={`flex-col justify-start relative ${styles['section_2']}`}>
        <div className={`flex-row ${styles['equal-division']}`}>
          <img
            className={`${styles['image_5']} ${styles['equal-division-item']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7082c8c7b581ad3986b142e0192f43a3.png"
          />
          <img
            className={`${styles['image_5']} ${styles['equal-division-item']} ${styles['ml-15']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=42d7e6846a6152c17b2732517b255c12.png"
          />
        </div>
      </div>
      <div className={`flex-row ${styles['equal-division_2']} ${styles['section_3']}`}>
        <div className={`flex-col ${styles['equal-division-item_2']}`}>
          <div className={`flex-col justify-start items-center relative`}>
            <img
              className={`${styles['image_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=673cd87645fa6fe76825626aa9f98fea.png"
            />
            <div className={`${styles['section_4']} ${styles['pos_3']}`}></div>
          </div>
          <span className={`${styles['font_3']} ${styles['text_4']} ${styles['mt-7']}`}>工作通知</span>
        </div>
        <div className={`flex-col items-center ${styles['group']} ${styles['equal-division-item_3']}`}>
          <img
            className={`${styles['image_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5ce28aa8ef2df4a40fdc2c7f2021ca52.png"
          />
          <span className={`${styles['font_3']} ${styles['text_5']} ${styles['mt-7']}`}>未读日志</span>
        </div>
        <div className={`flex-col ${styles['equal-division-item_4']} ${styles['group_2']}`}>
          <div className={`flex-col justify-start items-center relative`}>
            <img
              className={`${styles['image_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=53c62e7fa0f028807b2b15b8967fa6d9.png"
            />
            <div className={`flex-col justify-start items-center ${styles['text-wrapper']} ${styles['pos_4']}`}>
              <span className={`${styles['font_2']} ${styles['text_3']}`}>12</span>
            </div>
          </div>
          <span className={`${styles['font_3']} ${styles['text_6']} ${styles['mt-7']}`}>待我审批</span>
        </div>
        <div className={`flex-col items-center ${styles['group_3']} ${styles['equal-division-item_3']}`}>
          <img
            className={`${styles['image_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f8ca0caec26fdca1026a51a50bbe702d.png"
          />
          <span className={`${styles['font_3']} ${styles['text_7']} ${styles['mt-7']}`}>我的审批</span>
        </div>
      </div>
      <div className={`flex-col ${styles['section_5']}`}>
        <div className={`flex-row items-center`}>
          <div className={`flex-col`}>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']}`}>
              <span className={`${styles['font_4']} ${styles['text_8']}`}>内外勤管理</span>
            </div>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_3']}`}>
              <span className={`${styles['font_4']}`}>绩效管理</span>
            </div>
          </div>
          <div className={`flex-col flex-1 ${styles['group_4']} ${styles['ml-26-5']}`}>
            <div className={`flex-row justify-between ${styles['equal-division_3']}`}>
              <img
                className={`${styles['equal-division-item_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=edfde38c838199804da9a258966614b0.png"
              />
              <img
                className={`${styles['equal-division-item_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a89ac12b1c94c385feaa490a3a7fad05.png"
              />
              <img
                className={`${styles['equal-division-item_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d01ec3c0e12de14069653c08f3fc15b5.png"
              />
            </div>
            <div className={`mt-8 flex-row justify-center relative`}>
              <span className={`${styles['font_3']} ${styles['text_9']} ${styles['pos_5']}`}>巡检日报</span>
              <span className={`${styles['font_3']} ${styles['text_10']}`}>签到</span>
              <span className={`${styles['font_3']} ${styles['text_11']} ${styles['pos_6']}`}>水电煤月报</span>
            </div>
          </div>
        </div>
        <div className={`flex-col ${styles['group_5']}`}>
          <div className={`flex-row items-start`}>
            <div className={`flex-col ${styles['group_6']}`}>
              <div className={`flex-col justify-start items-center relative ${styles['section_6']}`}>
                <span className={`${styles['font_4']} ${styles['text_12']}`}>财务管理</span>
                <div className={`${styles['section_7']} ${styles['pos_7']}`}></div>
              </div>
              <div className={`flex-col justify-start items-center ${styles['text-wrapper_3']}`}>
                <span className={`${styles['font_4']}`}>行政管理</span>
              </div>
            </div>
            <div className={`flex-row ${styles['equal-division_4']} ${styles['ml-17']}`}>
              <div className={`flex-col ${styles['equal-division-item_6']} ${styles['group_7']}`}>
                <div className={`flex-col justify-start items-start self-stretch relative ${styles['group_10']}`}>
                  <img
                    className={`${styles['image_7']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d7c2808a47cb43e18b51f9e4f729bf4e.png"
                  />
                  <div className={`flex-col justify-start items-center ${styles['text-wrapper_4']} ${styles['pos_8']}`}>
                    <span className={`${styles['text_13']}`}>极速</span>
                  </div>
                </div>
                <span className={`self-start ${styles['font_3']} ${styles['text_14']} ${styles['mt-6-5']}`}>
                  考勤打卡
                </span>
              </div>
              <div className={`flex-col ${styles['equal-division-item_6']} ${styles['group_8']}`}>
                <img
                  className={`self-center ${styles['image_7']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9bd81b9e7b6d5c29b4c65280d97f49e5.png"
                />
                <div className={`flex-row items-center self-stretch ${styles['mt-6-5']}`}>
                  <div className={`shrink-0 ${styles['section_8']}`}></div>
                  <span className={`${styles['font_3']} ${styles['text_15']} ${styles['ml-5-5']}`}>电话会议</span>
                </div>
              </div>
              <div className={`flex-col items-center ${styles['equal-division-item_6']} ${styles['group_9']}`}>
                <img
                  className={`${styles['image_7']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d64a29848916802b36aab36f305c4610.png"
                />
                <span className={`${styles['font_3']} ${styles['mt-6-5']}`}>营业日报</span>
              </div>
            </div>
          </div>
          <div className={`flex-row items-center relative ${styles['group_11']}`}>
            <div className={`flex-col ${styles['group_6']}`}>
              <div className={`flex-col justify-start items-center relative ${styles['text-wrapper_5']}`}>
                <span className={`${styles['font_4']}`}>人事管理</span>
              </div>
              <div className={`flex-col justify-start items-center relative ${styles['text-wrapper_5']}`}>
                <span className={`${styles['font_4']} ${styles['text_16']}`}>统计经营</span>
              </div>
              <div className={`${styles['section_9']}`}></div>
            </div>
            <div className={`flex-row`}>
              <div className={`flex-col items-center ${styles['equal-division-item_7']}`}>
                <img
                  className={`${styles['image_7']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=06d34c8bdddea2f2904634592132c425.png"
                />
                <span className={`${styles['font_3']} ${styles['mt-6-5']}`}>打折免单</span>
              </div>
              <div className={`flex-col items-center ${styles['equal-division-item_7']} ${styles['ml-8-5']}`}>
                <img
                  className={`${styles['image_7']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c45b2e50e0449afde325c3c01f531523.png"
                />
                <span className={`${styles['font_3']} ${styles['mt-6-5']}`}>营销活动申请</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col relative`}>
        <div className={`flex-col ${styles['section_10']}`}>
          <span className={`self-start ${styles['text_17']}`}>全部应用</span>
          <div className={`${styles['grid']} ${styles['mt-9']}`}>
            <div className={`flex-col items-center relative ${styles['grid-item']}`}>
              <img
                className={`${styles['image_8']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a3791dfb7f88c6cd8ce1030bb0c8a67e.png"
              />
              <span className={`${styles['font_5']} ${styles['text_18']} ${styles['mt-12-5']}`}>公告</span>
            </div>
            <div className={`flex-col items-center relative ${styles['grid-item']}`}>
              <img
                className={`${styles['image_9']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fbdecc5b94b5962a58c38ad8d78d480b.png"
              />
              <span className={`${styles['font_5']} ${styles['mt-12-5']}`}>视频会议</span>
            </div>
            <div className={`flex-col items-center relative ${styles['grid-item']}`}>
              <img
                className={`${styles['image_9']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3ba6c9bf6478a4e27afc77972d3e9ad9.png"
              />
              <span className={`${styles['font_5']} ${styles['text_19']} ${styles['mt-12-5']}`}>日志</span>
            </div>
            <div className={`flex-col items-center relative ${styles['grid-item']}`}>
              <img
                className={`${styles['image_9']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=88ecfcab60526b2a96c48ebd2f1e5d13.png"
              />
              <span className={`${styles['font_5']} ${styles['text_20']} ${styles['mt-12-5']}`}>签到</span>
            </div>
            <div className={`flex-col items-center relative ${styles['grid-item']}`}>
              <img
                className={`${styles['image_8']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=44bacab4ee46cb322c027e0e12e033ec.png"
              />
              <span className={`${styles['font_5']} ${styles['text_21']} ${styles['mt-12-5']}`}>审批</span>
            </div>
            <div className={`flex-col items-center relative ${styles['grid-item']}`}>
              <img
                className={`${styles['image_8']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c19810a2b86fe1bafa73045997538ec7.png"
              />
              <span className={`${styles['font_5']} ${styles['text_22']} ${styles['mt-12-5']}`}>考勤</span>
            </div>
            <div className={`flex-col items-center relative ${styles['grid-item']}`}>
              <img
                className={`${styles['image_9']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=db299cb7ef9555d72aa48cf2ebb96138.png"
              />
              <span className={`${styles['font_5']} ${styles['text_23']} ${styles['mt-12-5']}`}>智能设备</span>
            </div>
          </div>
        </div>
        <div className={`relative ${styles['section_11']}`}></div>
        <img
          className={`${styles['image_10']} ${styles['pos_9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f343d1d2949d0edd3d240a075d84b11f.png"
        />
      </div>
      <div className={`flex-col justify-start items-center relative ${styles['section_12']}`}>
        <img
          className={`${styles['image_11']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9035dc915aaec011ba3f57c9675dcedb.png"
        />
        <span className={`${styles['font_2']} ${styles['text_24']} ${styles['pos_10']}`}>英涉服饰</span>
      </div>
    </div>
  );
}

Artboard.defaultProps = { className: '' };