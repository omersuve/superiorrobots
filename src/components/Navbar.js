import React from "react";
import { FaBars, FaDiscord } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import logo from '../assets/img/logo.png'


const scrollToHome = () => {
  window.scrollTo({ top: 0, behaviour: "smooth" })
}


export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <button className=" text-fonto leading-relaxed flex items-center mr-4 py-2 whitespace-nowrap uppercase logo" onClick={scrollToHome}>
              <img src={logo} className="w-24" />
              <p className="text-logo text-4xl">SUPERIOR ROBOTS</p>
            </button>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars size={"28px"} />
            </button>
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
                  href="#about"
                >
                  <span>Story</span>
                </a>
              </li>

              <li className="nav-item pt-2 md:pt-0">
                <a
                  className="px-2 py-2 md:flex items-center text-2xl md:text-xl  text-white hover:opacity-75"
                  href="#roadmap"
                >
                  <span>Roadmap</span>
                </a>
              </li>
              <li className="nav-item pt-2 md:pt-0">
                <a
                  className="px-2 py-2 md:flex items-center text-2xl md:text-xl  text-white hover:opacity-75"
                  href="#tokenomics"
                >
                  <span className="dolar">$</span>
                  <span >AWR</span>
                </a>
              </li>
              <li className="nav-item pt-2 md:pt-0">
                <a
                  className="px-2 py-2 md:flex items-center text-2xl md:text-xl  text-white hover:opacity-75"
                  href="#teams"
                >
                  <span>Team</span>
                </a>
              </li>
              <li className="nav-item pt-2 md:pt-0">
                <a
                  className="px-2 py-2 md:flex items-center text-2xl md:text-xl  text-white hover:opacity-75"
                  href="#faq"
                >
                  <span>Faq</span>
                </a>
              </li>
              <li className="nav-item pt-2 md:pt-0">
                <a
                  className="px-2 py-2 md:flex items-center text-2xl md:text-xl  text-white hover:opacity-75"
                  href="/game"
                >
                  <span>P2E</span>
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