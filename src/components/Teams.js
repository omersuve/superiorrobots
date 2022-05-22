import react, { Fragment, useState } from 'react'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Navbar from './Navbar';

export default function Teams() {
    return (
        <div>
            <Navbar />
            <div className="flex justify-center" name="teams" id="teams">
                <div className="teams-margin flex flex-col">
                    <div className="flex flex-col">
                        <div className="container max-w-7xl px-4">
                            <div className="flex flex-wrap justify-center text-center mb-8">
                                <div className="w-full lg:w-6/12 px-4">
                                    <h1 className="text-fonto md:text-4xl mb-4">
                                        Meet the Team
                                    </h1>
                                    <p className="text-fontw md:text-xl">
                                        We have a well-experienced team in raising awareness.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap team-logos">
                                <div className="w-full md:w-4/12 lg:w-4/12 mb-6 px-6 sm:px-6 lg:px-4">
                                    <div className="flex flex-col team-item">
                                        <a>
                                            <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80" />
                                        </a>
                                        <div className="text-center mt-6">
                                            <h1 className="text-fonto md:text-2xl mb-1">
                                                Mind bot
                                            </h1>
                                            <div className="text-fontw md:text-xl subtext">
                                                Founder
                                            </div>
                                            <div className="flex items-center justify-center duration-300">
                                                <a href="#" className="flex rounded-full hover:text-sky-600 h-10 w-10">
                                                    <span className="mx-auto mt-2"><FaLinkedin size={"24px"} /></span>
                                                </a>
                                                <a href="#" className="flex rounded-full  hover:text-cyan-400 h-10 w-10">
                                                    <span className=" mx-auto mt-2"><FaTwitter size={"24px"} /></span>
                                                </a>
                                                <a href="#" className="flex rounded-full hover:text-orange-400 h-10 w-10">
                                                    <span className=" mx-auto mt-2"><FaInstagram size={"24px"} /></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full md:w-4/12 lg:w-4/12 mb-6 px-6 sm:px-6 lg:px-4">
                                    <div className="flex flex-col team-item">
                                        <a>
                                            <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80" />
                                        </a>
                                        <div className="text-center mt-6">
                                            <h1 className="text-fonto md:text-2xl mb-1">
                                                Emotion bot
                                            </h1>
                                            <div className="text-fontw md:text-xl subtext">
                                                Styler
                                            </div>
                                            <div className="flex items-center justify-center duration-300">
                                                <a href="#" className="flex rounded-full  hover:text-sky-600 h-10 w-10">
                                                    <span className="mx-auto mt-2"><FaLinkedin size={"24px"} /></span>
                                                </a>
                                                <a href="#" className="flex rounded-full hover:text-cyan-400 h-10 w-10">
                                                    <span className=" mx-auto mt-2"><FaTwitter size={"24px"} /></span>
                                                </a>
                                                <a href="#" className="flex rounded-full hover:text-orange-400 h-10 w-10">
                                                    <span className=" mx-auto mt-2"><FaInstagram size={"24px"} /></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full md:w-4/12 lg:w-4/12 mb-6 px-6 sm:px-6 lg:px-4">
                                    <div className="flex flex-col team-item">
                                        <a>
                                            <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80" />
                                        </a>
                                        <div className="text-center mt-6">
                                            <h1 className="text-fonto md:text-2xl mb-1">
                                                Consciousness bot
                                            </h1>
                                            <div className="text-fontw md:text-xl subtext">
                                                Developer
                                            </div>
                                            <div className="flex items-center justify-center duration-300">
                                                <a href="#" className="flex rounded-full hover:text-sky-600  h-10 w-10">
                                                    <span className="mx-auto mt-2"><FaLinkedin size={"24px"} /></span>
                                                </a>
                                                <a href="#" className="flex rounded-full  hover:text-cyan-400 h-10 w-10">
                                                    <span className=" mx-auto mt-2"><FaTwitter size={"24px"} /></span>
                                                </a>
                                                <a href="#" className="flex rounded-full hover:text-orange-400 h-10 w-10">
                                                    <span className=" mx-auto mt-2"><FaInstagram size={"24px"} /></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}