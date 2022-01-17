import {
    GET_TODOS,
    ADD_TODO,
    DELETE_TODO,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_TODO,
    FILTER_TODOS,
    CLEAR_FILTER,
    TODO_ERROR,
    CLEAR_TODOS
} from '../types';

const todoReducer = (state, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                todos: action.payload
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            };
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo._id === action.payload._id ? action.payload : todo
                )
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(
                    (todo) => todo._id !== action.payload
                )
            };
        case CLEAR_TODOS:
            return {
                ...state,
                todos: null,
                filtered: null,
                error: null,
                current: null
            };
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            };
        case FILTER_TODOS:
            return {
                ...state,
                filtered: state.todos.filter(({ name, description }) => {
                    const testString = `${name}${description}`.toLowerCase();
                    return testString.includes(action.payload.toLowerCase());
                })
            };
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            };
        case TODO_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            throw new Error(`Unsupported type of: ${action.type}`);
    }
};

export default todoReducer;