/* Packages */
import React, { Component } from 'react';

/* Componenets */
import Header from './header';
import Routes from './routes';

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
