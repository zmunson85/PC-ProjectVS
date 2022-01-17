import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import TodoContext from './todoContext';
import todoReducer from './todoReducer';
import {
    GET_TODOS,
    ADD_TODO,
    DELETE_TODO,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_TODO,
    FILTER_TODOS,
    CLEAR_TODOS,
    CLEAR_FILTER,
    TODO_ERROR
} from '../types';

// Create a custom hook to use the todo context

export const useTodos = () => {
    const { state, dispatch } = useContext(TodoContext);
    return [state, dispatch];
};

// Action creators
// NOTE: These could be moved to a separate file like in redux but they remain here for ease of students transitioning

// Get Todos
export const getTodos = async (dispatch) => {
    try {
        const res = await axios.get('/api/todos');

        dispatch({
            type: GET_TODOS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: TODO_ERROR,
            payload: err.response.msg
        });
    }
};

// Add Todo
export const addTodo = async (dispatch, todo) => {
    try {
        const res = await axios.post('/api/todos', todo);

        dispatch({
            type: ADD_TODO,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: TODO_ERROR,
            payload: err.response.msg
        });
    }
};

// Delete Todo
export const deleteTodo = async (dispatch, id) => {
    try {
        await axios.delete(`/api/todos/${id}`);

        dispatch({
            type: DELETE_TODO,
            payload: id
        });
    } catch (err) {
        dispatch({
            type: TODO_ERROR,
            payload: err.response.msg
        });
    }
};

// Update Todo
export const updateTodo = async (dispatch, todo) => {
    try {
        const res = await axios.put(`/api/todos/${todo._id}`, todo);

        dispatch({
            type: UPDATE_TODO,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: TODO_ERROR,
            payload: err.response.msg
        });
    }
};

// Clear Todos
export const clearTodos = (dispatch) => {
    dispatch({ type: CLEAR_TODOS });
};

// Set Current Todo
export const setCurrent = (dispatch, todo) => {
    dispatch({ type: SET_CURRENT, payload: todo });
};

// Clear Current Todo
export const clearCurrent = (dispatch) => {
    dispatch({ type: CLEAR_CURRENT });
};

// Filter Todos
export const filterTodos = (dispatch, text) => {
    dispatch({ type: FILTER_TODOS, payload: text });
};

// Clear Filter
export const clearFilter = (dispatch) => {
    dispatch({ type: CLEAR_FILTER });
};

const TodoState = (props) => {
    const initialState = {
        todos: null,
        current: null,
        filtered: null,
        error: null
    };

    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <TodoContext.Provider value={{ state: state, dispatch }}>
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoState;
