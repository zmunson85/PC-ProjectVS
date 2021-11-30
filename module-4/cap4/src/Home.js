import React from 'react'
import { Link } from 'react-router-dom'
import Form from './SearchForm'
import Movies from './Movies'

const Home = () => {
    return (
        <main>
            <>
                <h4 className='description-h4'>Please type in your search for a movie title below. OMDB only has so many movies, You can search a title and see if its available if it isn't available the api didn't have it listed. Interaction is limited to read only with navigation to all views.</h4>
                <Link className='about-link' to='/about'><button className='btn btn-primary'>See Project Description</button></Link>



            </>
            <Form />
            <Movies />
        </main>
    )
}

export default Home
