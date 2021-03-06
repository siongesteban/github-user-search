import { Story, Meta } from '@storybook/react';

import { Logo } from './logo.component';

export default {
  title: 'Common/Logo',
  component: Logo,
} as Meta;

const Template: Story = () => <Logo />;

export const Default = Template.bind({});
Default.args = {};
