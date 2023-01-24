import {createStore, applyMiddleware} from 'redux';
// import rootReducers from './Reducers/AllReducers';
import thunkMiddleware from 'redux-thunk'
import Note_Creator from './Reducers/Reducers'

import {combineReducers} from 'redux';

// const initialState={}

const rootReducers=combineReducers({Note_Creator})

const store= createStore(rootReducers,applyMiddleware(thunkMiddleware));

export default store;