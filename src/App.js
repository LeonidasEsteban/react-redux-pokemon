import React, { Component } from 'react';
import Pokemon from './components/Pokemon.js';
import Search from './components/Search.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokemon />
        <Search />
      </div>
    );
  }
}

export default App;
