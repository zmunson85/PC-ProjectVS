import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
    return (
        <div>

            <div className='about-div'>
                <p>You clicked the button... now I have to write stuff..

                    Just kidding, I am glad my app is working and you can read this.
                    This is a simple app to show some of my abilities with react. I am requesting data from omdbAPI and presenting it for the user. Search will display most modern movies. If your movie search doesn't populate a result check your spelling but omdb only has so many movies so there is a chance it is not listed on the api.
                </p>
                <Link to='/'><button className='btn btn-primary'>Back To Search</button></Link>
            </div>
        </div>
    )
}

export default About
