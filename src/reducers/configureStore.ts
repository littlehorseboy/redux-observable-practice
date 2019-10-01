import { createStore, applyMiddleware, combineReducers } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import pingingReducer from './pinging/pinging';
import { pingingEpic } from '../actions/pinging/pinging';
import fetchGithubUserReducer from './fetchGithubUser/fetchGithubUser';
import { fetchUserEpic } from '../actions/fetchGithubUser/fetchGithubUser';

const rootReducer = combineReducers({
  pingingReducer,
  fetchGithubUserReducer,
});

const rootEpic = combineEpics(
  pingingEpic,
  fetchUserEpic,
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
