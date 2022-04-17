import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container' style={{ minHeight: '80vh' }}>
            <Accordion className='mt-5 w-75 mx-auto'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Authorization vs Authentication</Accordion.Header>
                    <Accordion.Body>
                        Authorization is the process of verifying what the user has access to. On the other hand the authencitacaion is used to authenticate someone's identity.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        Firebase Authentication provide backend services, easy-to-use SDKs to authenticate users to our app.It supports authentication using email password, phone number, popular social like Google, Facebook, Twitter and more. We can use other options except firebase like- Auth0, MongoDB, Passport, Okta, Parse, Kinvey,Kuzzle, Hoodie,Heroku, etc.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What other services does firebase provide other than authentication?</Accordion.Header>
                    <Accordion.Body>
                        There are many sevices which Firebase provides other than authentication, Such as - Cloud FireStore, Cloud Function, Hosting, Cloud Storage, Google Analytics, Machine learning Kit, Predictions, Cloud Messaging.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;