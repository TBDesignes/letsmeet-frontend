import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import WeatherContext from './component/weatherStatus/weatherContext';
import CalendarPage from './page/calendar';
import ProfilePage from './page/profile';
import { weatherAPI } from './util';
import Layout from './layout';
import NotFound from './page/notFound';

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
  const [weather, setWeather] = useState(undefined);

  useEffect(() => {
    if (weather === undefined) {
      weatherAPI.fetchWeather().then(setWeather);
      setWeather(null);
    }
  });

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <WeatherContext.Provider value={weather}>
          <CssBaseline />
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<CalendarPage />} />
                <Route path="calendar" element={<CalendarPage />} />
                <Route path="profile" element={<ProfilePage />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </WeatherContext.Provider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

const domContainer = document.querySelector('#reactRoot');
const root = createRoot(domContainer);
root.render(<Main />);
