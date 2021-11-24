import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Context = React.createContext();

const Provider = (props) => {
    const [userInput, setUserInput] = useState({ title: '', description: '', imgUrl: '' })
    const [thingsList, setThingsList] = useState([])
    const [isEditing, setIsEditing] = useState(false)
    const [newUserInput, setNewUserInput] = useState([{ title: '' }])
    //new Input
    function handleChange(e) {
        const { name, value } = e.target
        setUserInput(userInput => ({ ...userInput, [name]: value }))
    }
    //user select edit
    function handleEdit(e) {
        const { name, value } = e.target
        setNewUserInput(prevUserInput => ({ ...prevUserInput, [name]: value }))
    }

    //user gets new input for title displayed
    function editThing(id) {
        console.log(id)
        axios.put(`https://api.vschool.io/zachary-munson/thing/${id}`, newUserInput).then((res) => {
            console.log(res) // whole response obj
            console.log(res.data) // just the edited item that was succesfully edited

            // use the map method to set your thingsList state
            setThingsList(prevList => {
                return prevList.map((item) => item._id === id ? { ...res.data } : item)
            })



        }).catch((error) => console.error(error.message))
        setIsEditing(true)
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

                handleEdit
            }}>{props.children}
        </Context.Provider>
    )

}
export { Provider, Context }
