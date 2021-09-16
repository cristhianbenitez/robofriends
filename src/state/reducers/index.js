import { combineReducers } from 'redux';
import searchField from './searchField';
import robots from './robots';
const reducers = combineReducers({
  searchField: searchField,
  robots: robots
});

export default reducers;
