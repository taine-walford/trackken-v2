import React, { Component } from 'react'
import Boi from './Boi'

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <h3>Andre</h3>
                <h3>Noel</h3>
                <Boi name="Keith" />
            </div>
        )
    }
}
