import React from 'react'
import { motion } from 'framer-motion'

const MotionWrapper = (Component, classNames) => function HOC() {
  return (
    <motion.div
    whileInView={{y: [100, 75, 50, 25, 0], opacity:[0, 0, 0.5, 0.5, 1]}}
    transition={{duration: 0.9}}
    className = {`${classNames} app__flex`}
    >
        <Component/>
    </motion.div>
  )
}

export default MotionWrapper