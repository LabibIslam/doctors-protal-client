import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import location from '../../assets/icons/marker.svg';
import contact from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard img={clock}></InfoCard>
            <InfoCard img={location}></InfoCard>
            <InfoCard img={contact}></InfoCard>
        </div>
    );
};

export default Info;