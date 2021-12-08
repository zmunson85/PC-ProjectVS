import React from 'react'
import { Link } from 'react-router-dom'
import './images/Homepage.png'


const About = () => {
    return (
        <div>
            <div className='about-div'>
                <p>My Project Wire Frame</p>
                <image className='wireFrame-1' src='./images/Homepage.png' alt='' />
                <Link to='/'><button className='btn btn-primary'>Back To Search</button></Link>
            </div>
        </div>
    )
}

export default About
