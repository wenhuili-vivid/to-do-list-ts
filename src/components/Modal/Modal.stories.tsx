import React from 'react';
import {Meta, Story} from "@storybook/react";
import Modal, {ModalProps} from "./Modal";

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args: ModalProps) => <Modal {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  onOpen: true,
  children: 'This is a modal!',
  top: '50px',
  left: '50px'
};
