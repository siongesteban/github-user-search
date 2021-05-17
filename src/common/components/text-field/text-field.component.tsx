import React from 'react';

import { ComponentSize } from 'common/types';

export type TextFieldProps = {
  name: string;
  placeholder?: string;
  size?: ComponentSize;
  onChange?: (name: string, value: string) => void;
};

export const TextField: React.FC<TextFieldProps> = ({
  name,
  placeholder,
  size = 'md',
  onChange,
}) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange?.(name, event.target.value);
  };

  return (
    <input
      className={`input ${size}`}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
