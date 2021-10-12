import React from 'react'

function Pet(props) {
    return (
        <div>
            <li className="petList">{props.name}, Breed: {props.breed}</li>
        </div>
    )
}

export default Pet