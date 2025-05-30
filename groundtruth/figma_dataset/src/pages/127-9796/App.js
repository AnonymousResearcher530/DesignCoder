import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Home_2_127_9796(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col ${styles['page']} ${props.className}`}>
      <div className={`flex-col ${styles['section']}`}>
        <div className={`flex-row justify-between items-center`}>
          <div className={`flex-col`}>
            <span className={`${styles['text']}`}>Hi, Paul</span>
            <div className={`flex-row items-center ${styles['mt-3']}`}>
              <img
                className={`shrink-0 ${styles['image_2']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ff29dd1d97ee830a28dc33cd0ea827c2.png"
              />
              <span className={`${styles['font_1']} ${styles['text_2']} ml-6`}>2.000 points</span>
            </div>
          </div>
          <img
            className={`${styles['image']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=f998fc26654bb80d1973fde7bb8b8a61.png"
          />
        </div>
        <div className={`flex-row items-center ${styles['section_2']} mt-16`}>
          <img
            className={`${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=383585691bcd368946b8dfe2719e36cc.png"
          />
          <span className={`${styles['text_3']} ml-6`}>Where to go?</span>
        </div>
        <div className={`flex-col ${styles['section_3']} mt-16`}>
          <div className={`flex-row items-center ${styles['group_2']}`}>
            <div className={`flex-col justify-start items-center ${styles['text-wrapper']}`}>
              <span className={`${styles['font_2']} ${styles['text_4']}`}>Upcoming</span>
            </div>
            <span className={`${styles['font_3']} ${styles['text_5']} ${styles['ml-9']}`}>24 March 2024</span>
          </div>
          <div className={`flex-row justify-between items-center ${styles['group_3']}`}>
            <div className={`flex-col`}>
              <div className={`flex-row items-end self-stretch`}>
                <span className={`${styles['font_4']} ${styles['text_6']}`}>CGK</span>
                <img
                  className={`shrink-0 ${styles['image_4']} ${styles['ml-11']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=45b9557a990de237ce622e42c6e625ad.png"
                />
              </div>
              <span className={`self-start ${styles['font_5']} ${styles['mt-11']}`}>05:30</span>
            </div>
            <div className={`flex-col items-center`}>
              <img
                className={`${styles['image_6']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=04bded83e5011ce2bb1385f2b51f639e.png"
              />
              <span className={`${styles['text_8']} ${styles['mt-5']}`}>1h 30m</span>
            </div>
            <div className={`flex-col`}>
              <div className={`flex-row items-center self-stretch`}>
                <img
                  className={`shrink-0 ${styles['image_5']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6d01b17e7415da46cd49904b6c775476.png"
                />
                <span className={`${styles['font_4']} ${styles['text_7']} ml-16`}>DPS</span>
              </div>
              <span className={`self-end ${styles['font_5']} mt-10`}>06:30</span>
            </div>
          </div>
          <div className={`flex-row items-center ${styles['view']}`}>
            <span className={`${styles['font_3']} ${styles['text_9']}`}>Sentosa Air</span>
            <div className={`${styles['section_4']} ${styles['ml-9']}`}></div>
            <span className={`${styles['font_3']} ${styles['text_10']} ${styles['ml-9']}`}>Economy</span>
            <div className={`${styles['section_4']} ${styles['ml-9']}`}></div>
            <span className={`${styles['font_3']} ${styles['text_11']} ${styles['ml-9']}`}>Direct</span>
          </div>
          <div className={`flex-row justify-between items-center ${styles['group_4']}`}>
            <span className={`${styles['font_6']} ${styles['text_12']}`}>Booking ID</span>
            <span className={`${styles['text_13']}`}>ZEEBAW</span>
          </div>
        </div>
      </div>
      <div className={`flex-row ${styles['equal-division']}`}>
        <div className={`flex-col items-center ${styles['group_5']} ${styles['group_6']}`}>
          <img
            className={`${styles['image_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6480c50adadb0e2eac3e523c735ff83b.png"
          />
          <span className={`${styles['font_1']} ${styles['text_31']} ${styles['mt-5']}`}>Flights</span>
        </div>
        <div className={`flex-col items-center ${styles['group_5']} ${styles['equal-division-item_2']}`}>
          <img
            className={`${styles['image_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=fac25545ed0d0e0b3961b9c1640b837e.png"
          />
          <span className={`${styles['font']} mt-6`}>Hotels</span>
        </div>
        <div className={`flex-col items-center ${styles['group_5']} ${styles['group_1']}`}>
          <img
            className={`${styles['image_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=be7b559570fc1f0c0564ccb0c369f145.png"
          />
          <span className={`${styles['font']} ${styles['text_1']} ${styles['mt-5']}`}>Trains</span>
        </div>
        <div className={`flex-col items-center ${styles['group_5']} ${styles['group_8']}`}>
          <img
            className={`${styles['image_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8ac434879248cf68608e387d2ced5e5d.png"
          />
          <span className={`${styles['font_1']} ${styles['text_32']} mt-6`}>Ferry</span>
        </div>
        <div className={`flex-col items-center ${styles['group_5']} ${styles['equal-division-item_2']}`}>
          <img
            className={`${styles['image_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=d386fabba66cc890e090a1dfd8ba4574.png"
          />
          <span className={`${styles['font']} mt-6`}>Bus</span>
        </div>
      </div>
      <div className={`flex-col ${styles['group_23']}`}>
        <div className={`flex-col`}>
          <div className={`flex-row justify-between items-center ${styles['view_2']}`}>
            <span className={`${styles['font_7']} ${styles['text_14']}`}>Journey together</span>
            <span className={`${styles['font_8']} ${styles['text_33']}`}>See all</span>
          </div>
          <div className={`flex-row ${styles['horiz-list']} ${styles['group_7']} ${styles['mt-11']}`}>
            <div className={`flex-col ${styles['section_5']} ${styles['horiz-list-item']}`}>
              <img
                className={`self-stretch ${styles['image_8']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c1cf25fb7a792a92fe2584c69f7345fb.png"
              />
              <span className={`self-start ${styles['font']} ${styles['text_16']}`}>Mount Bromo</span>
              <span className={`self-start ${styles['font_9']} ${styles['text_17']}`}>Volcano in East Java</span>
              <div className={`flex-row items-center self-stretch ${styles['view_5']}`}>
                <img
                  className={`${styles['image_9']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a11d3f38c3aa01b6c1e544d01a2f0957.png"
                />
                <span className={`${styles['font_11']} ${styles['ml-5']}`}>4.9</span>
              </div>
              <div className={`flex-row justify-between self-stretch ${styles['group_15']}`}>
                <div className={`flex-col items-start ${styles['group_16']}`}>
                  <span className={`${styles['font_12']} ${styles['text_19']}`}>Start from</span>
                  <span className={`${styles['font_13']} mt-4`}>$ 150/pax</span>
                </div>
                <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']}`}>
                  <span className={`${styles['font_2']}`}>3D2N</span>
                </div>
              </div>
            </div>
            <div className={`flex-col ${styles['section_5']} ${styles['horiz-list-item']} ${styles['ml-13']}`}>
              <img
                className={`${styles['image_8']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=8ebc5c4454b95bcbdfa653b2239e356c.png"
              />
              <div className={`flex-col items-start ${styles['view_3']}`}>
                <span className={`${styles['font_6']}`}>Labengki Sombori</span>
                <span className={`${styles['font_9']} mt-2`}>Islands in Sulawesi</span>
              </div>
              <div className={`flex-row items-center ${styles['group_14']} ${styles['view_6']}`}>
                <img
                  className={`${styles['image_9']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a11d3f38c3aa01b6c1e544d01a2f0957.png"
                />
                <span className={`${styles['font_11']} ${styles['ml-5']}`}>4.8</span>
              </div>
              <div className={`flex-row justify-between ${styles['group_15']}`}>
                <div className={`flex-col items-start ${styles['group_16']}`}>
                  <span className={`${styles['font_12']} ${styles['text_19']}`}>Start from</span>
                  <span className={`${styles['font_13']} mt-4`}>$ 250/pax</span>
                </div>
                <div className={`flex-col justify-start items-center ${styles['text-wrapper_2']}`}>
                  <span className={`${styles['font_2']}`}>3D2N</span>
                </div>
              </div>
            </div>
            <div className={`flex-col ${styles['horiz-list-item_2']} ${styles['section_6']} ${styles['ml-13']}`}>
              <img
                className={`self-stretch ${styles['image_8']}`}
                src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=afc2f4782f568bd3b67e0dbdbf2bdd62.png"
              />
              <div className={`flex-col items-start self-stretch ${styles['view_4']}`}>
                <span className={`${styles['font_6']}`}>Sailing Komodo</span>
                <span className={`${styles['font_10']} ${styles['text_18']} mt-2`}>Labuan Bajo</span>
              </div>
              <div className={`flex-row items-center self-stretch ${styles['group_14']} ${styles['view_7']}`}>
                <img
                  className={`${styles['image_9']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a11d3f38c3aa01b6c1e544d01a2f0957.png"
                />
                <span className={`${styles['font_11']} ${styles['ml-5']}`}>4.8</span>
              </div>
              <span className={`self-start ${styles['font_12']} ${styles['text_20']}`}>Start from</span>
              <span className={`self-start ${styles['font_13']} ${styles['text_21']}`}>$ 200/pax</span>
            </div>
          </div>
        </div>
        <div className={`flex-col ${styles['group_21']}`}>
          <div className={`flex-row justify-between items-center ${styles['group_17']}`}>
            <span className={`${styles['font_7']}`}>Hotels recomendation for you</span>
            <span className={`${styles['font_8']} ${styles['text_15']}`}>See all</span>
          </div>
          <div className={`flex-row ${styles['section_7']} ${styles['mt-11']}`}>
            <img
              className={`${styles['image_10']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1c4c79ee5e8da9151a484e03c0b50465.png"
            />
            <div className={`flex-col flex-1 self-start ${styles['group_10']} ${styles['ml-11']}`}>
              <span className={`self-stretch ${styles['font_7']} ${styles['text_22']}`}>
                Swiss-Belhotel Rainforest Kuta
              </span>
              <span className={`self-start ${styles['font_10']} ${styles['text_23']} ${styles['mt-7']}`}>
                Jl. Sunset Road No. 101, Kuta, Bali , Indonesia
              </span>
              <div className={`flex-row items-center self-stretch ${styles['mt-7']}`}>
                <img
                  className={`${styles['image_9']}`}
                  src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a11d3f38c3aa01b6c1e544d01a2f0957.png"
                />
                <span className={`${styles['font_11']} ${styles['text_24']} ${styles['ml-5']}`}>4-star hotel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-col relative ${styles['section_8']}`}>
        <div className={`flex-row justify-between items-center ${styles['group_20']}`}>
          <img
            className={`${styles['image_13']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=12539ad57007a4aaf74be5c44c91a9de.png"
          />
          <img
            className={`${styles['image_14']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=dec4384ca9410785b473bcfc36121d6a.png"
          />
          <img
            className={`${styles['image_11']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=26cd0205cd60e8d3f141dbbe185c46a9.png"
          />
          <img
            className={`${styles['image_11']} ${styles['image_12']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=c65eb0c8077c3d3d4e1e59fc25211c60.png"
          />
        </div>
        <div className={`flex-row justify-between ${styles['mt-7']}`}>
          <span className={`${styles['font_8']}`}>Home</span>
          <span className={`${styles['font_14']} ${styles['text_25']}`}>Orders</span>
          <span className={`${styles['font_14']} ${styles['text_26']}`}>Deals</span>
          <span className={`${styles['font_14']}`}>Account</span>
        </div>
      </div>
    </div>
  );
}

Home_2_127_9796.defaultProps = { className: '' };