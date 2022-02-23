const transfer = (currentDate: Date, format: string) => {
  const date = new Date(currentDate);
  const o: {
    [k: string]: string | number;
  }  = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };

  if (/(y+)/.test(format)) {
    // eslint-disable-next-line no-param-reassign
    format = format.replace(
      RegExp.$1,
      (`${date.getFullYear()}`).substring(4 - RegExp.$1.length),
    );
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const k in o) {
    if (new RegExp(`(${k})`).test(format)) {
      // eslint-disable-next-line no-param-reassign
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length === 1
          ? `${o[k]}`
          : (`00${o[k]}`).substring((`${o[k]}`).length),
      );
    }
  }

  return format;
};

export const dateFormat = (unformatDate: Date, format: string, formatDateNullValue: string) => {
  if (!unformatDate) {
    if (formatDateNullValue) {
      return formatDateNullValue;
    }
    return '无';
  }

  const date = new Date(unformatDate);

  return transfer(date, format);
};

export const getHeaderContent = (date: Date) => {
  const currentDate = new Date(date);
  return dateFormat(currentDate, 'MM/yy', '');
};

export const getFirstDayOfMonth = (date: Date) => {
  const currentDate = new Date(date);
  currentDate.setDate(1);

  return currentDate;
};

export const getFirstDayOfCalendar = (date: Date) => {
  let currentDate = new Date(date);
  currentDate = new Date(
    currentDate.setDate(currentDate.getDate() - currentDate.getDay()),
  );
  // 如果当前日期大于当前月第一天，则需要减去7天
  if (currentDate > date) {
    currentDate = new Date(currentDate.setDate(currentDate.getDate() - 7));
  }

  return currentDate;
};

export const isCurrentMonth = (
  firstDayOfMonth: Date,
  date: Date,
) => firstDayOfMonth.getMonth() === date.getMonth();

export const isCurrentDay = (date: Date) => {
  const currentDate = new Date();
  return (
    date.getFullYear() === currentDate.getFullYear()
      && date.getMonth() === currentDate.getMonth()
      && date.getDate() === currentDate.getDate()
  );
};

export const isCheckedDate = (currentCheckedDay: Date, date: Date) => (
  date.getFullYear() === currentCheckedDay.getFullYear()
      && date.getMonth() === currentCheckedDay.getMonth()
      && date.getDate() === currentCheckedDay.getDate()
);

export const getFirstDayOfNextMonth = (firstDayOfCurrentMonth: Date) => new Date(
  firstDayOfCurrentMonth.getFullYear(),
  firstDayOfCurrentMonth.getMonth() + 1,
  1,
);

export const getFirstDayOfLastMonth = (firstDayOfCurrentMonth: Date) => new Date(
  firstDayOfCurrentMonth.getFullYear(),
  firstDayOfCurrentMonth.getMonth() - 1,
  1,
);
