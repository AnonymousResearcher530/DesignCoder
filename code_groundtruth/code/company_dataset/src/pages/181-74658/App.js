import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Querendingdanye_gxiangtiaozhuan_(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center ${styles['group']}`}>
        <div className={`${styles['group_2']}`}>
          <span className={`${styles['font']} ${styles['text']} ${styles['text_2']}`}>9:4</span>
          <span className={`${styles['font']} ${styles['text']} ${styles['text_3']}`}>1</span>
        </div>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b5680612358d7fe67d50f945b3fa0ba4.png"
        />
      </div>
      <div className={`flex-row ${styles['group_3']}`}>
        <img
          className={`${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3923287831a6fb647ab728c97feccf30.png"
        />
        <span className={`${styles['text_4']} ${styles['ml-136']}`}>确认订单</span>
      </div>
      <div className={`flex-col ${styles['group_4']} ${styles['view']}`}>
        <div className={`flex-col`}>
          <div className={`flex-col ${styles['section']}`}>
            <div className={`flex-col self-stretch ${styles['group_5']}`}>
              <div className={`flex-row items-center`}>
                <img
                  className={`${styles['image_3']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0d706dea6fb13ae8fb513c891c2d1cc7.png"
                />
                <span className={`${styles['font_2']} ${styles['text_5']} ${styles['ml-8-5']}`}>麦当劳(近铁店)</span>
              </div>
              <div className={`mt-20 flex-row`}>
                <img
                  className={`shrink-0 ${styles['image_4']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b5db2ae73998754007cc7eafedf83d81.png"
                />
                <div className={`flex-col shrink-0 self-start ${styles['group_6']}`}>
                  <span className={`self-stretch ${styles['font_2']} ${styles['text_6']}`}>
                    麦当劳 早餐皮蛋鸡肉粥+油条 3次券
                  </span>
                  <div className={`mt-4 flex-col justify-start self-start ${styles['text-wrapper']}`}>
                    <span className={`${styles['text_10']}`}>过期退</span>
                  </div>
                </div>
                <div className={`flex-col items-end flex-1 self-start ${styles['group_7']}`}>
                  <div className={`${styles['group_8']}`}>
                    <span className={`${styles['font_2']} ${styles['text_7']}`}>￥36</span>
                    <span className={`${styles['font_4']} ${styles['text_8']}`}>.</span>
                    <span className={`${styles['font_3']}`}>00</span>
                  </div>
                  <span className={`${styles['font_5']} ${styles['text_9']} ${styles['mt-7']}`}>×2</span>
                </div>
              </div>
              <div className={`mt-20 flex-row justify-between items-center ${styles['group_9']}`}>
                <div className={`flex-row`}>
                  <span className={`${styles['font_4']} ${styles['text_11']}`}>购买数量</span>
                  <span className={`${styles['font_6']} ${styles['text_12']} ${styles['ml-10-5']}`}>
                    每笔订单限购30份
                  </span>
                </div>
                <div className={`flex-row`}>
                  <img
                    className={`${styles['image_5']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=005c8486ae1f845509a3d7ed799a2957.png"
                  />
                  <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']}`}>
                    <span className={`${styles['font_3']} ${styles['text_13']}`}>1</span>
                  </div>
                  <img
                    className={`${styles['image_6']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f39b14f281f5480cd5a33865b4813292.png"
                  />
                </div>
              </div>
            </div>
            <div className={`flex-row self-center ${styles['group_10']}`}>
              <span className={`${styles['font_4']} ${styles['text_14']}`}>手机号码</span>
              <span className={`${styles['font_6']} ${styles['text_15']} ${styles['ml-10-5']}`}>
                券将发放至该饿了么的注册手机号
              </span>
            </div>
            <div className={`flex-col self-stretch ${styles['group_11']}`}>
              <div className={`flex-row justify-between ${styles['group_12']}`}>
                <div className={`flex-row ${styles['group_13']}`}>
                  <span className={`${styles['font_4']}`}>店铺优惠</span>
                  <span className={`${styles['font_6']} ${styles['ml-10-5']}`}>满50减20</span>
                </div>
                <div className={`flex-row`}>
                  <div className={`flex-col justify-start items-center ${styles['group_14']}`}>
                    <div className={`${styles['group_15']}`}>
                      <span className={`${styles['font_7']}`}>¥20.</span>
                      <span className={`${styles['font_3']}`}>00</span>
                    </div>
                  </div>
                  <img
                    className={`${styles['image_7']} ${styles['ml-13']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=85e3a14b5fa9f9b59c891960e2fed97b.png"
                  />
                </div>
              </div>
              <div className={`flex-col justify-start items-end ${styles['section_2']}`}>
                <div className={`${styles['group_16']}`}>
                  <span className={`${styles['font_5']}`}>共1件 </span>
                  <span className={`${styles['font_2']} ${styles['text_16']}`}>小计:</span>
                  <span className={`${styles['font_7']} ${styles['text_17']}`}>￥144.</span>
                  <span className={`${styles['font_3']} ${styles['text_18']}`}>00</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`mt-12 flex-row justify-between items-center ${styles['section_3']}`}>
            <div className={`flex-row items-center`}>
              <div className={`flex-col justify-start items-center shrink-0 ${styles['text-wrapper_3']}`}>
                <span className={`${styles['text_20']}`}>券</span>
              </div>
              <span className={`${styles['text_19']} ${styles['ml-6-5']}`}>双11购物券</span>
            </div>
            <div className={`flex-row`}>
              <div className={`flex-row items-center ${styles['group_17']}`}>
                <div className={`shrink-0 ${styles['section_4']}`}></div>
                <span className={`${styles['font_7']} ${styles['text_21']} ${styles['ml-4-5']}`}>¥20.30</span>
              </div>
              <img
                className={`${styles['image_7']} ${styles['ml-13']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=85e3a14b5fa9f9b59c891960e2fed97b.png"
              />
            </div>
          </div>
        </div>
        <div className={`mt-10 flex-row items-center ${styles['group_4']}`}>
          <img
            className={`${styles['image_8']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=90f1cc730e21de023cb33648e26fc144.png"
          />
          <span className={`${styles['font_5']} ${styles['text_22']}`}>匿名购买</span>
          <img
            className={`${styles['image_9']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=efad7cc95ce21e0b0bc92afe60be7bfc.png"
          />
        </div>
      </div>
      <img
        className={`${styles['image_10']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2215dddb9e6c0086054cfbde969cdcab.png"
      />
    </div>
  );
}

Querendingdanye_gxiangtiaozhuan_.defaultProps = { className: '' };