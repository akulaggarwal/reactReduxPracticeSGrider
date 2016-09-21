import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
  console.log('Action received', action);
  if(action.type === FETCH_WEATHER) {
    console.log('city entered');
    console.log(action);
    console.log('data', action.payload.data);
    // console.log('spread', [action.payload.data, ...'hey']);
    return [action.payload.data, ...state];
  }
  return state;
}
