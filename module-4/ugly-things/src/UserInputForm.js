import React, { useContext } from 'react';
import { Context } from './Context';

const UserInputForm = () => {
    const { userInput, handleSubmit, handleChange } = useContext(Context)

    return (
        <form className='form-newThing' onSubmit={handleSubmit}>
            <input
                type='text'
                name='title'
                value={userInput.title}
                onChange={handleChange}
                placeholder='Enter Title'
                required='please complete the title'>
            </input>
            <input
                type='text'
                name='description'
                value={userInput.description}
                onChange={handleChange}
                placeholder='Enter Description'
                required='please complete the description'>
            </input>
            <input
                type='text'
                name='imgUrl'
                value={userInput.imgUrl}
                onChange={handleChange}
                placeholder='url'>
            </input>
            <button type='submit'>Submit New Ugly Thing</button>
        </form>
    )
}
export default UserInputForm