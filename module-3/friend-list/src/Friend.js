import React from 'react'
import Pet from './Pet'

function Friend(props) {
    const petList = props.pets.map(pet => {
        return (<Pet name={pet.name} breed={pet.breed} />)
    })
    console.log(props)
    console.log(props.pets)
    return (
        <div className='person'>
            <h3>This is {props.name}</h3>
            <div>Age: {props.age} years old</div>
            <div>Has Pets: {petList} </div>

        </div>
    )
}

export default Friend;