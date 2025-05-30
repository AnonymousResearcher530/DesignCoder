import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Page_13_B_Pharmacy_Filter_21_17464(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start ${styles['section']}`}>
        <div className={`flex-row justify-between ${styles['section_2']}`}>
          <div className={`flex-row self-center`}>
            <img
              className={`shrink-0 ${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=248d2b7bedb9b973e424151c0f038940.png"
            />
            <span className={`${styles['text']} ${styles['text_2']} ml-18`}>Filter</span>
          </div>
          <span className={`self-start ${styles['font']} ${styles['text_3']}`}>Clear all</span>
        </div>
      </div>
      <div className={`flex-col relative ${styles['group_1']}`}>
        <span className={`self-center ${styles['font_2']} ${styles['text_4']}`}>Find your nearest pharmacy</span>
        <div className={`flex-col self-stretch ${styles['group_9']}`}>
          <span className={`self-start ${styles['font_2']} ${styles['text']} ${styles['text_5']}`}>
            + Add your City
          </span>
          <div className={`flex-row justify-between items-center self-stretch ${styles['section_3']}`}>
            <span className={`${styles['font']} ${styles['text']} ${styles['text_6']}`}>Oakland, CA</span>
            <img
              className={`${styles['image_2']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=00cb772ebb476941afc98be7313bede1.png"
            />
          </div>
          <span className={`self-start ${styles['text']} ${styles['text_7']}`}>Address</span>
          <div className={`flex-col self-stretch ${styles['group_2']}`}>
            <div className={`flex-row justify-between items-center ${styles['section_4']}`}>
              <span className={`${styles['font']} ${styles['text']} ${styles['text_8']}`}>778 Locust View Drive</span>
              <img
                className={`${styles['image_2']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=00cb772ebb476941afc98be7313bede1.png"
              />
            </div>
            <div className={`flex-col ${styles['section_5']} ${styles['mt-15']}`}>
              <div className={`flex-row justify-between items-start`}>
                <img
                  className={`${styles['image_3']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6b2ba5274beb844202c94bced10535b2.png"
                />
                <img
                  className={`${styles['image_3']} ${styles['image_4']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6b2ba5274beb844202c94bced10535b2.png"
                />
              </div>
              <div className={`flex-row justify-center relative`}>
                <img
                  className={`${styles['image_3']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6b2ba5274beb844202c94bced10535b2.png"
                />
                <img
                  className={`self-start ${styles['image_5']} ${styles['pos']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=92f10e604870ac4a4bac8a1d6a214ebe.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`self-stretch ${styles['list-divider-top']} ${styles['section_10']}`}></div>
        <div className={`self-stretch ${styles['list-divider-top']} ${styles['section_1']}`}></div>
        <div className={`self-stretch ${styles['list-divider-top']} ${styles['section_7']}`}></div>
        <div className={`flex-col ${styles['pos_1']}`}>
          <div className={`flex-col ${styles['group_3']}`}>
            <div className={`flex-row`}>
              <img
                className={`${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2d629e1dae6c7639bd0002542510f766.png"
              />
              <span className={`${styles['font_2']} ${styles['text']} ${styles['text_1']} ml-6`}>
                MediCure Pharmacy
              </span>
            </div>
            <div className={`flex-col items-start mt-10`}>
              <span className={`${styles['font_3']} ${styles['text']}`}>
                Address: 778 Locust View Drive Oakland, CA
              </span>
              <span className={`${styles['font_3']} ${styles['text']}`}>attention schedule: 7:15 aM - 6:30 pM</span>
            </div>
            <div className={`flex-row justify-between items-end mt-10`}>
              <div className={`flex-row items-center`}>
                <span className={`${styles['font_4']} ${styles['text_10']}`}>Recommended</span>
                <img
                  className={`shrink-0 ${styles['image_7']} ${styles['ml-17']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5cc297b2beecc3a2664299e1e5fbb3e5.png"
                />
              </div>
              <div className={`flex-col justify-start ${styles['text-wrapper']}`}>
                <span className={`${styles['font_5']} ${styles['text']} ${styles['text_11']}`}>distance: 2.5 km</span>
              </div>
            </div>
          </div>
          <div className={`flex-col ${styles['group_4']}`}>
            <div className={`flex-row`}>
              <img
                className={`${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2d629e1dae6c7639bd0002542510f766.png"
              />
              <span className={`${styles['font_2']} ${styles['text']} ${styles['text_9']} ${styles['ml-5']}`}>
                Vitality Pharmacy
              </span>
            </div>
            <div className={`flex-col items-start mt-10`}>
              <span className={`${styles['font_3']} ${styles['text']}`}>
                Address: 778 Locust View Drive Oakland, CA
              </span>
              <span className={`${styles['font_3']} ${styles['text']}`}>attention schedule: 9:00 aM - 8:30 pM</span>
            </div>
            <div className={`flex-row justify-between mt-10`}>
              <div className={`flex-row items-center self-start ${styles['group_5']}`}>
                <span className={`${styles['font_4']} ${styles['text_10']}`}>recommended</span>
                <img
                  className={`shrink-0 ${styles['image_7']} ${styles['ml-17']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5cc297b2beecc3a2664299e1e5fbb3e5.png"
                />
              </div>
              <div className={`flex-col justify-start items-center self-center ${styles['text-wrapper_2']}`}>
                <span className={`${styles['font_5']} ${styles['text']} ${styles['text_12']}`}>distance: 5 km</span>
              </div>
            </div>
          </div>
          <div className={`flex-col ${styles['group_6']}`}>
            <div className={`flex-row self-stretch ${styles['group_7']}`}>
              <img
                className={`${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2d629e1dae6c7639bd0002542510f766.png"
              />
              <span className={`${styles['font_2']} ${styles['text']} ${styles['text_17']} ml-6`}>
                PureHealth Pharmacy
              </span>
            </div>
            <span className={`self-start ${styles['font_3']} ${styles['text']} ${styles['text_13']} ${styles['mt-9']}`}>
              Address: 778 Locust View Drive Oakland, CA
            </span>
          </div>
        </div>
      </div>
      <div className={`flex-col justify-start items-start relative ${styles['group_8']}`}>
        <span className={`${styles['font_3']} ${styles['text']} ${styles['text_14']}`}>
          attention schedule: 9:00 aM - 8:30 pM
        </span>
        <div className={`flex-col justify-start items-center ${styles['section_6']} ${styles['pos_2']}`}>
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
    </div>
  );
}

Page_13_B_Pharmacy_Filter_21_17464.defaultProps = { className: '' };