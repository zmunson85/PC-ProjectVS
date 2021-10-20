import React from 'react'
import './styles.css'

/* pass in props to re use in the render elements/return */

function DiceBox(props) {
    return (
        <div className='diceContainer'>
            <div className='title'>Showing Dice Values</div>
            <button className='die'>Die 1: {props.number.num1}</button>
            <button className='die'>Die 2: {props.number.num2}</button>
            <button className='die'>Die 3: {props.number.num3}</button>
            <button className='die'>Die 4: {props.number.num4}</button>
            <button className='die'>Die 5: {props.number.num5}</button>
        </div>
    )
}

export default DiceBox
