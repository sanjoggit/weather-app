import axios from 'axios';

const API_KEY = '2ff577ed809967150b0e02636d1eeacf';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?&APPID=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = async (city)=>{
  const url = `${ROOT_URL}&q=${city}&units=metric`;
  
  const request = await axios.get(url);
  return{
    type: FETCH_WEATHER,
    payload: request
  }
}
