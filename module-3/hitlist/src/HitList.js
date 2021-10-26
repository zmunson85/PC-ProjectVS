import React, { useState, useEffect } from 'react'
import axios from 'axios';
// import App from './App';
import './App.css'


export default function HitList() {
    const [targets, setTargets] = useState([]);

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json')
            .then(res => {
                console.log(res.data)
                setTargets(res.data)
            })
    }, [])

    return (
        <>
            <header className='header'>
                <img className='headerImg' src='https://pbs.twimg.com/profile_images/1093639847250722816/-A8kf6-1_400x400.jpg' alt='oopsMyBad'></img>
                <h1>Don Corleone's Hit List
                </h1>
            </header>
            <div className='grid-container'
            >
                {targets.map(result => (

                    <li className='grid-item' key={result.name}>
                        <img src={result.image} alt='apiContent'></img>
                        <h1 className='imgName'>{result.name}</h1>
                    </li>
                ))}
            </div>
        </>
    )
}


