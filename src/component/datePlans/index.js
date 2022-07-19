import React from 'react';
import { Heading } from '@chakra-ui/react';
import { DateTime } from 'luxon';
import PropTypes from 'prop-types';
import Paper from '../paper';
import DateDetails from './dateDetails';

function DatePlans({ date }) {
  return (
    <Paper
      width="420px"
      height="100%"
    >
      <Heading
        as="h3"
        size="md"
        textAlign="center"
        color="app.accent"
        fontWeight="bold"
        mb={date ? '4' : undefined}
      >
        {
          date
            ? date.toFormat('DDD')
            : 'Выберите дату'
        }
      </Heading>
      {
        date
          ? <DateDetails date={date} />
          : null
      }
    </Paper>
  );
}

DatePlans.propTypes = {
  date: PropTypes.instanceOf(DateTime).isRequired,
};

export default DatePlans;
