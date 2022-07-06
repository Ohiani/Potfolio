import React from 'react';
import {useState, useEffect} from 'react';
import {AppWrap, MotionWrapper} from '../../Wrapper';
import { motion} from 'framer-motion';
import './skills.scss';

const Skills = () => {
  return (
    <>
      <h2 className='head-text'><span> Skills </span> And <span> Experiences</span></h2>
    </>
  )
}

export default AppWrap(
  MotionWrapper(Skills, 'app__skills'), 
  'skills',
  'app__whitebg'
  )