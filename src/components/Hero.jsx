import React from 'react';
import '../styles/Hero.scss';
import corolla from '../assets/images/white-corolla.png';
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="hero-container">
            <div className='hero-banner'>
                <div className='content-box'>
                    <h1>Siempre te acompañamos</h1>
                    <p>Si viajas a Atlanta por placer o negocio FiveStar Car service, te ayuda a trasladarte por la Ciudad cómodo y seguro las 24 Horas.</p>
                </div>
                <motion.img 
                whileHover={{
                    x: 70,
                    y: 40,
                    scale: 1.1,
                    rotate: 0,
                    fixed:0
                }}
                src= {corolla} alt="corolla" className="white-corolla" />
            </div>

            <div className='hero-calculator'>

            </div>
        </div>

    );
}

export default Hero;
