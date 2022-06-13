import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Container,
  Paper,
  Stack,
  IconButton,
  Typography,
} from '@mui/material';
import { red } from '@mui/material/colors';
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from '@mui/icons-material';
import DateCard from './dateCard';
import {
  datef,
  dayTable,
} from './util';

function CalendarHeader() {
  return (
    datef.DAY_NAMES.map((name) => (
      <Typography
        sx={{
          textAlign: 'center',
          color: datef.WEEKEND_NAMES.includes(name) ? red[500] : undefined,
        }}
      >
        {name}
      </Typography>
    ))
  );
}

function Calendar({ forDate, onPrevDate, onNextDate }) {
  return (
    <Container>
      <Paper sx={{ p: 2, bgcolor: '#f3f3f4' }}>
        <Stack marginBottom="20px" justifyContent="flex-end" alignItems="center" direction="row">
          <Typography>{forDate.getFullYear()}</Typography>
          <IconButton onClick={onPrevDate}><KeyboardArrowLeft /></IconButton>
          <Typography textAlign="center" sx={{ minWidth: 100 }}>{datef.monthName(forDate)}</Typography>
          <IconButton onClick={onNextDate}><KeyboardArrowRight /></IconButton>
        </Stack>
        <Box display="grid" gridTemplateColumns="repeat(7, 1fr)" gap="4px">
          <CalendarHeader />
          {
            dayTable(forDate).map((date) => (
              <DateCard
                date={date}
                referenceDate={forDate}
              />
            ))
          }
        </Box>
      </Paper>
    </Container>
  );
}

Calendar.propTypes = {
  forDate: PropTypes.instanceOf(Date).isRequired,
  onPrevDate: PropTypes.func.isRequired,
  onNextDate: PropTypes.func.isRequired,
};

export default Calendar;
