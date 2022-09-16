import React from 'react';
import '../styles/Hero.scss';
import corolla from '../assets/images/white-corolla.png';
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="hero-container">
            <div className='hero-banner'>
                <div className='content-box'>
                    <h1>WE ALWAYS ACCOMPANY YOU</h1>
                    <p>If you travel to Atlanta for pleasure or business, FiveStar Car service helps you move around the City comfortably and safely 24 hours a day.</p>
                </div>
                <motion.img 
                whileHover={{
                    x: 20,
                    y: 20,
                    scale: 1.1,
                    rotate: 0,
                    fixed:0
                }}
                src= {corolla} alt="corolla" className="white-corolla" />
            </div>

            <div className='hero-calculator'>
                <h1>Example</h1>
                <p>Example</p>
            </div>
        </div>

    );
}

export default Hero;
