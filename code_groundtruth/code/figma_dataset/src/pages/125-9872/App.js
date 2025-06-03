import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './App.css';

export default function Home_125_9872(props) {
  const history = useHistory();

  const [data, setData] = useState({});

  return (
    <div className={`flex-col justify-start relative ${styles['page']} ${props.className}`}>
      <div className={`${styles['section']}`}></div>
      <div className={`flex-row items-center ${styles['group']} ${styles['pos']}`}>
        <img
          className={`${styles['image']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9031c08e0286c5314fe2780903229495.png"
        />
        <img
          className={`${styles['image_3']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=caf628865c5b14ca542cd92e4b5ce44d.png"
        />
        <img
          className={`${styles['image_2']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=73705ed8b259503e2eef6d3a19104c62.png"
        />
        <img
          className={`${styles['image_4']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=0ef5b2376eba6eda05eacb6f10fb4fd8.png"
        />
      </div>
      <div className={`flex-row ${styles['section_2']} ${styles['pos_5']}`}>
        <div className={`${styles['section_3']} ${styles['view']}`}></div>
        <div className={`${styles['section_3']} ml-86`}></div>
      </div>
      <img
        className={`${styles['image_5']} ${styles['pos_6']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=6b90eb0599aa8d28deafb98495c0640c.png"
      />
      <img
        className={`${styles['image_6']} ${styles['pos_7']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=1a4bff2271ca546d7b7a80f9fa40c206.png"
      />
      <img
        className={`${styles['image_7']} ${styles['pos_8']}`}
        src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=a6ba2424ecfa53daa86aa3ca7866ba42.png"
      />
      <div className={`flex-col justify-start items-center ${styles['image-wrapper']} ${styles['pos_9']}`}>
        <img
          className={`${styles['image_8']}`}
          src="https://ide.code.fun/api/image?token=6837d51d4ae84d0012310ff0&name=9d203419af42512514c4b4eee0a06d98.png"
        />
      </div>
    </div>
  );
}

Home_125_9872.defaultProps = { className: '' };