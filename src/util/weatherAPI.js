import WEATHER from '../misc/weather';

// АХТУНГ!!! Вынести эту штуку на бэкенд, когда он будет
export const fetchWeather = () => (
  fetch('https://api.weatherapi.com/v1/forecast.json?key=9d2da628cb00408d8f2133908221206&q=Tyumen&days=3&aqi=no&alerts=no')
    .then((result) => result.json())
);
/// КОНЕЦ АХТУНГА!!!

export const forecastForDate = (weather, forDate) => {
  if (!weather) {
    return false;
  }

  const day = forDate.getDate();
  const month = forDate.getMonth() + 1;
  const year = forDate.getFullYear();
  const isoDate = `${year}-${month > 9 ? month : '0'.concat(month)}-${day > 9 ? day : '0'.concat(day)}`;

  const forecast = weather.forecast.forecastday.find(({ date }) => date === isoDate);

  if (forecast) {
    const { condition } = forecast.day;

    condition.icon = `/assets/weather/icon/${condition.icon.match(/\d{3}.png/)[0]}`;
    condition.text = WEATHER.find(({ code }) => code === condition.code).day;
  }

  return forecast;
};

export default forecastForDate;
