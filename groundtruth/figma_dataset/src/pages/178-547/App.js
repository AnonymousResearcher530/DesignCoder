import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Neiye_copy_178_547(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col justify-start ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start ${styles['section']}`}>
        <div className={`flex-col ${styles['section_2']}`}>
          <span className={`self-center ${styles['font']} ${styles['text']}`}>优惠</span>
          <div className={`flex-row items-center self-stretch ${styles['section_3']}`}>
            <img
              className={`${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=80c04ea917b099e5cd372706f0a4d2f4.png"
            />
            <span className={`${styles['font_2']} ${styles['text_2']} ${styles['ml-6-5']}`}>
              商品售价 ¥ 252，使用以下优惠至少可省
            </span>
            <span className={`${styles['font_3']} ${styles['text_3']} ${styles['ml-6-5']}`}>¥ 74.95</span>
          </div>
          <div className={`flex-col self-stretch`}>
            <div className={`flex-col ${styles['group_2']}`}>
              <div className={`flex-col justify-start items-start ${styles['text-wrapper_1']}`}>
                <span className={`${styles['font_2']} ${styles['text_5']}`}>会员 & 促销</span>
              </div>
              <div className={`flex-row justify-between items-center relative ${styles['group_3']}`}>
                <div className={`flex-row items-center`}>
                  <div className={`flex-row items-center ${styles['section_4']}`}>
                    <img
                      className={`shrink-0 ${styles['image_3']}`}
                      src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=93a68b4ec6c9def5a74dad149f70464f.png"
                    />
                    <span className={`${styles['text_7']} ml-2`}>专享</span>
                  </div>
                  <div className={`flex-col justify-start ${styles['text-wrapper_2']} ${styles['ml-7']}`}>
                    <span className={`${styles['font_4']} ${styles['text_8']}`}>满500减50</span>
                  </div>
                </div>
                <div className={`flex-row items-center ${styles['group_4']}`}>
                  <span className={`${styles['font_5']} ${styles['text_6']}`}>开通领取</span>
                  <img
                    className={`shrink-0 ${styles['image_2']} ml-8`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=86a1657d0942da4d8bb883779e269f6a.png"
                  />
                </div>
              </div>
            </div>
            <div className={`flex-col ${styles['group_6']}`}>
              <div className={`flex-col self-stretch relative`}>
                <div className={`flex-row justify-between ${styles['section_5']}`}>
                  <div className={`flex-row`}>
                    <div className={`flex-col justify-start shrink-0 ${styles['text-wrapper_3']}`}>
                      <span className={`${styles['font_6']} ${styles['text_10']}`}>店铺活动</span>
                    </div>
                    <span className={`${styles['font_4']} ${styles['text_9']} ${styles['ml-8-5']}`}>
                      满1件立减20，部分地区包邮
                    </span>
                  </div>
                  <img
                    className={`${styles['image_2']} ${styles['image_4']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=86a1657d0942da4d8bb883779e269f6a.png"
                  />
                </div>
                <div className={`${styles['section_6']}`}></div>
                <span className={`${styles['text_11']} ${styles['pos']}`}>2018.3.16 0:00 - 2018.4.16 24:00</span>
              </div>
              <div className={`flex-col justify-start items-start self-end relative ${styles['section_7']}`}>
                <div className={`flex-row items-center ${styles['section_8']}`}>
                  <img
                    className={`shrink-0 ${styles['image']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=088e0fe87f457a388b8215bc15ed3b19.png"
                  />
                  <div className={`${styles['group_7']} ${styles['ml-5-5']}`}>
                    <span className={`${styles['font_5']} ${styles['text_12']}`}>本商品已满足该活动，可减 </span>
                    <span className={`${styles['text_13']}`}>¥ 20</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={`flex-col justify-start items-center ${styles['section_9']}`}>
              <div className={`flex-row items-center ${styles['group_8']}`}>
                <span className={`${styles['font_4']} ${styles['text_14']}`}>查看更多 2 项促销活动</span>
                <img
                  className={`shrink-0 ${styles['image_5']} ${styles['ml-9']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3748667ec0fbe27eaf840f4ef7c0b0a0.png"
                />
              </div>
            </div>
            <div className={`${styles['section_10']}`}></div>
          </div>
          <div className={`flex-col self-stretch`}>
            <div className={`flex-col justify-start items-start ${styles['text-wrapper']}`}>
              <span className={`${styles['font_2']} ${styles['text_15']}`}>领券</span>
            </div>
            <div className={`flex-row justify-between items-center ${styles['section_11']} ${styles['view']}`}>
              <div className={`flex-col ${styles['group_9']}`}>
                <div className={`flex-row items-baseline self-start ${styles['group_10']}`}>
                  <span className={`shrink-0 ${styles['font_3']} ${styles['text_18']}`}>¥</span>
                  <span className={`shrink-0 ${styles['font_7']} ${styles['text_16']}`}>50</span>
                  <span className={`shrink-0 ${styles['font_8']} ${styles['text_17']}`}>店铺优惠券</span>
                </div>
                <div className={`flex-col items-start self-stretch ${styles['group_11']} mt-10`}>
                  <span className={`${styles['font_6']}`}>本店商品满300可用</span>
                  <span className={`${styles['font_6']} ${styles['text_19']} ${styles['mt-7']}`}>
                    有效期：2017.11.01 - 2018.12.31
                  </span>
                </div>
              </div>
              <div className={`flex-col justify-start items-end ${styles['text-wrapper_4']}`}>
                <span className={`${styles['font_9']}`}>立即领取</span>
              </div>
            </div>
            <div className={`flex-col justify-start items-start ${styles['section_12']}`}>
              <div className={`flex-row items-center ${styles['section_13']}`}>
                <img
                  className={`shrink-0 ${styles['image']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=088e0fe87f457a388b8215bc15ed3b19.png"
                />
                <div className={`${styles['group_12']} ${styles['ml-5-5']}`}>
                  <span className={`${styles['font_5']}`}>领券后，本商品立即可享省</span>
                  <span className={`${styles['font_5']} ${styles['text_20']}`}> ¥50</span>
                </div>
              </div>
            </div>
            <div className={`flex-row justify-between items-center ${styles['section_11']} ${styles['view_2']}`}>
              <div className={`flex-col ${styles['group_9']}`}>
                <div className={`flex-row items-end self-start ${styles['group_13']}`}>
                  <span className={`shrink-0 ${styles['font_3']} ${styles['text_18']}`}>¥</span>
                  <div className={`flex-col justify-start items-start shrink-0 relative ${styles['group_14']} ml-6`}>
                    <span className={`${styles['font_7']}`}>100</span>
                    <span className={`${styles['font_8']} ${styles['pos_2']}`}>店铺优惠券</span>
                  </div>
                </div>
                <div className={`flex-col items-start self-stretch ${styles['group_11']} mt-10`}>
                  <span className={`${styles['font_6']}`}>本店商品满300可用</span>
                  <span className={`${styles['font_6']} ${styles['text_19']} ${styles['mt-7']}`}>
                    有效期：2017.11.01 - 2018.12.31
                  </span>
                </div>
              </div>
              <div className={`flex-col justify-start items-end ${styles['text-wrapper_4']}`}>
                <span className={`${styles['font_9']}`}>立即领取</span>
              </div>
            </div>
          </div>
          <div className={`flex-col self-stretch ${styles['group_15']}`}>
            <div className={`flex-col`}>
              <div className={`flex-col justify-start items-center ${styles['text-wrapper_5']}`}>
                <span className={`${styles['font_6']} ${styles['text_21']}`}>
                  以上价格计算仅为初步预估，不代表最终购买价格
                </span>
              </div>
              <div className={`flex-col justify-start relative ${styles['section_14']}`}>
                <div className={`${styles['section_15']}`}></div>
                <div className={`flex-col justify-start items-center ${styles['text-wrapper_6']} ${styles['pos_3']}`}>
                  <span className={`${styles['font']} ${styles['text_22']}`}>完成</span>
                </div>
              </div>
            </div>
            <div className={`shrink-0 relative ${styles['section_16']}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

Neiye_copy_178_547.defaultProps = { className: '' };