"use client"
import Link from 'next/link'
import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiArrowDown } from "react-icons/hi"

export const HeroSection = () => {
  return (
    <div id='home' className='w-full h-screen text-center flex flex-col'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1 className='py-4 font-bold text-4xl'>
            Hola Soy <span className='text-[#0e79b2] '>  Junior </span>
          </h1>
          <h1 className='py-2 font-bold text-2xl'>Desarrollador Web Front-End</h1>
          <p className='py-4 font-bold text-2xl sm:max-w-[70%] m-auto'>
            Estoy enfocado en la construcción de aplicaciones web front-end
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/junior-guevara-tanta/"'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn size={25} />
              </div>
            </a>
            <a
              href='https://github.com/juniorgtt'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub size={25} />
              </div>
            </a>
            <Link href='/CV_JuniorGuevaraTanta.pdf'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill size={25} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center pb-10">
        <ScrollLink
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </ScrollLink>

      </div>
    </div>
  );
};