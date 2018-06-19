import { createStore,combineReducers,applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

/** Authentication module */
import offerReducer from '../../app/usecases/offer/offerReducer'
import navigationReducer from '../navigation/navigationReducer'

import {createLogger} from 'redux-logger';

import {
    createReactNavigationReduxMiddleware,
  } from 'react-navigation-redux-helpers';

const reactNavigationMiddleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.navigationReducer,
  );

const logger = createLogger();

const combinedReducers = combineReducers({
    offerReducer,
    navigationReducer
})

const middlewares = [thunkMiddleware,logger,reactNavigationMiddleware ]


// Centralized application state
// For more information visit http://redux.js.org/
const store = createStore(combinedReducers, applyMiddleware(...middlewares));

export default store;
