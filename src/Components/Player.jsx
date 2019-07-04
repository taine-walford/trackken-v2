import React, { Component } from 'react'

export default class Player extends Component {

  render() {
    let align = (this.props.colour === 'blue') ? 'right' : 'left'
    let otherAlign = (this.props.colour === 'blue') ? 'left' : 'right'
    const { player, colour, rounds, char, addRound, delRound } = this.props
    return (
      <div className="matchPlayer" style={{ backgroundImage: `url('./images/${char}.jpg')` }}>
        <div className={`${colour}Bar`}></div>
        <h2>{player.name ? player.name.toUpperCase() : `PLAYER ${colour.toUpperCase()}`}</h2>
        <h3>{char.toUpperCase()}</h3>
        <div className={`roundBar ${colour}`}>
          <div className={`roundButton ${align}Align`}><div className={(rounds > 0) ? 'roundLit' : 'roundOff'}></div></div>
          <div className={`roundButton ${align}Align`}><div className={(rounds > 1) ? 'roundLit' : 'roundOff'}></div></div>
          <div className={`roundButton ${align}Align`}><div className={(rounds > 2) ? 'roundLit' : 'roundOff'}></div></div>
          <div onClick={addRound(colour)} className={`roundButton ${align}Align`}>
            <div className={'roundSquare'}>+</div>
          </div>
          <div onClick={delRound(colour)} className={`roundButton ${otherAlign}Align`}>
            <div className={'roundSquare'}>-</div>
          </div>
        </div>
      </div>
    )
  }
}
