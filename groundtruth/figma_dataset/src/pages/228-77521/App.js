import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Educhangdekuai_228_77521(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col justify-start relative ${styles['page']} ${props.className}`}>
      <div className={`${styles['section']}`}></div>
      <img
        className={`${styles['image']} ${styles['pos']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=72590903998a50fee679b9567013d2dc.png"
      />
      <div className={`flex-col justify-start items-end ${styles['section_2']} ${styles['pos_2']}`}>
        <img
          className={`${styles['image_4']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9ec766720e49550bf2d5f579454f5b41.png"
        />
        <img
          className={`${styles['image_2']} ${styles['pos_4']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=77f1dd1dafd375b357c5c5958de1c520.png"
        />
        <img
          className={`${styles['image_3']} ${styles['pos_5']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=39bb29a6709335dbdb6dc38cde6a391e.png"
        />
        <div className={`flex-col ${styles['section_3']} ${styles['pos_3']}`}>
          <img
            className={`self-end ${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=facefe2188e4a42d561222f949cd700b.png"
          />
          <div className={`flex-row justify-between self-stretch ${styles['mt-259']}`}>
            <div className={`${styles['section_5']}`}></div>
            <img
              className={`self-start ${styles['image_8']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=01f4c3732a62ab1b3da43f8d12c130eb.png"
            />
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['section_4']} ${styles['pos_6']}`}>
        <div className={`flex-col items-end ${styles['group']}`}>
          <img
            className={`shrink-0 ${styles['image_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=39015cb75418fb0e37c0a9cb1102c0e1.png"
          />
          <img
            className={`shrink-0 ${styles['image_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bd6a4b2f44487ec0a52d6ac0112d241a.png"
          />
          <img
            className={`shrink-0 ${styles['image_9']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=16bf8138a43e0533f1c2823674abbe49.png"
          />
        </div>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']} ${styles['mt-101']}`}>
          <img
            className={`${styles['image_10']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=58f824f831adc83cdf25560325b6d3de.png"
          />
        </div>
      </div>
    </div>
  );
}

Educhangdekuai_228_77521.defaultProps = { className: '' };