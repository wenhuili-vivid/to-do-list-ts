import React from 'react';
import {Meta, Story} from "@storybook/react";
import { action } from '@storybook/addon-actions';
import { AddButton, AddButtonProps } from './AddButton';

export default {
  title: 'Components/AddButton',
  component: AddButton,
} as Meta;

const Template: Story<AddButtonProps> = (args: AddButtonProps) => <AddButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: '+ Create',
  onClick: action('clicked')
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: '+ Create',
};

export const Label = Template.bind({});
Label.args = {
  children: '+ Create',
  onClick: action('clicked')
};
