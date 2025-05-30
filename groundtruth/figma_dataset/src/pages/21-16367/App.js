import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Frame_21_16367(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start ${styles['section']}`}>
        <div className={`flex-col ${styles['section_2']}`}>
          <div className={`flex-row justify-center items-center self-stretch relative`}>
            <img
              className={`${styles['image']} ${styles['pos']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=248d2b7bedb9b973e424151c0f038940.png"
            />
            <span className={`${styles['text']} ${styles['text_2']}`}>Specialties</span>
          </div>
          <span className={`self-center ${styles['font']} ${styles['text']} ${styles['text_3']} ${styles['mt-23']}`}>
            Find Your Doctor
          </span>
          <div className={`flex-row items-center self-stretch ${styles['section_3']} ${styles['mt-23']}`}>
            <img
              className={`${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5108db2976e5877ee51241e68a65f92b.png"
            />
            <span className={`${styles['font']} ${styles['text_4']} ${styles['ml-11']}`}>Search...</span>
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['group']} ${styles['mt-23']}`}>
        <div className={`flex-row justify-between items-center ${styles['group_2']}`}>
          <div className={`flex-row items-center`}>
            <span className={`${styles['text']} ${styles['text_5']}`}>Sort by</span>
            <div className={`flex-col justify-start shrink-0 ${styles['text-wrapper']} ml-4`}>
              <span className={`${styles['font_2']} ${styles['text_6']}`}>A→Z </span>
            </div>
            <div className={`flex-col justify-start items-center shrink-0 ${styles['text-wrapper_2']} ml-4`}>
              <span className={`${styles['font_2']} ${styles['text_7']}`}>Filter </span>
            </div>
          </div>
          <span className={`${styles['font_2']} ${styles['text']} ${styles['text_8']}`}>Doctors</span>
        </div>
        <div className={`${styles['grid']} ${styles['mt-7']}`}>
          <div className={`flex-col items-center ${styles['grid-item_1']}`}>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=52a8a26683dd57c4330d03697c0152f8.png"
            />
            <span className={`${styles['font_3']} ${styles['text']} mt-14`}>Cardiology</span>
          </div>
          <div className={`flex-col items-center ${styles['grid-item_1']}`}>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=29331315ee467712a3e62c3f717b64b9.png"
            />
            <span className={`${styles['font_3']} ${styles['text']} mt-14`}>Dermatology</span>
          </div>
          <div className={`flex-col ${styles['grid-item_2']}`}>
            <img
              className={`self-center ${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4ea1d5358e99c98c6f1e9f5bcd4b5601.png"
            />
            <span className={`self-end ${styles['font_3']} ${styles['text_9']} mt-12`}>General medicine</span>
          </div>
          <div className={`flex-col items-center ${styles['grid-item_3']}`}>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e8d346a2354c13c28707e30e14dd318e.png"
            />
            <span className={`${styles['font_3']} ${styles['text']} ${styles['text_10']} mt-22`}>Gynecology</span>
          </div>
          <div className={`flex-col items-center ${styles['grid-item_4']}`}>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=028aa46a8910daa7cb57277812b8e8c0.png"
            />
            <span className={`${styles['font_3']} ${styles['text']} ${styles['mt-19']}`}>Odontology</span>
          </div>
          <div className={`flex-col items-center ${styles['grid-item_4']}`}>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b4a66de466dad9e9b17a128fc917ac8e.png"
            />
            <span className={`${styles['font_3']} ${styles['text']} ${styles['mt-19']}`}>Oncology</span>
          </div>
          <div className={`flex-col items-center ${styles['grid-item']}`}>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=500114a23972d1614d9ebbf39a590de0.png"
            />
            <span className={`${styles['font_3']} ${styles['text']} mt-14`}>Ophtamology</span>
          </div>
          <div className={`flex-col items-center ${styles['grid-item_6']}`}>
            <img
              className={`${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c066e0d119cff14ad5bb6a3748a475f4.png"
            />
            <span className={`${styles['font_3']} ${styles['text']} ${styles['text_11']} mt-14`}>Orthopedics</span>
          </div>
        </div>
      </div>
      <div className={`flex-col justify-start items-center ${styles['section_4']} ${styles['mt-23']}`}>
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

Frame_21_16367.defaultProps = { className: '' };