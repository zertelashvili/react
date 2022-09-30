import React, { Component } from 'react'

export default class Random extends Component {
    constructor() {
        super();
        this.state = {
            names: ['tiko', 'mari', 'ana', 'nika', 'saba']
        }
        this.randomName = this.randomName.bind(this)
    }
    randomName() {
        // this.setState({
        //     names: alert(Math.floor(Math.random() * this.state.names.length)),
        let random = Math.floor(Math.random() * this.state.names.length);
        alert(this.state.names[random])

        // })

    }
    render() {
        return (
            <div>{this.randomName()}</div>
        )
    }


}

