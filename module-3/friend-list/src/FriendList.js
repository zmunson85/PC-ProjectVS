import React from 'react';
import data from './data';
import Friend from './Friend'
function Friends(props) {
    const friendList = data.map(person => {
        return (<Friend name={person.name} age={person.age} pets={person.pets} />)
    })
    return (
        <div className='container'>
            {friendList}
        </div>
    )

}
export default Friends;