import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container mt-5' id='services' style={{ minHeight: '80vh' }}>
            <h2 className='text-center fw-bold text-primary'>Services</h2>
            <div className='row'>
                {services.map(service => <Service key={service.id} service={service}></Service>)}
            </div>
        </div>
    );
};

export default Services;