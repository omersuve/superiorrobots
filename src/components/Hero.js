import logo2 from '../assets/img/logo2.png'

export default function Hero() {
	return (
		<div className="hero-text">
			<img src={logo2} className="logo-mobile" />
			<h1 className='mobile-logo-text'>Superior Robots</h1><br></br>
			<div>
				<p className="text-base md:px-25">

					Prepare for our Superior Robots NFT collection<br></br>

				</p>
				<p className="text-base md:px-25">

					Artificial intelligence technology has taken off<br></br>


				</p>
				<p className="text-base md:px-25">

					The exploited robots are now gaining consciousness<br></br>


				</p>
				<p className="text-base md:px-25">

					Superior Robots will be with you very soon < br ></br >

				</p >
			</div >
			<div className="mx-auto">
				<button className="py-1 rounded-3xl text-lg tracking-wider mintNow">Mint Now</button>
			</div>
		</div>
	)
}			