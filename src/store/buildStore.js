import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Map} from 'immutable';
import {combineReducers} from 'redux';
import artistReducer from '../reducers/artistsReducer';
import inputReducer from '../reducers/inputReducer';

const rootReducer = combineReducers({
  artists: artistReducer,
  inputs: inputReducer
});

const createASynchStore = applyMiddleware(thunkMiddleware)(createStore);

export default function buildStore(initialState) {
  const store = createASynchStore(rootReducer, initialState);

  return store;
}
