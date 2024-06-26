import {List, Map, fromJS} from 'immutable';
import * as types from '../constants/DataTypes';

//initial state of artist reducer.
const initialState = Map({
  isRequesting: false,
  items: List(),
  data: Map()
});

//in process of getting artist from Spotify API.
function getArtists(state) {
  let newState = Map({
    isRequesting: true
  });
  newState = state.merge(newState);
  return newState;
}

//in process of getting artist data from Spotify API
function getArtistData(state) {
  let newState = Map({
    isRequesting: true
  });
  newState = state.merge(newState);
  return newState;
}


function populateArtists(state, artistsList) {
  var newState = fromJS({
    items: artistsList.items, // Return items property of Spotify response, which contains the array of artists
    isRequesting: false
  });
  newState = state.merge(newState);
  return newState;
}


function populateArtistData(state, artist) {
  var newState = fromJS({
    data: artist,
    isRequesting: false
  });
  newState = state.merge(newState);
  return newState;
}

//main artist reducer.  Four different cases
export default function artists(state=initialState, action) {
  switch(action.type) {
    case types.RECEIVE_ARTISTS:
      console.log('receive');
      return populateArtists(state, action.artists);

    case types.REQUEST_ARTISTS:
      return getArtists(state);

    case types.RECEIVE_ARTIST_data:
      return populateArtistData(state, action.artist);

    case types.REQUEST_ARTIST_data:
      return getArtistData(state);

    default:
      return state;
  }
}
