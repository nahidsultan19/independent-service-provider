import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let errorElement;

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

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

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleUserSignIn = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password);
    }


    return (
        <div className='container'>
            <div className='mx-auto mt-4 shadow p-3 rounded-3' style={{ width: '350px' }}>
                <h2 className='text-center text-primary fw-bold'>Login</h2>
                <hr />
                <Form onSubmit={handleUserSignIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                    </Form.Group>
                    <p className='mt-1'>Forget Password?<button className='btn btn-link text-decoration-none'>Reset Password</button></p>
                    <Button variant="primary w-100 fw-bold" type="submit">
                        Login
                    </Button>
                    <p className='mt-1'>Need an Account? <Link to='/register' className='text-decoration-none'>Register Now</Link></p>
                </Form>
                {errorElement}
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;