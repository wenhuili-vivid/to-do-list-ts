import React from 'react';
import { AddButton } from './AddButton';

export default {
  title: 'Components/AddButton',
  component: AddButton,
};
function Template(args) {
  return <AddButton {...args} />;
}
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: '+ Create',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: '+ Create',
};

export const Label = Template.bind({});
Label.args = {
  children: '+ Create',
};
