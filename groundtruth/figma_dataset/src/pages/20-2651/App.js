import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Listener_pop_up_20_2651(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col justify-start relative ${styles['page']} ${props.className}`}>
      <div className={`flex-col`}>
        <div className={`flex-row items-center ${styles['group']}`}>
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a17a43c0790206e3eecde1817066e0ec.png"
          />
          <span className={`ml-10 ${styles['font']} ${styles['text']}`}>Spaces</span>
        </div>
        <div className={`flex-col items-start ${styles['group_2']} ${styles['mt-23']}`}>
          <span className={`${styles['font_2']} ${styles['text_2']}`}>Happening Now</span>
          <span className={`mt-8 ${styles['font_3']} ${styles['text_3']}`}>Spaces going on right now</span>
        </div>
      </div>
      <div className={`flex-col justify-start ${styles['section']} ${styles['pos']}`}>
        <div className={`flex-col ${styles['section_2']}`}>
          <div className={`flex-col`}>
            <div className={`flex-row justify-between items-center ${styles['group_2']}`}>
              <img
                className={`${styles['image_2']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=5674594bf76f73fd70946dda874cc272.png"
              />
              <img
                className={`${styles['image_3']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=034c779a19c66a00d024bff7656de56c.png"
              />
            </div>
            <div className={`flex-row items-end ${styles['group_3']} ${styles['view']}`}>
              <span className={`${styles['font']} ${styles['text_4']} ${styles['text_5']}`}>LIVE</span>
              <span className={`ml-8 ${styles['font_4']} ${styles['text_7']}`}>•</span>
              <span className={`ml-8 ${styles['font']} ${styles['text_6']}`}>8 Listening</span>
            </div>
            <span className={`${styles['font_2']} ${styles['text_8']}`}>
              Binance NFT Chat: Supercharge your spaces{' '}
            </span>
            <div className={`flex-row items-end ${styles['group_3']} ${styles['view_2']}`}>
              <span className={`${styles['text_9']} ${styles['text_4']} ${styles['text_10']}`}>NFT</span>
              <span className={`${styles['font_4']} ${styles['text_9']} ${styles['text_13']}`}>•</span>
              <span className={`${styles['font_3']} ${styles['text_9']} ${styles['text_11']}`}>Cryptocurrencies</span>
              <span className={`${styles['font_4']} ${styles['text_9']} ${styles['text_14']}`}>•</span>
              <span className={`${styles['font_3']} ${styles['text_9']} ${styles['text_12']}`}>Digital creators</span>
            </div>
            <div className={`${styles['grid']}`}>
              <div className={`flex-col items-center ${styles['grid-item']}`}>
                <img
                  className={`${styles['image_4']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=b80a93134f77f916654dfc371381cc3f.png"
                />
                <span className={`${styles['font_5']} ${styles['text_15']}`}>Omar Vaccaro</span>
                <span className={`${styles['font_6']} ${styles['text_9']} ${styles['text_16']}`}>Host</span>
              </div>
              <div className={`flex-col items-center ${styles['grid-item']}`}>
                <img
                  className={`${styles['image_4']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f9bca47a618934fd7c6203a0f2e0621e.png"
                />
                <span className={`${styles['font_5']} ${styles['text_15']}`}>James Kenter</span>
                <span className={`${styles['font_6']} ${styles['text_9']} ${styles['text_16']}`}>Co-Host</span>
              </div>
              <div className={`flex-col items-center ${styles['grid-item']}`}>
                <img
                  className={`${styles['image_4']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=51c00193ea4f980f73ddd0a6d8d2ace1.png"
                />
                <span className={`${styles['font_5']} ${styles['text_15']}`}>Alfredo Levin</span>
                <span className={`${styles['font_6']} ${styles['text_9']} ${styles['text_16']}`}>Speaker</span>
              </div>
              <div className={`flex-col items-center ${styles['grid-item']}`}>
                <img
                  className={`${styles['image_4']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7c5a3b89733cb48a21e5e8b169921937.png"
                />
                <span className={`${styles['font_5']} ${styles['text_15']}`}>Cristofer Septimus</span>
                <span className={`${styles['font_6']} ${styles['text_9']} ${styles['text_16']}`}>Speaker</span>
              </div>
              <div className={`flex-col items-center ${styles['grid-item']}`}>
                <img
                  className={`${styles['image_4']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fc59547083f33e731a87f4cc173a78ab.png"
                />
                <span className={`${styles['font_5']} ${styles['text_15']}`}>Allison Westervelt</span>
                <span className={`${styles['font_6']} ${styles['text_9']} ${styles['text_16']}`}>Listener</span>
              </div>
              <div className={`flex-col items-center ${styles['grid-item']}`}>
                <img
                  className={`${styles['image_4']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=eba37616f339f0958a3eb4ceaa140a73.png"
                />
                <span className={`${styles['font_5']} ${styles['text_15']}`}>Livia Geidt</span>
                <span className={`${styles['font_6']} ${styles['text_9']} ${styles['text_16']}`}>Listener</span>
              </div>
              <div className={`flex-col items-center ${styles['grid-item']}`}>
                <img
                  className={`${styles['image_4']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=538da16ac2c219bbc2756ef48274c8e6.png"
                />
                <span className={`${styles['font_5']} ${styles['text_15']}`}>Maria Stanton</span>
                <span className={`${styles['font_6']} ${styles['text_9']} ${styles['text_16']}`}>Listener</span>
              </div>
              <div className={`flex-col items-center ${styles['grid-item']}`}>
                <img
                  className={`${styles['image_4']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=50f3532d6b1bd61c99db7dc1d17ea7fe.png"
                />
                <span className={`${styles['font_5']} ${styles['text_15']}`}>Erin Geidt</span>
                <span className={`${styles['font_6']} ${styles['text_9']} ${styles['text_16']}`}>Listener</span>
              </div>
            </div>
          </div>
          <div className={`flex-col justify-start items-center ${styles['text-wrapper']} ${styles['mt-151']}`}>
            <span className={`${styles['text_17']}`}>Start listening</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Listener_pop_up_20_2651.defaultProps = { className: '' };