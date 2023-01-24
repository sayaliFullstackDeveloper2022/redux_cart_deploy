import { createStore, applyMiddleware, compose } from 'redux';
// import rootReducers from './Reducers/AllReducers';
import thunkMiddleware from 'redux-thunk'
import Reducers from './reducers/Reducers'
// import {composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import logger from 'redux-logger'

const rootReducer = combineReducers({ Reducers })
const middleware = [thunkMiddleware];
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));



const store=  createStore(rootReducer,applyMiddleware(...middleware));

if (process.env.NODE_ENV === "development"){
    middleware.push(logger)
}


    export default store;