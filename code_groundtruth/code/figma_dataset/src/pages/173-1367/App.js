import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Home_173_1367(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-start ${styles['group']}`}>
        <div className={`flex-col items-start ${styles['group_2']}`}>
          <span className={`${styles['text']}`}>Foodgo</span>
          <span className={`${styles['text_2']} ${styles['mt-9']}`}>Order your favourite food!</span>
        </div>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4e05a9f30d7546d6f72522280a93b280.png"
        />
      </div>
      <div className={`flex-row ${styles['group_3']}`}>
        <div className={`flex-row items-center flex-1 relative ${styles['section']}`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=58ab9428a5aaad197fe3a0829691bab9.png"
          />
          <span className={`${styles['text_3']} ${styles['ml-25']}`}>Search</span>
        </div>
        <div className={`flex-col justify-start items-center shrink-0 ${styles['image-wrapper']} ${styles['ml-13']}`}>
          <img
            className={`${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=35090843d8aa5c22b2facf4fba3035cf.png"
          />
        </div>
      </div>
      <div className={`flex-col ${styles['group_4']}`}>
        <div className={`flex-row ${styles['view_2']}`}>
          <div className={`flex-col justify-start items-center shrink-0 relative ${styles['text-wrapper']}`}>
            <span className={`${styles['font']} ${styles['text_4']}`}>All</span>
          </div>
          <div className={`flex-col justify-start items-center shrink-0 ${styles['text-wrapper_1']} ml-14`}>
            <span className={`${styles['font']} ${styles['text_5']}`}>Combos</span>
          </div>
          <div className={`flex-col justify-start items-center shrink-0 ${styles['text-wrapper_2']} ml-14`}>
            <span className={`${styles['font']}`}>Sliders</span>
          </div>
          <div className={`flex-col justify-start items-end shrink-0 ${styles['text-wrapper_3']} ml-14`}>
            <span className={`${styles['font']}`}>Classic</span>
          </div>
        </div>
        <div className={`${styles['grid']} ${styles['mt-41']}`}>
          <div className={`flex-col relative ${styles['grid-item']}`}>
            <div className={`flex-col self-start ${styles['group_5']}`}>
              <div className={`flex-col justify-start items-end self-stretch relative ${styles['group_6']}`}>
                <div className={`${styles['section_2']}`}></div>
                <img
                  className={`${styles['image_4']} ${styles['pos']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0c0ce6fea210c5a8a8542e52c394808a.png"
                />
              </div>
              <div className={`self-start ${styles['group_9']} mt-8`}>
                <span className={`${styles['font_2']}`}>Cheeseburger</span>
                <span className={`${styles['font_3']} ${styles['text_6']}`}>Wendy's Burger</span>
              </div>
            </div>
            <div className={`flex-row justify-between items-center self-stretch ${styles['mt-5']}`}>
              <div className={`flex-row items-center`}>
                <img
                  className={`shrink-0 ${styles['image_7']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=14b7cc19e71e56ff5bcbf4a9a8194f42.png"
                />
                <span className={`${styles['font_4']} ${styles['text_7']} ml-6`}>4.9</span>
              </div>
              <img
                className={`${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6a2760874dabdf85ab01eef659f24c04.png"
              />
            </div>
          </div>
          <div className={`flex-col relative ${styles['grid-item_2']}`}>
            <div className={`flex-col self-start ${styles['group_7']}`}>
              <div className={`flex-col justify-start items-end self-stretch relative ${styles['group_8']}`}>
                <div className={`${styles['section_2']}`}></div>
                <img
                  className={`${styles['image_5']} ${styles['pos_2']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=171aac160a1476346f9303ca477a8a7e.png"
                />
              </div>
              <div className={`self-start mt-4`}>
                <span className={`${styles['font_2']}`}>
                  Hamburger <br />
                </span>
                <span className={`${styles['font_3']}`}>Veggie Burger</span>
              </div>
            </div>
            <div className={`flex-row justify-between items-center self-stretch ${styles['mt-5']}`}>
              <div className={`flex-row items-center`}>
                <img
                  className={`shrink-0 ${styles['image_8']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=03ed38103d21eafd9fd0848ac1c920cd.png"
                />
                <span className={`${styles['font_4']} ${styles['text_8']} ${styles['ml-5']}`}>4.8</span>
              </div>
              <img
                className={`${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6a2760874dabdf85ab01eef659f24c04.png"
              />
            </div>
          </div>
          <div className={`flex-col relative ${styles['grid-item_3']}`}>
            <div className={`flex-col ${styles['group_10']}`}>
              <div className={`flex-col justify-start items-center self-stretch relative ${styles['group_11']}`}>
                <img
                  className={`${styles['image_12']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9d57651e4d745a517dacb17333cb7fd8.png"
                />
                <img
                  className={`${styles['image_9']} ${styles['pos_3']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f5980433b0fea0c5bb10526fd2fbbcae.png"
                />
              </div>
              <div className={`self-start ${styles['group_13']}`}>
                <span className={`${styles['font_5']}`}>Hamburger</span>
                <span className={`${styles['font_3']} ${styles['text_1']}`}>Chicken</span>
                <span className={`${styles['font_3']}`}> Burger</span>
              </div>
            </div>
            <div className={`flex-row justify-between items-center mt-4`}>
              <div className={`flex-row items-center`}>
                <img
                  className={`shrink-0 ${styles['image_7']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=14b7cc19e71e56ff5bcbf4a9a8194f42.png"
                />
                <span className={`${styles['font_4']} ${styles['text_9']} ml-6`}>4.6</span>
              </div>
              <img
                className={`${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6a2760874dabdf85ab01eef659f24c04.png"
              />
            </div>
          </div>
          <div className={`flex-col ${styles['grid-item_4']}`}>
            <div className={`flex-col`}>
              <div className={`flex-col justify-start items-center self-stretch relative ${styles['group_12']}`}>
                <img
                  className={`${styles['image_13']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ea0abc6ffc31283e8aa6123ced25cd71.png"
                />
                <img
                  className={`${styles['image_10']} ${styles['pos_4']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=11a779f5b35d192a8c374acc8078b6cd.png"
                />
                <img
                  className={`${styles['image_11']} ${styles['pos_5']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8b64a452c1a0d24bbe8b0db88dbf0e6d.png"
                />
              </div>
              <div className={`self-start ${styles['group_14']} ${styles['mt-7']}`}>
                <span className={`${styles['font_5']}`}>Hamburger</span>
                <span className={`${styles['font_3']} ${styles['text_13']}`}>Fried Chicken</span>
                <span className={`${styles['font_3']}`}> Burger</span>
              </div>
            </div>
            <div className={`flex-row justify-between items-center mt-4`}>
              <div className={`flex-row items-center`}>
                <img
                  className={`shrink-0 ${styles['image_7']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=14b7cc19e71e56ff5bcbf4a9a8194f42.png"
                />
                <span className={`${styles['font_4']} ${styles['text_10']} ml-6`}>4.5</span>
              </div>
              <img
                className={`${styles['image_6']} ${styles['image_14']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6a2760874dabdf85ab01eef659f24c04.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col justify-start relative ${styles['group_15']}`}>
        <div className={`flex-row justify-between ${styles['section_3']}`}>
          <div className={`flex-col items-center self-start ${styles['group_16']}`}>
            <img
              className={`${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f79fe0ebe10e360cd2d7bec61d202f97.png"
            />
            <div className={`${styles['section_4']} mt-8`}></div>
          </div>
          <div className={`flex-row`}>
            <div className={`flex-col justify-start items-start ${styles['image-wrapper_1']}`}>
              <img
                className={`${styles['image_16']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8e6b833694412cda116293b173e6983b.png"
              />
            </div>
            <div className={`flex-col justify-start items-end ${styles['image-wrapper_2']} ml-60`}>
              <img
                className={`${styles['image_2']} ${styles['image_17']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=44f536690420e2369f5a058bbc82d1fd.png"
              />
            </div>
          </div>
          <img
            className={`self-start ${styles['image_6']} ${styles['image_18']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ffafed1c696f2759510c8c9e5a1c4b33.png"
          />
        </div>
        <img
          className={`${styles['image_15']} ${styles['pos_6']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d13b18cfd01eef6b410e55b2083ef920.png"
        />
      </div>
    </div>
  );
}

Home_173_1367.defaultProps = { className: '' };