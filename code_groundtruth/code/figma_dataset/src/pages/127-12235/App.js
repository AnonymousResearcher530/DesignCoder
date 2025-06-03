import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Shipping_127_12235(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-center items-center self-stretch relative ${styles['group']}`}>
        <img
          className={`${styles['image']} ${styles['pos']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2eb1bdab16be2d52cbee03ca17e98e99.png"
        />
        <span className={`${styles['font']} ${styles['text']}`}>Checkout</span>
      </div>
      <div className={`flex-col self-center ${styles['view_1']}`}>
        <div className={`shrink-0 ${styles['divider']}`}></div>
        <div className={`flex-col relative ${styles['group_3']}`}>
          <div className={`flex-row justify-between`}>
            <span className={`${styles['font']} ${styles['text_2']}`}>Order</span>
            <div className={`flex-row items-center`}>
              <img
                className={`shrink-0 ${styles['image_2']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f0342ca504b57a84691d16056f807747.png"
              />
              <span className={`${styles['font_2']} ${styles['text_3']} ${styles['ml-7']}`}>7,000</span>
            </div>
          </div>
          <div className={`flex-row justify-between mt-24`}>
            <span className={`self-center ${styles['font']} ${styles['text_5']}`}>Shipping</span>
            <div className={`flex-row self-start ${styles['group_1']}`}>
              <img
                className={`shrink-0 ${styles['image_2']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f0342ca504b57a84691d16056f807747.png"
              />
              <span className={`${styles['font_3']} ${styles['text_4']} ml-18`}>30</span>
            </div>
          </div>
        </div>
        <div className={`flex-row justify-between items-center ${styles['view']}`}>
          <span className={`${styles['font']} ${styles['text_6']}`}>Total</span>
          <div className={`flex-row items-center self-stretch ${styles['group_11']}`}>
            <img
              className={`shrink-0 ${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=cc7d2173c308adda88244377772724ad.png"
            />
            <span className={`${styles['font_2']} ${styles['text_7']} ml-8`}>7,030</span>
          </div>
        </div>
      </div>
      <div className={`flex-col self-center ${styles['group_4']}`}>
        <span className={`self-start ${styles['font']} ${styles['text_8']}`}>Payment</span>
        <div className={`flex-col self-stretch mt-14`}>
          <div className={`flex-row justify-between items-center ${styles['section']}`}>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=973afa28055ae6e6353ebf1c3e2729bd.png"
            />
            <span className={`${styles['font_3']} ${styles['text_9']}`}>*********2109</span>
          </div>
          <div className={`flex-row justify-between items-center ${styles['section_1']} mt-24`}>
            <img
              className={`${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=60bff7fa28895bb745f94431818fb5e4.png"
            />
            <span className={`${styles['font_3']} ${styles['text_10']}`}>*********2109</span>
          </div>
          <div className={`flex-row justify-between items-center ${styles['section_1']} mt-24`}>
            <img
              className={`${styles['image_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c9078167b183c96f3539838c8be898db.png"
            />
            <span className={`${styles['font_3']} ${styles['text_10']}`}>*********2109</span>
          </div>
          <div className={`flex-row justify-between ${styles['section_3']} mt-24`}>
            <img
              className={`${styles['image_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a5a54c7899a74eb9bc276e53ebaed27a.png"
            />
            <span className={`${styles['font_3']}`}>*********2109</span>
          </div>
        </div>
      </div>
      <div className={`flex-col justify-start items-center self-center ${styles['text-wrapper']}`}>
        <span className={`${styles['text_11']}`}>Continue</span>
      </div>
      <div className={`flex-col justify-start self-stretch relative ${styles['group_5']}`}>
        <div className={`flex-col justify-start relative ${styles['section_5']}`}>
          <div className={`flex-row justify-between items-center ${styles['group_7']}`}>
            <div className={`flex-row`}>
              <span className={`${styles['font_4']} ${styles['text_12']}`}>Home</span>
              <span className={`${styles['font_4']} ${styles['text_13']} ml-34`}>wishlist</span>
            </div>
            <div className={`flex-row items-center`}>
              <span className={`${styles['font_4']}`}>Search</span>
              <span className={`${styles['font_4']} ${styles['text_14']} ml-34`}>Setting</span>
            </div>
          </div>
        </div>
        <div className={`${styles['section_4']} ${styles['pos_2']}`}></div>
        <div className={`flex-row justify-between items-center ${styles['equal-division']} ${styles['group_6']}`}>
          <img
            className={`${styles['equal-division-item']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=559cafd29bea0f2323480e83d02e7b38.png"
          />
          <img
            className={`${styles['equal-division-item_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e5ca0de16edfaca47fc9b72200edff06.png"
          />
          <img
            className={`${styles['equal-division-item_1']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a6242e05710a9c3d923679ff793b41ad.png"
          />
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a04e9e7142a5bf8b180a51fbec2cc1d0.png"
          />
          <img
            className={`${styles['equal-division-item_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=475078d122f7ce47de6ef898fa560c6f.png"
          />
        </div>
      </div>
    </div>
  );
}

Shipping_127_12235.defaultProps = { className: '' };