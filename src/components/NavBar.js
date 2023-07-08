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
    <header className='w-full px-20 py-8 font-medium flex items-center justify-between'>
        <nav className='flex-1 space-x-5'>
            <CustiomLink href='/' title='Home'/>
            <CustiomLink href='/about' title='About'/>
            <CustiomLink href='/project' title='Project'/>
            <CustiomLink href='/journal' title='Journal'/>
  
        </nav>
        <Logo className='flex-1'/>
        <nav className='flex  flex-1 w-full justify-end space-x-6'>
            <motion.a href='/' 
                whileHover={{y:-2,}}
                whileTap={{scale:0.9}}
            >
                <FaGithubSquare className='h-7 w-7'/>
            </motion.a>
            <motion.a href='/' 
                whileHover={{y:-2,}}
                whileTap={{scale:0.9}}
            >
                <FaLinkedin className='h-7 w-7' />
            </motion.a>
            <motion.a href='/' 
                whileHover={{y:-2,}}
                whileTap={{scale:0.9}}
            >
                <FaTwitterSquare className='h-7 w-7'/>
            </motion.a>
            <motion.a href='/' 
                whileHover={{y:-2,}}
                whileTap={{scale:0.9}}
            >
                <BiCoffeeTogo className='h-7 w-7'/>
            </motion.a>
        </nav>
    </header>
  )
}

export default NavBar
