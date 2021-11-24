import React, { useContext } from 'react';
import { Context } from './Context';



// const [isEditing, setIsEditing] = useState(false);

// function editThing(id, thingTitle) {
//     console.log(id, thingTitle)
//     setIsEditing(prevEdit => !prevEdit)
// }

// function saveThing(id, thingTitle) {
//     console.log(id, thingTitle)
//     setIsEditing(prevState => prevState === false)
//     const newTitle = { ...newUserInput }
//     console.log(newTitle)
// }

const ThingsList = () => {
    const {
        thingsList,
        isEditing,
        userInput,
        handleChange,
        handleDelete,
        newUserInput,
        handleNewUserInput,
        handleSubmit,
        editThing,
        saveThing,
    } = useContext(Context);

    const allThings = thingsList.map(thing => {
        return (
            <>

                <li id={thing['_id']} key={thing['_id']} style={{ display: (isEditing === false) }} className='thingList'>

                    <div style={{ display: !isEditing && "none" }}>
                        <input
                            type="text"
                            name="title"
                            value={newUserInput.title}
                            onChange={handleNewUserInput}
                            placeholder="Title"
                            required="required"
                        ></input>
                        <h2>{thing.description}</h2>
                    </div>
                    <img src={thing.imgUrl} alt=""></img>
                    <br />
                    <div style={{ display: isEditing && "none" }}>
                        <h1 >{thing.title}</h1>
                        <h2>{thing.description}</h2>
                    </div>
                    <div style={{ display: isEditing && "none" }}>
                        <button id="editBtn" onClick={() => editThing(thing["_id"], thing["title"])}>Edit</button>
                        <button id="deleteBtn" onClick={() => handleDelete(thing["_id"])}>Delete</button>
                    </div>
                    <div style={{ display: !isEditing && "none" }}>
                        <button id="saveBtn" onClick={() => saveThing(thing["_id"], thing["title"])}>Save</button>
                        <button id="deleteBtn" onClick={() => handleDelete(thing["_id"])}>Delete</button>
                    </div>
                </li>

            </>
        )
    })
    return (
        <ul className='ThingsList'>
            {allThings}
        </ul>
    )
}
export default ThingsList;