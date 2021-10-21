/* This is a good start and has already cleaned up handling an input. We don't need to create an instance of the React component class, worry about the context of this and we can start to get the benefits of functional components while still being able to do stateful logic.

We are not limited to the hooks that React provides, but can also build your own hooks, and this is where the value of hooks starts to shine for me:

The ability to have reusable logic shared across components, without having to introduce extra components into our hierarchy.

There are many patterns out there that can accomplish this such as Higher Order Components, Render Props, etc. These patterns are still useful, however, if you have a HoC, or component using render-props that has no UI to it and is only rendering a single child - a hook might be a better way of handling this. */
import React, { useState } from "react";
function NameForm() {
    const [userName, setUserName] = useState({

        firstName: '',
        lastName: ''

    });
    // const [lastName, setLastName] = useState("");

    const handleFirstNameInput = (e) => {
        setUserName({ ...userName, firstName: e.target.value })
    }
    const handleLastNameInput = (e) => {
        setUserName({ ...userName, lastName: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`User Input: ${userName.firstName} ${userName.lastName}`)

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Frirst Name:
                <input
                    type="text"
                    value={userName.firstName}
                    //set state with setName/useState Hook target input value and submit event
                    onChange={handleFirstNameInput}
                />
            </label>
            <label>
                Last Name:
                <input
                    type="text"
                    value={userName.lastName}
                    //set state with setName/useState Hook target input value and submit event
                    onChange={handleLastNameInput}
                />
            </label>
            <input type="submit" value="Submit" />
            <h1>User Input: {userName.firstName} {userName.lastName}</h1>
            <ol>

            </ol>
        </form>
    );

}
export default NameForm