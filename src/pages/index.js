import Layout from '@/components/Layout'
import Head from 'next/head'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import Image from 'next/image'
import Animated from '@/components/Animated'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <Head>
        <title>Manish Meena - Portfolio</title>
        <meta name="description" content="This is a personal portfolio website." />

      </Head>
      <main className="">                   
        <Layout className='pt-0'>
          <div className="flex flex-wrap items-center justify-between  py-2">
            <div className='md:w-1/2'>
              <Image src={profilePic} alt="Picture of the author" className='w-full h-auto'/>
            </div>
            <div className='md:w-1/2'>
              <Animated text='Welcome to the creative sandbox of lifelong learner and a software developer.'/>
      
              <p className='text-sm font-medium my-2'>I&apos;m Manish, A full-stack developer with a passion for crafting interactive digital solutions. Leveraging my tech skills, I transform complex problems into intuitive user experiences. </p>
              <div className='flex items-center mt-5'>
                <Link href='/dummy.pdf' target={'_blank'} 
                className='flex items-center bg-dark m-2 mx-5 text-light p-2 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-transparent hover:border-dark hover:bg-light hover:text-dark'
                >Resume</Link>
                <Link href='mailto:imanishmeenaa@gmail.com' target={'_blank'}
                className='flex items-center bg-dark m-2 mx-5 text-light p-2 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-transparent hover:border-dark hover:bg-light hover:text-dark'
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
