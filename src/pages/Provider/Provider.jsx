import styles from "../Main/DivCentered.module.css";
import React from "react";
import { Card, CardGroup } from "react-bootstrap";

import { stake } from "../../api/stake";

import {
  Gallery as GalleryStyled,
  GalleryHead,
  GalleryHeadTitle,
  GalleryHeadCounter,
  GalleryGrid,
} from "../../components/Gallery/Gallery.module.scss";
import { Button } from "../../components/Button/Button";

const links = [
  "https://drive.google.com/file/d/1MOXpy0pAwYItolHRPZNosxcD4wYV1YMG/preview",
  "https://drive.google.com/file/d/1UZ11rrD3kyOkLr3oTgszF9sdYLAmp53X/preview",
  "https://drive.google.com/file/d/1PY_Hb1sL4WusSZVVtvfVH1oCCixX7VJj/preview",
  "https://drive.google.com/file/d/1TPiZTaI7ljZV4g_F-B690T1c_bes1Fa-/preview",
  "https://drive.google.com/file/d/1a1JI3sFJxa8hra0heZKpG2KnJ8mj89Z4/preview",
  "https://drive.google.com/file/d/1W-eC9He6SPgvxzAMDjWqOk5j_bI06cU0/preview",
];

const stakeHandler = () => {
  stake(1);
};

export function Provider() {
  return (
    <div className={GalleryStyled}>
      <div className={GalleryHead}>
        <div className={GalleryHeadTitle}>Вы провайдер. Вот ваши NFT: </div>
        <div className={GalleryHeadCounter}></div>
      </div>
      <CardGroup>
        {Array.from({ length: 3 }).map((_, idx) => (
          <Card>
            <iframe
              src={links[idx]}
              width="320"
              height="240"
              allow="autoplay"
            />
            <Card.Body>
              <Card.Title>NFT TOKEN #{idx}</Card.Title>
            </Card.Body>
            <Button
              id={"stakeButton" + idx.toString()}
              onClick={() => {
                stakeHandler();
                const elementId = "stakeButton" + idx.toString();
                document.getElementById(elementId).innerHTML = "is staked";
              }}
            >
              {" "}
              stake
            </Button>

            <Card.Footer>
              {" "}
              <br />
              <br />{" "}
            </Card.Footer>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}
