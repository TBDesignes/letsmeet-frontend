import { Box, chakra } from '@chakra-ui/react';

const Paper = chakra(Box, {
  baseStyle: {
    boxShadow: 'sm',
    p: '4',
    rounded: '4',
    bg: 'app.white',
  },
});

export default Paper;
