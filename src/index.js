import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import WeatherContext from './component/weatherStatus/weatherContext';
import CalendarPage from './page/calendar';
import ProfilePage from './page/profile';
import { weatherAPI } from './util';
import Layout from './layout';
import NotFound from './page/notFound';
import AppTheme from './theme';

function Main() {
  const [weather, setWeather] = useState();

  useEffect(() => {
    if (weather === undefined) {
      weatherAPI.fetchWeather().then(setWeather);
      setWeather(null);
    }
  });

  return (
    <React.StrictMode>
      <ChakraProvider theme={AppTheme} resetCSS>
        <WeatherContext.Provider value={weather}>
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
      </ChakraProvider>
    </React.StrictMode>
  );
}

const domContainer = document.querySelector('#reactRoot');
const root = createRoot(domContainer);

root.render(<Main />);
