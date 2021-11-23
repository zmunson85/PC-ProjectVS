import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Context = React.createContext();

const Provider = (props) => {
    const [userInput, setUserInput] = useState({ title: '', description: '', imgUrl: '' })
    const [thingsList, setThingsList] = useState([])
    const [isEditing, setIsEditing] = useState(false)
    const [newUserInput, setNewUserInput] = useState({ title: '' })

    function handleChange(e) {
        const { name, value } = e.target
        setUserInput(userInput => ({ ...userInput, [name]: value }))
    }

    const handleNewUserInput = (e) => {
        const { name, value } = e.target
        setNewUserInput(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newThing = { ...userInput }
        console.log(newThing)
        setUserInput(() => ({
            title: '',
            description: '',
            imgUrl: ''
        }))
        axios.post('https://api.vschool.io/zachary-munson/thing', newThing).then(() => getUserData())
            .catch(error => console.error(error))
    }

    function handleDelete(id) {
        axios.delete(`https://api.vschool.io/zachary-munson/thing/${id}`)
            .then(() => getUserData())
            .catch(error => console.error(error.message))
    }

    function editThing(id, thingTitle) {
        console.log(id, thingTitle)
        setIsEditing(prevEdit => !prevEdit)
    }

    function saveThing(id, thingTitle) {
        console.log(id, thingTitle)
        setIsEditing(prevState => prevState === false)
        const newTitle = { ...newUserInput }
        console.log(newTitle)
    }


    const getUserData = () => {
        fetch('https://api.vschool.io/zachary-munson/thing')
            .then(res => res.json())
            .then(userData => {
                (setThingsList(() => [...userData]))
                // .catch(error => console.error(error.message))
            })
    }

    useEffect(() => {
        getUserData()
    }, [])

    return (
        <Context.Provider
            value={{
                thingsList,
                userInput,
                isEditing,
                newUserInput,
                handleChange,
                handleDelete,
                handleSubmit,
                editThing,
                saveThing,
                handleNewUserInput
            }}>{props.children}</Context.Provider>
    )

}
export { Provider, Context }
