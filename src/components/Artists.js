import React, {Component} from 'react';
import {connect} from 'react-redux';
import ArtistCard from '../components/ArtistData';
import InputField from '../components/InputField';

export class Artists extends Component {


  renderArtists() {
    const numCardsPerRow = 5;
    const {dispatch} = this.props; // Obtain the dispatch function from the store object passed to the App component by the 'Provider' parent component
    const {items} = this.props.artists;
    const {input} = this.props.inputs;

    let result = [];

    result.push(<InputField dataType="artists" dispatch={dispatch} value={input} />);

    //iterate through items
    for (let i = 0; i < items.length; i += numCardsPerRow) {
      let artistCards = items
        .slice(i, i + numCardsPerRow)
        .map((artist, idx) => {
          return <ArtistCard key={artist.id} artist={artist} />
      });
      result.push(<div className="row equal" key={'songs-row-' + i}>{artistCards}</div>);
    }

    if (!result || result.length === 0) {
      return <InputField dataType="artists" dispatch={dispatch} value={input} />;
    }

    return result;
  }

  render() {
    return (
      <div>
        {this.renderArtists()}
      </div>
    );
  }
}

/*
* This function injects some of the fields of the application state into this component props.
*/
function mapStateToProps(state) {
  const {artists, inputs} = state;
  //need toJS to access data within artists and inputs.
  return {
    artists: artists.toJS(),
    inputs: inputs.toJS()
  };
}

export const ArtistsContainer = connect(mapStateToProps)(Artists);
