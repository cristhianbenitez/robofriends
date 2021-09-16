import { combineReducers } from 'redux';
import requestRobots from './requestRobots';
import searchRobots from './searchRobots';

const reducers = combineReducers({
  requestRobots: requestRobots,
  searchRobots: searchRobots
});

export default reducers;