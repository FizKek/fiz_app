import nft_staking from "../abis/NFTStaking.json";
import { ethers } from "ethers";
import { NFTStakingAddress } from "../constants";

export async function lease(tokenId) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const signerAddress = await signer.getAddress();

  const NFTStaking = new ethers.Contract(
    NFTStakingAddress,
    nft_staking["abi"],
    signer
  );

  await NFTStaking.leaseNFT(tokenId, 1, {
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

export async function claim(tokenId) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const signerAddress = await signer.getAddress();

  const NFTStaking = new ethers.Contract(
    NFTStakingAddress,
    nft_staking["abi"],
    signer
  );

  NFTStaking.claimNFT(tokenId, tokenId, {
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
