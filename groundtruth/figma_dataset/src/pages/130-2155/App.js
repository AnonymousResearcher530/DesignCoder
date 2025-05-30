import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Detail_page_130_2155(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center ${styles['group_1']}`}>
        <img
          className={`${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=dca99470a5d23779fb3cbe32e21c88c1.png"
        />
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=865b2a4bcc9f25a33179024c3bbca31b.png"
        />
      </div>
      <div className={`flex-col relative ${styles['group_2']}`}>
        <div className={`flex-col justify-start items-center self-end ${styles['group']}`}>
          <img
            className={`${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ea96fba227fc3a303e0e439226cd1d42.png"
          />
        </div>
        <div className={`flex-row justify-between items-center self-stretch ${styles['group_6']}`}>
          <span className={`${styles['text']}`}>Room Sofa</span>
          <div className={`flex-row items-center ${styles['section']}`}>
            <div className={`${styles['section_2']}`}></div>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper']} ${styles['ml-15']}`}>
              <span className={`${styles['text_2']}`}>1</span>
            </div>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper']} ${styles['ml-15']}`}>
              <img
                className={`${styles['image_4']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a59b8a650e7973ea8957753a04d38931.png"
              />
            </div>
          </div>
        </div>
        <img
          className={`self-start ${styles['image_5']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ca74cdf8c726114b1cd61660d38474fd.png"
        />
        <span className={`self-stretch ${styles['text_3']}`}>
          Drawing Room Wooden Sofa Set is solid wooden sofa set which you can contrast the cushion of any color. The
          good sight caused ue to the furniture help us relax for a longer time.{' '}
        </span>
        <div className={`flex-row justify-between items-center self-stretch ${styles['group_3']}`}>
          <span className={`${styles['text_4']}`}>¥2500</span>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']}`}>
            <span className={`${styles['text_5']}`}>Add to cart </span>
          </div>
        </div>
      </div>
      <div className={`flex-col justify-start items-center relative ${styles['group_4']}`}>
        <div className={`flex-col justify-start items-center relative ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d2606cf25a68a529557df7243bc20abb.png"
          />
        </div>
        <img
          className={`shrink-0 ${styles['image_6']} ${styles['pos_1']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=40294ba1c5d29f5cd5f1d475354f6abd.png"
        />
        <img
          className={`shrink-0 ${styles['image_12']} ${styles['pos_5']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6de2e55b77632ace004bf21e12b7e475.png"
        />
        <img
          className={`shrink-0 ${styles['image_8']} ${styles['pos']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d6dd81a3c20c2533c16ad1d6cd5fa367.png"
        />
        <img
          className={`shrink-0 ${styles['image_9']} ${styles['pos_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3a1b3da3d45936c130ea584e649786a9.png"
        />
        <img
          className={`shrink-0 ${styles['image_11']} ${styles['pos_4']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2fbc5ed0a258c728017da77364f832d7.png"
        />
        <img
          className={`shrink-0 ${styles['image_10']} ${styles['pos_3']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=89336c2bed02b8092ac8e1c4ead40b3e.png"
        />
      </div>
    </div>
  );
}

Detail_page_130_2155.defaultProps = { className: '' };