import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
// import ActiveBook from './reducer_active_book';

//any key below is global app-state key
const rootReducer = combineReducers({
  weather: WeatherReducer
})

export default rootReducer;
