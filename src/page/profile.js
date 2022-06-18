import React from 'react';
import {
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

const weatherNotify = () => new Notification('Прогноз погоды обновился');

const testNotify = () => {
  if ('Notification' in window) {
    if (Notification.permission === 'granted') {
      weatherNotify();
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission(() => testNotify());
    }
  }
};

function ProfilePage() {
  return (
    <Container>
      <Paper>
        <Stack direction="column" alignItems="center" justifyContent="center" textAlign="center" minHeight="300px">
          <Typography variant="h3">{'<Пустота>'}</Typography>
        </Stack>
        <Button onClick={testNotify}>Тест уведомлений</Button>
      </Paper>
    </Container>
  );
}

export default ProfilePage;
