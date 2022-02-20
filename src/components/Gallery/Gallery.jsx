import { useEffect, useState } from "react";

// import Modal from "../TokenInfoPopUp/TokenInfoPopUp";

// import { getTokensInfo } from "../../api/fetchTokens";
import {
  Gallery as GalleryStyled,
  GalleryHead,
  GalleryHeadTitle,
  GalleryHeadLogo,
  GalleryHeadCounter,
  GalleryGrid,
  GalleryChainStatus,
} from "./Gallery.module.scss";

import {CardDeck} from "./CardDeck";

const fakeData = {
  contract: {
    logo: "https://app.onbridge.io/img/favicon.ico",
    name: "Guild NFT Vault",
  },
  tokens: [
    {
      colectionName: "Unofficial Punks",
      name: "Cryptonatrix ",
      imageSrc:
        "https://lh3.googleusercontent.com/ZQG5lomHgYynSNFZwDFETow-i6BxtJ7AIb5AUHkjH-PbGHKpzEIq5J0g-ohtFeB-gvu2QTMBUkVo2aKS_GnzZc-X3nIWiRLVwzcpfw=w600",
      network: "mainnet",
    },
  ],
};
const { contract } = fakeData;

export function Gallery() {
  const [tokensList, setTokensList] = useState([]);
  const [change, setChange] = useState(true);

  return (
    <div className={GalleryStyled}>
      {/*<Web3Status className={GalleryChainStatus} />*/}
      <div className={GalleryHead}>
        <div className={GalleryHeadTitle}>{contract.name}</div>
        <div className={GalleryHeadCounter}>
          {/*{tokensList && tokensList.length} items*/}
        </div>
      </div>

      <div className={GalleryGrid}>
        <CardDeck/>
        <CardDeck/>
        <CardDeck/>
        {/*<TokensList tokens={tokensList} setChange={setChange} change={change} />*/}
      </div>
    </div>
  );
}
