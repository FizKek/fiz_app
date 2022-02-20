import erc_721_token from "../abis/ERC721Token.json";
import nft_staking  from "../abis/NFTStaking.json";
import { ethers } from "ethers";
import { ERC721TokenAddress, NFTStakingAddress } from "../constants";


export async function claim(tokenId) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const signerAddress = await signer.getAddress();

  const NFTStaking = new ethers.Contract(
    NFTStakingAddress,
    nft_staking["abi"],
    signer
  );

  ERC721Token.approve(NFTStakingAddress, tokenId, {
    from: signerAddress,
  })
    .then((tx) => {
      tx.wait();
    })
    .catch((err) => {
      console.log(err);
    });

  return;
}

export async function unstake(tokenId) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const signerAddress = await signer.getAddress();

  const NFTStaking = new ethers.Contract(
    NFTStakingAddress,
    nft_staking["abi"],
    signer
  );

  NFTStaking.unstake(tokenId, {
    from: signerAddress,
  })
    .then((tx) => {
      tx.wait();
    })
    .catch((err) => {
      console.log(err);
    });
  return;
}