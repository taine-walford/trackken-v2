import React, { Component } from 'react'

export default class Sidebar extends Component {

  render() {
    return (
      <div>
        {this.props.bois.map(boi => {
          return <>
            <div className='playerContainer'>
              <div class="lightHeader">{boi.name}</div>
              <span>{boi.win} wins | </span>
              <span>{boi.loss} losses </span>
            </div>
          </>
        })}
      </div>
    )
  }
}
