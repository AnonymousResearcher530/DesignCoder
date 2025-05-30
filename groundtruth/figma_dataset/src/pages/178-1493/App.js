import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Chengjieye_sanceng_178_1493(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null],
  });

  return (
    <div className={`flex-col justify-start relative ${styles['page']} ${props.className}`}>
      <div className={`flex-col items-start relative ${styles['group_1']}`}>
        <img
          className={`${styles['image_21']} ${styles['image_37']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b007124155d1389715e4d20d1aff15bd.png"
        />
        <img
          className={`${styles['image_34']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=61deb119f011fbab2daf267a9d798336.png"
        />
        <img
          className={`${styles['image_21']} ${styles['pos_24']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b007124155d1389715e4d20d1aff15bd.png"
        />
        <img
          className={`${styles['image']} ${styles['pos']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=db783e5cc3485ae3188288867662c391.png"
        />
        <img
          className={`${styles['image_21']} ${styles['pos_22']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b007124155d1389715e4d20d1aff15bd.png"
        />
        <img
          className={`${styles['image_33']} ${styles['pos_41']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8e0e64e6f9c3258e562b88e9e83af10b.png"
        />
        <img
          className={`${styles['image_22']} ${styles['pos_23']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5206feb30b5b06768ab91a0256dc5e9c.png"
        />
        <img
          className={`${styles['image_22']} ${styles['pos_28']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5206feb30b5b06768ab91a0256dc5e9c.png"
        />
        <img
          className={`${styles['image_9']} ${styles['pos_10']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=01bb04309d2e670d56eebf7d3b8cfca1.png"
        />
        <img
          className={`${styles['image_11']} ${styles['pos_13']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=658613f1996ccdcaf74737b3613efbe4.png"
        />
        <img
          className={`${styles['image_10']} ${styles['pos_12']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bc7f94bac5d564d3e854cadd43ac9216.png"
        />
        <img
          className={`${styles['image_12']} ${styles['pos_14']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6e734ef48f3ada0b9a78bfb6dba00efc.png"
        />
        <img
          className={`${styles['image_13']} ${styles['pos_16']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1657f4aa0f7380208c3b6feeef3e748f.png"
        />
        <img
          className={`${styles['image_22']} ${styles['pos_26']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5206feb30b5b06768ab91a0256dc5e9c.png"
        />
        <div className={`${styles['section_11']} ${styles['pos_50']}`}></div>
        <img
          className={`${styles['image_26']} ${styles['pos_30']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=57385a906d7005c130614cbb7e359351.png"
        />
        <div className={`${styles['section_7']} ${styles['pos_51']}`}></div>
        <img
          className={`${styles['image_30']} ${styles['pos_37']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5549934d4c41dfbffdf6aef66a09fa24.png"
        />
        <div className={`${styles['section_10']} ${styles['pos_49']}`}></div>
        <img
          className={`${styles['image_32']} ${styles['pos_39']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8a0ddca9428b1412fb71f141b22efe5f.png"
        />
        <img
          className={`${styles['image_35']} ${styles['pos_42']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=af4495716f534a0ff9676b4d61623a19.png"
        />
        <img
          className={`${styles['image_31']} ${styles['pos_38']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e526045e638ddff7a4cafef95db519b8.png"
        />
        <div className={`${styles['section_11']} ${styles['pos_45']}`}></div>
        <img
          className={`${styles['image_25']} ${styles['pos_29']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a2ba0ce3736004ebfd58c859fcc6723b.png"
        />
      </div>
      <div className={`flex-col ${styles['group_6']} ${styles['pos_1']}`}>
        <div className={`flex-col justify-start items-center self-stretch ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_14']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=cb4cd6da3fd642fe9c30b2d652af1548.png"
          />
        </div>
        <div className={`self-center ${styles['section_8']}`}></div>
        <div className={`${styles['section_9']} ${styles['pos_33']}`}></div>
        <img
          className={`${styles['image_27']} ${styles['pos_34']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=11956bd4cc05d635136ce32f86f4800d.png"
        />
        <img
          className={`${styles['image_29']} ${styles['pos_36']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2539a03d5208293209be7e2c13d49282.png"
        />
        <img
          className={`${styles['image_28']} ${styles['pos_35']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=08c0f683333fee59ab59f5a726607436.png"
        />
        <img
          className={`${styles['image_24']} ${styles['pos_25']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=281830a72e25f2cebed101baa49a43b2.png"
        />
        <div className={`flex-col justify-start items-center ${styles['section']} ${styles['pos_11']}`}>
          <span className={`${styles['font']} ${styles['text_4']}`}>好服务集市</span>
          <span className={`${styles['font']} ${styles['text_3']} ${styles['pos_15']}`}>好服务集市</span>
        </div>
      </div>
      <span className={`${styles['font_4']} ${styles['text_11']} ${styles['pos_46']}`}>
        过往业绩不预示产品未来表现，市场有风险，投资须谨慎
      </span>
      <div className={`flex-col ${styles['list']} ${styles['pos_18']}`}>
        {data.items.map((item, index) => (
          <div className={`flex-row items-center ${styles['list-item']}`} key={index}>
            <div className={`flex-row items-center flex-1`}>
              <div className={`flex-col justify-start items-center shrink-0 ${styles['image-wrapper_2']}`}>
                <img
                  className={`${styles['image_15']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e62fcd173fdae442873d0e1427b2e615.png"
                />
              </div>
              <div className={`flex-col items-start flex-1 ${styles['ml-19-5']}`}>
                <span className={`${styles['font_2']} ${styles['text_5']}`}>蚂蚁星愿</span>
                <span className={`${styles['font_4']} ${styles['mt-9']}`}>每天攒一点 假期去旅行</span>
              </div>
            </div>
            <div className={`flex-col justify-start shrink-0 ${styles['group_3']} ml-20`}>
              <div className={`flex-col justify-start ${styles['section_3']}`}>
                <div className={`flex-col justify-start items-start relative ${styles['section_4']}`}>
                  <img
                    className={`${styles['image_16']} ${styles['image_17']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3d60850313417f8b3a6b73d744a92849.png"
                  />
                  <span className={`${styles['font_3']} ${styles['text_6']} ${styles['pos_19']}`}>立即体验</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={`flex-row justify-center items-center ${styles['group']} ${styles['pos_8']}`}>
        <div className={`flex-row items-center self-stretch ${styles['group_2']} ${styles['pos_9']}`}>
          <img
            className={`shrink-0 ${styles['image_8']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=937a5d879e16ea78d07a0cf6b4e16670.png"
          />
          <span className={`shrink-0 ${styles['text_2']} ml-4`}>返回</span>
        </div>
        <span className={`${styles['text']}`}>18财富日</span>
      </div>
      <div className={`flex-row items-center ${styles['pos_2']}`}>
        <img
          className={`${styles['image_7']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bc2224b30906f230d423e7e8632505a8.png"
        />
        <img
          className={`${styles['image_3']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=df0aa8f38aabe612877c436891803758.png"
        />
        <img
          className={`${styles['image_4']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=239c56d4d54955ddafd7b5538dd4e79b.png"
        />
        <img
          className={`${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e261bc72166b0067b295f6e58dd66f98.png"
        />
        <img
          className={`${styles['image_5']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=06e4ad5f3662aac226db44700ce04056.png"
        />
        <img
          className={`${styles['image_6']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=43ceef08f7dd097483ec6f5197448ae9.png"
        />
      </div>
    </div>
  );
}

Chengjieye_sanceng_178_1493.defaultProps = { className: '' };