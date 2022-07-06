import React, {useState, useEffect} from 'react';
import {AppWrap, MotionWrapper} from '../../Wrapper';
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi';
import { motion} from 'framer-motion';

import Data from './Data'
import Brands from './Brands'
import './testimonials.scss'

const Testimonials = () => {

  const [brands, setBrands] = useState(Brands);
  const [testimonials, setTestimonials] = useState(Data);
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    setTestimonials(Data)

  }, [])

  const handleClick = (index)=>{
    setCurrentIndex(index)
  }
  
  
  const test = testimonials[currentIndex];
  return (
    <>

      {testimonials.length &&
        
          <div
          className='app__testimonial-item app__flex'
          key={test.name}
          >
            <img  src={test.img} alt={testimonials[currentIndex].name} />
            <div className='app__testimonial-content'>
              <p className='p-text'>{test.feedback}</p>
              <div>
                <h4 className='bold-text'>{test.name}</h4>
                <h5 className='p-text'>{test.expertise}</h5>
              </div>
            </div>
          </div>
        
      }

        <div className='app__testimonial-btn app__flex'>
          <div 
          onClick={()=>handleClick(currentIndex === 0 ? testimonials.length - 1: currentIndex - 1)}
          className='app__flex'
          > 
            <HiChevronLeft/>
          </div>
        
          <div 
          onClick={()=>handleClick(currentIndex === testimonials.length - 1 ? 0: currentIndex + 1)}
          className='app__flex'
          > 
            <HiChevronRight/> 
          </div>
        </div>

        <div className='app__testimonial-brands app__flex'>
          {brands.map((brand)=>(
            <motion.div
             whileInView={{opacity: [0, 1]}}
             transition={{duration: 0.5, type: 'tween'}}
             key={brand.id}>
                <img src={brand.img} alt={brand.name} />
            </motion.div>
          ))}
        </div>
    </>
  )
}

export default AppWrap(
  MotionWrapper(Testimonials, 'app__testimonials'), 
  'testimonials',
  )