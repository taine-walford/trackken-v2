import React, { Component } from 'react'

export default class Sidebar extends Component {
state = {
  currentColour: 'blue'
}

handleSelector = event => { // handle selector click
  console.log(event.target)
  let targetName = event.target.id.split('Selector')[0]
  let obj = this.props.bois.filter( x => x.name === targetName)[0]
  this.state.currentColour === 'blue' ? this.setState({currentColour: 'red'}) : this.setState({currentColour: 'blue'})
  this.props.handlePlayerSelection(this.state.currentColour, obj)
}

  render() {
    return (
      <>
        {this.props.bois.map(boi => {
          return <div key={boi.name} className='playerContainer'>
              <div id={`${boi.name}Selector`} onClick={this.handleSelector} className='selector'></div>
              <div id={`${boi.name}Overlay`} onClick="return false" className='overlay'></div>
              <div id={`${boi.name}Card`} className="lightHeader">{boi.name}</div>
              <span>{boi.win} wins | </span>
              <span>{boi.loss} losses </span>
            </div>
        })}
      </>
    )
  }
}
