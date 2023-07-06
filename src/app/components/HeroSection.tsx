"use client";
import Link from "next/link";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

export const HeroSection = () => {
  return (
    <div id="home" className="flex h-screen w-full flex-col text-center">
      <div className="mx-auto flex h-full w-full max-w-[1240px] items-center justify-center p-2">
        <div>
          <h1 className="py-4 text-4xl font-bold">
            Hola Soy <span className="text-[#0e79b2] "> Junior </span>
          </h1>
          <h1 className="py-2 text-2xl font-bold">
            Desarrollador Web Front-End
          </h1>
          <p className="m-auto py-4 text-2xl font-bold sm:max-w-[70%]">
            Estoy enfocado en la construcción de aplicaciones web front-end
          </p>
          <div className="m-auto flex max-w-[330px] items-center justify-between py-4">
            <a
              href='https://www.linkedin.com/in/junior-guevara-tanta/"'
              target="_blank"
              rel="noreferrer"
            >
              <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                <FaLinkedinIn size={25} />
              </div>
            </a>
            <a
              href="https://github.com/juniorgtt"
              target="_blank"
              rel="noreferrer"
            >
              <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                <FaGithub size={25} />
              </div>
            </a>
            <Link
              download
              href="/CV_JuniorGuevaraTanta.pdf"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                <BsFillPersonLinesFill size={25} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center pb-24 sm:pb-10">
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
