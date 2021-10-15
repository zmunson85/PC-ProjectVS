import './styles.css'


import {
    Card, CardImg, CardBody,
    CardTitle, ListGroup, ListGroupItem
} from 'reactstrap';


function VacationCard(props) {

    let price = '';
    if (props.price < 500) {
        price = '$'
    }
    else if (props.price > 500 && props.price <= 1000) {
        price = '$$'
    }
    else if (props.price > 1000) {
        price = '$$$'
    }


    let color;
    if (props.season === 'Winter') {
        color = 'Red'
    } else if (props.season === 'Summer') {
        color = 'gold'
    } else if (props.season === 'Fall') {
        color = 'orangered'
    } else if (props.season === 'Spring') {
        color = 'cyan'
    } else {
        color = 'darkgreen'
    }


    console.log(props)

    return (
        <>
            <Card className='CardDiv' style={{ backgroundColor: color, borderRadius: '12rem' }}>
                <CardBody >
                    <CardTitle className='title'>{props.location.place}</CardTitle>
                    <CardImg top width="100%" src={props.location.imgUrl} className="imgUrl" alt="Location"></CardImg>
                    <ListGroup className='cardBody'>
                        <ListGroupItem>Price: {price}</ListGroupItem>
                        <ListGroupItem className='location'>Go This: {props.location.timeToGo} </ListGroupItem>
                    </ListGroup>
                </CardBody>
            </Card>
        </>
    )
}


export default VacationCard;

