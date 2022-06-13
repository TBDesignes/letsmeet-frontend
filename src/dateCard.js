import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Stack,
  Tooltip,
} from '@mui/material';
import { Add } from '@mui/icons-material';
import { red, blue } from '@mui/material/colors';
import { sameDay } from './util/datef';
import HOLIDAYS from './misc/holidays';
import WeatherContext from './weatherContext';
import { weatherAPI } from './util';

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

  const {
    icon: weatherIcon,
    text: weatherText,
  } = weatherAPI.forecastForDate(weather, date)?.day?.condition || {};

  return (
    <Card
      sx={{ opacity: isCurrentMonth ? 1 : 0.5, border: isToday && `solid 4px ${blue[500]}` }}
      variant="outlined"
    >
      <Stack
        direction="row"
        // bgcolor={isToday ? 'primary.light' : undefined}
        p={1}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          variant="h5"
          sx={{
            color: ((isWeekend || holiday) && red[500]),
          }}
        >
          {`${date.getDate()}`}
        </Typography>
        {weatherIcon ? (
          <Tooltip title={weatherText}>
            <img src={weatherIcon} width="40" height="40" alt="s" />
          </Tooltip>
        ) : null}
      </Stack>
      <CardContent>
        <IconButton size="small"><Add /></IconButton>
      </CardContent>
    </Card>
  );
}

DateCard.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  referenceDate: PropTypes.instanceOf(Date).isRequired,
};

export default DateCard;
