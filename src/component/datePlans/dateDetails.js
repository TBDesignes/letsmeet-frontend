import React, { useContext } from 'react';
import {
  Accordion, Box, Button, Center, Flex, Text,
} from '@chakra-ui/react';
import { IoAddOutline } from 'react-icons/io5';
import { DateTime } from 'luxon';
import PropTypes from 'prop-types';
import Plan from './plan';
import WeatherStatus from '../weatherStatus';
import { WeatherContext } from '../weatherContext';

const formatTemperature = (t) => {
  const formatted = Number.parseInt(t, 10);

  if (formatted > 0) {
    return `+${formatted}`;
  }

  return String(formatted);
};

const formatWind = (w) => `${Number.parseInt(w * 1000 / 3600, 10)} м\\с`;

function DateDetails({ date }) {
  const weather = useContext(WeatherContext);
  const forecast = weather.forecastForDate(date)?.day;

  return (
    <Box>
      {forecast
        ? (
          <Flex
            justifyContent="space-between"
            alignItems="center"
            gap="4"
            mb="2"
            bg="app.accent"
            rounded="4"
            p="1"
            color="app.white"
            px="4"
            maxW="250px"
            mx="auto"
          >
            <Text>{formatWind(forecast.maxwind_kph)}</Text>
            <Text>{`${formatTemperature(forecast.mintemp_c)} … ${formatTemperature(forecast.maxtemp_c)}`}</Text>
            <WeatherStatus forecast={forecast.condition} />
          </Flex>
        )
        : null}
      <Accordion>
        <Plan
          title="Прогулка в парке"
          description="С мороженым и арбузом"
          date={DateTime.now()}
        />
        <Plan
          title="Поход в кино"
          description="Новая комедия вышла, надо сходить"
          date={DateTime.now().plus({ hour: 2 })}
        />
      </Accordion>
      <Center mt="4">
        <Button
          variant="solid"
          colorScheme="teal"
          rightIcon={<IoAddOutline size="30px" />}
        >
          Добавить
        </Button>
      </Center>
    </Box>
  );
}

DateDetails.propTypes = {
  date: PropTypes.instanceOf(DateTime).isRequired,
};

export default DateDetails;
