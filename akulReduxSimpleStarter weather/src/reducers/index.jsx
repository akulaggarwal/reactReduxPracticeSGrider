import { combineReducers } from 'redux';
// import BooksReducer from './reducer_books';
// import ActiveBook from './reducer_active_book';

//any key below is global app-state key
const rootReducer = combineReducers({
  state: (state = {}) => state
})

export default rootReducer;
