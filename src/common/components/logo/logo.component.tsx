import React from 'react';

import styles from './logo.module.css';

export const Logo: React.FC = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.logo}>
      <span className={styles.github}>GitHub</span>
      <span className={styles.user}>Usearch</span>
    </h1>
    <span className={styles.slogan}>Search GitHub users or organizations</span>
  </div>
);
