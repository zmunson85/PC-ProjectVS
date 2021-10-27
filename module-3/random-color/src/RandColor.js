import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function RandColor() {
    const [color, setColor] = useState([]);

    const getColor = () => {
        axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            .then(res => {
                console.log(res.data.colors[0].hex)
                //need prev state so we do not mutate state, spreading prev state and adding new value from api
                setColor(prevColor => [...prevColor, res.data.colors[0].hex])
            })
    }

    useEffect(() => {
        getColor()
    }, [])

    return (

        <>
            <button onClick={getColor}> get new Color</button>
            {color.map(result => (
                <>
                    <div style={{ height: '100px', width: '100px', backgroundColor: `#${result}` }}>{result}</div>

                </>
            ))}
        </>


    )

}