import React, { Component } from 'react'
import fire from '../firebase'
import Sidebar from './Sidebar'
import Player from './Player'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      bois: [],
      blue: {},
      red: {},
      blueRounds: 0,
      redRounds: 0
    }
    this.getData()
    this.delRound = this.delRound.bind(this)
    this.addRound = this.addRound.bind(this)    
  }

  addData = e => {
    const db = fire.firestore()
    db.collection('bois').add({
      name: this.state.name,
      age: this.state.age
    })
    this.setState({
      name: '',
      age: ''
    })
  }

  handlePlayerSelection = (colour, player) => { // sets state colour to player clicked
    const flipped = (colour === 'blue') ? 'red' : 'blue'
    const pastName = this.state[colour].name
    const otherName = this.state[flipped].name
    if (pastName && pastName !== otherName) document.getElementById(`${pastName}Selector`).className = 'selector default' // Reset
    if (otherName === player.name) this.setState({ [flipped]: {} }) // Clear other colour when player is both
    document.getElementById(`${player.name}Selector`).className = `selector ${colour}Selector`
    this.setState({ 
      [colour]: player,
      blueRounds: 0,
      redRounds: 0 })
  }

  getData = () => { // pull data from Firestore
    let arr = []
    const db = fire.firestore()
    db.collection('bois').get()
      .then(sshot => {
        sshot.forEach(doc => {
          arr.push(doc.data())
        })
        this.setState({ bois: arr })
      })
  }

  delRound(colour) {
    let counter = `${colour}Rounds`
    return () => {
      if( this.state[counter] > 0 && this.state[counter] <= 3)
      this.setState({[counter]: this.state[counter] - 1}, () => console.log(this.state[counter]))
    }
  }
  
  addRound(colour) {
    let counter = `${colour}Rounds`
    return () => {
      if( this.state[counter] >= 0 && this.state[counter] < 3)
      this.setState({[counter]: this.state[counter] + 1}, () => console.log(this.state[counter]))
    }
  }

  render() {
    return (
      <div className="mainContain">
        <div className="leftContain">
          <h1 className='center'>T R A C K K E N</h1>
          <div className="matchContain">
            <Player
              className="matchPlayer bluePlayer"
              player={this.state.blue}
              colour="blue"
              delRound={this.delRound}
              addRound={this.addRound}
              rounds={this.state.blueRounds}
              char='jin'
            />
            <Player
              className="matchPlayer redPlayer"
              player={this.state.red}
              colour='red'
              delRound={this.delRound}
              addRound={this.addRound}
              rounds={this.state.redRounds}
              char='kazuya'
            />
          </div>
        </div>
        <div className="sidebar">
          <Sidebar
            bois={this.state.bois}
            handlePlayerSelection={this.handlePlayerSelection}
          />
        </div>
      </div>
    )
  }
}
