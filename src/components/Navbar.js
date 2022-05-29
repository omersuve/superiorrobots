import React from "react";
import { FaBars, FaDiscord } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import logo from '../assets/img/logo.png'
import logo2 from '../assets/img/logo2.png'


const scrollToHome = () => {
  window.scrollTo({ top: 0, behaviour: "smooth" })
}


export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a>
              <button className="mb-1 leading-relaxed flex items-center py-1 whitespace-nowrap uppercase logo">
                <img src={logo2} className="w-20" />
                <p className="text-logo text-2xl">SUPERIOR ROBOTS</p>
              </button>
            </a>
          </div>
          <div
            className={
              "lg:flex md:flex-grow items-center" +
              (navbarOpen ? " h-full items-center mx-auto justify-center text-center " : " hidden")
            }>
            <ul className="md:flex md:flex-col lg:flex-row md:list-none lg:ml-auto" >
              <li className="nav-item pt-14 md:pt-0">
                <a
                  className="px-3 py-2 md:flex items-center text-2xl md:text-xl  text-white hover:opacity-75 text-center"
                >
                  <span className="cursor-display">Home</span>
                </a>
              </li>
              <li className="nav-item pt-14 md:pt-0">
                <a
                  className="px-3 py-2 md:flex items-center text-2xl md:text-xl  text-white hover:opacity-75 text-center"
                >
                  <span className="cursor-display">Origin</span>
                </a>
              </li>

              <li className="nav-item pt-2 md:pt-0">
                <a
                  className="px-2 py-2 md:flex items-center text-2xl md:text-xl  text-white hover:opacity-75"
                >
                  <span className="cursor-display">Blueprint</span>
                </a>
              </li>
              <li className="nav-item pt-2 md:pt-0">
                <a
                  className="px-2 py-2 md:flex items-center text-2xl md:text-xl  text-white hover:opacity-75"
                >
                  <span className="dolar cursor-display">$</span>
                  <span className="cursor-display">SR</span>
                </a>
              </li>
              <li className="nav-item pt-2 md:pt-0">
                <a
                  className="px-2 py-2 md:flex items-center text-2xl md:text-xl  text-white hover:opacity-75"
                >
                  <span className="cursor-display">Team</span>
                </a>
              </li>
              <li className="nav-item pt-2 md:pt-0">
                <a
                  className="px-2 py-2 md:flex items-center text-2xl md:text-xl  text-white hover:opacity-75"
                >
                  <span className="cursor-display">Faq</span>
                </a>
              </li>
              <li className="nav-item pt-2 md:pt-0">
                <a
                  className="px-2 py-2 md:flex items-center text-2xl md:text-xl  text-white hover:opacity-75"
                >
                  <span className="cursor-display">SUPR</span>
                </a>
              </li>
              <li className="nav-item twitter">
                <a href="https://twitter.com/home" target="_blank">
                  <BsTwitter />
                  <span>Twitter</span>
                </a>
              </li>
              <li className="nav-item discord">
                <a href="https://twitter.com/home" target="_blank">
                  <FaDiscord />
                  <span>Discord</span>
                </a>
              </li>
              <li className="nav-item ml-3">
                <a className="text-white px-5 py-4 whitepaper" href="https://superiorrobots.medium.com/" target="_blank">
                  WhitePaper
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}