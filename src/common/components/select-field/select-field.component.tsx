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
};

export const SelectField: React.FC<SelectFieldProps> = ({
  name,
  options,
  size = 'md',
}) => (
  <select className={`input ${size}`} name={name}>
    {options.map(({ value, text }) => (
      <option key={value} value={value}>
        {text}
      </option>
    ))}
  </select>
);
