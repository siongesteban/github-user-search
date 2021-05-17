import React from 'react';

import { ComponentSize } from 'common/types';

import styles from './button.module.css';

export type ButtonProps = {
  text: string;
  size?: ComponentSize;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  text,
  size = 'md',
  onClick,
}) => (
  <button className={`${styles.button} ${styles[size]}`} onClick={onClick}>
    {text}
  </button>
);
