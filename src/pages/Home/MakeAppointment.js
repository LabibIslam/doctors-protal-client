import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center' >
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-175px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-4xl text-white'>Make an Appointment Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta eius labore, sapiente a aliquam dolore doloremque sint, voluptate ipsa quisquam illum, non aut? Ad quo sed, ipsa sequi debitis omnis? Voluptatem mollitia voluptas assumenda? Soluta cupiditate vero labore nulla iusto?</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;