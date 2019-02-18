import React, { Component } from 'react';
import Routes from './components/Routes'
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Routes />
      </div>
    );
  }
}

export default App;
