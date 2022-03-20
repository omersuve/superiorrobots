import React from 'react'
import tokenFront from "../assets/img/tokenFront.png"
import token from "../assets/img/token.png"

export default function Token() {
  return (<div className="bg-all  justify-center items-center mx-auto text-center mt-10" name="tokenomics" id="tokenomics">
    <h1 className="text-7xl md:text-7xl text-fonto text-center mt-10 mb-5">$
      <span>AWR</span>
    </h1>

    <div className=" shadow-lg items-center justify-center rounded md:flex px-15">
      <div className="md:w-1/3 py-5 px-5 texts">
        <h1 className="text-fontw text-white text-2xl">WHAT IS $AWR?</h1>
        <h2 className="text-fontw text-white text-sm px-10">$AWR is the FIRST Multi-Project Utility Token in Solana NFTs. Initially created by Cat Cartel, $AWR has since become the utility token for 7 projects currently on the Solana Network. Magic Mushies, Solana Money Boys, Bored Ape Social Club, Saibogu Corp, and Dino Kingz being the latest!</h2>
      </div>
      <div class="flip-box md:w-1/3">
        <div class="flip-box-inner">
          <div class="flip-box-front">
            <img src={tokenFront} className='mx-auto items-center justify-center w-40' alt='token' />
          </div>
          <div class="flip-box-back">
            <img src={token} className='mx-auto items-center justify-center w-40' alt='token' />
          </div>
        </div>
      </div>
      <div className="md:w-1/3 py-5 px-5  texts">
        <h1 className="text-fontw text-white text-2xl">WHAT IS $AWR?</h1>
        <h2 className="text-fontw text-white text-sm px-10">$AWR is the FIRST Multi-Project Utility Token in Solana NFTs. Initially created by Cat Cartel, $AWR has since become the utility token for 7 projects currently on the Solana Network. Magic Mushies, Solana Money Boys, Bored Ape Social Club, Saibogu Corp, and Dino Kingz being the latest!</h2>
      </div>
    </div>
  </div>)
}