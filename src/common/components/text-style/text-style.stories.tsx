import { Story, Meta } from '@storybook/react';

import { TextStyle, TextStyleProps } from './text-style.component';

export default {
  title: 'Common/Text Style',
  component: TextStyle,
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: ['default', 'primary', 'error'],
    },
  },
} as Meta;

const Template: Story<TextStyleProps> = (args) => <TextStyle {...args} />;

const defaultArgs: TextStyleProps = {
  color: 'error',
  text: 'This is a text.',
};

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};
