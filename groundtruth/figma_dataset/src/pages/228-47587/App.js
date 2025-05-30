import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function No_Subjects_Added_Yet_(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col ${styles['section']}`}>
        <div className={`flex-row justify-between items-start ${styles['group']}`}>
          <div className={`${styles['group_2']}`}>
            <span className={`${styles['text']}`}>
              Hello,
              <br />
            </span>
            <span className={`${styles['text_2']}`}>good Morning </span>
          </div>
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0c11581bfe71f16078755440ba9dd106.png"
          />
        </div>
        <div className={`flex-row justify-between items-center ${styles['section_2']}`}>
          <div className={`flex-row items-center`}>
            <img
              className={`shrink-0 ${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fdeeaf29b4c3e27c4a723f268ce5b2c4.png"
            />
            <span className={`${styles['font']} ${styles['text_3']} ${styles['ml-17']}`}>Search</span>
          </div>
          <div className={`flex-row items-center`}>
            <span className={`${styles['font']} ${styles['text_4']}`}>All</span>
            <img
              className={`ml-16 shrink-0 ${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bd0cba2ad0b9c0fac5fb78c5ad52666f.png"
            />
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['mt-33']}`}>
        <div className={`flex-row justify-between items-center ${styles['group_3']}`}>
          <span className={`${styles['text_5']}`}>Explore categories</span>
          <span className={`${styles['font_2']} ${styles['text_6']}`}>See all</span>
        </div>
        <div className={`flex-col ${styles['group_4']} ${styles['mt-19']}`}>
          <div className={`${styles['grid']}`}>
            <div className={`flex-col relative ${styles['grid-item']}`}>
              <div className={`flex-col items-start self-stretch`}>
                <img
                  className={`shrink-0 ${styles['image_4']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=202bbabf2e6b2eff2a3e622cc495caaa.png"
                />
                <span className={`${styles['font_3']} ${styles['text_7']}`}>Accounting </span>
              </div>
              <span className={`mt-8 self-start ${styles['font_4']} ${styles['text_9']}`}>20 Courses </span>
            </div>
            <div className={`flex-col items-start relative ${styles['grid-item_2']}`}>
              <img
                className={`shrink-0 ${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=33a59cfceb516da91bad00556f47a0d5.png"
              />
              <span className={`${styles['font_3']} ${styles['text_8']}`}>Bioloogy</span>
              <span className={`${styles['font_4']} ${styles['text_10']}`}>15 Courses </span>
            </div>
            <div className={`flex-col items-start relative ${styles['grid-item_4']}`}>
              <img
                className={`${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=64625874d9ebef402ac3d4db8b13e9a6.png"
              />
              <span className={`mt-8 ${styles['font_4']} ${styles['text_11']}`}>25 Courses </span>
            </div>
            <div className={`flex-col items-start relative ${styles['grid-item_3']}`}>
              <img
                className={`${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e5cac7d1aece5457167ca80ed04381db.png"
              />
              <span className={`mt-8 ${styles['font_4']} ${styles['text_12']}`}>18 Courses </span>
            </div>
            <div className={`flex-col justify-start items-start relative ${styles['grid-item_6']}`}>
              <img
                className={`${styles['image_5']} ${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=90f6fe90f6851d2a2437804cdf102707.png"
              />
            </div>
            <div className={`flex-col justify-start items-start ${styles['grid-item_5']}`}>
              <img
                className={`${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=45967fea1040756f80f7f035bd9adaad.png"
              />
            </div>
          </div>
          <div className={`flex-row justify-around items-center relative ${styles['section_3']}`}>
            <div className={`flex-row items-center ${styles['section_4']}`}>
              <img
                className={`shrink-0 ${styles['image_7']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9433f2baf99a41d841a1251a4c539806.png"
              />
              <span className={`ml-8 ${styles['font_2']} ${styles['text_13']}`}>Home</span>
            </div>
            <img
              className={`${styles['image_8']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2cb52b8a357bd915215b4398dc3174c1.png"
            />
            <img
              className={`${styles['image_9']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7dcf25c39152cfc6302d8edf9c30150c.png"
            />
            <img
              className={`${styles['image_10']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d04b761db2972e20d5463779db441ba8.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

No_Subjects_Added_Yet_.defaultProps = { className: '' };