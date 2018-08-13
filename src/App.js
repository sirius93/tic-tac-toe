import React, { Component } from 'react';
import logo from './logo.svg';
import Board from '../src/Components/Board/Board'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="Board">
                <Board/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
