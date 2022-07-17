import {
  Box, Heading, Stack,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import HOLIDAYS from '../../misc/holidays';
import WeatherContext from '../weatherStatus/weatherContext';
import WeatherState from '../weatherStatus';
import { weatherAPI } from '../../util';

function DateCard({
  date,
  referenceDate,
  onClick,
}) {
  const weather = useContext(WeatherContext);
  const currentDate = DateTime.now();
  const isToday = currentDate.hasSame(date, 'day');
  const isCurrentMonth = referenceDate.month === date.month;
  const isWeekend = date.weekday === 6 || date.weekday === 7;
  const holiday = HOLIDAYS.find(
    ({ day, month }) => day === date.day && month === date.day,
  );

  const forecast = weatherAPI.forecastForDate(weather, date)?.day?.condition;

  return (
    <Box
      opacity={isCurrentMonth ? 1 : 0.5}
      w="160px"
      h="100px"
      p="2"
      boxShadow="md"
      borderRadius="sm"
      bg="white"
      borderWidth="4px"
      borderColor="white"
      borderLeftColor={isToday ? 'app.regular' : 'white'}
      transition="all 0.1s ease-in"
      _hover={{
        borderColor: 'app.regular',
      }}
      _active={{
        transform: 'scale(0.95)',
        transition: 'transform 0.1s ease-out',
      }}
      onClick={() => onClick(date)}
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
          {`${date.day}`}
        </Heading>
        <WeatherState forecast={forecast} />
      </Stack>
    </Box>
  );
}

DateCard.propTypes = {
  date: PropTypes.instanceOf(DateTime).isRequired,
  referenceDate: PropTypes.instanceOf(DateTime).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DateCard;
