import { createStore, applyMiddleware, combineReducers } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const logger = createLogger();
const store = createStore(reducers, applyMiddleware(ThunkMiddleware, logger));

export default store;
