export const MONTH_NAMES = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
export const DAY_NAMES = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
export const WORKDAY_NAMES = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт'];
export const WEEKEND_NAMES = ['Сб', 'Вс'];

export const daysInMonth = (d) => new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();

export const firstDayOfMonth = (d) => (new Date(d.getFullYear(), d.getMonth(), 1).getDay() + 6) % 7;

export const monthName = (d) => MONTH_NAMES[d.getMonth()];

export const dayName = (d) => DAY_NAMES[(d.getDay() + 6) % 7];

export const sameDay = (d1, d2) => d1.getFullYear() === d2.getFullYear()
  && d1.getMonth() === d2.getMonth()
  && d1.getDate() === d2.getDate();
