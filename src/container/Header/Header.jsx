import React from 'react';
import { motion } from 'framer-motion';
import {images} from '../../constants';
import './header.scss';
import {AppWrap} from '../../Wrapper';


const scaleVariants = {
  whileInView:{
    scale:[0,1],
    opacity:[0,1],
    transition:{
      duration:1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
      whileInView={{x:[-100, 0], opacity: [0, 1]}}
      transition={{duration: 0.9}}
      className='app__header-info'
      >
        <div 
        className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>😁</span>
            <div style={{marginleft:20}}>
              <p className='p-text'>Hello, i am</p>
              <h1 className='head-text'>Frank</h1>
            </div>
          </div>


          <div className='tag-cmp app__flex'>
            <p className='p-text'>Web Developer</p>
            <p className='p-text'>Freelancer</p>
          </div>

        </div>

      </motion.div>

      <motion.div
      whileInView={{ opacity: [0, 1]}}
      transition={{duration: 0.5, delayChildren: 0.5}}
      className='app__header-img'
      >
        <img src={images.profile2} alt="profile_bg" />


        <motion.img 
        whileInView={{scale:[0, 1] }}
        transition={{duration: 1, ease: 'easeInOut'}}
        src={images.circle} 
        alt="profile_circle"
        className='overlay_circle'
        />
      </motion.div>

      <motion.div
      variant={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className='app__header-circles'>
          {[images.git, images.react, images.sass, images.css].map((item, index)=>(
            <div className='cmp__circle app__flex' key={`item-${index}`}>
              <img src={item} alt="circle" />
            </div>
          ))}
      </motion.div>

    </div>
  )
}

export default AppWrap(Header, 'home')