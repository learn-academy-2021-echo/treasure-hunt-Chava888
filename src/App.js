import React, { Component } from 'react'
import './App.css'
import Square from './components/Square'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasureLocation: null
    }
  }

  componentDidMount() {
    let treasure = Math.floor(Math.random() * this.state.board.length)
    this.setState({ treasureLocation: treasure })
  }

  handleGamePlay = (index) => {
    const { board, treasureLocation } = this.state

    if (index === treasureLocation) {
      board[index] = "π€―"
      this.setState({ board: board })
    }
    else {
      board[index] = "πΆβπ«οΈ"
      this.setState({ board: board })
    }
  }

  render() {
    console.log(this.state.treasureLocation)
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
