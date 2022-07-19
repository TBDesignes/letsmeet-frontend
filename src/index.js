import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { Settings } from 'luxon';
import CalendarPage from './page/calendar';
import ProfilePage from './page/profile';
import Layout from './layout';
import NotFound from './page/notFound';
import AppTheme from './theme';
import { WeatherStore, WeatherContext } from './component/weatherContext';

Settings.defaultLocale = 'ru';

const weatherStore = new WeatherStore();

function Main() {
  return (
    <React.StrictMode>
      <ChakraProvider theme={AppTheme} resetCSS>
        <WeatherContext.Provider value={weatherStore}>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<CalendarPage />} />
                <Route path="calendar" element={<CalendarPage />} />
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
