import React from 'react'
import ReactDOM from 'react-dom'

const counter = (state = "", action) => {
  switch (action.type) {
    case 'NEWNAME':
      return action.value;
    default:
      return state;
  }
}

//DOM Component
const FirstArtist = ({
  value
}) => (
  <div>
    <input type="text" onChange={store.update.bind(this)} value={value}/>
  </div>
);

import { createStore } from 'redux';
const store = createStore(counter);

store.update = function(event){
  var name = event.target.value;
  store.dispatch({type: 'NEWNAME', value: name});
}

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
