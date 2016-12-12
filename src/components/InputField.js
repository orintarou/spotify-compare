import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {getArtists} from '../actions/actions';
import {setInputFieldValue} from '../actions/actions';

import {connect} from 'react-redux';

export default class InputField extends Component {
  constructor(props) {
    super(props);
    const {dataType} = this.props;
    this.searchItems = this.searchItems.bind(this, dataType);
    this.setInputFieldValue = this.setInputFieldValue.bind(this);
  }

  setInputFieldValue(event) {
    const {dispatch} = this.props;
    dispatch(setInputFieldValue(event.target.value));
  }

  searchItems(itemType) {
    const value = this.props.value;
    const {dispatch} = this.props; // Obtain the dispatch function from the store object passed to the App component by the 'Provider' parent component
    if (itemType === 'artists') {
      dispatch(getArtists(value));
    }
  }

  render() {

    return (
      <div className="container">
        <div>
          <h2>Artist Name</h2>
            <form>
              <div className="col-md-6 col-md-offset-3">
                <div className="input-group">
                  <input ref="artistName:" type="text" className="form-control" onChange={this.setInputFieldValue} />
                  <button className="btn" type="button" onClick={this.searchItems}>enter</button>
                </div>
              </div>
            </form>
        </div>
      </div>
    );
  }
}
