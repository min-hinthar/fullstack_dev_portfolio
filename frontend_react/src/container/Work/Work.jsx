import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { urlFor } from '../../client';

import './Work.scss';

const Work = () => {

  const [activeFilter, setActiveFilter] = useState('All')

  const handleWorkFilter = (item) => {

  }

  return (
    <>
      <h2 className='head-text'>
        My Creative <span>Portfolio</span>
        <br/>
        Showcase
      </h2>
    {/* Category Filter */}
      <div className='app__work-filter'>
        {['MERN Stack', 'OpenAI', 'React JS', 'GraphQL', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ""}`}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  )
}

export default Work;