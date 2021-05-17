import React from 'react';

import { ComponentSize } from 'common/types';

import styles from './button.module.css';

export type ButtonProps = {
  disabled?: boolean;
  text: string;
  size?: ComponentSize;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  disabled,
  text,
  size = 'md',
  onClick,
}) => {
  const classNames = [styles.button, styles[size]];

  if (disabled) {
    classNames.push(styles.disabled);
  }

  return (
    <button
      type="button"
      className={classNames.join(' ')}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
