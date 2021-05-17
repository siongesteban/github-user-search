import React from 'react';

import styles from './text-field.module.css';

export type TextFieldProps = {
  placeholder?: string;
};

export const TextField: React.FC<TextFieldProps> = ({ placeholder }) => (
  <input className={styles['text-field']} placeholder={placeholder} />
);
