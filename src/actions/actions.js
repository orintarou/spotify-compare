import * as types from '../constants/DataTypes';
import SpotifyApi from '../constants/Spotifier';


export function getArtists(name) {
  SpotifyApi.setAccessToken('BQB_E7t9R1XsCRwWLU4Kfqh2RzYd074V6Dx8CEmgcNdm-YU_Es8cr51CnK5YzTYCbU1ZcB02Y3T9d2YgZXwk2NohYUPjk5_XPBIF4FnWEXUNFtIFuAn_VYo2t7le4_B7qpkMDA3kCZ0');
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
  SpotifyApi.setAccessToken('BQB_E7t9R1XsCRwWLU4Kfqh2RzYd074V6Dx8CEmgcNdm-YU_Es8cr51CnK5YzTYCbU1ZcB02Y3T9d2YgZXwk2NohYUPjk5_XPBIF4FnWEXUNFtIFuAn_VYo2t7le4_B7qpkMDA3kCZ0');
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
