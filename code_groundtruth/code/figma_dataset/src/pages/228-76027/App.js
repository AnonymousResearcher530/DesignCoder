import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Shopping_Bag_228_76027(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between ${styles['group_2']}`}>
        <span className={`${styles['text']}`}>9:41</span>
        <div className={`flex-row`}>
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8e551220045821cae606be3e2b5b09c3.png"
          />
          <img
            className={`${styles['image_2']} ${styles['ml-5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b24c265b23fc31f03383ec3465cb8256.png"
          />
          <img
            className={`${styles['image_3']} ${styles['ml-5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4766179ad05065c32f1eff14b275ba8c.png"
          />
        </div>
      </div>
      <div className={`flex-row items-center ${styles['group_1']}`}>
        <img
          className={`${styles['image_4']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=cc94967109d396fb175e5b85e7c1d9b2.png"
        />
        <span className={`${styles['text_2']} ml-44`}>My Shopping Cart</span>
      </div>
      <div className={`flex-col ${styles['group_10']}`}>
        <div className={`shrink-0 ${styles['divider']} ${styles['view_5']}`}></div>
        <div className={`shrink-0 relative ${styles['divider']} ${styles['view_1']}`}></div>
        <div className={`flex-row relative ${styles['group_9']}`}>
          <div className={`flex-col justify-start shrink-0 ${styles['section']}`}>
            <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
              <img
                className={`${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6026932783e821c6bac990cc3a2b08f5.png"
              />
            </div>
          </div>
          <div className={`flex-col items-start flex-1 self-center ${styles['ml-19']}`}>
            <span className={`${styles['font']} ${styles['text_3']}`}>PEUGEOT- LR01</span>
            <span className={`${styles['font_2']} ${styles['text_4']} mt-40`}>$ 1,999.99</span>
          </div>
          <div className={`flex-row items-center shrink-0 self-start ${styles['section_2']} ${styles['ml-19']}`}>
            <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']}`}>
              <img
                className={`${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bd593904e0b14209c683e7f3aa94b314.png"
              />
            </div>
            <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']}`}>
              <span className={`${styles['font_3']}`}>1</span>
            </div>
            <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']}`}>
              <img
                className={`${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=18e3c5cd04ab808af7eeca4e32c72397.png"
              />
            </div>
          </div>
        </div>
        <div className={`flex-row items-center ${styles['list-item']}`}>
          <div className={`flex-col justify-start ${styles['section']}`}>
            <div className={`flex-col justify-start items-center ${styles['image-wrapper_3']}`}>
              <img
                className={`${styles['image_7']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c1e671a69f573da09a0b614a28b3037d.png"
              />
            </div>
          </div>
          <div className={`flex-col flex-1 ${styles['ml-17']}`}>
            <span className={`self-start ${styles['font']} ${styles['text_5']}`}>PILOT - CHROMOLY 520</span>
            <div className={`flex-row justify-between items-center self-stretch mt-30`}>
              <span className={`${styles['font_2']} ${styles['text_6']}`}>$ 3,999.99</span>
              <div className={`flex-row items-center ${styles['section_3']}`}>
                <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']}`}>
                  <img
                    className={`${styles['image_6']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8b11113362ad7f6e732879a07d320240.png"
                  />
                </div>
                <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']}`}>
                  <span className={`${styles['font_3']}`}>1</span>
                </div>
                <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']}`}>
                  <img
                    className={`${styles['image_6']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1e89cfeb2e02a6f48e20b2f729ce4c26.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex-row ${styles['list-item']}`}>
          <div className={`flex-col justify-start shrink-0 ${styles['section']}`}>
            <div className={`flex-col justify-start items-center ${styles['image-wrapper_4']}`}>
              <img
                className={`${styles['image_8']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4297fa8d90aee1645ded16db57947198.png"
              />
            </div>
          </div>
          <div className={`flex-col items-start flex-1 self-center ${styles['ml-19']}`}>
            <span className={`${styles['font']} ${styles['text_7']}`}>SMITH - Trade</span>
            <span className={`${styles['font_2']} ${styles['text_8']} mt-40`}>$ 120</span>
          </div>
          <div
            className={`flex-row items-center shrink-0 self-start ${styles['section_3']} ${styles['view']} ${styles['ml-19']}`}
          >
            <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']}`}>
              <img
                className={`${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e524c127f1a0d86d59eb50897ada0d19.png"
              />
            </div>
            <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']}`}>
              <span className={`${styles['font_3']}`}>1</span>
            </div>
            <div className={`flex-col justify-start items-center ${styles['image-wrapper_2']}`}>
              <img
                className={`${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=18e3c5cd04ab808af7eeca4e32c72397.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['group_11']}`}>
        <span className={`self-center ${styles['font_4']} ${styles['text_9']}`}>
          Your cart qualifies for free shipping
        </span>
        <div className={`flex-row justify-between items-center self-stretch ${styles['section_4']} mt-24`}>
          <span className={`${styles['font_3']} ${styles['text_10']}`}>Bike30</span>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
            <span className={`${styles['text_11']}`}>Apply</span>
          </div>
        </div>
        <div className={`flex-col self-stretch mt-24`}>
          <div className={`flex-row justify-between items-center`}>
            <span className={`${styles['font_5']}`}>Subtotal:</span>
            <span className={`${styles['font_4']} ${styles['text_12']}`}>$6119.99</span>
          </div>
          <div className={`flex-row justify-between items-center ${styles['group_7']} ${styles['view_4']}`}>
            <span className={`${styles['font_5']} ${styles['text_13']}`}>Delivery Fee:</span>
            <span className={`${styles['font_4']} ${styles['text_14']}`}>$0</span>
          </div>
          <div className={`flex-row justify-between ${styles['group_7']} ${styles['view_2']}`}>
            <span className={`${styles['font_5']} ${styles['text_15']}`}>Discount:</span>
            <span className={`${styles['font_6']} ${styles['text_16']}`}>30%</span>
          </div>
          <div className={`flex-row justify-between items-center ${styles['group_6']}`}>
            <span className={`${styles['font_5']}`}>Total:</span>
            <span className={`${styles['text_17']}`}>$4,283.99</span>
          </div>
        </div>
        <div className={`flex-row items-center self-center ${styles['section_5']} mt-24`}>
          <img
            className={`${styles['image_9']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a05d9936e19ee8da619957b21b5c5375.png"
          />
          <span className={`${styles['font_6']} ${styles['text_18']} ${styles['ml-23']}`}>Checkout</span>
        </div>
      </div>
    </div>
  );
}

Shopping_Bag_228_76027.defaultProps = { className: '' };