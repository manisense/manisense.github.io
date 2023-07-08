import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';


const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center m-2'>
      <MotionLink href='/' className=' h-10 px-2 bg-dark text-light flex items-center font-bold justify-center rounded-lg text-xl' 
      whileHover={{
        scale:1.2,
        rotate:360,
        transition:{
            duration:0.5,
            yoyo:Infinity
        },
        }}
        whileTap={{scale:0.9}}
      >
        Manish
      </MotionLink>
    </div>
  )
}

export default Logo
