import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Onboarding_1_5_3258(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <span className={`self-end ${styles['font']} ${styles['text']}`}>Skip</span>
      <div className={`flex-row self-stretch relative ${styles['group']}`}>
        <div className={`flex-col ${styles['section']} ${styles['pos']}`}>
          <img
            className={`self-start ${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6c79224f9d3d9edccbfd1ed85d4140b8.png"
          />
          <div className={`mt-44 flex-row justify-end items-end self-stretch`}>
            <img
              className={`${styles['image_6']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4f86c196853dc6dc24b0ef7af182ece2.png"
            />
            <img
              className={`ml-10 ${styles['image_9']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8c54eb8e6cf90ad8071bf94e3ef0e9cc.png"
            />
          </div>
        </div>
        <img
          className={`shrink-0 ${styles['image_2']} ${styles['pos_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e1db80413d00094c44b6740a8fda18ac.png"
        />
        <img
          className={`shrink-0 ${styles['image_8']} ${styles['pos_7']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=bf6a1e817a594fc3ac6f57ed949d352c.png"
        />
        <img
          className={`shrink-0 ${styles['image_21']} ${styles['pos_24']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=708fe09988de80591803c176858da336.png"
        />
        <img
          className={`shrink-0 ${styles['image_22']} ${styles['pos_25']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5c0060b2deaddd6ad5da73f00578586e.png"
        />
        <img
          className={`shrink-0 ${styles['image_5']} ${styles['pos_5']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=024dcf472861de6a2c51674f7d71f83f.png"
        />
        <img
          className={`shrink-0 ${styles['image_3']} ${styles['pos_3']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a5399550243b9a7a9eca9881a3d2366e.png"
        />
        <img
          className={`shrink-0 ${styles['image_4']} ${styles['pos_4']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=de33650c494ea7731f223d3594707936.png"
        />
        <div className={`shrink-0 ${styles['divider']} ${styles['pos_26']}`}></div>
        <div className={`flex-col ${styles['section_3']} ${styles['pos_15']}`}>
          <img
            className={`self-start ${styles['image_17']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1e01bd8ca48cea49e74c0f97a522fdb8.png"
          />
          <div
            className={`flex-row justify-center items-center self-stretch relative ${styles['group_2']} ${styles['mt-3']}`}
          >
            <img
              className={`${styles['image_21']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=93a07edb689ab06373c0b2dd8051bb5a.png"
            />
            <img
              className={`${styles['image_23']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=e41c5a6bc4bda5f8cc96b63a7a2f01a2.png"
            />
            <img
              className={`${styles['image_18']} ${styles['pos_19']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2e146453ef85c83e4d2cdf0b5c80cf6b.png"
            />
          </div>
        </div>
        <img
          className={`shrink-0 ${styles['image_11']} ${styles['pos_9']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7dac8d5f6b3750ff43a0a128392da0c5.png"
        />
        <img
          className={`shrink-0 ${styles['image_15']} ${styles['pos_16']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c505a3c75b311fbefcc0a173240308b2.png"
        />
        <img
          className={`shrink-0 ${styles['image_7']} ${styles['pos_6']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f576d911a4bb877b14b00541d00665f3.png"
        />
        <img
          className={`shrink-0 ${styles['image_12']} ${styles['pos_10']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3a2bd741eebd3e3e1228f431f0ac0f8b.png"
        />
        <img
          className={`shrink-0 ${styles['image_14']} ${styles['pos_14']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6b9b4ed308047893481fd7b1cb873377.png"
        />
        <img
          className={`shrink-0 ${styles['image_13']} ${styles['pos_11']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1d1194173170b886bbf0512ffe0bb74d.png"
        />
        <img
          className={`shrink-0 ${styles['image_16']} ${styles['pos_17']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5e128e80bf5d775dcd67292f89e2799d.png"
        />
        <img
          className={`shrink-0 ${styles['image_20']} ${styles['pos_23']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b990eb33256a0f43d79bc6d490c2e7ba.png"
        />
        <img
          className={`shrink-0 ${styles['image_19']} ${styles['pos_22']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c2f28d9650ad99cb149df88b0df5b536.png"
        />
        <img
          className={`shrink-0 ${styles['image_10']} ${styles['pos_8']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c263117fdb2c0d393a648226efc1a571.png"
        />
        <div className={`shrink-0 ${styles['section_5']} ${styles['pos_20']}`}></div>
        <div className={`shrink-0 ${styles['section_5']} ${styles['pos_21']}`}></div>
        <div className={`shrink-0 ${styles['section_2']} ${styles['pos_13']}`}></div>
        <img
          className={`shrink-0 ${styles['image_13']} ${styles['pos_12']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3a3084db92169c6f352ebfc651f29bb8.png"
        />
        <div className={`shrink-0 ${styles['section_4']} ${styles['pos_18']}`}></div>
      </div>
      <img
        className={`self-center ${styles['image_24']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ed7d07136a9c11371728bfae52be2637.png"
      />
      <div className={`flex-col self-center ${styles['group_3']}`}>
        <span className={`self-center ${styles['text_2']}`}>Welcome to DWD</span>
        <span className={`self-stretch ${styles['font']} ${styles['text_3']} ${styles['mt-29']}`}>
          Welcome as you learn a world changing skill to get a better job.
        </span>
      </div>
      <div className={`flex-col justify-start items-center self-end ${styles['text-wrapper']}`}>
        <span className={`${styles['text_4']}`}>Next</span>
      </div>
    </div>
  );
}

Onboarding_1_5_3258.defaultProps = { className: '' };