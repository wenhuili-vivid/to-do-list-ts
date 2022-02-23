import React from 'react';
import {Meta, Story} from "@storybook/react";
import Calendar, {CalendarProps} from "./Calendar";

export default {
  title: 'Components/Calendar',
  component: Calendar,
} as Meta;

const Template: Story<CalendarProps> = (args: CalendarProps) => <Calendar {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  checkedDate: new Date(),
  onAddDateChecked: (deadline: Date) => {

  },
};
