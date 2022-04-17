import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRightShort } from 'react-icons/bs';
import image from '../../images/banner/athletic.jpg';

const Routine = () => {
    return (
        <div className='container mt-5'>
            <div className='row d-flex align-items-center'>
                <h2 className='my-4 pb-4 text-center text-primary fw-bold'>Workout Routine</h2>
                <div className='col-md-6'>
                    <h2>Beginner’s workout routine</h2>
                    <p>As a beginner, you can progress very quickly because almost any exercise promotes muscle and strength gains. Still, it’s important to avoid overexertion, which can lead to injuries or decreased performance.</p>
                    <Link to='/login' className='btn btn-link text-decoration-none'>Learn More <BsArrowRightShort></BsArrowRightShort></Link>
                </div>
                <div className='col-md-6'>
                    <img className='w-100 h-auto rounded-3' src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Routine;