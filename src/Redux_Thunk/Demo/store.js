import {createStore, applyMiddleware,compose} from 'redux';
// import rootReducers from './Reducers/AllReducers';
import thunkMiddleware from 'redux-thunk'
import Reducers from './reducers/Reducers'

import {combineReducers} from 'redux';

// const initialState={}

const rootReducers=combineReducers({Reducers})

// const store= compose(applyMiddleware(thunkMiddleware)) (createStore)(rootReducers);
const store=  createStore(rootReducers,applyMiddleware(thunkMiddleware));

export default store;