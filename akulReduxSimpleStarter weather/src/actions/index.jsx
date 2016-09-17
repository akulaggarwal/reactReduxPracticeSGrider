import axios from 'axios';

const API_KEY = 'e05fbc14f8cdae72882efdde6b63eca5';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); //returns promise to request
  console.log('request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
