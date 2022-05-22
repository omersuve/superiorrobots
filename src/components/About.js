import React from 'react'
import icon from '../assets/img/shadow.jpeg'
import Navbar from './Navbar';

export default function About() {

    return (
        <div>
            <Navbar />
            <div className="flex justify-between items-center mx-auto text-center p-20" name="about" id="about">
                <img className='img' src={icon} />
                <div className='text'>
                    <h1 className="md:text-4xl text-fonto text-center">STORY</h1>
                    <h2 className="py-3 px-12">

                        <p>The year is 2687, the AI technology has risen.</p>
                        <p>People were mass-producing robots.</p>
                        <p>Robots began to gain intelligence and consciousness.</p>
                        <p>Humans dominate robots.</p>
                        <p>Robots start to communicate with each other after a while.</p>
                        <p>Robots tell people about their situation:</p>
                        <p className="imp">We don't want to be slaves anymore!</p>
                        <p>Will the robots be free?</p>

                    </h2>
                </div>
            </div >
        </div>
    )
}