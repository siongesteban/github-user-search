import React from 'react';
import qs from 'querystring';

import { Search } from 'common/components/search';
import { TextStyle } from 'common/components/text-style';

import { UserTable, UserTableRow } from './user-table.component';
import styles from './user-search.module.css';

export const UserSearch: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const [searching, setSearching] = React.useState(false);
  const [pageSize, setPageSize] = React.useState(9);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageCount, setPageCount] = React.useState(0);
  const [rows, setRows] = React.useState<UserTableRow[]>([]);
  const [user, setUser] = React.useState('');
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, pageSize, user]);

  const fetchUsers = async () => {
    setLoading(true);

    const response = await fetch(
      `https://api.github.com/search/users?q=${user} in:login&per_page=${pageSize}&page=${currentPage}`
    );

    if (!response.ok) {
      const data = await response.json();

      setError(data.message);
      setRows([]);
      finishLoadStatus();

      return;
    }

    if (error) {
      setError('');
    }

    const data = await response.json();

    if (!data.total_count) {
      setRows([]);
      finishLoadStatus();
      return;
    }

    const [, lastPageMeta] = response.headers.get('Link')?.split(',') || [];

    let newPageCount = 1;

    if (lastPageMeta) {
      const lastPageUrl = lastPageMeta
        .split('>')[0]
        .split('')
        .splice(2)
        .join('');

      newPageCount = Number(qs.parse(lastPageUrl).page);
    }

    const newRows = data.items.map((item: any) => ({
      id: item.id,
      username: item.login,
      avatarUrl: item.avatar_url,
      type: item.type,
    })) as UserTableRow[];

    setPageCount(newPageCount);
    setRows(newRows);
    finishLoadStatus();
  };

  const finishLoadStatus = () => {
    setLoading(false);
    setSearching(false);
  };

  const handleSearch = (value: string) => {
    if (value !== user) {
      setSearching(true);
    }

    setCurrentPage(1);
    setUser(value);
  };

  const handlePageSizeChange = (pageSize: number) => setPageSize(pageSize);

  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <div className={styles.wrapper}>
      <div>
        <Search
          name="user"
          placeholder="Enter GitHub user..."
          loading={searching}
          onSearch={handleSearch}
        />
      </div>
      {error && (
        <div className={styles['error-container']}>
          <p title={error}>
            <TextStyle
              color="error"
              text={'Something went wrong while fetching data from GitHub.'}
            />
          </p>
          <p>
            <TextStyle
              color="error"
              text={'Try refreshing the page after a few seconds.'}
            />
          </p>
        </div>
      )}
      <div className={styles['table-container']}>
        <UserTable
          loading={loading}
          rows={rows}
          pageSize={{
            currentSize: pageSize,
            sizes: [9, 30, 50, 100],
            onChange: handlePageSizeChange,
          }}
          pagination={{
            loading,
            currentPage,
            pageCount,
            onPrevious: handlePageChange,
            onNext: handlePageChange,
          }}
        />
      </div>
    </div>
  );
};
