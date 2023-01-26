
import { motion } from 'framer-motion'
import {images} from '../../constants'
import {AppWrap, MotionWrapper} from '../../Wrapper'
import './about.scss'


const abouts = [
  {
  title: 'Who am i ?',
  description: 'I am a self thought web developer, with a passion to grow in this field.',
  imgUrl: images.me,
},
  {
  title: `What i'm good at ??`,
  description: 'I enjoy frontend web development because it deals with creativity, and allows me express myself, without having to speak.',
  imgUrl: images.about01,
},
  {
  title: `What i'm working on ??? `,
  description: 'I am still not fully confident in backend web Development, but i am working hard to become a Fullstack Web Developer.',
  imgUrl: images.about02,
},
]


const About = () => {

  return (
    <>
      <h2 className='head-text'>
        Welcome <span>To My </span> Space <br /><span></span>
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

      <div className='app__profile-about'> 
      {/*<h2>A Little <span>History</span> About Me </h2>*/}
      <p className='about-text p-text'><span>Frank Lucky</span> is a design oriented Frontend web developer, he aspires to build alluring and functional web applications through carefully crafted code and user-friendly designs. After graduating with a B.Eng in Electrical and Electronics Engineering in 2022, Frank has focused his professional career almost entirely on Web development. <br />
      
       <br/> Specializing in JavaScript<span>(React JS)</span>, CSS including frameworks like <span>(SCSS, Tailwind, Material UI,)</span>  etc for building reuseable code and working with countless APIs and database systems to create responsive and optimizable web applications.
      when not glued to his computer, Frank is a lover of sports and can be fround either watching the next EPL game or out with friends practicing some footballing skills. </p></div>
    </>
  )
}

export default AppWrap(
  MotionWrapper(About, "app__about"), 
  'about',
  "app__whitebg"
  );