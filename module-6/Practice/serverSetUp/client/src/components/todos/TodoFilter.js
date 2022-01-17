import React from 'react';
import {
    useTodos,
    filterTodos,
    clearFilter
} from '../../context/todo/TodoState';

const TodoFilter = () => {
    // need the Todo dispatch without state.
    const todoDispatch = useTodos()[1];

    const onChange = (e) => {
        if (e.target.value !== '') {
            filterTodos(todoDispatch, e.target.value);
        } else {
            clearFilter(todoDispatch);
        }
    };

    return (

        <form onSubmit={(e) => e.preventDefault()}>
            <h3 className='text-primary'><i className='text-dark' class="fas fa-search"></i> Search </h3>
            <input type='text' placeholder='type here...' onChange={onChange} />
        </form>
    );
};

export default TodoFilter;