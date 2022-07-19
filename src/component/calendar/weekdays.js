import React from 'react';
import { Text } from '@chakra-ui/react';

const DAY_NAMES = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

function Weekdays() {
  return (
    DAY_NAMES.map((name, idx) => (
      <Text
        textAlign="center"
        color={idx > 4 && 'red.500'}
      >
        {name}
      </Text>
    ))
  );
}

export default Weekdays;
