import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { client, urlFor } from '../../client';
import './Skills.scss';

const Skills = () => {

  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query)
      .then((data) => {
        setExperiences(data);
      })
    client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data);
      })
  }, [])

  return (
    <>
      <h2 className='head-text'>
        <span> Skills </span> & <span> Experiences </span>
      </h2>
      <div className='app__skills-container'>
    {/* Skills */}
        <motion.div className='app__skills-list'>
          {skills.slice(0).sort((a, b) => a - b).reverse().map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1]}}
              transition={{duration: 0.5}}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name}/>
              </div>
              <p className='p-text'>
                {skill.name}
              </p>
            </motion.div>  
          ) )}
        </motion.div>
    {/* Experiences */}
        <div className='app__skills-exp'>
          {experiences.slice(0).sort((a, b) => a - b).reverse().map((experience) => (
            <motion.div
              className='app__skills-exp-item'
              key={experience.year}
            >
              <div className='app__skills-exp-year'>
                <p className='bold-text'>
                  {experience.year}
                </p>
              </div>
              <motion.div className='app__skills-exp-works'>
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1]}}
                      transition={{duration: 0.5}}
                      className='app__skills-exp-work'
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className='bold-text'>
                        {work.name}
                      </h4>
                      <p className='p-text'>
                        {work.company}
                      </p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect='solid'
                      arrowColor='#fff'
                      className='skills-tooltip'
                      key={work.desc}
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div> 
          ))}
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills'
  );