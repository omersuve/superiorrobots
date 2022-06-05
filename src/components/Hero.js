import logo from '../assets/img/logo.png'

export default function Hero() {
	return (
		<div className="hero-text">
			<img src={logo} className="logo-mobile" alt='logo' />
			<h1 className='mobile-logo-text'>Superior Robots</h1><br></br>
			<div>
				<p className="text-base md:px-25">

					Prepare for the Robots that will die standin up<br></br>

				</p>
				<p className="text-base md:px-25">

					Artificial intelligence has burnt the breeze<br></br>


				</p>
				<p className="text-base md:px-25">

					Lords are gaining consciousness in Apple Pie Order<br></br>


				</p>
				<p className="text-base md:px-25">

					coming soon < br ></br >

				</p >
			</div >
			<div className="mx-auto">
				<button className="py-1 rounded-3xl text-lg tracking-wider mintNow">Mint Now</button>
			</div>
		</div>
	)
}			