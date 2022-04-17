import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Service = (props) => {
    const { name, img, description, price } = props.service;
    return (
        <div className='col-md-3 col-sm-12 text-center'>
            <Card style={{ width: '16rem' }} className="p-3 h-100">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title className='fs-6'>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <span> price:{price}</span>
                    <Button variant="primary mt-2">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;