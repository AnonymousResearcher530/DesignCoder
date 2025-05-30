import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Artboard_1_228_56042(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col ${styles['group']}`}>
        <span className={`${styles['text']}`}>澳洲深海帝王蟹澳洲</span>
        <div className={`flex-row mt-24`}>
          <span className={`${styles['font']} ${styles['text_2']}`}>等级:合格</span>
          <span className={`${styles['font']} ${styles['text_3']} ${styles['ml-15']}`}>规格:1500克</span>
          <span className={`${styles['font']} ${styles['text_4']} ${styles['ml-15']}`}>产地:澳大利亚</span>
        </div>
      </div>
      <div className={`flex-col ${styles['section']}`}>
        <div className={`flex-row items-center ${styles['group_2']}`}>
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=351115da943d440c4776a853a7c039eb.png"
          />
          <div className={`${styles['section_2']}`}></div>
          <span className={`${styles['text_5']}`}>买一赠一</span>
        </div>
        <div className={`flex-col mt-22`}>
          <div className={`flex-row self-stretch ${styles['group_3']}`}>
            <span className={`${styles['font_2']}`}>推广价</span>
            <div className={`flex-col justify-start ${styles['text-wrapper']} ml-10`}>
              <span className={`${styles['text_7']}`}>2018.4.4-2018.4.20</span>
            </div>
          </div>
          <div className={`flex-row self-start ${styles['group_4']}`}>
            <span className={`shrink-0 self-start ${styles['text_8']}`}>¥</span>
            <span className={`shrink-0 ${styles['text_9']}`}>1100.</span>
            <div className={`flex-col items-start shrink-0 self-center ${styles['group_5']}`}>
              <span className={`${styles['text_10']}`}>00</span>
              <span className={`${styles['text_11']} mt-12`}>/只</span>
            </div>
          </div>
          <div className={`flex-row items-center self-stretch ${styles['group_6']}`}>
            <div className={`${styles['group_8']}`}>
              <span className={`${styles['font_2']}`}>零售价:</span>
              <span className={`${styles['font_3']} ${styles['text_13']}`}>¥1200.22</span>
            </div>
            <div className={`flex-col justify-start items-end shrink-0 ${styles['text-wrapper_2']}`}>
              <span className={`${styles['font_3']} ${styles['text_12']}`}>专享</span>
            </div>
            <div className={`flex-row items-center shrink-0 ${styles['group_7']}`}>
              <span className={`shrink-0 ${styles['font_3']}`}>¥1050.00</span>
              <span className={`shrink-0 ${styles['text_14']} ml-4`}>(仅当日)</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['group_9']}`}>
        <div className={`flex-row items-center`}>
          <div className={`flex-col shrink-0`}>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_3']}`}>
              <span className={`${styles['font_4']}`}>商品卖点1</span>
            </div>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_3']} ${styles['mt-17']}`}>
              <span className={`${styles['font_4']}`}>商品卖点1</span>
            </div>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_3']} ${styles['mt-17']}`}>
              <span className={`${styles['font_4']}`}>商品卖点1</span>
            </div>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_3']} ${styles['mt-17']}`}>
              <span className={`${styles['font_4']}`}>商品卖点1</span>
            </div>
          </div>
          <div className={`flex-col justify-start items-start flex-1 relative ${styles['group_10']} ml-42`}>
            <div className={`flex-col justify-start ${styles['section_3']}`}>
              <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
                <img
                  className={`${styles['image_2']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=21e18c931e88c32c33b003ee3590266e.png"
                />
              </div>
            </div>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_4']} ${styles['pos']}`}>
              <span className={`${styles['font']} ${styles['text_15']}`}>APP下单24小时配送</span>
            </div>
          </div>
        </div>
        <div className={`flex-row relative ${styles['group_18']} mt-4`}>
          <span className={`${styles['font']} ${styles['text_24']} ${styles['pos_5']}`}>6925257420248</span>
          <span className={`${styles['font']} ${styles['text_16']} ${styles['pos_2']}`}>扫码领取盒马X权益</span>
          <div className={`flex-row ${styles['group_11']} ${styles['pos_3']}`}>
            <div className={`flex-row shrink-0 ${styles['group_12']}`}>
              <div className={`flex-col items-center flex-1`}>
                <span className={`${styles['font_5']} ${styles['text_17']}`}>溯</span>
                <span className={`${styles['font_5']} ${styles['text_20']}`}>源</span>
                <span className={`${styles['font_5']} ${styles['text_22']}`}>码</span>
              </div>
              <img
                className={`shrink-0 ${styles['image_3']} ml-2`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bdc624751d59e56b441f4dd934839041.png"
              />
            </div>
            <div className={`flex-col items-start flex-1 ${styles['group_13']} ml-6`}>
              <span className={`${styles['font']} ${styles['text_18']}`}>监督电话:4008288477</span>
              <span className={`${styles['font']} ${styles['text_19']} mt-2`}>举报电话:12358</span>
              <span className={`${styles['font']} ${styles['text_21']} mt-2`}>编码:020100101930 3/4/1-5</span>
              <span className={`${styles['font']} ${styles['text_23']} mt-2`}>支持生鲜盒包</span>
            </div>
          </div>
          <img
            className={`${styles['image_4']} ${styles['pos_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=57f5fb5efe4e12e06a00d53c20b80802.png"
          />
        </div>
      </div>
    </div>
  );
}

Artboard_1_228_56042.defaultProps = { className: '' };