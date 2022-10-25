import React from 'react';
import {useState} from 'react';
import {AppWrap, MotionWrapper} from '../../Wrapper';
import { motion} from 'framer-motion';
import ReactTooltip from 'react-tooltip';


import experiences from './experience';
import Data from './Data';



import './skills.scss';
import { useEffect } from 'react';

const Skills = () => {

  const [skills, setSkills] = useState(null);
  const [experience, setExperience] = useState(null);

  useEffect(()=>{
    setSkills(Data);
    setExperience(experiences)
  },[])


  return (
    <>
      <h2 className='head-text'><span> Skills </span> And <span> Experiences</span></h2>

      <div className='app__skills-container'>

        <motion.div className="app__skills-list">
        
          {skills?.map((skill)=> (
            <motion.div 
              whileInView={{opacity: [0,1]}}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div className='app__flex' >
                <img src={skill.Img} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className='app__skills-exp'>
            {experience?.map((work)=>(
              <motion.div 
              className='app__skills-exp-item'
              key={work.Year}>
                <div 
                  className='app__skills-exp-year'
               >
                    <h4 className='bold-text'>{work.Year}</h4>
                </div>

                
                    <motion.div 
                      className='app__skills-exp-works'   >

                        
                       <p  data-tip
                      data-for={work.Place}>{work.Place}</p>
                       <ReactTooltip
                          id={work.Place}
                          effect='solid'
                          arrowColor='#fff'
                          className='skills-tooltip'>
                            {work.experience}
                        </ReactTooltip>

                        {work?.workDone?.map((exp, i)=>(
                          <motion.ul className='app__skills-exp-work'
                          whileInView={{opacity: [0,1]}}
                          transition={{duration: 0.5}}
                          key={i}>
                            <li>{exp.i}</li>
                            <li>{exp.ii}</li>
                            <li>{exp.iii}</li>
                            {(exp.iv || exp.v ? (
                              <li>{exp.iv}</li>,
                              <li>{exp.v}</li>
                            ) : '')}
                        </motion.ul>
                   
                         ))}
                      </motion.div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrapper(Skills, 'app__skills'), 
  'skills'
  )