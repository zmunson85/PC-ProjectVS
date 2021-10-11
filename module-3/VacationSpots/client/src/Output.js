import styles from './styles.css'
import data from './data'

import {
    Card, CardImg, CardBody,
    CardTitle, ListGroup, ListGroupItem
} from 'reactstrap';


function Output(props) {

    data.forEach((item, season) => {
        if (item.price < 500) {
            item.price = '$'
        }
        else if (item.price > 500 && item.price <= 1000) {
            item.price = '$$'
        }
        else if (item.price > 1000) {
            item.price = '$$$'
        }

        if (season.timeToGo === 'Winter') {
            season = 'cyan'
        }
        else if (season === 'Spring') {
            season = 'Blue'
        }
        if (season === 'Summer') {
            season = 'red'
        }
        if (season === 'Fall') {
            season = 'orange'
        }
    });

    return (
        <>
            <Card className='CardDiv'>
                <CardBody >
                    <CardTitle className='title'>{props.location.place}</CardTitle>
                    <CardImg top width="100%" src={props.location.imgUrl} className="imgUrl" alt="Location"></CardImg>
                    <ListGroup className='cardBody'>
                        <ListGroupItem>Price: {props.location.price}</ListGroupItem>
                        <ListGroupItem className='location'>Best Time of year: {props.location.timeToGo}</ListGroupItem>
                    </ListGroup>
                </CardBody>
            </Card>
        </>
    )
}

export default Output;
