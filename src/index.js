import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Calendar from './calendar';
import Header from './header';
import WeatherContext from './weatherContext';
import { weatherAPI } from './util';

const theme = createTheme({
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          '&:last-child': {
            padding: 8,
          },
        },
      },
    },
  },
});

function Main() {
  const [viewDate, setViewDate] = useState(new Date());
  const [weather, setWeather] = useState(undefined);

  useEffect(() => {
    if (weather === undefined) {
      weatherAPI.fetchWeather().then(setWeather);
      setWeather(null);
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <WeatherContext.Provider value={weather}>
        <React.StrictMode>
          <CssBaseline />
          <Header />
          <Calendar
            forDate={viewDate}
            onPrevDate={
              () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))
            }
            onNextDate={
              () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))
            }
          />
        </React.StrictMode>
      </WeatherContext.Provider>
    </ThemeProvider>
  );
}

const domContainer = document.querySelector('#reactRoot');
const root = createRoot(domContainer);
root.render(<Main />);
