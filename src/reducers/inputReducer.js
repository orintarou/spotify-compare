import {List, Map} from 'immutable';
import * as types from '../constants/DataTypes';

//Maps empty string to input on page-load
const initialState = Map({
  input: ''
});

//update state with input value
function setInputValue(state, value) {
  let newState = Map({
    input: value
  });

  //reducer must be a pure function
  newState = state.merge(newState);
  return newState;
}

//main input reducer
export default function artists(state=initialState, action) {
  switch(action.type) {

    //if input value exists
    case types.SET_INPUT_VALUE:
      return setInputValue(state, action.value);

    default:
      return state;
  }
}
