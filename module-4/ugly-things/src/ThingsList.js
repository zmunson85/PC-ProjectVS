import React, { useContext } from 'react';
import { Context } from './Context';
import UglyThing from './UglyThing';



const ThingsList = () => {
    const {
        thingsList,
        isEditing,
        newUserInput,
        handleDelete,
        handleEdit,
        editThing,
    } = useContext(Context);

    const allThings = thingsList.map(thing => {
        return (
            <>
                <UglyThing
                    key={thing._id}
                    thing={thing}
                    isEditing={isEditing}
                    newUserInput={newUserInput}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    editThing={editThing}
                />
            </>
        )
    })
    return (
        <ul className='ThingsList'>
            {allThings.length ? allThings : null}

        </ul>
    )
}
export default ThingsList;