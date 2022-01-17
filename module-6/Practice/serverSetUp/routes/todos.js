const express = require('express');
const router = express.Router();

//middleware for protected routes
const auth = require('../middleware/auth')
//express validator
const { check, validationResult } = require('express-validator');
const User = require('../models/User')
const Todo = require('../models/todos')




//@route Get api/todos
//@description Get all logged in user todos
//@access Private, protected route with auth parameter
router.get('/', auth, async (req, res) => {
    try {
        const todos = await Todo.find({ user: req.user.id }).sort({ date: -1 });
        res.json(todos);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});
//@route Post api/todos
//@description Add new todo
//@access Private
router.post('/', auth,
    [
        check('name', 'Name is Required').not().isEmpty()
    ], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        //pull data from body
        const { name, description, type } = req.body;
        try {
            const newTodo = new Todo({
                name,
                description,
                type,
                user: req.user.id
            });
            const todo = await newTodo.save();
            res.json(todo);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error')
        }

    });
//@route Put api/todos/:id
//@description Get all logged in user todos
//@access Public
router.put('/:id', auth, async (req, res) => {
    const { name, description, type } = req.body;
    //todo object based on user submission
    const todoFields = {};
    if (name) todoFields.name = name;
    if (description) todoFields.description = description;
    if (type) todoFields.type = type;

    try {
        //request params in the findById
        let todo = await Todo.findById(req.params.id);
        if (!todo) return res.status(404).json({ msg: 'Todo not found' });

        //make sure user is updating their own todo list
        if (todo.user.toString() != req.user.id) {
            return res.status(401).json({ msg: 'Not allowed to edit other user todos. ' });
        }
        todo = await Todo.findByIdAndUpdate(req.params.id, { $set: todoFields },
            { new: true });
        res.json(todo);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }

});
//@route DELETE api/
//@description Get all logged in user todos
//@access Public
router.delete('/:id', auth, async (req, res) => {
    try {
        //request params in the findById
        let todo = await Todo.findById(req.params.id);
        if (!todo) return res.status(404).json({ msg: 'Todo not found' });

        //make sure user is updating their own todo list
        if (todo.user.toString() != req.user.id) {
            return res.status(401).json({ msg: 'Not allowed to edit other user todos. ' });
        }
        await Todo.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Todo Has Been Deleted From DB' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

module.exports = router;