import React, { useState, useEffect } from 'react';

const Context = React.createContext();

const Provider = (props) => {
    const [userInput, setUserInput] = useState({ title: '', description: '', imgUrl: '' })
    const [thingsList, setThingsList] = useState([])
    const [isEditing, setIsEditing] = useState(false)
    const [newUserInput, setNewUserInput] = useState({ title: '' })

    function handleChange(event) {
        const { name, value } = event.target
        setUserInput(prevUserInput => ({ ...prevUserInput, [name]: value }))
    }

    function handleEditInputValue(event) {
        const { name, value } = event.target
        setIsEditing(prevUserInput => ({ ...prevUserInput, [name]: value }))
    }

    handleSubmit(event){
        event.preventDefault()
        const newThing = { ...userInput }
        setUserInput(() => ({
            title: '',
            description: '',
            imgUrl: ''
        }))
        axios.post('https://api.vschool.io/zachary-munson/thing', newThing).then(() => get()).catch(error => console.log(error))
    }

    handleDelete(id){
        axios.delete(`https://api.vschool.io/zachary-munson/thing/${id}`).then(() => getUserData()).catch(() => console.log(error))
    }

    function editThing(id, thingTitle) {
        console.log(id, thingTitle)
        setIsEditing(prevEdit => !prevEdit)
    }

    function saveThing(id, thingTitle) {
        setIsEditing(prevEdit => prevEdit = false)
        const newTitle = { ...newUserInput }
        console.log(newUserInput)
    }


    const getUserData = () => {
        axios.get('https://api.vschool.io/zachary-munson/thing')
            .then(res => res.json())
            .then(data => {
                userData => (setThingsList(() => [...userData])
                ).catch(error => console.log(error.message))
            })
    }
}