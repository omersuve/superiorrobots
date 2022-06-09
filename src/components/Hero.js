import logo from '../assets/img/logo.png'
import { FaCopyright } from 'react-icons/fa';

export default function Hero() {
	return (
		<div className="hero-text">
			<img src={logo} className="logo-mobile" alt='logo' />
			<h1 className='mobile-logo-text'>Superior Robots</h1><br></br>
			<div>
				<p className="text-base md:px-25">

					Prepare for the Robots that will die standin<span>'</span> up<br></br>

				</p>
				<p className="text-base md:px-25">

					Artificial intelligence has burnt the breeze<br></br>

				</p>
				<p className="text-base md:px-25 text-quote">

					<span>"</span>If you climb in the saddle<span>,</span> be ready for the ride<span>"</span><br></br>

				</p>
			</div >
			<div className="mx-auto">
				<button className="py-1 rounded-3xl text-lg tracking-wider mintNow">Coming soon</button>
			</div>
			<div className='allrights'>
				<div className="flex justify-center items-center"><span><FaCopyright size={"16px"} /></span>&nbsp; 2022<span>,</span> Superior Robots</div>
				<div className="flex justify-center items-center">All rights reserved<span>.</span></div>
			</div>
		</div>
	)
}			