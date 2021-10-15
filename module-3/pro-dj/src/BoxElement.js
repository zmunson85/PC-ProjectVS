import React from 'react';
import './index.css'
const BoxElement = props => {
    return (
        <div style={{ backgroundColor: props.color }} className='box'></div>
    )
}

export default BoxElement