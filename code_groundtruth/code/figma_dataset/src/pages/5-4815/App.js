import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Distance_5_4815(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row items-center ${styles['group']}`}>
        <img
          className={`${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3a7be95558b91ab84baef7382ee6e84c.png"
        />
        <div className={`flex-col justify-start relative ${styles['group_2']} ml-32`}>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
            <span className={`${styles['text']}`}>Maria</span>
          </div>
          <img
            className={`${styles['image']} ${styles['pos']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7be6e88f68adace2fb11bf83673b50b2.png"
          />
        </div>
      </div>
      <div className={`flex-col ${styles['group_3']}`}>
        <div className={`flex-row items-center relative ${styles['section']}`}>
          <img
            className={`shrink-0 ${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8c20eab9788c60ad83c6458f77aaaa0d.png"
          />
          <div className={`flex-col flex-1 ${styles['ml-11']}`}>
            <div className={`flex-row justify-between ${styles['group_4']}`}>
              <span className={`self-start ${styles['font']} ${styles['text_2']}`}>From:</span>
              <img
                className={`self-center ${styles['image_4']} ${styles['image_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=83a823823e9f3d6d5bf60b6c08a5b16d.png"
              />
            </div>
            <div className={`flex-row justify-between ${styles['group_5']}`}>
              <span className={`self-start ${styles['font']} ${styles['text_3']}`}>To:</span>
              <img
                className={`self-center ${styles['image_4']} ${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b6b9558f7d066a0762b48ddbcd9161db.png"
              />
            </div>
          </div>
        </div>
        <div className={`flex-row items-center ${styles['group_6']}`}>
          <img
            className={`${styles['image_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ffbdbb7402fd3450a1605de7bdd2948b.png"
          />
          <span className={`${styles['font']} ${styles['text_4']} ml-4`}>Show on a map</span>
        </div>
      </div>
      <div className={`flex-col ${styles['group_1']}`}>
        <span className={`self-start ${styles['font_2']} ${styles['text_5']}`}>Recent</span>
        <div className={`flex-col self-stretch ${styles['list-item']} ${styles['group_8']}`}>
          <div className={`flex-row items-center self-stretch ${styles['section_2']}`}>
            <img
              className={`${styles['image_7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8039a43f217a93d3b910cbf56145a3dc.png"
            />
            <div className={`flex-col items-start flex-1 ${styles['group_7']} ${styles['ml-13']}`}>
              <span className={`${styles['font_3']} ${styles['text_6']}`}>Kings Cross Underground Statio...</span>
              <span className={`${styles['font_2']} ${styles['mt-5']}`}>New York</span>
            </div>
          </div>
          <img
            className={`self-end ${styles['image_8']} ${styles['mt-7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0eeffa13036b441c5d47596ac1e61c10.png"
          />
        </div>
        <div className={`flex-col self-stretch ${styles['list-item']} ${styles['group_10']}`}>
          <div className={`flex-row items-center self-stretch ${styles['section_2']}`}>
            <img
              className={`${styles['image_7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c160583e66d3ae8ca336e6fa9b581cb1.png"
            />
            <div className={`flex-col items-start ${styles['ml-13']}`}>
              <span className={`${styles['font_3']} ${styles['text_7']}`}>83, Midwood St</span>
              <span className={`${styles['font_2']} mt-6`}>New York</span>
            </div>
          </div>
          <img
            className={`self-end ${styles['image_8']} ${styles['mt-7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7300a840b41648d7adb8e2448a9370bc.png"
          />
        </div>
        <img
          className={`self-stretch ${styles['image_9']} ${styles['image_10']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c74ca43cf917b5f748828f9ab4be93aa.png"
        />
        <img
          className={`self-stretch ${styles['image_9']} ${styles['image_11']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d5c205c40c2640f4b499ea90e992677b.png"
        />
      </div>
    </div>
  );
}

Distance_5_4815.defaultProps = { className: '' };