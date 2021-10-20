import React from 'react';
import TodoItem from './TodoItem'
import data from './data'


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todoItem: data
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todoItem.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                console.log(todo)
                return todo
            })
            return {
                todoItem: updatedTodos
            }
        })

    }
    render() {

        const todoItems = this.state.todoItem.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
        return (
            <>
                <div className='todo-list'>
                    {todoItems}

                </div>
            </>
        )
    }
}
export default App;