import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function User_profile_173_1741(props) {
  const history = useHistory();

  const [data, setData] = useState({
    items: [null, null, null],
  });

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col relative ${styles['section']}`}>
        <div className={`flex-col justify-start items-start self-center ${styles['group']}`}>
          <div className={`flex-col justify-start items-center relative ${styles['image-wrapper']}`}>
            <img
              className={`shrink-0 ${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7f4fb31a0d2c1396ec815e61e578e3a3.png"
            />
          </div>
        </div>
        <img
          className={`shrink-0 self-start ${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=22efa352c2331ff3c2108c51f21a4635.png"
        />
        <img
          className={`shrink-0 ${styles['image']} ${styles['pos']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=78ee60967cec4d50af2844088ac0fba2.png"
        />
      </div>
      <div className={`flex-col relative ${styles['section_2']}`}>
        <div className={`flex-col`}>
          {data.items.map((item, index) => (
            <div
              className={`flex-col justify-start items-start relative ${styles['group_9']} ${styles['list-item']} ${styles['mt-31']}`}
              key={index}
            >
              <span className={`${styles['font_2']} ${styles['text_2']}`}>Sophia Patel</span>
              <img
                className={`${styles['image_4']} ${styles['pos_5']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9cac08ff2d6b9a7705d05247c4eb549c.png"
              />
              <span className={`${styles['font']} ${styles['text']} ${styles['pos_4']}`}>Name</span>
            </div>
          ))}
        </div>
        <div className={`${styles['section_5']}`}></div>
        <div className={`flex-col ${styles['group_3']}`}>
          <div className={`flex-row justify-between items-center`}>
            <span className={`${styles['font_3']}`}>Payment Details</span>
            <img
              className={`${styles['image_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=aac99116db35279a9145ae823e71d353.png"
            />
          </div>
          <div className={`flex-row justify-between items-center mt-30`}>
            <span className={`${styles['font_3']}`}>Order history</span>
            <img
              className={`${styles['image_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=aac99116db35279a9145ae823e71d353.png"
            />
          </div>
        </div>
        <div className={`flex-row justify-center ${styles['group_4']}`}>
          <div className={`flex-row justify-center items-center ${styles['section_6']}`}>
            <span className={`${styles['font_3']} ${styles['text_6']}`}>Edit Profile</span>
            <img
              className={`${styles['image_7']} ${styles['ml-15']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ae8a5afda9a4bccd77e23672e4c67ee4.png"
            />
          </div>
          <div className={`flex-row justify-center items-center ${styles['group_5']}`}>
            <span className={`${styles['font_3']} ${styles['text_7']}`}>Log out</span>
            <img
              className={`${styles['image_7']} ml-14`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=423bcfbfe6dac099e33a187c9347b214.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

User_profile_173_1741.defaultProps = { className: '' };