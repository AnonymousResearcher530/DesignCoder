import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Product_228_79039(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col relative ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start self-end ${styles['group_9']}`}>
        <div className={`flex-col justify-start ${styles['section']}`}>
          <div className={`flex-row justify-end ${styles['divider']}`}>
            <div className={`${styles['section_3']}`}></div>
            <div className={`${styles['section_4']} ml-10`}></div>
            <div className={`${styles['section_4']} ml-10`}></div>
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['group_1']} ${styles['pos_2']}`}>
        <img
          className={`self-center ${styles['image_4']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3ebc145c968a2da3843b073751aacbf7.png"
        />
        <div className={`flex-col items-center self-stretch ${styles['section_2']} mt-56`}>
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fbb2425ac597845999ed011957c5b949.png"
          />
          <img
            className={`${styles['image_5']} mt-30`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d426c7b9ed2b5e3835d358fd321ae411.png"
          />
          <img
            className={`${styles['image_5']} mt-30`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5fc3f32030125e9389d112e547c078f7.png"
          />
        </div>
      </div>
      <div className={`flex-row ${styles['pos_1']}`}>
        <span className={`${styles['text']}`}>9:41</span>
        <img
          className={`shrink-0 ${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=be72bddd4c8bb5ba3d1df7117538ec72.png"
        />
        <img
          className={`shrink-0 ${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=28d6ce48787177a523d26168c79455ee.png"
        />
        <img
          className={`shrink-0 ${styles['image_3']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1d1e95c45803afb0e5709cde61cb39c7.png"
        />
      </div>
      <div className={`flex-col self-stretch relative ${styles['group']}`}>
        <span className={`self-start ${styles['text_2']}`}>Minimal Stand</span>
        <div className={`flex-row justify-between self-stretch ${styles['group_2']}`}>
          <span className={`${styles['text_3']}`}>$ 50</span>
          <div className={`flex-row items-center ${styles['group_3']}`}>
            <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
              <img
                className={`${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b0e3703f917b0633e028799d814a0afd.png"
              />
            </div>
            <div className={`flex-col justify-start items-center ${styles['image-wrapper']} ml-12`}>
              <span className={`${styles['font']} ${styles['text_4']}`}>01</span>
            </div>
            <div className={`flex-col justify-start items-center ${styles['image-wrapper']} ml-12`}>
              <img
                className={`${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=15dc55166bf3e449abb38e13a52d7562.png"
              />
            </div>
          </div>
        </div>
        <div className={`flex-row items-center self-stretch ${styles['group_4']}`}>
          <div className={`flex-row items-center`}>
            <img
              className={`shrink-0 ${styles['image_7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1f662f72fe424af466883480b839e30c.png"
            />
            <span className={`${styles['font']} ${styles['text_5']} ${styles['ml-11']}`}>4.5</span>
          </div>
          <span className={`${styles['text_6']} ml-22`}>(50 reviews)</span>
        </div>
        <span className={`self-stretch ${styles['text_7']}`}>
          Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the
          best furnitures in any family for now. With 3 different colors, you can easily select the best match for your
          home.{' '}
        </span>
      </div>
      <div className={`flex-row self-stretch relative ${styles['group_5']}`}>
        <div className={`flex-col justify-start items-center shrink-0 ${styles['image-wrapper_2']}`}>
          <img
            className={`${styles['image_8']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=52957e89944e1b7c320f25e0434d4f2f.png"
          />
        </div>
        <div className={`flex-col justify-start items-center flex-1 ${styles['text-wrapper']} ${styles['ml-15']}`}>
          <span className={`${styles['text_8']}`}>Add to cart</span>
        </div>
      </div>
    </div>
  );
}

Product_228_79039.defaultProps = { className: '' };