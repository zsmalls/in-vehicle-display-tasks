import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// how do i get ract to remember the state -- aka if a button is pushed but maintain
// original code that show the numbers

//original code here as a comment
// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square">
//         {this.props.value}
//       </button>
//     );
//   }
// }

// class Board extends React.Component {
//   renderSquare(i) {
//     return <Square value={i} />;
//   }

class Square extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: null,
    }
  }
  render() {
    return (
      <button className="square" 
      onClick={() => this.setState({value:'X'})}>
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    // start the squares from one, must figure out how to get the 0
    return <Square value={i+1} />;
  }

  render() {
    const status = 'Enter phone number:';

    return (
      <div>
        <div className="status">{status}</div>
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
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
