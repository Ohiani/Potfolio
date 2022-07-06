import React, {useState} from 'react'
import { images } from '../../constants'
import {AppWrap, MotionWrapper} from '../../Wrapper'
import './footer.scss'

const Footer = () => {

  const [formData, setformData] = useState({name: '', email: '',message:'',})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const{name, email, message} = formData;

  const handleChangeInput = (e)=>{
    const { name, value} = e.target;

    setformData({ ...formData, [name]: value})
  }

  const handleSubmit = ()=> {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    console.log(contact);
    
    setTimeout(() => {
      setIsFormSubmitted(true);
      setLoading(false);
    }, 1000);

  }

  return (
    <>
      <h2 className='head-text'>Feel <span>Free</span> to <span>Chat</span> with me</h2>
   
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href="mailto:franklucky0@gmail.com" className='p-text'>franklucky0@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt="phone" />
          <a href="tel:+234 905 550 8497" className='p-text'>+234 905 550 8497</a>
        </div>
      </div>


      {!isFormSubmitted ?

      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input onChange = {handleChangeInput} type="text" placeholder='Kindly enter your Name' name='name' value={name} className='p-text' />
        </div>
        <div className='app__flex'>
          <input onChange = {handleChangeInput} type="text" placeholder='Email' name='email' value={email} className='p-text' />
        </div>

        <div>
          <textarea
          className='p-text'
          placeholder='Your message'
          name='message'
          value = {message}
          onChange = {handleChangeInput}
          ></textarea>
        </div>
      
          <button type='button' className='p-text' onClick={handleSubmit}>{loading ? "Sending" : 'Send Message'}</button>
       
      </div> : 
      <div>
          <h3 className='head-text'>Thanks for getting in touch!!</h3>
      </div>}
      
    </>
  )
}

export default AppWrap(
  MotionWrapper(Footer, 'app__footer'),
     'contact',
     'app__whitebg');