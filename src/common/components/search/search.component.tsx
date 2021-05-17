import React from 'react';

import { Button } from 'common/components/button';
import { TextField } from 'common/components/text-field';

import styles from './search.module.css';

export type SearchProps = {
  name: string;
  loading?: boolean;
  placeholder?: string;
  onSearch: (value: string) => void;
};

export const Search: React.FC<SearchProps> = ({
  name,
  loading,
  placeholder,
  onSearch,
}) => {
  const [searchValue, setSearchValue] = React.useState('');

  const handleChange = (_: string, value: string) => {
    setSearchValue(value);
  };

  const handleSearch = () => {
    onSearch(searchValue);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    handleSearch();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.wrapper}>
        <div>
          <TextField
            name={name}
            placeholder={placeholder || 'Enter value'}
            onChange={handleChange}
          />
        </div>
        <div>
          <Button
            disabled={loading}
            text={loading ? 'Searching...' : 'Search'}
            onClick={handleSearch}
          />
        </div>
      </div>
    </form>
  );
};
