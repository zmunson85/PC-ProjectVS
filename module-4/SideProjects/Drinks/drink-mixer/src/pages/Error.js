import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <section className='error-page section'>
            <div className='error-container'>
                <h1>oops! Dead End... 👇Go Back Home</h1>
                <Link to='/home' className='btn btn-primary'>
                    HomePage
                </Link>
            </div>
        </section>
    )
}

export default Error
