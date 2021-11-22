import React from 'react';

function heading(props) {
    return (
        <section>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </section>
    )
}

export default heading;