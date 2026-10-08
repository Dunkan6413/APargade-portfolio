import { motion } from 'framer-motion'
import React from 'react'

export default function AnimatedLayout({children}) {
    const variants = {
        hidden : {opacity: 0, x: 0, y: 20},
        enter : {opacity: 1, x: 0, y: 0},
        exit : {opacity: 0, x: 0, y: 20},
    }

  return (
    <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{duration: 0.5, ease:"easeInOut"}}
        className='relative'
    >
        {children}
    </motion.div>
  )
}
