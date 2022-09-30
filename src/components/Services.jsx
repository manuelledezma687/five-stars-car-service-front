import React from 'react';
import '../styles/Services.scss';

const Services = () => {
    return (
        <section className='service-main'>
            <h1 className="services">Services</h1>
            <div className="service-list"></div>
            <div className="container-service">
                <img src="" alt="" />
                <h2 className='service-title'>Stroll through the city</h2>
                <p>If you come for a walk with your family, or simply want to make a delivery or process, our service by hour or distance is the solution.</p>
            </div>
            <div className="container-service">
                <img src="" alt="" />
                <h2>Top cars and drivers</h2>
                <p>We are known for providing you with a quality service, all our cars go to the service every 15 days, to check their operation. Each driver goes through company filters and we value the qualifications on each trip to offer quality service.</p>
            </div>
            <div className="container-service">
                <img src="" alt="" />
                <h2>Transfer on time and safely</h2>
                <p>At FiveStar we offer you punctuality, security and trust, for your transfers from the airport to your meeting point.</p>
            </div>
            <div className="container-service">
                <img src="" alt="" />
                <h2>Stroll through the city</h2>
                <p>Con nuestro codigo de bienvenida obten un 20% de descuento en tu viaje.</p>
            </div>
        </section>
    );
}
export default Services;