import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function QunIM_Copy_8_180_12209_180_12209(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col ${styles['section']}`}>
        <div className={`flex-row justify-between`}>
          <div className={`flex-row items-center self-start ${styles['group_2']}`}>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=78d5bb4217407f6095303a92c517a1f6.png"
            />
            <img
              className={`${styles['image']} ml-4`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bc241b9da2b4d96dbf43c9aae4de0aa4.png"
            />
          </div>
          <div className={`self-start ${styles['group']}`}>
            <span className={`${styles['font']} ${styles['text']}`}>下午</span>
            <span className={`${styles['font_2']} ${styles['text_3']}`}>15:17</span>
          </div>
          <div className={`flex-row`}>
            <span className={`${styles['font_2']} ${styles['text_2']}`}>100%</span>
            <img
              className={`shrink-0 self-start ${styles['image_2']} ${styles['ml-4-5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=848523138d4d1d83017a365f07a52513.png"
            />
          </div>
        </div>
        <div className={`flex-row justify-between items-center ${styles['group_1']}`}>
          <img
            className={`${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8b326e6c7c7cc11065c097d0ccca1ef7.png"
          />
          <div className={`flex-row items-center ${styles['group_3']}`}>
            <span className={`${styles['text_4']}`}>钉钉安卓内测群</span>
            <div className={`flex-col justify-start items-center shrink-0 ${styles['text-wrapper']}`}>
              <span className={`${styles['text_5']}`}>内部</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['group_4']}`}>
        <div className={`flex-row ${styles['group_5']}`}>
          <div className={`flex-col justify-start flex-1 ${styles['text-wrapper_2']}`}>
            <span className={`${styles['font_3']} ${styles['text_6']}`}>
              @张迪(迪廸) 你在四楼吗？豪华会议室开会！带着电脑还有测试手机！
            </span>
          </div>
          <img
            className={`shrink-0 self-start ${styles['image_5']} ml-10`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=debaff3a82b9f1731ec7766fb20b9c0e.png"
          />
        </div>
        <div className={`flex-row justify-end ${styles['group_6']}`}>
          <span className={`${styles['font']} ${styles['text_7']}`}>对方已读 / </span>
          <span className={`${styles['font']} ${styles['text_8']} ${styles['ml-4-5']}`}>全部已读</span>
        </div>
        <div className={`flex-row relative ${styles['group_11']}`}>
          <div className={`flex-row ${styles['group_8']} ${styles['pos']}`}>
            <div className={`${styles['section_2']} ${styles['pos_4']}`}></div>
            <span className={`${styles['font_4']} ${styles['text_9']} ${styles['pos_10']}`}>张迪</span>
            <div className={`flex-col justify-start ${styles['text-wrapper_3']} ${styles['pos_6']}`}>
              <span className={`${styles['font_3']} ${styles['text_10']}`}>我想想看有什么好的方案</span>
            </div>
          </div>
          <img
            className={`${styles['image_5']} ${styles['pos_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f1688fc0d57e638e0829acfd0290f7d3.png"
          />
          <span className={`${styles['font_4']} ${styles['text_11']} ${styles['pos_7']}`}>赖建东(彦昊)</span>
          <div className={`flex-col justify-start ${styles['text-wrapper_4']} ${styles['pos_1']}`}>
            <span className={`${styles['font_3']} ${styles['text_12']}`}>
              建议：允许外部联系人通过扫描名片更新原有信息。@子庐
            </span>
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['section_3']}`}>
        <div className={`flex-row justify-between self-stretch ${styles['group_10']}`}>
          <img
            className={`${styles['image_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=794bac934cfdd5fbd8d208b06db9157c.png"
          />
          <div className={`flex-row`}>
            <img
              className={`${styles['image_7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ba9540987e0582415a7d7407e3d77db3.png"
            />
            <img
              className={`${styles['image_8']} ml-20`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7a361064d4040c0f07e8088f07df7bbd.png"
            />
          </div>
        </div>
        <div className={`self-start ${styles['section_4']}`}></div>
      </div>
    </div>
  );
}

QunIM_Copy_8_180_12209_180_12209.defaultProps = { className: '' };