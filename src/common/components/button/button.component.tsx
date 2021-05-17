import React from 'react';

import styles from './button.module.css';

export type ButtonProps = {
  text: string;
};

export const Button: React.FC<ButtonProps> = ({ text }) => (
  <button className={styles.button}>{text}</button>
);
