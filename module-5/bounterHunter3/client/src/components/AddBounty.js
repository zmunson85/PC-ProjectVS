import React, { useState, useContext } from 'react'
import { BountyContext } from '../context/bountyContext'

function AddBounty(props) {
    const initialInput = {
        firstName: "" || props.firstName,
        lastName: "" || props.lastName,
        living: "true",
        bountyAmount: "" || props.bountyAmount,
        type: "" || props.type
    };

    const [newInput, setNewInput] = useState(initialInput);
    const { getBounties } = useContext(BountyContext)
    const { setEdit } = props

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewInput(prevNewInput => ({
            ...prevNewInput, [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submit(newInput, props._id);
        setEdit(prevEdit => !prevEdit)
        getBounties()
    };


    return (
        <form className='addBountyForm' onSubmit={handleSubmit}>
            <h1>Create Your Personal Hit List!</h1>
            <input
                type='text'
                name='firstName'
                placeholder='Enter First Name'
                value={newInput.firstName}
                onChange={handleChange}
            />
            <input
                type='text'
                name='lastName'
                placeholder='Enter Last Name'
                value={newInput.lastName}
                onChange={handleChange}
            />
            <input
                type='number'
                name='bountyAmount'
                placeholder='Bounty Amount'
                value={newInput.bountyAmount}
                onChange={handleChange}
            />
            <select name="type" onChange={handleChange}>
                <option name="type" value="Jedi" >Jedi</option>
                <option name="type" value="Sith" >Sith</option>
                <option name="type" value="Space Ranger" >Space Ranger</option>
            </select>




        </form>
    )
}

export default AddBounty
