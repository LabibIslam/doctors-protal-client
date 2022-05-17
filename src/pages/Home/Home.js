import React from 'react';
import Banner from './Banner';
import Info from './Info';
import clock from '../../assets/icons/clock.svg';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info img={clock}></Info>
        </div>
    );
};

export default Home;