import React from 'react';
import { Text } from '@chakra-ui/react';

const DAY_NAMES = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

function Weekdays() {
  return (
    DAY_NAMES.map((name) => (
      <Text
        textAlign="center"
      >
        {name}
      </Text>
    ))
  );
}

export default Weekdays;
