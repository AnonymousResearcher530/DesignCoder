import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Page_08_A_Profile_21_17308(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col justify-start ${styles['section']}`}>
        <div className={`flex-col ${styles['section_2']}`}>
          <div className={`flex-row justify-between items-center`}>
            <img
              className={`${styles['image']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=248d2b7bedb9b973e424151c0f038940.png"
            />
            <span className={`${styles['font']} ${styles['text']} ${styles['text_2']}`}>my Profile</span>
          </div>
          <div className={`flex-row justify-center items-center ${styles['mt-19']}`}>
            <div className={`flex-col justify-start items-end ${styles['image-wrapper']}`}>
              <img
                className={`${styles['image_2']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ac4d470f46a3ebae512f4430d2819de2.png"
              />
            </div>
            <div className={`ml-12 flex-col items-start`}>
              <span className={`${styles['font']} ${styles['text']} ${styles['text_3']}`}>Jane Doe</span>
              <span className={`${styles['font_2']} ${styles['text_4']}`}>+123 567 89000</span>
              <span className={`${styles['font_2']} ${styles['text_5']}`}>Janedoe@example.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`mt-26 flex-col ${styles['group']}`}>
        <div className={`flex-row justify-between items-center`}>
          <div className={`flex-row items-center`}>
            <img
              className={`shrink-0 ${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=25e32914f1c91a51ba50ce14acffaa1f.png"
            />
            <span className={`ml-22 ${styles['font_3']} ${styles['text']} ${styles['text_6']}`}>Profile</span>
          </div>
          <img
            className={`${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c0d86d04c49280bf53d489d093d6ee7c.png"
          />
        </div>
        <div className={`flex-row justify-between items-center ${styles['mt-15']}`}>
          <div className={`flex-row items-center`}>
            <img
              className={`shrink-0 ${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a722356461dd39e19a19b021ef3d5629.png"
            />
            <span className={`ml-22 ${styles['font_3']} ${styles['text']}`}>Favorite</span>
          </div>
          <img
            className={`${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c0d86d04c49280bf53d489d093d6ee7c.png"
          />
        </div>
        <div className={`flex-row justify-between items-center ${styles['mt-15']}`}>
          <div className={`flex-row items-center`}>
            <img
              className={`shrink-0 ${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b41217a6220f4e086682e95bbdc89b76.png"
            />
            <span className={`ml-22 ${styles['font_4']} ${styles['text']}`}>Payment Method</span>
          </div>
          <img
            className={`${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c0d86d04c49280bf53d489d093d6ee7c.png"
          />
        </div>
        <div className={`flex-row justify-between ${styles['mt-15']}`}>
          <div className={`flex-row items-center`}>
            <img
              className={`shrink-0 ${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=28ea694253495e9f15d0ce1b3f261267.png"
            />
            <span className={`ml-22 ${styles['font_4']} ${styles['text']}`}>Privacy Policy</span>
          </div>
          <img
            className={`self-start ${styles['image_4']} ${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c0d86d04c49280bf53d489d093d6ee7c.png"
          />
        </div>
        <div className={`flex-row justify-between ${styles['mt-15']}`}>
          <div className={`flex-row items-center`}>
            <img
              className={`shrink-0 ${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d883d1e36b0850139846ee28c6113469.png"
            />
            <span className={`${styles['font_4']} ${styles['text']} ${styles['text_7']} ${styles['ml-21']}`}>
              Settings
            </span>
          </div>
          <img
            className={`self-start ${styles['image_4']} ${styles['image_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c0d86d04c49280bf53d489d093d6ee7c.png"
          />
        </div>
        <div className={`flex-row justify-between ${styles['mt-15']}`}>
          <div className={`flex-row items-center`}>
            <img
              className={`shrink-0 ${styles['image_3']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e9463fa3d866c7c1988ef45b0d473ef7.png"
            />
            <span className={`ml-22 ${styles['font_4']} ${styles['text']}`}>Help</span>
          </div>
          <img
            className={`self-start ${styles['image_4']} ${styles['image_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c0d86d04c49280bf53d489d093d6ee7c.png"
          />
        </div>
        <div className={`flex-row items-center ${styles['mt-15']}`}>
          <img
            className={`${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=97a4a194d57ab5f33dbb910dcafcf591.png"
          />
          <span className={`ml-22 ${styles['font_4']} ${styles['text']} ${styles['text_8']}`}>Logout</span>
        </div>
      </div>
    </div>
  );
}

Page_08_A_Profile_21_17308.defaultProps = { className: '' };