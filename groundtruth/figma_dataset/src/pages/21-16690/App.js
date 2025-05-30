import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Page_07_E_Favorite_Services_21_16690(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start self-stretch ${styles['section']}`}>
        <div className={`flex-row justify-center items-center relative ${styles['section_2']}`}>
          <img
            className={`${styles['image']} ${styles['pos']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=248d2b7bedb9b973e424151c0f038940.png"
          />
          <span className={`${styles['text']} ${styles['text_2']}`}>favorite</span>
        </div>
      </div>
      <div className={`flex-col self-center ${styles['group']}`}>
        <div className={`flex-row items-center ${styles['group_3']}`}>
          <span className={`${styles['font']} ${styles['text']} ${styles['text_3']}`}>Sort by</span>
          <div className={`flex-col justify-start ${styles['text-wrapper']} ml-4`}>
            <span className={`${styles['font_2']} ${styles['text_4']}`}>A→Z </span>
          </div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']} ml-4`}>
            <span className={`${styles['font_2']} ${styles['text_5']}`}>Filter </span>
          </div>
        </div>
        <div className={`flex-row ${styles['group_4']}`}>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_3']}`}>
            <span className={`${styles['font_3']} ${styles['text_6']}`}>Doctors</span>
          </div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_4']} ${styles['ml-3']}`}>
            <span className={`${styles['font_3']} ${styles['text_7']}`}>Services</span>
          </div>
        </div>
        <div className={`flex-col ${styles['group_1']}`}>
          <div className={`flex-row justify-between items-center ${styles['section_3']}`}>
            <div className={`flex-row`}>
              <img
                className={`shrink-0 ${styles['image_2']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7133013a8a30f7d587074d50aa334c69.png"
              />
              <span className={`${styles['font_4']} ${styles['ml-5']}`}>Cardiology</span>
            </div>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6f667c4495075ffd5ad02cf496ec9c03.png"
            />
          </div>
          <div className={`flex-col justify-start ${styles['text-wrapper_5']} ${styles['mt-13_1']}`}>
            <span className={`${styles['font']} ${styles['text_8']}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt
              tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam.
            </span>
          </div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_6']} ${styles['mt-13_1']}`}>
            <span className={`${styles['text']} ${styles['text_9']}`}>looking doctors</span>
          </div>
        </div>
        <div className={`flex-row justify-between items-center ${styles['section_4']} ${styles['mt-13']}`}>
          <div className={`flex-row`}>
            <img
              className={`shrink-0 ${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7133013a8a30f7d587074d50aa334c69.png"
            />
            <span className={`${styles['font_4']} ${styles['ml-7']}`}>Dermatology</span>
          </div>
          <img
            className={`${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6f667c4495075ffd5ad02cf496ec9c03.png"
          />
        </div>
        <div className={`flex-row justify-between items-center ${styles['section_5']}`}>
          <div className={`flex-row items-center`}>
            <img
              className={`shrink-0 ${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7133013a8a30f7d587074d50aa334c69.png"
            />
            <span className={`${styles['font_3']} ml-6`}>General Medicine</span>
          </div>
          <img
            className={`${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6f667c4495075ffd5ad02cf496ec9c03.png"
          />
        </div>
        <div className={`flex-row justify-between items-center ${styles['section_4']}`}>
          <div className={`flex-row`}>
            <img
              className={`shrink-0 ${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7133013a8a30f7d587074d50aa334c69.png"
            />
            <span className={`${styles['font_4']} ml-6`}>Gynecology</span>
          </div>
          <img
            className={`${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6f667c4495075ffd5ad02cf496ec9c03.png"
          />
        </div>
        <div className={`flex-row justify-between items-center ${styles['section_4']}`}>
          <div className={`flex-row`}>
            <img
              className={`shrink-0 ${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7133013a8a30f7d587074d50aa334c69.png"
            />
            <span className={`${styles['font_4']} ml-6`}>Odontology</span>
          </div>
          <img
            className={`${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6f667c4495075ffd5ad02cf496ec9c03.png"
          />
        </div>
        <div className={`flex-row justify-between items-center ${styles['section_4']}`}>
          <div className={`flex-row`}>
            <img
              className={`shrink-0 ${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7133013a8a30f7d587074d50aa334c69.png"
            />
            <span className={`${styles['font_4']} ml-6`}>Oncology</span>
          </div>
          <img
            className={`${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6f667c4495075ffd5ad02cf496ec9c03.png"
          />
        </div>
      </div>
      <div className={`flex-col justify-start items-center self-stretch ${styles['section_6']}`}>
        <div className={`flex-row`}>
          <img
            className={`${styles['equal-division-item_1']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=32163c36729e3e2856c83acb79fba34f.png"
          />
          <img
            className={`${styles['equal-division-item']} ${styles['ml-47']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9a8f0999b5f7fb7556db53ece297cd1e.png"
          />
          <img
            className={`${styles['equal-division-item_3']} ${styles['ml-47']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=290519311ed4a724f16dddc9ca2f8dfe.png"
          />
          <img
            className={`${styles['equal-division-item_4']} ${styles['ml-47']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f65f7d51325afa47cd073af5e08740dd.png"
          />
        </div>
      </div>
    </div>
  );
}

Page_07_E_Favorite_Services_21_16690.defaultProps = { className: '' };