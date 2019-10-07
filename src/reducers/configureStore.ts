import { createStore, applyMiddleware, combineReducers } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import pingingReducer from './pinging/pinging';
import { pingingEpic } from '../actions/pinging/pinging';
import { fetchGithubUserReducer, isFetchingGithubUserReducer } from './fetchGithubUser/fetchGithubUser';
import { fetchUserEpic } from '../actions/fetchGithubUser/fetchGithubUser';
import counterReducer from './counter/counter';
import { incrementIfOddEpic } from '../actions/counter/counter';

const rootReducer = combineReducers({
  pingingReducer,
  fetchGithubUserReducer,
  isFetchingGithubUserReducer,
  counterReducer,
});

const rootEpic = combineEpics(
  pingingEpic,
  fetchUserEpic,
  incrementIfOddEpic,
);

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
