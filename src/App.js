import React, { Component } from 'react'
import './App.css'
import Square from './components/Square'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"]
    }
  }

  handleGamePlay = (index) => {
    const { board } = this.state
    board[index] = "😶‍🌫️"
    this.setState({ board: board })
  }

  render() {
    return (
      <>
        <h1>Treasure Hunt Game</h1>
        <div className="gameboard">
          {this.state.board.map((value, index) => {
            return (
              <Square
                key={index}
                value={value}
                index={index}
                handleGamePlay={this.handleGamePlay} />
            )
          })}
        </div>
      </>
    )
  }
}
export default App
