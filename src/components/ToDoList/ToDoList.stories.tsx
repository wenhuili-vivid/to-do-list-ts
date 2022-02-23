import React from 'react';
import {Meta, Story} from "@storybook/react";
import ToDoList from "./ToDoList";

export default {
  title: 'Components/ToDoList',
  component: ToDoList,
} as Meta;

const Template: Story = (args) => <ToDoList {...args} />;

