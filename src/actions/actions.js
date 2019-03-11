import * as types from '../constants/DataTypes';
import SpotifyApi from '../constants/Spotifier';


export function getArtists(name) {
  SpotifyApi.setAccessToken('BQCMsAJ8qi3MdvvpBvYe4yfUX45IpKXzA5bkselMoVXKEdSv_Obvg9xJ6P_1CSBLei24m8KUWC3GtF_6AbGgFUetkeg4zv5LRBkqDtqmANMTWL5TrGfZBvain1UkCq8XT6z_ymrta88');
  return dispatch => {
    dispatch(requestArtists(name));
    return SpotifyApi.searchArtists(name)
      .then(json => dispatch(receiveArtists(json)))
  };
}

export function setInputFieldValue(name) {
  return {
    type: types.SET_INPUT_VALUE,
    value: name
  }
}

function receiveArtists(json) {
  return {
    type: types.RECEIVE_ARTISTS,
    artists: json.artists
  };
}

function requestArtists() {
  return {
    type: types.REQUEST_ARTISTS
  };
}

export function getArtistDetails(artistId) {
  SpotifyApi.setAccessToken('BQCMsAJ8qi3MdvvpBvYe4yfUX45IpKXzA5bkselMoVXKEdSv_Obvg9xJ6P_1CSBLei24m8KUWC3GtF_6AbGgFUetkeg4zv5LRBkqDtqmANMTWL5TrGfZBvain1UkCq8XT6z_ymrta88');
  return dispatch => {
    dispatch(requestArtistDetails(artistId));
    return SpotifyApi.getArtist(artistId)
      .then(json => dispatch(receiveArtistDetails(json)))
      .catch(ex => {
        console.log('ex', ex);
      })
  };
}

function receiveArtistDetails(json) {
  return {
    type: types.RECEIVE_ARTIST_DETAILS,
    artist: json
  };
}

function requestArtistDetails() {
  return {
    type: types.REQUEST_ARTIST_DETAILS
  };
}
