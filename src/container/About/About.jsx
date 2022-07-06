import React,{useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import {images} from '../../constants'
import {AppWrap, MotionWrapper} from '../../Wrapper'
import './about.scss'


const abouts = [
  {
  title: 'Web Developer',
  description: 'I am a self thought web developer, with a passion to grow in this field.',
  imgUrl: images.about03,
},
  {
  title: 'Frontend',
  description: 'I enjoy frontend dev because it deals with creativity, and lets me express myself',
  imgUrl: images.about01,
},
  {
  title: 'Backend',
  description: 'I am still not fully confident in backend web Dev, but i am getting there.',
  imgUrl: images.about02,
},
]


const About = () => {

  return (
    <>
      <h2 className='head-text'>
        I know that <span>Good Design <br /> </span> means <span>Good business</span>
      </h2>

      <div className='app__profile'>
        {abouts.map((about, index)=>(
          <motion.div
          whileInView={{opacity:1}}
          whileHover={{scale:1.1}}
          transition={{duration:0.5, type:'tween'}}
          key={about.title + index}
          className='app__profile-item'
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
            <p className='p-text'  style={{marginTop:10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrapper(About, "app__about"), 
  'about',
  "app__whitebg"
  );