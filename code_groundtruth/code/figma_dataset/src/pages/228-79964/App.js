import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Home_228_79964(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between ${styles['section']}`}>
        <span className={`${styles['text']}`}>9:41</span>
        <div className={`flex-row`}>
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0b2251689996a6e79bc376536a09795e.png"
          />
          <img
            className={`${styles['image_2']} ${styles['ml-5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5b438f309bbbbaf35c0093592446d679.png"
          />
          <img
            className={`${styles['image_3']} ${styles['ml-5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7f88c7dc7a595350279d45f871baf6b0.png"
          />
        </div>
      </div>
      <div className={`flex-row justify-between ${styles['group_2']}`}>
        <div className={`flex-col`}>
          <span className={`self-start ${styles['text_2']}`}>Delivery address</span>
          <div className={`flex-row items-center self-stretch mt-4`}>
            <span className={`${styles['font']} ${styles['text_4']}`}>Salatiga City, Central Java</span>
            <img
              className={`shrink-0 ${styles['image_6']} ${styles['ml-7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3048f511106946302c38de109ca284a7.png"
            />
          </div>
        </div>
        <div className={`flex-row ${styles['group_3']}`}>
          <div className={`flex-col justify-start items-center relative ${styles['group_4']}`}>
            <img
              className={`${styles['image_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f1c9967dd5075d71ec1b2fa14ae99484.png"
            />
            <div className={`flex-col justify-start items-center ${styles['text-wrapper']} ${styles['pos']}`}>
              <span className={`${styles['text_3']}`}>2</span>
            </div>
          </div>
          <img
            className={`${styles['image_5']} ml-16`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0721778742f8a87d6131aa9392a1f3e4.png"
          />
        </div>
      </div>
      <div className={`flex-row items-center ${styles['group_6']}`}>
        <img
          className={`${styles['image_7']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=467c5e611e7c7c08cd24b2f139bc8efd.png"
        />
        <span className={`${styles['font_1']} ${styles['text_5']} ${styles['ml-15']}`}>Search here ...</span>
      </div>
      <div className={`flex-col ${styles['group_7']}`}>
        <div className={`flex-row ${styles['group_8']}`}>
          <div className={`flex-col items-start relative ${styles['section_3']}`}>
            <span className={`${styles['font_3']} ${styles['text_6']}`}>SALE</span>
            <div className={`${styles['group_9']}`}>
              <span className={`${styles['font_4']}`}>
                UPTO
                <br />
              </span>
              <span className={`${styles['font_4']} ${styles['text_9']}`}>60%</span>
              <span className={`${styles['font_4']}`}> OFF</span>
            </div>
            <span className={`${styles['font_3']} ${styles['text_11']}`}>School Collections</span>
            <div className={`flex-col justify-start ${styles['group_5']} ${styles['pos_2']}`}>
              <div className={`${styles['section_2']}`}></div>
            </div>
            <img
              className={`shrink-0 ${styles['image_8']} ${styles['pos_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=21ab64f9bba2d396bdac8c58c48c89e1.png"
            />
            <img
              className={`shrink-0 ${styles['image_9']} ${styles['pos_4']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9707521e94f9e13ca71646260f55fc0f.png"
            />
            <img
              className={`shrink-0 ${styles['image_10']} ${styles['pos_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=43c55119782decea02798ee269e02563.png"
            />
          </div>
          <div className={`flex-col items-start shrink-0 ${styles['section_4']} ${styles['ml-15']}`}>
            <span className={`${styles['font_3']} ${styles['text_7']}`}>ELECTRONIC DAY</span>
            <div className={`flex-col justify-start items-start relative ${styles['group_10']} ${styles['mt-11']}`}>
              <div className={`${styles['section_5']}`}></div>
              <span className={`${styles['font_5']} ${styles['text_10']} ${styles['pos_7']}`}>40% OFF</span>
              <span className={`${styles['font_5']} ${styles['text_8']} ${styles['pos_6']}`}>
                GET YOUR DREAM DEVICE
              </span>
            </div>
          </div>
        </div>
        <div className={`flex-col ${styles['group_18']}`}>
          <span className={`self-start ${styles['font_6']} ${styles['text_12']}`}>Category</span>
          <div className={`flex-row ${styles['equal-division']} ${styles['group_12']} ${styles['mt-7']}`}>
            <div className={`flex-col items-center ${styles['group_13']} ${styles['equal-division-item']}`}>
              <img
                className={`${styles['image_11']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9e1c14107e690af56ac18b09515cc3b2.png"
              />
              <span className={`${styles['font_2']} ${styles['text_23']} mt-8`}>Apparel</span>
            </div>
            <div className={`flex-col items-center ${styles['group_13']} ${styles['group_1']}`}>
              <img
                className={`${styles['image_11']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=dbb8ebd4e71c1d6a0cfbc502b06f4fd0.png"
              />
              <span className={`${styles['font_1']} ${styles['text_14']} mt-8`}>School</span>
            </div>
            <div className={`flex-col items-center ${styles['group_13']} ${styles['equal-division-item']}`}>
              <img
                className={`${styles['image_11']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c4367971eb86dffd5775e30ba4ae4aaf.png"
              />
              <span className={`${styles['font_2']} mt-8`}>Sports</span>
            </div>
            <div className={`flex-col items-center ${styles['group_13']} ${styles['group_16']}`}>
              <img
                className={`${styles['image_11']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0e50115b1bd0589e464e8c20a46584bf.png"
              />
              <span className={`${styles['font_1']} mt-8`}>Electronic</span>
            </div>
            <div className={`flex-col items-center ${styles['group_13']} ${styles['group_17']}`}>
              <img
                className={`${styles['image_11']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2fd9cc947dbb687ab2391d192950b7c8.png"
              />
              <span className={`${styles['font_1']} ${styles['text_24']} mt-8`}>All</span>
            </div>
          </div>
        </div>
        <div className={`flex-col ${styles['group_19']}`}>
          <div className={`flex-row justify-between items-center ${styles['group_14']}`}>
            <span className={`${styles['font_6']} ${styles['text_13']}`}>Recent product</span>
            <div className={`flex-row ${styles['group_15']}`}>
              <span className={`${styles['font_7']}`}>Filters</span>
              <img
                className={`shrink-0 ${styles['image_12']} ${styles['ml-15']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b4fa75b4fc3c573c321c03fd9ea2e05e.png"
              />
            </div>
          </div>
          <div className={`${styles['grid']} ${styles['mt-13']}`}>
            <div className={`flex-col ${styles['grid-item']}`}>
              <img
                className={`${styles['image_13']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2ee60cf653f5fa2f05fe920d000eec6b.png"
              />
              <div className={`flex-col ${styles['section_6']}`}>
                <span className={`self-stretch ${styles['font_7']} ${styles['text_15']}`}>
                  Monitor LG 22”inc 4K 120Fps
                </span>
                <span className={`self-start ${styles['font_8']} mt-12`}>$199.99</span>
                <div className={`flex-col justify-start items-center self-stretch ${styles['text-wrapper_2']} mt-12`}>
                  <span className={`${styles['font_9']} ${styles['text_16']}`}>Add to cart</span>
                </div>
              </div>
            </div>
            <div className={`flex-col ${styles['grid-item']}`}>
              <img
                className={`${styles['image_13']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c3dc3749f3dd9da143e8dc2f126bd63d.png"
              />
              <div className={`flex-col ${styles['section_7']}`}>
                <span className={`self-stretch ${styles['font']} ${styles['text_1']}`}>
                  Aestechic Mug - white variant
                </span>
                <span className={`self-start ${styles['font_8']} mt-10`}>$19.99</span>
                <div className={`flex-col justify-start items-center self-stretch ${styles['text-wrapper_2']} mt-10`}>
                  <span className={`${styles['font_9']} ${styles['text_16']}`}>Add to cart</span>
                </div>
              </div>
            </div>
            <div className={`flex-col justify-start items-center ${styles['grid-item_2']}`}>
              <img
                className={`${styles['image_14']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=28959cb53ea8b1aadc8fc7abf5e34aa4.png"
              />
            </div>
            <div className={`flex-col justify-start items-center ${styles['grid-item_2']}`}>
              <img
                className={`${styles['image_14']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4a653f8bcbb1add7ccc91f127b97cd11.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['section_8']}`}>
        <div className={`flex-row justify-between`}>
          <img
            className={`${styles['image_15']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c4f2602a32fc866a03d4c8aea6bbabe4.png"
          />
          <img
            className={`${styles['image_15']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5e480038b3b947cbb41bba870e64ecac.png"
          />
          <img
            className={`${styles['image_15']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=707cc25415ad89897d9b740faebd341a.png"
          />
          <img
            className={`${styles['image_15']} ${styles['image_16']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=eb9926c89733c8319db19429a1759220.png"
          />
        </div>
        <div className={`flex-row justify-between items-center mt-10`}>
          <span className={`${styles['font_3']} ${styles['text_17']}`}>Home</span>
          <span className={`${styles['font_3']} ${styles['text_18']}`}>Wishlist</span>
          <span className={`${styles['font_3']} ${styles['text_19']}`}>History</span>
          <span className={`${styles['font_3']}`}>Account</span>
        </div>
      </div>
    </div>
  );
}

Home_228_79964.defaultProps = { className: '' };