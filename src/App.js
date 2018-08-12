import React, { Component } from 'react';
import logo from './logo.svg';
import Board from '../src/Components/Board/Board'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tic Tac Toe</h1>
        </header>
        <div className="Board">
          <Board/>
        </div>
      </div>
    );
  }
}

export default App;
