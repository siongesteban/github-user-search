import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './button.component';

export default {
  title: 'Common/Button',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

const defaultArgs: ButtonProps = {
  text: 'Button',
  size: 'md',
};

export const Basic = Template.bind({});
Basic.args = {
  ...defaultArgs,
};
