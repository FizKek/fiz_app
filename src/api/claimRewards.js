import nft_staking from "../abis/NFTStaking.json";
import { ethers } from "ethers";
import { NFTStakingAddress } from "../constants";

export async function claimRewards(tokenId) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const signerAddress = await signer.getAddress();

  const NFTStaking = new ethers.Contract(
    NFTStakingAddress,
    nft_staking["abi"],
    signer
  );

  await NFTStaking.claimRewards(tokenId, "800000000000000", {
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
