import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import {BiCoffeeTogo} from 'react-icons/bi'
import { motion } from 'framer-motion';
import boo from '../../public/images/boobs.png'
import Image from 'next/image'
const CustiomLink = ({href, title, className=""}) => {
    const router = useRouter();
    console.log(router.asPath)
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] bg-dark absolute -bottom-0.5 left-0 
              group-hover:w-full transition-[width] ease duration-300
             ${router.asPath === href ? "w-full" : "w-0"}`}></span>
        </Link>
    )
}

const NavBar = () => {
  return (
    <header className='w-full fixed z-10 px-16 py-4 font-medium flex items-center justify-center bg-opacity-95 backdrop-blur '>
        <nav className='flex-1  sm:space-x-3 lg:space-x-6 !visible hidden md:!flex'>
            <CustiomLink href='/' title='Home'/>
            <CustiomLink href='/about' title='About'/>
            <CustiomLink href='/projects' title='Projects'/>
            <CustiomLink href='/journals' title='Journals'/>
  
        </nav>
        <Logo className='flex-1'/>
        <nav className='!visible hidden md:!flex flex-1 w-full justify-end sm:space-x-3 lg:space-x-6'>
            <motion.a href='https://github.com/manisense' 
                whileHover={{y:-2,}}
                whileTap={{scale:0.9}}
            >
                <FaGithubSquare className='h-7 w-7'/>
            </motion.a>
            <motion.a href='https://www.linkedin.com/in/muneshmeena/' 
                whileHover={{y:-2,}}
                whileTap={{scale:0.9}}
            >
                <FaLinkedin className='h-7 w-7' />
            </motion.a>
            <motion.a href='https://twitter.com/manishdeux' 
                whileHover={{y:-2,}}
                whileTap={{scale:0.9}}
            >
                <FaTwitterSquare className='h-7 w-7'/>
            </motion.a>
            <motion.a href='https://www.buymeacoffee.com/manisense' 
                whileHover={{y:-2,}}
                whileTap={{scale:0.9}}
                target='_blank'
            >
                <BiCoffeeTogo className='h-7 w-7'/>
            </motion.a>
        </nav>
    </header>
  )
}

export default NavBar
