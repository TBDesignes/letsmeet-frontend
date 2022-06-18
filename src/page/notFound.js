import React from 'react';
import {
  Button,
  Stack,
  Typography,
  Box,
} from '@mui/material';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Stack direction="column" alignItems="center" justifyContent="center" minHeight="100vh" textAlign="center">
      <Typography variant="h3">404.</Typography>
      <Typography variant="h4">Кажется, Вы ошиблись дверью</Typography>
      <Box pt={4}>
        <Button component={Link} to="/" variant="contained">На главную</Button>
      </Box>
    </Stack>
  );
}

export default NotFound;
