import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Transactions_130_2886(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col justify-start relative ${styles['page']} ${props.className}`}>
      <div className={`flex-row ${styles['section']}`}>
        <span className={`${styles['font_2']}`}>My Balance</span>
        <span className={`${styles['font_2']} ${styles['ml-19']}`}>Upcoming Bills </span>
      </div>
      <div className={`flex-row justify-between ${styles['pos']}`}>
        <div className={`flex-row items-center ${styles['group_9']}`}>
          <img
            className={`shrink-0 ${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ac04c37f194864ffc45b6a9f32d16c00.png"
          />
          <div className={`${styles['group']} ml-10`}>
            <span className={`${styles['font']} ${styles['text']}`}>Hi,</span>
            <span className={`${styles['font']} ${styles['text_2']}`}> Esaaa!</span>
          </div>
        </div>
        <div className={`flex-row`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d05973aa97f231ee90d9d24dc0b89f28.png"
          />
          <img
            className={`${styles['image_3']} ml-4`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8db97d37431415997ef5ba2d631a7341.png"
          />
        </div>
      </div>
      <span className={`${styles['font_3']} ${styles['text_3']} ${styles['pos_2']}`}>Transactions</span>
      <div className={`flex-col ${styles['pos_3']}`}>
        <span className={`self-start ${styles['text_4']}`}>Transactions</span>
        <div className={`flex-col justify-start self-stretch relative ${styles['group_1']}`}>
          <div className={`${styles['section_1']}`}></div>
          <span className={`${styles['font_4']} ${styles['pos_7']}`}>$123.00</span>
          <img
            className={`${styles['image_4']} ${styles['pos_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=20f7140c1f4ff096c469d57b0020ce6f.png"
          />
          <span className={`${styles['font_3']} ${styles['text_5']} ${styles['pos_6']}`}>Transfered</span>
          <span className={`${styles['font']} ${styles['text_6']} ${styles['pos_8']}`}>Aug 19, 2023</span>
        </div>
        <div className={`flex-col justify-start self-stretch relative ${styles['group_4']}`}>
          <div className={`${styles['section_1']}`}></div>
          <span className={`${styles['font_4']} ${styles['pos_12']}`}>$12.00</span>
          <img
            className={`${styles['image_4']} ${styles['pos_10']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=922c60d4063b89fd0adcd5fcf53f36de.png"
          />
          <span className={`${styles['font_3']} ${styles['text_5']} ${styles['pos_11']}`}>Transfered</span>
          <span className={`${styles['font']} ${styles['text_7']} ${styles['pos_13']}`}>Jul 20, 2023</span>
        </div>
        <div className={`flex-col justify-start self-stretch relative ${styles['group_5']}`}>
          <div className={`${styles['section_1']}`}></div>
          <span className={`${styles['font_4']} ${styles['pos_17']}`}>$234.00</span>
          <img
            className={`${styles['image_4']} ${styles['pos_15']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=48fbce1879708a0e7b2e8f0e5b21f605.png"
          />
          <span className={`${styles['font_3']} ${styles['text_5']} ${styles['pos_16']}`}>Refund</span>
          <span className={`${styles['font']} ${styles['text_8']} ${styles['pos_18']}`}>May 08, 2023</span>
        </div>
        <div className={`flex-col justify-start self-stretch relative ${styles['group_6']}`}>
          <div className={`${styles['section_1']}`}></div>
          <span className={`${styles['font_4']} ${styles['pos_22']}`}>$15.00</span>
          <img
            className={`${styles['image_5']} ${styles['pos_20']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c8b710c9ec5144a2523e9befe3bd600c.png"
          />
          <span className={`${styles['font_3']} ${styles['text_5']} ${styles['pos_21']}`}>Refund</span>
          <span className={`${styles['font']} ${styles['text_9']} ${styles['pos_23']}`}>Feb 29, 2023</span>
        </div>
        <div className={`flex-col justify-start self-stretch relative ${styles['group_7']}`}>
          <div className={`${styles['section_1']}`}></div>
          <span className={`${styles['font_4']} ${styles['pos_27']}`}>-$92.00</span>
          <img
            className={`${styles['image_4']} ${styles['pos_25']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2c72e70f0e50c270c1780d686a0f9bdc.png"
          />
          <span className={`${styles['font_3']} ${styles['text_5']} ${styles['text_10']} ${styles['pos_26']}`}>
            Transaction
          </span>
          <span className={`${styles['font']} ${styles['text_11']} ${styles['pos_28']}`}>Jan 25, 2023</span>
        </div>
        <div className={`flex-col justify-start self-stretch relative ${styles['group_8']}`}>
          <div className={`${styles['section_1']} ${styles['view']}`}></div>
          <span className={`${styles['font_4']} ${styles['pos_32']}`}>-$20.00</span>
          <img
            className={`${styles['image_4']} ${styles['pos_30']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9677a1d2d2e4437210f345e4789f0d2c.png"
          />
          <span className={`${styles['font_3']} ${styles['text_5']} ${styles['text_12']} ${styles['pos_31']}`}>
            Transaction
          </span>
          <span className={`${styles['font']} ${styles['text_13']} ${styles['pos_33']}`}>Jan 16, 2023</span>
        </div>
      </div>
      <div className={`flex-col justify-start items-center ${styles['section_2']} ${styles['pos_1']}`}>
        <div className={`flex-row items-center`}>
          <img
            className={`${styles['equal-division-item']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f1986df5f82d8fcded2ab4ffb62fa137.png"
          />
          <img
            className={`${styles['equal-division-item_3']} ${styles['ml-69']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=dcfad5dff81f3e3f1c5a41b6989b49fe.png"
          />
          <img
            className={`${styles['equal-division-item_2']} ${styles['ml-69']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3157d21e472c8209fa080a294ffa4cf2.png"
          />
          <img
            className={`${styles['equal-division-item']} ${styles['ml-69']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=de8c71c43101786014c6c6646126c4ee.png"
          />
        </div>
      </div>
    </div>
  );
}

Transactions_130_2886.defaultProps = { className: '' };