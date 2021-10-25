import React, { useState } from 'react'
import { Card } from 'react-bootstrap'




const BadgeForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(Number);
    const [placeOfBirth, setPlaceOfBirth] = useState("");
    const [favoriteFood, setFavoriteFood] = useState("");
    const [responseField, setResponseField] = useState("");
    const [userInfo, setUserInfo] = useState([]);

    return (
        <div className="mainContainer">
            <form>

                <div className='inputDiv'>
                    <input type='text' value={firstName} placeholder='What is your First Name' onChange={e => { setFirstName(e.target.value); }} required />


                    <input type='text' value={lastName} placeholder='What is your Last Name' onChange={e => { setLastName(e.target.value); }} required />


                    <input type='email' value={email} placeholder='Enter A Valid Email' onChange={e => { setEmail(e.target.value); }} required />


                    <input type='phone' value={phone} placeholder='What is your Phone Number?' onChange={e => { setPhone(e.target.value); }} required />


                    <input type='text' value={placeOfBirth} placeholder='Where were you born?' onChange={e => { setPlaceOfBirth(e.target.value); }} required />


                    <input type='text' value={favoriteFood} placeholder='What Is your Favorite Food?' onChange={e => { setFavoriteFood(e.target.value); }} required />
                    <textarea maxLength='100' value={responseField} onChange={e => { setResponseField(e.target.value); }} required></textarea>
                </div>


                <div className='returnDiv'>
                    <input
                        className='submitButton'
                        type="button"
                        value="Create Badge"
                        onClick={e => {
                            setUserInfo([
                                ...userInfo,
                                {
                                    // Use the current size as ID (needed to iterate the list later)
                                    id: userInfo.length + 1,
                                    firstName: firstName,
                                    lastName: lastName,
                                    email: email,
                                    phone: phone,
                                    placeOfBirth: placeOfBirth,
                                    favoriteFood: favoriteFood,
                                    responseField: responseField

                                }
                            ]);
                            setFirstName(""); // Clear the text box
                            setLastName(""); // Clear the text box
                            setEmail(""); // Clear the text box
                            setPhone(""); // Clear the text box
                            setPlaceOfBirth(""); // Clear the text box
                            setFavoriteFood(""); // Clear the text box
                            setResponseField(""); // Clear the text box
                        }}
                    />

                    <Card>
                        {userInfo.map(name => (
                            <p key={name.id}>Full Name: {name.firstName.last} {name.lastName}
                                Phone# : {name.phone}, Email: {name.email}, Place of Birth: {name.placeOfBirth}, Favorite Food: {name.favoriteFood}
                            </p>
                        ))}
                    </Card>
                </div>
            </form>
        </div>
    );
};

export default BadgeForm