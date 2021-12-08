const express = require('express')
const todoRouter = express.Router()
const uuid = require('uuid').v4

const todoList =
    [
        { name: 'Dog Stuff', desc: '50lb bag, chicken & rice', imgUrl: 'image', completed: false, _id: uuid() },
        { name: 'Milk', desc: '1 gallon', imgUrl: 'image', completed: false, _id: uuid() }

    ]

todoRouter.route('/')
    .get((req, res) => {
        res.send(todoList)
    })
    .post((req, res) => {
        const newItem = req.body
        newItem._id = uuid()
        todoList.push(newItem)
        res.send(`${newItem.name} added to the database`)
    })

todoRouter.get('/:itemId', (req, res) => {
    const itemId = req.params.itemId
    const findItem = todoList.findIndex(item => {
        return item._id === itemId
    })
    res.send(findItem)
})

todoRouter.delete('/:itemId', (req, res) => {
    const itemId = req.params.itemId
    const itemIndex = todoList.findIndex(item => item._id === itemId)
    todoList.splice(todoIndex, 1)
    res.send('Item Was Deleted!')
})

todoRouter.put('/:itemId', (req, res) => {
    const itemId = req.params.itemId
    const itemIndex = todoList.findIndex(item => item._id === itemId)
    const update = Object.assign(todoList[itemIndex], req.body)
    res.send(update)
})

module.exports = todoRouter