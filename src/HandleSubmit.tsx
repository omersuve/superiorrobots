import { useWalletNfts } from "@nfteyez/sol-rayz-react";
import { createConnectionConfig } from '@nfteyez/sol-rayz'
import { clusterApiUrl } from '@solana/web3.js';

const connection = createConnectionConfig(clusterApiUrl("mainnet-beta"));

export default function HandleSubmit(walletAddress : string) {
    const { nfts, isLoading, error } = useWalletNfts({publicAddress: walletAddress, connection});
  
    if (error) return <div>Have some error</div>
    if (isLoading) return <div>Loading...</div>
  
    return (
      <div>Wallet have {nfts?.length} NFTs</div>
    )
}