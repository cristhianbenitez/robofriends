import { createStore, applyMiddleware } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(ThunkMiddleware));

export default store;
