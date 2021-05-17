import React from 'react';

import { ComponentSize } from 'common/types';

import styles from './text-field.module.css';

export type TextFieldProps = {
  placeholder?: string;
  size?: ComponentSize;
};

export const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  size = 'md',
}) => (
  <input
    className={`${styles['text-field']} ${styles[size]}`}
    placeholder={placeholder}
  />
);
