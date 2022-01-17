import React, { Fragment, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TodoItem from './TodoItem';
import Spinner from '../layout/Spinner';
import { useTodos, getTodos } from '../../context/todo/TodoState';

const Todos = () => {
    const [todoState, todoDispatch] = useTodos();

    const { todos, filtered } = todoState;

    useEffect(() => {
        getTodos(todoDispatch);
    }, [todoDispatch]);

    if (todos !== null && todos.length === 0) {
        return <h4>Please add a todo</h4>;
    }

    return (
        <Fragment>
            {todos !== null ? (
                <TransitionGroup>
                    {filtered !== null
                        ? filtered.map((todo) => (
                            <CSSTransition
                                key={todo._id}
                                timeout={500}
                                classNames='item'
                            >
                                <TodoItem todo={todo} />
                            </CSSTransition>
                        ))
                        : todos.map((todo) => {
                            return (
                                <CSSTransition
                                    key={todo._id}
                                    timeout={500}
                                    classNames='item'
                                >
                                    <TodoItem todo={todo} />
                                </CSSTransition>
                            );
                        })}
                </TransitionGroup>
            ) : (
                <Spinner />
            )}
        </Fragment>
    );
};

export default Todos;
