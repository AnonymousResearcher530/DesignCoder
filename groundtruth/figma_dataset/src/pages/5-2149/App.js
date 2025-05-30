import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Schedule_1_5_2149(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center ${styles['group']}`}>
        <div className={`flex-col justify-start items-start relative ${styles['group_2']}`}>
          <span className={`${styles['text']}`}>24 </span>
          <span className={`${styles['font']} ${styles['text_2']} ${styles['pos']}`}>Wed</span>
          <span className={`${styles['font']} ${styles['text_4']} ${styles['pos_2']}`}>Jan 2020</span>
        </div>
        <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
          <span className={`${styles['font_2']} ${styles['text_3']}`}>Today</span>
        </div>
      </div>
      <div className={`flex-col ${styles['section']}`}>
        <div className={`flex-row items-center ${styles['group_3']}`}>
          <div className={`flex-col items-center`}>
            <span className={`${styles['font_3']} ${styles['text_5']}`}>S</span>
            <span className={`${styles['font_5']} ${styles['mt-13']}`}>21</span>
          </div>
          <div className={`flex-col items-center ${styles['group_4']}`}>
            <span className={`${styles['font_3']} ${styles['text_6']}`}>M</span>
            <span className={`${styles['font_5']} ${styles['text_8']} ${styles['mt-13']}`}>22</span>
          </div>
          <div className={`flex-col items-center ${styles['group_5']}`}>
            <span className={`${styles['font_3']}`}>T</span>
            <span className={`${styles['font_5']} ${styles['text_9']} ${styles['mt-13']}`}>23</span>
          </div>
          <div className={`flex-col items-center ${styles['section_2']}`}>
            <span className={`${styles['font_4']}`}>W</span>
            <span className={`${styles['font_5']} ${styles['text_10']} ${styles['mt-13']}`}>24</span>
          </div>
          <div className={`flex-col items-center ${styles['group_6']}`}>
            <span className={`${styles['font_3']}`}>T</span>
            <span className={`${styles['font_5']} ${styles['text_11']} ${styles['mt-13']}`}>25</span>
          </div>
          <div className={`flex-col items-center ${styles['group_7']}`}>
            <span className={`${styles['font_3']}`}>F</span>
            <span className={`${styles['font_5']} ${styles['text_12']} ${styles['mt-13']}`}>26</span>
          </div>
          <div className={`flex-col items-center ${styles['group_8']}`}>
            <span className={`${styles['font_3']} ${styles['text_7']}`}>S</span>
            <span className={`${styles['font_5']} ${styles['mt-13']}`}>27</span>
          </div>
        </div>
        <div className={`flex-col ${styles['group_9']}`}>
          <div className={`flex-row justify-between items-center`}>
            <div className={`flex-row`}>
              <span className={`${styles['font']} ${styles['text_13']}`}>Time</span>
              <span className={`ml-34 ${styles['font']}`}>Course</span>
            </div>
            <img
              className={`${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5f537e4105410f8a6430fb79377b1522.png"
            />
          </div>
          <div className={`mt-18 flex-col justify-start items-start relative`}>
            <div className={`${styles['section_3']}`}></div>
            <div className={`flex-row ${styles['pos_3']}`}>
              <div className={`flex-col items-center shrink-0 self-start ${styles['group_10']}`}>
                <span className={`${styles['font_6']} ${styles['text_14']}`}>11:35</span>
                <span className={`${styles['font']} ${styles['text_16']} ${styles['mt-15']}`}>13:05</span>
              </div>
              <div className={`flex-col flex-1 relative ${styles['section_4']} ${styles['ml-33']}`}>
                <span className={`self-start ${styles['text_15']}`}>Mathematics</span>
                <span className={`self-start ${styles['font_7']} ${styles['text_17']}`}>Chapter 1: Introduction</span>
                <div className={`flex-row items-center self-stretch ${styles['group_11']}`}>
                  <img
                    className={`${styles['image_2']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4068332683e6fe4f81d5934accf4ac50.png"
                  />
                  <span className={`${styles['font_4']} ${styles['text_18']} ${styles['ml-11']}`}>Room 6-205</span>
                </div>
                <div className={`flex-row items-center self-stretch ${styles['group_12']}`}>
                  <img
                    className={`${styles['image_3']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=903a211035a86c5a54a50f33a4010798.png"
                  />
                  <span className={`${styles['font_7']} ${styles['text_19']} ${styles['ml-11']}`}>
                    Brooklyn Williamson
                  </span>
                </div>
                <img
                  className={`${styles['image']} ${styles['pos_4']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=abfa012a1c36d83563b539235815c412.png"
                />
              </div>
            </div>
            <div className={`flex-row ${styles['pos_5']}`}>
              <div className={`flex-col items-center shrink-0 self-start ${styles['group_13']}`}>
                <span className={`${styles['font_6']} ${styles['text_20']}`}>13:15</span>
                <span className={`${styles['font']} ${styles['mt-15']}`}>14:45</span>
              </div>
              <div className={`flex-col flex-1 ${styles['section_5']} ${styles['ml-33']}`}>
                <div className={`flex-row justify-between items-center self-stretch`}>
                  <span className={`${styles['font_2']} ${styles['text_21']}`}>Biology</span>
                  <img
                    className={`${styles['image']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e67b3c6d7ec4b8c6a34ea914b9a94ad9.png"
                  />
                </div>
                <span className={`self-start ${styles['font_8']} ${styles['text_22']} ${styles['text_23']}`}>
                  Chapter 3: Animal Kingdom
                </span>
                <div className={`flex-row items-center self-stretch ${styles['group_14']}`}>
                  <img
                    className={`${styles['image_2']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9211b495bf1c5137613018da8817a752.png"
                  />
                  <span className={`${styles['font_8']} ${styles['text_24']} ${styles['ml-11']}`}>Room 2-168</span>
                </div>
                <div className={`flex-row items-center self-stretch ${styles['group_15']}`}>
                  <img
                    className={`${styles['image_3']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=404b149d3b70f79303f9eda042446901.png"
                  />
                  <span className={`${styles['font_8']} ${styles['text_25']} ${styles['ml-11']}`}>Julie Watson</span>
                </div>
              </div>
            </div>
            <div className={`flex-row ${styles['pos_6']}`}>
              <div className={`flex-col items-center shrink-0 self-start ${styles['group_16']}`}>
                <span className={`${styles['font_6']}`}>15:10</span>
                <span className={`${styles['font']} ${styles['text_26']} ${styles['mt-15']}`}>16:40</span>
              </div>
              <div className={`flex-col flex-1 ${styles['section_5']} ${styles['ml-33']}`}>
                <div className={`flex-row justify-between items-center self-stretch`}>
                  <span className={`${styles['font_2']}`}>Geography</span>
                  <img
                    className={`${styles['image']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e67b3c6d7ec4b8c6a34ea914b9a94ad9.png"
                  />
                </div>
                <span className={`self-start ${styles['font_9']} ${styles['text_22']} ${styles['text_27']}`}>
                  Chapter 2: Economy USA
                </span>
                <div className={`flex-row items-center self-stretch ${styles['group_14']}`}>
                  <img
                    className={`${styles['image_2']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9211b495bf1c5137613018da8817a752.png"
                  />
                  <span className={`${styles['font_8']} ${styles['text_28']} ${styles['ml-11']}`}>Room 1-403</span>
                </div>
                <div className={`flex-row items-center self-stretch ${styles['group_15']}`}>
                  <img
                    className={`${styles['image_3']}`}
                    src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b3365d93e9fc56f0e558f7b78161eb58.png"
                  />
                  <span className={`${styles['font_9']} ${styles['text_29']} ${styles['ml-11']}`}>Jenny Alexander</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['group_17']}`}>
        <div className={`flex-row justify-between ${styles['equal-division']}`}>
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=51235191ae761f188777351cba45bfca.png"
          />
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5b86103fa9708f57478b16f4f280422d.png"
          />
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=73ffecad05eeeeecd9df90c7fc8f7d8b.png"
          />
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2975b5f2a6c4a472c6c9319f7f9ae29c.png"
          />
        </div>
        <div className={`mt-4 self-start ${styles['section_6']}`}></div>
      </div>
    </div>
  );
}

Schedule_1_5_2149.defaultProps = { className: '' };