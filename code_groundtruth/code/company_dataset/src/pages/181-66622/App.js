import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Androidqingdanhuichang__shouping(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <img
        className={`shrink-0 ${styles['image']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=daaf1a4cea6a7dc6fb2f7fb1e553ed41.png"
      />
      <div className={`flex-row justify-between items-center relative ${styles['section']}`}>
        <div className={`flex-row items-center`}>
          <img
            className={`${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f9d92c238b4764d45d502d9b3edc2669.png"
          />
          <img
            className={`${styles['image_2']} ${styles['ml-36-5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=67cd8cd0ef8e220620b69c3ad5af68a8.png"
          />
        </div>
        <div className={`flex-row items-center`}>
          <img
            className={`${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c9623af83fc2370d280200bed4bdbcc9.png"
          />
          <img
            className={`${styles['image_5']} ${styles['ml-30-5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=636b7d92ee2a501b2ec06ae564755f62.png"
          />
          <img
            className={`${styles['image_6']} ${styles['ml-30-5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c36b67130b690f7ec5b6daba3d1e472d.png"
          />
        </div>
      </div>
      <div className={`flex-row ${styles['section_2']}`}>
        <span className={`self-start ${styles['font']} ${styles['text']}`}>10.28</span>
        <div className={`flex-col shrink-0 relative ${styles['group']}`}>
          <div className={`flex-col justify-start items-center self-stretch ${styles['text-wrapper']}`}>
            <span className={`${styles['font']} ${styles['text_2']}`}>10.29</span>
          </div>
          <div className={`shrink-0 self-start ${styles['divider']}`}></div>
          <img
            className={`shrink-0 ${styles['image_7']} ${styles['pos']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=713333c68f4fb24042739f69e8867811.png"
          />
        </div>
        <span className={`self-start ${styles['font']} ${styles['text_3']}`}>10.30</span>
        <span className={`self-start ${styles['font']} ${styles['text_4']}`}>11.01</span>
      </div>
      <div className={`flex-col justify-start items-center relative ${styles['section_3']}`}>
        <img
          className={`shrink-0 ${styles['image_14']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=975111255788cb52700973ce401a6652.png"
        />
        <div className={`flex-col items-end ${styles['section_4']} ${styles['pos_3']}`}>
          <img
            className={`shrink-0 ${styles['image_9']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d3e4fed5b0b69d5f3dba0f62c6b28b5b.png"
          />
          <img
            className={`shrink-0 ${styles['image_15']} ${styles['mt-122-5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=12f4b4b376339bdc9cadb5d2836b4b6f.png"
          />
        </div>
        <img
          className={`shrink-0 ${styles['image_8']} ${styles['pos_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=494bc56efb279bc7985c1a2ae1d8db85.png"
        />
        <img
          className={`shrink-0 ${styles['image_12']} ${styles['pos_7']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7c06f5ae2bb7a1563d458ad599706d0d.png"
        />
        <img
          className={`shrink-0 ${styles['image_13']} ${styles['pos_8']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=dbb537ecab4f79018752ea1670fd05e0.png"
        />
        <div className={`flex-col ${styles['section_5']} ${styles['pos_6']}`}>
          <div className={`self-start ${styles['section_6']}`}></div>
          <span className={`self-end ${styles['text_5']} ${styles['mt-39']}`}>Today’s theme</span>
        </div>
        <img
          className={`shrink-0 ${styles['image_10']} ${styles['pos_4']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0b1ab2d815098b6887a9aa933cc80910.png"
        />
        <img
          className={`shrink-0 ${styles['image_11']} ${styles['pos_5']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=3af9f204fac4b10b77389a86dea70c06.png"
        />
        <img
          className={`shrink-0 ${styles['image_16']} ${styles['pos_12']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1439807cf16918547e9e3582987fdda8.png"
        />
        <span className={`${styles['text_6']} ${styles['pos_11']}`}>GO RETRO</span>
        <span className={`${styles['font_2']} ${styles['pos_9']}`}>CREATE A LIST AND </span>
        <span className={`${styles['font_2']} ${styles['pos_10']}`}>WIN A US $50 COUPON</span>
        <div className={`flex-row items-center ${styles['section_7']} ${styles['pos_13']}`}>
          <img
            className={`shrink-0 ${styles['image_17']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fd5c31ff4d0cd609efd0e442efe87fac.png"
          />
          <span className={`flex-1 ${styles['font_2']} ${styles['text_7']} ${styles['ml-8-5']}`}>
            What's your favorite decade? Check out these blasts from the past and show us your vintage style.
          </span>
        </div>
      </div>
      <div className={`flex-col justify-start relative ${styles['group_2']}`}>
        <div className={`flex-col relative ${styles['section_8']}`}>
          <div className={`flex-row justify-between self-stretch ${styles['group_3']}`}>
            <span className={`${styles['font_3']} ${styles['text_8']}`}>FEATURED LISTS </span>
            <span className={`${styles['font_3']} ${styles['text_9']}`}>FAN LISTS</span>
          </div>
          <div className={`shrink-0 self-start ${styles['section_9']}`}></div>
        </div>
        <div className={`flex-col justify-start items-center ${styles['image-wrapper']} ${styles['pos_14']}`}>
          <img
            className={`${styles['image_18']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5f13e4737f9d18de2808bd5fbe7775e4.png"
          />
        </div>
      </div>
      <div className={`flex-row ${styles['equal-division']} ${styles['section_10']}`}>
        <div className={`flex-col items-center ${styles['equal-division-item']}`}>
          <img
            className={`${styles['image_19']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d0599917aeb6a9bdfcc3f3f5a222e51d.png"
          />
          <span className={`mt-6 ${styles['font_4']}`}>Sale Home</span>
        </div>
        <div className={`flex-col items-center ${styles['group_4']} ${styles['equal-division-item']}`}>
          <img
            className={`${styles['image_19']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=607de016956c9ed85d11ceb69d0da7b2.png"
          />
          <span className={`mt-6 ${styles['font_4']}`}>Explore</span>
        </div>
        <div className={`flex-col items-center ${styles['group_4']} ${styles['equal-division-item']}`}>
          <img
            className={`${styles['image_19']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1c31be8af933967107f1fe31b7f77956.png"
          />
          <span className={`mt-6 ${styles['font_4']} ${styles['text_10']}`}>Fan Lists</span>
        </div>
        <div className={`flex-col items-center ${styles['group_4']} ${styles['equal-division-item']}`}>
          <img
            className={`${styles['image_19']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=813f8aa3e85e55cddade60114ef1dae8.png"
          />
          <span className={`mt-6 ${styles['font_4']}`}>My 11.11</span>
        </div>
      </div>
    </div>
  );
}

Androidqingdanhuichang__shouping.defaultProps = { className: '' };