import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Light_Dashboard_2_22_6336(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center ${styles['group']}`}>
        <div className={`flex-row items-center`}>
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e170478c1c27dc9b43b928af37ce0cd0.png"
          />
          <div className={`flex-col items-center ml-18`}>
            <span className={`${styles['text']}`}>Exploring yourself</span>
            <span className={`${styles['text_2']} mt-8`}>Elina Krohnke</span>
          </div>
        </div>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f9ae4aafdc89d096d60c266adca0768b.png"
          />
        </div>
      </div>
      <div className={`flex-col ${styles['group_2']}`}>
        <div className={`flex-row justify-end items-center ${styles['group_1']}`}>
          <img
            className={`${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f603556e57ae13f60d95d07d09ff7aae.png"
          />
          <span className={`${styles['font']} ${styles['text_3']}`}>Recommended wellness Program</span>
        </div>
        <div className={`flex-col justify-start relative ${styles['section_2']} mt-20`}>
          <div className={`shrink-0 relative ${styles['section_3']}`}></div>
          <img
            className={`shrink-0 ${styles['image_4']} ${styles['pos_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=69a50fa3905c7a6f2c2c6546d7131d7d.png"
          />
          <div className={`shrink-0 ${styles['section']} ${styles['pos']}`}></div>
          <div className={`${styles['group_3']} ${styles['pos_2']}`}>
            <span className={`${styles['text_4']}`}>
              Herbal Dietary <br />
            </span>
            <span className={`${styles['font']} ${styles['text_5']}`}>Supplements</span>
          </div>
          <img
            className={`shrink-0 ${styles['image_5']} ${styles['pos_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=adc592dbab2cde4ac9763c205de58e6e.png"
          />
          <div className={`shrink-0 ${styles['section_5']} ${styles['pos_6']}`}></div>
          <div className={`flex-row justify-evenly items-center ${styles['section_4']} ${styles['pos_5']}`}>
            <span className={`${styles['text_6']}`}>View More</span>
            <img
              className={`${styles['image_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0f96a501645082f64e1090a0aac97b70.png"
            />
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['group_5']}`}>
        <div className={`flex-row justify-between items-baseline ${styles['group_4']}`}>
          <span className={`${styles['font']} ${styles['text_7']}`}>Recommended Videos</span>
          <span className={`${styles['font_2']} ${styles['text_8']}`}>view all</span>
        </div>
        <div className={`flex-col ${styles['mt-25']}`}>
          <div className={`flex-row items-start`}>
            <div className={`flex-col ${styles['group_7']}`}>
              <div className={`flex-col justify-start items-end relative ${styles['section_7']}`}>
                <img
                  className={`shrink-0 ${styles['image_14']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a27f79566d6cb255b58fba2c916ecc8c.png"
                />
                <img
                  className={`shrink-0 ${styles['image_8']} ${styles['pos_8']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8fd57e9e5262dd8a3c775f1a32373f1e.png"
                />
                <img
                  className={`shrink-0 ${styles['image_10']} ${styles['pos_10']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4a163310e80950761c39a086734e00f6.png"
                />
                <img
                  className={`shrink-0 ${styles['image_9']} ${styles['pos_9']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0b1f99db9a7022b3d1da707056e8ab9f.png"
                />
                <img
                  className={`shrink-0 ${styles['image_11']} ${styles['pos_11']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e311e01fbdf018001e065cb930d2fb77.png"
                />
                <img
                  className={`shrink-0 ${styles['image_12']} ${styles['pos_12']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=84150462892f39fb3d9fe343c519dca5.png"
                />
                <img
                  className={`shrink-0 ${styles['image_13']} ${styles['pos_13']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=81cd114ba7a686ecb9a93471de67275e.png"
                />
                <img
                  className={`shrink-0 ${styles['image_7']} ${styles['pos_7']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0644040fede9a21eacac65525d9d19ad.png"
                />
                <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']} ${styles['pos_15']}`}>
                  <span className={`${styles['font_3']}`}>10 mins</span>
                </div>
                <div className={`shrink-0 ${styles['section_8']} ${styles['pos_14']}`}></div>
              </div>
              <span className={`${styles['font_4']} ${styles['text_11']} ${styles['mt-9']}`}>Mindpeace meditation</span>
            </div>
            <div className={`flex-col ${styles['group_6']} ${styles['ml-35']}`}>
              <div className={`flex-col justify-start items-end self-stretch ${styles['section_6']}`}>
                <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
                  <span className={`${styles['font_3']}`}>12 mins</span>
                </div>
              </div>
              <span className={`self-stretch ${styles['font_4']} ${styles['text_9']} mt-8`}>Mindpeace meditation</span>
              <span className={`self-start ${styles['font_2']} ${styles['text_10']} mt-8`}>with Karl</span>
            </div>
          </div>
          <div className={`flex-row justify-between ${styles['group_8']} ${styles['mt-7']}`}>
            <span className={`self-start ${styles['font_2']}`}>with Karl</span>
            <img
              className={`self-center ${styles['image_15']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=437748c4e009b0d2ecfdcff3118fa43d.png"
            />
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['section_9']}`}>
        <div className={`flex-row justify-between items-start ${styles['equal-division']}`}>
          <img
            className={`${styles['image_16']} ${styles['image_1']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=029f4509225b1346969edb6c4fc478d8.png"
          />
          <img
            className={`${styles['equal-division-item']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b32e8abbbf516272c1b4c5879440daf7.png"
          />
          <img
            className={`${styles['image_16']} ${styles['image_17']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ed96eb1cfd78faa60b7b00f5a6c16cef.png"
          />
          <img
            className={`${styles['equal-division-item_3']} ${styles['image_18']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d5e682d119472f57e2bf2b847fcc8cad.png"
          />
        </div>
        <span className={`self-start ${styles['text_12']}`}>Explore</span>
      </div>
    </div>
  );
}

Light_Dashboard_2_22_6336.defaultProps = { className: '' };