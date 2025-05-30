import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Home_page_228_76233(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center ${styles['group']}`}>
        <span className={`${styles['text']}`}>9:41</span>
        <div className={`flex-row`}>
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a41225557f950149599b63a3075a9fa2.png"
          />
          <img
            className={`${styles['image_2']} ${styles['ml-5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=30f04dd1df90e8ce9dffee9cdc99b60a.png"
          />
          <img
            className={`${styles['image_3']} ${styles['ml-5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2b7c5c59099d74a854b5ee10afecfbb5.png"
          />
        </div>
      </div>
      <div className={`flex-row justify-between items-center ${styles['group_2']}`}>
        <img
          className={`${styles['image_5']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5202ae7dd74029dbe1d2c597e749cc6c.png"
        />
        <div className={`flex-row items-center ${styles['group_3']}`}>
          <img
            className={`shrink-0 ${styles['image_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3f18ffface1266112c2fa4afa2704a83.png"
          />
          <span className={`shrink-0 ${styles['text_2']} ml-10`}>Stylish</span>
        </div>
        <img
          className={`${styles['image_4']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f7c6defe85fb277fcd365e6fadcde4ba.png"
        />
      </div>
      <div className={`flex-row justify-between items-center relative ${styles['section']}`}>
        <div className={`flex-row items-center`}>
          <img
            className={`shrink-0 ${styles['image_8']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=601a1814040c2bd1c3109e9d95030267.png"
          />
          <span className={`${styles['text_3']} ${styles['ml-11']}`}>Search any Product..</span>
        </div>
        <img
          className={`${styles['image_7']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7611a5a86288a3254bb1efe1ba824580.png"
        />
      </div>
      <div className={`flex-col ${styles['group_4']}`}>
        <div className={`flex-row justify-between items-center self-stretch ${styles['group_5']}`}>
          <span className={`${styles['text_4']}`}>All Featured</span>
          <div className={`flex-row`}>
            <div className={`flex-row items-center relative ${styles['section_1']}`}>
              <span className={`${styles['font']} ${styles['text_5']}`}>Sort</span>
              <img
                className={`shrink-0 ${styles['image_9']} ${styles['ml-3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0132b3f59defffc92cdb919adf2e13a4.png"
              />
            </div>
            <div className={`flex-row items-center ${styles['section_2']} ml-12`}>
              <span className={`${styles['font']}`}>Filter</span>
              <img
                className={`shrink-0 ${styles['image_9']} ${styles['ml-3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d57571057865c8bd916ea2df566ae0d2.png"
              />
            </div>
          </div>
        </div>
        <div className={`flex-row ${styles['equal-division']} ${styles['equal-division_1']}`}>
          <div className={`flex-col items-center ${styles['group_6']} ${styles['group_1']}`}>
            <img
              className={`${styles['image_10']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=66dd7b6e7050e0eb964b6c1fcd711b3e.png"
            />
            <span className={`${styles['font_2']} ${styles['text_1']} mt-6`}>Beauty</span>
          </div>
          <div className={`flex-col items-center ${styles['group_6']} ${styles['equal-division-item_1']}`}>
            <img
              className={`${styles['image_10']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=aa814682a3be92bac38ca9648a37b4a7.png"
            />
            <span className={`${styles['font_2']} mt-6`}>Fashion</span>
          </div>
          <div className={`flex-col items-center ${styles['group_6']} ${styles['equal-division-item_1']}`}>
            <img
              className={`${styles['image_10']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=67b8be620a016a526e9030fa4b2a72aa.png"
            />
            <span className={`${styles['font_2']} mt-6`}>Kids</span>
          </div>
          <div className={`flex-col items-center ${styles['group_6']} ${styles['equal-division-item_3']}`}>
            <img
              className={`${styles['image_10']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f3af2b1cdec2473e13331f736a8e5b3c.png"
            />
            <span className={`${styles['font_2']} ${styles['text_21']} mt-6`}>Mens</span>
          </div>
          <div className={`flex-col items-center ${styles['group_6']} ${styles['equal-division-item_3']}`}>
            <img
              className={`${styles['image_10']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=99de8d2d4a17fd900552989404b866dc.png"
            />
            <span className={`${styles['font_2']} ${styles['text_21']} mt-6`}>Womens</span>
          </div>
        </div>
        <div className={`flex-col self-stretch ${styles['group_16']}`}>
          <div className={`flex-col items-start self-stretch ${styles['section_3']}`}>
            <span className={`${styles['text_6']}`}>50-40% OFF</span>
            <span className={`${styles['font_3']} ${styles['text_7']}`}>Now in (product)</span>
            <span className={`${styles['font']} ${styles['text_8']}`}>All colours</span>
            <div className={`flex-row items-center ${styles['group_7']}`}>
              <span className={`${styles['font_3']} ${styles['text_9']}`}>Shop Now</span>
              <img
                className={`shrink-0 ${styles['image_9']} ${styles['ml-3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3b87e5eceaed07dceb8b477d4fd224c1.png"
              />
            </div>
          </div>
          <img
            className={`self-center ${styles['image_11']} mt-12`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b0386dc628e2a70c2964883e4ad2f306.png"
          />
        </div>
        <div className={`flex-col self-stretch ${styles['section_4']}`}>
          <img
            className={`${styles['image_12']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=acc157f1430bda264ed90570b0e802bb.png"
          />
          <div className={`flex-row items-end ${styles['group_9']} ${styles['mt-11']}`}>
            <div className={`flex-col items-start flex-1 ${styles['group_10']}`}>
              <span className={`${styles['font_4']} ${styles['text_10']}`}>New Arrivals </span>
              <span className={`${styles['font_5']} ${styles['text_12']} mt-12`}>Summer’ 25 Collections</span>
            </div>
            <div className={`flex-row items-center shrink-0 ${styles['section_5']} ml-20`}>
              <span className={`${styles['text_11']}`}>View all</span>
              <img
                className={`shrink-0 ${styles['image_9']} ${styles['ml-3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3b87e5eceaed07dceb8b477d4fd224c1.png"
              />
            </div>
          </div>
        </div>
        <div className={`flex-col items-start self-end ${styles['group_17']}`}>
          <span className={`${styles['font_4']} ${styles['text_13']}`}>Sponserd</span>
          <img
            className={`${styles['image_13']} mt-12`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e58b24745321879f08fb28d495e54993.png"
          />
        </div>
        <div className={`flex-row justify-between items-center self-end ${styles['group_11']}`}>
          <span className={`${styles['font_5']} ${styles['text_14']}`}>up to 50% Off</span>
          <img
            className={`${styles['image_8']} ${styles['image_14']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=240a5c9248f6120ad2409221332d4584.png"
          />
        </div>
      </div>
      <div className={`flex-row relative ${styles['group_12']}`}>
        <span className={`${styles['font_6']} ${styles['text_15']} ${styles['pos_2']}`}>Home</span>
        <span className={`${styles['font_6']} ${styles['text_16']} ${styles['pos_3']}`}>Wishlist</span>
        <span className={`${styles['font_6']} ${styles['text_17']} ${styles['pos_4']}`}>Search</span>
        <span className={`${styles['font_6']} ${styles['text_18']} ${styles['pos_5']}`}>Setting</span>
        <div className={`${styles['section_7']} ${styles['pos']}`}></div>
        <img
          className={`${styles['image_15']} ${styles['equal-division-item_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f305d13cd5248b2f167e8842fc1c16ad.png"
        />
        <img
          className={`${styles['image_16']} ${styles['image_7']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f13f4de0a084cea8da57a515cdff2785.png"
        />
        <img
          className={`${styles['image_17']} ${styles['image_7']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7f08f3a9c32d4f443a8f82f6c2250c05.png"
        />
        <img
          className={`${styles['image_18']} ${styles['image_7']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1c17d99260f8fca7874c2a6607966916.png"
        />
        <img
          className={`${styles['image_19']} ${styles['equal-division-item_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=69a09b165b297b9720f13bcfd6389aa1.png"
        />
      </div>
    </div>
  );
}

Home_page_228_76233.defaultProps = { className: '' };