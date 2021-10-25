import React, { useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap'




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
        <div className="mainContainer fluid">
            <form>
                <Card>
                    <Row>
                        <Col>
                            <input className='userInfo' type='text' value={firstName} placeholder='What is your First Name' onChange={e => { setFirstName(e.target.value); }} />
                            <input className='userInfo' type='email' value={email} placeholder='Enter A Valid Email' onChange={e => { setEmail(e.target.value); }} />
                            <input className='userInfo' type='text' value={placeOfBirth} placeholder='Where were you born?' onChange={e => { setPlaceOfBirth(e.target.value); }} />
                        </Col>
                        <Col>
                            <input className='userInfo' type='text' value={lastName} placeholder='What is your Last Name' onChange={e => { setLastName(e.target.value); }} />
                            <input className='userInfo' type='phone' value={phone} placeholder='What is your Phone Number?' onChange={e => { setPhone(e.target.value); }} />
                            <input className='userInfo' type='text' value={favoriteFood} placeholder='What Is your Favorite Food?' onChange={e => { setFavoriteFood(e.target.value); }} />
                        </Col>
                    </Row>
                    <textarea placeholder='Tell Us About Yourself' maxLength='100' value={responseField} onChange={e => { setResponseField(e.target.value); }} required></textarea>

                </Card>


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

                    {userInfo.map(name => (
                        <>
                            <Card id='Return'>
                                <Row>
                                    <p key={name.id}>Full Name: {name.firstName} {name.lastName}</p>
                                    <p key={name.id}>Phone: {name.phone}</p>
                                    <p key={name.id}>Email: {name.email}</p>
                                    <p key={name.id}>Place Of Birth: {name.placeOfBirth}</p>
                                    <p key={name.id}>Favorite Food: {name.favoriteFood}</p>
                                </Row>
                            </Card>
                        </>
                    ))}

                    {/* Phone# : {name.phone}, Email: {name.email}, Place of Birth: {name.placeOfBirth}, Favorite Food: {name.favoriteFood} */}
                </div>
            </form>
        </div>
    );
};

export default BadgeForm