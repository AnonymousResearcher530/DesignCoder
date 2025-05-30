import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Childrens_Staff_List_23_12584(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null, null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center self-stretch ${styles['group']}`}>
        <img
          className={`${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=51f143acf76377029b7a470b210068fd.png"
        />
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e081b05a97d26ed8113b8b8550c6ffee.png"
        />
      </div>
      <div className={`flex-row justify-between items-center self-stretch ${styles['group_2']} ${styles['mt-23']}`}>
        <div className={`flex-row items-center`}>
          <img
            className={`${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=13384ed30985f264035597a5de095e4d.png"
          />
          <img
            className={`${styles['image_4']} ${styles['ml-11']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c1f98c41a2554331c7e97eacc85a61f8.png"
          />
        </div>
        <img
          className={`${styles['image_5']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b0f72e1c211533ec61c244bdea4c8251.png"
        />
      </div>
      <span className={`self-start ${styles['font']} ${styles['text']} ${styles['mt-23']}`}>
        Staff available for Lucas Wilson
      </span>
      <div className={`flex-col self-stretch ${styles['mt-23']}`}>
        {data.items.map((item, index) => (
          <div className={`flex-row justify-between items-center ${styles['list-item']}`} key={index}>
            <div className={`flex-row items-center`}>
              <img
                className={`${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c842a72c75b34029a5346a544532e4e9.png"
              />
              <div className={`flex-col items-start ${styles['ml-13']}`}>
                <span className={`${styles['font_2']}`}>Henry Itondo</span>
                <span className={`mt-6 ${styles['font']} ${styles['text_2']}`}>Math Teacher</span>
              </div>
            </div>
            <img
              className={`${styles['image_7']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=64f5f00aecf15df8b76eea5de78ae848.png"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

Childrens_Staff_List_23_12584.defaultProps = { className: '' };