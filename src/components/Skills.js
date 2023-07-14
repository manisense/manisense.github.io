import React from 'react'
import Image from 'next/image'
import ReactLogo from '../../public/images/react-logo.png'
import { FaReact } from 'react-icons/fa'
import {SiMongodb, SiExpress, SiNextdotjs, SiReact, SiPhp, SiPython, SiDjango, SiMysql, SiApache} from 'react-icons/si'
const Skills = () => {
  return (

    <div className="container my-24 mx-auto px-8">


      <section className="mb-32 text-center">
      <h2 class=" text-center text-black text-4xl font-bold">Services</h2>
        <div className="py-12 md:px-12">
          <div className="container mx-auto xl:px-32">
            <div className="flex grid items-center lg:grid-cols-2">
              <div className="mb-8 md:mt-8 lg:mt-0 lg:mb-0">
                <div
                  className="relative z-[1] block rounded-lg  px-12 py-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                  <h2 className="mb-6 text-3xl font-bold">
                    Expertise Collection
                    
                  </h2>
                  <div className="grid gap-x-6 md:grid-cols-3">
                    <div className=" my-6 flex items-center justify-center">
                    <SiMongodb size={69} />
                    </div>
                    <div className="my-6 flex items-center justify-center">
                    <SiExpress size={69} />
                    </div>
                    <div className="my-6 flex items-center justify-center">
                    <SiReact size={69} />
                    </div>
                    <div className="my-6 flex items-center justify-center">
                    <SiNextdotjs size={69} />
                    </div>
                    
                    <div className="my-6 flex items-center justify-center">
                    <SiPython size={69} />
                    </div>
                    <div className="my-6 flex items-center justify-center">
                    <SiDjango size={69} />
                    </div>
                    <div className="my-6 flex items-center justify-center">
                    <SiPhp size={69} />
                    </div>
                    <div className="my-6 flex items-center justify-center">
                    <SiMysql size={69} />
                    </div>
                    <div className="my-6 flex items-center justify-center">
                    <SiApache size={69} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:mb-12 lg:mb-0">
                <Image width={12} height={12} src="https://mdbcdn.b-cdn.net/img/new/textures/full/166.jpg"
                  className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </div>

  )
}

export default Skills
