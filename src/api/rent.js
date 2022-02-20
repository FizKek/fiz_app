import registry from "../abis/Registry.json";
import dai from "../abis/DAI.json";
import { ethers } from "ethers";
import { ERC721TokenAddress, RegistryAddress, DAIAddress } from "../constants";

function timeout(delay) {
  return new Promise((res) => setTimeout(res, delay));
}

export async function rent(tokenId) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const signerAddress = await signer.getAddress();

  const Registry = new ethers.Contract(
    RegistryAddress,
    registry["abi"],
    signer
  );

  const DAI = new ethers.Contract(
    DAIAddress,
    dai["abi"],
    signer
  );

  await DAI.faucet({from: signerAddress})
  await DAI.approve(RegistryAddress, "1000000000000000000", {
    from: signerAddress,
  })
    .then((tx) => {
      tx.wait();
    })
    .catch((err) => {
      console.log(err);
    });
  await timeout(500);
  
  // const landingID = await Registry.laningID();

  await Registry.rent([0], [ERC721TokenAddress], [tokenId], [1], [1], [1], {
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
