import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function IPhone_6_Copy_85_180_12060_180_12060(props) {
  const history = useHistory();

  const [data, setData] = useState({});

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
        <div className={`flex-row justify-between items-center ${styles['group_1']} mt-14`}>
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fa95a7d0354d1ca7fc98998439757376.png"
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
          <span className={`${styles['font_3']} ${styles['text_5']} ml-8`}>搜索</span>
        </div>
      </div>
      <div className={`flex-col`}>
        <div className={`flex-row justify-between items-center ${styles['section_4']}`}>
          <div className={`flex-row items-center ${styles['group_2']}`}>
            <span className={`${styles['font_4']}`}>@</span>
            <span className={`${styles['font_5']} ${styles['text_6']}`}>我消息</span>
          </div>
          <div className={`flex-row items-center ${styles['group_3']}`}>
            <span className={`${styles['font_5']} ${styles['text_7']}`}>我</span>
            <span className={`${styles['font_4']}`}>@</span>
            <span className={`${styles['font_5']}`}>消息</span>
          </div>
          <div className={`flex-col justify-start`}>
            <span className={`${styles['font_5']} ${styles['text_8']}`}>关注人消息</span>
          </div>
          <div className={`flex-col justify-start`}>
            <span className={`${styles['font_5']} ${styles['text_9']}`}>审批消息</span>
          </div>
        </div>
        <div className={`flex-row justify-between items-center ${styles['section_5']}`}>
          <div className={`flex-row`}>
            <img
              className={`shrink-0 ${styles['image_8']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=839059a500763c11e5687e791c5a4cda.png"
            />
            <span className={`self-center ${styles['font_3']} ${styles['text_10']} ${styles['ml-12-5']}`}>
              钉钉电脑版已登录
            </span>
          </div>
          <img
            className={`${styles['image_9']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4a8065218d0c7162975980c65c644169.png"
          />
        </div>
        <div className={`flex-col`}>
          <div className={`flex-col justify-start items-start ${styles['text-wrapper']}`}>
            <span className={`${styles['font']} ${styles['text_11']}`}>置顶</span>
          </div>
          <div className={`flex-col ${styles['list-item']}`}>
            <div className={`flex-row justify-between ${styles['group_10']}`}>
              <div className={`flex-row items-center self-center`}>
                <img
                  className={`${styles['image_10']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=debaff3a82b9f1731ec7766fb20b9c0e.png"
                />
                <div className={`flex-col items-start ${styles['ml-11']}`}>
                  <span className={`${styles['font_6']} ${styles['text_12']}`}>霍晓霖(么么)</span>
                  <div className={`${styles['group_5']} ${styles['mt-8-5']}`}>
                    <span className={`${styles['font_8']} ${styles['text_14']}`}>[未读]</span>
                    <span className={`${styles['font_9']} ${styles['text_15']}`}>张迪(迪廸): 好的呀</span>
                  </div>
                </div>
              </div>
              <span className={`self-start ${styles['font_7']} ${styles['text_13']}`}>下午2:54</span>
            </div>
            <img
              className={`${styles['image_11']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5ea7c34ceb2d54898713e17429854d33.png"
            />
          </div>
          <div className={`flex-col ${styles['list-item']}`}>
            <div className={`flex-row justify-between ${styles['group_10']}`}>
              <div className={`flex-row items-center self-center`}>
                <img
                  className={`${styles['image_10']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=de34bd8a036b5d534e17fbe147779b78.png"
                />
                <div className={`flex-col items-start ${styles['ml-11']}`}>
                  <span className={`${styles['font_6']} ${styles['text_16']}`}>王奕然(慕懿)</span>
                  <span className={`${styles['font_10']} ${styles['mt-8-5']}`}>[已读] 张迪(迪廸): 好的呀</span>
                </div>
              </div>
              <span className={`self-start ${styles['font_7']} ${styles['text_17']}`}>下午2:54</span>
            </div>
            <img
              className={`${styles['image_12']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=eba204081c7fd9b625c7bea0482fb0f1.png"
            />
          </div>
          <div className={`flex-row justify-between ${styles['list-item_2']}`}>
            <div className={`flex-row items-center self-center`}>
              <img
                className={`${styles['image_10']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4411efdf5f956c3d8cc63155a59bc583.png"
              />
              <div className={`flex-col ${styles['ml-11']}`}>
                <div className={`flex-row items-center self-stretch`}>
                  <span className={`${styles['font_6']} ${styles['text_18']}`}>IM&Ding scrum</span>
                  <div
                    className={`flex-col justify-start items-center shrink-0 ${styles['text-wrapper_2']} ${styles['ml-7']}`}
                  >
                    <span className={`${styles['text_20']}`}>内部</span>
                  </div>
                </div>
                <span className={`self-start ${styles['font_10']} ${styles['mt-8-5']}`}>张迪(迪廸): 好的呀</span>
              </div>
            </div>
            <span className={`self-start ${styles['font_7']} ${styles['text_19']}`}>下午2:54</span>
          </div>
        </div>
        <div className={`flex-col ${styles['group_11']}`}>
          <div className={`flex-col ${styles['list-item']}`}>
            <div className={`flex-row justify-between items-center ${styles['group_10']}`}>
              <div className={`flex-row items-center`}>
                <img
                  className={`${styles['image_10']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b2f87f56aa30964e59faa4223e07082d.png"
                />
                <div className={`flex-col items-start ${styles['ml-11']}`}>
                  <span className={`${styles['font_6']} ${styles['text_21']}`}>张明(向速)</span>
                  <span className={`${styles['font_10']} ${styles['text_22']} ${styles['mt-8-5']}`}>
                    张明(向速): 有没有这个文件？
                  </span>
                </div>
              </div>
              <div className={`flex-col items-end ${styles['group_6']}`}>
                <span className={`${styles['font_7']}`}>下午2:54</span>
                <div className={`flex-col justify-start items-center ${styles['text-wrapper_3']} ${styles['mt-12-5']}`}>
                  <span className={`${styles['text_23']}`}>1</span>
                </div>
              </div>
            </div>
            <img
              className={`${styles['image_12']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=eba204081c7fd9b625c7bea0482fb0f1.png"
            />
          </div>
          <div className={`flex-col ${styles['list-item']}`}>
            <div className={`flex-row justify-between ${styles['group_10']}`}>
              <div className={`flex-row items-center self-center`}>
                <img
                  className={`${styles['image_10']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e28a281a014621f95ac781938f54f27b.png"
                />
                <div className={`flex-col items-start ${styles['ml-11']}`}>
                  <span className={`${styles['font_6']} ${styles['text_24']}`}>张腊梅(萨菲)</span>
                  <div className={`${styles['group_7']} ${styles['mt-8-5']}`}>
                    <span className={`${styles['font_8']} ${styles['text_14']}`}>[未读] </span>
                    <span className={`${styles['font_9']}`}>张迪(迪廸): 好的呀</span>
                  </div>
                </div>
              </div>
              <span className={`self-start ${styles['font_7']} ${styles['text_25']}`}>下午2:54</span>
            </div>
            <img
              className={`${styles['image_12']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=eba204081c7fd9b625c7bea0482fb0f1.png"
            />
          </div>
          <div className={`flex-row justify-between ${styles['list-item_3']}`}>
            <div className={`flex-row items-center self-center`}>
              <img
                className={`${styles['image_10']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f1688fc0d57e638e0829acfd0290f7d3.png"
              />
              <div className={`flex-col items-start ${styles['ml-11']}`}>
                <span className={`${styles['font_6']} ${styles['text_26']}`}>张黎黎(老柒)</span>
                <div className={`${styles['group_8']} ${styles['mt-8-5']}`}>
                  <span className={`${styles['font_9']} ${styles['text_28']}`}>[未读]</span>
                  <span className={`${styles['font_9']} ${styles['text_29']}`}>张迪(迪廸): 好的呀</span>
                </div>
              </div>
            </div>
            <span className={`self-start ${styles['font_7']} ${styles['text_27']}`}>下午2:54</span>
          </div>
        </div>
      </div>
    </div>
  );
}

IPhone_6_Copy_85_180_12060_180_12060.defaultProps = { className: '' };