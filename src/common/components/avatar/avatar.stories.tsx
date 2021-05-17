import { Story, Meta } from '@storybook/react';

import { Avatar, AvatarProps } from './avatar.component';

export default {
  title: 'Common/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Image = Template.bind({});
Image.args = {
  name: 'Jane Doe',
  src:
    'https://i.pinimg.com/originals/ab/71/b2/ab71b245d7e284213dfc0473ab2b58fe.jpg',
};

export const Initials = Template.bind({});
Initials.args = {
  name: 'Jane Doe',
};
