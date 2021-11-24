import React from 'react'

const UglyThing = (props) => {


    return (
        <>
            <li id={props.thing._id} key={props.thing_id} style={{ display: (props.isEditing === false) }} className='thingList'>

                <img src={props.thing.imgUrl} alt=""></img>
                <br />
                <div style={{ display: props.isEditing && "none" }}>
                    <button id="editBtn" onClick={() => props.editThing(props.thing._id)}>Edit</button>
                    <button id="deleteBtn" onClick={() => props.handleDelete(props.thing._id)}>Delete</button>
                </div>


                <div style={{ display: props.isEditing && "none" }}>
                    <h1 >{props.thing.title}</h1>
                    <h2>{props.thing.description}</h2>
                </div>


                <div style={{ display: !props.isEditing && "none" }}>
                    <button id="saveBtn" onClick={() => props.editThing(props.thing._id)}>Update</button>
                    <button id="deleteBtn" onClick={() => props.handleDelete(props.thing_id)}>Delete</button>

                    <div style={{ display: !props.isEditing && "none" }}>
                        <input
                            type="text"
                            name="title"
                            value={props.newUserInput.title}
                            onChange={props.handleEdit}
                            placeholder="Title"
                            required="required"
                        ></input>
                        <h2>{props.thing.title}</h2>
                    </div>
                </div>
            </li>
        </>

    )
}

export default UglyThing
