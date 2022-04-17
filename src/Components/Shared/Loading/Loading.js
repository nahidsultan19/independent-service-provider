import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: '400px' }}>
            <Spinner animation="border" variant="secondary" />
        </div>
    );
};

export default Loading;