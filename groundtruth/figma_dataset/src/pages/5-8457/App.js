import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Explore_5_8457(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <span className={`self-center ${styles['text']}`}>Find Products</span>
      <div className={`flex-row items-center self-stretch ${styles['section']}`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f8731009305c0e4c201c5d25f5b9656b.png"
        />
        <span className={`${styles['text_2']} ml-10`}>Search Store</span>
      </div>
      <div className={`self-stretch ${styles['grid']}`}>
        <div className={`flex-col relative ${styles['grid-item']}`}>
          <img
            className={`${styles['image_2']} ${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=72a3540797ae11ca1dda346a454c49b8.png"
          />
          <div className={`flex-col items-center mt-6`}>
            <span className={`${styles['font']}`}>Frash Fruits</span>
            <span className={`${styles['font']}`}>& Vegetable</span>
          </div>
        </div>
        <div className={`flex-col relative ${styles['grid-item_2']}`}>
          <div className={`flex-col justify-start items-center relative ${styles['group_2']}`}>
            <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
              <img
                className={`${styles['image_4']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b52397d74084d1435fa329572f5ab329.png"
              />
            </div>
            <img
              className={`${styles['image_2']} ${styles['pos']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=dd1b9979445598f679c2c830962f280a.png"
            />
            <img
              className={`${styles['image_4']} ${styles['pos_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ec3a3dd082c130021e89d37fd678e51c.png"
            />
          </div>
          <div className={`flex-col items-center mt-6`}>
            <span className={`${styles['font']}`}>Cooking Oil</span>
            <span className={`${styles['font']}`}>& Ghee</span>
          </div>
        </div>
        <div className={`flex-col items-center relative ${styles['grid-item_3']}`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1b989ce29c45674caf35c9e2312a80f7.png"
          />
          <span className={`${styles['font']} ${styles['text_3']} mt-18`}>Meat & Fish</span>
        </div>
        <div className={`flex-col items-center relative ${styles['grid-item_4']}`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5abf604d02931ec444f88e27ab5f531c.png"
          />
          <span className={`${styles['font_2']} mt-18`}>Bakery & Snacks</span>
        </div>
        <div className={`flex-col items-center relative ${styles['grid-item_5']}`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a5faad15ce8b769dde6b461a032d54db.png"
          />
          <span className={`${styles['font_2']} ${styles['text_4']} mt-20`}>Dairy & Eggs</span>
        </div>
        <div className={`flex-col items-center ${styles['grid-item_6']}`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=790813dfe986da9e1cf72bbadb8d61af.png"
          />
          <span className={`${styles['font_2']} mt-20`}>Beverages</span>
        </div>
      </div>
      <div className={`flex-row justify-between items-center self-stretch ${styles['section_2']}`}>
        <img
          className={`${styles['image_5']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fc05f424f92bdeffd2cfa4f1c00d7991.png"
        />
        <img
          className={`${styles['image_6']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1b4b355b934102b125a828b5fc83a1ae.png"
        />
        <img
          className={`${styles['image_7']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=880e3210af443b21a08e0e75600794da.png"
        />
        <img
          className={`${styles['image_8']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f348b27dd14abd21d0a7869c6253c221.png"
        />
        <img
          className={`${styles['image_9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8d3b917ba3d74ea1b9decec7ffb1fd44.png"
        />
      </div>
    </div>
  );
}

Explore_5_8457.defaultProps = { className: '' };