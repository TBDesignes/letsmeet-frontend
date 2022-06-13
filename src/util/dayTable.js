import { daysInMonth, firstDayOfMonth } from './datef';

const DAYS_IN_WEEK = 7;
const WEEKS_IN_MONTH = 4;
const REGULAR_MONTH = DAYS_IN_WEEK * WEEKS_IN_MONTH;

const dayTable = (forDate) => {
  const extraDays = daysInMonth(forDate) - REGULAR_MONTH;
  const firstDay = firstDayOfMonth(forDate);
  const rowsToDisplay = WEEKS_IN_MONTH + Math.ceil((extraDays + firstDay) / 7);
  const days = [];

  for (let i = 0; i < rowsToDisplay * DAYS_IN_WEEK; i += 1) {
    const iDate = new Date(forDate.getFullYear(), forDate.getMonth(), i + 1 - firstDay);

    days.push(iDate);
  }

  return days;
};

export default dayTable;
