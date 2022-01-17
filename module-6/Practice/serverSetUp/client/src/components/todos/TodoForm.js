import React, { useState, useEffect } from 'react';
import {
    addTodo,
    useTodos,
    updateTodo,
    clearCurrent
} from '../../context/todo/TodoState';

const initialTodo = {
    name: '',
    description: '',
    type: 'low'
};

const TodoForm = () => {
    const [todoState, todoDispatch] = useTodos();

    const { current } = todoState;

    const [todo, setTodo] = useState(initialTodo);

    useEffect(() => {
        if (current !== null) {
            setTodo(current);
        } else {
            setTodo(initialTodo);
        }
    }, [current]);

    const { name, description, type } = todo;

    const onChange = (e) =>
        setTodo({ ...todo, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        if (current === null) {
            addTodo(todoDispatch, todo).then(() =>
                setTodo(initialTodo)
            );
        } else {
            updateTodo(todoDispatch, todo);
        }
        clearAll();
    };

    const clearAll = () => {
        clearCurrent(todoDispatch);
    };

    return (
        <form onSubmit={onSubmit}>
            <h2 className='text-primary'><i className="fas fa-plus"></i>
                {current ? ' Edit todo' : ' Add todo'}
            </h2>
            <input
                type='text'
                placeholder='Todo Name'
                name='name'
                value={name}
                onChange={onChange}
                required
            />

            <input
                type='text'
                placeholder='Enter A Short Description(Optional)'
                name='description'
                value={description}
                onChange={onChange}
            />
            <h5 className='text-dark'>Priority Level</h5>
            <input
                type='radio'
                name='type'
                value='low'
                checked={type === 'low'}
                onChange={onChange}
            />{' '}
            Low{' '}
            <input
                type='radio'
                name='type'
                value='high'
                checked={type === 'high'}
                onChange={onChange}
            />{' '}
            High
            <div>
                <input
                    type='submit'
                    value={current ? 'Update todo' : 'Add todo'}
                    className='btn btn-primary btn-block'
                />
            </div>
            {current && (
                <div>
                    <button className='btn btn-light btn-block' onClick={clearAll}>
                        Clear
                    </button>
                </div>
            )}
        </form>
    );
};

export default TodoForm;
