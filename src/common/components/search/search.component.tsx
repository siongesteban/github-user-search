import React from 'react';

import { Button } from 'common/components/button';
import { TextField } from 'common/components/text-field';

import styles from './search.module.css';

export type SearchProps = {
  name: string;
  placeholder?: string;
  onSearch: (value: string) => void;
};

export const Search: React.FC<SearchProps> = ({
  name,
  placeholder,
  onSearch,
}) => {
  const [searchValue, setSearchValue] = React.useState('');

  const handleSearchValueChange = (_: string, value: string) => {
    setSearchValue(value);
  };

  const handleSearchClick = () => {
    onSearch(searchValue);
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <TextField
          name={name}
          placeholder={placeholder || 'Enter value'}
          onChange={handleSearchValueChange}
        />
      </div>
      <div>
        <Button text="Search" onClick={handleSearchClick} />
      </div>
    </div>
  );
};
