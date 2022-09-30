import React, { Component } from 'react'

export default class Cubics extends Component {
    changeColor(event) {
        event.target.style.backgroundColor = 'red'
    }

    render() {
        return (
            <>
                <div onClick={(event) => { this.changeColor(event) }} style={{ backgroundColor: 'green', width: '100px', height: '100px' }}>Click me</div>
                <div onClick={(event) => { this.changeColor(event) }} style={{ backgroundColor: 'green', width: '100px', height: '100px' }}>Click me</div>
                <div onClick={(event) => { this.changeColor(event) }} style={{ backgroundColor: 'green', width: '100px', height: '100px' }}>Click me</div>
            </>
        )
    }
}
