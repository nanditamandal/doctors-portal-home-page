import React from 'react';
import cavity from '../../../images/cavity.png';
import fluoride from '../../../images/flouride.png';
import teeth from '../../../images/teeth.png';
import ServicesDetails from '../ServiceDetails/ServicesDetails';

const serviceData=[
    {
        name: 'Fluoride Treatment',
        img: fluoride,
    },
    {
        name: 'Cavity Filling',
        img: cavity,
    },
    {
        name: 'Teeth Whiting',
        img:teeth,
    },

]

const Services = () => {
    return (
        <section className="services-container mt-5">
           <div>
           <h5 style={{color: '#1CC7C1'}}>Our Services</h5>
            <h2 >Services We Provide</h2>
           </div>
           <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
            {
                serviceData.map( service => <ServicesDetails service ={service}></ServicesDetails>)
            }

            </div>
        </div>
        </section>
    );
};

export default Services;