import React from "react";
import { FaBars, FaDiscord, FaInstagram } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import logo2 from '../assets/img/logo2.png'
import blacklogo from '../assets/img/output-onlinepngtools2.jpeg'


const scrollToHome = () => {
  window.scrollTo({ top: 0, behaviour: "smooth" })
}


export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex items-center justify-between">
        <div className="container mx-auto flex items-center justify-between">
          <div className="logo-and-text">
            <a>
              <button className="flex items-center">
                <img src={blacklogo} className="logo" />
                <p className="text-logo text-xl">SUPERIOR ROBOTS</p>
              </button>
            </a>
          </div>
          <div
            className={
              "lg:flex md:flex-grow items-center w-auto" +
              (navbarOpen ? "h-full items-center mx-auto justify-center text-center " : " hidden")
            }>
            <ul className="md:flex md:flex-col lg:flex-row md:list-none lg:ml-auto" >
              <li className="nav-item nav-tabs">
                <a
                  className="px-2 py-2 md:flex items-center text-2xl md:text-xl  text-white hover:opacity-75 text-center"
                >
                  <span className="cursor-display">Home</span>
                </a>
              </li>
              <li className="nav-item nav-tabs">
                <a
                  className="px-2 py-2 md:flex items-center text-2xl md:text-xl  text-white hover:opacity-75 text-center"
                >
                  <span className="cursor-display">Origin</span>
                </a>
              </li>

              <li className="nav-item nav-tabs">
                <a
                  className="px-2 py-2 md:flex items-center text-2xl md:text-xl  text-white hover:opacity-75"
                >
                  <span className="cursor-display">Blueprint</span>
                </a>
              </li>
              <li className="nav-item nav-tabs">
                <a
                  className="px-2 py-2 md:flex items-center text-2xl md:text-xl  text-white hover:opacity-75"
                >
                  <span className="dolar cursor-display">$</span>
                  <span className="cursor-display">SUPR</span>
                </a>
              </li>
              <li className="nav-item nav-tabs">
                <a
                  className="px-2 py-2 md:flex items-center text-2xl md:text-xl  text-white hover:opacity-75"
                >
                  <span className="cursor-display">Team</span>
                </a>
              </li>
              <li className="nav-item nav-tabs">
                <a
                  className="px-2 py-2 md:flex items-center text-2xl md:text-xl  text-white hover:opacity-75"
                >
                  <span className="cursor-display">Faq</span>
                </a>
              </li>
              <li className="nav-item twitter">
                <a href="https://twitter.com" target="_blank">
                  <BsTwitter />
                </a>
              </li>
              <li className="nav-item discord">
                <a href="https://discord.com" target="_blank">
                  <FaDiscord />
                </a>
              </li>
              <li className="nav-item instagram">
                <a href="https://instagram.com" target="_blank">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}