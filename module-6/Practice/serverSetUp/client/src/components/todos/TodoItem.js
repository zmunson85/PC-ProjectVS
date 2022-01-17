import React from 'react';
import PropTypes from 'prop-types';
import {
    useTodos,
    deleteTodo,
    setCurrent,
    clearCurrent
} from '../../context/todo/TodoState';

const TodoItem = ({ todo }) => {
    // we just need the todo dispatch without state.
    const todoDispatch = useTodos()[1];

    const { _id, name, description, type } = todo;

    const onDelete = () => {
        deleteTodo(todoDispatch, _id);
        clearCurrent(todoDispatch);
    };


    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>
                {name}{' '}
                <span
                    style={{ float: 'right' }}
                    className={
                        'badge ' +
                        (type === 'high' ? 'badge-danger' : 'badge-primary')
                    }
                >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
            </h3>
            <ul className='list'>
                {description && (
                    <li>
                        <i className='fas fa-edit' /> {description}
                    </li>
                )}
            </ul>
            <p>
                <button
                    className='btn btn-dark btn-sm'
                    onClick={() => setCurrent(todoDispatch, todo)}
                >
                    Edit
                </button>
                <button className='btn btn-danger btn-sm' onClick={onDelete}>
                    Delete
                </button>
            </p>
        </div>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};

export default TodoItem;
