import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Yuangongguanli_181_14221(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row items-center ${styles['section']}`}>
        <div className={`flex-row items-center ${styles['group']}`}>
          <img
            className={`${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c533ad212043184479cdae8a0fb2bfb2.png"
          />
          <img
            className={`${styles['image']} ml-4`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4e95eb6c232de59969406c754b2df0c0.png"
          />
        </div>
        <div className={`flex-col justify-start ${styles['text-wrapper']}`}>
          <span className={`${styles['text']}`}>下午15:17</span>
        </div>
        <div className={`flex-row items-center ${styles['group_2']}`}>
          <span className={`${styles['font']} ${styles['text_2']}`}>100%</span>
          <img
            className={`shrink-0 ${styles['image_2']} ${styles['ml-3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=848523138d4d1d83017a365f07a52513.png"
          />
        </div>
      </div>
      <div className={`flex-row justify-center items-center relative ${styles['section_2']}`}>
        <div className={`flex-row items-center ${styles['pos']}`}>
          <img
            className={`shrink-0 ${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a5d14a0624de4959285adf72c6106166.png"
          />
          <span className={`${styles['font_2']} ${styles['text_4']} ${styles['ml-9']}`}>返回</span>
        </div>
        <span className={`${styles['font_2']} ${styles['text_3']}`}>智能人事</span>
      </div>
      <div className={`flex-col ${styles['section_3']}`}>
        <span className={`self-start ${styles['font_3']} ${styles['text_5']}`}>待办事项</span>
        <div className={`flex-row justify-between ${styles['equal-division']} ${styles['mt-23-5']}`}>
          <div className={`flex-col items-center ${styles['equal-division-item']}`}>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_1']}`}>
              <span className={`${styles['font_4']} ${styles['text_1']}`}>1</span>
            </div>
            <span className={`${styles['font']} ${styles['text_6']} mt-10`}>待入职员工</span>
          </div>
          <div className={`flex-col items-center ${styles['equal-division-item_1']} ${styles['group_3']}`}>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']}`}>
              <span className={`${styles['font_4']}`}>37</span>
            </div>
            <span className={`${styles['font']} ${styles['text_7']} mt-10`}>试用期员工</span>
          </div>
          <div className={`flex-col items-center ${styles['equal-division-item_1']} ${styles['group_1']}`}>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper_4']}`}>
              <span className={`${styles['font_4']}`}>0</span>
            </div>
            <span className={`${styles['font']} ${styles['text_8']} mt-10`}>待离职员工</span>
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['section_4']}`}>
        <span className={`self-start ${styles['font_3']} ${styles['text_9']}`}>员工管理</span>
        <div className={`flex-col justify-start items-end self-stretch relative ${styles['group_4']} mt-18`}>
          <div className={`${styles['group_7']}`}></div>
          <div className={`flex-row ${styles['equal-division_2']}`}>
            <div className={`flex-col items-center ${styles['group_5']} ${styles['equal-division-item_2']}`}>
              <div className={`flex-col items-center ${styles['group_6']}`}>
                <img
                  className={`shrink-0 ${styles['image_5']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=160cccf57ce56d92d016ef8f9764bc54.png"
                />
                <span className={`${styles['font']} ${styles['text_10']} mt-10`}>在线入职</span>
              </div>
              <div className={`flex-col items-center ${styles['group_9']} mt-20`}>
                <img
                  className={`shrink-0 ${styles['image_5']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=133581d4ce81cd3528960310b707836e.png"
                />
                <span className={`${styles['font']} mt-10`}>离职管理</span>
              </div>
            </div>
            <div
              className={`flex-col items-center ${styles['group_5']} ${styles['equal-division-item_2']} ${styles['ml-9']}`}
            >
              <img
                className={`${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ce888c7294252aa7f1e9fb483e2ded54.png"
              />
              <div className={`flex-col justify-start items-center ${styles['group_9']} ${styles['view']}`}>
                <span className={`${styles['font']}`}>转正管理</span>
              </div>
              <div className={`flex-col ${styles['view_2']}`}>
                <div className={`shrink-0 ${styles['section_5']}`}></div>
                <span className={`${styles['font']} ${styles['text_12']} mt-10`}>考勤管理</span>
              </div>
            </div>
            <div
              className={`flex-col items-center ${styles['group_5']} ${styles['equal-division-item_2']} ${styles['ml-9']}`}
            >
              <img
                className={`${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=76720af84137b79fa4e81dc6c8d3a3d3.png"
              />
              <span className={`${styles['font']} ${styles['text_11']}`}>调岗管理</span>
              <div className={`flex-col ${styles['group_8']}`}>
                <div className={`shrink-0 ${styles['section_6']}`}></div>
                <span className={`${styles['font']} ${styles['text_12']} mt-10`}>假期管理</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['group_12']}`}>
        <div className={`flex-row justify-between items-center relative ${styles['section_7']}`}>
          <span className={`${styles['font_2']}`}>在职员工花名册</span>
          <div className={`flex-row items-center`}>
            <span className={`${styles['text_13']}`}>150</span>
            <img
              className={`shrink-0 ${styles['image_6']} ${styles['ml-3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6d1ce4803dfd7b991074e19ff2dca23f.png"
            />
          </div>
        </div>
        <div className={`flex-row justify-between items-center ${styles['section_8']}`}>
          <span className={`${styles['font_2']}`}>离职员工花名册</span>
          <img
            className={`${styles['image_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6d1ce4803dfd7b991074e19ff2dca23f.png"
          />
        </div>
      </div>
      <div className={`flex-col justify-start items-start ${styles['section_9']}`}>
        <div className={`flex-row items-center ${styles['equal-division_3']}`}>
          <div className={`flex-col items-center ${styles['equal-division-item_3']}`}>
            <img
              className={`${styles['image_7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0c34253a5b25fdb3cee658b06aa6d417.png"
            />
            <span className={`${styles['font_5']} ${styles['text_14']} ${styles['mt-3-5']}`}>员工管理</span>
          </div>
          <div className={`flex-col items-center ${styles['equal-division-item_4']} ml-86`}>
            <img
              className={`shrink-0 ${styles['image_7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=131d850bc706e4c3414ef1a7e4bf7377.png"
            />
            <span className={`${styles['font_5']} ${styles['text_15']} ${styles['mt-4-5']}`}>智能分析</span>
          </div>
          <div className={`flex-col items-center ${styles['equal-division-item_5']} ml-86`}>
            <img
              className={`shrink-0 ${styles['image_7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3b63c42066baad50f57faec126a809ff.png"
            />
            <span className={`${styles['font_5']} ${styles['mt-5']}`}>服务中心</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Yuangongguanli_181_14221.defaultProps = { className: '' };