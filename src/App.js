/* Packages */
import React, { Component } from 'react';

/* Componenets */
import Header from './Header';
import Routes from './Routes';

/* Render */
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
