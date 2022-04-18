import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Service = (props) => {
    const { name, img, description, price } = props.service;

    return (
        <div className='col-md-3 col-sm-12 text-center'>
            <Card className="p-3 h-100 shadow border-0 rounded-3">
                <Card.Img variant="top" src={img} className='rounded-3' />
                <Card.Body>
                    <Card.Title className='fs-6'>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <span> Price:${price}</span>
                </Card.Body>
                <Link to='/checkout'>
                    <Button variant="primary mt-2">Checkout my service</Button>
                </Link>
            </Card>
        </div>
    );
};

export default Service;