import { Story, Meta } from '@storybook/react';

import { TextField, TextFieldProps } from './text-field.component';

export default {
  title: 'Common/Input/Text Field',
  component: TextField,
  argTypes: {
    size: {
      type: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

const defaultArgs: TextFieldProps = {
  name: 'test',
  placeholder: 'Enter some text',
  size: 'md',
};

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};
