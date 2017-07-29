import axios from 'axios';
const API_KEY = process.env.API_KEY;
const BASE_URL =
  `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=imperial`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const fetchWeather = (city) => {
  const url = `${BASE_URL}&q=${city},us`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
