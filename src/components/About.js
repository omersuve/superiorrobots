import React from 'react'
import icon from '../assets/img/avatar1.png'

export default function About() {

    return (
        <div className="bg-all bg-sett flex justify-between items-center mx-auto text-center py-5 px-5 pt-5 p-5 mt-20" name="about" id="about">
            <div className='ml-20'>
                <img src={icon} />
            </div>
            <div className='text ml-auto'>
                <h1 className="text-4xl md:text-8xl text-fonto text-center">Superior Robots</h1>
                <h2 className="text-base md:text-3xl text-sm text-fontw text-center py-3 py-3 px-5 md:px-36 lg:px-72 text-fonto">It’s 2046.The world is consumed by cheap pixel rugs and cash-grab derivatives run by AI. One project every second. 4444 humans decided they had enough of this; they wanted to ascend. Day after day they began macrodosing Magic Mushies, unlocking brain power never seen before. They evolved to a point where they knew how to defeat the AI. They had to create REAL community, REAL friendship, and REAL utility the only cost being, they were now giant fucking mushrooms. Albeit; Magic Mushrooms.</h2>
            </div>
        </div>
    )
}