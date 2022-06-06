import React from "react";
import { FaDiscord, FaInstagram } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import blacklogo from '../assets/img/logo.png'
import rob from '../assets/img/rob.png'
import sup from '../assets/img/sup.png'
import home from '../assets/img/home.png'
import origin from '../assets/img/origin.png'
import blueprint from '../assets/img/blueprint.png'
import stake from '../assets/img/stake.png'
import supr from '../assets/img/supr.png'
import team from '../assets/img/team.png'
import faq from '../assets/img/faq.png'


export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex items-center justify-between mr-10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="logo-and-text">
            <a href="/">
              <button className="flex items-center">
                <img src={blacklogo} className="logo" alt="logo" />
                <div className="column mr-5">
                  <img src={sup} className="sup" alt="sup" />
                  <img src={rob} className="rob" alt="rob" />
                </div>
              </button>
            </a>
          </div>
          <div
            className={
              "lg:flex md:flex-grow items-center w-auto" +
              (navbarOpen ? "h-full items-center mx-auto justify-center text-center " : " hidden")
            }>
            <ul className="md:flex md:flex-col lg:flex-row md:list-none lg:ml-auto" >
              <li className="nav-item nav-tabs tab-home">
                <a
                  className="px-2 py-2 md:flex items-center hover:opacity-75"
                  href="/"
                >
                  <img src={home} className="cursor-display" />
                </a>
              </li>
              <li className="nav-item nav-tabs tab-origin">
                <a
                  className="px-2 py-2 md:flex items-center text-2xl md:text-xl  text-white hover:opacity-75 text-center"
                >
                  <img src={origin} className="cursor-display" />
                </a>
              </li>

              <li className="nav-item nav-tabs tab-blueprint">
                <a
                  className="px-2 py-2 md:flex items-center text-2xl md:text-xl  text-white hover:opacity-75"
                  href="https://docs.superiorrobots.xyz/"
                >
                  <img src={blueprint} className="cursor-display" />
                </a>
              </li>
              <li className="nav-item nav-tabs no-hover-tab">
                <a
                  className="px-2 py-2 md:flex items-center text-2xl md:text-xl text-white hover:opacity-75"
                >
                  <img src={stake} className="cursor-display tab-stake" />
                </a>
              </li>
              <li className="nav-item nav-tabs no-hover-tab">
                <a
                  className="px-2 py-2 md:flex items-center text-2xl md:text-xl  text-white hover:opacity-75"
                >
                  <img src={supr} className="cursor-display tab-supr" />
                </a>
              </li>
              <li className="nav-item nav-tabs">
                <a
                  className="px-2 py-2 md:flex items-center text-2xl md:text-xl  text-white hover:opacity-75"
                >
                  <img src={team} className="cursor-display tab-team" />
                </a>
              </li>
              <li className="nav-item nav-tabs">
                <a
                  className="px-2 py-2 md:flex items-center text-2xl md:text-xl  text-white hover:opacity-75"
                  href="faq"
                >
                  <img src={faq} className="cursor-display tab-faq" />
                </a>
              </li>
              <li className="nav-item twitter">
                <a href="https://twitter.com/superiorrobots" target="_blank">
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