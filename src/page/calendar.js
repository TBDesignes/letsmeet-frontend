import { Flex, Heading } from '@chakra-ui/react';
import { DateTime } from 'luxon';
import React, { useState } from 'react';
import AppBar from '../component/appBar/appBar';
import Calendar from '../component/calendar';
import DatePlans from '../component/datePlans';

function CalendarPage() {
  const [navDate, setNavDate] = useState(DateTime.now());
  const [viewDate, setViewDate] = useState(null);

  return (
    <>
      <AppBar>
        <Heading textStyle="appBarHeader">Календарь</Heading>
      </AppBar>
      <Flex
        p="2"
        direction="row"
        justifyContent="space-between"
      >
        <Calendar
          forDate={navDate}
          selectedDate={viewDate}
          onPrevDate={
            () => setNavDate(navDate.minus({ month: 1 }))
          }
          onNextDate={
            () => setNavDate(navDate.plus({ month: 1 }))
          }
          onDateSelected={setViewDate}
        />
        <DatePlans
          date={viewDate}
        />
      </Flex>
    </>
  );
}

export default CalendarPage;
