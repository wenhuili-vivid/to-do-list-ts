import React, { useEffect, useState } from 'react';
import update from 'immutability-helper';
import {
  getFirstDayOfCalendar, isCheckedDate, isCurrentDay, isCurrentMonth,
} from './utils';
import { BodyWrapper, DaysInWeek, WeekLabel, WeekList } from './Calendar.style';

interface CalendarBodyProps {
  checkedDate: Date,
  firstDayOfMonth: Date,
  onAddDateChecked: (date: Date) => void
}

interface WeekItem {
  id: number,
  daysInWeek: DayItem[]
}

interface DayItem {
  date: Date,
  day: number | string,
  isCurrentMonth: boolean,
  isCurrentDay: boolean,
  isCheckedDay: boolean
}

function CalendarBody({ checkedDate, firstDayOfMonth, onAddDateChecked }: CalendarBodyProps) {
  const [weekValues, setWeekValues] = useState<WeekItem[]>([]);
  const weekLabels = ['Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thur.', 'Fri.', 'Sat.'];

  const setWeekValuesArray = () => {
    const newWeekValuesList = [];
    let dayOfCalendar = getFirstDayOfCalendar(firstDayOfMonth);

    for (let weekIndex = 0; weekIndex < 6; weekIndex += 1) {
      const weekItem: WeekItem = {
        id: weekIndex,
        daysInWeek: [],
      };
      for (let dayIndex = 0; dayIndex < 7; dayIndex += 1) {
        const dayItem: DayItem = {
          date: dayOfCalendar,
          day: dayOfCalendar.getDate(),
          isCurrentMonth: isCurrentMonth(firstDayOfMonth, dayOfCalendar),
          isCurrentDay: isCurrentDay(dayOfCalendar),
          isCheckedDay: isCheckedDate(checkedDate, dayOfCalendar),
        };
        weekItem.daysInWeek.push(dayItem);
        dayOfCalendar = new Date(dayOfCalendar.getTime() + 24 * 60 * 60 * 1000);
      }
      newWeekValuesList.push(weekItem);
      setWeekValues(newWeekValuesList);
    }
  };

  useEffect(() => {
    setWeekValuesArray();
  }, [firstDayOfMonth]);

  const handleDateChecked = (date: Date, weekIndex: number, dayIndex: number) => {
    setWeekValues(update(weekValues, {
      [weekIndex]: {
        daysInWeek: {
          [dayIndex]: { isCheckedDay: { $set: true } },
        },
      },
    }));
    onAddDateChecked(date);
  };

  return (
    <BodyWrapper>
      <WeekLabel>
        {weekLabels.map((label) => (
          <div key={label}>
            {label}
          </div>
        ))}
      </WeekLabel>
      <WeekList>
        {weekValues.map((week, weekIndex) => (
          <DaysInWeek key={week.id}>
            {week.daysInWeek.map((day, dayIndex) => (
              <div
                key={dayIndex}
                role="button"
                tabIndex={0}
                onClick={() => handleDateChecked(day.date, weekIndex, dayIndex)}
                onKeyDown={() => handleDateChecked(day.date, weekIndex, dayIndex)}
                className={`${day.isCurrentMonth ? 'current-month' : ''
                } ${day.isCurrentDay ? 'current-day' : ''
                } ${day.isCheckedDay ? 'checked-day' : ''}`}
              >
                {day.day}
              </div>
            ))}
          </DaysInWeek>
        ))}
      </WeekList>
    </BodyWrapper>
  );
}

export default CalendarBody;

