import React from 'react';

export default function TodoItem(props) {
    const markComplete = {
        fontStyle: 'italic',
        color: '#cdcdcd',
        textDecoration: 'line-through'
    }
    return (
        <div className='todo-item'>
            <input
                type='checkbox'
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed ? markComplete : null}>{props.item.text}</p>
        </div>
    )
}