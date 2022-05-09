import React from 'react'
import icon from '../assets/img/shadow.jpeg'

export default function About() {

    return (
        <div className="bg-all bg-sett flex justify-between items-center mx-auto text-center py-5 px-5 pt-5 p-5 mt-20" name="about" id="about">
            <div className='ml-20'>
                <img className='img' src={icon} />
            </div>
            <div className='text ml-auto'>
                <h1 className="text-4xl md:text-8xl text-fonto text-center">STORY</h1>
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
    )
}