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
