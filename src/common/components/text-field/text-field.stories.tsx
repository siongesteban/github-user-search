import { Story, Meta } from '@storybook/react';

import { TextField, TextFieldProps } from './text-field.component';

export default {
  title: 'Common/Text Field',
  component: TextField,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
  },
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

const defaultArgs: TextFieldProps = {
  name: 'test',
  placeholder: 'Enter some text',
  size: 'md',
};

export const Basic = Template.bind({});
Basic.args = {
  ...defaultArgs,
};
