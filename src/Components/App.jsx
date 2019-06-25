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
      <div className="mainContain">
        <h1 className='center'>T R A C K K E N</h1>
        <div className="sidebar"><Sidebar bois={this.state.bois} /></div>
      </div>
    )
  }
}
