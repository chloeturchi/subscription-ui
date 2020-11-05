import React from 'react';

import { SubmitInput } from './SubmitInput';

export default {
  title: 'components/SubmitInput',
  component: SubmitInput,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <SubmitInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "S'inscrire",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "S'inscrire",
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: "S'inscrire",
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: "S'inscrire",
};
