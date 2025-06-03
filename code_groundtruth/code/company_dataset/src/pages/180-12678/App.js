import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Artboard_180_12678(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between ${styles['group_1']}`}>
        <div className={`flex-row items-center self-start ${styles['group']}`}>
          <img
            className={`${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c533ad212043184479cdae8a0fb2bfb2.png"
          />
          <img
            className={`${styles['image']} ml-4`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bc241b9da2b4d96dbf43c9aae4de0aa4.png"
          />
        </div>
        <span className={`self-start ${styles['font']} ${styles['text']}`}>下午15:17</span>
        <div className={`flex-row`}>
          <span className={`${styles['font']} ${styles['text_2']}`}>100%</span>
          <img
            className={`shrink-0 self-start ${styles['image_2']} ${styles['ml-4-5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=848523138d4d1d83017a365f07a52513.png"
          />
        </div>
      </div>
      <div className={`flex-row justify-center items-center ${styles['group_17']}`}>
        <img
          className={`${styles['image_4']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6971fc3bf2db750fd3c1d4eaf131e190.png"
        />
        <span className={`${styles['text_3']} ml-4`}>英涉服饰</span>
        <img
          className={`${styles['image_5']} ml-4`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e19cf35fce431e9d50b3fba51e4f88ca.png"
        />
      </div>
      <div className={`flex-col justify-start relative ${styles['section_2']}`}>
        <div className={`flex-row ${styles['equal-division']}`}>
          <img
            className={`${styles['image_6']} ${styles['equal-division-item']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7082c8c7b581ad3986b142e0192f43a3.png"
          />
          <img
            className={`${styles['image_6']} ${styles['equal-division-item']} ${styles['ml-15']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=42d7e6846a6152c17b2732517b255c12.png"
          />
        </div>
      </div>
      <div className={`flex-row ${styles['equal-division_2']} ${styles['section_3']}`}>
        <div className={`flex-col ${styles['equal-division-item_2']}`}>
          <div className={`flex-col justify-start items-center relative`}>
            <img
              className={`${styles['image_7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=673cd87645fa6fe76825626aa9f98fea.png"
            />
            <div className={`${styles['section_4']} ${styles['pos']}`}></div>
          </div>
          <span className={`${styles['font_3']} ${styles['text_5']} ${styles['mt-7']}`}>工作通知</span>
        </div>
        <div className={`flex-col items-center ${styles['group_2']} ${styles['group_16']}`}>
          <img
            className={`${styles['image_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5ce28aa8ef2df4a40fdc2c7f2021ca52.png"
          />
          <span className={`${styles['font_3']} ${styles['text_6']} ${styles['mt-7']}`}>未读日志</span>
        </div>
        <div className={`flex-col ${styles['equal-division-item_4']} ${styles['group_3']}`}>
          <div className={`flex-col justify-start items-center relative`}>
            <img
              className={`${styles['image_7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=53c62e7fa0f028807b2b15b8967fa6d9.png"
            />
            <div className={`flex-col justify-start items-center ${styles['text-wrapper']} ${styles['pos_2']}`}>
              <span className={`${styles['font_2']} ${styles['text_4']}`}>12</span>
            </div>
          </div>
          <span className={`${styles['font_3']} ${styles['text_7']} ${styles['mt-7']}`}>待我审批</span>
        </div>
        <div className={`flex-col items-center ${styles['group_4']} ${styles['equal-division-item_3']}`}>
          <img
            className={`${styles['image_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fbb5df08ebe31d7364301f5434acca0c.png"
          />
          <span className={`${styles['font_3']} ${styles['text_8']} ${styles['mt-7']}`}>我的审批</span>
        </div>
      </div>
      <div className={`flex-row ${styles['section_5']}`}>
        <div className={`flex-col ${styles['group_7']}`}>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']}`}>
            <span className={`${styles['font_4']} ${styles['text_9']}`}>内外勤管理</span>
          </div>
          <div className={`flex-col justify-start items-center relative ${styles['text-wrapper_5']}`}>
            <span className={`${styles['font_4']}`}>绩效管理</span>
          </div>
          <div className={`flex-col justify-start items-center relative ${styles['section_6']}`}>
            <span className={`${styles['font_4']} ${styles['text_13']}`}>财务管理</span>
            <div className={`${styles['section_7']} ${styles['pos_5']}`}></div>
          </div>
          <div className={`flex-col justify-start items-center relative ${styles['text-wrapper_5']}`}>
            <span className={`${styles['font_4']}`}>行政管理</span>
          </div>
          <div className={`flex-col`}>
            <div className={`flex-col justify-start items-center relative ${styles['text-wrapper_5']}`}>
              <span className={`${styles['font_4']}`}>人事管理</span>
            </div>
            <div className={`flex-col justify-start items-center relative ${styles['text-wrapper_1']}`}>
              <span className={`${styles['font_4']} ${styles['text_17']}`}>统计经营</span>
            </div>
            <div className={`${styles['section_9']}`}></div>
          </div>
        </div>
        <div className={`flex-col flex-1 self-start ${styles['group_19']}`}>
          <div className={`flex-col self-end ${styles['group_5']}`}>
            <div className={`flex-row justify-between ${styles['equal-division_3']}`}>
              <img
                className={`${styles['equal-division-item_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fed0449b442c03cc3f2e84c6ddd193ce.png"
              />
              <img
                className={`${styles['equal-division-item_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a8802b008b30d6620be813425d6a01fb.png"
              />
              <img
                className={`${styles['equal-division-item_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3c53736c2db02a022ccd720d1598472a.png"
              />
            </div>
            <div className={`flex-row justify-center relative mt-8`}>
              <span className={`${styles['font_3']} ${styles['text_10']} ${styles['pos_3']}`}>巡检日报</span>
              <span className={`${styles['font_3']} ${styles['text_11']}`}>签到</span>
              <span className={`${styles['font_3']} ${styles['text_12']} ${styles['pos_4']}`}>水电煤月报</span>
            </div>
          </div>
          <div className={`flex-row ${styles['equal-division_4']}`}>
            <div className={`flex-col ${styles['equal-division-item_6']} ${styles['group_8']}`}>
              <div className={`flex-col justify-start items-start self-stretch relative ${styles['group_11']}`}>
                <img
                  className={`${styles['image_8']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bfcacade5c610195d2c4dcf1a1001c99.png"
                />
                <div className={`flex-col justify-start items-center ${styles['text-wrapper_4']} ${styles['pos_6']}`}>
                  <span className={`${styles['text_14']}`}>极速</span>
                </div>
              </div>
              <span className={`self-start ${styles['font_3']} ${styles['mt-6-5']}`}>考勤打卡</span>
            </div>
            <div className={`flex-col ${styles['equal-division-item_6']} ${styles['group_9']}`}>
              <img
                className={`self-center ${styles['image_8']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=58c3a0b44877ecfa418c02b863647e86.png"
              />
              <div className={`flex-row items-center self-stretch ${styles['mt-6-5']}`}>
                <div className={`shrink-0 ${styles['section_8']}`}></div>
                <span className={`${styles['font_3']} ${styles['text_16']} ${styles['ml-5-5']}`}>电话会议</span>
              </div>
            </div>
            <div className={`flex-col items-center ${styles['equal-division-item_6']} ${styles['group_10']}`}>
              <img
                className={`${styles['image_8']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c881e994b4ef1ec5cba6278887f07ad1.png"
              />
              <span className={`${styles['font_3']} ${styles['text_27']} ${styles['mt-6-5']}`}>营业日报</span>
            </div>
          </div>
          <div className={`flex-row ${styles['equal-division_5']}`}>
            <div
              className={`flex-col items-center ${styles['equal-division-item_8']} ${styles['equal-division-item_7']}`}
            >
              <img
                className={`${styles['image_8']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=edeb982e701ca07af338ab2566ef4d89.png"
              />
              <span className={`${styles['font_3']} ${styles['text_1']} ${styles['mt-6-5']}`}>打折免单</span>
            </div>
            <div
              className={`flex-col ${styles['equal-division-item_8']} ${styles['equal-division-item_9']} ${styles['ml-8-5']}`}
            >
              <img
                className={`self-center ${styles['image_8']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=506047a160fc4368dc9607d63d5ec7d7.png"
              />
              <span className={`self-start ${styles['font_3']} ${styles['mt-6-5']}`}>营销活动申请</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['section_10']}`}>
        <span className={`self-start ${styles['text_18']}`}>全部应用</span>
        <div className={`self-stretch ${styles['grid']} ${styles['mt-9']}`}>
          <div className={`flex-col items-center ${styles['grid-item']}`}>
            <img
              className={`${styles['image_9']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=da6f4ddff55e951b4fcd2c2dca0b2299.png"
            />
            <span className={`${styles['font_5']} ${styles['text_19']} ${styles['mt-12-5']}`}>公告</span>
          </div>
          <div className={`flex-col items-center ${styles['grid-item_2']}`}>
            <img
              className={`${styles['image_10']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=224ac98e0b4a3ae6ab8e8784d426484d.png"
            />
            <span className={`${styles['font_5']} ${styles['mt-12-5']}`}>视频会议</span>
          </div>
          <div className={`flex-col items-center ${styles['grid-item_3']}`}>
            <img
              className={`${styles['image_10']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f6518bb24714e829224dc6ae4456a9b1.png"
            />
            <span className={`${styles['font_5']} ${styles['text_20']} ${styles['mt-12-5']}`}>日志</span>
          </div>
          <div className={`flex-col items-center relative ${styles['grid-item_4']}`}>
            <img
              className={`${styles['image_10']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=791f61f907d068888a23270fc32e0a6e.png"
            />
            <span className={`${styles['font_5']} ${styles['text_21']} ${styles['mt-12-5']}`}>签到</span>
          </div>
          <div className={`flex-col items-center relative ${styles['grid-item_4']}`}>
            <img
              className={`${styles['image_9']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4784a78b72316f2c6e6f8636130ee11d.png"
            />
            <span className={`${styles['font_5']} ${styles['text_22']} ${styles['mt-12-5']}`}>审批</span>
          </div>
          <div className={`flex-col items-center ${styles['grid-item_5']}`}>
            <img
              className={`${styles['image_9']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b572fea72c931c61049c9514a0e4a7e2.png"
            />
            <span className={`${styles['font_5']} ${styles['text_23']} ${styles['mt-12-5']}`}>考勤</span>
          </div>
          <div className={`flex-col items-center ${styles['grid-item_6']}`}>
            <img
              className={`${styles['image_10']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d8b05bc52b16e585fb12fd5da682c33e.png"
            />
            <span className={`${styles['font_5']} ${styles['text_24']} ${styles['mt-12-5']}`}>智能设备</span>
          </div>
        </div>
      </div>
      <div className={`flex-col justify-start relative ${styles['group_15']}`}>
        <div className={`relative ${styles['section_11']}`}></div>
        <img
          className={`${styles['image_11']} ${styles['pos_7']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f343d1d2949d0edd3d240a075d84b11f.png"
        />
      </div>
      <div className={`flex-col justify-start items-center relative ${styles['section_12']}`}>
        <img
          className={`${styles['image_12']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2e84018b3136d649d4450d4eb7293139.png"
        />
        <span className={`${styles['font_2']} ${styles['text_25']} ${styles['pos_8']}`}>英涉服饰</span>
      </div>
    </div>
  );
}

Artboard_180_12678.defaultProps = { className: '' };