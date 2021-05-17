import React from 'react';

import { ComponentSize } from 'common/types';

import styles from './button.module.css';

export type ButtonProps = {
  text: string;
  size?: ComponentSize;
};

export const Button: React.FC<ButtonProps> = ({ text, size = 'md' }) => (
  <button className={`${styles.button} ${styles[size]}`}>{text}</button>
);
