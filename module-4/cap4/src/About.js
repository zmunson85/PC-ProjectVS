import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <div className='about-div'>
                <p>Thank you for visiting my about page, this is just another view for the user to get an idea of what they can do. This is an interactive read only app. The user can select a movie from a preselected list on the api OMDB website. GO TO http://www.omdbapi.com/ for more details. Given the okay by an instructor I have decided to use this API to retrieve data to populate a web page with content provided in json. I will convert that data and use the images for display and the title, movie description and there is much more that can be used but for the sake of simplicity I have only used the Id property and Title property as my search parameters. The result will be on display for you in the form of an image with options to open that image for more details about that specific movie. OMDB is a great api, there are tons of options to create more functionality and customize the way your output is displayed and other data points to manage if you decide to. Again thanks for visiting my page, this is just a simple fun app for a capstone project in VSchool. </p>
            </div>
        </div>
    )
}

export default About
