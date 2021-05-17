import React from 'react';

import { Avatar } from 'common/components/avatar';
import { Table, TableProps, TableField } from 'common/components/table';

import { UserTypeIcon } from './user-type-icon.component';

export type UserTableRow = {
  id: string;
  username: string;
  avatarUrl: string;
  type: 'User' | 'Organization';
};

export type UserTableProps = {
  loading?: boolean;
  rows: UserTableRow[];
} & Pick<TableProps, 'pagination' | 'pageSize'>;

export const UserTable: React.FC<UserTableProps> = ({
  loading,
  rows,
  ...restProps
}) => {
  const fields: TableField<UserTableRow>[] = [
    {
      name: 'avatarUrl',
      render: (row) => <Avatar src={row.avatarUrl} name={row.username} />,
    },
    {
      name: 'username',
      text: 'Login',
      sort: true,
    },
    {
      name: 'type',
      text: 'Type',
      alignment: 'center',
      sort: true,
      render: (row) => <UserTypeIcon type={row.type} />,
    },
  ];

  return (
    <Table
      fullWidth
      emptyMessage={loading ? 'Loading...' : 'No users found.'}
      fields={fields}
      rows={rows}
      sort={['username', 'asc']}
      {...restProps}
    />
  );
};
