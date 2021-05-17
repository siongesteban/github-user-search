import { Story, Meta } from '@storybook/react';

import { Search, SearchProps } from './search.component';

export default {
  title: 'Common/Search',
  component: Search,
} as Meta;

const Template: Story<SearchProps> = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'video',
  placeholder: 'Enter video title',
  onSearch: (value) => alert(`Search: ${value}`),
};
