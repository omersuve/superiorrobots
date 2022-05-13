
import icon from '../assets/img/shadow.jpeg'

export default function Hero() {
	return (
		<div className="flex justify-between items-center mx-auto py-5 px-5 pt-5 p-5">
			<div className="w-full mx-auto justify-center items-center flex-col py-15 pt-5 p-20 ml-20 hero">
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
			<div>
				<img className='hero-img' src={icon} />
			</div>
		</div>
	)
}			