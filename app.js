import React from 'react'
import ReactDOM from 'react-dom'

const counter = (state, action) => {
      return state;
}

var setName = function(e) {
    this.setState({value: e.target.value});
}

//DOM Component
const FirstArtist = ({
  value
}) => (
  <div>
    <input type="text" defaultValue={value}/>
  </div>
);

import { createStore } from 'redux';
const store = createStore(counter);

const render = () => {
  ReactDOM.render(
    <FirstArtist
      value={store.getState()}
    />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
