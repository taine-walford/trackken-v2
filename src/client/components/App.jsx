import React from 'react'
import Sidebar from './Sidebar'

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            playerArr: []
        }
    }
    render() {
        return (
            <>
                <h1> TRACKKEN BITCH </h1>
                <Sidebar />
            </>
        )
    }
}