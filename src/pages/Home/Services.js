import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';
import Treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "",
            img: fluoride
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: "",
            img: cavity
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: "",
            img: whitening
        },

    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary text-lg font-bold uppercase'>Our services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-14          '>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div>
                <div class="hero min-h-screen">
                    <div class="hero-content flex-col lg:flex-row gap-20">
                        <img src={Treatment} class="max-w-sm rounded-lg" />
                        <div>
                            <h1 class="text-5xl font-bold">Exceptional Dental </h1>
                            <h1 class="text-5xl font-bold">Care, on Your Terms</h1>
                            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <PrimaryButton>Get Started</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;