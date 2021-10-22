import React, { useState } from "react";

const NameForm = () => {
    const [inputs, setInputs] = useState("");
    const [nameList, setNameList] = useState([]);

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={inputs}
                    placeholder="Enter Name"
                    onChange={e => {
                        setInputs(e.target.value);
                    }}
                />
                <input
                    type="button"
                    value="Add To List"
                    onClick={e => {
                        setNameList([
                            ...nameList,
                            {
                                // Use the current size as ID (needed to iterate the list later)
                                id: nameList.length + 1,
                                inputs: inputs
                            }
                        ]);
                        setInputs(""); // Clear the text box
                    }}
                />
                <h1 style={{ color: 'grey' }}>Preview: {inputs}</h1>
                <ol>
                    {nameList.map(name => (
                        <li key={name.id}>{name.inputs}</li>
                    ))}
                </ol>
            </form>
        </div>
    );
};

export default NameForm




