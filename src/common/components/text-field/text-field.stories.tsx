import { Story, Meta } from '@storybook/react';

import { TextField, TextFieldProps } from './text-field.component';

export default {
  title: 'Common/Text Field',
  component: TextField,
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
