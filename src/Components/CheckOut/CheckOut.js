import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckOut = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');


    const handleName = event => {
        setName(event.target.value);
    }
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePhone = event => {
        setPhone(event.target.value);
    }
    const handleAddress = event => {
        setAddress(event.target.value);
    }

    const handleCheckoutSubmit = event => {
        event.preventDefault()
        toast('Thank you for checkout');
        console.log(name, email, phone, address);
    }

    return (
        <div className='container' style={{ minHeight: '80vh' }}>
            <div className='mt-5 w-50 mx-auto'>
                <h2 className='text-center my-3'>Please checkout</h2>
                <Form onSubmit={handleCheckoutSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control onBlur={handleName} type="name" placeholder="Enter Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Control onBlur={handlePhone} type="phone" placeholder="Enter Phone No." required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Control onBlur={handleAddress} type="text" placeholder="Enter Address" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default CheckOut;