import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-3 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            <div>
                <button className='btn btn-outline-primary btn-lg d-flex align-items-center justify-content-center w-100  my-2'>
                    <FcGoogle></FcGoogle>
                    <span className='px-2'> Google Sign In</span>
                </button>
                <button className='btn btn-outline-primary btn-lg d-flex align-items-center justify-content-center w-100'>
                    <AiFillGithub></AiFillGithub>
                    <span className='px-2'> Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;