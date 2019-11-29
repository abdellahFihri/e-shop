import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'// a middleware

import rootReducer from '../root-reducer'
const middlewares=[logger]; // all middlewares will go here

const store=createStore(rootReducer,applyMiddleware(...middlewares))//and we spread all middlewares here
export default store