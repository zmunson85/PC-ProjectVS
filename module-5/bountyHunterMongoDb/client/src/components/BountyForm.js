import React, { useState } from "react";

export default function BountyForm(props) {
    const intiInputs = {
        firstName: props.firstName || "",
        lastName: props.lastName || "",
        living: props.living || "",
        bounty: props.bounty || 0,
        type: props.type || "",
    };
    const [inputs, setInputs] = useState(intiInputs);

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(intiInputs)
        if (props._id) {
            props.toggleEdit(prevEdit => !prevEdit)
        }
    }

    return (
        <div className="formContainer">

            <form onSubmit={handleSubmit}>
                <h2>Add Your Bounty</h2>
                First Name:
                <input
                    type="text"
                    name="firstName"
                    value={inputs.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                />
                Last Name:
                <input
                    type="text"
                    name="lastName"
                    value={inputs.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                />
                Bounty:
                <input
                    type="select"
                    name="bounty"
                    value={inputs.bounty}
                    onChange={handleChange}
                    placeholder="Bounty"
                    required
                />
                <select onChange={handleChange} value={inputs.type} name="type" required>
                    <option>Select Type</option>
                    <option value="Jedi">Jedi</option>
                    <option value="Sith">Sith</option>
                    <option value="Space Ranger">Nomad</option>
                </select>
                <button>{props.btnText}</button>
            </form>
        </div>
    );
}
