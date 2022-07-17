import {
  Box, IconButton, Stack, Text,
} from '@chakra-ui/react';
import React from 'react';
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';
import DateCard from './dateCard';
import {
  datef,
  dayTable,
} from '../../util';

function CalendarHeader() {
  return (
    datef.DAY_NAMES.map((name) => (
      <Text
        textAlign="center"
      >
        {name}
      </Text>
    ))
  );
}

function Calendar({ forDate, onPrevDate, onNextDate }) {
  return (
    <Box
      boxShadow="md"
      p="4"
      rounded="4"
      bg="app.light"
    >
      <Stack
        mb="20px"
        justifyContent="flex-end"
        alignItems="center"
        direction="row"
      >
        <Text color="app.light">{forDate.getFullYear()}</Text>
        <IconButton h="6" onClick={onPrevDate}><IoArrowBackOutline /></IconButton>
        <Text>{datef.monthName(forDate)}</Text>
        <IconButton h="6" onClick={onNextDate}><IoArrowForwardOutline /></IconButton>
      </Stack>
      <Box display="grid" gridTemplateColumns="repeat(7, 1fr)" gap="4px">
        <CalendarHeader />
        {
          dayTable(forDate).map((date) => (
            <DateCard
              date={date}
              referenceDate={forDate}
            />
          ))
        }
      </Box>
    </Box>
  );
}

Calendar.propTypes = {
  forDate: PropTypes.instanceOf(Date).isRequired,
  onPrevDate: PropTypes.func.isRequired,
  onNextDate: PropTypes.func.isRequired,
};

export default Calendar;
