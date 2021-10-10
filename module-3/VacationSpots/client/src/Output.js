import React from 'react'
import styles from './styles.css'
import data from './data'

import {
    Card, CardImg, CardBody,
    CardTitle, ListGroup, ListGroupItem
} from 'reactstrap';


function Output(props) {
    data.map((item, index) => {
        if (item.price < 500) {
            return console.log(`${item.price} '$'`)
        }
        else if (item.price > 500 && item.price <= 1000) {
            return console.log(`${item.price} '$$'`)
        }
        else if (item.price > 1000) {
            return console.log(`${item.price}  '$$$'`)
        }
        return index
    });
    return (
        <>
            <Card className='CardDiv'>
                <CardBody >
                    <CardTitle className='title'>{props.location.place}</CardTitle>
                    <CardImg top width="100%" src={props.location.imgUrl} className="imgUrl" alt="Location"></CardImg>
                    <ListGroup className='cardBody'>
                        <ListGroupItem>Price: {props.location.price}</ListGroupItem>
                        <ListGroupItem>Best Time of year: {props.location.timeToGo}</ListGroupItem>
                    </ListGroup>
                </CardBody>
            </Card>
        </>
    )
}

export default Output;
