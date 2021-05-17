import React from 'react';

import { ComponentSize } from 'common/types';

export type SelectFieldOption = {
  value: string;
  text: string;
};

export type SelectFieldProps = {
  name: string;
  options: SelectFieldOption[];
  size?: ComponentSize;
  title?: string;
  value?: string | number;
  onChange?: (name: string, value: string) => void;
};

export const SelectField: React.FC<SelectFieldProps> = ({
  name,
  options,
  title,
  size = 'md',
  value,
  onChange,
}) => {
  const [currentValue, setCurrentValue] = React.useState(value);

  React.useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const newValue = event.target.value;
    setCurrentValue(newValue);
    onChange?.(name, newValue);
  };

  return (
    <select
      className={`input ${size}`}
      name={name}
      title={title}
      value={currentValue}
      onChange={handleChange}
    >
      {options.map(({ value, text }) => (
        <option key={value} value={value}>
          {text}
        </option>
      ))}
    </select>
  );
};
