import React, { Component } from 'react'
import fire from '../firebase'
import Sidebar from './Sidebar'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      bois: [],
      blue: {},
      red: {}
    }
    this.getData()
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
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
    // Clear the past colour state, handle both states under smae selector
    if(pastName && pastName !== otherName) {
      const pastSelector = document.getElementById(`${pastName}Selector`)
      pastSelector.className = 'selector default'
    }
    // Set new state colour and set class to state colour
    const newSelector = document.getElementById(`${player.name}Selector`)
    newSelector.className = `selector ${colour}`
    this.setState({[colour]: player})
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

  render() {
    return (
      <div className="mainContain">
        <div className="leftContain">
          <h1 className='center'>T R A C K K E N</h1>
          <div className="matchContain">
            <div className="matchPlayer bluePlayer" player={this.state.blue}>  </div>
            <div className="matchPlayer redPlayer" player={this.state.red}></div>
          </div>
        </div>
        <div className="sidebar"><Sidebar bois={this.state.bois} handlePlayerSelection={this.handlePlayerSelection} /></div>
      </div>
    )
  }
}
