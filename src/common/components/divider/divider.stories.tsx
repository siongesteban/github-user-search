import { Story, Meta } from '@storybook/react';

import { Divider } from './divider.component';

export default {
  title: 'Common/Divider',
  component: Divider,
} as Meta;

const Template: Story = () => <Divider />;

export const Default = Template.bind({});
Default.args = {};
