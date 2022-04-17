import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { async } from '@firebase/util';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let errorElement;

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, passResetError] = useSendPasswordResetEmail(auth);

    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }

    }, [user])

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>

    }
    const passwordReset = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent Email');
        } else {
            toast('Please enter your email')
        }
    }

    const handleUserSignIn = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password);
        toast('Login Successfully')

    }


    return (
        <div className='container'>
            <div className='mx-auto mt-4 shadow p-3 rounded-3' style={{ width: '350px' }}>
                <h2 className='text-center text-primary fw-bold'>Login</h2>
                <hr />
                <Form onSubmit={handleUserSignIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleEmail} type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onBlur={handlePassword} type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary w-100 fw-bold" type="submit">
                        Login
                    </Button>
                </Form>
                <p className='mt-1'>Forget Password?<small onClick={passwordReset} className='btn btn-link text-decoration-none'>Reset Password</small></p>
                <p className='mt-1'>Need an Account? <Link to='/register' className='text-decoration-none'>Register Now</Link></p>
                {errorElement}
                <SocialLogin></SocialLogin>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Login;