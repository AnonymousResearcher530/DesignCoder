import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Trending_Products_228_76330(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center ${styles['group_2']}`}>
        <span className={`${styles['font']} ${styles['text']}`}>9:41</span>
        <div className={`flex-row`}>
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3c420925a8ab08820f83acd9f4b53097.png"
          />
          <img
            className={`${styles['image_2']} ${styles['ml-5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e594e717a86fdc0e66097a835996bd89.png"
          />
          <img
            className={`${styles['image_3']} ${styles['ml-5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2a7d8dc679a4756a2641bc1dd7c90627.png"
          />
        </div>
      </div>
      <div className={`flex-row justify-between items-center ${styles['group_3']}`}>
        <img
          className={`${styles['image_5']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5202ae7dd74029dbe1d2c597e749cc6c.png"
        />
        <div className={`flex-row items-center ${styles['group_4']}`}>
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
      <div className={`flex-row justify-between items-center ${styles['section']}`}>
        <div className={`flex-row items-center`}>
          <img
            className={`shrink-0 ${styles['image_8']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=601a1814040c2bd1c3109e9d95030267.png"
          />
          <span className={`${styles['text_3']} ${styles['ml-11']}`}>Search any Product..</span>
        </div>
        <img
          className={`${styles['equal-division-item']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7611a5a86288a3254bb1efe1ba824580.png"
        />
      </div>
      <div className={`flex-col ${styles['group_17']}`}>
        <div className={`flex-row justify-between items-center`}>
          <span className={`${styles['text_4']}`}>52,082+ Iteams </span>
          <div className={`flex-row ${styles['group_6']}`}>
            <div className={`flex-row items-center relative ${styles['section_1']}`}>
              <span className={`${styles['font_2']} ${styles['text_5']}`}>Sort</span>
              <img
                className={`shrink-0 ${styles['image_9']} ${styles['ml-3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0132b3f59defffc92cdb919adf2e13a4.png"
              />
            </div>
            <div className={`flex-row items-center ${styles['section_2']} ml-12`}>
              <span className={`${styles['font_2']} ${styles['text_6']}`}>Filter</span>
              <img
                className={`shrink-0 ${styles['image_9']} ${styles['ml-3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d57571057865c8bd916ea2df566ae0d2.png"
              />
            </div>
          </div>
        </div>
        <div className={`flex-row items-start ${styles['waterfall']} mt-16`}>
          <div className={`flex-col ${styles['section_15']} ${styles['waterfall-item_1']}`}>
            <img
              className={`self-center ${styles['image_10']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4fc52d01666cda896a3cdc6c7417282d.png"
            />
            <span className={`self-start ${styles['font']} ${styles['text_7']}`}>Black Winter...</span>
            <span className={`self-center ${styles['font_3']} ${styles['text_8']}`}>
              Autumn And Winter Casual cotton-padded jacket...
            </span>
            <span className={`self-start ${styles['font_2']} ${styles['text_9']}`}>₹499</span>
            <div className={`flex-row items-center self-stretch ${styles['group_1']} ${styles['view']}`}>
              <img
                className={`${styles['image_12']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=df957632776b8b24edc6bf7459e34042.png"
              />
              <img
                className={`${styles['image_13']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=36030ed0e41ee80339ebe048c8790f34.png"
              />
              <span className={`${styles['font_4']} ${styles['text_47']}`}>6,890</span>
            </div>
          </div>
          <div className={`flex-col ${styles['section_6']} ${styles['waterfall-item']}`}>
            <img
              className={`self-stretch ${styles['image_14']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d46de7f4d90dad8f3bdf1d6d9d75c261.png"
            />
            <span className={`self-start ${styles['font']} ${styles['text_13']}`}>Black Dress</span>
            <span className={`self-stretch ${styles['font_3']} ${styles['text_15']}`}>
              Solid Black Dress for Women, Sexy Chain Shorts Ladi...
            </span>
            <span className={`self-start ${styles['font_5']} ${styles['text_17']}`}>₹2,000</span>
            <div className={`flex-row items-center self-stretch ${styles['group_10']} ${styles['view_3']}`}>
              <img
                className={`${styles['image_12']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=df957632776b8b24edc6bf7459e34042.png"
              />
              <img
                className={`${styles['image_13']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=36030ed0e41ee80339ebe048c8790f34.png"
              />
              <span className={`${styles['font_4']} ${styles['text_11']}`}>5,23,456</span>
            </div>
          </div>
          <div className={`flex-col ${styles['section_7']} ${styles['waterfall-item_1']}`}>
            <img
              className={`self-stretch ${styles['image_10']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9cf5fa1d3eb7170d48f832527641e61c.png"
            />
            <span className={`self-start ${styles['font']} ${styles['text_19']}`}>Flare Dress</span>
            <span className={`self-stretch ${styles['font_3']} ${styles['text_20']}`}>
              Antheaa Black & Rust Orange Floral Print Tiered Midi F...
            </span>
            <span className={`self-start ${styles['font_5']} ${styles['text_21']}`}>₹1,990</span>
            <div className={`flex-row items-center self-stretch ${styles['group_1']} ${styles['view_5']}`}>
              <img
                className={`${styles['image_12']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=df957632776b8b24edc6bf7459e34042.png"
              />
              <img
                className={`${styles['image_13']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=36030ed0e41ee80339ebe048c8790f34.png"
              />
              <span className={`${styles['font_4']} ${styles['text_45']}`}>3,35,566</span>
            </div>
          </div>
          <div className={`flex-col ${styles['section_8']} ${styles['waterfall-item']}`}>
            <img
              className={`self-stretch ${styles['image_14']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7c6886d30cc19c13653cdc2645bb1229.png"
            />
            <div className={`flex-col self-start ${styles['group_12']}`}>
              <span className={`self-start ${styles['font']} ${styles['text_25']}`}>Jordan Stay</span>
              <span className={`self-stretch ${styles['font_3']} ${styles['text_46']} ${styles['mt-7']}`}>
                The classic Air Jordan 12 to create a shoe that's fres...
              </span>
            </div>
            <span className={`self-start ${styles['font_5']} ${styles['text_28']}`}>₹4,999</span>
            <div className={`flex-row items-center self-stretch ${styles['group_10']} ${styles['view_7']}`}>
              <img
                className={`${styles['image_12']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=df957632776b8b24edc6bf7459e34042.png"
              />
              <img
                className={`${styles['image_13']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ebb7829b093dcaa3b55cc0eb1f23bc2d.png"
              />
              <span className={`${styles['font_4']} ${styles['text_30']}`}>10,23,456</span>
            </div>
          </div>
          <div className={`flex-col ${styles['section_14']} ${styles['waterfall-item']}`}>
            <img
              className={`self-stretch ${styles['image_11']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1fa831cd2d29b4f541e6045c9a9929fe.png"
            />
            <span className={`self-start ${styles['font']} ${styles['text_10']}`}>Mens Starry</span>
            <div className={`flex-col items-start self-stretch ${styles['group_9']}`}>
              <span className={`${styles['font_3']} ${styles['text_1']}`}>Mens Starry Sky Printed Shirt</span>
              <span className={`${styles['font_3']}`}>100% Cotton Fabric</span>
            </div>
            <span className={`self-start ${styles['font_2']} ${styles['text_12']}`}>₹399</span>
            <div className={`flex-row items-center self-stretch ${styles['group_1']} ${styles['view_2']}`}>
              <img
                className={`${styles['image_12']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d3e1701c1be808bd6dc34a9145c96e57.png"
              />
              <img
                className={`${styles['image_13']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1d2830ff0aa69219157b2ca51e677752.png"
              />
              <span className={`${styles['font_4']} ${styles['text_43']}`}>1,52,344</span>
            </div>
          </div>
          <div className={`flex-col ${styles['section_16']} ${styles['waterfall-item_1']}`}>
            <img
              className={`self-stretch ${styles['image_15']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5eb0386037a664f6887b0a05b7a1c24d.png"
            />
            <span className={`self-start ${styles['font']} ${styles['text_14']}`}>Pink Embroide...</span>
            <span className={`self-start ${styles['font_3']} ${styles['text_16']}`}>
              EARTHEN Rose Pink Embroidered Tiered Max...
            </span>
            <span className={`self-start ${styles['font_5']} ${styles['text_18']}`}>₹1,900</span>
            <div className={`flex-row items-center self-stretch ${styles['group_11']} ${styles['view_4']}`}>
              <img
                className={`${styles['image_12']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d3e1701c1be808bd6dc34a9145c96e57.png"
              />
              <img
                className={`${styles['image_13']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1d2830ff0aa69219157b2ca51e677752.png"
              />
              <span className={`${styles['font_4']} ${styles['text_44']}`}>45,678</span>
            </div>
          </div>
          <div className={`flex-col ${styles['section_9']} ${styles['waterfall-item']}`}>
            <img
              className={`self-stretch ${styles['image_11']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=59d8fcec8ab6378be14376ada393d594.png"
            />
            <span className={`self-start ${styles['font']} ${styles['text_22']}`}>denim dress</span>
            <span className={`self-start ${styles['font_3']} ${styles['text_23']}`}>
              Blue cotton denim dress Look 2 Printed cotton dr...
            </span>
            <span className={`self-start ${styles['font_2']} ${styles['text_24']}`}>₹999</span>
            <div className={`flex-row items-center self-stretch ${styles['group_1']} ${styles['view_6']}`}>
              <img
                className={`${styles['image_12']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d3e1701c1be808bd6dc34a9145c96e57.png"
              />
              <img
                className={`${styles['image_13']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1d2830ff0aa69219157b2ca51e677752.png"
              />
              <span className={`${styles['font_4']} ${styles['text_48']}`}>27,344</span>
            </div>
          </div>
          <div className={`flex-col ${styles['section_11']} ${styles['waterfall-item_1']}`}>
            <img
              className={`self-stretch ${styles['image_15']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bf9c3ae1b2ab12a2407c4bb3e8bf08f8.png"
            />
            <span className={`self-start ${styles['font']} ${styles['text_26']}`}>Realme 7 </span>
            <span className={`self-start ${styles['font_3']} ${styles['text_27']}`}>
              6 GB RAM | 64 GB ROM | Expandable Upto 256...
            </span>
            <span className={`self-start ${styles['font_5']} ${styles['text_29']}`}>₹3,499</span>
            <div className={`flex-row items-center self-stretch ${styles['group_11']} ${styles['view_8']}`}>
              <img
                className={`${styles['image_12']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d3e1701c1be808bd6dc34a9145c96e57.png"
              />
              <img
                className={`${styles['image_13']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1d2830ff0aa69219157b2ca51e677752.png"
              />
              <span className={`${styles['font_4']} ${styles['text_38']}`}>3,44,567</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col justify-start relative ${styles['group_13']}`}>
        <div className={`flex-col justify-start relative ${styles['section_5']}`}>
          <div className={`flex-row justify-between items-center ${styles['group_15']}`}>
            <div className={`flex-row`}>
              <span className={`${styles['font_6']} ${styles['text_31']}`}>Home</span>
              <span className={`${styles['font_6']} ${styles['text_32']} ${styles['ml-33']}`}>wishlist</span>
            </div>
            <div className={`flex-row items-center`}>
              <span className={`${styles['font_6']} ${styles['text_33']}`}>Search</span>
              <span className={`${styles['font_6']} ${styles['text_34']} ml-34`}>Setting</span>
            </div>
          </div>
        </div>
        <div className={`${styles['section_4']} ${styles['pos']}`}></div>
        <div className={`flex-row justify-between ${styles['equal-division']} ${styles['group_14']}`}>
          <img
            className={`${styles['equal-division-item_1']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a761695b01e0b82f8e086ac5f2b1b957.png"
          />
          <img
            className={`${styles['equal-division-item']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5eb0ee8127a9c0f168b07f769b21b461.png"
          />
          <img
            className={`${styles['equal-division-item']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7f08f3a9c32d4f443a8f82f6c2250c05.png"
          />
          <img
            className={`${styles['equal-division-item']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1c17d99260f8fca7874c2a6607966916.png"
          />
          <img
            className={`${styles['equal-division-item_1']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=69a09b165b297b9720f13bcfd6389aa1.png"
          />
        </div>
      </div>
    </div>
  );
}

Trending_Products_228_76330.defaultProps = { className: '' };