import React, { useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap'




const BadgeForm = (props) => {
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
                        <Col xs={6}>
                            <input className='userInfo' type='text' value={firstName} placeholder='What is your First Name' onChange={e => { setFirstName(e.target.value); }} />
                            <input className='userInfo' type='email' value={email} placeholder='Enter A Valid Email' onChange={e => { setEmail(e.target.value); }} />
                            <input className='userInfo' type='text' value={placeOfBirth} placeholder='Where were you born?' onChange={e => { setPlaceOfBirth(e.target.value); }} />
                        </Col>
                        <Col xs={6}>
                            <input className='userInfo' type='text' value={lastName} placeholder='What is your Last Name' onChange={e => { setLastName(e.target.value); }} />
                            <input className='userInfo' type='phone' value={phone} placeholder='What is your Phone Number?' onChange={e => { setPhone(e.target.value); }} />
                            <input className='userInfo' type='text' value={favoriteFood} placeholder='What Is your Favorite Food?' onChange={e => { setFavoriteFood(e.target.value); }} />
                        </Col>
                    </Row>
                    <textarea className='textArea' placeholder='Tell Us About Yourself' maxLength='100' value={responseField} onChange={e => { setResponseField(e.target.value); }} required></textarea>

                </Card>


                <div className='returnDiv'>
                    <input
                        className='submitButton'
                        type="button"
                        value="Create Badge"
                        onClick={e => {
                            setUserInfo(prevState => [
                                ...prevState,
                                {
                                    // Use the current size as ID (needed to iterate the list later)
                                    id: prevState.length + 1,
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

                    {userInfo.map((name, id) => (
                        <>
                            <Card id='Return'>
                                <Row key={name.id}>
                                    <p >Full Name: {name.firstName} {name.lastName}</p>
                                    <p >Phone: {name.phone}</p>
                                    <p >Email: {name.email}</p>
                                    <p >Place Of Birth: {name.placeOfBirth}</p>
                                    <p >Favorite Food: {name.favoriteFood}</p>
                                    <textarea className='textArea'>{name.responseField}</textarea>
                                </Row>
                            </Card>
                        </>
                    ))}
                </div>
            </form>
        </div>
    );
};

export default BadgeForm