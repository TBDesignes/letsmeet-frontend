import { Flex, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import AppBar from '../component/appBar/appBar';
import Calendar from '../component/calendar';

function CalendarPage() {
  const [viewDate, setViewDate] = useState(new Date());

  return (
    <>
      <AppBar>
        <Heading color="app.light" fontSize="xl">Календарь</Heading>
      </AppBar>
      <Flex
        p="2"
        direction="row"
      >
        <Calendar
          forDate={viewDate}
          onPrevDate={
            () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))
          }
          onNextDate={
            () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))
          }
        />
      </Flex>
    </>
  );
}

export default CalendarPage;
