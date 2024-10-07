'use client';
import React, { useState } from 'react';
import styles from './query.module.css';

const Page = () => {
  //   const [x, setZ] = useState(1);
  //   window.addEventListener('resize', (event) => {
  //     setZ(window.innerWidth);
  //   });
  return (
    <div>
      <div className={`${styles.card} ${styles.cardB}`}>
        <h3>Lorem, ipsum dolor.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
          provident commodi ducimus minima, voluptate aperiam voluptatum sit
          quas. Ex, molestias?
        </p>
      </div>

      <div className={styles.container}>
        <div className={`${styles.child} ${styles.first}`}>
          <div>1</div>
          {/* <div>2</div> */}
        </div>
        <div className={`${styles.child} ${styles.second}`}>

          <span>2</span>
        </div>
        <div className={`${styles.child} ${styles.third}`}>

          <span>3</span>
        </div>
        <div className={`${styles.child} ${styles.first}`}>
          <span>4</span>{' '}
        </div>
        <div className={`${styles.child} ${styles.second}`}>
          {' '}
          <span>5</span>{' '}
        </div>
      </div>
    </div>
  );
};

export default Page;
// media-query
