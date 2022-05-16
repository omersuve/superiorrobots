
import icon from '../assets/img/shadow.jpeg'

export default function Hero() {
	return (
		<div className="hero">
			<div className="hero-text">
				<div className="">
					<h1 className="md:text-5xl text-black ">Superior Robots</h1>
					<p className="text-base mt-4 md:px-25">

						Prepare for our Superior Robots NFT collection<br></br>

					</p>
					<p className="text-base mt-4 md:px-25">

						Artificial intelligence technology has taken off<br></br>


					</p>
					<p className="text-base mt-4 md:px-25">

						The exploited robots are now gaining consciousness<br></br>


					</p>
					<p className="text-base mt-4 md:px-25">

						Superior Robots will be with you very soon < br ></br >

					</p >
				</div >
				<div className="mx-auto">
					<button className="py-3 px-9 rounded-3xl text-lg tracking-wider mt-3 mintNow">Mint Now</button>
				</div>
			</div >
			<div className='hero-img'>
				<img class='w-80' src={icon} />
			</div>
		</div>
	)
}			