import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Onbarding_Fees_23_12723(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col relative ${styles['page']} ${props.className}`}>
      <div className={`flex-col self-center ${styles['group']}`}>
        <span className={`self-end ${styles['text']}`}>Skip</span>
        <span className={`self-start ${styles['text_2']}`}>Fees</span>
        <span className={`self-start ${styles['text_3']}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua
        </span>
      </div>
      <div className={`flex-col justify-start items-start self-stretch ${styles['section']}`}>
        <img
          className={`shrink-0 ${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=cb45565b4d7ae85d83f992dde08d3473.png"
        />
      </div>
      <div className={`flex-col justify-start items-center ${styles['text-wrapper']} ${styles['pos']}`}>
        <span className={`${styles['text_4']}`}>Next</span>
      </div>
    </div>
  );
}

Onbarding_Fees_23_12723.defaultProps = { className: '' };