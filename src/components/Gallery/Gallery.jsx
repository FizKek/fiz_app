import {
  Gallery as GalleryStyled,
  GalleryHead,
  GalleryHeadTitle,
  GalleryHeadCounter,
  GalleryGrid,
} from "./Gallery.module.scss";

import { Card, CardGroup } from "react-bootstrap";
import React from "react";

import { Button } from "../Button/Button";
import { lease } from "../../api/lease";

const leaseNFTHandler = () => {
  lease(1);
};

const links = [
  "https://drive.google.com/file/d/1MOXpy0pAwYItolHRPZNosxcD4wYV1YMG/preview",
  "https://drive.google.com/file/d/1UZ11rrD3kyOkLr3oTgszF9sdYLAmp53X/preview",
  "https://drive.google.com/file/d/1PY_Hb1sL4WusSZVVtvfVH1oCCixX7VJj/preview",
  "https://drive.google.com/file/d/1TPiZTaI7ljZV4g_F-B690T1c_bes1Fa-/preview",
  "https://drive.google.com/file/d/1a1JI3sFJxa8hra0heZKpG2KnJ8mj89Z4/preview",
  "https://drive.google.com/file/d/1W-eC9He6SPgvxzAMDjWqOk5j_bI06cU0/preview",
];

export function Gallery() {
  return (
    <div className={GalleryStyled}>
      <div className={GalleryHead}>
        <div className={GalleryHeadTitle}>Vault with available NFT</div>
        <div className={GalleryHeadCounter}></div>
      </div>

      <div className={GalleryGrid}>
        <CardGroup>
          {Array.from({ length: 6 }).map((_, idx) => (
            <Card>
              <iframe
                src={links[idx]}
                width="320"
                height="240"
                allow="autoplay"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Button id={"leaseButton" + idx.toString()}
                  onClick={()=> {
                    leaseNFTHandler()
                    const elementId = "leaseButton" + idx.toString();
                    document.getElementById(elementId).innerHTML = "is leased";
                  }}> 
                Lease </Button>
                <Card.Footer>
                  {" "}
                  <br />
                  <br />{" "}
                </Card.Footer>
              </Card.Body>
            </Card>
          ))}
        </CardGroup>
      </div>

      <br />
      <br />
      <br />
      <Button> Claim NFT and rental fees </Button>
    </div>
  );
}
