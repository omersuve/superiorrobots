import React, { Component, useState, useEffect } from 'react'
import { useWalletNfts } from "@nfteyez/sol-rayz-react";
import type { Options } from "@nfteyez/sol-rayz";
import { createConnectionConfig } from '@nfteyez/sol-rayz'
import { Connection, clusterApiUrl, LAMPORTS_PER_SOL } from '@solana/web3.js';
import HandleSubmit from './HandleSubmit';

export default class EnterPubkey extends Component<{}, { walletAddress: string }> {
    constructor(props : any) {
      super(props);
      this.state = {walletAddress: ''};
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event : any) {
      this.setState({walletAddress: event.target.value});
    }

    render() {
      return (
        <div>
             <div className='text-center game'>
                 <input type="text" id='wallet-address' placeholder='WalletAddress' onChange={this.handleChange} />
                 <div className='text-white'>
                    <button onClick={() => HandleSubmit(this.state.walletAddress)}>Load Your NFTs</button>
                    <br />
                    {this.state.walletAddress}
                 </div>
             </div>
         </div>
     )
   }
}