import React, { Component } from 'react'



import './Die.css'
/* add a property with a boolean set to false, the state would need to be set to true. 

isHold= false;


*/




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