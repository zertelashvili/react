import React, { Component } from 'react'

export default class Submit extends Component {
    onSubmit(event) {
        event.target.style.backgroundColor = 'red'
        alert('Thanks')

        event.preventDefault()
    }
    render() {
        return (
            <form>
                <input type="text" placeholder='Your Name' />
                <input type="number" placeholder='Your Age' />
                <button onClick={(event) => { this.onSubmit(event) }} type='submit'>submit</button>
            </form>
        )
    }
}
