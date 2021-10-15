import React from 'react';
import TodoItem from './TodoItem'
import data from './data'
function App() {
    const todoItems = data.map(item => <TodoItem key={item.id} item={item} />)
    return (
        <>
            <div className='todo-list'>
                {todoItems}

            </div>
        </>
    )
}
export default App;