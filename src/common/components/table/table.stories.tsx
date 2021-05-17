import { Story, Meta } from '@storybook/react';

import { Table, TableProps } from './table.component';

export default {
  title: 'Common/Table',
  component: Table,
} as Meta;

const Template: Story<TableProps> = (args) => <Table {...args} />;

const defaultArgs: TableProps = {
  fields: [
    {
      name: 'id',
      text: 'ID',
    },
    {
      name: 'name',
      text: 'Name',
    },
    {
      name: 'creator',
      text: 'Creator',
    },
  ],
  rows: [
    {
      id: 1,
      name: 'React',
      creator: 'Facebook',
    },
    {
      id: 2,
      name: 'Vue',
      creator: 'Evan You',
    },
    {
      id: 3,
      name: 'Angular',
      creator: 'Facebook',
    },
  ],
};

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};

export const PageSize = Template.bind({});
PageSize.args = {
  ...defaultArgs,
  pageSize: {
    currentSize: 10,
    sizes: [10, 20, 30],
    onChange: () => {},
  },
};

export const Pagination = Template.bind({});
Pagination.args = {
  ...defaultArgs,
  pageSize: {
    currentSize: 10,
    sizes: [10, 20, 30],
    onChange: () => {},
  },
  pagination: {
    currentPage: 1,
    pageCount: 2,
    onNext: () => {},
    onPrevious: () => {},
  },
};

export const Empty = Template.bind({});
Empty.args = {
  ...defaultArgs,
  rows: [],
};
