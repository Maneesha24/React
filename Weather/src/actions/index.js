import axios from 'axios';
const API_KEY = '273d9604736d9f07b0b9b1d1ed593641';
const root_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city) {
  const url = `${root_URL}&q=${city},india`;
  const request = axios.get(url);

  return{
    type : FETCH_WEATHER,
    payload : request
  };
}
