import React from 'react';
import { Card } from 'react-bootstrap';

const About = () => {
    return (
        <div className='container' style={{ minHeight: '80vh' }}>
            <Card className='w-25 mx-auto mt-4'>
                <Card.Body>
                    <Card.Title className='text-center'>Nahid Sultan</Card.Title>
                    <Card.Text className=''>
                        My only goal is, I want to become a full-stack Developer. I can have patience to fulfill my dream. I will accomodate any situation for my targeted goal.No matter, how much time to spend in a day or how much effort to making my goal.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default About;