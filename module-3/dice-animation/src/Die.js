import React, { Component } from 'react'



import './Die.css'

class Die extends Component {
    render() {
        const { face, rolling } = this.props

        // Using font awesome icon to show 

        return (
            <i className={`Die fas fa-dice-${face}
            ${rolling && 'Die-shaking'}`} />
        )




    }
}

export default Die