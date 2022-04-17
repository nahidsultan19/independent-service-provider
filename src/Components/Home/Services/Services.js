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
        <div className='container' id='services'>
            <h2 className='text-center fw-bold text-primary'>Services</h2>
            <div className='row  g-4 mt-4 '>
                {services.map(service => <Service key={service.id} service={service}></Service>)}
            </div>
        </div>
    );
};

export default Services;