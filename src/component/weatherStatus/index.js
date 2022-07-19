import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '@chakra-ui/react';

function WeatherStatus({ forecast }) {
  if (forecast) {
    return (
      <Tooltip label={forecast.text}>
        <img src={forecast.icon} width="40" height="40" alt="Прогноз" />
      </Tooltip>
    );
  }

  return null;
}

WeatherStatus.propTypes = {
  forecast: PropTypes.objectOf({
    text: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
};

export default WeatherStatus;
