import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './button.component';

export default {
  title: 'Common/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

const defaultArgs: ButtonProps = {
  text: 'Button',
};

export const Basic = Template.bind({});
Basic.args = {
  ...defaultArgs,
};
