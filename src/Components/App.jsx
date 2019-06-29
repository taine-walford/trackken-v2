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
    let flippedColour =  (this.state[colour] === 'blue') ? 'red' : 'blue'
    let thisState = this.state[colour].name
    let otherState = this.state[flippedColour].name
    // If selected twice, clear other state colour
    if(otherState === player.name) this.setState({[flippedColour] : {}})
    // If state colour is occupied, default back
    if (thisState) {
      let currentButton = document.getElementById(`${thisState}Selector`)
      currentButton.className = "default"
    }
    // Set new state colour and set class to state colour
    let currentButton = document.getElementById(`${player.name}Selector`)
    currentButton.className = colour
    this.setState({ [colour]: player })
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
            <div className="matchPlayer blue" player={this.state.blue}>  </div>
            <div className="matchPlayer red"  player={this.state.red}></div>
          </div>
        </div>
        <div className="sidebar"><Sidebar bois={this.state.bois} handlePlayerSelection={this.handlePlayerSelection} /></div>
      </div>
    )
  }
}
