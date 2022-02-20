import erc_721_token from "../abis/ERC721Token.json";
import nft_staking  from "../abis/NFTStaking.json";
import { ethers } from "ethers";
import { ERC721TokenAddress, NFTStakingAddress } from "../constants";

function timeout(delay) {
  return new Promise( res => setTimeout(res, delay) );
}

export async function stake(tokenId) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const signerAddress = await signer.getAddress();

  const ERC721Token = new ethers.Contract(
    ERC721TokenAddress,
    erc_721_token["abi"],
    signer
  );
  const NFTStaking = new ethers.Contract(
    NFTStakingAddress,
    nft_staking["abi"],
    signer
  );

  await ERC721Token.approve(NFTStakingAddress, tokenId, {
    from: signerAddress,
  })
    .then((tx) => {
      tx.wait();
    })
    .catch((err) => {
      console.log(err);
    });
  await timeout(500);

  await NFTStaking.stake(tokenId, 7 * 24 * 60 * 60, {
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