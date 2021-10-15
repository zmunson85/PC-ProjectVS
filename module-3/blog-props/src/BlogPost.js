import React from 'react';

function Footer(props) {
    return (
        <div className='posts'>
            <h3>{props.title}</h3>
            <p>{props.subTitle}</p>
            <p>Written By: {props.author} Date Created: {props.date}</p>
        </div>
    )
}

export default Footer;