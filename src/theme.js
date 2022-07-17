import { extendTheme } from '@chakra-ui/react';

const AppTheme = extendTheme({
  fonts: {
    heading: '"Roboto", sans-serif',
    body: '"Roboto", sans-serif',
    mono: '"Roboto", sans-serif',
  },
  colors: {
    app: {
      accent: '#284b63',
      white: '#ffffff',
      light: '#d9d9d9',
      regular: '#3c6e71',
      dark: '#353535',
    },
  },
});

export default AppTheme;
