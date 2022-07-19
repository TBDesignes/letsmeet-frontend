import { action, makeObservable, observable } from 'mobx';
import WEATHER_DESCRIPTIONS from '../../misc/weather';

class WeatherStore {
  @observable weather;

  constructor() {
    makeObservable(this);
    this.fetchWeather();
  }

  @action.bound setWeather(w) {
    this.weather = w;
  }

  forecastForDate(forDate) {
    if (!this.weather) {
      return null;
    }

    const isoDate = forDate.toISODate();
    const forecast = this.weather.forecast.forecastday.find(({ date }) => date === isoDate);

    return forecast || null;
  }

  async fetchWeather() {
    // на бекэнд
    const weather = await fetch('https://api.weatherapi.com/v1/forecast.json?key=9d2da628cb00408d8f2133908221206&q=Tyumen&days=3&aqi=no&alerts=no')
      .then((result) => result.json());

    weather.forecast.forecastday.forEach(({ day: { condition } }) => {
      condition.icon = `/assets/weather/icon/${condition.icon.match(/\d{3}.png/)[0]}`;
      condition.text = WEATHER_DESCRIPTIONS.find(({ code }) => code === condition.code).day;
    });

    this.setWeather(weather);
  }
}

export default WeatherStore;
