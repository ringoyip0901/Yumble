import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/reducers.js';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger'
import { count, search, fetchYelp } from "./actions/actions"

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;