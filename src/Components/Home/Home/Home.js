import React from 'react';
import Routine from '../../Routine/Routine';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div style={{ minHeight: '80vh' }}>
            <Banner></Banner>
            <Services></Services>
            <Routine></Routine>
        </div>
    );
};

export default Home;