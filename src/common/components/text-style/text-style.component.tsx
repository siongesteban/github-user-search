import React from 'react';

import { ComponentColor } from 'common/types';

import styles from './text-style.module.css';

export type TextStyleProps = {
  color?: ComponentColor;
  text: string;
};

export const TextStyle: React.FC<TextStyleProps> = ({
  color = 'default',
  text,
}) => {
  const classNames = [styles['text-style'], styles[color]];

  return <span className={classNames.join(' ')}>{text}</span>;
};
