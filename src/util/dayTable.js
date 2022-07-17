const dayTable = (forDate) => {
  const firstDay = forDate.startOf('month');
  const lastDay = forDate.endOf('month');
  const extraDays = 7 - lastDay.weekday;
  const days = [];

  for (let i = 1 - firstDay.weekday; i < lastDay.day + extraDays; i += 1) {
    days.push(firstDay.plus({ days: i }));
  }

  return days;
};

export default dayTable;
