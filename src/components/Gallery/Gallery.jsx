import {
  Gallery as GalleryStyled,
  GalleryHead,
  GalleryHeadTitle,
  GalleryHeadCounter,
  GalleryGrid,
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

  return (
    <div className={GalleryStyled}>
      <div className={GalleryHead}>
        <div className={GalleryHeadTitle}>{contract.name}</div>
        <div className={GalleryHeadCounter}>
        </div>
      </div>

      <div className={GalleryGrid}>
        <CardDeck/>
        <CardDeck/>
        <CardDeck/>
      </div>
    </div>
  );
}
