import React from 'react';
import PropTypes from 'prop-types';
import BlueTooltip from '../blueTooltip';

function WeatherState({ forecast }) {
  if (forecast) {
    return (
      <BlueTooltip title={forecast.text}>
        <img src={forecast.icon} width="40" height="40" alt={forecast.text} />
      </BlueTooltip>
    );
  }

  return null;
}

WeatherState.propTypes = {
  forecast: PropTypes.objectOf({
    text: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
};

export default WeatherState;
