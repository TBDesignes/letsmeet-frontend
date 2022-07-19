import {
  Box, IconButton, Stack, Text,
} from '@chakra-ui/react';
import React from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import DateCard from './dateCard';
import { dayTable } from '../../util';
import Weekdays from './weekdays';
import Paper from '../paper';

function Calendar({
  forDate,
  onPrevDate,
  onNextDate,
  onDateSelected,
  selectedDate,
}) {
  return (
    <Paper>
      <Stack
        mb="20px"
        justifyContent="flex-end"
        alignItems="center"
        direction="row"
      >
        <Text>{forDate.year}</Text>
        <IconButton size="sm" onClick={onPrevDate}><IoChevronBack /></IconButton>
        <Text
          minW="90px"
          textAlign="center"
        >
          {forDate.monthLong}
        </Text>
        <IconButton size="sm" onClick={onNextDate}><IoChevronForward /></IconButton>
      </Stack>
      <Box display="grid" gridTemplateColumns="repeat(7, 1fr)" gap="4px">
        <Weekdays />
        {
          dayTable(forDate).map((date) => (
            <DateCard
              date={date}
              referenceDate={forDate}
              onClick={onDateSelected}
              isSelected={selectedDate?.hasSame(date, 'day')}
            />
          ))
        }
      </Box>
    </Paper>
  );
}

Calendar.propTypes = {
  forDate: PropTypes.instanceOf(DateTime).isRequired,
  onPrevDate: PropTypes.func.isRequired,
  onNextDate: PropTypes.func.isRequired,
  onDateSelected: PropTypes.func.isRequired,
  selectedDate: PropTypes.instanceOf(DateTime),
};

Calendar.defaultProps = {
  selectedDate: null,
};

export default Calendar;
