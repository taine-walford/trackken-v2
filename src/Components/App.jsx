import React, { Component } from 'react'
import fire from '../firebase'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      bois: []
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

  getData = () => {
    console.log(this.state.bois)
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
      <div>
        <h1>Trackken bitch</h1>
        <button onClick={this.getData}>Yikes</button>
        {this.state.bois.map(x => <p key={x.name}>{x.name} | {x.win}W | {x.loss}L</p>)}
      </div>
    )
  }
}
