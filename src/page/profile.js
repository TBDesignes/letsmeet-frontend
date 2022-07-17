import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import AppBar from '../component/appBar/appBar';

function ProfilePage() {
  return (
    <Box>
      <AppBar>
        <Heading color="app.light" fontSize="xl">Профиль</Heading>
      </AppBar>
      <Text>{'<Пустота>'}</Text>
    </Box>
  );
}

export default ProfilePage;
