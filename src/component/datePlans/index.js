import React from 'react';
import { DateTime } from 'luxon';
import PropTypes from 'prop-types';
import Paper from '../paper';

function DatePlans({ forDate }) {
  return (
    <Paper
      width="420px"
      height="100%"
    >
      {
        forDate ? (
          <div>{forDate.toFormat('DDD')}</div>
        ) : (
          <div>Выберите день</div>
        )
      }
    </Paper>
  );
}

DatePlans.propTypes = {
  forDate: PropTypes.instanceOf(DateTime).isRequired,
};

export default DatePlans;
