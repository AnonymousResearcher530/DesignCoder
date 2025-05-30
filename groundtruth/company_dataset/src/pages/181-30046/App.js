import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function IPhone_6_Copy_85(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null, null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col ${styles['section']}`}>
        <div className={`flex-row justify-between items-center`}>
          <div className={`flex-row items-center`}>
            <img
              className={`shrink-0 ${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7fcf1db022e93db9317e283b7ee5e90d.png"
            />
            <span className={`${styles['font_2']} ${styles['text_2']} ${styles['ml-5']}`}>DT</span>
            <img
              className={`shrink-0 ${styles['image_2']} ${styles['ml-5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=98851a8ce5a13ac0c0fe0cca9e5e9cfb.png"
            />
          </div>
          <div className={`${styles['group']}`}>
            <span className={`${styles['font']} ${styles['text']}`}>下午</span>
            <span className={`${styles['font_2']}`}>4:59</span>
          </div>
          <div className={`flex-row items-center`}>
            <img
              className={`shrink-0 ${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=12fe50a853595ab4ad74f8f63a4fa28c.png"
            />
            <span className={`${styles['font_2']} ${styles['text_3']}`}>77%</span>
            <img
              className={`shrink-0 ${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f9b49f8d0e8acb1bbc2c29d4fcd1c2bf.png"
            />
          </div>
        </div>
        <div className={`mt-14 flex-row justify-between items-center ${styles['group_2']}`}>
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=33e705c623dfd14f424ea598800e85d3.png"
          />
          <span className={`${styles['text_4']}`}>钉钉</span>
          <img
            className={`${styles['image_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d491b36b0627227d82b0d37c1cd5f212.png"
          />
        </div>
      </div>
      <div className={`flex-col justify-start ${styles['section_2']}`}>
        <div className={`flex-row justify-center items-center ${styles['section_3']}`}>
          <img
            className={`${styles['image_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ab885a414dcc03fde8ed213b8fb32731.png"
          />
          <span className={`ml-8 ${styles['font_3']} ${styles['text_5']}`}>搜索</span>
        </div>
      </div>
      <div className={`flex-row justify-between items-center ${styles['section_4']}`}>
        <div className={`flex-row items-center ${styles['group_3']}`}>
          <span className={`${styles['font_4']}`}>@</span>
          <span className={`${styles['font_5']} ${styles['text_6']} ${styles['ml-4-5']}`}>我消息</span>
        </div>
        <div className={`flex-row items-center ${styles['group_4']}`}>
          <span className={`${styles['font_5']} ${styles['text_7']}`}>我</span>
          <span className={`${styles['font_4']}`}>@</span>
          <span className={`${styles['font_5']}`}>消息</span>
        </div>
        <div className={`flex-row justify-start`}>
          <span className={`${styles['font_5']} ${styles['text_8']}`}>关注人消息</span>
        </div>
        <div className={`flex-row justify-start`}>
          <span className={`${styles['font_5']} ${styles['text_9']}`}>审批消息</span>
        </div>
      </div>
      <div className={`flex-row items-center ${styles['section_5']}`}>
        <img
          className={`${styles['image_8']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=839059a500763c11e5687e791c5a4cda.png"
        />
        <span className={`${styles['font_3']} ${styles['text_10']} ${styles['ml-12-5']}`}>钉钉电脑版已登录</span>
      </div>
      <div className={`flex-col justify-start items-start ${styles['text-wrapper']}`}>
        <span className={`${styles['font']} ${styles['text_11']}`}>置顶</span>
      </div>
      <div className={`flex-col`}>
        {data.items.map((item, index) => (
          <div className={`flex-col ${styles['list-item']}`} key={index}>
            <div className={`flex-row justify-between ${styles['group_5']}`}>
              <div className={`flex-row items-center self-center`}>
                <img
                  className={`${styles['image_9']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=29d5ebf7e674c7386aba2f688b66aab4.png"
                />
                <div className={`flex-col items-start ${styles['ml-11']}`}>
                  <span className={`${styles['font_6']} ${styles['text_12']}`}>霍晓霖(么么)</span>
                  <div className={`${styles['group_6']} ${styles['mt-8-5']}`}>
                    <span className={`${styles['font_8']} ${styles['text_14']}`}>[未读]</span>
                    <span className={`${styles['font_9']} ${styles['text_15']}`}>张迪(迪廸): 好的呀</span>
                  </div>
                </div>
              </div>
              <span className={`self-start ${styles['font_7']} ${styles['text_13']}`}>下午2:54</span>
            </div>
            <img
              className={`${styles['image_10']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5ea7c34ceb2d54898713e17429854d33.png"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

IPhone_6_Copy_85.defaultProps = { className: '' };