import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './About.scss';

import { images } from '../../constants';

const abouts = [
  { 
    title: 'Full-Stack Web Development',
    description: 'UCLA Coding BootCamp',
    imgUrl: images.UCLA
  },
  { 
    title: 'Public Policy Research',
    description: 'B.A Political Science',
    imgUrl: images.Wooster
  },
  { 
    title: 'Burmese Food Entrepreneur',
    description: 'Mandalay Morning Star LLC',
    imgUrl: images.MSLogoXL
  },
  { 
    title: 'USPTA Tennis Instructor',
    description: 'PlaySafe & CPR Certified',
    imgUrl: images.USPTA
  },
];


const About = () => {
  return (
    <>
      <h2 className='head-text'>
        Critical+Divergent
          <span>Design Thinking</span>
        <br/>
        Empathetic Leadership
          <span>Strategic Planning</span>
      </h2>
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 1, type: 'tween' }}
            className='app__profiles-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title}/>
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About;