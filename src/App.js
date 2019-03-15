import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">Column one</div>
          <div className="col">
            <i className="fas fa-home" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
