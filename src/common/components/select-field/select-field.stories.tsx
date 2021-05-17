import { Story, Meta } from '@storybook/react';

import { SelectField, SelectFieldProps } from './select-field.component';

export default {
  title: 'Common/Input/Select Field',
  component: SelectField,
  argTypes: {
    size: {
      type: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} as Meta;

const Template: Story<SelectFieldProps> = (args) => <SelectField {...args} />;

const defaultArgs: SelectFieldProps = {
  size: 'md',
  name: 'test',
  options: [
    {
      value: 'optionA',
      text: 'Option A',
    },
    {
      value: 'optionB',
      text: 'Option B',
    },
  ],
};

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};
