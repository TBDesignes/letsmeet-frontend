import {
  Box, Heading, IconButton, Stack,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { IoAddOutline } from 'react-icons/io5/';
import { sameDay } from '../../util/datef';
import HOLIDAYS from '../../misc/holidays';
import WeatherContext from '../weatherStatus/weatherContext';
import WeatherState from '../weatherStatus';
import { weatherAPI } from '../../util';

function DateCard({
  date,
  referenceDate,
}) {
  const weather = useContext(WeatherContext);
  const currentDate = new Date();
  const isToday = sameDay(currentDate, date);
  const isCurrentMonth = referenceDate.getMonth() === date.getMonth();
  const isWeekend = date.getDay() === 0 || date.getDay() === 6;
  const holiday = HOLIDAYS.find(
    ({ day, month }) => day === date.getDate() && month === date.getMonth(),
  );

  const forecast = weatherAPI.forecastForDate(weather, date)?.day?.condition;

  return (
    <Box
      opacity={isCurrentMonth ? 1 : 0.5}
      w="160px"
      h="100px"
      p="2"
      boxShadow="md"
      bg="white"
      borderLeft={isToday ? '4px' : '0'}
      borderLeftRadius="2px"
      borderColor="app.regular"
    >
      <Stack
        direction="row"
        p="1"
        justifyContent="space-between"
        minH="48px"
        alignItems="center"
      >
        <Heading
          size="md"
          color={((isWeekend || holiday) && 'red.500')}
        >
          {`${date.getDate()}`}
        </Heading>
        <WeatherState forecast={forecast} />
      </Stack>
      <div>
        <IconButton rounded="full" size="xs"><IoAddOutline /></IconButton>
      </div>
    </Box>
  );
}

DateCard.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  referenceDate: PropTypes.instanceOf(Date).isRequired,
};

export default DateCard;
