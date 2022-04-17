import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='container-fluid position-absolute mt-5 py-5 bg-dark'>
            <div className='container text-white text-center'>
                <div className='row g-4 d-flex justify-content-between align-items-center'>
                    <div className='col-md-4'>
                        <h3>Healthy Life Gym</h3>
                    </div>
                    <div className='col-md-4 d-flex'>
                        <input className='form-control' type="text" placeholder='Your Feedback' />
                        <button className='btn btn-primary'>Send</button>
                    </div>
                    <div className='col-12 col-md-4  mx-auto'>
                        <Link to="#" className='pe-3 fs-4'><BsFacebook></BsFacebook></Link>
                        <Link to="#" className='pe-3 fs-4' ><FcGoogle /></Link>
                        <Link to="#" className='pe-3 fs-4'><AiFillTwitterCircle /></Link>
                        <Link to="#" className='pe-3 fs-4'><AiFillYoutube /></Link>
                        <p className='mt-2'>Visit Social Site</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;