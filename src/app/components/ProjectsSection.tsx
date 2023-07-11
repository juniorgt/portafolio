"use client";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Gift Expert App",
    description:
      "Esta es una aplicación web básica para buscar gift en la web utilizando tecnologías HTML, CSS, JavaScript y React. Se utilizo la api de Giphy para obtener los gifs.",
    image: "/GiftExpertApp.png",
    github: "https://github.com/juniorgtt/react-gifexpertapp",
    link: "https://react-gifexpertapp-lime.vercel.app/",
  },
  {
    name: "New Homepage",
    description:
      "Es el diseño el inicio de una página de noticias utilizando tecnologías HTML, CSS, JavaScript,  React y Tailwind CSS.",
    image: "/newHomePage.png",
    github: "https://github.com/juniorgtt/News-HomePage",
    link: "https://news-home-page-kohl.vercel.app/",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center text-4xl font-bold">
        Proyectos
        <hr className="mx-auto my-4 h-1 w-6 rounded border-0 bg-[#0e79b2]"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="animation-delay-2 flex  animate-slideUpCubiBezier flex-col md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="mb-6 text-4xl font-bold">{project.name}</h1>
                    <p className="mb-4 text-xl leading-7 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row space-x-4 align-bottom">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="cursor-pointer transition-transform hover:-translate-y-1"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="cursor-pointer transition-transform hover:-translate-y-1"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};
