import React from 'react'
import { Link } from 'react-router-dom'
import Form from './SearchForm'
import Movies from './Movies'

const Home = () => {
    return (
        <main>
            <>
                <Link to='/about'>About</Link>
            </>
            <Form />
            <Movies />
        </main>
    )
}

export default Home
