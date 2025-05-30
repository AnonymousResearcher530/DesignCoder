import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function IPhone_13_mini_1_23_13281(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col relative ${styles['page']} ${props.className}`}>
      <div className={`flex-row justify-between items-center ${styles['group']}`}>
        <div className={`flex-row items-center`}>
          <img
            className={`shrink-0 ${styles['image_3']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1dd795721e1b8aa8e09c29918d0c599f.png"
          />
          <span className={`${styles['text']} ${styles['ml-7']}`}>Youtube</span>
        </div>
        <div className={`flex-row items-center`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=73c0edf49360ba975b7406b59888feb8.png"
          />
          <img
            className={`${styles['image']} ml-8`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=da3c0697824ea33792c7e379f4605e4d.png"
          />
        </div>
      </div>
      <div className={`flex-col ${styles['group_2']} ${styles['view_1']}`}>
        <div className={`flex-row items-center self-stretch ${styles['group_2']} ${styles['view']}`}>
          <img
            className={`shrink-0 ${styles['image_4']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4b872aed2851dc79bf784336abf99d7f.png"
          />
          <div className={`shrink-0 ${styles['section']} ${styles['ml-9']}`}></div>
          <div className={`flex-col justify-start items-center shrink-0 ${styles['text-wrapper']} ${styles['ml-9']}`}>
            <span className={`${styles['font']} ${styles['text_2']}`}>All</span>
          </div>
          <div className={`flex-col justify-start items-center shrink-0 ${styles['text-wrapper_2']} ${styles['ml-9']}`}>
            <span className={`${styles['font']}`}>Music</span>
          </div>
          <div className={`flex-col justify-start items-center shrink-0 ${styles['text-wrapper_3']} ${styles['ml-9']}`}>
            <span className={`${styles['font_2']}`}>Figma</span>
          </div>
          <div className={`flex-col justify-start items-center shrink-0 ${styles['text-wrapper_4']} ${styles['ml-9']}`}>
            <span className={`${styles['font']}`}>Mixes</span>
          </div>
          <div className={`flex-col justify-start items-end shrink-0 ${styles['text-wrapper_5']} ${styles['ml-9']}`}>
            <span className={`${styles['font_2']}`}>Graphics Design</span>
          </div>
        </div>
        <div className={`flex-col justify-start items-center self-start ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=decfb638c77645747b78917a8000aaef.png"
          />
        </div>
        <div className={`flex-row justify-between items-center self-stretch ${styles['group_3']}`}>
          <img
            className={`${styles['image_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=7e525e27bc5ef522399a941549bc1a7c.png"
          />
          <div className={`flex-col`}>
            <span className={`self-start ${styles['font_3']} ${styles['text_3']}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...{' '}
            </span>
            <div className={`flex-row items-center self-stretch mt-2`}>
              <span className={`${styles['font_4']}`}>Channel Name</span>
              <div className={`shrink-0 ${styles['section_2']} ml-6`}></div>
              <span className={`${styles['font_4']} ${styles['text_4']} ml-6`}>247k views</span>
              <div className={`shrink-0 ${styles['section_2']} ml-6`}></div>
              <span className={`${styles['font_5']} ${styles['text_5']} ml-6`}>2 days ago</span>
            </div>
          </div>
          <img
            className={`${styles['image_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4048dca366834d2df9642b5147950651.png"
          />
        </div>
        <div className={`flex-col justify-start items-center self-start ${styles['image-wrapper']}`}>
          <img
            className={`${styles['image_5']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6919d81cd20979579b02b1175e0eec96.png"
          />
        </div>
        <div className={`flex-row justify-between items-center self-stretch ${styles['group_4']}`}>
          <img
            className={`${styles['image_6']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=de4d5ca2deac7c2d1f5f7ac87101df58.png"
          />
          <div className={`flex-col`}>
            <span className={`self-start ${styles['font_3']} ${styles['text_3']}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...{' '}
            </span>
            <div className={`flex-row items-center self-stretch mt-2`}>
              <span className={`${styles['font_4']}`}>Channel Name</span>
              <div className={`shrink-0 ${styles['section_2']} ml-6`}></div>
              <span className={`${styles['font_4']} ${styles['text_6']} ml-6`}>247k views</span>
              <div className={`shrink-0 ${styles['section_2']} ml-6`}></div>
              <span className={`${styles['font_5']} ${styles['text_7']} ml-6`}>2 days ago</span>
            </div>
          </div>
          <img
            className={`${styles['image_7']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=4048dca366834d2df9642b5147950651.png"
          />
        </div>
        <div className={`flex-col justify-start items-start self-stretch ${styles['group_5']}`}>
          <div className={`flex-col justify-start items-center ${styles['image-wrapper']}`}>
            <img
              className={`${styles['image_5']}`}
              src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=87512cc03ae94e1de02fa08cfa805b08.png"
            />
          </div>
        </div>
      </div>
      <div className={`flex-col ${styles['section_3']} ${styles['pos']}`}>
        <div className={`flex-row items-center ${styles['equal-division']}`}>
          <img
            className={`${styles['image_2']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=2c42cc555a0aef2111d5a5880318b2c7.png"
          />
          <img
            className={`${styles['equal-division-item_3']} ${styles['ml-69']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a7b7aa68c38af25aa8cf58cc10c2b145.png"
          />
          <img
            className={`${styles['equal-division-item']} ${styles['ml-69']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=054cb5dfab7b8700527426298d2d3877.png"
          />
          <img
            className={`${styles['equal-division-item_2']} ${styles['ml-69']}`}
            src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=cf97944cffce3b81827df6f0af91ac35.png"
          />
        </div>
        <div className={`flex-row justify-between`}>
          <span className={`self-center ${styles['font_6']} ${styles['text_8']}`}>Home</span>
          <span className={`self-start ${styles['font_6']}`}>Shorts</span>
          <span className={`self-center ${styles['font_7']} ${styles['text_9']}`}>Subscriptons</span>
          <span className={`self-center ${styles['font_7']} ${styles['text_10']}`}>Library</span>
        </div>
      </div>
    </div>
  );
}

IPhone_13_mini_1_23_13281.defaultProps = { className: '' };