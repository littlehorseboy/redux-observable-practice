import { createStore, applyMiddleware, combineReducers } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import pingingReducer from './pinging/pinging';
import { pingingEpic } from '../actions/pinging/pinging';

const rootReducer = combineReducers({
  pingingReducer,
});

const rootEpic = combineEpics(pingingEpic);

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(
    epicMiddleware,
  ),
);

epicMiddleware.run(rootEpic);

export type storeTypes = ReturnType<typeof rootReducer>;

export default store;
