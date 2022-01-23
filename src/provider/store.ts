import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { mainReducer } from './reducer/main.reducer';

const middleware = process.env.NODE_ENV === 'development' ? [logger] : [];
const initState = {};

export const store = createStore(
    mainReducer,
    initState,
    composeWithDevTools(applyMiddleware(...middleware))
);
