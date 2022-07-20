import React, { useContext } from 'react';
import {
  Accordion, Box, Button, Center, Flex, Heading, Text,
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
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mb="2"
        py="2"
      >
        <Heading
          as="h4"
          fontSize="2xl"
          ml="4"
        >
          {date.toFormat('d MMMM')}
        </Heading>
        {forecast
          ? (
            <Flex
              justifyContent="space-between"
              alignItems="center"
              gap="4"
              bg="app.accent"
              rounded="4"
              px="2"
              py="1"
              color="app.white"
            >
              <Text>{formatWind(forecast.maxwind_kph)}</Text>
              <Text>{`${formatTemperature(forecast.mintemp_c)} … ${formatTemperature(forecast.maxtemp_c)}`}</Text>
              <WeatherStatus forecast={forecast.condition} />
            </Flex>
          )
          : null}
      </Flex>
      <Accordion defaultIndex={[0]}>
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
