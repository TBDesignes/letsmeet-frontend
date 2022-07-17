import {
  Box, Button, Center, Heading, Stack, Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Center
      minHeight="100vh"
    >
      <Stack
        textAlign="center"
        direction="column"
      >
        <Heading>404.</Heading>
        <Text>Кажется, Вы ошиблись дверью</Text>
        <Box pt={4}>
          <Button as={Link} to="/">На главную</Button>
        </Box>
      </Stack>
    </Center>
  );
}

export default NotFound;
