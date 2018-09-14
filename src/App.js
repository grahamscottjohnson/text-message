import React, { Component } from 'react';
import './App.css';
import Texts from './Texts';

class App extends Component {
  render() {
    return (
      <div className="text-container">
        <Texts page={1} textsPerPage={10} />
      </div>
    );
  }
}

export default App;
