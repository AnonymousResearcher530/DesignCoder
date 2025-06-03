import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Shouye_228_56031(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col justify-start relative ${styles['page']} ${props.className}`}>
      <div className={`${styles['section']}`}></div>
      <img
        className={`${styles['image']} ${styles['pos']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=ff5e2bbd5bff3855612cad5c7ceebbea.png"
      />
    </div>
  );
}

Shouye_228_56031.defaultProps = { className: '' };