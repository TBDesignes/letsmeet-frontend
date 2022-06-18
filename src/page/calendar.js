import React, { useState } from 'react';
import Calendar from '../component/calendar';

function CalendarPage() {
  const [viewDate, setViewDate] = useState(new Date());

  return (
    <Calendar
      forDate={viewDate}
      onPrevDate={
      () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))
    }
      onNextDate={
      () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))
    }
    />
  );
}

export default CalendarPage;
