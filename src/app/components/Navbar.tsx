'use client'
import { useTheme } from "next-themes"
import { useState } from "react"
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link } from "react-scroll"
interface NavItem {
  label: string,
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Inicio",
    page: "home"
  },
  {
    label: "Sobre mi",
    page: "about"
  },
  {
    label: "Proyectos",
    page: "projects"
  },
]

export const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const [showNavbar, setShowNavbar] = useState(false)
  return (
    <header className="w-full max-auto px-4 bg-white shadow fixed top-0 z-50 sm:px-20 dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center  justify-between py-3">
            <Link className="cursor-pointer"
              to="home"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
              <div className="md:py-5 md:block">
                <h2 className="text-2xl font-bold">
                  Junior Guevara
                </h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button onClick={() => setShowNavbar(!showNavbar)}>
                {showNavbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${showNavbar ? "block" : "hidden"}`}>
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map(({ label, page }, idx) => (
                <Link
                  key={idx}
                  to={page}
                  className={
                    "block lg:inline-block text-neutral-900  hover:text-neutral-500 cursor-pointer dark:text-neutral-100 dark:hover:text-neutral-500"
                  }
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => setShowNavbar(!showNavbar)}
                >
                  {label}
                </Link>
              ))}
              {
                currentTheme === "light" ?
                  (
                    <button
                      onClick={() => setTheme("dark")}
                      className="bg-slate-100 p-2 rounded-xl">
                      <RiMoonFill size={25} color="black"></RiMoonFill>
                    </button>
                  )
                  :
                  (

                    <button
                      onClick={() => setTheme("light")}
                      className="bg-slate-100 p-2 rounded-xl">
                      <RiSunLine size={25} color="black"></RiSunLine>
                    </button>
                  )
              }
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}