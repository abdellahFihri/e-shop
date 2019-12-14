import {createStore,applyMiddleware} from 'redux'
import {persistStore} from 'redux-persist'//redux persist store state in loacal storage  npm add redux-persist
import logger from 'redux-logger'// a middleware

import rootReducer from '../root-reducer'
const middlewares=[logger]; // all middlewares will go here


export const store=createStore(rootReducer,applyMiddleware(...middlewares))//and we spread all middlewares here /we export store in caqse of using persistor
export const persistor=persistStore(store)// wraps aour store with the persistStore from persist redux(persisted version of store)
export default {store,persistor} // then we export store and persisted store to have access to both
