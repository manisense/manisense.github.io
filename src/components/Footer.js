import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-semibold text-lg '>
      <Layout className='py-12 flex items-center justify-between '>
        <div className='flex items-center justify-center'>
            <span href='/'>2023 &copy; All Rights Are Reserved</span>
        </div>
        <div className='flex items-center justify-center'>
            Made with <span className='text-primary text-xl px-1'>&#9825;</span> by <Link href='/'> Manish</Link>
        </div>
        <div className='flex items-center justify-center'>
            <Link href='https://aitool.studio/' target={'_blank'}>Ai Tool Studio</Link>
        </div>

      </Layout>
    </footer>
  )
}

export default Footer
