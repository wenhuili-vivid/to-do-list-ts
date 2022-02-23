import React from 'react';
import { action } from '@storybook/addon-actions';
import { DeleteButton, DeleteButtonProps } from './DeleteButton';
import { Meta, Story } from "@storybook/react";

export default {
  title: 'Components/DeleteButton',
  component: DeleteButton,
} as Meta;

const Template: Story<DeleteButtonProps> = (args: DeleteButtonProps) => <DeleteButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: 'Delete',
  onClick: action('clicked')
};
