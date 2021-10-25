import React, { useState } from "react";

const NameForm = () => {
    const [names, setNames] = useState("");
    const [nameList, setNameList] = useState([]);

    return (
        <div>
            <form>
                <input type="text" value={names} placeholder="Enter Name" onChange={e => { setNames(e.target.value); }} />

                <input
                    type="button"
                    value="Add To List"
                    onClick={e => {
                        setNameList([
                            ...nameList,
                            {
                                // Use the current size as ID (needed to iterate the list later)
                                id: nameList.length + 1,
                                names: names
                            }
                        ]);
                        setNames(""); // Clear the text box
                    }}
                />
                <h1 style={{ color: 'grey' }}>Preview: {names}</h1>
                <ol>
                    {nameList.map(name => (
                        <li key={name.id}>{name.names}</li>
                    ))}
                </ol>
            </form>
        </div>
    );
};

export default NameForm




