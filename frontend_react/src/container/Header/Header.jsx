import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 2,
      ease: 'easeInOut',
      delayChildren: 0.5,
    }
  }
}

const Header = () => {
  return (
    <div id='home' className='app__header app__flex'>
{/* Header & Name Badge */}
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Howdy! Mingalar-bar!</p>
              <h1 className='head-text'>I'm Min!</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Full-Stack Developer</p>
            <p className='p-text'>Public Policy Research</p>
            <p className='p-text'>Burmese Food Entrepreneur</p>
          </div>
        </div>
      </motion.div>
{/* Header IMG */}
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2, delayChildren: 1 }}
        className='app__header-img'
      >
        <img src={images.MinP2} alt='profile_bg' />
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 2, delayChildren: 1, ease: 'easeInOut' }}
            src={images.circle}
            alt='profile_circle'
            className='overlay_circle'
          />
      </motion.div>
{/* Circles */}
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.node, images.vite, images.git, images.graphql, images.css, images.react, images.javascript].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='circle'/>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Header;