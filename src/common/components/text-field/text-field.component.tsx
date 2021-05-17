import React from 'react';

import { ComponentSize } from 'common/types';

export type TextFieldProps = {
  name: string;
  placeholder?: string;
  size?: ComponentSize;
  value?: string;
  onChange?: (name: string, value: string) => void;
};

export const TextField: React.FC<TextFieldProps> = ({
  name,
  placeholder,
  size = 'md',
  value = '',
  onChange,
}) => {
  const [currentValue, setCurrentValue] = React.useState(value);

  React.useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const newValue = event.target.value;
    setCurrentValue(newValue);
    onChange?.(name, newValue);
  };

  return (
    <input
      className={`input ${size}`}
      placeholder={placeholder}
      value={currentValue}
      onChange={handleChange}
    />
  );
};
