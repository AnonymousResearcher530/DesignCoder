import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function High_Fidelity_Home_228_78682(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col relative ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center ${styles['group']}`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8a34e4c288c050dc3d39dcc1312f73d8.png"
        />
        <div className={`flex-row ${styles['group_2']}`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5c53b4dc5c32c57af3b342e6350fc483.png"
          />
          <img
            className={`${styles['image_3']} ${styles['ml-5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=989e7daee00e3dd883893709dbc11387.png"
          />
          <img
            className={`${styles['image_4']} ${styles['ml-5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8a97e0b71b412f76dee3712b77e0cfda.png"
          />
        </div>
      </div>
      <div className={`flex-row justify-between items-center ${styles['group_3']}`}>
        <div className={`flex-col items-start`}>
          <span className={`${styles['font']} ${styles['text']}`}>Hello, Welcome 👋</span>
          <span className={`${styles['text_2']} ${styles['mt-11']}`}>Albert Stevano</span>
        </div>
        <img
          className={`${styles['image_5']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6ce00e754cc29479d8c2c80c2db704da.png"
        />
      </div>
      <div className={`flex-row ${styles['group_5']}`}>
        <div className={`flex-row items-center flex-1 ${styles['group_6']}`}>
          <img
            className={`${styles['image_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=47645f89c4b59f9066c4b8f5e8fa636d.png"
          />
          <span className={`${styles['text_3']} ${styles['ml-9']}`}>Search clothes. . . </span>
        </div>
        <img
          className={`shrink-0 ${styles['image_6']} ml-16`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3d61db33aab6152500c18989bac225ff.png"
        />
      </div>
      <div className={`flex-col justify-start ${styles['group_7']}`}>
        <div className={`flex-row ${styles['group_8']}`}>
          <div className={`flex-row items-center shrink-0 ${styles['section']}`}>
            <img
              className={`shrink-0 ${styles['image_9']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=debc9faf0e2945f6001facb93c853c53.png"
            />
            <span className={`${styles['font']} ${styles['text_4']} ml-4`}>All Items</span>
          </div>
          <div className={`flex-row items-center shrink-0 ${styles['group_9']} ${styles['ml-15']}`}>
            <img
              className={`shrink-0 ${styles['image_7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=18724753d195c6d1bcce71e6bbe7ce5b.png"
            />
            <span className={`${styles['font']} ${styles['text_5']} ${styles['ml-3']}`}>Dress</span>
          </div>
          <div className={`flex-row items-center shrink-0 ${styles['group_10']} ${styles['ml-15']}`}>
            <img
              className={`shrink-0 ${styles['image_7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=54dec1f496c22d81285208983812d2f7.png"
            />
            <span className={`${styles['font']} ${styles['text_6']} ml-2`}>T-Shirt</span>
          </div>
          <img
            className={`shrink-0 ${styles['image_8']} ${styles['ml-15']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=34454706d33e4749b3b0f4c148d19a74.png"
          />
        </div>
      </div>
      <div className={`${styles['section_2']}`}></div>
      <div className={`flex-col ${styles['pos']}`}>
        <div className={`flex-row self-start relative ${styles['group_13']}`}>
          <div className={`flex-col justify-start items-end ${styles['image-wrapper']} ${styles['pos_13']}`}>
            <img
              className={`shrink-0 ${styles['image_10']} ${styles['image_17']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2825714ee72e5cd00ab1ccb646bacd1f.png"
            />
          </div>
          <span className={`${styles['font_2']} ${styles['text_7']} ${styles['pos_1']}`}>Modern Light Clothes</span>
          <span className={`${styles['font_3']} ${styles['text_8']} ${styles['pos_14']}`}>T-Shirt</span>
          <span className={`${styles['font_4']} ${styles['pos_11']}`}>$212.99</span>
          <img
            className={`${styles['image_11']} ${styles['pos_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=828444613b70f72db00a07231cc6e2e6.png"
          />
          <span className={`${styles['font']} ${styles['pos_4']}`}>5.0</span>
        </div>
        <div className={`flex-col ${styles['group_15']} ${styles['pos_3']}`}>
          <div
            className={`flex-col justify-start items-end ${styles['equal-division-item']} ${styles['image-wrapper_2']}`}
          >
            <img
              className={`shrink-0 ${styles['image_10']} ${styles['image_18']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=404ded395885aff1fd046a9f0fee9308.png"
            />
          </div>
          <span className={`self-center ${styles['font_2']} ${styles['text_9']}`}>Light Dress Bless</span>
          <span className={`self-start ${styles['font_3']} ${styles['text_10']}`}>Dress modern</span>
          <div className={`flex-row items-center self-center ${styles['group_12']}`}>
            <span className={`${styles['font_4']}`}>$162.99</span>
            <img
              className={`shrink-0 ${styles['image_11']} ${styles['image_1']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=828444613b70f72db00a07231cc6e2e6.png"
            />
            <span className={`${styles['font']} ${styles['text_11']}`}>5.0</span>
          </div>
        </div>
        <div className={`flex-col justify-start items-end ${styles['image-wrapper_4']} ${styles['pos_9']}`}>
          <img
            className={`shrink-0 ${styles['image_10']} ${styles['image_15']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2825714ee72e5cd00ab1ccb646bacd1f.png"
          />
        </div>
        <div className={`flex-col justify-start items-start self-end relative ${styles['group_14']}`}>
          <div className={`flex-col justify-start items-end relative ${styles['image-wrapper_3']}`}>
            <img
              className={`${styles['image_10']} ${styles['image_12']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2825714ee72e5cd00ab1ccb646bacd1f.png"
            />
          </div>
        </div>
      </div>
      <div className={`${styles['section_4']} ${styles['pos_15']}`}></div>
      <div className={`flex-col justify-start ${styles['section_3']} ${styles['pos_5']}`}>
        <div className={`flex-row justify-between ${styles['equal-division']}`}>
          <img
            className={`${styles['equal-division-item_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=747a674d1d34a51daac1af8247ea04f5.png"
          />
          <img
            className={`${styles['equal-division-item_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0ea49cab8a013588326a2d6d781f8e0b.png"
          />
          <img
            className={`${styles['equal-division-item_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a992102659b1b94566f9305bfd220457.png"
          />
          <img
            className={`${styles['equal-division-item_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2a26c37b1a12b1e2df1fb001c381ca8c.png"
          />
        </div>
      </div>
    </div>
  );
}

High_Fidelity_Home_228_78682.defaultProps = { className: '' };