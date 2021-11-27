import React from 'react'
import Footer from './Footer'
const Contact = () => {
    return (
        <div className='main'>
            <h1>Contact Form</h1>
            <div className='form-div'>
                <form>
                    <label>First Name:</label>
                    <input name='firstName' ></input>
                    <label>Last Name:</label>
                    <input></input>
                    <label>Questions and Comments</label>
                    <textarea maxLength='100'></textarea>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
