import React, { Component } from 'react'

export default class Player extends Component {
  render() {
    return (
      <>
        <h2>{this.props.player.name}</h2>
        <h3>{this.props.char}</h3>
      </>
    )
  }
}
