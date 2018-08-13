import React, { Component } from 'react';
import Boxes from '../Boxes/Boxes';
import './Board.css';
import { lines } from '../../assets/configs/lines'

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      xCount: 0,
      oCount: 0
    };
  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
      xCount: this.state.xIsNext ? this.state.xCount+1 : this.state.xCount,
      oCount: this.state.xIsNext ? this.state.oCount : this.state.oCount+1
    });
  }
  renderSquare(i) {
    return <Boxes value={this.state.squares[i]} 
    onClick={() => this.handleClick(i)}/>;
  }
  calculateWinner(squares) {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  resetGame(){
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: this.state.xIsNext,
      xCount: 0,
      oCount: 0
    })
  }
  render() {
    const winner = this.calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status =  winner + ' Wins the game' ;
    } else {
      status = 'Next player : ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div className="container">
        <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
        </div>
        <div className="col-md-4 col-sm-12 col-xs-12">
          <div className="info-tab">
            <div className="moves-heading">
              moves
            </div>
            <div className="status">X : {this.state.xCount}</div>
            <div className="status">O : {this.state.oCount}</div>
            <div className="status">{status}</div>
            <a href="javascript:void(0)" onClick={() => this.resetGame()} className="reset-button">Play Again</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
