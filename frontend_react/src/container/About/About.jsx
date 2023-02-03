import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';

import './About.scss';

import { urlFor, client } from '../../client';

const About = () => {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {

    const query = '*[_type == "abouts"]';
    
    client.fetch(query)
      .then((data) =>
        setAbouts(data))
  }, []);
  

  return (
    <>
      <h2 className='head-text'>
        Critical+Divergent <span>Design Thinking</span>
        <br/>
        Empathetic Leadership <span>Strategic Planning</span>
      </h2>
      <div className='app__profiles'>
        {abouts.slice(0).reverse().map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 1, type: 'tween' }}
            className='app__profiles-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title}/>
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

export default AppWrap(About, 'about');