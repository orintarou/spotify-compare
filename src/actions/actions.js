import * as types from '../constants/DataTypes';
import SpotifyApi from '../constants/Spotifier';


import axios from 'axios';
import qs from 'qs';

export function getAuth(){
    const headers = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      auth: {
        username: '02cfa8f9a9d74848b8e65e4ad1cdcd60',
        password: 'f83043742a1944519a40b81278849db5',
      },
    };
    const data = {
      grant_type: 'client_credentials',
    };

    const response = axios.post(
        'https://accounts.spotify.com/api/token',
        qs.stringify(data),
        headers
      ).then((response) => {
        SpotifyApi.setAccessToken(response.data.access_token);
        return response.data.access_token;
    });
}

getAuth();

export function getArtists(name) {
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
