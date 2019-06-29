import React, { Component } from 'react'

export default class Sidebar extends Component {
state = {
  currentColour: 'blue'
}

handleClick = event => { // handle selector click
  console.log(event.target)
  let targetName =event.target.id.split('Selector')[0]
  let obj = this.props.bois.filter( x => x.name === targetName)[0]

  if (this.state.currentColour === 'blue') this.setState({currentColour: 'red'}) // Handle colour switch
  else this.setState({currentColour: 'blue'})

  this.props.handlePlayerSelection(this.state.currentColour, obj)
}

  render() {
    return (
      <>
        {this.props.bois.map(boi => {
          return <div key={boi.name} className='playerContainer'>
              <div id={`${boi.name}Selector`} onClick={this.handleClick} className='selector'></div>
              <div id={`${boi.name}Overlay`} className='overlay'></div>
              <div id={`${boi.name}Card`}className="lightHeader">{boi.name}</div>
              <span>{boi.win} wins | </span>
              <span>{boi.loss} losses </span>
            </div>
        })}
      </>
    )
  }
}
