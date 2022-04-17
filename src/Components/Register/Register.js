import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [agree, setAgree] = useState(false);

    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleName = event => {
        setName(event.target.value);
    }
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password);
        toast('User Created')
    }

    return (
        <div className='container'>
            <div className='mx-auto mt-4 shadow p-3 rounded-3' style={{ width: '350px' }}>
                <h2 className='text-primary text-center fw-bold'>Register</h2>
                <hr />
                <Form onSubmit={handleCreateUser}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onBlur={handleName} type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="Terms & Conditions" />
                    </Form.Group>
                    <Button disabled={!agree} variant="primary w-100 fw-bold" type="submit">
                        Register
                    </Button>
                </Form>
                <p>Already have an Account?<Link to='/login' className='text-decoration-none'> Login Now</Link></p>
                <SocialLogin></SocialLogin>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Register;