import React from 'react'
import Todos from '../todos/Todos'
import TodoForm from '../todos/TodoForm'
import TodoFilter from '../todos/TodoFilter'
const Home = () => {
    return (
        <div className='grid-2'>
            <div>
                <TodoForm />
            </div>
            <div>
                <TodoFilter />
                <Todos />
            </div>
        </div>
    )
}

export default Home
